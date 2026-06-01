const buttons = require('./buttons');

// Regex for replacements. Each /g regex below is used for both .replace() (which
// needs /g for global) AND for .test() in findDependencies. Calling .test() on a
// /g regex advances lastIndex, leaking state across calls — when the same regex
// is .test()'d on different inputs it can return false (and `.exec` can skip
// matches) because it resumes from a stale offset. To keep both call shapes
// safe, every .test()/.exec() site below resets lastIndex to 0 explicitly.
const playingRE = /p: ?{([^}]*)}/g;
const hoverRE = /h: ?{([^}]*)}/g;
// Render the inner content only when at least one sound is dead (failed to load).
const deadRE = /d: ?{([^}]*)}/g;
// Create a regex to find buttons/links, ignore matches if the button/link name is itself a regex.
const tplNames = buttons.map(conf => `${conf.tplName.source && conf.tplName.source.replace(/\(/g, '(?:') || conf.tplName}`);
const buttonRE = new RegExp(`(${tplNames.join('|')})-(?:button|link)(?:\\:"([^"]+?)")?`, 'g');
const soundTitleRE = /sound-title/g;
const soundTitleMarqueeRE = /sound-title-marquee/g;
const soundIndexRE = /sound-index/g;
const soundCountRE = /sound-count/g;
const soundPropRE = /sound-(src|id|name|post|imageOrThumb|image|thumb|filename|imageMD5)(-esc)?/g;
const soundFilterCountRE = /filtered-count/g;
const deadCountRE = /dead-count/g;
const configRE = /\$config\[([^\]]+)\]/g;

// Hold information on which config values components templates depend on.
const componentDeps = [ ];

