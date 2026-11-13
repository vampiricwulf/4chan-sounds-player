const selectors = require('../../selectors');
const controlsTemplate = require('../controls/templates/controls.tpl');

module.exports = {
  idx: 0,

  audio: { },
  expandedNodes: [ ],

  // Similar but not exactly the audio events in the controls component.
  mediaEvents: {
    // The master may be the post's video (expandedLoopMaster), which has no inline audio
    // id of its own, so resolve the linked audio element first.
    ended: evt => Player.inline._movePlaying((evt.currentTarget._inlineAudio || evt.currentTarget).dataset.id, +(Player.config.expandedRepeat !== 'one')),
    pause: 'controls.handleMediaEvent',
    play: 'controls.handleMediaEvent',
    playing: 'controls.handleMediaEvent',
    seeked: 'controls.handleMediaEvent',
    waiting: 'controls.handleMediaEvent',
    timeupdate: 'controls.updateDuration',
    loadedmetadata: 'controls.updateDuration',
    durationchange: 'controls.updateDuration',
    volumechange: 'controls.updateVolume'
  },

  initialize() {
    if (!is4chan) {
      return;
    }

    Player.inline.observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(Player.inline.handleAddedNode);
        mutation.removedNodes.forEach(Player.inline.handleRemovedNode);
      });
    });

    Player.on('config:playExpandedImages', Player.inline._handleConfChange);
    Player.on('config:playHoveredImages', Player.inline._handleConfChange);
    Player.inline._handleConfChange();
  },

  /**
	 * Swap the src of any currently-playing inline audio element when sound.src has been
	 * mutated (e.g. by the rerouter toggle). Called from the posts handler after sound.src
	 * is re-derived so that comparing to currentSound.src reflects the new URL.
	 *
	 * For sound-webms (audio+video sync pair) the linked video is paused before the swap
	 * and re-seeked on metadata load so audio and video stay in sync across the reroute.
	 */
  _reloadActiveAudio() {
    Object.values(Player.inline.audio).forEach(audio => {
      const data = audio._inlinePlayer;
      if (!data) return;
      const currentSound = data.sounds[data.index];
      if (!currentSound || !audio.src || audio.src === currentSound.src) return;
      // If the current sound is now disallowed for ANY reason (host, sound URL
      // matches a user filter, image MD5 filter), don't swap to the disallowed URL.
      // Skip only on `.invalid` since that's a synthetic flag set by getSounds for
      // sounds that fail decoding, not a user-driven block.
      if (currentSound.disallow && !currentSound.disallow.invalid) return;
      _.swapAudioSrc(audio, currentSound.src, {
        master: data.master || audio,
        getVideo: () => data.isVideo ? data.video : null,
      });
    });
  },

  /**
	 * Start/stop observing for hover images when a dependent conf is changed.
	 */
  _handleConfChange() {
    if (Player.config.playExpandedImages || Player.config.playHoveredImages) {
      Player.inline.start();
    } else {
      Player.inline.stop();
    }
  },

  /**
	 * Check if an added node is an expanded/hover sound image and play the audio.
	 *
	 * @param {Element} node Added node.
	 */
  handleAddedNode(node) {
    try {
      if (node.nodeName !== 'IMG' && node.nodeName !== 'VIDEO') {
        return;
      }
      const isExpandedImage = Player.config.playExpandedImages && node.matches(selectors.expandedImage);
      const isHoverImage = Player.config.playHoveredImages && node.matches(selectors.hoverImage);

      if (isExpandedImage || isHoverImage) {
        const isVideo = node.nodeName === 'VIDEO';
        let id;
        try {
          // 4chan X images have the id set. Handy.
          // Otherwise get the parent post, looking up the image link for native hover images, and the id from it.
          id = isChanX
            ? node.dataset.fileID.split('.')[1]
            : (isExpandedImage ? node : document.querySelector(`a[href$="${node.src.replace(/^https?:/, '')}"]`))
              .closest(selectors.posts).id.slice(selectors.postIdPrefix.length);
        } catch (err) {
          return;
        }
        // Check for sounds added to the player.
        let sounds = id && Player.sounds.filter(s => s.post === id && !s.standaloneVideo) || [];
        if (Player.config.expandedAllowFiltered) {
          sounds = sounds.concat(Player.filteredSounds.filter(s => s.post === id && !s.disallow.host));
        }
        if (!sounds.length) {
          return;
        }
        // 4chan XT/neXT's "sound posts" (on by default) put their own autoplaying <audio>
        // right after an expanded [sound=] image, so the sound played twice. It's added in
        // the same task as the image, before it can start: silence and remove it, and give
        // a video back the controls it would have had.
        const otherAudio = isChanX && isExpandedImage && node.nextElementSibling;
        if (otherAudio && otherAudio.nodeName === 'AUDIO') {
          otherAudio.autoplay = false;
          otherAudio.pause();
          otherAudio.removeAttribute('src');
          otherAudio.load();
          otherAudio.remove();
          if (isVideo) {
            const controls = otherAudio.controls;
            node.controls = controls;
            // XT/neXT still think the post has its audio, and turn the video's controls off
            // again once its metadata loads. Without the player's own controls (Expanded
            // Controls off) that left no way to pause or seek, so put them back after them.
            !Player.config.expandedControls && node.addEventListener('loadedmetadata', () => setTimeout(() => {
              node._inlineAudio && (node.controls = controls);
            }), { once: true });
          }
        }
        // Create a new audio element.
        const audio = new Audio(sounds[0].src);
        const aId = audio.dataset.id = Player.inline.idx++;
        const master = isVideo && Player.config.expandedLoopMaster === 'video' ? node : audio;
        Player.inline.audio[aId] = audio;

        // Remember this node is playing audio.
        Player.inline.expandedNodes.push(node);

        // Add some data and cross link the nodes.
        node.classList.add(`${ns}-has-inline-audio`);
        node._inlineAudio = audio;
        audio._inlinePlayer = node._inlinePlayer = {
          master,
          video: node,
          isVideo,
          audio,
          sounds,
          index: 0,
          expanded: isExpandedImage
        };
        // One expanded image's sound at a time: 4chan X's Expand All Images expanded every
        // post at once, and every sound played over the others.
        // (Only if it's still playing when the event arrives: two started together would
        // otherwise each pause the other.)
        isExpandedImage && audio.addEventListener('play', () => !audio.paused && Player.inline._pauseOtherExpanded(audio));
        // Link video & audio so they sync.
        if (isVideo) {
          node._linked = audio;
          audio._linked = node;
          // 4chan X (and forks) pause an expanded video without sound of its own while it's
          // off-screen or the tab is hidden, then resume it from where it stopped. When the
          // audio leads, re-sync the video whenever something starts it.
          if (master === audio) {
            // Without the player's controls, the video's own controls are the only ones:
            // pressing play, pause or seeking on them acts on the sound. (Only for the user's
            // own presses: 4chan X pausing it off-screen shouldn't stop the sound.)
            const ownControls = !(isExpandedImage && Player.config.expandedControls);
            const byUser = () => ownControls && (!navigator.userActivation || navigator.userActivation.isActive);
            node._inlinePlayer.resync = () => audio.paused && byUser()
              ? audio.play().catch(() => {})
              : Player.controls.sync(audio);
            node.addEventListener('play', node._inlinePlayer.resync);
            if (ownControls) {
              node._inlinePlayer.forwardPause = () => byUser() && !audio.paused && audio.pause();
              node._inlinePlayer.forwardSeek = () => {
                // Not the seeks the sync makes.
                if (!byUser() || performance.now() - (node._syncSeekAt || 0) < 1000) {
                  return;
                }
                // The video loops under a longer sound: keep the sound in the same loop.
                const d = node.duration;
                audio.currentTime = d > 0 && isFinite(d) && audio.duration > d
                  ? Math.floor(audio.currentTime / d) * d + node.currentTime
                  : node.currentTime;
              };
              node.addEventListener('pause', node._inlinePlayer.forwardPause);
              node.addEventListener('seeked', node._inlinePlayer.forwardSeek);
            }
          }
        }

        // Start from the beginning taking the volume from the main player. (The src was set
        // when it was created; setting it again restarted the download.)
        audio.volume = Player.audio.volume;
        audio.currentTime = 0;

        // Add the sync handlers to which source is master.
        Player.inline.updateSyncListeners(master, 'add');

        // A dead [sound=] link: the video would wait for the audio forever, frozen and with
        // its controls taken away. Let it play on its own with its own controls instead.
        if (isVideo) {
          node._inlinePlayer.audioError = () => {
            if (node._inlineAudio !== audio) {
              return;
            }
            node.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
            audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
            node.controlsObserver && node.controlsObserver.disconnect();
            node._linked = audio._linked = null;
            node.controls = true;
            node.play().catch(() => {});
          };
          audio.addEventListener('error', node._inlinePlayer.audioError);
        }

        // Show the player controls for expanded images/videos.
        const showPlayerControls = isExpandedImage && Player.config.expandedControls;

        if (isVideo && showPlayerControls) {
          // Remove the default controls, and remove them again when 4chan X tries to add them.
          node.controls = false;
          node.controlsObserver = new MutationObserver(() => node.controls = false);
          node.controlsObserver.observe(node, { attributes: true });
          // Play/pause the audio instead when the video is clicked.
          node._inlinePlayer.clickToggle = () => Player.inline.playPause(aId);
          node.addEventListener('click', node._inlinePlayer.clickToggle);
        }

        // For videos wait for both to load before playing.
        if (isVideo && (node.readyState < 3 || audio.readyState < 3)) {
          audio.pause();
          node.pause();
          // Set the add controls function so playOnceLoaded can run it when it's ready.
          node._inlinePlayer.pendingControls = showPlayerControls && addControls;
          node.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
          audio.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
        } else {
          showPlayerControls && addControls();
          // play() rejects benignly when superseded by a newer load/pause or when
          // autoplay is blocked; real failures surface via the 'error' event.
          audio.play().catch(() => {});
        }

        function addControls() {
          delete node._inlinePlayer.pendingControls;
          node.parentNode.classList.add(`${ns}-has-controls`);
          // Create the controls and store the bars on the audio node for reference. Avoid checking the DOM.
          const controls = audio._inlinePlayer.controls = _.element(controlsTemplate({
            audio,
            multiple: sounds.length > 1,
            audioId: aId,
            inline: true,
            actions: {
              previous: `inline.previous("${aId}")`,
              playPause: `inline.playPause("${aId}")`,
              next: `inline.next("${aId}")`,
              seek: `controls.handleSeek($event, "${aId}")`,
              mute: `inline.mute("${aId}")`,
              volume: `controls.handleVolume($event, "${aId}")`
            }
          }), node.parentNode);
          // Don't want to close the expanded image or open the image when the controls are clicked.
          controls.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
          });
          audio.volumeBar = controls.querySelector(`.${ns}-volume-bar .${ns}-current-bar`);
          audio.currentTimeBar = controls.querySelector(`.${ns}-seek-bar .${ns}-current-bar`);
          Player.controls.updateProgressBarPosition(audio.volumeBar, audio.volume, 1);
        }
      }
    } catch (err) {
      Player.logError('Failed to play sound.', err);
    }
  },

  /**
	 * Pause every other expanded image's sound (by pausing what leads it, so the sync doesn't
	 * start it again), including one still waiting for its video to load.
	 */
  _pauseOtherExpanded(playing) {
    Object.values(Player.inline.audio).forEach(audio => {
      const data = audio._inlinePlayer;
      if (audio === playing || !data || !data.expanded) {
        return;
      }
      audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      data.video && data.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      // A video still loading gets its controls when it's ready to play; it won't now, so
      // give them to it here.
      data.pendingControls && data.pendingControls();
      const master = data.master || audio;
      !master.paused && master.pause();
    });
  },

  /**
	 * Check if a removed node is an expanded/hover sound image and stop the audio.
	 *
	 * @param {Element} node Added node.
	 */
  handleRemovedNode(node) {
    const nodes = [ node ];
    node.querySelectorAll && nodes.push(...node.querySelectorAll(`.${ns}-has-inline-audio`));
    nodes.forEach(node => {
      if (node._inlineAudio) {
        Player.inline._removeForNode(node);
      }
    });
  },

  _removeForNode(node) {
    // Stop removing controls.
    node.controlsObserver && node.controlsObserver.disconnect();
    // Stop listening for media events.
    Player.inline.updateSyncListeners(node._inlinePlayer.master, 'remove');
    node._inlinePlayer.resync && node.removeEventListener('play', node._inlinePlayer.resync);
    node._inlinePlayer.forwardPause && node.removeEventListener('pause', node._inlinePlayer.forwardPause);
    node._inlinePlayer.forwardSeek && node.removeEventListener('seeked', node._inlinePlayer.forwardSeek);
    node._inlinePlayer.audioError && node._inlineAudio.removeEventListener('error', node._inlinePlayer.audioError);
    // 4chan X reuses the expanded element on the next expand, so don't leave this behind.
    node._inlinePlayer.clickToggle && node.removeEventListener('click', node._inlinePlayer.clickToggle);
    // Remove controls.
    const controls = node._inlineAudio._inlinePlayer.controls;
    if (controls) {
      controls.parentNode.classList.remove(`${ns}-has-controls`);
      controls.parentNode.removeChild(controls);
    }
    // Cancel any pending rerouter reload so its loadedmetadata/error listeners don't
    // outlive the audio element they were attached to.
    node._inlineAudio._pendingReroute && node._inlineAudio._pendingReroute();
    // Stop and unload the audio, and clean up the data. Only pausing left it downloading
    // the whole file: skimming hovered thumbnails started a full download for each.
    const audio = node._inlineAudio;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    audio._linked = null;
    delete Player.inline.audio[audio.dataset.id];
    delete node._inlineAudio;
    delete node._linked;
    Player.inline.expandedNodes = Player.inline.expandedNodes.filter(n => n !== node);
  },

  /**
	 * Set audio/video sync listeners on a video for an inline sound webm.
	 *
	 * @param {Element} video Video node.
	 * @param {String} action add or remove.
	 */
  updateSyncListeners(node, action) {
    if (node.nodeName === 'VIDEO' || node.nodeName === 'AUDIO') {
      const audio = node._inlineAudio || node;
      if (action === 'remove') {
        const video = audio._inlinePlayer.video;
        video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
        audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      }
      Object.entries(Player.inline.mediaEvents).forEach(([ event, handler ]) => {
        node[`${action}EventListener`](event, Player.getHandler(handler));
      });
      // Volume belongs to the audio even when the video is the master, so listen there
      // too or the inline volume bar and mute icon never update.
      if (audio !== node) {
        audio[`${action}EventListener`]('volumechange', Player.getHandler(Player.inline.mediaEvents.volumechange));
      }
    }
  },

  /**
	 * Start observing for expanded/hover images.
	 */
  start() {
    Player.inline.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  },

  /**
	 * Stop observing for expanded/hover images.
	 */
  stop() {
    Player.inline.observer.disconnect();
    Player.inline.expandedNodes.forEach(Player.inline._removeForNode);
    Player.inline.expandedNodes = [];
  },

  /**
	 * Handle previous click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  previous(audioId) {
    const audio = Player.inline.audio[audioId];
    // The master (the video, with "Master Source: Video") drives the other.
    const master = audio && audio._inlinePlayer.master;
    if (master && master.currentTime > 3) {
      master.currentTime = 0;
    } else {
      Player.inline._movePlaying(audioId, -1);
    }
  },

  /**
	 * Handle next click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  next(audioId) {
    Player.inline._movePlaying(audioId, 1);
  },

  _movePlaying(audioId, dir) {
    const audio = Player.inline.audio[audioId];
    const data = audio && audio._inlinePlayer;
    if (!data) {
      return;
    }
    const count = data.sounds.length;
    const repeat = Player.config.expandedRepeat;
    if (repeat !== 'none' || data.index + dir >= 0 && data.index + dir < count) {
      data.index = (data.index + dir + count) % count;
      // Cancel any pending rerouter swap so its onLoad/onError listeners can't
      // fire against the navigated src and revert to the previous sound.
      audio._pendingReroute && audio._pendingReroute();
      audio.src = data.sounds[data.index].src;
      // Link the video again: a dead sound before this one unlinked it to let it play alone.
      if (data.isVideo) {
        data.video._linked = audio;
        audio._linked = data.video;
      }
      if (data.controls) {
        const prev = data.controls.querySelector(`.${ns}-previous-button`);
        const next = data.controls.querySelector(`.${ns}-next-button`);
        prev && prev.classList[repeat !== 'all' && data.index === 0 ? 'add' : 'remove']('disabled');
        next && next.classList[repeat !== 'all' && data.index === count - 1 ? 'add' : 'remove']('disabled');
      }
      // For videos wait for both to load before playing.
      if (data.isVideo && (data.video.readyState < 3 || audio.readyState < 3)) {
        data.master.currentTime = 0;
        data.master.pause();
        data.video.pause();
        data.video.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
        audio.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
      } else {
        data.master.currentTime = 0;
        // Reject benignly when superseded / autoplay-blocked; 'error' handles real failures.
        data.master.play().catch(() => {});
      }
    }
  },

  /**
	 * Handle play/pause click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  playPause(audioId) {
    const audio = Player.inline.audio[audioId];
    // Toggle the master: its events drive the sync, so toggling the other one (the audio
    // when the video is master) left the video looping and was undone by the next sync.
    const master = audio && audio._inlinePlayer.master;
    master && (master.paused ? master.play().catch(() => {}) : master.pause());
  },

  /**
	 * Handle mute click for inline controls.
	 *
	 * @param {String} audioId Identifier of the inline audio.
	 */
  mute(audioId) {
    const audio = Player.inline.audio[audioId];
    audio && (audio.volume = (Player._lastVolume || 0.5) * !audio.volume);
  }
};
