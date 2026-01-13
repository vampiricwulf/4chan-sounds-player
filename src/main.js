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

// The timeout makes sure 4chan X will have added it's classes and be identified.
setTimeout(function () {
  if (!initialized) {
    if (document.readyState !== 'loading') {
      doInit();
    } else {
      document.addEventListener('DOMContentLoaded', doInit);
    }
  }
}, 1000);
