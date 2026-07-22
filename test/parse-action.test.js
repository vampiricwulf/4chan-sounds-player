const assert = require('assert');
const p = require('../src/components/events/parse-action');

// Mock Player tree + resolver (mirrors how events/index.js wires compileAction).
const calls = [];
const Player = {
  remove: function (...a) { calls.push(['remove', this, a]); },
  next: function (...a) { calls.push(['next', this, a]); },
  playlist: {
    handleItemMenu: function (...a) { calls.push(['handleItemMenu', this, a]); },
    addFromFiles: function (...a) { calls.push(['addFromFiles', this, a]); },
    scrollToPlaying: function (...a) { calls.push(['scrollToPlaying', this, a]); }
  },
  settings: {
    toggle: function (...a) { calls.push(['settings.toggle', this, a]); },
    load: function (...a) { calls.push(['settings.load', this, a]); }
  },
  display: { showMenu: function (...a) { calls.push(['showMenu', this, a]); } }
};
function get(obj, path) { return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj); }
function resolve(path) {
  const fn = get(Player, path);
  if (typeof fn !== 'function') { return null; }
  const i = path.lastIndexOf('.');
  return { fn, scope: i > -1 ? get(Player, path.slice(0, i)) : Player };
}

// --- splitArgs ---
assert.deepStrictEqual(p.splitArgs(''), []);
assert.deepStrictEqual(p.splitArgs('$event, "a"'), ['$event', '"a"']);
assert.deepStrictEqual(p.splitArgs('{}, {"k":"v"}'), ['{}', '{"k":"v"}']);
assert.deepStrictEqual(p.splitArgs('"a,b", "c"'), ['"a,b"', '"c"'], 'comma inside a string');
assert.strictEqual(p.splitArgs('"unterminated'), null);

// --- parseString (matches _.escAttr(x,true) + HTML-decode: \" \\ \n \r) ---
assert.strictEqual(p.parseString('"hello"'), 'hello');
assert.strictEqual(p.parseString('"a\\"b"'), 'a"b', 'escaped quote');
assert.strictEqual(p.parseString('"a\\\\b"'), 'a\\b', 'escaped backslash');
assert.strictEqual(p.parseString('"a"b"'), null, 'unescaped inner quote bails');

// --- no args; scope is the method owner ---
calls.length = 0;
const h = p.compileAction('settings.toggle()', resolve);
assert.strictEqual(typeof h, 'function');
h({});
assert.strictEqual(calls[0][0], 'settings.toggle');
assert.strictEqual(calls[0][1], Player.settings);
assert.deepStrictEqual(calls[0][2], []);

// --- string arg ---
calls.length = 0;
p.compileAction('playlist.scrollToPlaying("center")', resolve)({});
assert.deepStrictEqual(calls[0][2], ['center']);

// --- $event + string ---
calls.length = 0;
const evt = { currentTarget: { files: [1, 2] }, target: { value: 'v' } };
p.compileAction('playlist.handleItemMenu($event, "12:0")', resolve)(evt);
assert.strictEqual(calls[0][2][0], evt);
assert.strictEqual(calls[0][2][1], '12:0');

// --- $event property chains ---
calls.length = 0;
p.compileAction('playlist.addFromFiles($event.currentTarget.files)', resolve)(evt);
assert.deepStrictEqual(calls[0][2][0], [1, 2]);
calls.length = 0;
p.compileAction('display.showMenu($event.currentTarget, "views")', resolve)(evt);
assert.strictEqual(calls[0][2][0], evt.currentTarget);
assert.strictEqual(calls[0][2][1], 'views');

// --- object literal arg (fresh object each call) ---
calls.length = 0;
p.compileAction('next({ force: true })', resolve)({});
assert.deepStrictEqual(calls[0][2], [{ force: true }]);

// --- two objects ---
calls.length = 0;
p.compileAction('settings.load({}, {"foo":"bar"})', resolve)({});
assert.deepStrictEqual(calls[0][2], [{}, { foo: 'bar' }]);

// --- bare-path scope is Player; escaped URL round-trips ---
calls.length = 0;
p.compileAction('remove("http://x/a\\"b")', resolve)({});
assert.strictEqual(calls[0][1], Player);
assert.strictEqual(calls[0][2][0], 'http://x/a"b');

// --- safely bails (null) for forms it can't handle ---
assert.strictEqual(p.compileAction('a.foo;a.bar($event)', resolve), null, 'multi-statement');
assert.strictEqual(p.compileAction('nope.missing("x")', resolve), null, 'unknown method');
assert.strictEqual(p.compileAction('next(f(x))', resolve), null, 'nested call arg');
assert.strictEqual(p.compileAction('x = 1', resolve), null, 'not a call');
assert.strictEqual(p.compileAction('next({ paused: !x })', resolve), null, 'expression object value');

console.log('parse-action: all assertions passed');
