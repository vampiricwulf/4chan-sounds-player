// Volume changes fire many times a second while dragging the bar or holding the key, and
// every storage write is also sent to the other open tabs.
const saveVolume = _.debounce(vol => GM.setValue('volume', vol), 300);

module.exports = {
  template: require('./templates/controls.tpl'),

  audioEvents: {
    ended: () => Player.config.autoplayNext && Player.next(),
    pause: 'controls.handleMediaEvent',
    play: 'controls.handleMediaEvent',
    // After a stall ('waiting'), so the linked video restarts in step with the audio.
    playing: 'controls.handleMediaEvent',
    seeked: 'controls.handleMediaEvent',
    waiting: 'controls.handleMediaEvent',
    ratechange: 'controls.handleMediaEvent',
    timeupdate: 'controls.updateDuration',
    loadedmetadata: [ 'controls.updateDuration', 'controls.preventWrapping', 'controls.clearPlayingError' ],
    durationchange: 'controls.updateDuration',
    volumechange: 'controls.updateVolume',
    loadstart: 'controls.pollForLoading',
    error: 'controls.handleAudioError'
  },

  actions: {
    previous: 'previous({ force: true })',
    playPause: 'togglePlay',
    next: 'next({ force: true })',
    seek: 'controls.handleSeek($event, "main")',
    mute: 'toggleMute',
    volume: 'controls.handleVolume($event, "main")',
    fullscreen: 'display.toggleFullScreen'
  },

  async initialize() {
    // Apply the previous volume
    GM.getValue('volume').then(volume => volume >= 0 && volume <= 1 && (Player.audio.volume = volume)).catch(() => { /* never set */ });

    // Cancel a pending error auto-advance once any sound starts playing (covers
    // manual navigation and a recovered source within the 3s window).
    Player.on('playsound', () => clearTimeout(Player._errorAdvanceTO));

    // Only poll for the loaded data when the player is open.
    Player.on('show', () => Player._hiddenWhilePolling && Player.controls.pollForLoading());
    Player.on('hide', () => {
      Player._hiddenWhilePolling = !!Player._loadingPoll;
      Player.controls.stopPollingForLoading();
    });
    Player.on('rendered', () => {
      Player.video = Player.$(`.${ns}-video`);
      Player.video.dataset.id = 'main';
      // Keep track of heavily updated elements.
      Player.audio.volumeBar = Player.video.volumeBar = Player.$(`.${ns}-volume-bar .${ns}-current-bar`);
      Player.audio.currentTimeBar = Player.video.currentTimeBar = Player.$(`.${ns}-seek-bar .${ns}-current-bar`);
      Player.audio.loadedBar = Player.video.loadedBar = Player.$(`.${ns}-seek-bar .${ns}-loaded-bar`);

      // Set the initial volume/seek bar positions and hidden controls.
      Player.controls.updateDuration({ currentTarget: Player.audio });
      Player.controls.updateVolume({ currentTarget: Player.audio });
      Player.controls.preventWrapping();
    });
    // Show all the controls when wrapping prevention is disabled. (Listener name
    // previously mismatched the config property — config uses singular
    // `preventControlWrapping` so the listener had to match for the toggle to fire.)
    Player.on('config:preventControlWrapping', newValue => !newValue && Player.controls.showAllControls());
    // Reset the hidden controls when the hide order is changed.
    Player.on('config:controlsHideOrder', () => {
      Player.controls.setHideOrder();
      Player.controls.preventWrapping();
    });
    // Sync audio/video when the tab is focused.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        Player.controls.sync(Player.audio);
      }
    });
  },

  /**
	 * Handle audio errors. During a rerouter swap the rerouter's own onError handler
	 * reverts to the pre-swap URL, so skip the 3s auto-advance.
	 */
  handleAudioError(err) {
    // Ignore a late error from an element the main player has switched away from.
    if (Player.controls._isStale(err)) {
      return;
    }
    // Clear any in-flight auto-advance first so repeated/duplicate error events
    // don't stack independent 3s timers (which would skip past several tracks).
    clearTimeout(Player._errorAdvanceTO);
    if (Player.audio && Player.audio._rerouteInProgress) {
      return;
    }
    if (Player.playing) {
      // Notifications are rendered as HTML and the title comes from the post filename.
      Player.logError(`Failed to play ${_.escHTML(Player.playing.title)}. Please check the console for details.`, err, 'warning');
      Player.playing.error = err;
      // Mark the row dead so it's visible and skipped during playlist traversal, and
      // refresh count templates (sound-count drops it; dead-count / d:{ } surface it).
      Player.playlist.refreshRow(Player.playing);
      Player.trigger('dead-change');
      // Preserve play state across the skip: if playback was running when the source
      // failed, keep playing the next sound; only stay paused if we were already paused.
      // Captured now (not at timer-fire) so it reflects the state at the moment of error.
      // A sound webm waiting for both to load still has a paused audio element, but
      // playback was requested: count it as playing, and cancel the wait.
      const wasPlaying = !!Player.actions._pendingPlay || (!!Player.audio && !Player.audio.paused);
      Player.actions._pendingPlay && Player.pause();
      // It isn't playing (the element still says it is): show the play button, which retries.
      Player.controls.setPlayButtons(Player.audio, true);
      // Read when the timer fires: pausing in the meantime (pause() clears it) means the
      // next sound should start paused.
      Player._errorAdvanceWasPlaying = wasPlaying;
      Player._errorAdvanceTO = setTimeout(() => Player.playing && Player.next({ paused: !Player._errorAdvanceWasPlaying }), 3000);
    }
  },

  /**
	 * A successful metadata load proves the source is reachable, so clear any dead-link
	 * mark (set by handleAudioError) and refresh the row to drop the visual indicator.
	 * This lets a manual retry or a rerouter fix un-mark a previously-dead sound.
	 */
  clearPlayingError(e) {
    if (Player.controls._isStale(e)) {
      return;
    }
    if (Player.playing && Player.playing.error) {
      delete Player.playing.error;
      Player.playlist.refreshRow(Player.playing);
      Player.trigger('dead-change');
    }
  },

  /**
	 * Handle audio events. Sync the video up, and update the controls.
	 */
  handleMediaEvent(e) {
    if (Player.controls._isStale(e)) {
      return;
    }
    const audio = e.currentTarget._inlineAudio || e.currentTarget;
    Player.controls.sync(e.currentTarget);
    Player.controls.updateDuration(e);
    Player.controls.setPlayButtons(audio, audio.paused);
  },

  /**
	 * Show the play or pause state on the play buttons for an audio element.
	 */
  setPlayButtons(audio, paused) {
    document.querySelectorAll(`.${ns}-play-button[data-audio="${audio.dataset.id}"]`).forEach(el => {
      el.classList[paused ? 'add' : 'remove'](`${ns}-play`);
    });
  },

  /**
	 * Whether a main-player media event comes from an element the player has since switched
	 * away from (the audio element while a standalone video plays, or vice versa).
	 */
  _isStale(e) {
    const media = e && e.currentTarget;
    return !!media && media.dataset && media.dataset.id === 'main' && media !== Player.audio;
  },

  /**
	 * Sync the webm to the audio. Matches the videos time and play state to the audios.
	 *
	 * The audio leads: while it's paused, ended or stalled waiting for data, the video
	 * waits too. (This used to do nothing unless both were fully ready, so a stalled audio
	 * left the video running ahead, and an ended one left it looping.) Positions are lined
	 * up whether or not it's playing, so seeking while paused moves the picture too.
	 */
  sync(from) {
    const to = from && from._linked;
    if (!to) {
      return;
    }
    const leading = !from.paused && !from.ended && from.readyState >= from.HAVE_FUTURE_DATA;
    if (leading) {
      to.playbackRate = from.playbackRate;
      to.defaultPlaybackRate = from.defaultPlaybackRate;
    }
    // Only seek when they've drifted apart: a seek makes the video wait and fire 'playing'
    // again. A shorter follower that loops is compared within its loop (one that doesn't
    // loop, like an inline player's audio following its video, has to be sent back).
    if (from.readyState >= from.HAVE_METADATA && to.duration > 0 && isFinite(to.duration)) {
      const target = from.currentTime % to.duration;
      const drift = Math.abs(to.currentTime - target);
      if ((to.loop ? Math.min(drift, to.duration - drift) : drift) > 0.15) {
        to.currentTime = target;
        to._syncSeekAt = performance.now();
      }
    }
    if (!leading) {
      !to.paused && to.pause();
      return;
    }
    // play() rejects when a newer load or pause interrupts it; that's expected here.
    to.paused && to.play().catch(() => {});
  },

  /**
	 * The main player's video started again after waiting for data: bring it back in step
	 * with the audio. (Only for a sound webm, where the video has a linked audio.)
	 */
  syncVideo(e) {
    const video = e.currentTarget;
    if (!video._linked || video._linked !== Player.audio) {
      return;
    }
    // The 'playing' that ends a seek sync made lags the audio by however long the seek
    // took. Seeking again would chase the audio for as long as each seek takes, with the
    // picture frozen, so let that one be.
    if (video._syncSeekAt && performance.now() - video._syncSeekAt < 3000) {
      video._syncSeekAt = 0;
      return;
    }
    Player.controls.sync(Player.audio);
  },

  /**
	 * Poll for how much has loaded. I know there's the progress event but it unreliable.
	 */
  pollForLoading() {
    Player._loadingPoll = Player._loadingPoll || setInterval(Player.controls.updateLoaded, 500);
  },

  /**
	 * Stop polling for how much has loaded.
	 */
  stopPollingForLoading() {
    Player._loadingPoll && clearInterval(Player._loadingPoll);
    Player._loadingPoll = null;
  },

  /**
	 * Update the loading bar.
	 */
  updateLoaded() {
    const length = Player.audio.buffered.length;
    const size = length > 0
      ? (Player.audio.buffered.end(length - 1) / Player.audio.duration) * 100
      : 0;
    // The playing row's loading bars also follow a sound webm's video.
    const rowLoaded = Player.playlist.updateLoadingBars();
    // Stop polling once everything is loaded, or nothing is playing.
    (!Player.playing || size === 100 && rowLoaded) && Player.controls.stopPollingForLoading();
    Player.audio.loadedBar && (Player.audio.loadedBar.style.width = size + '%');
  },

  /**
	 * Update the seek bar and the duration labels.
	 */
  updateDuration(e) {
    if (Player.controls._isStale(e)) {
      return;
    }
    const media = e.currentTarget;
    const audio = media._inlineAudio || media;
    // Where this media's time displays can be: its inline controls, or the player and the
    // 4chan X header controls. (Querying the whole document ran on every timeupdate.)
    const roots = media._inlinePlayer
      ? [ media._inlinePlayer.controls ]
      : [ Player.container, document.querySelector(`.${ns}-chan-x-controls`) ];
    const currentTime = _.toDuration(media.currentTime);
    const duration = _.toDuration(media.duration);
    const audioId = audio.dataset.id;
    // Gross use of childNodes to avoid textContent triggering mutation observers of other scripts.
    roots.forEach(root => {
      if (!root) {
        return;
      }
      root.querySelectorAll(`.${ns}-current-time[data-audio="${audioId}"]`).forEach(el => el.childNodes[0].textContent = currentTime);
      root.querySelectorAll(`.${ns}-duration[data-audio="${audioId}"]`).forEach(el => el.childNodes[0].textContent = duration);
    });
    Player.controls.updateProgressBarPosition(audio.currentTimeBar, media.currentTime, media.duration);
  },

  /**
	 * Update the volume bar.
	 */
  updateVolume(e) {
    const audio = e.currentTarget._inlineAudio || e.currentTarget;
    const controls = audio._inlinePlayer ? audio._inlinePlayer.controls : Player.container;
    const vol = audio.volume;
    // Store volume of the main player.
    if (audio === Player.audio) {
      vol > 0 && (Player._lastVolume = vol);
      saveVolume(vol);
    }
    controls && controls.querySelectorAll(`.${ns}-volume-button[data-audio="${audio.dataset.id}"]`).forEach(el => {
      el.classList[vol === 0 ? 'add' : 'remove']('mute');
      el.classList[vol > 0 ? 'add' : 'remove']('up');
    });
    Player.controls.updateProgressBarPosition(audio.volumeBar, audio.volume, 1);
  },

  /**
	 * Update a progress bar width. Adjust the margin of the circle so it's contained within the bar at both ends.
	 */
  updateProgressBarPosition(bar, current, total) {
    if (!bar) {
      return;
    }
    current || (current = 0);
    total || (total = 0);
    const ratio = !total ? 0 : Math.max(0, Math.min(((current || 0) / total), 1));
    bar.style.width = `calc(${ratio * 100}% - ${(0.8 * ratio) - 0.4}rem)`;
  },

  /**
	 * Handle the user interacting with the seek bar.
	 */
  handleSeek(e, audioId) {
    const media = audioId === 'main'
      ? Player.audio
      : Player.inline.audio[audioId]._inlinePlayer.master;
    if (media && media.duration && media.duration !== Infinity) {
      media.currentTime = media.duration * Player.controls._getBarXRatio(e);
    }
  },

  /**
	 * Handle the user interacting with the volume bar.
	 */
  handleVolume(e, audioId) {
    const audio = audioId === 'main' ? Player.audio : Player.inline.audio[audioId];
    audio.volume = Player.controls._getBarXRatio(e);
  },

  _getBarXRatio(e) {
    const offset = 0.4 * Player.remSize;
    const offsetX = e.offsetX || (e.targetTouches[0].pageX - e.currentTarget.getBoundingClientRect().left);
    return Math.max(0, Math.min(1, (offsetX - offset) / (parseInt(getComputedStyle(e.currentTarget).width, 10) - (2 * offset))));
  },

  /**
	 * Set all controls visible.
	 */
  showAllControls() {
    Player.$all(`.${ns}-controls [data-hide-id]`).forEach(el => el.style.display = null);
  },

  /**
	 * Hide elements in the controls instead of wrapping
	 */
  preventWrapping() {
    if (!Player.config.preventControlWrapping) {
      return;
    }
    const controls = Player.$(`.${ns}-controls`);
    // If the offset top of the last visible child than this value it indicates wrapping.
    const expectedOffsetTop = parseFloat(window.getComputedStyle(controls).paddingTop);
    const hideElements = Player.controls.hideOrder || Player.controls.setHideOrder();
    let visibleChildren = Array.prototype.slice.call(controls.children);
    let lastChild = visibleChildren.pop();
    let hidden = 0;
    // Show everything to check what has wrapped.
    Player.controls.showAllControls();
    // Keep hiding elements until the last visible child has not wrapped, or there's nothing left to hide.
    while (lastChild.offsetTop > expectedOffsetTop && hidden < hideElements.length) {
      const hide = hideElements[hidden++];
      hide.style.display = 'none';
      visibleChildren = visibleChildren.filter(el => el !== hide);
      hide === lastChild && (lastChild = visibleChildren.pop());
    }
  },

  /**
	 * Set the hide order from the user config.
	 */
  setHideOrder() {
    if (!Array.isArray(Player.config.controlsHideOrder)) {
      Player.settings.reset('controlsHideOrder');
    }
    const controls = Player.$(`.${ns}-controls`);
    return Player.controls.hideOrder = Player.config.controlsHideOrder
      .map(id => controls.querySelector(`[data-hide-id="${id}"]`))
      .filter(el => el)
      .sort((a, b) => a.dataset.hideOrder - b.dataset.hideOrder);
  }
};