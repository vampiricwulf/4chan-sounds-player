const assert = require('assert');
const { check, displayedSettings } = require('../scripts/docs-coverage');

// Sanity check the config walk itself so an empty result can't pass vacuously.
const shown = displayedSettings();
assert.ok(shown.length > 50, `expected the settings view to show many settings, got ${shown.length}`);
assert.ok(shown.includes('colors.text'), 'nested color settings are collected');
assert.ok(shown.includes('hotkey_bindings.playPause'), 'keybind settings are collected');
assert.ok(shown.includes('chanXControls'), '4chan X-only settings are collected');
assert.ok(!shown.includes('colors.page_background'), 'hidden settings are skipped');

const { undocumented, stale } = check();
assert.deepStrictEqual(undocumented, [],
  'Every setting in the settings view needs an entry with data-setting="<property>" in docs/index.html');
assert.deepStrictEqual(stale, [],
  'docs/index.html has data-setting entries for settings that no longer exist in src/config');

console.log(`docs-coverage: all ${shown.length} settings are documented.`);
