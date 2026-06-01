const _ = module.exports;

module.exports.set = function set(object, path, value) {
  const props = path.split('.');
  const lastProp = props.pop();
  const setOn = props.reduce((obj, k) => obj[k] || (obj[k] = {}), object);
  setOn && (setOn[lastProp] = value);
  return object;
};

module.exports.get = function get(object, path, dflt) {
  if (typeof path !== 'string') {
    return dflt;
  }
  if (path === '') {
    return object;
  }
  const props = path.split('.');
  const lastProp = props.pop();
  const parent = props.reduce((obj, k) => obj && obj[k], object);
  // Guard the `in` operator: it throws on a primitive parent (e.g. a mistyped config
  // value), so fall back to the default rather than throwing out of get().
  return parent !== null && typeof parent === 'object' && lastProp in parent ? parent[lastProp] : dflt;
};

/**
 * Check two values are equal. Arrays/Objects are deep checked.
 */
module.exports.isEqual = function isEqual(a, b, strict = true) {
  if (a === b) {
    return true;
  }
  if (a === null || b === null || typeof a !== typeof b) {
    return strict ? a === b : a == b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length && a.every((_a, i) => isEqual(_a, b[i], strict))
    );
  }
  // An array and a plain object both report typeof 'object' and can both have zero
  // own keys, so without this guard isEqual([], {}) would wrongly return true.
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
      return false;
    }
    return keysA.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(b, key) &&
        isEqual(a[key], b[key], strict),
    );
  }
  return strict ? a === b : a == b;
};

module.exports.toDuration = function toDuration(number) {
  // isFinite filters Infinity (a live-stream / unknown media.duration) which would
  // otherwise propagate through the modulo math as NaN and render "NaN:NaN".
  number = isFinite(number) ? Math.floor(number) : 0;
  let [seconds, minutes, hours] = _duration(0, number);
  seconds < 10 && (seconds = '0' + seconds);
  hours && minutes < 10 && (minutes = '0' + minutes);
  return (hours ? hours + ':' : '') + minutes + ':' + seconds;
};

module.exports.timeAgo = function timeAgo(date) {
  const [seconds, minutes, hours, days, weeks] = _duration(
    Math.floor(date),
    Math.floor(Date.now() / 1000),
  );
  return weeks > 1
    ? weeks + ' weeks ago'
    : days > 0
      ? days + (days === 1 ? ' day' : ' days') + ' ago'
      : hours > 0
        ? hours + (hours === 1 ? ' hour' : ' hours') + ' ago'
        : minutes > 0
          ? minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago'
          : seconds + (seconds === 1 ? ' second' : ' seconds') + ' ago';
};

function _duration(from, to) {
  const diff = Math.max(0, to - from);
  return [
    diff % 60,
    Math.floor(diff / 60) % 60,
    Math.floor(diff / 60 / 60) % 24,
    Math.floor(diff / 60 / 60 / 24) % 7,
    Math.floor(diff / 60 / 60 / 24 / 7),
  ];
}

module.exports.debounce = function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

module.exports.waitFor = async function waitFor(selector, timeout = 3000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const el = document.querySelector(selector);
    if (el) {
      return el;
    }
    await new Promise((r) => setTimeout(r, 100));
  }
  return null;
};

module.exports.element = function element(
  html,
  parent,
  position = 'beforeend',
) {
  let el;
  if (html instanceof Node) {
    el = html;
  } else {
    const container = document.createElement('div');
    container.innerHTML = html;
    el = container.children[0];
  }
  parent && parent.insertAdjacentElement(position, el);
  el instanceof Element && _.elementHandler(el);
  return el;
};

module.exports.elementHTML = function elementHTML(el, content) {
  el.innerHTML = content;
  _.elementHandler(el);
};

