// Pinned ffmpeg.wasm asset locations + encode constants.
// The heavy core is lazy-fetched at runtime (see video.js); only the small
// @ffmpeg/ffmpeg wrapper is bundled. Versions verified working in the Task 1 spike.
module.exports = {
  // @ffmpeg/core 0.12.10 UMD build (ffmpeg-core.js + ffmpeg-core.wasm).
  FFMPEG_CORE_BASE: 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/umd',
  // The @ffmpeg/ffmpeg 0.12.15 class-worker chunk (confirm exact filename in the spike).
  FFMPEG_WRAPPER_WORKER_URL: 'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.15/dist/umd/814.ffmpeg.js',
  AUDIO_BITRATE: '192k',
  STILL_FPS: 2
};
