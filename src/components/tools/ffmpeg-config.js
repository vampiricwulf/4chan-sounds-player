// Pinned ffmpeg.wasm asset locations + encode constants.
// The core (glue + wasm) is lazy-fetched at runtime and run on the MAIN THREAD
// (no Web Worker — 4chan's CSP blocks blob: workers). Versions verified in the spike.
module.exports = {
  // @ffmpeg/core 0.12.10 UMD build (ffmpeg-core.js + ffmpeg-core.wasm).
  FFMPEG_CORE_BASE: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd',
  AUDIO_BITRATE: '192k',
  // A still's picture never changes, so encode exactly ONE frame and let it span
  // the whole track — the cheapest possible encode and the smallest possible file.
  // Very low frame rates are unusual though, so if a player shows black, refuses to
  // seek, or won't thumbnail, set this false to fall back to STILL_FPS below.
  STILL_SINGLE_FRAME: true,
  // Used when STILL_SINGLE_FRAME is false: one frame every 10s, so a 4 minute sound
  // is ~24 frames under a single keyframe. Raise toward '1' if a player struggles.
  STILL_FPS: '1/10'
};
