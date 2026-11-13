const assert = require('assert');
const fs = require('fs');
const path = require('path');

// A doc comment missing its closing */ swallows the methods after it until the next one,
// and the file still parses, so lint doesn't notice: catch code inside /** … */ blocks.
const files = [];
(function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const full = path.join(dir, entry.name);
    entry.isDirectory() ? walk(full) : /\.js$/.test(entry.name) && files.push(full);
  });
})(path.join(__dirname, '..', 'src'));

const swallowed = [];
files.forEach(file => {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/\/\*\*([\s\S]*?)\*\//g)) {
    const body = match[1];
    if (/^\s*(async\s+)?[A-Za-z_$][\w$]*\s*\([^)]*\)\s*\{\s*$/m.test(body) || /^\s*(const|let|return|if)\b/m.test(body)) {
      swallowed.push(`${path.relative(path.join(__dirname, '..'), file)}:${source.slice(0, match.index).split('\n').length}`);
    }
  }
});
assert.deepStrictEqual(swallowed, [], 'Code inside a doc comment (a missing */?)');
console.log(`doc-comments: ${files.length} files checked`);
