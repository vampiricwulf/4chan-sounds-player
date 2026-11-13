const components = {
  // Settings must be first.
  settings: require('./components/settings'),
  events: require('./components/events'),
  actions: require('./components/actions'),
  colorpicker: require('./components/settings/colorpicker'),
  controls: require('./components/controls'),
  display: require('./components/display'),
  footer: require('./components/footer'),
  header: require('./components/header'),
  hotkeys: require('./components/hotkeys'),
  inline: require('./components/inline'),
  minimised: require('./components/minimised'),
  playlist: require('./components/playlist'),
  position: require('./components/position'),
  posts: require('./components/posts'),
  theme: require('./components/theme'),
  threads: require('./components/threads'),
  tools: require('./components/tools'),
  userTemplate: require('./components/user-template'),
};

// Create a global ref to the player.
const Player =
  (window.Player =
  module.exports =
    {
      ns,

      // Store a ref to the components so they can be iterated.
      components,

      audio: new Audio(),
      sounds: [],
      filteredSounds: [],
      isHidden: true,
      container: null,
      ui: {},
      _public: [],

      // Build the config from the default
      config: {},

      // Helper function to query elements in the player.
      $: (...args) =>
        Player.container && Player.container.querySelector(...args),
      $all: (...args) =>
        Player.container && Player.container.querySelectorAll(...args),

      /**
       * Set up the player.
       */
      async initialize() {
        if (Player.initialized) {
          return;
        }
        Player.initialized = true;
        try {
          Player.audio.dataset.id = 'main';
          Player.sounds = [];
          // Run the initialisation for each component.
          // Settings must be first.
          if (components.settings.initialize) {
            await components.settings.initialize();
          }
          const initPromises = Object.keys(components)
            .filter(
              (name) => name !== 'settings' && components[name].initialize,
            )
            .map((name) => components[name].initialize());
          await Promise.all(initPromises);

          // Show a button to open the player.
          await Player.display.createPlayerButton();

          // Render the player, but not neccessarily show it.
          await Player.display.render();

          // Expose some functionality via PlayerEvent custom events. Any script on the page
          // can send these, so only the public actions (in every build: the development
          // bypass exposed every function), and settings changes go through the restricted
          // versions: a template set this way runs its handlers with the userscript's
          // privileges (cross-site requests with the user's cookies).
          const restricted = {
            set: Player.settings.setPublic,
            'settings.load': Player.settings.loadPublic,
            'settings.reset': Player.settings.resetPublic
          };
          document.addEventListener('PlayerEvent', (e) => {
            const action = e.detail && e.detail.action;
            if (action && Player._public.includes(action)) {
              return (restricted[action] || _.get(Player, action)).apply(
                window,
                [].concat(e.detail.arguments || []),
              );
            }
          });
        } catch (err) {
          Player.logError(
            'There was an error initializing the sound player. Please check the console for details.',
            err,
          );
          // Can't recover so throw this error.
          throw err;
        }
      },

      /**
       * Returns the function of Player referenced by name or a given handler function.
       * @param {String|Function} handler Name to function on Player or a handler function.
       */
      getHandler(handler) {
        return typeof handler === 'string' ? _.get(Player, handler) : handler;
      },

      /**
       * Compare two ids for sorting.
       */
      compareIds(a, b) {
        const [aPID, aSID] = a.split(':');
        const [bPID, bSID] = b.split(':');
        // Local files ("local3") have no post number: sort them after the thread's posts,
        // in the order they were added. Subtracting them gave NaN, which made the sort
        // inconsistent and left a shuffled order in place.
        const aLocal = /^local/.test(aPID);
        const bLocal = /^local/.test(bPID);
        if (aLocal !== bLocal) {
          return aLocal ? 1 : -1;
        }
        const postDiff = aLocal
          ? aPID.localeCompare(bPID, undefined, { numeric: true })
          : (parseFloat(aPID) - parseFloat(bPID)) || aPID.localeCompare(bPID, undefined, { numeric: true });
        return postDiff !== 0 ? postDiff : aSID - bSID;
      },

      /**
       * Invoke a callback for every sound in both Player.sounds and Player.filteredSounds.
       * Takes a JOINT snapshot before iterating either array — so a callback that moves
       * a sound from sounds → filteredSounds (or vice versa) doesn't see it twice.
       */
      allSounds(fn) {
        const snapshot = Player.sounds.concat(Player.filteredSounds);
        snapshot.forEach(fn);
      },

      /**
       * Check whether a sound src and image are allowed and not filtered.
       * Filters are matched against BOTH the live src and the original pre-reroute src
       * (_origSrc), so a filter added while the rerouter was on stays effective when it's
       * off, and vice versa.
       */
      disallowedSound({ src, imageMD5, _origSrc }) {
        try {
          const link = new URL(src);
          const stripped = src.replace(/^(https?:)?\/\//, '');
          const origStripped = (typeof _origSrc === 'string' && _origSrc !== src)
            ? _origSrc.replace(/^(https?:)?\/\//, '')
            : null;
          const host = link.hostname.toLowerCase();
          // No hostname (blob:, data:, about:) can't be checked against the allow list;
          // only local files have those, and they skip this check.
          if (!host) {
            return { invalid: true };
          }
          const result = {};
          result.host =
            !Player.config.allow.find(
              // Hostnames are case-insensitive; `host` is already lowercased, so
              // lowercase the allow entry too or a user-typed `Catbox.moe` never matches.
              // Skip non-string entries (a corrupt config / cross-tab write) rather than
              // throwing inside .find and invalidating the sound on the first bad entry.
              (h) => {
                if (typeof h !== 'string') return false;
                const hl = h.toLowerCase();
                return host === hl || host.endsWith('.' + hl);
              },
            ) && host;
          for (let filter of Player.config.filters) {
            // Parity with the allow loop above: skip a non-string entry (corrupt config
            // / cross-tab write) rather than throwing on filter.replace and invalidating
            // the sound.
            if (typeof filter !== 'string') continue;
            result.image = result.image || (filter === imageMD5 && imageMD5);
            const filterStripped = filter.replace(/^(https?:)?\/\//, '');
            result.sound = result.sound
              || (filterStripped === stripped && stripped)
              || (origStripped && filterStripped === origStripped && origStripped);
            if (result.image && result.sound) {
              break;
            }
          }
          return result.host || result.image || result.sound ? result : false;
        } catch (err) {
          return { invalid: true };
        }
      },

      /**
       * Listen for changes
       */
      syncTab: (property, callback) =>
        typeof GM_addValueChangeListener !== 'undefined' &&
        GM_addValueChangeListener(
          property,
          (_prop, oldValue, newValue, remote) => {
            remote && callback(newValue, oldValue);
          },
        ),

      /**
       * Log errors and show an error notification.
       */
      logError(message, error, type) {
        console.error('[4chan sounds player]', message, error);
        if (error instanceof PlayerError) {
          error.error && console.error('[4chan sound player]', error.error);
          // Reasons are plain text that can include file or sound names; alerts are HTML.
          message = _.escHTML(error.reason);
          type = error.type || type;
        }
        Player.alert(message, type || 'error', 5);
      },

      /**
       * Show a notification using 4chan X or the native extention.
       */
      alert(content, type = 'info', lifetime = 5) {
        if (isChanX) {
          // Send plain text: an Element in the detail doesn't survive the trip between
          // separate script sandboxes (or 4chan X's extension build), so the notice never
          // appeared there. 4chan X renders string content as text.
          // Parsed in a <template>, which is inert: _.element would also wire up @event
          // attributes and let images load.
          const parsed = document.createElement('template');
          parsed.innerHTML = content;
          const detail = { content: parsed.content.textContent, type, lifetime };
          document.dispatchEvent(
            new CustomEvent('CreateNotification', {
              bubbles: true,
              detail: typeof cloneInto === 'function' ? cloneInto(detail, document.defaultView) : detail,
            }),
          );
        } else if (typeof Feedback !== 'undefined') {
          Feedback.showMessage(
            content,
            type === 'info' ? 'notify' : 'error',
            lifetime * 1000,
          );
        }
      },
    });

// Add each of the components to the player.
for (let name in components) {
  Player[name] = components[name];
  (Player[name].atRoot || []).forEach((k) => (Player[k] = Player[name][k]));
  (Player[name].public || []).forEach((k) => {
    Player._public.push(
      (Player[name].atRoot || []).includes(k) ? k : `${name}.${k}`,
    );
  });
}