module.exports.elementHandler = function elementHandler(el) {
  // Wire up resize elements.
  el.querySelectorAll(`.${ns}-expander`).forEach((el) => {
    el.classList.add('no-touch-action');
    Player.events.set(el, 'pointdragstart', 'position.initResize');
    Player.events.set(el, 'pointdrag.unbound', 'position.doResize');
    Player.events.set(el, 'pointdragend', 'position.stopResize');
  });
  // Wire up popovers.
  const popovers = Array.from(el.querySelectorAll(`.${ns}-popover`));
  el.classList.contains(`${ns}-popover`) && popovers.push(el);
  popovers.forEach((popover) => {
    popover.addEventListener('mouseenter', Player.display._popoverMouseEnter);
    popover.addEventListener('mouseleave', Player.display._popoverMouseLeave);
    popover.nodeName !== 'A' &&
      popover.addEventListener('click', Player.display._popoverClick);
  });
  // Wire up events from attributes.
  Player.events.apply(el);
};

/**
 * Replace audio.src with newSrc while preserving the user's playback state
 * across the implicit HTML5 reload. On failure, revert to the pre-swap URL and
 * re-seek so playback resumes from where it was (not from 0). For sound-webm
 * pairs, the linked video is paused before the swap and re-synced on metadata
 * load so audio/video stay in lockstep across the reroute.
 *
 * opts:
 *   master           Element whose paused state mirrors user intent (default: audio).
 *                    For inline sound-webm where video is the master, pass data.master.
 *   getVideo         () => linked video element to keep in sync, or null. Called at
 *                    swap-time AND at apply-time (post-load) so callers that mutate
 *                    Player.video during the load window resolve the current pair.
 *   ownerStillValid  () => false to abort post-load callbacks (e.g. Player.audio was
 *                    swapped to a standalone video during the load). Default: always.
 *   setInProgress    If true, set audio._rerouteInProgress = true around the swap so
 *                    controls.handleAudioError skips its 3s auto-advance — the
 *                    helper's own onError owns recovery.
 *
 * The cleanup is wired to audio._pendingReroute and carries `.time` and `.wasPaused`
 * expandos so a rapid double-swap inherits the ORIGINAL pre-swap state instead of
 * the synthetic paused=true the HTML5 load algorithm imposes mid-load.
 */
module.exports.swapAudioSrc = function (audio, newSrc, opts) {
  opts = opts || {};
  const master = opts.master || audio;
  const getVideo = opts.getVideo || (() => null);
  const ownerStillValid = opts.ownerStillValid || (() => true);

  const prior = audio._pendingReroute;
  const time = (prior && typeof prior.time === 'number') ? prior.time : audio.currentTime;
  const wasPaused = (prior && typeof prior.wasPaused === 'boolean') ? prior.wasPaused : master.paused;
  const priorSrc = audio.src;
  prior && prior();

  const initialVideo = getVideo();
  if (initialVideo && !initialVideo.paused) initialVideo.pause();

  if (opts.setInProgress) audio._rerouteInProgress = true;
  audio.src = newSrc;
  // Re-read after assignment: the browser normalizes the stored URL form.
  const expectedSrc = audio.src;

  const resume = currentVideo => {
    try {
      audio.currentTime = time;
      if (currentVideo) currentVideo.currentTime = time;
    } catch (e) { /* seek out of range */ }
    if (!wasPaused) {
      master.play().catch(() => { /* autoplay blocked */ });
      // Player.controls.sync bails at low readyState so one element doesn't
      // drag the other. Play both explicitly when they're sync-linked.
      const other = master === audio ? currentVideo : audio;
      if (other) other.play().catch(() => { /* autoplay blocked */ });
    }
  };

  const onLoad = () => {
    cleanup();
    if (!ownerStillValid() || audio.src !== expectedSrc) return;
    resume(getVideo());
  };

  const onError = () => {
    cleanup();
    // If the caller no longer owns this swap (Player.audio swapped) or another
    // mutator already changed src, leave the new owner alone — don't clobber
    // their src with a stale priorSrc.
    if (!ownerStillValid() || audio.src !== expectedSrc) return;
    audio.src = priorSrc;
    // Re-read after assignment so a later external mutator's src change is
    // detectable via !== priorSrcExpected.
    const priorSrcExpected = audio.src;
    // Install a revert-phase cleanup tracked by _pendingReroute so external
    // src mutations (Player.actions.play, _movePlaying, _removeForNode, stop)
    // can cancel the orphan onRevert listener. Also attach an error handler
    // so a priorSrc that ALSO fails doesn't leak the loadedmetadata listener
    // onto whatever src the audio element is reused for next.
    let onRevert, onRevertError;
    const revertCleanup = () => {
      audio.removeEventListener('loadedmetadata', onRevert);
      audio.removeEventListener('error', onRevertError);
      if (audio._pendingReroute === revertCleanup) audio._pendingReroute = null;
    };
    onRevert = () => {
      revertCleanup();
      if (!ownerStillValid() || audio.src !== priorSrcExpected) return;
      // Re-derive the linked video at apply-time per the helper's contract —
      // Player.video may have been reassigned during the revert load window.
      resume(getVideo());
    };
    onRevertError = () => {
      revertCleanup();
      // Both reroute target and original failed. Yield to global error handling
      // (handleAudioError auto-advance) — the audio is in a known-broken state.
    };
    revertCleanup.time = time;
    revertCleanup.wasPaused = wasPaused;
    audio._pendingReroute = revertCleanup;
    audio.addEventListener('loadedmetadata', onRevert);
    audio.addEventListener('error', onRevertError);
  };

  const cleanup = () => {
    audio.removeEventListener('loadedmetadata', onLoad);
    audio.removeEventListener('error', onError);
    if (opts.setInProgress) audio._rerouteInProgress = false;
    if (audio._pendingReroute === cleanup) audio._pendingReroute = null;
  };
  cleanup.time = time;
  cleanup.wasPaused = wasPaused;
  audio._pendingReroute = cleanup;
  audio.addEventListener('loadedmetadata', onLoad);
  audio.addEventListener('error', onError);
  return cleanup;
};