module.exports = {
  buttons,

  initialize() {
    Player.on('config', Player.userTemplate._handleConfig);
    Player.on('playsound', () => Player.userTemplate._handleEvent('playsound'));
    // 'filters-applied' fires once at the end of playlist.applyFilters and is
    // the one event hasCount/hasSoundProp/hasIndex/hasPlaying templates rely on
    // to refresh after a bulk apply (the per-sound 'add'/'remove'/'playsound'
    // cascade is suppressed by _handleEvent while _applyingFilters is set). It
    // MUST be subscribed here or the corresponding events.push('filters-applied')
    // entries in findDependencies become dead code.
    // 'dead-change' fires when a sound is marked dead (failed to load) or recovers, so
    // sound-count templates refresh their playable total / "(+ N dead)" suffix.
    [ 'add', 'remove', 'order', 'show', 'hide', 'stop', 'filters-applied', 'dead-change' ].forEach(evt => {
      Player.on(evt, Player.userTemplate._handleEvent.bind(null, evt));
    });
  },

  /**
	 * Build a user template.
	 */
  build(data) {
    const outerClass = data.outerClass || '';
    const name = data.sound && data.sound.title || data.defaultName;
    let _data = { ...data };

    const _confFuncOrText = v => (typeof v === 'function' ? v(_data) : v);

    // Apply common template replacements, unless they are opted out.
    let html = data.template.replace(configRE, (...args) => _.get(Player.config, args[1]));
    !data.ignoreDisplayBlocks && (html = html
      .replace(playingRE, Player.playing && Player.playing === data.sound ? '$1' : '')
      // Lazy replacer (not an eager ternary like the blocks above): the dead scan only
      // runs when a template actually contains a d:{ } block, so the per-sound row
      // template — built once per sound — doesn't pay an O(n) scan on every render.
      .replace(deadRE, (m, inner) => Player.sounds.some(s => s.error) ? inner : '')
      .replace(hoverRE, `<span class="${ns}-hover-display ${outerClass}">$1</span>`));
    !data.ignoreButtons && (html = html.replace(buttonRE, function (full, type, text) {
      let buttonConf = Player.userTemplate._findButtonConf(type);
      _data.tplNameMatch = buttonConf.tplNameMatch;
      if (buttonConf.requireSound && !data.sound || buttonConf.showIf && !buttonConf.showIf(_data)) {
        return '';
      }
      // If the button config has sub values then extend the base config with the selected sub value.
      // Which value to use is taken from the `property` in the base config of the player config.
      // This gives us different state displays.
      if (buttonConf.values) {
        let topConf = buttonConf;
        const valConf = buttonConf.values[_.get(Player.config, buttonConf.property)] || buttonConf.values[Object.keys(buttonConf.values)[0]];
        buttonConf = { ...topConf, ...valConf };
      }
      const attrs = [ ...(_confFuncOrText(buttonConf.attrs) || []) ];
      attrs.some(attr => attr.startsWith('href')) || attrs.push('href="javascript:;"');
      (buttonConf.class || outerClass) && attrs.push(`class="${buttonConf.class || ''} ${outerClass || ''}"`);
      buttonConf.action && attrs.push(`@click${buttonConf.actionMods || ''}='${_confFuncOrText(buttonConf.action)}'`);

      // Replace spaces with non breaking spaces in user text to prevent collapsing.
      return `<a ${attrs.join(' ')}>${text && text.replace(/ /g, ' ') || _confFuncOrText(buttonConf.icon) || _confFuncOrText(buttonConf.text)}</a>`;
    }));
    // Escape the sound name — it comes from the filename regex in posts.getSounds
    // (and the [futari no christmas] hardcoded match) and can contain arbitrary
    // characters from archived posts. Compute lazily: most playlist templates
    // don't include sound-title at all, so the per-row escAttr cost is wasted.
    let escName, escLocation;
    const getEscName = () => escName !== undefined ? escName : (escName = name ? _.escAttr(name) : '');
    const getEscLocation = () => escLocation !== undefined ? escLocation : (escLocation = _.escAttr(data.location || ''));
    !data.ignoreSoundName && (html = html
      .replace(soundTitleMarqueeRE, () => name
        ? `<div class="${ns}-col ${ns}-truncate-text" style="margin: 0 .5rem; text-overflow: clip;"><span title="${getEscName()}" class="${ns}-title-marquee" data-location="${getEscLocation()}">${getEscName()}</span></div>`
        : '')
      .replace(soundTitleRE, () => name
        ? `<div class="${ns}-col ${ns}-truncate-text" style="margin: 0 .5rem"><span title="${getEscName()}">${getEscName()}</span></div>`
        : ''));
    !data.ignoreSoundProperties && (html = html
      // Always escape sound props when interpolated into the rendered HTML. The
      // `-esc` suffix is the OPT-IN for JS-string-safe escaping (used inside
      // event-handler attributes that wrap the value in a JS string literal);
      // plain tokens get HTML-attr escaping which is correct for href/value/etc.
      .replace(soundPropRE, (...args) => data.sound ? _.escAttr(data.sound[args[1]], !!args[2]) : '')
      // Position among PLAYABLE sounds. Dead sounds are excluded from sound-count, so
      // exclude them from the index too — otherwise "sound-index / sound-count" can read
      // e.g. 3 / 2 when the playing sound sits after a dead one. Lazy function so builds
      // without the token skip the O(n) walk (the old eager indexOf ran on every build).
      .replace(soundIndexRE, () => {
        if (!data.sound) return 0;
        let idx = 0;
        for (const s of Player.sounds) {
          !s.error && idx++;
          if (s === data.sound) return idx;
        }
        return 0;
      })
      // sound-count reports the PLAYABLE total — dead (failed-to-load) sounds are
      // excluded. The dead total is exposed separately via the `dead-count` token and
      // the `d:{ }` block (shown only when something is dead). Computed lazily so
      // templates without the token (e.g. the per-sound row template) skip the scan.
      .replace(soundCountRE, () => Player.sounds.reduce((n, s) => s.error ? n : n + 1, 0))
      .replace(deadCountRE, () => Player.sounds.reduce((n, s) => s.error ? n + 1 : n, 0))
      .replace(soundFilterCountRE, Player.filteredSounds.length));
    !data.ignoreVersion && (html = html.replace(/%v/g, VERSION));

    // Apply any specific replacements
    if (data.replacements) {
      for (let k of Object.keys(data.replacements)) {
        html = html.replace(new RegExp(k, 'g'), data.replacements[k]);
      }
    }

    return html;
  },

  /**
	 * Sets up a components to render when the template or values within it are changed.
	 */
  maintain(component, property, alwaysRenderConfigs = [], alwaysRenderEvents = []) {
    componentDeps.push({
      component,
      property,
      ...Player.userTemplate.findDependencies(property, null),
      alwaysRenderConfigs,
      alwaysRenderEvents
    });
  },

  /**
	 * Find all the config dependent values in a template.
	 */
  findDependencies(property, template) {
    template || (template = _.get(Player.config, property));
    // Figure out what events should trigger a render.
    const events = [];

    // /g regexes carry lastIndex across calls — reset before each .test()/.exec()
    // so a prior call (or another module sharing the regex) can't make us skip
    // the prefix of `template` or miss a match entirely.
    soundCountRE.lastIndex = 0;
    soundTitleRE.lastIndex = 0;
    soundPropRE.lastIndex = 0;
    soundIndexRE.lastIndex = 0;
    playingRE.lastIndex = 0;
    soundFilterCountRE.lastIndex = 0;
    deadCountRE.lastIndex = 0;
    deadRE.lastIndex = 0;
    buttonRE.lastIndex = 0;
    configRE.lastIndex = 0;

    // add/remove should render templates showing the count.
    // playsound/stop should render templates either showing properties of the playing sound or dependent on something playing.
    // order should render templates showing a sounds index.
    const hasCount = soundCountRE.test(template);
    const hasSoundProp = soundTitleRE.test(template) || soundPropRE.test(template);
    const hasIndex = soundIndexRE.test(template);
    const hasPlaying = playingRE.test(template);
    const hasFilterCount = soundFilterCountRE.test(template);
    // dead-count token / d:{ } block depend on the dead total, which changes when a
    // sound is marked dead/recovers ('dead-change') or is added/removed/refiltered.
    const hasDead = deadCountRE.test(template) || deadRE.test(template);
    // hasCount templates re-render on add/remove for the live count, AND on
    // 'filters-applied' so bulk applyFilters operations (where _handleEvent
    // suppresses the per-sound 'add'/'remove' cascade) still refresh the count
    // exactly once at the end.
    hasCount && events.push('add', 'remove', 'filters-applied', 'dead-change');
    // The row template handles this itself to avoid a full playlist render.
    // hasSoundProp/hasIndex/hasPlaying also subscribe to 'filters-applied' so
    // bulk applyFilters refreshes the dependent template even when its
    // 'playsound' cascade is suppressed (see _handleEvent below).
    property !== 'rowTemplate' && (hasSoundProp || hasIndex || hasPlaying)
      && events.push('playsound', 'stop', 'filters-applied');
    // sound-index now also depends on the dead total (dead sounds before the playing
    // one shift the playable position), so refresh on 'dead-change' as well as 'order'.
    hasIndex && events.push('order', 'dead-change');
    hasFilterCount && events.push('filters-applied');
    hasDead && events.push('add', 'remove', 'filters-applied', 'dead-change');

    // Find which buttons the template includes that are dependent on config values.
    const config = [];
    let match;
    while ((match = buttonRE.exec(template)) !== null) {
      // If user text is given then the display doesn't change.
      if (!match[2]) {
        let buttonConf = Player.userTemplate._findButtonConf(match[1]);
        if (buttonConf.property) {
          config.push(buttonConf.property);
        }
      }
    }
    // Find config references.
    while ((match = configRE.exec(template)) !== null) {
      config.push(match[1]);
    }

    return { events, config };
  },

  /**
	 * When a config value is changed check if any component dependencies are affected.
	 */
  _handleConfig(property, value) {
    // Check if a template for a components was updated.
    componentDeps.forEach(depInfo => {
      if (depInfo.property === property) {
        Object.assign(depInfo, Player.userTemplate.findDependencies(property, value));
        depInfo.component.render();
      }
    });
    // Check if any components are dependent on the updated property.
    componentDeps.forEach(depInfo => {
      if (depInfo.alwaysRenderConfigs.includes(property) || depInfo.config.includes(property)) {
        depInfo.component.render();
      }
    });
  },

  /**
	 * When a player event is triggered check if any component dependencies are affected.
	 */
  _handleEvent(type) {
    // Suppress per-sound 'add'/'remove'/'playsound' renders during a bulk
    // applyFilters operation: Phase A removal of the playing sound cascades into
    // Player.next → Player.play → 'playsound' against intermediate state (sounds
    // is mid-mutation, filteredSounds awaiting rebuild). The 'filters-applied'
    // event at the end of applyFilters drives one consistent re-render instead.
    if (Player._applyingFilters && (type === 'add' || type === 'remove' || type === 'playsound')) {
      return;
    }
    // Check if any components are dependent on the updated property.
    componentDeps.forEach(depInfo => {
      if (depInfo.alwaysRenderEvents.includes(type) || depInfo.events.includes(type)) {
        depInfo.component.render();
      }
    });
  },

  _findButtonConf: type => {
    let tplNameMatch;
    let buttonConf = buttons.find(conf => {
      if (conf.tplName === type) {
        return tplNameMatch = [ type ];
      }
      return tplNameMatch = conf.tplName.test && type.match(conf.tplName);
    });
    return buttonConf && { ...buttonConf, tplNameMatch };
  }
};
