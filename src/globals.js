/**
 * Global variables and helpers.
 */

window.ns = 'fcsp';

window.is4chan = location.hostname.includes('4chan.org') || location.hostname.includes('4channel.org');
window.isChanX = document.documentElement && document.documentElement.classList.contains('fourchan-x');
window.isChanXT = document.documentElement && document.documentElement.classList.contains('fourchan-xt');
window.Board = location.pathname.split('/')[1];
window.Thread = (location.href.match(/\/thread\/(\d+)/) || [])[1];

// Determine what type of site this is. Default to FoolFuuka as the most common archiver.
window.Site = is4chan ? '4chan'
	: ((document.head.querySelector('meta[name="generator"]') || {}).content || '').includes('FoolFuuka') ? 'FoolFuuka'
	: location.hostname.includes('warosu.org') ? 'Fuuka'
	: 'FoolFuuka';

class PlayerError extends Error {
	constructor(msg, type, err) {
		super(msg);
		this.reason = msg;
		this.type = type;
		this.error = err;
	}
}
window.PlayerError = PlayerError;
