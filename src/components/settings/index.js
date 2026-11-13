const settingsConfig = require('config');
const migrations = require('../../migrations');
const settingTpl = require('./templates/setting.tpl');

const hosts = require('./hosts');

module.exports = {
  atRoot: [ 'set' ],
  public: [ 'set', 'export', 'import', 'reset', 'load' ],
  hosts,

  template: require('./templates/settings.tpl'),
  // A setting that can't be shown (a bad imported value) gets a row with a Reset link
  // instead of stopping the whole settings view, and the player with it, from rendering.
  settingTemplate(setting) {
    try {
      return settingTpl(setting);
    } catch (err) {
      console.error('[4chan sounds player] Could not show setting', setting && setting.property, err);
      const prop = setting && setting.property;
      return `<div class="${ns}-row ${ns}-setting" data-property="${_.escAttr(prop || '')}">`
        + `<div class="${ns}-col">${_.escHTML((setting && setting.title) || prop || 'A setting')} couldn't be shown.`
        + (prop ? ` <a href="#" @click.prevent='settings.reset("${_.escAttr(prop, true)}")'>Reset it</a>` : '')
        + '</div></div>';
    }
  },
  inputTemplates: {
    checkbox: require('./templates/inputs/checkbox.tpl'),
    input: require('./templates/inputs/input.tpl'),
    select: require('./templates/inputs/select.tpl'),
    textarea: require('./templates/inputs/textarea.tpl')
  },

  changelog: 'https://github.com/vampiricwulf/4chan-sounds-player/releases',
  groups: settingsConfig.reduce((groups, setting) => {
    if (setting.displayGroup) {
      groups[setting.displayGroup] || (groups[setting.displayGroup] = []);
      groups[setting.displayGroup].push(setting);
    }
    return groups;
  }, {}),

  async initialize() {
    Player.settings.view = 'Display';

    // Apply the board theme as default.
    Player.theme.applyBoardTheme({ bypassRender: true });

    // Load the config.
    const stored = await GM.getValue('settings') || {};
    await Player.settings.load(stored, {
      applyDefault: true,
      bypassAll: true
    });

    // VERSION is stored alongside the settings but isn't a setting itself, so read it
    // from the stored blob (Player.config never has it). load() reports corrupt JSON.
    let storedVersion;
    try {
      storedVersion = (typeof stored === 'string' ? JSON.parse(stored) : stored).VERSION;
    } catch (err) { /* reported by load() */ }
    if (storedVersion !== VERSION) {
      // Show update notifications.
      if (storedVersion && Player.config.showUpdatedNotification) {
        Player.alert(`4chan Sounds Player has been updated to <a href="${Player.settings.changelog}" target="_blank">version ${VERSION}</a>.`);
      }
      // Persist the new version (and any migration changes) now. load() above bypasses
      // saving, so without this the notification and migrations repeat on every page
      // load until some unrelated setting happens to change.
      Player.settings.save();
    }

    // Listen for the player closing to apply the pause on hide setting.
    Player.on('hide', function () {
      if (Player.config.pauseOnHide) {
        Player.pause();
      }
    });

    // Listen for changes from other tabs
    // Re-render only the settings that changed, leaving the one being edited alone: a full
    // re-render on every save elsewhere (toggling shuffle, resizing) wiped edits in progress.
    Player.syncTab('settings', value => Player.settings.load(value, {
      bypassSave: true,
      bypassRender: true,
      applyDefault: true,
      ignore: [ 'viewStyle' ]
    }).then(Player.settings._renderChanged));

    Player.on('rendered', Player.settings.setChangeListeners);
  },

  render() {
    const settingsContainer = Player.$(`.${ns}-settings`);
    _.elementHTML(settingsContainer, Player.settings.template());
    Player.settings.setChangeListeners();
  },

  renderSetting(settingConfig) {
    const settingEl = Player.$(`.${ns}-setting[data-property="${settingConfig.property}"]`);
    // Settings without a row (hidden ones) have nothing to re-render.
    if (!settingEl) {
      return;
    }
    const newEl = _.element(Player.settings.settingTemplate(settingConfig), settingEl, 'beforebegin');
    settingEl.parentNode.removeChild(settingEl);
    Player.settings.setChangeListeners(newEl);
  },

  /**
	 * Update a setting.
	 */
  set(property, value, { bypassAll, bypassValidation, bypassSave, bypassRender, silent, bypassStylesheet, settingConfig } = {}) {
    settingConfig = settingConfig || Player.settings.findDefault(property);
    const previous = _.get(Player.config, property);

    // Check if the value has actually changed.
    if (!bypassValidation && _.isEqual(previous, value)) {
      return;
    }

    // Set the new value.
    _.set(Player.config, property, value);

    // Trigger events, unless they are disabled in opts.
    if (!bypassAll) {
      !bypassStylesheet && settingConfig && settingConfig.updateCSSVars && Player.display.updateCSSVars();
      !silent && Player.trigger('config', property, value, previous);
      !silent && Player.trigger('config:' + property, value, previous);
      !bypassSave && Player.settings.save();
      !bypassRender && settingConfig.displayGroup && Player.settings.renderSetting(settingConfig);
      (!bypassRender || bypassRender === 'self') && settingConfig.dependentRender
				&& settingConfig.dependentRender.forEach(prop => Player.settings.renderSetting(Player.settings.findDefault(prop)));
    }
    return [ previous, value ];
  },

  /**
	 * Whether a page script may change a setting through the PlayerEvent API, and the
	 * value it gives is valid: only switches, numbers and choices. Templates, CSS,
	 * colours, hosts, filters and the allow list are HTML/CSS or decide where requests
	 * go, so they're never changed that way.
	 */
  _apiAllows(property, value) {
    const conf = Player.settings.findDefault(property);
    if (!conf || conf.runtime || conf.default === undefined) {
      return false;
    }
    if (conf.options) {
      return Object.prototype.hasOwnProperty.call(conf.options, value);
    }
    if (typeof conf.default === 'boolean') {
      return typeof value === 'boolean';
    }
    if (typeof conf.default === 'number') {
      return typeof value === 'number' && isFinite(value);
    }
    return false;
  },

  /**
	 * settings.reset for the PlayerEvent API: only settings the API may set, so a page script
	 * can't wipe saved themes, filters, hosts or templates back to their defaults.
	 */
  resetPublic(property) {
    const conf = Player.settings.findDefault(property);
    if (!conf || !Player.settings._apiAllows(property, conf.default)) {
      return console.warn('[4chan sounds player] PlayerEvent: reset not allowed:', property);
    }
    return Player.settings.reset(property);
  },

  /**
	 * Player.set for the PlayerEvent API, limited to what _apiAllows.
	 */
  setPublic(property, value, opts) {
    if (!Player.settings._apiAllows(property, value)) {
      return console.warn('[4chan sounds player] PlayerEvent: setting not allowed:', property);
    }
    return Player.set(property, value, { bypassValidation: !!(opts && opts.bypassValidation) });
  },

  /**
	 * settings.load for the PlayerEvent API: only the settings _apiAllows, and never
	 * resetting the others (applyDefault would wipe the user's customisations).
	 */
  loadPublic(settings) {
    const allowed = {};
    settingsConfig.flatMap(s => s.settings || [ s ]).forEach(({ property }) => {
      const value = property && _.get(settings || {}, property);
      value !== undefined && Player.settings._apiAllows(property, value) && _.set(allowed, property, value);
    });
    return Player.settings.load(allowed);
  },

  /**
	 * Reset a setting to the default value
	 */
  reset(property, opts) {
    let settingConfig = Player.settings.findDefault(property);
    Player.set(property, _.clone(settingConfig.default), { ...opts, settingConfig });
  },

  /**
	 * Reset every setting (except the current view) to its default.
	 */
  resetAll() {
    Player.settings.load({}, { applyDefault: true, ignore: [ 'viewStyle' ], bypassSave: true, bypassRender: true });
    // Rebuild the saved themes order from the default themes before saving/rendering.
    Player.theme.validateOrder();
    Player.settings.save();
    Player.settings.render();
  },

  /**
	 * Load a configuration object.
	 *
	 * @param {Object} settings Config to load
	 * @param {Object} opts Same as Player.set, and applyDefault to reset defaults instead mixing current values.
	 */
  async load(settings, opts = {}) {
    if (typeof settings === 'string') {
      try {
        settings = JSON.parse(settings);
      } catch (err) {
        // A corrupt stored blob (truncated write, bad import, manual edit) must not
        // brick init — fall back to defaults rather than throwing out of load().
        Player.logError('Saved settings were corrupt and could not be parsed; falling back to defaults.', err, 'warning');
        settings = {};
      }
    }
    // Guard the rest of the function against a null/undefined config (e.g. a failed
    // import that still calls load()) so `settings.VERSION` / _.get don't throw.
    settings = settings || {};
    const changes = {};
    settingsConfig.forEach(function _handleSetting(setting) {
      if (setting.settings) {
        return setting.settings.forEach(subSetting => _handleSetting({
          property: setting.property,
          default: setting.default,
          ...subSetting
        }));
      }
      // Measured per page (the header offsets), so never taken from stored or imported settings.
      if (setting.runtime || (opts.ignore && opts.ignore.includes(setting.property))) {
        return;
      }
      let value = _.get(settings, setting.property, opts.applyDefault ? setting.default : undefined);
      // Values from storage, imports and other tabs must match the setting's type: a
      // string where a list belongs ("allow": "x") crashed rendering on every page load.
      if (value !== undefined) {
        const valid = Player.settings._coerce(value, setting.default);
        if (valid === undefined) {
          console.warn('[4chan sounds player] Ignoring a setting of the wrong type:', setting.property, value);
        }
        value = valid !== undefined ? valid : opts.applyDefault ? setting.default : undefined;
      }
      if (value !== undefined) {
        // Mix in default.
        // An import merges into the current value instead, so it doesn't drop the user's own
        // themes or hosts that the file doesn't mention.
        setting.mix && (value = { ...(opts.mergeCurrent ? _.get(Player.config, setting.property) : setting.default), ...(value || {}) });
        // Copy, so editing the loaded value in place can't change the default (or the
        // saved theme it came from).
        value = _.clone(value);
        const data = Player.set(setting.property, value, { bypassAll: true, settingConfig: setting });
        data && (changes[setting.property] = data);
      }
    });
    // Run any migrations to get up to date, and update the stored changes for event triggering.
    // For an import, only keep migrations of settings the file contains: the upgrade steps
    // (e.g. turning inline playback off) aren't meant for the current settings.
    const beforeMigrations = opts.migrateImportedOnly && _.clone(Player.config);
    Object.entries(await Player.settings.migrate(settings.VERSION)).forEach(([ prop, [ previous, current ] ]) => {
      if (beforeMigrations && _.get(settings, prop) === undefined) {
        _.set(Player.config, prop, _.get(beforeMigrations, prop));
        return;
      }
      changes[prop] = [ changes[prop] ? changes[prop][1] : previous, current ];
    });
    // Finally, trigger events.
    if (!opts.bypassAll) {
      !opts.bypassStylesheet && Player.display.updateCSSVars();
      !opts.silent && Object.entries(changes).forEach(([ prop, [ previous, current ] ]) => {
        Player.trigger('config', prop, current, previous);
        Player.trigger('config:' + prop, current, previous);
      });
      !opts.bypassSave && Player.settings.save();
      !opts.bypassRender && Player.settings.render();
    }
    return changes;
  },

  /**
	 * A value converted to its setting's type (from the default), or undefined if it can't
	 * be. Booleans and numbers may arrive as strings from hand-edited or older exports.
	 */
  _coerce(value, def) {
    if (def === undefined || def === null) {
      return value;
    }
    if (typeof def === 'boolean') {
      return value === true || value === 'true' ? true : value === false || value === 'false' ? false : undefined;
    }
    if (typeof def === 'number') {
      const n = typeof value === 'string' && value.trim() !== '' ? +value : value;
      return typeof n === 'number' && isFinite(n) ? n : undefined;
    }
    if (typeof def === 'string') {
      return typeof value === 'string' ? value : typeof value === 'number' ? String(value) : undefined;
    }
    if (Array.isArray(def)) {
      return Array.isArray(value) ? value : undefined;
    }
    // A keybind needs its key: rendering the keybinds threw on anything else.
    if (typeof def.key === 'string') {
      return value && typeof value === 'object' && !Array.isArray(value) && typeof value.key === 'string' ? value : undefined;
    }
    return value && typeof value === 'object' && !Array.isArray(value) ? value : undefined;
  },

  /**
	 * Re-render the settings in a set of changes, except one being edited.
	 */
  _renderChanged(changes) {
    if (!Player.container) {
      return;
    }
    const focused = document.activeElement;
    // Settings without a row of their own show up in another one, and some rows depend on
    // other settings (dependentRender).
    const shownIn = { selectedTheme: 'savedThemes', savedThemesOrder: 'savedThemes', defaultUploadHost: 'uploadHosts' };
    const props = new Set();
    Object.keys(changes || {}).forEach(prop => {
      props.add(shownIn[prop] || prop);
      (Player.settings.findDefault(prop).dependentRender || []).forEach(dep => props.add(dep));
    });
    props.forEach(prop => {
      const row = Player.$(`.${ns}-setting[data-property="${prop}"]`);
      if (row && !row.contains(focused)) {
        Player.settings.renderSetting(Player.settings.findDefault(prop));
      }
    });
  },

  /**
	 * Persist the player settings.
	 */
  save() {
    try {
      // Filter settings that haven't been modified from the default.
      const settings = settingsConfig.reduce(function _handleSetting(settings, setting) {
        if (setting.settings) {
          setting.settings.forEach(subSetting => _handleSetting(settings, {
            property: setting.property,
            default: setting.default,
            ...subSetting
          }));
        } else if (!setting.runtime) {
          let userVal = _.get(Player.config, setting.property);
          if (userVal !== undefined && !_.isEqual(userVal, setting.default)) {
            // If the setting is a mixed in object only store items that differ from the default.
            if (setting.mix) {
              userVal = Object.keys(userVal).reduce((changed, key) => {
                if (!_.isEqual(setting.default[key], userVal[key])) {
                  changed[key] = userVal[key];
                }
                return changed;
              }, {});
            }
            _.set(settings, setting.property, userVal);
          }
        }
        return settings;
      }, {});
      // Show the playlist or image view on load, whichever was last shown. The current view
      // when it's one of them (the 'view' event that records it comes after this save).
      const view = Player.config.viewStyle;
      settings.viewStyle = view === 'playlist' || view === 'image' ? view : Player.playlist._lastView || view;
      // Store the player version with the settings.
      settings.VERSION = VERSION;
      // Save the settings. The surrounding try/catch only covers synchronous
      // serialization errors, so attach a .catch for an async write rejection too.
      return GM.setValue('settings', JSON.stringify(settings)).catch(err => {
        Player.logError('There was an error saving the sound player settings.', err);
      });
    } catch (err) {
      Player.logError('There was an error saving the sound player settings.', err);
    }
  },

  /**
	 * Run migrations when the player is updated.
	 */
  async migrate(fromVersion) {
    // Fall out if the player hasn't updated.
    if (!fromVersion || fromVersion === VERSION) {
      return {};
    }
    const changes = {};
    for (let i = 0; i < migrations.length; i++) {
      let mig = migrations[i];
      if (Player.settings.compareVersions(fromVersion, mig.version) < 0) {
        try {
          // Migrations return [ previous, updated ] (see migrations.js). When several
          // migrations touch the same prop (e.g. `allow` in 3.4.7 and 3.6.3) keep the
          // ORIGINAL previous (changes[prop][0]) and the latest updated value so the
          // emitted config event reflects the full before/after, not an intermediate.
          Object.entries(await mig.run()).forEach(([ prop, [ previous, current ] ]) => {
            changes[prop] = [ changes[prop] ? changes[prop][0] : previous, current ];
          });
        } catch (err) {					console.error(err);
        }
      }
    }
    return changes;
  },

  /**
	 * Compare two semver strings. Returns -1 / 0 / 1.
	 * Per semver, a prerelease tag sorts BEFORE the unsuffixed release of the same base
	 * (3.6.4-beta < 3.6.4), so migrations keyed at "3.6.4" still run for a beta upgrader.
	 */
  compareVersions(a, b) {
    // Use indexOf rather than split('-') so a multi-segment prerelease ('beta.2'
    // / 'rc-1') is preserved intact instead of being silently truncated to its
    // first identifier (which made e.g. 'rc.1' and 'rc.2' compare equal).
    const aDash = a.indexOf('-');
    const bDash = b.indexOf('-');
    const aVer = aDash === -1 ? a : a.slice(0, aDash);
    const bVer = bDash === -1 ? b : b.slice(0, bDash);
    const aHash = aDash === -1 ? '' : a.slice(aDash + 1);
    const bHash = bDash === -1 ? '' : b.slice(bDash + 1);
    const aParts = aVer.split('.');
    const bParts = bVer.split('.');
    for (let i = 0; i < 3; i++) {
      // Missing segments coerce to NaN via +undefined; treat them as 0 so '3.6' vs
      // '3.6.0' compare equal and '3.6' vs '3.6.4' returns -1 (migration eligible).
      const aP = +aParts[i] || 0;
      const bP = +bParts[i] || 0;
      if (aP > bP) return 1;
      if (aP < bP) return -1;
    }
    if (aHash === bHash) return 0;
    // Empty prerelease (= release version) sorts AFTER any prerelease tag.
    if (!aHash) return 1;
    if (!bHash) return -1;
    // Per-identifier compare so 'rc.10' > 'rc.9' (numeric, not lex). Identifiers
    // composed solely of digits compare numerically; otherwise lex. Shorter
    // identifier list sorts first when the prefix matches.
    const aIds = aHash.split('.');
    const bIds = bHash.split('.');
    const max = Math.max(aIds.length, bIds.length);
    for (let i = 0; i < max; i++) {
      const aId = aIds[i];
      const bId = bIds[i];
      if (aId === undefined) return -1;
      if (bId === undefined) return 1;
      const aIsNum = /^\d+$/.test(aId);
      const bIsNum = /^\d+$/.test(bId);
      if (aIsNum && bIsNum) {
        const an = +aId, bn = +bId;
        if (an !== bn) return an < bn ? -1 : 1;
      } else if (aIsNum !== bIsNum) {
        // Numeric identifiers always sort before non-numeric (semver §11.4.3).
        return aIsNum ? -1 : 1;
      } else if (aId !== bId) {
        return aId < bId ? -1 : 1;
      }
    }
    return 0;
  },

  /**
	 * Find a setting in the default configuration.
	 */
  findDefault(property) {
    let settingConfig;
    settingsConfig.find(function (setting) {
      if (setting.property === property) {
        return settingConfig = setting;
      }
      if (setting.settings) {
        let subSetting = setting.settings.find(_setting => _setting.property === property);
        return subSetting && (settingConfig = {
          ...setting,
          actions: null,
          settings: null,
          description: null,
          ...subSetting,
          isSubSetting: true
        });
      }
      return false;
    });
    return settingConfig || { property };
  },

  /**
	 * Toggle whether the player or settings are displayed.
	 */
  toggle(group) {
    // Blur anything focused so the change is applied.
    let focused = Player.$(`.${ns}-settings :focus`);
    focused && focused.blur();

    // Restore the playlist if there's no group given and the settings are already open.
    if (!group && Player.config.viewStyle === 'settings') {
      return Player.playlist.restore();
    }
    // Switch to the settings view if it's not already showing.
    if (Player.config.viewStyle !== 'settings') {
      Player.display.setViewStyle('settings');
    }
    // Switch to a given group.
    if (group && group !== Player.settings.view) {
      Player.settings.showGroup(group);
    }
  },

  showGroup(group) {
    Player.settings.view = group;
    const currentGroup = Player.$(`.${ns}-settings-group.active`);
    const currentTab = Player.$(`.${ns}-settings-tab.active`);
    currentGroup && currentGroup.classList.remove('active');
    currentTab && currentTab.classList.remove('active');
    Player.$(`.${ns}-settings-group[data-group="${group}"]`).classList.add('active');
    Player.$(`.${ns}-settings-tab[data-group="${group}"]`).classList.add('active');
  },

  async import() {
    const fileInput = _.element('<input type="file">');
    const _import = async () => {
      let config;
      try {
        config = JSON.parse(await fileInput.files[0].text());
      } catch (err) {
        Player.logError(`Expected a JSON config file and got ${_.escHTML(fileInput.files[0].type)}.`, err, 'warning');
      }
      fileInput.removeEventListener('change', _import);
      // Keep the current view (exports include viewStyle), merge themes and hosts into the
      // current ones, and only migrate what the file contains. Then reconcile the theme
      // order with the themes before saving and rendering.
      await Player.settings.load(config, {
        ignore: [ 'viewStyle' ],
        mergeCurrent: true,
        migrateImportedOnly: true,
        bypassSave: true,
        bypassRender: true
      });
      Player.theme.validateOrder();
      Player.settings.save();
      Player.settings.render();
    };
    fileInput.addEventListener('change', _import);
    fileInput.click();
  },

  async export(e) {
    // Use the saved settings to only export non-default user settings. Shift click exports everything for testing.
    const settings = e && e.shiftKey ? JSON.stringify(Player.config, null, 4) : await GM.getValue('settings') || '{}';
    const blob = new Blob([ settings ], { type: 'application/json' });
    const a = _.element(`<a href="${URL.createObjectURL(blob)}" download="4chan-sp-config.json" rel="noopener" target="_blank"></a>`);
    a.click();
    URL.revokeObjectURL(a.href);
  },

  setChangeListeners(target) {
    const settingsContainer = target || Player.$(`.${ns}-settings`);
    settingsContainer.querySelectorAll(`.${ns}-settings input, .${ns}-settings textarea`).forEach(el => {
      el.addEventListener('focusout', Player.settings.handleChange);
    });
    settingsContainer.querySelectorAll(`.${ns}-settings input[type=checkbox], .${ns}-settings select`).forEach(el => {
      el.addEventListener('change', Player.settings.handleChange);
    });
  },

  /**
	 * Handle the user making a change in the settings view.
	 */
  handleChange(e) {
    try {
      const input = e.currentTarget;
      const property = input.getAttribute('data-property');
      if (!property) {
        return;
      }
      let settingConfig = Player.settings.findDefault(property);

      // Get the new value of the setting.
      const currentValue = _.get(Player.config, property);
      let newValue = input[input.getAttribute('type') === 'checkbox' ? 'checked' : 'value'];

      if (settingConfig.parse) {
        newValue = Player.getHandler(settingConfig.parse)(newValue, currentValue, e);
      }

      // Not the most stringent check but enough to avoid some spamming.
      if (!_.isEqual(currentValue, newValue, !settingConfig.looseCompare)) {
        // Update the setting.
        Player.set(property, newValue, { bypassValidation: true, bypassRender: 'self', settingConfig });
      }
      // The field isn't re-rendered, so show a number setting's kept value ("abc" became 0
      // but stayed in the box).
      const kept = _.get(Player.config, property);
      typeof settingConfig.default === 'number' && input.value !== String(kept) && (input.value = kept);
    } catch (err) {
      Player.logError('There was an error updating the setting.', err);
    }
  },

  /**
	 * Converts a key event in an input to a string representation set as the input value.
	 */
  handleKeyChange(e) {
    // Tab and Shift+Tab move focus as usual (a field that captured them trapped keyboard
    // users, and a Tab binding then took over Tab on the page).
    if (e.key === 'Tab' && !e.ctrlKey && !e.altKey && !e.metaKey) {
      return;
    }
    e.preventDefault();
    // Keys still being composed (an IME, a dead key) aren't a key to bind.
    if (e.isComposing || e.key === 'Process' || e.key === 'Dead' || e.key === 'Unidentified') {
      return;
    }
    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Meta' || e.key === 'Alt' || e.key === 'AltGraph') {
      return;
    }
    e.currentTarget.value = e.which === 8 || e.key.toLowerCase() === 'backspace'
      ? ''
      : Player.hotkeys.stringifyKey(e);
  }
};
