const settingsConfig = require('config');

let keyConfigs;

module.exports = {
  _keyMap: {
    ' ': 'space',
    arrowleft: 'left',
    arrowright: 'right',
    arrowup: 'up',
    arrowdown: 'down'
  },

  initialize() {
    Player.on('rendered', Player.hotkeys.apply);
    Player.on('config:hotkeys', Player.hotkeys.apply);

    keyConfigs = settingsConfig.reduce((c, s) => {
      s.property === 'hotkey_bindings' && s.settings.forEach(s => c[s.property.slice(16)] = s);
      return c;
    }, {});

    // Setup up hardware media keys.
    if ('mediaSession' in navigator && Player.config.hardwareMediaKeys) {
      const actions = [
        [ 'play', () => Player.play() ],
        [ 'pause', () => Player.pause() ],
        [ 'stop', () => Player.pause() ],
        [ 'previoustrack', () => Player.previous() ],
        [ 'nexttrack', () => Player.next() ],
        [ 'seekbackward', evt => Player.audio.currentTime -= evt.seekOffset || 10 ],
        [ 'seekforward', evt => Player.audio.currentTime += evt.seekOffset || 10 ],
        // `seekto` carries an ABSOLUTE time per spec — assignment, not +=.
        [ 'seekto', evt => Player.audio.currentTime = evt.seekTime ]
      ];
      for (let [ type, handler ] of actions) {
        try {
          navigator.mediaSession.setActionHandler(type, handler);
        } catch (err) {
          // not enabled...
        }
      }

      // Keep the media metadata updated. Standalone videos play through the video
      // element, so listen on both and only act for whichever is currently playing.
      const paused = () => navigator.mediaSession.playbackState = 'paused';
      const listen = media => [
        [ 'pause', paused ],
        [ 'ended', paused ],
        [ 'play', Player.hotkeys.setMediaMetadata ],
        [ 'ratechange', Player.hotkeys.setMediaPosition ],
        [ 'seeked', Player.hotkeys.setMediaPosition ]
      ].forEach(([ evt, fn ]) => media.addEventListener(evt, e => e.currentTarget === Player.audio && fn()));
      listen(Player.audio);
      Player.on('rendered', () => Player.video && listen(Player.video));
      Player.on('tags-loaded', sound => sound === Player.playing && Player.hotkeys.setMediaMetadata());
    }
  },

  async setMediaMetadata() {
    const sound = Player.playing;
    // The deferred img.onload below re-invokes this; playback may have stopped in the
    // meantime (Player.playing === null), so bail rather than deref a null sound.
    if (!sound) {
      return;
    }
    const tags = sound.tags || {};
    navigator.mediaSession.playbackState = 'playing';
    const metadata = {
      title: tags.title || sound.name || sound.title,
      artist: tags.artist ||  `/${Board}/ - ${Thread || '4chan Sounds Player'}`,
      album: tags.album || document.title,
      artwork: [
        {
          src: Player.playing.thumb,
          sizes: '125x125'
        }
      ]
    };

    // If it's not a video add the full image to artwork.
    // If we have the dimensions already add the artwork, otherwise load them then reset the metadata.
    if (!Player.isVideo) {
      if (sound._fullDimension) {
        metadata.artwork.push({
          src: Player.playing.image,
          sizes: sound._fullDimension
        });
      } else {
        const img = new Image();
        img.onload = function () {
          sound._fullDimension = img.width + 'x' + img.height;
          Player.hotkeys.setMediaMetadata();
        };
        img.src = Player.playing.image;
      }
    }

    navigator.mediaSession.metadata = new MediaMetadata(metadata);
    Player.hotkeys.setMediaPosition();
  },

  setMediaPosition() {
    const { duration, playbackRate, currentTime } = Player.audio;
    // setPositionState throws unless 0 <= position <= a finite duration and the rate is
    // non-zero, e.g. before metadata has loaded.
    if (!isFinite(duration) || !(duration > 0) || !playbackRate) {
      return;
    }
    try {
      navigator.mediaSession.setPositionState({ duration, playbackRate, position: Math.min(currentTime, duration) });
    } catch (err) {
      // Not supported in this browser.
    }
  },

  addHandler: () => {
    Player.hotkeys.removeHandler();
    document.body.addEventListener('keydown', Player.hotkeys.handle);
  },
  removeHandler: () => {
    document.body.removeEventListener('keydown', Player.hotkeys.handle);
  },

  /**
	 * Apply the selecting hotkeys option
	 */
  apply() {
    const type = Player.config.hotkeys;
    Player.hotkeys.removeHandler();
    Player.off('show', Player.hotkeys.addHandler);
    Player.off('hide', Player.hotkeys.removeHandler);

    if (type === 'always') {
      // If hotkeys are always enabled then just set the handler.
      Player.hotkeys.addHandler();
    } else if (type === 'open') {
      // If hotkeys are only enabled with the player open toggle the handler as the player opens/closes.
      // If the player is already open set the handler now.
      if (!Player.isHidden) {
        Player.hotkeys.addHandler();
      }
      Player.on('show', Player.hotkeys.addHandler);
      Player.on('hide', Player.hotkeys.removeHandler);
    }
  },

  /**
	 * Handle a keydown even on the body
	 */
  handle(e) {
    // Ignore events on inputs so you can still type.
    if (Player.isHidden && (Player.config.hotkeys !== 'always' || !Player.sounds.length)) {
      return;
    }
    // Leave keys another handler already used (e.g. Space on a script's button-like
    // control), and synthetic events without a key (browser autofill).
    if (e.defaultPrevented || !e.key) {
      return;
    }
    // 4chan X/XT/neXT's gallery binds the arrow keys while it's open. This listener is on
    // body, so it runs before theirs and they can't stop it skipping tracks.
    if (document.getElementById('a-gallery') || document.documentElement.classList.contains('gallery-open')) {
      return;
    }
    const target = e.target;
    const inputFocused = [ 'INPUT', 'SELECT', 'TEXTAREA', 'BUTTON' ].includes(target.nodeName)
      || target.isContentEditable
      || (target.getAttribute && target.getAttribute('role') === 'button');
    const k = e.key.toLowerCase();
    const bindings = Player.config.hotkey_bindings || {};

    // Look for a matching hotkey binding
    Object.entries(bindings).forEach(function checkBinding([ name, keyDef ]) {
      if (Array.isArray(keyDef)) {
        return keyDef.find(_def => checkBinding([ name, _def ]));
      }
      const bindingConfig = k === keyDef.key
				&& (!!keyDef.shiftKey === !!e.shiftKey) && (!!keyDef.ctrlKey === !!e.ctrlKey) && (!!keyDef.metaKey === !!e.metaKey)
				// Unbound Alt combos (Alt+Left/Right is browser back/forward) pass through.
				&& (!!keyDef.altKey === !!e.altKey)
				// ignoreRepeat is part of the setting's config, not the stored binding.
				&& (!(keyConfigs[name] && keyConfigs[name].ignoreRepeat) || !e.repeat)
				&& keyConfigs[name];

      if (bindingConfig && (!inputFocused || bindingConfig.allowFocusedInput)) {
        e.preventDefault();
        e._binding = keyDef;
        Player.getHandler(bindingConfig.keyHandler)(e);
      }
    });
  },

  /**
	 * Turn a hotkey definition or key event into an input string.
	 */
  stringifyKey(key) {
    let k = key.key.toLowerCase();
    Player.hotkeys._keyMap[k] && (k = Player.hotkeys._keyMap[k]);
    return (key.ctrlKey ? 'Ctrl+' : '') + (key.altKey ? 'Alt+' : '') + (key.shiftKey ? 'Shift+' : '') + (key.metaKey ? 'Meta+' : '') + k;
  },

  /**
	 * Turn an input string into a hotkey definition object.
	 */
  parseKey(str) {
    // Modifiers are a known prefix; everything after them is the key, which can itself be
    // '+' ("Shift++"), so don't just split on '+'.
    const [ , modifiers, rest ] = String(str).match(/^((?:(?:Ctrl|Alt|Shift|Meta)\+)*)([\s\S]*)$/);
    const keys = modifiers.split('+').filter(Boolean);
    let key = rest;
    Object.keys(Player.hotkeys._keyMap).find(k => Player.hotkeys._keyMap[k] === key && (key = k));
    const newValue = { key };
    keys.forEach(key => newValue[key.toLowerCase() + 'Key'] = true);
    return newValue;
  }
};
