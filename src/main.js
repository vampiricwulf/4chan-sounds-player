'use strict';

let initialized = false;

async function doInit() {
	if (initialized) {
		return;
	}

	// We cannot require globals yet because it accesses document.head immediately.
	// Check for head availability to avoid crashes on some archives.
	if (!document.head) {
		setTimeout(doInit, 10);
		return;
	}

	// Require globals now that we know it's safe.
	require('./globals');

	// Require these here so every other require is sure of the 4chan X state.
	const Player = require('./player');

	await Player.initialize();

	Player.posts.addPosts(document.body, true);

	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (mutation.type === 'childList') {
				mutation.addedNodes.forEach(function (node) {
					if (node.nodeType === Node.ELEMENT_NODE) {
						Player.posts.addPosts(node);
					}
				});
			}
		});
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true
	});

	initialized = true;
}

document.addEventListener('4chanXInitFinished', doInit);

// The timeout makes sure 4chan X will have added it's classes and be identified.
setTimeout(function () {
	// If already initialized via event, skip.
	if (initialized) {
		return;
	}

	// Safety check for globals require.
	if (document.head) {
		require('./globals');

		// If it's already known 4chan X is installed this can be skipped.
		// If 4chan X is installed but the event didn't fire (missed it or slow),
		// we proceed on DOMContentLoaded to ensure elements are ready.
		if (!isChanX) {
			if (document.readyState !== 'loading') {
				doInit();
			} else {
				document.addEventListener('DOMContentLoaded', doInit);
			}
		} else {
			// ChanX detected but no init event. Fallback to DCL.
			if (document.readyState !== 'loading') {
				doInit();
			} else {
				document.addEventListener('DOMContentLoaded', doInit);
			}
		}
	} else {
		// No head yet? Wait for DCL.
		document.addEventListener('DOMContentLoaded', doInit);
	}
}, 1000);
