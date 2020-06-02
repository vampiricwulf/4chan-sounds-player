const components = {
	// Settings must be first.
	settings: require('./components/settings'),
	controls: require('./components/controls'),
	display: require('./components/display'),
	events: require('./components/events'),
	footer: require('./components/footer'),
	header: require('./components/header'),
	hotkeys: require('./components/hotkeys'),
	playlist: require('./components/playlist'),
	position: require('./components/position'),
	userTemplate: require('./components/user-template')
};

// Create a global ref to the player.
const Player = window.Player = module.exports = {
	ns,

	audio: new Audio(),
	sounds: [],
	isHidden: true,
	container: null,
	ui: {},
	_progressBarStyleSheets: {},

	// Build the config from the default
	config: {},

	// Helper function to query elements in the player.
	$: (...args) => Player.container && Player.container.querySelector(...args),
	$all: (...args) => Player.container && Player.container.querySelectorAll(...args),

	// Store a ref to the components so they can be iterated.
	components,

	// Get all the templates.
	templates: {
		body: require('./templates/body.tpl'),
		controls: require('./templates/controls.tpl'),
		css: require('./scss/style.scss'),
		footer: require('./templates/footer.tpl'),
		header: require('./templates/header.tpl'),
		itemMenu: require('./templates/item_menu.tpl'),
		list: require('./templates/list.tpl'),
		player: require('./templates/player.tpl'),
		settings: require('./templates/settings.tpl')
	},

	/**
	 * Set up the player.
	 */
	initialize: async function initialize() {
		if (Player.initialized) {
			return;
		}
		Player.initialized = true;
		try {
			Player.sounds = [ ];
			// Run the initialisation for each component.
			for (let name in components) {
				components[name].initialize && await components[name].initialize();
			}

			if (!is4chan) {
				// Add a sounds link in the nav for archives
				const nav = document.querySelector('.navbar-inner .nav:nth-child(2)');
				const li = document.createElement('li');
				const showLink = document.createElement('a');
				showLink.innerHTML = 'Sounds';
				showLink.href = 'javascript:;'
				li.appendChild(showLink);
				nav.appendChild(li);
				showLink.addEventListener('click', Player.display.toggle);
			} else if (isChanX) {
				// If it's already known that 4chan X is running then setup the button for it.
				Player.display.initChanX()
			} else {
				// Add the [Sounds] link in the top and bottom nav.
				document.querySelectorAll('#settingsWindowLink, #settingsWindowLinkBot').forEach(function (link) {
					const bracket = document.createTextNode('] [');
					const showLink = document.createElement('a');
					showLink.innerHTML = 'Sounds';
					showLink.href = 'javascript:;';
					link.parentNode.insertBefore(showLink, link);
					link.parentNode.insertBefore(bracket, link);
					showLink.addEventListener('click', Player.display.toggle);
				});
			}

			// Render the player, but not neccessarily show it.
			Player.display.render();
		} catch (err) {
			_logError('There was an error initialzing the sound player. Please check the console for details.');
			console.error('[4chan sounds player]', err);
			// Can't recover so throw this error.
			throw err;
		}
	},

	/**
	 * Compare two ids for sorting.
	 */
	compareIds: function (a, b) {
		const [ aPID, aSID ] = a.split(':');
		const [ bPID, bSID ] = b.split(':');
		const postDiff = aPID - bPID;
		return postDiff !== 0 ? postDiff : aSID - bSID;
	},

	/**
	 * Check whether a sound src and image are allowed and not filtered.
	 */
	acceptedSound: function ({ src, imageMD5 }) {
		try {
			const link = new URL(src);
			const host = link.hostname.toLowerCase();
			return !Player.config.filters.find(v => v === imageMD5 || v === host + link.pathname)
				&& Player.config.allow.find(h => host === h || host.endsWith('.' + h))
		} catch (err) {
			return false;
		}
	}
};

// Add each of the components to the player.
for (let name in components) {
	Player[name] = components[name];
	(Player[name].atRoot || []).forEach(k => Player[k] = Player[name][k]);
}
