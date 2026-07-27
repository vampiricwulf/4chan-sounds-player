// Pinned ffmpeg.wasm asset locations + encode constants.
// The core (glue + wasm) is lazy-fetched at runtime and run on the MAIN THREAD
// (no Web Worker — 4chan's CSP blocks blob: workers). Versions verified in the spike.
module.exports = {
  // @ffmpeg/core 0.12.10 UMD build (ffmpeg-core.js + ffmpeg-core.wasm).
  FFMPEG_CORE_BASE: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd',
  AUDIO_BITRATE: '192k',
  // Stills hold one picture for the whole track, so the frame rate only has to be
  // high enough for players to behave, and it's the only thing driving encode cost:
  // one frame every 10s means a 4 minute sound is ~24 frames (and one keyframe).
  // A fraction keeps it exact. Raise it (e.g. '1' or '1/4') if any player struggles
  // with the very low rate — that costs encode time but nothing else.
  STILL_FPS: '1/10'
};
