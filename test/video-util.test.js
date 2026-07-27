const assert = require('assert');
const u = require('../src/components/tools/video-util');

// classifyVisual
assert.strictEqual(u.classifyVisual('foo[sound=x].webm'), 'video');
assert.strictEqual(u.classifyVisual('foo.mp4'), 'video');
assert.strictEqual(u.classifyVisual('foo.jpg', 'video/webm'), 'video', 'type override');
assert.strictEqual(u.classifyVisual('foo[sound=x].gif'), 'gif');
assert.strictEqual(u.classifyVisual('foo.GIF'), 'gif', 'case-insensitive');
assert.strictEqual(u.classifyVisual('foo.jpg'), 'still');
assert.strictEqual(u.classifyVisual('foo.png'), 'still');
assert.strictEqual(u.classifyVisual('foo.webp'), 'still');

// muxFileName
assert.strictEqual(u.muxFileName('My Song'), 'My Song.mp4');
assert.strictEqual(u.muxFileName('a/b:c*d'), 'a_b_c_d.mp4', 'strips FS-illegal chars');
assert.strictEqual(u.muxFileName('clip.webm'), 'clip.mp4', 'drops source extension');
assert.strictEqual(u.muxFileName('', 'fallback.jpg'), 'fallback.mp4', 'uses fallback');
assert.strictEqual(u.muxFileName('', ''), 'sound.mp4', 'last-resort name');

// arg builders — assert the load-bearing flags are present and correctly ordered
// Stills encode a SHORT closed-GOP segment that gets copy-looped, so the cost
// doesn't scale with the length of the sound.
const still = u.stillLoopArgs({ image: 'v.jpg', out: 'loop.mp4', seconds: 20, fps: 1 });
assert.deepStrictEqual(still.slice(0, 4), ['-loop', '1', '-i', 'v.jpg']);
assert.ok(still.includes('-tune') && still[still.indexOf('-tune') + 1] === 'stillimage');
assert.strictEqual(still[still.indexOf('-t') + 1], '20', 'only the segment is encoded');
assert.strictEqual(still[still.indexOf('-r') + 1], '1');
assert.ok(still.includes('-an'), 'segment carries no audio');
assert.ok(still.join(' ').includes('open-gop=0'), 'closed GOP so repeats can be copied');
assert.strictEqual(still[still.length - 1], 'loop.mp4');
assert.ok(still.includes(u.EVEN_SCALE), 'even dims when no cap given');

// boxScale: caps the long edge without upscaling, and still forces even dims.
assert.strictEqual(u.boxScale(0), u.EVEN_SCALE, 'no cap -> plain even scale');
assert.strictEqual(u.boxScale(), u.EVEN_SCALE, 'undefined cap -> plain even scale');
const box = u.boxScale(1920);
assert.ok(box.includes('force_original_aspect_ratio=decrease'), 'fits inside the box');
assert.ok(box.includes('min(1920\\,iw)') && box.includes('min(1920\\,ih)'), 'never upscales; commas escaped');
assert.ok(box.endsWith(u.EVEN_SCALE), 'even dims applied after the cap');
const capped = u.stillLoopArgs({ image: 'v.jpg', out: 'l.mp4', seconds: 5, fps: 1, maxDim: 1920 });
assert.ok(capped.includes(u.boxScale(1920)), 'still honours maxDim');
assert.strictEqual(still[still.indexOf('-preset') + 1], 'veryfast', 'default preset');
const stillFast = u.stillLoopArgs({ image: 'v.jpg', out: 'l.mp4', seconds: 5, fps: 1, preset: 'ultrafast' });
assert.strictEqual(stillFast[stillFast.indexOf('-preset') + 1], 'ultrafast', 'ultrafast preset applied');

const loop = u.loopEncodeArgs({ visual: 'v.webm', out: 'loop.mp4', isGif: false });
assert.ok(loop.includes('-an'), 'loop encode drops audio');
assert.ok(loop.join(' ').includes('open-gop=0'), 'closed GOP');
assert.ok(loop.join(' ').includes('scenecut=0'));
assert.ok(!loop.includes('-ignore_loop'), 'non-gif has no ignore_loop');
assert.strictEqual(loop[loop.indexOf('-preset') + 1], 'veryfast', 'loop default preset');
assert.ok(!loop.join(' ').includes('+faststart'), 'no faststart on the intermediate loop');
assert.strictEqual(
  u.loopEncodeArgs({ visual: 'v.webm', out: 'l', isGif: false, preset: 'ultrafast' })[
    u.loopEncodeArgs({ visual: 'v.webm', out: 'l', isGif: false, preset: 'ultrafast' }).indexOf('-preset') + 1
  ], 'ultrafast', 'loop ultrafast preset applied');

const gifLoop = u.loopEncodeArgs({ visual: 'v.gif', out: 'loop.mp4', isGif: true });
assert.deepStrictEqual(gifLoop.slice(0, 2), ['-ignore_loop', '1'], 'gif is read exactly once (not infinitely)');

// One-pass loop + mux + cut.
const loopMux = u.loopMuxArgs({ loop: 'loop.mp4', audio: 'a', out: 'out.mp4', dur: 30, audioBitrate: '192k' });
assert.deepStrictEqual(loopMux.slice(0, 4), ['-stream_loop', '-1', '-i', 'loop.mp4']);
assert.ok(loopMux.join(' ').includes('-c:v copy'), 'copies looped video (no re-encode)');
assert.ok(loopMux.join(' ').includes('-c:a aac'), 'encodes audio to aac');
assert.strictEqual(loopMux[loopMux.indexOf('-t') + 1], '30', 'cut to audio duration');
assert.strictEqual(loopMux[loopMux.length - 1], 'out.mp4');

console.log('video-util: all assertions passed');
