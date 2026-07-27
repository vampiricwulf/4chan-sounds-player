// Pinned ffmpeg.wasm asset locations + encode constants.
// The core (glue + wasm) is lazy-fetched at runtime and run on the MAIN THREAD
// (no Web Worker — 4chan's CSP blocks blob: workers). Versions verified in the spike.
module.exports = {
  // @ffmpeg/core 0.12.10 UMD build (ffmpeg-core.js + ffmpeg-core.wasm).
  FFMPEG_CORE_BASE: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd',
  AUDIO_BITRATE: '192k',
  // Still images hold one frame for the whole track, so the frame rate only needs
  // to be high enough for players to behave. Encode cost is linear in it.
  STILL_FPS: 1,
  // Cap the long edge of a still. 4chan images are often 12MP+, and encode time
  // scales with pixel count — capping is the biggest speed win for stills. Images
  // smaller than this are never upscaled.
  STILL_MAX_DIM: 1920,
  // How much of a still is actually encoded before being copy-looped to fill the
  // track. Longer means fewer keyframes (smaller file) but more encoding; this
  // bounds a still's encode at STILL_LOOP_SECONDS * STILL_FPS frames.
  STILL_LOOP_SECONDS: 20
};
