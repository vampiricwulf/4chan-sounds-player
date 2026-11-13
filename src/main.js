'use strict';

let initialized = false;
let initializing = false;

async function doInit() {
  // Both 4chanXInitFinished and the fallback timeout call this. Player.initialize can
  // take longer than the gap between them (it waits for the 4chan X header), so guard
  // on initialization having started, not finished, or a second call would add a
  // duplicate MutationObserver.
  if (initialized || initializing) {
    return;
  }

  // We cannot require globals yet because it accesses document.head immediately.
  // Check for head availability to avoid crashes on some archives.
  if (!document.head) {
    setTimeout(doInit, 10);
    return;
  }
  initializing = true;

  // Require globals now that we know it's safe.
  require('./globals');
  const _ = require('./_');

  // Require these here so every other require is sure of the 4chan X state.
  const Player = require('./player');

  await Player.initialize();

  Player.posts.addPosts(document.body, true);

  let pendingNodes = [];
  const processNodes = _.debounce(() => {
    pendingNodes.forEach((node) => Player.posts.addPosts(node));
    pendingNodes = [];
  }, 100);

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            pendingNodes.push(node);
          }
        });
      }
    });
    if (pendingNodes.length) {
      processNodes();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  initialized = true;
}

document.addEventListener('4chanXInitFinished', doInit);

// Fallback for pages without 4chan X. The timeout makes sure 4chan X will have added
// its classes and be identified.
let waitedForChanX = false;
function fallbackInit() {
  if (initialized || initializing) {
    return;
  }
  if (document.readyState === 'loading') {
    return document.addEventListener('DOMContentLoaded', fallbackInit, { once: true });
  }
  // 4chan X and its forks (XT, neXT) mark <html> as soon as they start, but on big
  // threads their post processing runs well past a second. Starting mid-way puts play
  // links next to file links they then move into hidden markup, so wait for their init
  // event, with a safety net in case it never fires.
  if (!waitedForChanX && document.documentElement.classList.contains('fourchan-x')) {
    waitedForChanX = true;
    return setTimeout(fallbackInit, 15000);
  }
  doInit();
}
setTimeout(fallbackInit, 1000);
