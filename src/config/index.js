module.exports = [
  // Order the groups appear in.
  ...require('./display'),
  ...require('./playback'),
  ...require('./filter'),
  ...require('./keybinds'),
  ...require('./theme'),
  ...require('./hosts'),

  {
    property: 'viewStyle',
    default: 'playlist'
  },
  {
    property: 'showPlaylistSearch',
    default: true
  },
  {
    property: 'imageHeight',
    default: 125
  },

  // These are for availability in templates. Measured on each page, so never saved or
  // loaded (runtime).
  {
    property: 'offsetTop',
    default: '0',
    runtime: true
  },
  {
    property: 'offsetBottom',
    default: '0',
    runtime: true
  }
];
