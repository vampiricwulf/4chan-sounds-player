// Pure, side-effect-free helpers for the muxed video download feature.
// No DOM / GM / Player / ns / _ / Icons usage, so this file is require-able and
// unit-testable under plain Node (see test/video-util.test.js).

// Content keeps its original dimensions. The only adjustment is rounding an odd
// width/height down by a pixel, which H.264 with yuv420p requires — it rejects
// odd dimensions outright.
const EVEN_SCALE = 'scale=trunc(iw/2)*2:trunc(ih/2)*2';

// Decide how the visual should be encoded, from its URL and optional MIME type.
function classifyVisual(image, type) {
  image = image || '';
  if (/\.(webm|mp4)(\?|$)/i.test(image) || type === 'video/webm' || type === 'video/mp4') {
    return 'video';
  }
  if (/\.gif(\?|$)/i.test(image)) {
    return 'gif';
  }
  return 'still';
}

// Build a filesystem-safe output name ending in .mp4. Preserves spaces; replaces
// only characters that are actually illegal in filenames (and control chars).
function muxFileName(title, fallback) {
  let base = (title || fallback || 'sound').toString();
  base = base.replace(/\.[^/.]+$/, '');                 // drop any extension
  // eslint-disable-next-line no-control-regex
  base = base.replace(/[\\/:*?"<>|\x00-\x1f]/g, '_');    // FS-illegal -> _
  base = base.replace(/\s+/g, ' ').trim().slice(0, 200);
  return (base || 'sound') + '.mp4';
}

// Encode a SHORT segment of a still image, closed-GOP so it can be copy-looped to
// any length. Encoding the still for the whole track instead would cost one frame
// per 1/fps of audio — hundreds of full-resolution frames of an identical image —
// so this keeps the cost constant no matter how long the sound is.
function stillLoopArgs({ image, out, seconds, fps, preset }) {
  return [
    '-loop', '1', '-i', image,
    '-t', String(seconds),
    '-an',
    '-c:v', 'libx264', '-preset', preset || 'veryfast', '-tune', 'stillimage', '-pix_fmt', 'yuv420p',
    '-r', String(fps), '-vf', EVEN_SCALE,
    '-fflags', '+genpts',
    // One IDR at the start and none after, so every copied repeat starts clean.
    '-x264-params', 'keyint=100000:min-keyint=100000:scenecut=0:open-gop=0',
    out
  ];
}

// Encode exactly ONE loop of an animated visual to a closed-GOP, IDR-led mp4 so the
// repeats can be stream-looped with -c copy seamlessly. Audio is dropped here.
function loopEncodeArgs({ visual, out, isGif, preset }) {
  const args = [];
  if (isGif) {
    // ignore_loop=1 (the default) makes the demuxer read the gif exactly ONCE.
    // ignore_loop=0 would honor the gif's own loop count (usually infinite) and
    // this un-bounded encode would then run forever.
    args.push('-ignore_loop', '1');
  }
  args.push(
    '-i', visual,
    '-an',
    '-c:v', 'libx264', '-preset', preset || 'veryfast', '-crf', '20',
    '-pix_fmt', 'yuv420p', '-vf', EVEN_SCALE,
    '-fflags', '+genpts',
    '-x264-params', 'keyint=100000:min-keyint=100000:scenecut=0:open-gop=0',
    // No -movflags +faststart here: this is an intermediate only ffmpeg re-reads.
    out
  );
  return args;
}

// Loop the single-loop file, mux in the audio, and cut to exactly `dur` — in ONE pass.
// Video is copied (repeats never re-encoded); audio is encoded to AAC.
function loopMuxArgs({ loop, audio, out, dur, audioBitrate }) {
  return [
    '-stream_loop', '-1', '-i', loop,
    '-i', audio,
    '-map', '0:v:0', '-map', '1:a:0',
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', audioBitrate,
    '-t', String(dur),
    '-movflags', '+faststart',
    out
  ];
}

module.exports = {
  EVEN_SCALE,
  classifyVisual,
  muxFileName,
  stillLoopArgs,
  loopEncodeArgs,
  loopMuxArgs
};
