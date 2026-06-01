module.exports = [
  {
    property: 'addWebm',
    title: 'Include Video',
    description: 'Whether to add all video files regardless of a sound filename.',
    default: 'soundBoards',
    displayGroup: 'Filter',
    options: {
      always: 'Always',
      soundBoards: 'Boards with sound',
      never: 'Never'
    }
  },
  {
    property: 'fatboxRerouter',
    title: 'Fatbox Rerouter',
    description: 'Reroute all catbox.moe sounds through the fatbox.moe mirror.',
    default: false,
    displayGroup: 'Filter'
  },
  {
    property: 'allow',
    title: 'Allowed Hosts',
    description: 'Which domains sounds are allowed to be loaded from.',
    default: [
      '4cdn.org',
      'catbox.moe',
      'fatbox.moe',
      'dmca.gripe',
      'lewd.se',
      'pomf.cat',
      'zz.ht',
      'zz.fo'
    ],
    actions: [{ title: 'Reset', handler: 'settings.reset("allow")', mods: '.prevent' }],
    displayGroup: 'Filter',
    displayMethod: 'textarea',
    attrs: 'rows=10',
    format: v => v.join('\n'),
    // Accept CRLF and trim whitespace so Windows/import paths don't leave a
    // trailing \r on every entry (which would silently never match).
    parse: v => v.split(/\r?\n/).map(s => s.trim()).filter(Boolean)
  },
  {
    property: 'filters',
    default: ['# Image MD5 or sound URL'],
    title: 'Filters',
    description: 'List of URLs or image MD5s to filter, one per line.\nLines starting with a # will be ignored.',
    actions: [{ title: 'Reset', handler: 'settings.reset("filters")', mods: '.prevent' }],
    displayGroup: 'Filter',
    displayMethod: 'textarea',
    attrs: 'rows=10',
    format: v => v.join('\n'),
    // Accept CRLF and drop empty lines, but preserve comment lines (#-prefixed)
    // verbatim since the textarea documents that as the comment syntax.
    parse: v => v.split(/\r?\n/).map(s => s.replace(/\r$/, '')).filter(s => s.length > 0)
  }
];
