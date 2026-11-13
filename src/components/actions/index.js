module.exports = {
  atRoot: ['togglePlay', 'play', 'pause', 'next', 'previous', 'stop', 'toggleMute', 'volumeUp', 'volumeDown'],
  public: ['togglePlay', 'play', 'pause', 'next', 'previous', 'stop', 'toggleMute', 'volumeUp', 'volumeDown'],

  initialize() {
    // Keep this reference to switch Player.audio to standalone videos and back.
    Player.controls._audio = Player.audio;
    Player.on('rendered', () => Player.$(`.${ns}-video`).addEventListener('error', Player.actions._handleVideoError));
  },

  /**
	 * Switching being playing and paused.
	 */
  togglePlay() {
    // A play waiting for a sound webm to load counts as playing, so this cancels it.
    if (Player.audio.paused && !Player.actions._pendingPlay) {
      Player.play();
    } else {
      Player.pause();
    }
  },

  /**
	 * Start playback.
	 */
  async play(sound, { paused } = {}) {
    try {
      // Handle id instead of sound object.
      if (typeof sound === 'string') {
        sound = Player.sounds.find(s => s.id === sound);
        // An id that no longer resolves (removed or filtered) shouldn't play another sound.
        if (!sound) {
          return;
        }
      }
      // If nothing is currently selected to play start playing the first sound.
      if (!sound && !Player.playing && Player.sounds.length) {
        sound = Player.sounds[0];
      }

      // Retrying the selected sound after it failed to load: play() on an errored element
      // only rejects, so reload it, and cancel the pending auto-advance.
      if (sound && sound === Player.playing && Player.audio.error) {
        clearTimeout(Player._errorAdvanceTO);
        Player.audio.load();
      }

      // If a new sound is being played update the display.
      if (sound && sound !== Player.playing) {
        if (Player.playing) {
          Player.playing.playing = false;
        }
        // Remove play on load listeners for the previous sound.
        Player.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
        Player.audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
        // Dropping a pending play: put the buttons back to paused (play events set them
        // again if the new sound plays).
        Player.actions._pendingPlay && Player.controls.setPlayButtons(Player.audio, true);
        Player.actions._pendingPlay = false;
        // Remove audio events from the video, and add them back for standalone video.
        const audioEvents = Player.controls.audioEvents;
        for (let evt in audioEvents) {
          let handlers = Array.isArray(audioEvents[evt]) ? audioEvents[evt] : [audioEvents[evt]];
          handlers.forEach(handler => {
            const handlerFunction = Player.getHandler(handler);
            Player.video.removeEventListener(evt, handlerFunction);
            sound.standaloneVideo && Player.video.addEventListener(evt, handlerFunction);
          });
        }
        sound.playing = true;
        Player.playing = sound;
        const previousMedia = Player.audio;
        // Cancel any pending rerouter swap on the outgoing element so its onLoad/
        // onError listeners can't fire against the new src and revert it.
        previousMedia._pendingReroute && previousMedia._pendingReroute();
        Player.isVideo = sound.image.match(/\.(webm|mp4)$/i) || sound.type === 'video/webm' || sound.type === 'video/mp4';
        Player.isStandalone = sound.standaloneVideo;
        Player.video.loop = !Player.isStandalone;
        // Standalone videos play through the video element, everything else through the
        // audio element. Pick the element before setting src: setting it on the outgoing
        // element left the audio element with the previous sound after a standalone video.
        Player.audio = sound.standaloneVideo ? Player.video : Player.controls._audio;
        if (Player.audio !== previousMedia) {
          // Silence and unload the outgoing element: left loading, its late events (an
          // error, a duration) were handled as the new sound's. Keep the user's volume and
          // playback rate.
          previousMedia.pause();
          previousMedia.removeAttribute('src');
          previousMedia.load();
          Player.audio.volume = previousMedia.volume;
          Player.audio.defaultPlaybackRate = previousMedia.defaultPlaybackRate;
        }
        // A sound without a video doesn't use the video element: unload it rather than
        // leave the previous post's video looping (and decoding) out of sight.
        if (!Player.isVideo && Player.video !== previousMedia && Player.video.getAttribute('src')) {
          Player.video.pause();
          Player.video.removeAttribute('src');
          Player.video.load();
        }
        // A standalone video's source is the post's video, which playlist.showImage sets
        // on 'playsound'.
        sound.standaloneVideo || (Player.audio.src = sound.src);
        Player.audio._linked = Player.isVideo && !Player.isStandalone && Player.video;
        Player.video._linked = Player.isVideo && !Player.isStandalone && Player.audio;
        Player.container.classList[Player.isVideo ? 'add' : 'remove']('playing-video');
        Player.container.classList[Player.isVideo || sound.image.endsWith('gif') ? 'add' : 'remove']('playing-animated');
        await Player.trigger('playsound', sound);
      }

      if (!paused) {
        // If there's a video and sound wait for both to load before playing.
        if (!Player.isStandalone && Player.isVideo && (Player.video.readyState < 3 || Player.audio.readyState < 3)) {
          Player.video.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
          Player.audio.addEventListener('canplaythrough', Player.actions.playOnceLoaded);
          // Remember the play is pending so pause() can cancel it, and show it as playing.
          Player.actions._pendingPlay = true;
          Player.controls.setPlayButtons(Player.audio, false);
        } else {
          // play() returns a promise that rejects asynchronously (so the try/catch
          // can't catch it): AbortError when a newer load/pause supersedes this call
          // — common during the rapid re-renders a shuffle/fullscreen toggle triggers —
          // or NotAllowedError when autoplay is blocked. Real media failures surface via
          // the element's 'error' event (handleAudioError), so swallow these.
          Player.audio.play().catch(() => { /* superseded play / autoplay blocked */ });
        }
      }
    } catch (err) {
      Player.logError('There was an error playing the sound. Please check the console for details.', err);
    }
  },

  /**
	 * Handler to only start playback once the video and audio are both loaded.
	 */
  playOnceLoaded(e) {
    if (e.currentTarget.readyState > 3 && e.currentTarget._linked.readyState > 3) {
      (e.currentTarget === Player.audio || e.currentTarget === Player.video) && (Player.actions._pendingPlay = false);
      e.currentTarget.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      e.currentTarget._linked.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      e.currentTarget._inlinePlayer && e.currentTarget._inlinePlayer.pendingControls && e.currentTarget._inlinePlayer.pendingControls();
      // As in play(): these reject benignly when superseded by a newer load/pause or
      // when autoplay is blocked; the 'error' event handles real failures.
      e.currentTarget._linked.play().catch(() => {});
      e.currentTarget.play().catch(() => {});
    } else {
      !e.currentTarget.paused && e.currentTarget.pause();
      !e.currentTarget._linked.paused && e.currentTarget._linked.pause();
      e.currentTarget.currentTime !== 0 && (e.currentTarget.currentTime = 0);
      e.currentTarget._linked.currentTime !== 0 && (e.currentTarget._linked.currentTime = 0);
    }
  },

  /**
	 * Pause playback.
	 */
  pause() {
    // Cancel a play still waiting for a sound webm's audio and video to load; otherwise it
    // would start anyway once they had.
    if (Player.actions._pendingPlay) {
      Player.actions._pendingPlay = false;
      Player.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      Player.audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
      Player.controls.setPlayButtons(Player.audio, true);
    }
    Player.audio && Player.audio.pause();
  },

  /**
	 * The post's video failed to load for a sound webm (deleted, or an archive without the
	 * media). Play the sound without it instead of waiting for the video forever.
	 * A standalone video's errors go to controls.handleAudioError instead.
	 */
  _handleVideoError(e) {
    if (!Player.playing || Player.isStandalone || !Player.isVideo || e.currentTarget !== Player.video) {
      return;
    }
    Player.video.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
    Player.audio.removeEventListener('canplaythrough', Player.actions.playOnceLoaded);
    Player.audio._linked = Player.video._linked = false;
    Player.isVideo = false;
    Player.container.classList.remove('playing-video');
    // document, not Player.$: the picture-in-picture thumbnail moves the image to <body>.
    document.querySelector(`.${ns}-image-link`).classList.remove(`${ns}-show-video`);
    if (Player.actions._pendingPlay) {
      Player.actions._pendingPlay = false;
      Player.audio.play().catch(() => {});
    }
  },

  /**
	 * Stop playback.
	 */
  stop() {
    // Cancel an auto-advance after a failed sound, which would otherwise start playing
    // again (from the first sound) after the player was closed.
    clearTimeout(Player._errorAdvanceTO);
    Player.pause();
    // Cancel any pending rerouter swap so its listeners don't fire after the stop.
    Player.audio._pendingReroute && Player.audio._pendingReroute();
    Player.audio.pause();
    // removeAttribute + load() unsets the source per the HTML5 load algorithm
    // without producing an error event. Even if a browser fires one anyway, the
    // Player.playing = null below short-circuits handleAudioError before the
    // queued error task can run (Player.playing is set synchronously here while
    // the error event is queued as a microtask).
    Player.audio.removeAttribute('src');
    Player.audio.load();
    // Clear the row's playing flag too; the next play() can't, with nothing playing.
    Player.playing && (Player.playing.playing = false);
    Player.playing = null;
    Player.isVideo = false;
    Player.isStandalone = false;
    Player.trigger('stop');
  },

  /**
	 * Play the next sound.
	 */
  next(opts) {
    Player.actions._movePlaying(1, opts);
  },

  /**
	 * Play the previous sound.
	 */
  previous(opts) {
    // Over three seconds into a sound restarts it instead.
    const restartSeconds = typeof Player.config.restartSeconds == 'number' && Player.config.restartSeconds;
    if (restartSeconds && Player.audio.currentTime > restartSeconds) {
      Player.audio.currentTime = 0;
    } else {
      Player.actions._movePlaying(-1, opts);
    }
  },

  _movePlaying(direction, { force, group, paused } = {}) {
    // If there's no sound fall out.
    if (!Player.sounds.length) {
      return;
    }
    // If there's no sound currently playing or it's not in the list then just play the first sound.
    const currentIndex = Player.sounds.indexOf(Player.playing);
    if (currentIndex === -1) {
      return Player.play(Player.sounds[0]);
    }
    // Get the next index, either repeating the same, wrapping round to repeat all or just moving the index.
    let nextSound;
    if (!force && Player.config.repeat === 'one') {
      nextSound = Player.sounds[currentIndex];
    } else {
      let newIndex = currentIndex;
      // Advance to the next index (wrapping when repeat-all). Keep skipping while either:
      //  - it's a group move and the candidate is still in the same group, or
      //  - the candidate is a known-dead sound (failed to load) — so traversal lands on a
      //    playable one. The `newIndex !== currentIndex` guard bounds it to one full pass;
      //    if everything is dead/same-group we fall back to the (dead) current and the
      //    play guard below refuses to replay it (no infinite 3s error loop).
      do {
        newIndex = Player.config.repeat === 'all'
          ? ((newIndex + direction) + Player.sounds.length) % Player.sounds.length
          : newIndex + direction;
        nextSound = Player.sounds[newIndex];
      } while (
        nextSound && newIndex !== currentIndex
        && ((group && (!nextSound.post || nextSound.post === Player.playing.post)) || nextSound.error)
      );
    }
    // Don't auto-play a dead sound: when the skip loop wrapped back to a dead current
    // (every other sound is dead too) stop rather than looping on the error. Manual
    // selection (handleSelect) bypasses this and still retries a dead link.
    nextSound && !nextSound.error && Player.play(nextSound, { paused });
  },

  /**
	 * Raise the volume by 5%.
	 */
  volumeUp() {
    Player.audio.volume = Math.min(Player.audio.volume + 0.05, 1);
  },

  /**
	 * Lower the volume by 5%.
	 */
  volumeDown() {
    Player.audio.volume = Math.max(Player.audio.volume - 0.05, 0);
  },

  /**
	 * Mute the audio, or reset it to the last volume prior to muting.
	 */
  toggleMute() {
    Player.audio.volume = (Player._lastVolume || 0.5) * !Player.audio.volume;
  }
};
