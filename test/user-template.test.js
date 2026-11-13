const assert = require('assert');

// Globals that webpack provides in the real build (see src/globals.js and the
// ProvidePlugin/DefinePlugin in webpack.config.js). Icons pulls in .svg files that
// Node can't load, so it's stubbed: the tests here don't render buttons.
global.ns = 'fcsp';
global.isChanX = false;
global.Site = '4chan';
global.VERSION = '9.9.9';
global.Icons = new Proxy({}, { get: (t, k) => `[icon:${String(k)}]` });
global._ = require('../src/_');

const sound = {
  id: '1:0',
  title: 'Song',
  name: 'Song',
  src: 'https://files.catbox.moe/abc.mp3',
  post: '123',
  image: 'https://i.4cdn.org/a/1.png',
  thumb: 'https://i.4cdn.org/a/1s.jpg',
  imageOrThumb: 'https://i.4cdn.org/a/1.png',
  filename: 'pic[sound=files.catbox.moe%2Fabc.mp3].png',
  imageMD5: 'HO0kbeZNQqBye1CF7Tq7hg=='
};
const dead = { id: '2:0', error: true };
global.Player = {
  config: {},
  sounds: [ sound, dead ],
  filteredSounds: [ {}, {}, {} ],
  playing: sound
};

const userTemplate = require('../src/components/user-template');
const build = (template, data = {}) => userTemplate.build({ template, sound, ...data });

// --- sound property tokens: each resolves to its own property ---
// imageMD5 shares a prefix with image (and imageOrThumb), so the longer names must
// win instead of matching `sound-image` and leaving the rest of the token as text.
assert.strictEqual(build('sound-imageMD5'), 'HO0kbeZNQqBye1CF7Tq7hg==');
assert.strictEqual(build('sound-imageMD5-esc'), 'HO0kbeZNQqBye1CF7Tq7hg==');
assert.strictEqual(build('sound-imageOrThumb'), sound.imageOrThumb);
assert.strictEqual(build('sound-image'), sound.image);
assert.strictEqual(build('sound-image-esc'), sound.image);
assert.strictEqual(build('[sound-image|sound-imageMD5|sound-imageOrThumb]'),
  `[${sound.image}|${sound.imageMD5}|${sound.imageOrThumb}]`, 'adjacent tokens');
[ 'src', 'id', 'name', 'post', 'thumb', 'filename' ].forEach(prop => {
  assert.strictEqual(build(`sound-${prop}`), _.escAttr(sound[prop]), `sound-${prop}`);
});

// --- -esc switches to JS-string escaping; plain tokens use HTML-attribute escaping ---
const quoted = { ...sound, name: 'a"b' };
assert.strictEqual(build('sound-name', { sound: quoted }), 'a&#34;b');
assert.strictEqual(build('sound-name-esc', { sound: quoted }), 'a\\&#34;b');

// --- no sound selected: property tokens render empty ---
assert.strictEqual(build('[sound-imageMD5]', { sound: null }), '[]');

// --- counts and version ---
assert.strictEqual(build('sound-index/sound-count'), '1/1', 'dead sounds are skipped');
assert.strictEqual(build('dead-count'), '1');
assert.strictEqual(build('filtered-count'), '3');
assert.strictEqual(build('v%v'), 'v9.9.9');

// --- findDependencies sees sound-imageMD5 as a sound property ---
const deps = userTemplate.findDependencies('footerTemplate', 'sound-imageMD5');
assert.ok(deps.events.includes('playsound'), 'sound-imageMD5 re-renders on playsound');

console.log('user-template: all assertions passed');

// --- sound values are filled in last, so later token passes can't rewrite them ---
{
  const tricky = { ...sound, title: 'remix sound-src %v sound-count', name: 'n' };
  const out = userTemplate.build({ template: 'sound-title', sound: tricky });
  assert(out.includes('remix sound-src %v sound-count'), 'title text left untouched: ' + out);
  const withReplacement = userTemplate.build({ template: 'sound-title play-button', sound: { ...sound, title: 'my play-button song' }, replacements: { 'play-button': '<b>PB</b>' } });
  assert(withReplacement.includes('my play-button song') && withReplacement.endsWith('<b>PB</b>'), 'replacements skip the title: ' + withReplacement);
}
console.log('user-template (placeholders): all assertions passed');

// --- button handlers embedding a sound value aren't rewritten by later token passes ---
{
  Player.userTemplate = userTemplate;
  const out = userTemplate.build({ template: 'dl-sound-button', sound: { ...sound, name: 'my sound-title mix %v' } });
  assert(out.includes('my sound-title mix %v'), 'button handler kept the raw name: ' + out);
  assert(!out.includes('truncate-text') && !out.includes('9.9.9'), 'no title markup or version inside the handler: ' + out);
}
console.log('user-template (buttons): all assertions passed');

// --- tokens inside a button's own text are still replaced (the default footer) ---
{
  Player.userTemplate = userTemplate;
  const footer = require('../src/config/theme.js').find(s => s.property === 'footerTemplate').default.split('\n')[0];
  const out = userTemplate.build({ template: footer, sound });
  assert(!out.includes('sound-index') && !out.includes('sound-count'), 'tokens replaced in the footer: ' + out);
  assert(/>1[ \u00a0]\/&nbsp;<\/a>/.test(out), 'playing index shown in the button text: ' + out);
}
console.log('user-template (button text tokens): all assertions passed');
