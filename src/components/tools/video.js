const cfg = require('./ffmpeg-config');
const util = require('./video-util');

// The main-thread core loader eval()s the ffmpeg glue, which needs 'unsafe-eval'.
// Some archives (e.g. desuarchive) ship a CSP without it, so the feature can't run there.
const ENCODER_CSP_MSG = 'Combined video download isn\'t available on this site — its security policy (CSP) blocks the video encoder.';

// One shared AudioContext reused for all duration probes (browsers cap the count).
let _audioCtx = null;

// Give the browser a chance to paint before a synchronous exec blocks the main
// thread, so the status set just beforehand is actually visible during the freeze.
// rAF doesn't fire in background tabs, hence the timeout fallback.
function paint() {
  return new Promise(resolve => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    typeof requestAnimationFrame === 'function'
      && requestAnimationFrame(() => requestAnimationFrame(finish));
    setTimeout(finish, 50);
  });
}

// Fetch a URL as raw bytes. Remote -> GM.xmlHttpRequest (avoids CORS); local blob: -> fetch.
// Always resolves a Uint8Array (never a GM Blob — cross-realm .arrayBuffer() can be undefined).
// onProgress (if given) receives a 0-1 ratio while downloading.
function fetchBytes(url, onProgress) {
  if (/^blob:/.test(url)) {
    return fetch(url).then(r => r.arrayBuffer()).then(b => new Uint8Array(b));
  }
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      method: 'GET',
      url,
      responseType: 'arraybuffer',
      onprogress: onProgress && (r => r.total > 0 && onProgress(r.loaded / r.total)),
      onload: r => resolve(new Uint8Array(r.response)),
      onerror: reject,
      onabort: () => reject(Object.assign(new Error('aborted'), { aborted: true }))
    });
  });
}

// Fetch a URL as text (GM.xhr).
function fetchText(url) {
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      method: 'GET',
      url,
      responseType: 'text',
      onload: r => resolve(r.responseText),
      onerror: reject
    });
  });
}

