const { FFmpeg } = require('@ffmpeg/ffmpeg');
const cfg = require('./ffmpeg-config');
const util = require('./video-util');

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

// Fetch an asset and wrap it in a same-origin blob: URL for the ffmpeg loader.
async function toBlobURL(url, mime) {
  const bytes = await fetchBytes(url);
  return URL.createObjectURL(new Blob([bytes], { type: mime }));
}

const videoTool = module.exports = {
  _ffmpeg: null,
  _loaded: false,
  _loadingPromise: null,
  _muxChain: null,

  // Expose for other tools-module code / tests.
  _fetchBytes: fetchBytes,

  initialize() {
    Player.on('rendered', videoTool._updateButton);
    Player.on('playsound', videoTool._updateButton);
    Player.on('stop', videoTool._updateButton);
  },

  // Show the current-sound download button only while a muxable sound is playing.
  _updateButton() {
    const btn = Player.$(`.${ns}-download-video-button`);
    if (!btn) {
      return;
    }
    const show = Player.playing && !Player.playing.standaloneVideo;
    btn.style.display = show ? null : 'none';
  },

  // Lazy-load @ffmpeg/core (single-threaded) once per session.
  async loadFFmpeg() {
    if (videoTool._loaded) {
      return;
    }
    if (videoTool._loadingPromise) {
      return videoTool._loadingPromise;
    }
    videoTool._loadingPromise = (async () => {
      const [ coreURL, wasmURL, classWorkerURL ] = await Promise.all([
        toBlobURL(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.js`, 'text/javascript'),
        toBlobURL(`${cfg.FFMPEG_CORE_BASE}/ffmpeg-core.wasm`, 'application/wasm'),
        toBlobURL(cfg.FFMPEG_WRAPPER_WORKER_URL, 'text/javascript')
      ]);
      const ff = new FFmpeg();
      await ff.load({ coreURL, wasmURL, classWorkerURL });
      videoTool._ffmpeg = ff;
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

  // Tear the worker down — used on cancel and after a failed job to reclaim heap.
  terminate() {
    if (videoTool._ffmpeg) {
      try {
        videoTool._ffmpeg.terminate();
      } catch (err) { /* already gone */ }
    }
    videoTool._ffmpeg = null;
    videoTool._loaded = false;
    videoTool._loadingPromise = null;
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

  // Serialize mux jobs — there is a single ffmpeg worker, so overlapping jobs
  // (e.g. two download surfaces clicked in quick succession) would clash in MEMFS.
  mux(sound, opts) {
    const run = () => videoTool._muxJob(sound, opts);
    videoTool._muxChain = (videoTool._muxChain || Promise.resolve()).then(run, run);
    return videoTool._muxChain;
  },

  // Produce a single mp4 Blob: visual looped to the audio length, H.264 + AAC.
  async _muxJob(sound, opts) {
    opts = opts || {};
    await videoTool.loadFFmpeg();
    const ff = videoTool._ffmpeg;
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

    // Wire progress for the duration of this job.
    const onProgress = opts.onProgress;
    const progressHandler = onProgress && (e => onProgress(Math.max(0, Math.min(1, e.progress))));
    progressHandler && ff.on('progress', progressHandler);

    // Abort support.
    const onAbort = () => videoTool.terminate();
    opts.signal && opts.signal.addEventListener('abort', onAbort, { once: true });

    const visIn = kind === 'video' ? 'visual.mp4'
      : kind === 'gif' ? 'visual.gif'
        : 'visual.img';
    const written = [];
    const cleanup = async () => {
      progressHandler && ff.off && ff.off('progress', progressHandler);
      for (const f of written) {
        try {
          await ff.deleteFile(f);
        } catch (err) { /* gone */ }
      }
    };

    try {
      await ff.writeFile(visIn, visualBytes); written.push(visIn);
      await ff.writeFile('audio', audioBytes); written.push('audio');

      if (kind === 'still') {
        await ff.exec(util.stillArgs({
          image: visIn, audio: 'audio', out: 'out.mp4',
          dur, fps: cfg.STILL_FPS, audioBitrate: cfg.AUDIO_BITRATE
        }));
      } else {
        await ff.exec(util.loopEncodeArgs({ visual: visIn, out: 'loop.mp4', isGif: kind === 'gif' }));
        written.push('loop.mp4');
        await ff.exec(util.streamLoopCutArgs({ loop: 'loop.mp4', out: 'whole.mp4', dur }));
        written.push('whole.mp4');
        await ff.deleteFile('loop.mp4'); written.splice(written.indexOf('loop.mp4'), 1);
        await ff.exec(util.muxArgs({ video: 'whole.mp4', audio: 'audio', out: 'out.mp4', audioBitrate: cfg.AUDIO_BITRATE }));
      }
      written.push('out.mp4');
      const data = await ff.readFile('out.mp4'); // Uint8Array
      return new Blob([data], { type: 'video/mp4' });
    } finally {
      opts.signal && opts.signal.removeEventListener('abort', onAbort);
      await cleanup();
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
      // A failed job can leave the wasm heap dirty; reset so the next attempt is clean.
      videoTool.terminate();
    }
  }
};
