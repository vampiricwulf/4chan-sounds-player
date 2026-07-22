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
const still = u.stillArgs({ image: 'v.jpg', audio: 'a', out: 'out.mp4', dur: 12.5, fps: 2, audioBitrate: '192k' });
assert.deepStrictEqual(still.slice(0, 6), ['-loop', '1', '-i', 'v.jpg', '-i', 'a']);
assert.ok(still.includes('-tune') && still[still.indexOf('-tune') + 1] === 'stillimage');
assert.strictEqual(still[still.indexOf('-t') + 1], '12.5');
assert.strictEqual(still[still.length - 1], 'out.mp4');
assert.ok(still.includes(u.EVEN_SCALE));
assert.strictEqual(still[still.indexOf('-preset') + 1], 'veryfast', 'default preset');
assert.strictEqual(
  u.stillArgs({ image: 'v.jpg', audio: 'a', out: 'o', dur: 1, fps: 2, audioBitrate: '192k', preset: 'ultrafast' })[
    u.stillArgs({ image: 'v.jpg', audio: 'a', out: 'o', dur: 1, fps: 2, audioBitrate: '192k', preset: 'ultrafast' }).indexOf('-preset') + 1
  ], 'ultrafast', 'ultrafast preset applied');

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
