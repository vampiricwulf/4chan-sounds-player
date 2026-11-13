/**
 * Cross-checks the settings defined in src/config against the documentation site.
 *
 * Every setting the player shows in its settings view must have an element with a
 * matching data-setting="<property>" attribute in docs/index.html, and every
 * data-setting in the docs must still exist in the config. This keeps the guide from
 * silently going stale when settings are added, renamed or removed.
 */
const fs = require('fs');
const path = require('path');

const docsPath = path.resolve(__dirname, '../docs/index.html');

/**
 * Load src/config with the handful of browser/app globals its modules read at
 * require time stubbed out. isChanX is forced on so 4chan X-only settings count.
 */
function loadSettingsConfig() {
  const stubs = { ns: 'fcsp', isChanX: true, Player: {} };
  if (typeof globalThis.navigator === 'undefined') {
    stubs.navigator = {};
  }
  const added = Object.keys(stubs).filter(k => !(k in globalThis));
  added.forEach(k => { globalThis[k] = stubs[k]; });
  try {
    return require('../src/config');
  } finally {
    added.forEach(k => { delete globalThis[k]; });
  }
}

/**
 * The properties of every setting rendered in the player's settings view, mirroring
 * how settings/templates/setting.tpl merges a group into its sub settings.
 */
function displayedSettings(config = loadSettingsConfig()) {
  const out = [];
  (function walk(settings, parent) {
    settings.forEach(setting => {
      const merged = { ...parent, ...setting };
      if (setting.settings) {
        walk(setting.settings, { ...merged, settings: null });
      } else if (merged.displayGroup && merged.displayMethod !== null && merged.property) {
        out.push(merged.property);
      }
    });
  })(config, {});
  return [ ...new Set(out) ];
}

function documentedSettings(html = fs.readFileSync(docsPath, 'utf8')) {
  return [ ...new Set([ ...html.matchAll(/data-setting="([^"]+)"/g) ].map(m => m[1])) ];
}

function check() {
  const config = loadSettingsConfig();
  const shown = displayedSettings(config);
  const allProperties = new Set();
  (function walk(settings, parentProperty) {
    settings.forEach(s => {
      const prop = s.property || parentProperty;
      prop && allProperties.add(prop);
      s.settings && walk(s.settings, prop);
    });
  })(config);

  const documented = documentedSettings();
  return {
    undocumented: shown.filter(p => !documented.includes(p)),
    stale: documented.filter(p => !allProperties.has(p))
  };
}

module.exports = { loadSettingsConfig, displayedSettings, documentedSettings, check };