const videoTool = module.exports = {
  _ffmpeg: null,
  _loaded: false,
  _loadingPromise: null,
  _muxChain: null,
  // Cached across a terminate()/reload so a reset doesn't re-download the core.
  _createCore: null,
  _wasmBinary: null,
  _wasmURL: null,
  _progressCb: null,
  _processingCount: 0,
  _evalOk: false,
  _evalBlocked: false,

  // Expose for other tools-module code / tests.
  _fetchBytes: fetchBytes,

  // Whether this site's CSP allows the eval the main-thread core loader needs.
  // Probed once, cheaply, and cached (never throws) — used to hide the button up
  // front on sites (e.g. desuarchive) that lack 'unsafe-eval', where its @click
  // handler couldn't even compile via `new Function`.
  _encoderAvailable() {
    if (videoTool._evalBlocked) {
      return false;
    }
    if (videoTool._evalOk) {
      return true;
    }
    try {
      (0, eval)('1');
      videoTool._evalOk = true;
      return true;
    } catch (e) {
      videoTool._evalBlocked = true;
      return false;
    }
  },

  // Throw a clear PlayerError when the encoder can't run here — so a mux attempt
  // fails fast with a visible message instead of downloading ~31MB then dying.
  _assertEncoderAvailable() {
    if (!videoTool._encoderAvailable()) {
      throw new PlayerError(ENCODER_CSP_MSG, 'warning');
    }
  },

  // Toggle the busy state on the download button. Ref-counted so a batch of
  // serialized jobs keeps it lit without flicker.
  _setProcessing(on) {
    videoTool._processingCount = Math.max(0, videoTool._processingCount + (on ? 1 : -1));
    const btn = Player.$(`.${ns}-download-video-button`);
    if (!btn) {
      return;
    }
    const busy = videoTool._processingCount > 0;
    btn.classList[busy ? 'add' : 'remove'](`${ns}-processing`);
    if (!busy) {
      btn.removeAttribute('data-progress');
      btn.style.removeProperty('--fcsp-vid-progress');
      btn.removeAttribute('title');
    }
  },

  // Report what the encoder is doing. `ratio` (0-1) draws a determinate ring;
  // omit it for the indeterminate spinner. The label lands in the button's tooltip
  // and is echoed to the console, so a step that stalls is identifiable.
  //
  // NOTE: core.exec() is synchronous and the core has no ASYNCIFY, so nothing can
  // repaint *during* an encode. Real byte-level progress is therefore only possible
  // for the async phases (encoder download, media fetches); for the encode itself we
  // set the label and await paint() BEFORE blocking, so the freeze is attributable.
  _setStatus(label, ratio) {
    if (label && label !== videoTool._statusLabel) {
      videoTool._statusLabel = label;
      MODE === 'development' && console.log('[4chan sounds player] video:', label);
    }
    const btn = Player.$(`.${ns}-download-video-button`);
    if (!btn) {
      return;
    }
    if (ratio == null || !isFinite(ratio)) {
      btn.removeAttribute('data-progress');
      btn.style.removeProperty('--fcsp-vid-progress');
      btn.title = label || '';
      return;
    }
    const pct = Math.max(0, Math.min(100, Math.round(ratio * 100)));
    btn.setAttribute('data-progress', '');
    btn.style.setProperty('--fcsp-vid-progress', pct);
    btn.title = `${label} ${pct}%`;
  },

  // Load the single-threaded ffmpeg core ON THE MAIN THREAD (no Web Worker).
  // 4chan's CSP blocks blob:/cross-origin workers (worker-src falls back to
  // script-src, which lacks blob:), but allows 'unsafe-eval' — so we eval the core
  // glue and run the wasm inline. The single-thread core spawns no workers itself.
  async loadFFmpeg(onProgress) {
    // Bail before the ~31MB download if this site's CSP won't let us run the core.
    videoTool._assertEncoderAvailable();
    if (videoTool._loaded) {
      return;
    }
    if (videoTool._loadingPromise) {
      return videoTool._loadingPromise;
    }
    videoTool._loadingPromise = (async () => {
      if (!videoTool._createCore) {
        // The wasm is ~31MB and dominates the wait, so it drives the progress ratio.
        const [ coreText, wasmBytes ] = await Promise.all([
          fetchText(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.js`),
          fetchBytes(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.wasm`, onProgress)
        ]);
        // Load the core glue and capture the factory. The UMD is `var createFFmpegCore = …`;
        // read it back as the eval COMPLETION VALUE (resolved by binding) rather than via
        // `self`, because the Firefox userscript sandbox doesn't mirror an eval'd global var
        // onto the `self` object. `new Function` (explicit return) is the fallback.
        let create;
        try {
          create = (0, eval)(coreText + '\n;typeof createFFmpegCore!=="undefined"?createFFmpegCore:void 0;');
        } catch (e) { /* fall back to new Function below */ }
        if (typeof create !== 'function') {
          create = new Function(coreText + '\nreturn typeof createFFmpegCore!=="undefined"?createFFmpegCore:void 0;')();
        }
        if (typeof create !== 'function') {
          throw new PlayerError('Video encoder failed to initialize (createFFmpegCore missing).', 'error');
        }
        videoTool._createCore = create;
        videoTool._wasmBinary = wasmBytes.buffer;
        // A fallback wasm URL for the core's own loader; wasmBinary above means it
        // usually never needs to fetch this.
        videoTool._wasmURL = URL.createObjectURL(new Blob([ wasmBytes ], { type: 'application/wasm' }));
      }
      const core = await videoTool._createCore({
        wasmBinary: videoTool._wasmBinary,
        mainScriptUrlOrBlob: `${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.js#${btoa(JSON.stringify({ wasmURL: videoTool._wasmURL, workerURL: '' }))}`
      });
      core.setLogger(e => {
        const msg = e && e.message;
        videoTool._lastLog = msg;
        if (videoTool._capturingLog && msg != null) {
          videoTool._captured.push(msg);
        }
      });
      core.setProgress(e => videoTool._progressCb && videoTool._progressCb(e));
      videoTool._ffmpeg = core;
      videoTool._loaded = true;
    })();
    try {
      await videoTool._loadingPromise;
    } catch (err) {
      // Allow a later retry after a transient failure.
      videoTool._loadingPromise = null;
      throw err;
    }
  },

  // Drop the core instance so the next load starts from a fresh heap. The cached
  // factory + wasm are kept, so this reset doesn't re-download the ~31MB core.
  terminate() {
    videoTool._ffmpeg = null;
    videoTool._loaded = false;
    videoTool._loadingPromise = null;
    videoTool._progressCb = null;
  },

  // Sample-accurate audio duration via WebAudio. decodeAudioData detaches its input,
  // so pass a copy. One shared context is reused across a batch (browsers cap the
  // number of AudioContexts). Callers fall back to _probeDurationFFmpeg if this rejects.
  async audioDuration(bytes) {
    const AC = window.AudioContext || window.webkitAudioContext;
    _audioCtx = _audioCtx || new AC();
    const decoded = await _audioCtx.decodeAudioData(bytes.slice().buffer);
    return decoded.duration;
  },

  // Fallback: read the duration ffmpeg reports for the already-written 'audio' file —
  // handles formats WebAudio can't decode (e.g. Ogg/Vorbis on Safari).
  _probeDurationFFmpeg(core) {
    videoTool._captured = [];
    videoTool._capturingLog = true;
    try {
      core.exec('-i', 'audio');
    } catch (e) { /* `-i` with no output errors; we only want the logged Duration */ }
    videoTool._capturingLog = false;
    for (const line of videoTool._captured) {
      const m = line.match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/);
      if (m) {
        return (+m[1]) * 3600 + (+m[2]) * 60 + parseFloat(m[3]);
      }
    }
    return 0;
  },

  // Serialize mux jobs — there is a single core instance, so overlapping jobs
  // (e.g. two download surfaces clicked in quick succession) would clash in MEMFS.
  mux(sound, opts) {
    const run = () => videoTool._muxJob(sound, opts);
    videoTool._muxChain = (videoTool._muxChain || Promise.resolve()).then(run, run);
    return videoTool._muxChain;
  },

  // Wrap a job with the busy-spinner state (set before the async work so it paints
  // and is compositor-animating before any blocking exec).
  async _muxJob(sound, opts) {
    videoTool._setProcessing(true);
    try {
      return await videoTool._runMux(sound, opts);
    } finally {
      videoTool._setProcessing(false);
    }
  },

  // Produce a single mp4 Blob: visual looped to the audio length, H.264 + AAC.
  // NOTE: core.exec() runs synchronously on the main thread, so the tab is briefly
  // unresponsive during encoding (bounded by the encode-once loop strategy).
  async _runMux(sound, opts) {
    opts = opts || {};

    // Weight the phases so the ring advances sensibly. The encoder download only
    // happens once per session, so it only takes a slice when it's actually needed.
    const needsLoad = !videoTool._loaded;
    const W = needsLoad
      ? { load: 0.6, fetch: 0.15 }
      : { load: 0, fetch: 0.4 };
    // Report both to the button and to any caller-supplied bar (e.g. Download All).
    const report = (label, ratio) => {
      videoTool._setStatus(label, ratio);
      opts.onProgress && ratio != null && opts.onProgress(Math.max(0, Math.min(1, ratio)));
    };

    report('Loading the video encoder', needsLoad ? 0 : W.load);
    await videoTool.loadFFmpeg(r => report('Loading the video encoder', r * W.load));
    const core = videoTool._ffmpeg;
    const kind = util.classifyVisual(sound.image, sound.type);

    // Fetch both streams (remote via GM.xhr, local blob: via fetch).
    let audioBytes;
    try {
      audioBytes = await fetchBytes(sound.src, r => report('Downloading the sound', W.load + r * W.fetch * 0.5));
    } catch (err) {
      let host = '';
      try {
        host = ' from ' + new URL(sound.src).host;
      } catch (e) { /* non-URL src */ }
      throw new PlayerError(`Couldn't fetch the sound${host}.`, 'warning', err);
    }
    const visualBytes = await fetchBytes(sound.image, r => report('Downloading the image', W.load + W.fetch * 0.5 + r * W.fetch * 0.5));
    const encBase = W.load + W.fetch;

    // The core reports progress during exec, but nothing can repaint while exec
    // blocks — so keep the last value for diagnostics on failure rather than for UI.
    videoTool._progressCb = e => {
      videoTool._lastExecProgress = e && e.progress;
    };

    const visIn = kind === 'video' ? 'visual.mp4'
      : kind === 'gif' ? 'visual.gif'
        : 'visual.img';
    const written = [];
    const exec = args => {
      core.setTimeout(-1);
      core.exec(...args);
    };
    const cleanup = () => {
      videoTool._progressCb = null;
      for (const f of written) {
        try {
          core.FS.unlink(f);
        } catch (err) { /* gone */ }
      }
    };

    try {
      core.FS.writeFile(visIn, visualBytes); written.push(visIn);
      core.FS.writeFile('audio', audioBytes); written.push('audio');

      // Duration: WebAudio primary, ffmpeg probe fallback (needs 'audio' in MEMFS).
      let dur = 0;
      try {
        dur = await videoTool.audioDuration(audioBytes);
      } catch (e) { /* fall back to the ffmpeg probe below */ }
      if (!(dur > 0)) {
        dur = videoTool._probeDurationFFmpeg(core);
      }
      if (!(dur > 0)) {
        throw new PlayerError('Could not read the audio duration.', 'warning');
      }

      const preset = Player.config.videoUltrafast ? 'ultrafast' : 'veryfast';
      // Each exec blocks the main thread, so publish the step and let it paint first.
      if (kind === 'still') {
        // One pass, and by default a single frame spanning the whole track — the
        // picture never changes, so there's nothing else to encode.
        report('Encoding the video (the tab will freeze briefly)', encBase);
        await paint();
        exec(util.stillArgs({
          image: visIn, audio: 'audio', out: 'out.mp4',
          dur,
          fps: cfg.STILL_SINGLE_FRAME ? util.singleFrameRate(dur) : cfg.STILL_FPS,
          audioBitrate: cfg.AUDIO_BITRATE, preset
        }));
      } else {
        // Animated: encode one loop, then copy it over the audio so the repeats
        // cost nothing to encode.
        report('Encoding the loop (the tab will freeze briefly)', encBase);
        await paint();
        exec(util.loopEncodeArgs({ visual: visIn, out: 'loop.mp4', isGif: kind === 'gif', preset }));
        written.push('loop.mp4');

        report('Looping it over the sound', encBase + (1 - encBase) * 0.6);
        await paint();
        exec(util.loopMuxArgs({ loop: 'loop.mp4', audio: 'audio', out: 'out.mp4', dur, audioBitrate: cfg.AUDIO_BITRATE }));
      }
      report('Saving', 1);
      written.push('out.mp4');
      const data = core.FS.readFile('out.mp4', { encoding: 'binary' }); // Uint8Array
      if (!data || !data.length) {
        throw new PlayerError('The video encoder produced no output.', 'error');
      }
      return new Blob([ data ], { type: 'video/mp4' });
    } finally {
      cleanup();
    }
  },

  // Public entry point for all three UI surfaces.
  async downloadVideo(soundOrId) {
    const sound = typeof soundOrId === 'object'
      ? soundOrId
      : Player.sounds.find(s => s.id === soundOrId);
    if (!sound) {
      return;
    }

    // Standalone videos ARE the sound — nothing to mux, just download the file.
    if (sound.standaloneVideo) {
      return Player.tools.download(sound.image, sound.filename);
    }

    try {
      const blob = await videoTool.mux(sound);
      const url = URL.createObjectURL(blob);
      const a = _.element(`<a href="${url}" download="${_.escAttr(util.muxFileName(sound.title, sound.filename))}" rel="noopener" target="_blank"></a>`);
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      // Name the step that failed — otherwise a mid-encode failure is opaque.
      const at = videoTool._statusLabel ? ` (during: ${videoTool._statusLabel.replace(/ \(.*\)$/, '')})` : '';
      videoTool._lastLog && console.error('[4chan sounds player] last encoder log:', videoTool._lastLog);
      // logError pulls the level from a PlayerError's .type; 'error' is the default otherwise.
      Player.logError(`Failed to create the video${at}.`, err, 'error');
      if (videoTool._evalBlocked) {
        // The feature can't run on this site — drop the now-useless button.
        Player.footer && Player.footer.render();
      } else {
        // A failed job can leave the wasm heap dirty; reset so the next attempt is clean.
        videoTool.terminate();
      }
    }
  }
};
