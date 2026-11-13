const selectors = require('../../selectors');
const settingsConfig = require('config');

const saveMenuTemplate = require('./templates/save_theme_menu.tpl');

module.exports = {
  public: [ 'switch', 'next', 'previous' ],

  savedThemesTemplate: require('./templates/saved_themes.tpl'),
  themeKeybindsTemplate: require('./templates/theme_keybinds.tpl'),

  async initialize() {
    // Create the user stylesheet and update it when dependent config values are changed.
    Player.theme.render();
    Player.userTemplate.maintain(Player.theme, 'customCSS');
    Player.theme.validateOrder();

    // Observe changes to stylesheets and classes to re-apply the board theme dynamically.
    // Ignore the player's own stylesheets: applyBoardTheme rewrites them, and reacting to
    // that re-ran it (and re-rendered the settings) every 500ms, forever.
    const applyBoardTheme = _.debounce(() => Player.theme.applyBoardTheme(), 500);
    // Also ignore the title and favicon, which 4chan X rewrites for every new post.
    const isOwn = node => node && ([ Player.stylesheet, Player.varsCSS, Player.userStylesheet ].some(el => el && (el === node || el.contains(node)))
      || node.nodeName === 'TITLE' || (node.parentNode && node.parentNode.nodeName === 'TITLE')
      || (node.nodeName === 'LINK' && /icon/i.test(node.getAttribute('rel') || '')));
    const observer = new MutationObserver(mutations => {
      const external = mutations.some(m => !isOwn(m.target)
        && !(m.type === 'childList' && [ ...m.addedNodes, ...m.removedNodes ].every(isOwn)));
      external && applyBoardTheme();
    });

    // Watch for stylesheet changes in head
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href', 'disabled', 'rel']
    });

    // Watch for class changes on html and body (often used for theme toggling)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'style']
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  },

  render() {
    Player.userStylesheet = Player.userStylesheet || _.element('<style id="sound-player-user-css"></style>', document.head);
    Player.userStylesheet.innerHTML = Player.userTemplate.build({
      template: '/* Sounds Player User CSS */\n\n' + Player.config.customCSS,
      sound: Player.playing,
      ignoreButtons: true,
      ignoreDisplayBlocks: true,
      ignoreSoundName: true,
      ignoreVersion: true
    });
  },

  forceBoardTheme() {
    Player.theme.applyBoardTheme({ force: true });
    Player.settings.save();
  },

  /**
	 * Get colors from the board theme.
	 */
  applyBoardTheme(opts = {}) {
    // Create a reply element to gather the style from
    const div = _.element(`<div class="${selectors.styleFetcher}"></div>`, document.body);
    const style = document.defaultView.getComputedStyle(div);

    // Make sure the style is loaded. Remove the fetcher element first or one is left in
    // the page each time this runs (the theme observer and every player toggle call it).
    if (style.backgroundColor === 'rgba(0, 0, 0, 0)') {
      div.remove();
      return;
    }
    Object.assign(style, { page_background: window.getComputedStyle(document.body).backgroundColor });

    // Apply the computed style to the color config.
    const colorSettingMap = {
      'colors.text': style.color,
      'colors.background': style.backgroundColor,
      'colors.odd_row': style.backgroundColor,
      'colors.border': style.borderBottomColor,
      // If the border is the same color as the text don't use it as a background color.
      'colors.even_row': style.borderBottomColor === style.color ? style.backgroundColor : style.borderBottomColor,
      // Set this for use in custom css and templates
      'colors.page_background': window.getComputedStyle(document.body).backgroundColor,
      // Playing row is a more saturated and brighter odd row.
      'colors.playing': (() => {
        const oddRowHSV = Player.colorpicker.rgb2hsv(...Player.colorpicker.parseRGB(style.backgroundColor));
        const playingRGB = Player.colorpicker.hsv2rgb(
          oddRowHSV[0],
          Math.min(1, oddRowHSV[1] + 0.25),
          Math.min(1, oddRowHSV[2] + 0.15)
        );
        return `rgb(${playingRGB[0]}, ${playingRGB[1]}, ${playingRGB[2]})`;
      })()
    };
    let changed = false;
    settingsConfig.find(s => s.property === 'colors').settings.forEach(setting => {
      const updateConfig = opts.force || (setting.default === _.get(Player.config, setting.property));
      colorSettingMap[setting.property] && (setting.default = colorSettingMap[setting.property]);
      // Player.set returns nothing when the value is unchanged.
      updateConfig && Player.set(setting.property, setting.default, { bypassSave: true, bypassRender: true, bypassStylesheet: true }) && (changed = true);
    });

    // Clean up the element.
    document.body.removeChild(div);

    // Only rewrite the CSS and re-render the settings when a colour actually changed: a
    // re-render closes an open colour picker and drops focus from the settings inputs.
    if (!opts.bypassRender && (changed || opts.force)) {
      // Updated the stylesheet.
      Player.display.updateCSSVars();
      // Re-render the settings.
      Player.settings.render();
    }
  },

  /**
	 * Switch to the next theme, wrapping round to the beginning.
	 */
  next() {
    const order = [ 'Default' ].concat(Player.config.savedThemesOrder);
    const cIndex = order.indexOf(Player.config.selectedTheme);
    const next = order[(cIndex + order.length + 1) % order.length];
    Player.theme.switch(next);
  },

  /**
	 * Switch to the previous theme, wrapping round to the end.
	 */
  previous() {
    const order = [ 'Default' ].concat(Player.config.savedThemesOrder);
    const cIndex = order.indexOf(Player.config.selectedTheme);
    const previous = order[(cIndex + order.length - 1) % order.length];
    Player.theme.switch(previous);
  },

  /**
	 * Switch theme.
	 * @param {String} name The name of the theme to switch to.
	 * @param {Object} opts Options passed to player.load
	 */
  switch(name) {
    if (name !== 'Default' && !Player.config.savedThemes[name]) {
      return Player.logError(`Theme '${_.escHTML(name)}' does not exist.`, null, 'warning');
    }
    const previous = Player.config.savedThemes[Player.config.selectedTheme] || {};
    // Apply only the settings a theme can hold. Themes can be imported or shared, and one
    // with other settings (the allow list, upload hosts) would change those too.
    const next = name === 'Default' ? {} : Player.theme._themeFieldsOf(Player.config.savedThemes[name]);
    Player.set('selectedTheme', name);
    // Put back what the previous theme set and this one doesn't, so it doesn't carry over
    // (switching from Fixed Playlist kept its 4chan X header controls setting, for
    // example, whether going to Default or to another theme). Default always gets the
    // default templates; other settings only while they still have the previous theme's
    // value, so edits made after selecting it (e.g. new theme keybinds) are kept.
    const props = new Set(name === 'Default' ? [ 'headerTemplate', 'footerTemplate', 'rowTemplate', 'chanXTemplate', 'customCSS' ] : []);
    settingsConfig.flatMap(s => s.settings || [ s ]).forEach(s => {
      const themeValue = s.property && _.get(previous, s.property);
      themeValue !== undefined && _.get(next, s.property) === undefined
        && _.isEqual(_.get(Player.config, s.property), themeValue) && props.add(s.property);
    });
    props.forEach(prop => {
      Player.settings.reset(prop, { bypassRender: true, bypassStylesheet: true });
    });
    if (name === 'Default') {
      Player.settings.render();
      Player.display.updateCSSVars();
    } else {
      Player.settings.load(next);
    }
  },

  /**
	 * The part of a theme's data that themes are allowed to set.
	 */
  _themeFieldsOf(theme) {
    const fields = {};
    (function collect(settings, parent) {
      settings.forEach(s => {
        if (s.settings) {
          return collect(s.settings, s);
        }
        const allowed = s.themeField || (s.allowInTheme !== undefined ? s.allowInTheme : parent && parent.allowInTheme);
        if (!allowed || !s.property) {
          return;
        }
        const value = _.get(theme || {}, s.property);
        value !== undefined && _.set(fields, s.property, value);
      });
    })(settingsConfig);
    return fields;
  },

  /**
	 * Make sure the saved themes order contains all and only the saved themes, without duplicates.
	 */
  validateOrder() {
    const order = Player.config.savedThemesOrder;
    let _i;
    Player.config.savedThemesOrder = order
      .concat(Object.keys(Player.config.savedThemes))
      .filter((name, i) => Player.config.savedThemes[name] && (_i = order.indexOf(name), _i === -1 || _i === i));
  },

  parseSwitch(newValue, bindings, e) {
    bindings = [ ...bindings ];
    const themeName = e.currentTarget.parentNode.dataset.name;
    if (themeName !== 'Default' && !Player.config.savedThemes[themeName]) {
      Player.logError(`No theme named '${_.escHTML(themeName)}'.`, null, 'warning');
    }
    const keyDef = Player.hotkeys.parseKey(newValue);
    if (!keyDef.key) {
      bindings = bindings.filter(def => def.themeName !== themeName);
    } else {
      // Replace rather than modify the existing binding: modifying it in place made the
      // change compare equal to the stored value, so it was never saved, and it kept
      // modifiers from the previous key.
      const binding = { themeName, ...keyDef };
      const index = bindings.findIndex(def => def.themeName === themeName);
      index === -1 ? bindings.push(binding) : (bindings[index] = binding);
    }
    return bindings;
  },

  handleSwitch(e) {
    Player.theme.switch(e._binding.themeName);
  },

  moveUp: e => Player.theme._swapOrder(e, -1),
  moveDown: e => Player.theme._swapOrder(e, 1),
  _swapOrder(e, dir) {
    const name = e.currentTarget.closest('[data-theme]').dataset.theme;
    const order = Player.config.savedThemesOrder;
    const i = order.indexOf(name);
    if (i + dir >= 0 && i + dir < order.length) {
      [ order[i], order[i + dir] ] = [ order[i + dir], order[i] ];
      // CSS.escape the theme name — a name containing a quote would otherwise break
      // the attribute selector (SyntaxError) or match unintended rows.
      Player.$(`[data-theme="${CSS.escape(name)}"]`).style.order = i + dir;
      Player.$(`[data-theme="${CSS.escape(order[i])}"]`).style.order = i;
      Player.settings.set('savedThemes', Player.config.savedThemes, { bypassValidation: true, bypassRender: true });
    }
  },

  remove(e) {
    const themes = Player.config.savedThemes;
    const row = e.currentTarget.closest('[data-theme]');
    const name = row.dataset.theme;
    // Can't delete the default. It's not actually a stored theme.
    if (name === 'Default') {
      return Player.logError('Cannot delete the default theme. You can instead overwrite it.', null, 'warning');
    }
    // Switch away first, while its settings are still known, so they're put back.
    const wasSelected = Player.config.selectedTheme === name;
    wasSelected && Player.theme.switch('Default');
    // For default themes set null so we know to not include them.
    if (Player.settings.findDefault('savedThemes').default[name]) {
      themes[name] = null;
    } else {
      delete themes[name];
    }
    Player.config.savedThemesOrder = Player.config.savedThemesOrder.filter(_name => _name !== name);
    // Remove the row
    row.parentNode.removeChild(row);
    Player.settings.set('savedThemes', themes, { bypassValidation: true, bypassRender: true });
    // A removed theme can't stay selected (next/previous would start from a missing entry).
    if (wasSelected) {
      Player.settings.renderSetting(Player.settings.findDefault('savedThemes'));
    }
    // Its row in the theme keybinds list goes too.
    Player.settings.renderSetting(Player.settings.findDefault('hotkey_bindings.switchTheme'));
    // Remove hotkey binding. The previous code used `.find()` (which returns the
    // matching object) but then passed it as the index to `.splice()` — splice
    // coerces an object to NaN→0 and splice itself returns the REMOVED items, so
    // the original call removed binding[0] and persisted only the removed binding.
    const bindings = Player.config.hotkey_bindings.switchTheme;
    const bindingIndex = bindings.findIndex(def => def.themeName === name);
    if (bindingIndex !== -1) {
      const updated = bindings.slice(0, bindingIndex).concat(bindings.slice(bindingIndex + 1));
      Player.set('hotkey_bindings.switchTheme', updated, { bypassValidation: true });
    }
  },

  restoreDefaults() {
    Object.assign(Player.config.savedThemes, _.clone(Player.settings.findDefault('savedThemes').default));
    Player.theme.validateOrder();
    Player.set('savedThemes', Player.config.savedThemes, { bypassValidation: true });
  },

  showSaveOptions(e) {
    const open = Player.$(`.${ns}-theme-save-options`);
    if (open) {
      return Player.container.removeChild(open);
    }
    const el = _.element(saveMenuTemplate({ settingsConfig }), Player.container);
    // Kept to reposition against when the fields are toggled.
    Player.theme._saveOptionsAnchor = e.currentTarget;
    Player.position.showRelativeTo(el, e.currentTarget);
    Player.$(`.${ns}-save-theme-name`).focus();
  },

  toggleSaveFields() {
    Player.$(`.${ns}-theme-save-options`).classList.toggle('fields-collapsed');
    // The old lookup by an '@click' attribute never matched ('@click.prevent.stop').
    const anchor = Player.theme._saveOptionsAnchor;
    anchor && document.contains(anchor) && Player.position.showRelativeTo(Player.$(`.${ns}-theme-save-options`), anchor);
  },

  toggleSaveButtonText(e) {
    Player.$(`.${ns}-save-theme`).innerHTML = Player.config.savedThemes[e.currentTarget.value] ? 'Update' : 'Create';
  },

  /**
	 * Enter in the theme name box saves, like the Create/Update link.
	 */
  handleNameKey(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      Player.theme.save();
    }
  },

  save() {
    const name = Player.$(`.${ns}-save-theme-name`).value;
    if (!name) {
      return Player.logError('A name is required to save a theme.', null, 'warning');
    }
    // "Default" isn't a stored theme: a saved one by that name could be neither applied
    // nor deleted.
    if (name === 'Default') {
      return Player.logError('"Default" is reserved. Choose another name.', null, 'warning');
    }
    const checked = Player.$all(`.${ns}-theme-save-options input:checked`);
    const data = [ ...checked ].reduce((data, el) => _.set(data, el.value, _.get(Player.config, el.value)), {});
    Player.config.savedThemes[name] = data;
    Player.config.savedThemesOrder.indexOf(name) === -1 && Player.config.savedThemesOrder.push(name);
    Player.set('savedThemes', Player.config.savedThemes, { bypassValidation: true });
    Player.container.removeChild(Player.$(`.${ns}-theme-save-options`));
  }
};
