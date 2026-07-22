const cfg = require('./ffmpeg-config');
const util = require('./video-util');

// The main-thread core loader eval()s the ffmpeg glue, which needs 'unsafe-eval'.
// Some archives (e.g. desuarchive) ship a CSP without it, so the feature can't run there.
const ENCODER_CSP_MSG = 'Combined video download isn\'t available on this site — its security policy (CSP) blocks the video encoder.';

// Fetch a URL as raw bytes. Remote -> GM.xmlHttpRequest (avoids CORS); local blob: -> fetch.
// Always resolves a Uint8Array (never a GM Blob — cross-realm .arrayBuffer() can be undefined).
function fetchBytes(url) {
  if (/^blob:/.test(url)) {
    return fetch(url).then(r => r.arrayBuffer()).then(b => new Uint8Array(b));
  }
  return new Promise((resolve, reject) => {
    GM.xmlHttpRequest({
      method: 'GET',
      url,
      responseType: 'arraybuffer',
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

  // Toggle the busy spinner on the download button. Ref-counted so a batch of
  // serialized jobs keeps it lit without flicker. The spinner is a CSS transform
  // animation (compositor thread), so it keeps moving even while a synchronous
  // exec() blocks the main thread.
  _setProcessing(on) {
    videoTool._processingCount = Math.max(0, videoTool._processingCount + (on ? 1 : -1));
    const btn = Player.$(`.${ns}-download-video-button`);
    btn && btn.classList[videoTool._processingCount > 0 ? 'add' : 'remove'](`${ns}-processing`);
  },

  // Load the single-threaded ffmpeg core ON THE MAIN THREAD (no Web Worker).
  // 4chan's CSP blocks blob:/cross-origin workers (worker-src falls back to
  // script-src, which lacks blob:), but allows 'unsafe-eval' — so we eval the core
  // glue and run the wasm inline. The single-thread core spawns no workers itself.
  async loadFFmpeg() {
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
        const [ coreText, wasmBytes ] = await Promise.all([
          fetchText(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.js`),
          fetchBytes(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.wasm`)
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
      core.setLogger(e => { videoTool._lastLog = e && e.message; });
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

  // Sample-accurate audio duration via WebAudio; decodeAudioData detaches its input,
  // so pass a copy. Callers fall back to an ffmpeg probe if this rejects.
  async audioDuration(bytes) {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    try {
      const copy = bytes.slice().buffer;
      const decoded = await ctx.decodeAudioData(copy);
      return decoded.duration;
    } finally {
      try {
        await ctx.close();
      } catch (err) { /* already closed */ }
    }
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
    await videoTool.loadFFmpeg();
    const core = videoTool._ffmpeg;
    const kind = util.classifyVisual(sound.image, sound.type);

    // Fetch both streams (remote via GM.xhr, local blob: via fetch).
    let audioBytes;
    try {
      audioBytes = await fetchBytes(sound.src);
    } catch (err) {
      let host = '';
      try {
        host = ' from ' + new URL(sound.src).host;
      } catch (e) { /* non-URL src */ }
      throw new PlayerError(`Couldn't fetch the sound${host}.`, 'warning', err);
    }
    const visualBytes = await fetchBytes(sound.image);
    const dur = await videoTool.audioDuration(audioBytes);
    if (!(dur > 0)) {
      throw new PlayerError('Could not read the audio duration.', 'warning');
    }

    videoTool._progressCb = opts.onProgress
      ? e => opts.onProgress(Math.max(0, Math.min(1, (e && e.progress) || 0)))
      : null;

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

      const preset = Player.config.videoUltrafast ? 'ultrafast' : 'veryfast';
      if (kind === 'still') {
        exec(util.stillArgs({
          image: visIn, audio: 'audio', out: 'out.mp4',
          dur, fps: cfg.STILL_FPS, audioBitrate: cfg.AUDIO_BITRATE, preset
        }));
      } else {
        exec(util.loopEncodeArgs({ visual: visIn, out: 'loop.mp4', isGif: kind === 'gif', preset }));
        written.push('loop.mp4');
        exec(util.streamLoopCutArgs({ loop: 'loop.mp4', out: 'whole.mp4', dur }));
        written.push('whole.mp4');
        core.FS.unlink('loop.mp4'); written.splice(written.indexOf('loop.mp4'), 1);
        exec(util.muxArgs({ video: 'whole.mp4', audio: 'audio', out: 'out.mp4', audioBitrate: cfg.AUDIO_BITRATE }));
      }
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
      // logError pulls the level from a PlayerError's .type; 'error' is the default otherwise.
      Player.logError('Failed to create the video.', err, 'error');
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
