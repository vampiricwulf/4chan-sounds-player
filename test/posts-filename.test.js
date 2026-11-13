const assert = require('assert');

// Globals webpack provides in the real build. Icons pulls in .svg files that Node can't
// load, so it's stubbed.
global.Icons = new Proxy({}, { get: () => '' });
global.ns = 'fcsp';
global.Site = '4chan';
global.Board = 'gif';
global.isChanX = false;
global._ = require('../src/_');
global.location = { protocol: 'https:' };
global.PlayerError = class PlayerError extends Error {};
global.Player = {
  config: { addWebm: 'soundBoards', fatboxRerouter: false, allow: [] },
  disallowedSound: () => false,
  on() {}
};
const posts = require('../src/components/posts');
Player.posts = posts;

const parse = (filename, image = 'https://i.4cdn.org/gif/1.png') => posts.getSounds(filename, image, '123', 'https://i.4cdn.org/gif/1s.jpg', 'md5', true)
  .sounds.map(s => [ s.title, s.src, s.standaloneVideo ]);
const catbox = name => `https://files.catbox.moe/${name}`;

// --- ordinary tags ---
assert.deepStrictEqual(parse('song[sound=files.catbox.moe%2Fa.mp3].png'), [ [ 'song', catbox('a.mp3'), false ] ]);
assert.deepStrictEqual(parse('name[catbox=abc123.mp3].jpg'), [ [ 'name', catbox('abc123.mp3'), false ] ]);
assert.deepStrictEqual(parse('song(sound=files.catbox.moe%2Fq.mp3).png'), [ [ 'song', catbox('q.mp3'), false ] ]);
assert.deepStrictEqual(parse('{sound=files.catbox.moe%2Fc.mp3}x.png'), [ [ '123', catbox('c.mp3'), false ] ], 'no name: the post number');
assert.deepStrictEqual(parse('[sound=files.catbox.moe%2Fa.mp3][sound=files.catbox.moe%2Fb.ogg].png'),
  [ [ '123 (1)', catbox('a.mp3'), false ], [ '123 (2)', catbox('b.ogg'), false ] ]);
assert.deepStrictEqual(parse('two[sound=files.catbox.moe%2Ff.mp3](sound=files.catbox.moe%2Fg.mp3).png'),
  [ [ 'two', catbox('f.mp3'), false ], [ 'two (2)', catbox('g.mp3'), false ] ]);

// --- a tag closes with its own bracket, so a ) in the link stays; mismatched still read ---
assert.deepStrictEqual(parse('a[sound=files.catbox.moe%2Fsong(1).mp3].png'), [ [ 'a', catbox('song(1).mp3'), false ] ]);
assert.deepStrictEqual(parse('a[sound=files.catbox.moe%2Fsong%281%29.mp3].png'), [ [ 'a', catbox('song(1).mp3'), false ] ]);
assert.deepStrictEqual(parse('mismatch[sound=files.catbox.moe%2Fe.mp3).png'), [ [ 'mismatch', catbox('e.mp3'), false ] ]);

// --- bracketed text that isn't a tag stays part of the name ---
assert.deepStrictEqual(parse('my song (audio only) [sound=files.catbox.moe%2Fabc.mp3].png'), [ [ 'my song (audio only)', catbox('abc.mp3'), false ] ]);
assert.deepStrictEqual(parse('Track (sound edit)[sound=files.catbox.moe%2Fx.mp3].png'), [ [ 'Track (sound edit)', catbox('x.mp3'), false ] ]);
// ...and a video named like that is still added as a video on /gif/.
assert.deepStrictEqual(parse('cat (sound on).webm', 'https://i.4cdn.org/gif/1.webm'), [ [ 'cat (sound on)', 'https://i.4cdn.org/gif/1.webm', true ] ]);
assert.deepStrictEqual(parse('loud (SOUND WARNING).webm', 'https://i.4cdn.org/gif/1.webm'), [ [ 'loud (SOUND WARNING)', 'https://i.4cdn.org/gif/1.webm', true ] ]);

// --- a link with spaces in it still counts ---
assert.deepStrictEqual(parse('x[sound=https://example.com/My Song.mp3].png'), [ [ 'x', 'https://example.com/My Song.mp3', false ] ]);
assert.deepStrictEqual(parse('x[sound=example.com%2FMy Song.mp3].png'), [ [ 'x', 'https://example.com/My Song.mp3', false ] ]);

// --- no tags at all ---
assert.deepStrictEqual(parse('plain.png'), []);

console.log('posts-filename: all assertions passed');
