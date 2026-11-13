const { compileAction, splitStatements } = require('./parse-action');

module.exports = {
  atRoot: ['on', 'off', 'trigger'],

  // Holder of event handlers.
  _events: {},

  initialize() {
    const eventLocations = { Player, ...Player.components };
    const audio = [];

    for (let comp of Object.values(eventLocations)) {
      comp.audioEvents && audio.push(comp.audioEvents);
    }

    // Clear mousedown listeners when the mouse/touch is released.
    document.body.addEventListener('pointerup', Player.events.clearMousedown);
    document.body.addEventListener(
      'pointercancel',
      Player.events.clearMousedown,
    );

    Player.on('rendered', function () {
      // Wire up audio events.
      for (let eventList of audio) {
        for (let evt in eventList) {
          let handlers = Array.isArray(eventList[evt])
            ? eventList[evt]
            : [eventList[evt]];
          handlers.forEach((handler) =>
            Player.audio.addEventListener(evt, Player.getHandler(handler)),
          );
        }
      }
    });
  },

  /**
   * Add event listeners from event attributes on an elements and all it's decendents.
   *
   * @param {Element} element The element to set event listeners for.
   */
  apply(element) {
    // Find all elements with event attributes, including the given element.
    const eventAttrs = [];
    const elAttrs = document.evaluate(
      './/attribute::*[starts-with(name(), "@")]',
      element,
      null,
      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
      null,
    );
    // './/' is descendant-or-self, so this already covers the descendants. (A second query
    // for them wired every handler twice.)
    for (let i = 0; i < elAttrs.snapshotLength; i++) {
      eventAttrs.push(elAttrs.snapshotItem(i));
    }

    for (let attr of eventAttrs) {
      Player.events.set(attr.ownerElement, attr.name.slice(1), attr.value);
    }
  },

  set(el, attr, action) {
    action = action.trim();
    const [evt, ...modsArr] = attr.split('.');
    const mods = modsArr.reduce((m, n) => {
      m[n] = true;
      return m;
    }, {});

    // Remove listener already set. A pointdrag listener is stored under pointerdown, which
    // is what it listens to, so look it up there (re-rendering the header added another
    // each time).
    const listeners = el._eventListeners || (el._eventListeners = {});
    const listenedEvt = evt === 'pointdrag' ? 'pointerdown' : evt;
    listeners[listenedEvt] && el.removeEventListener(listenedEvt, listeners[listenedEvt]);

    // Resolve the handler, cheapest first:
    //   1. getHandler — a bare method/property path (no eval).
    //   2. compileAction — parse a simple `method(args)` call and dispatch without
    //      eval, so arg-bearing handlers work under CSPs lacking 'unsafe-eval'.
    //   3. new Function — the general fallback (blocked by such CSPs, hence 1 & 2).
    // Several statements (`a.b;c.d($event)`) are resolved one by one and run in order.
    // They used to fall through to new Function, where a bare `a.b` is only referenced,
    // never called.
    const statements = action ? splitStatements(action) : [];
    const compiled = statements && statements.map(Player.events._compileStatement);
    let handler =
      action &&
      (compiled && compiled.length && compiled.every(Boolean) && (compiled.length === 1
        ? compiled[0]
        : function (...args) {
          let result;
          for (const fn of compiled) {
            result = fn.apply(this, args);
          }
          return result;
        }) ||
        function ($event) {
          try {
            const func = new Function(
              'Player',
              '$event',
              `with (Player) { ${action} }`,
            );
            handler = func.bind(null, Player);
            handler($event);
          } catch (err) {
            console.error('Error creating event handler:', err, action);
          }
        });
    const listener = function (evt) {
      if (mods.prevent) {
        evt.preventDefault();
      }
      if (mods.stop) {
        evt.stopPropagation();
      }
      // The `.disabled` modifier skips the handler when the element has the
      // disabled class (e.g. a greyed-out next/prev button).
      if (mods.disabled && evt.currentTarget.classList.contains('disabled')) {
        return;
      }

      return handler && handler.call(this, evt, Player);
    };

    // Point drag is a special case to handle pointer dragging.
    if (evt === 'pointdrag') {
      // Stop touch input panning the page instead, which cancels the drag. (A CSS rule on
      // the attribute missed every one with modifiers, like @pointdrag.prevent.)
      el.classList.add('no-touch-action');
      // A drag whose button was released where we didn't see it (a context menu took the
      // mouseup) ends at the next move rather than following the cursor around.
      const moveListener = function (e) {
        if (e.pointerType === 'mouse' && e.buttons === 0) {
          return Player.events.clearMousedown(e);
        }
        return listener.call(this, e);
      };
      const downListener = (e) => {
        // Only the main button (or a touch or pen) drags: a right-click opened a context
        // menu over a drag that then never ended, and seeked the seek bar.
        if (e.button > 0) {
          return;
        }
        // No idea why but this seems to fire twice. So avoid that.
        if (!e._dragInit) {
          e._dragInit = true;
          listeners.pointdragstart && listeners.pointdragstart(e);
          if (!e.preventDrag) {
            el.setPointerCapture(e.pointerId);
            Player._mousedown = el;
            Player._mousedownListener = moveListener;
            Player._mousedownMoveEl = mods.unbound
              ? document.documentElement
              : el;
            Player._mousedownMoveEl.addEventListener(
              'pointermove',
              moveListener,
              mods,
            );
            el.addEventListener('pointerleave', moveListener, mods);
            mods.boxed &&
              el.addEventListener('pointerleave', Player.events.clearMousedown);
            !mods.move && listener(e);
          }
        }
      };
      el.addEventListener('pointerdown', downListener);
      listeners.pointerdown = downListener;
    } else if (evt === 'pointdragstart' || evt === 'pointdragend') {
      listeners[evt] = listener;
    } else {
      el.addEventListener(evt, listener, mods);
      listeners[evt] = listener;
    }
  },

  /**
   * Resolve one handler statement without eval: a bare method path, or a simple
   * `method(args)` call. Returns a function or null.
   */
  _compileStatement(statement) {
    const fn = Player.getHandler(statement);
    if (typeof fn === 'function') {
      return fn;
    }
    return compileAction(statement, path => {
      const fn = _.get(Player, path);
      if (typeof fn !== 'function') {
        return null;
      }
      const lastDot = path.lastIndexOf('.');
      const scope = lastDot > -1 ? _.get(Player, path.slice(0, lastDot)) : Player;
      return { fn, scope };
    });
  },

  /**
   * Create an event listener on the player.
   *
   * @param {String} evt The name of the events.
   * @param {function} handler The handler function.
   */
  on(evt, handler) {
    const evts = Array.isArray(evt) ? evt : [evt];
    evts.forEach((evt) => {
      Player.events._events[evt] || (Player.events._events[evt] = []);
      Player.events._events[evt].push(handler);
    });
  },

  /**
   * Remove an event listener on the player.
   *
   * @param {String} evt The name of the events.
   * @param {function} handler The handler function.
   */
  off(evt, handler) {
    const index =
      Player.events._events[evt] && Player.events._events[evt].indexOf(handler);
    if (index > -1) {
      Player.events._events[evt].splice(index, 1);
    }
  },

  /**
   * Trigger an event on the player.
   *
   * @param {String} evt The name of the events.
   * @param {*} data Data passed to the handler.
   */
  async trigger(evt, ...data) {
    // Iterate a copy: a handler that removes itself (threads._initialFetch does) would
    // otherwise make the loop skip the handler after it.
    const events = (Player.events._events[evt] || []).slice();
    for (let handler of events) {
      // One failing handler shouldn't stop the rest of the components reacting.
      try {
        await handler(...data);
      } catch (err) {
        console.error(`[4chan sounds player] Error handling '${evt}'`, err);
      }
    }
  },

  clearMousedown(e) {
    if (Player._mousedown) {
      Player._mousedown.releasePointerCapture(e.pointerId);
      Player._mousedownMoveEl.removeEventListener(
        'pointermove',
        Player._mousedownListener,
      );
      Player._mousedown.removeEventListener(
        'pointerleave',
        Player._mousedownListener,
      );
      Player._mousedown._eventListeners.pointdragend &&
        Player._mousedown._eventListeners.pointdragend(e);
      Player._mousedown = Player._mousedownListener = null;
    }
  },
};
