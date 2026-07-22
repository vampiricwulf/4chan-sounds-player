// Migrations must return { [prop]: [ previous, updated ], ... }
module.exports = [
  {
    version: '3.0.0',
    name: 'hosts-filename-length',
    async run() {
      const defaultHosts = Player.settings.findDefault('uploadHosts').default;
      Object.keys(defaultHosts).forEach(host => {
        Player.config.uploadHosts[host].filenameLength = defaultHosts[host].filenameLength;
      });
      return {};
    }
  },
  {
    version: '3.3.0',
    name: 'sound-name-title-swap',
    async run() {
      const config = Player.config;
      const changes = {};
      const templates = [ 'headerTemplate', 'rowTemplate', 'footerTemplate', 'chanXTemplate', 'customCSS' ];
      templates.forEach(prop => {
        /sound-name/.test(config[prop]) && (changes[prop] = [
          config[prop],
          config[prop] = config[prop].replace(/sound-name/g, 'sound-title')
        ]);
      });
      return changes;
    }
  },
  {
    version: '3.4.0',
    name: 'disable-inline-player-for-existing-users',
    async run() {
      Player.config.playExpandedImages = false;
      Player.config.playHoveredImages = false;
      return {
        playExpandedImages: [ true, false ],
        playHoveredImages: [ true, false ]
      };
    }
  },
  {
    version: '3.4.7',
    name: 'zz-ht-to-zz-fo',
    async run() {
      // Idempotency check: under the new compareVersions semantics a user
      // stored at '3.4.7-prerelease' would now satisfy `< '3.4.7'` and re-run
      // this migration on every release after the prerelease, duplicating
      // 'zz.fo' each time. Skip if already present.
      if (Array.isArray(Player.config.allow)
          && Player.config.allow.some(h => typeof h === 'string' && h.toLowerCase() === 'zz.fo')) {
        return {};
      }
      const original = [ ...Player.config.allow ];
      Player.config.allow.push('zz.fo');
      return {
        allow: [ original, Player.config.allow ]
      };
    }
  },
  {
    version: '3.6.3',
    name: 'add-fatbox-to-allow',
    async run() {
      // Defend against stored allow being corrupted (e.g. malformed import).
      // Preserve any salvageable entries rather than reset wholesale.
      let preSalvageOriginal = null;
      if (!Array.isArray(Player.config.allow)) {
        preSalvageOriginal = Player.config.allow;
        const salvaged = [];
        const raw = Player.config.allow;
        if (typeof raw === 'string') {
          // Textarea-serialized form: newline-separated hosts.
          raw.split('\n').map(s => s.trim()).filter(Boolean).forEach(h => salvaged.push(h));
        } else if (raw && typeof raw === 'object') {
          // Object/array-like: pull out any string values.
          Object.values(raw).filter(v => typeof v === 'string' && v).forEach(h => salvaged.push(h));
        }
        // Merge with defaults so previously-default hosts are restored if missing.
        // Dedup case-insensitively since disallowedSound lowercases the hostname anyway.
        // Hard-coded fallback prevents a future settings-config rename / load-order
        // regression from silently collapsing the user's allow list to just
        // ['fatbox.moe'] (which would happen if findDefault returned the empty
        // {property} stub and salvage produced []).
        const defaultSetting = Player.settings.findDefault('allow');
        const defaults = (defaultSetting && Array.isArray(defaultSetting.default))
          ? defaultSetting.default
          : [ '4cdn.org', 'catbox.moe', 'fatbox.moe', 'dmca.gripe', 'lewd.se', 'pomf.cat', 'zz.ht', 'zz.fo' ];
        const seen = new Set();
        const merged = [];
        [ ...defaults, ...salvaged ].forEach(h => {
          // typeof guard — defaults comes from settings config (which today is
          // strings only) but a future regression that lets a non-string slip
          // in would otherwise throw h.toLowerCase(), get swallowed by the
          // migrate catch, and leave fatbox.moe missing from allow.
          if (typeof h !== 'string') return;
          const key = h.toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            merged.push(h);
          }
        });
        Player.config.allow = merged;
      }
      // Case-insensitive check since disallowedSound lowercases hostnames anyway.
      // typeof guard matches the 3.4.7 zz-ht-to-zz-fo dedup — a non-string entry
      // (null/number from a malformed import) would otherwise throw and the
      // settings.migrate catch swallows the error, leaving fatbox.moe missing.
      const alreadyHadFatbox = Player.config.allow.some(h => typeof h === 'string' && h.toLowerCase() === 'fatbox.moe');
      if (!alreadyHadFatbox) {
        Player.config.allow.push('fatbox.moe');
      }
      // Report the change if EITHER we salvaged a corrupted value OR we appended
      // 'fatbox.moe'. The reporting drives 'config:allow' event emission downstream.
      if (preSalvageOriginal !== null) {
        return { allow: [ preSalvageOriginal, Player.config.allow ] };
      }
      if (!alreadyHadFatbox) {
        const original = Player.config.allow.slice(0, -1);
        return { allow: [ original, Player.config.allow ] };
      }
      return {};
    }
  },
  {
    version: '3.7.0',
    name: 'add-download-video-to-footer',
    async run() {
      // Insert the combined-video download button into the existing image+sound
      // download group of the user's footer, wherever that group appears.
      const tpl = Player.config.footerTemplate;
      if (typeof tpl !== 'string'
          || tpl.includes('dl-video-button')
          || !tpl.includes('dl-image-button dl-sound-button')) {
        return {};
      }
      const updated = tpl.replace('dl-image-button dl-sound-button', 'dl-image-button dl-sound-button dl-video-button');
      Player.config.footerTemplate = updated;
      return { footerTemplate: [ tpl, updated ] };
    }
  }
];
