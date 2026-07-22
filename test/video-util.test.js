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

const loop = u.loopEncodeArgs({ visual: 'v.webm', out: 'loop.mp4', isGif: false });
assert.ok(loop.includes('-an'), 'loop encode drops audio');
assert.ok(loop.join(' ').includes('open-gop=0'), 'closed GOP');
assert.ok(loop.join(' ').includes('scenecut=0'));
assert.ok(!loop.includes('-ignore_loop'), 'non-gif has no ignore_loop');

const gifLoop = u.loopEncodeArgs({ visual: 'v.gif', out: 'loop.mp4', isGif: true });
assert.deepStrictEqual(gifLoop.slice(0, 2), ['-ignore_loop', '1'], 'gif is read exactly once (not infinitely)');

const cut = u.streamLoopCutArgs({ loop: 'loop.mp4', out: 'whole.mp4', dur: 30 });
assert.deepStrictEqual(cut, ['-stream_loop', '-1', '-i', 'loop.mp4', '-t', '30', '-c', 'copy', 'whole.mp4']);

const mux = u.muxArgs({ video: 'whole.mp4', audio: 'a', out: 'out.mp4', audioBitrate: '192k' });
assert.ok(mux.join(' ').includes('-c:v copy'), 'copies looped video');
assert.ok(mux.join(' ').includes('-c:a aac'), 're-encodes audio to aac');
assert.strictEqual(mux[mux.length - 1], 'out.mp4');

console.log('video-util: all assertions passed');
