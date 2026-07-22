const { FFmpeg } = require('@ffmpeg/ffmpeg');
const cfg = require('./ffmpeg-config');

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

  // Expose for other tools-module code / tests.
  _fetchBytes: fetchBytes,

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
  }
};
