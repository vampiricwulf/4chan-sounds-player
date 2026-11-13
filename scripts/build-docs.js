#!/usr/bin/env node
/**
 * Assembles the GitHub Pages site.
 *
 *   node scripts/build-docs.js [outDir]   (default: _site)
 *
 * Copies docs/ into the output directory along with the README screenshots and the
 * script icon, and stamps the current package version into the pages. Open
 * <outDir>/index.html in a browser to preview it locally.
 */
const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');
const { check } = require('./docs-coverage');

const root = path.resolve(__dirname, '..');
const out = path.resolve(root, process.argv[2] || '_site');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(from, to) : fs.copyFileSync(from, to);
  }
}

if (out === root || !out.startsWith(root + path.sep)) {
  throw new Error(`Refusing to build into ${out}; choose a directory inside the repository.`);
}
fs.rmSync(out, { recursive: true, force: true });

copyDir(path.join(root, 'docs'), out);
copyDir(path.join(root, 'images'), path.join(out, 'images'));
fs.copyFileSync(path.join(root, 'assets/icon.svg'), path.join(out, 'icon.svg'));

for (const file of fs.readdirSync(out)) {
  if (file.endsWith('.html')) {
    const target = path.join(out, file);
    fs.writeFileSync(target, fs.readFileSync(target, 'utf8').replace(/\{\{VERSION\}\}/g, pkg.version));
  }
}

// Don't block a deploy over docs drift, but make it visible in CI logs.
const { undocumented, stale } = check();
const annotate = process.env.GITHUB_ACTIONS ? '::warning::' : 'Warning: ';
undocumented.length && console.warn(`${annotate}Settings missing from docs/index.html: ${undocumented.join(', ')}`);
stale.length && console.warn(`${annotate}docs/index.html documents settings that no longer exist: ${stale.join(', ')}`);

console.log(`Built docs for v${pkg.version} into ${path.relative(root, out)}/`);
