const createTool = require('./create');
const downloadTool = require('./download');
const videoTool = require('./video');

module.exports = {
  template: require('./templates/tools.tpl'),

  ...createTool,
  ...downloadTool,
  ...videoTool,

  initialize() {
    createTool.initialize();
    downloadTool.initialize();
  },

  toggle() {
    if (Player.config.viewStyle === 'tools') {
      Player.playlist.restore();
    } else {
      Player.display.setViewStyle('tools');
    }
  },

  /**
	 * Encode the decoded input.
	 */
  handleDecoded(e) {
    Player.$(`.${ns}-encoded-input`).value = encodeURIComponent(e.currentTarget.value);
  },

  /**
	 * Decode the encoded input.
	 */
  handleEncoded(e) {
    try {
      Player.$(`.${ns}-decoded-input`).value = decodeURIComponent(e.currentTarget.value);
    } catch (err) {
      // An incomplete escape ("%2") while typing. Leave the decoded value as it was.
    }
  }
};
