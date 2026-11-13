// Pinned ffmpeg.wasm asset locations + encode constants.
// The core (glue + wasm) is lazy-fetched at runtime and run on the MAIN THREAD
// (no Web Worker — 4chan's CSP blocks blob: workers). Versions verified in the spike.
module.exports = {
  // @ffmpeg/core 0.12.10 UMD build (ffmpeg-core.js + ffmpeg-core.wasm).
  FFMPEG_CORE_BASE: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd',
  // SHA-256 of those two files. The core is eval'd with the userscript's privileges, so
  // it's only run if it's exactly the pinned release (update these with the version).
  FFMPEG_CORE_JS_SHA256: 'b266ab5b952555881dd6310663986994a182acb2b7ff25cf10a25f7a37ac2b21',
  FFMPEG_CORE_WASM_SHA256: '9f57947a5bd530d8f00c5b3f2cb2a3492faa7e5d823315342d6a8656d0a6b7b7',
  AUDIO_BITRATE: '192k',
  // A still's picture never changes, so encode exactly ONE frame and let it span
  // the whole track — the cheapest possible encode and the smallest possible file.
  // Very low frame rates are unusual though, so if a player shows black, refuses to
  // seek, or won't thumbnail, set this false to fall back to STILL_FPS below.
  STILL_SINGLE_FRAME: true,
  // Used when STILL_SINGLE_FRAME is false: one frame every 10s, so a 4 minute sound
  // is ~24 frames under a single keyframe. Raise toward '1' if a player struggles.
  STILL_FPS: '1/10',
  // Each encoding step runs on the main thread, so a step that never finishes freezes the
  // tab for good: a "visual" that isn't really an image (an HTML error page served with
  // status 200, a corrupt file) never yields a frame. Abort a step after this long; real
  // encodes of 4chan-sized media finish well within it.
  EXEC_TIMEOUT_MS: 10 * 60 * 1000
};
