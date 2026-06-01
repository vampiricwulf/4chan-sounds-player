const selectors = require('../../selectors');
const hosts = require('../../hosts');

const protocolRE = /^(https?:)?\/\//;
const filenameRE = new RegExp('(.*?)[[({](' + Object.keys(hosts).join('|') + ')[ =:|$](.*?)[\\])}]', 'gi');
// Hostname-anchored: requires // (or userinfo@) immediately before the matched
// catbox.moe, and a path/port/query/fragment/end immediately after. So substrings
// in paths or query strings don't match, and `xcatbox.moe` doesn't either.
const catboxHostReplaceRE = /(\/\/(?:[^/?#]*@)?(?:[^/?#]*\.)?)catbox\.moe(?=[:/?#]|$)/i;

let localCounter = 0;

// Returns the URL to actually use for `src`, given the user's stored original.
// Hostname-anchored so non-canonical bytes (raw spaces, casing, encoding) elsewhere
// in the URL are preserved verbatim — only the catbox.moe portion of the hostname
// changes. This avoids the URL-roundtrip normalization that would otherwise leave
// sound.src and sound._origSrc differing in more than just the host.
function rerouteSrc(src) {
  // Strict whitelist of "enabled" values. boolean true or the literal string "true" (from a
  // settings import that stringified the boolean) enable; anything else — including string
  // "false"/"False"/"0"/"no", or numeric coercions — leaves src untouched.
  const enabled = Player.config.fatboxRerouter;
  if (!src || (enabled !== true && enabled !== 'true')) return src;
  return src.replace(catboxHostReplaceRE, '$1fatbox.moe');
}

module.exports = {
  rerouteSrc,

  initialize() {
    Player.on('config:fatboxRerouter', () => {
      // Re-derive src from each sound's stored original. Idempotent and safe to repeat.
      // fatbox is a byte-identical mirror so sound.tags (ID3) stays valid; no cache wipe.
      let changed = false;
      Player.allSounds(sound => {
        if (typeof sound._origSrc !== 'string') return;
        const newSrc = rerouteSrc(sound._origSrc);
        if (sound.src !== newSrc) {
          sound.src = newSrc;
          changed = true;
        }
      });
      // Skip the downstream cascade when nothing was actually rerouted (no catbox sounds).
      if (!changed) return;
      // Re-bucket sounds between sounds/filteredSounds (recomputes sound.disallow
      // against the new hostname, calls Player.posts.updateButtons, emits
      // 'filters-applied'). applyFilters internally sets Player._applyingFilters
      // to suppress autoshow during the rebucket.
      Player.playlist.applyFilters();
      // Refresh the playlist DOM so rendered hrefs/click handlers reflect the new src.
      Player.playlist.render();
      // Reload the live audio element in place for non-standalone playback. Gate on the
      // playing sound still being in Player.sounds (applyFilters may have moved it).
      const playing = Player.playing;
      if (playing && !playing.standaloneVideo && Player.sounds.indexOf(playing) !== -1 && Player.audio.src && Player.audio.src !== playing.src) {
        // Capture the audio element so the swap can't get redirected if Player.audio
        // is reassigned to a standalone video mid-load. getVideo() re-reads
        // Player.video at apply-time so display.render reassignments are honored.
        const audioEl = Player.audio;
        _.swapAudioSrc(audioEl, playing.src, {
          getVideo: () => (Player.isVideo && !Player.isStandalone) ? Player.video : null,
          ownerStillValid: () => Player.audio === audioEl,
          setInProgress: true,
        });
      }
      // Update any expanded/hover inline audio elements. Inline is required at module
      // load; the method is statically defined — no defensive null check needed.
      Player.inline._reloadActiveAudio();
    });
  },

  addPosts(target, postRender) {
    let addedSounds = false;
    let posts = target.classList.contains('post')
      ? [target]
      : target.querySelectorAll(selectors.posts);

    posts.forEach(post => Player.posts.addPost(post, postRender) && (addedSounds = true));

    if (addedSounds && postRender && Player.container) {
      Player.playlist.render();
    }
  },

  addPost(post, skipRender) {
    try {
      // Ignore the style fetcher post created by this script, quoted posts, and posts with no file.
      let parent = post.parentElement;
      let parentParent = parent && parent.parentElement;
      if (post.classList.contains('style-fetcher') || parentParent && parentParent.id === 'qp' || parent && parent.classList.contains('noFile')) {
        return;
      }

      const postID = post.id.slice(selectors.postIdPrefix.length);

      // If there's a play or add button this post has already been parsed. Just wire up the link.
      let playLink = post.querySelector(`.${ns}-play-link`);
      let addLink = post.querySelector(`.${ns}-unfilter-link`);
      if (playLink || addLink) {
        playLink && Player.events.apply(playLink);
        addLink && Player.events.apply(addLink);
        return;
      }

      let filename = null;
      let filenameLocations = selectors.filename;

      Object.keys(filenameLocations).some(function(selector) {
        const node = post.querySelector(selector);
        return node && (filename = node[filenameLocations[selector]]);
      });

      if (!filename) {
        return;
      }

      selectors.filenameParser && (filename = selectors.filenameParser(filename));

      const fileThumb = post.querySelector(selectors.thumb).closest('a');
      const imageSrc = fileThumb && fileThumb.href;
      const thumbImg = fileThumb && fileThumb.querySelector('img');
      const thumbSrc = thumbImg && thumbImg.src;
      const imageMD5 = Site === 'Fuuka'
        ? post.querySelector(':scope > br + a').href.split('/').pop()
        : thumbImg && thumbImg.getAttribute('data-md5');

      if (imageMD5 === 'HO0kbeZNQqBye1CF7Tq7hg==' && post.innerHTML.includes('[futari no christmas]')) {
        filename = 'futari no christmas[sound=files.catbox.moe/ahvi2c.opus]';
      }

      const { sounds, filtered } = Player.posts.getSounds(filename, imageSrc, postID, thumbSrc, imageMD5);

      if (sounds.length || filtered.length) {
        sounds.forEach(sound => Player.add(sound, skipRender));
        filtered.forEach(sound => Player.filteredSounds.push(sound));
        Player.posts.updateButtons(postID);
        filtered.length && Player.trigger('filters-applied');
      }
      return sounds.length > 0;
    } catch (err) {
      Player.logError('There was an issue parsing the files. Please check the console for details.', err);
      if (!post) {
        return;
      }
    }
  },

  getSounds(filename, image, post, thumb, imageMD5, bypassVerification) {
    if (!filename) {
      return { sounds: [], filtered: [] };
    }
    // Best quality image. For webms this has to be the thumbnail still. SAD!
    const imageOrThumb = image.match(/(webm|mp4)$/i) ? thumb : image;
    // matchAll isolates regex state per call instead of relying on filenameRE.lastIndex.
    const matches = Array.from(filename.matchAll(filenameRE));
    // Add webms without a sound filename as a standalone video if enabled. The synthetic
    // match must align with the regex's capture groups: [full, name, host, src].
    if (!matches.length && (Player.config.addWebm === 'always' || (Player.config.addWebm === 'soundBoards' && (Board === 'gif' || Board === 'wsg'))) && filename.match(/\.(webm|mp4)$/i)) {
      // `.webm` is 5 chars, `.mp4` is 4 — strip the actual extension instead of a
      // fixed-width slice that truncates an extra char for .mp4 titles.
      matches.push([null, filename.replace(/\.(webm|mp4)$/i, ''), 'sound', image]);
    }
    const defaultName = matches[0] && matches[0][1] || post || 'Local Sound ' + localCounter;
    matches.length && !post && localCounter++;

    return matches.reduce(({ sounds, filtered }, match, i) => {
      // filenameRE is case-insensitive (gi), so a tag like `[Sound=…]`/`[Catbox=…]`
      // captures the host in its original case. The `hosts` map is keyed lowercase, so
      // lowercase before lookup or `hosts[host]` is undefined → throws → sound dropped.
      let host = match[2].toLowerCase();
      let src = match[3];
      const id = (post || 'local' + localCounter) + ':' + i;
      const name = match[1].trim();
      const title = name || defaultName + (matches.length > 1 ? ` (${i + 1})` : '');
      const standaloneVideo = src === image;

      try {
        if (hosts[host].decode) {
          // standaloneVideo synthetic matches (addWebm fallback) inject the 4cdn
          // image URL verbatim; skip the percent-decoding pass so any encoded path
          // segments aren't silently corrupted.
          if (!standaloneVideo && src.includes('%')) {
            src = decodeURIComponent(src);
          }

          if (!src.startsWith('blob:') && src.match(protocolRE) === null) {
            src = (location.protocol + '//' + src);
          }
        } else {
          src = (location.protocol + hosts[host].filepath + src);
        }
      } catch (error) {
        return { sounds, filtered };
      }

      const _origSrc = src;
      src = rerouteSrc(src);

      const sound = { src, _origSrc, id, title, name, post, image, imageOrThumb, filename, thumb, imageMD5, standaloneVideo };
      sound.disallow = !bypassVerification && Player.disallowedSound(sound);
      if (!sound.disallow) {
        sounds.push(sound);
      } else if (!sound.disallow.invalid) {
        filtered.push(sound);
      }
      return { sounds, filtered };
    }, { sounds: [], filtered: [] });
  },

  /**
	 * Read all the sounds from the thread again.
	 */
  refresh() {
    Player.posts.addPosts(document.body);
  },

  updateButtons(postId) {
    const postEl = document.getElementById(selectors.postIdPrefix + postId);

    if (postEl) {
      const linkInfo = selectors.playLink;
      const relative = linkInfo.relative && postEl.querySelector(linkInfo.relative);

      // Create/update the unfilter button, or remove it.
      let addLink = relative.parentNode.querySelector(`.${ns}-unfilter-link`);
      const allFilters = Player.posts.getFilters(postId);
      const hasFilter = allFilters.host.length || allFilters.image || allFilters.sound.length;
      if (hasFilter) {
        postEl.classList.add('filtered-sound');
        // There is a filtered sound for the post so create/update the add link,
        const filtered = [allFilters.image && 'image', allFilters.sound.length && 'sound'].filter(Boolean).join(' and ');
        const hint = (allFilters.host.length > 1 ? `The hosts ${allFilters.host.join(', ')} are not allowed` : '')
					+ (allFilters.host.length === 1 ? `The host ${allFilters.host[0]} is not allowed` : '')
					+ (filtered ? `${allFilters.host.length ? ', and the' : 'The'} player filters disallow this ${filtered}` : '')
					+ '. Click to allow and add to the player.';

        if (addLink) {
          addLink.dataset.content = hint;
        } else {
          _.element('<span>'
						+ (linkInfo.prependText || '')
						+ `<a href="javascript:" class="${linkInfo.class} ${ns}-unfilter-link ${ns}-popover" data-content="${hint}" @click='posts.allowPost("${postId}")'>${linkInfo.unfilterText || ''}</a>`
						+ (linkInfo.appendText || '')
						+ '</span>', relative, linkInfo.position);
        }
      } else {
        // There isn't a filtered so remove the add link.
        postEl.classList.remove('filtered-sound');
        addLink && addLink.parentNode.parentNode.removeChild(addLink.parentNode);
        addLink && addLink.infoEl && addLink.infoEl.parentNode.removeChild(addLink.infoEl);
      }

      // Remove the play button if all sounds in the post are filtered, otherwise create it if needed.
      let playLink = postEl.querySelector(`.${ns}-play-link`);
      const addedSound = Player.sounds.find(sound => sound.post === postId);
      if (playLink && !addedSound) {
        playLink.parentNode.parentNode.removeChild(playLink.parentNode);
      } else if (!playLink && addedSound) {
        _.element('<span>'
					+ (linkInfo.prependText || '')
					+ `<a href="javascript:" class="${ns}-play-link ${linkInfo.class}" @click='play("${addedSound.id}")'>${linkInfo.text || ''}</a>`
					+ (linkInfo.appendText || '')
					+ '</span>', relative, linkInfo.position);
      }
    }
  },

  getFilters(postId) {
    return Player.filteredSounds.reduce((reason, sound) => {
      if (sound.post === postId) {
        reason.host = reason.host.concat(sound.disallow.host || []);
        reason.image = reason.image || sound.disallow.image;
        reason.sound = reason.sound.concat(sound.disallow.sound || []);
      }
      return reason;
    }, { host: [], image: false, sound: [] });
  },

  allowPost(postId) {
    const allowed = Player.posts.getFilters(postId);
    if (allowed.host.length) {
      Player.set('allow', Player.config.allow.concat(allowed.host));
    }
    if (allowed.image || allowed.sound.length) {
      Player.set('filters', Player.config.filters.filter(filter => {
        return filter !== allowed.image
					&& !allowed.sound.find(sound => filter.replace(/^(https?:)?\/\//, '') === sound);
      }));
    }
  }
};
