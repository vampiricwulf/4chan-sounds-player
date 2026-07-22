// Pure, side-effect-free helpers for the muxed video download feature.
// No DOM / GM / Player / ns / _ / Icons usage, so this file is require-able and
// unit-testable under plain Node (see test/video-util.test.js).

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

// Still image + audio -> mp4 of exactly `dur` seconds (one held frame).
function stillArgs({ image, audio, out, dur, fps, audioBitrate }) {
  return [
    '-loop', '1', '-i', image,
    '-i', audio,
    '-t', String(dur),
    '-c:v', 'libx264', '-tune', 'stillimage', '-pix_fmt', 'yuv420p',
    '-r', String(fps), '-vf', EVEN_SCALE,
    '-c:a', 'aac', '-b:a', audioBitrate,
    '-movflags', '+faststart',
    out
  ];
}

// Encode exactly ONE loop of an animated visual to a closed-GOP, IDR-led mp4 so the
// repeats can be stream-looped with -c copy seamlessly. Audio is dropped here.
function loopEncodeArgs({ visual, out, isGif }) {
  const args = [];
  if (isGif) {
    args.push('-ignore_loop', '0');
  }
  args.push(
    '-i', visual,
    '-an',
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20',
    '-pix_fmt', 'yuv420p', '-vf', EVEN_SCALE,
    '-fflags', '+genpts',
    '-x264-params', 'keyint=100000:min-keyint=100000:scenecut=0:open-gop=0',
    '-movflags', '+faststart',
    out
  );
  return args;
}

// Loop the single-loop file and cut to exactly `dur` seconds, losslessly (-c copy).
function streamLoopCutArgs({ loop, out, dur }) {
  return ['-stream_loop', '-1', '-i', loop, '-t', String(dur), '-c', 'copy', out];
}

// Mux the (already exactly-`dur`) looped video with the audio, re-encoding audio to AAC.
function muxArgs({ video, audio, out, audioBitrate }) {
  return [
    '-i', video, '-i', audio,
    '-map', '0:v:0', '-map', '1:a:0',
    '-c:v', 'copy', '-c:a', 'aac', '-b:a', audioBitrate,
    '-movflags', '+faststart',
    out
  ];
}

module.exports = {
  EVEN_SCALE,
  classifyVisual,
  muxFileName,
  stillArgs,
  loopEncodeArgs,
  streamLoopCutArgs,
  muxArgs
};