// Two-tier escape:
//   escapeDoubleQuote=false → HTML-attribute context (href, value, title, data-*).
//                              Escape only the markup-significant chars that the
//                              HTML parser treats specially. `\`, `\n`, `\r`, `;`
//                              are NOT special in attribute values and must round
//                              trip verbatim, otherwise an input value containing
//                              a backslash doubles on every save/render cycle.
//   escapeDoubleQuote=true  → JS-string-inside-attribute context (e.g. inside an
//                              @click='handler("..."")' delimiter pair). Must also
//                              escape the JS-string break-out chars (`\`, `;`,
//                              `\n`, `\r`) AND emit `\"` for the inner double-quote
//                              so the HTML parser hands `\"` to JS verbatim.
// Single-pass replace prevents the prior `&` -> `&amp;` step from being re-encoded
// by a subsequent `;` -> `&#59;` step (which produced `&amp&#59;` rendering as `&;`).
const escAttrHtmlRE = /[&<>'"]/g;
const escAttrJsRE = /[&<>\\;'"\n\r]/g;
module.exports.escAttr = function (str, escapeDoubleQuote) {
  const s = String(str == null ? '' : str);
  if (escapeDoubleQuote) {
    return s.replace(escAttrJsRE, c => {
      switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '\\': return '\\\\';
      case ';': return '&#59;';
      case "'": return '&#39;';
      case '"': return '\\&#34;';
      case '\n': return '\\n';
      case '\r': return '\\r';
      }
    });
  }
  return s.replace(escAttrHtmlRE, c => {
    switch (c) {
    case '&': return '&amp;';
    case '<': return '&lt;';
    case '>': return '&gt;';
    case "'": return '&#39;';
    case '"': return '&#34;';
    }
  });
};

// Lightweight HTML escape for text-node and textarea-body contexts. Only escapes
// the three characters the HTML parser treats as markup in those contexts; in
// particular leaves real newlines and backslashes alone so multi-line textareas
// (allow/filters lists, JSON host data) round-trip cleanly through save/load.
const escHTMLRE = /[&<>]/g;
module.exports.escHTML = function (str) {
  return String(str == null ? '' : str).replace(escHTMLRE, c => {
    switch (c) {
    case '&': return '&amp;';
    case '<': return '&lt;';
    case '>': return '&gt;';
    }
  });
};
