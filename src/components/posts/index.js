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
    // "Include Video" applies to the open thread straight away (it needed a reload): drop
    // the thread's standalone videos it no longer allows, then parse the posts again to add
    // newly allowed ones (posts already parsed are skipped).
    Player.on('config:addWebm', () => {
      const setting = Player.config.addWebm;
      const allowed = setting === 'always' || (setting === 'soundBoards' && (Board === 'gif' || Board === 'wsg'));
      if (!allowed) {
        Player.sounds.filter(s => s.standaloneVideo && !s.local).forEach(s => Player.playlist.remove(s, { temporary: true }));
        const filtered = Player.filteredSounds.filter(s => s.standaloneVideo && !s.local);
        // In place: applyFilters keeps this array's identity too.
        filtered.forEach(s => Player.filteredSounds.splice(Player.filteredSounds.indexOf(s), 1));
        filtered.forEach(s => Player.posts.updateButtons(s.post));
      }
      Player.posts.addPosts(document.body, true);
    });
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

    // The initial parse adds every sound in the thread. Hold the per-sound template
    // refreshes ('add', 'filters-applied'), which re-rendered the header/footer once per
    // sound, and refresh once at the end.
    postRender && (Player._bulkAdding = true);
    try {
      posts.forEach(post => Player.posts.addPost(post, postRender) && (addedSounds = true));
    } finally {
      postRender && (Player._bulkAdding = false);
    }
    postRender && Player.trigger('filters-applied');

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
      const linkScope = Player.posts._linkScope(post);
      let playLink = linkScope.querySelector(`.${ns}-play-link`);
      let addLink = linkScope.querySelector(`.${ns}-unfilter-link`);
      if (playLink || addLink) {
        playLink && Player.events.apply(playLink);
        addLink && Player.events.apply(addLink);
        return;
      }

      // Only parse this page's own posts. 4chan X clones (inline quotes, including posts
      // fetched from other threads) get an "_N" suffix on every id, and 4chan-neXT's
      // comment preview is a fake .post#p-preview. Parsing those added stray sounds, and
      // a new duplicate each time an inline quote was re-expanded.
      if (Site === '4chan' && !/^\d+$/.test(postID)) {
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

      const thumbContainer = post.querySelector(selectors.thumb);
      const fileThumb = thumbContainer && thumbContainer.closest('a');
      const imageSrc = fileThumb && fileThumb.href;
      if (!imageSrc) {
        return;
      }
      // 4chan X's "Replace WEBM" swaps a video's thumbnail <img> for a <video> that keeps
      // the thumbnail as its poster and the MD5 in data-md5. Only looking for an <img>
      // left webm sounds with a null thumbnail, shown as a broken image.
      const thumbEl = fileThumb && fileThumb.querySelector('img, video');
      const thumbSrc = thumbEl && (thumbEl.nodeName === 'VIDEO'
        ? thumbEl.poster
        : thumbEl.src || thumbEl.dataset.src) || null;
      const imageMD5 = Site === 'Fuuka'
        ? post.querySelector(':scope > br + a').href.split('/').pop()
        : thumbEl && thumbEl.getAttribute('data-md5');

      if (imageMD5 === 'HO0kbeZNQqBye1CF7Tq7hg==' && post.innerHTML.includes('[futari no christmas]')) {
        filename = 'futari no christmas[sound=files.catbox.moe/ahvi2c.opus]';
      }

      const parsed = Player.posts.getSounds(filename, imageSrc, postID, thumbSrc, imageMD5);
      // Leave out sounds the user removed.
      const sounds = parsed.sounds.filter(sound => !Player.playlist._removedIds.has(sound.id));
      const filtered = parsed.filtered;

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
      // relative may be a list of selectors in priority order.
      const relative = [].concat(linkInfo.relative || []).map(sel => postEl.querySelector(sel)).find(Boolean);
      if (!relative) {
        return;
      }

      // Create/update the unfilter button, or remove it.
      const linkScope = Player.posts._linkScope(postEl);
      let addLink = linkScope.querySelector(`.${ns}-unfilter-link`);
      const allFilters = Player.posts.getFilters(postId);
      const hasFilter = allFilters.host.length || allFilters.image || allFilters.sound.length;
      if (hasFilter) {
        postEl.classList.add('filtered-sound');
        // There is a filtered sound for the post so create/update the add link,
        const filtered = [allFilters.image && 'image', allFilters.sound.length && 'sound'].filter(Boolean).join(' and ');
        // Hosts come from post filenames and the URL parser keeps characters like `"`,
        // `=` and `(` in hostnames. The hint is rendered as HTML by the popover, so
        // escape the hosts here and escape the whole hint again for the attribute below.
        const hosts = allFilters.host.map(_.escHTML);
        const hint = (hosts.length > 1 ? `The hosts ${hosts.join(', ')} are not allowed` : '')
					+ (hosts.length === 1 ? `The host ${hosts[0]} is not allowed` : '')
					+ (filtered ? `${allFilters.host.length ? ', and the' : 'The'} player filters disallow this ${filtered}` : '')
					+ '. Click to allow and add to the player.';

        if (addLink) {
          addLink.dataset.content = hint;
        } else {
          _.element('<span>'
						+ (linkInfo.prependText || '')
						+ `<a href="javascript:" class="${linkInfo.class} ${ns}-unfilter-link ${ns}-popover" data-content="${_.escAttr(hint)}" @click='posts.allowPost("${_.escAttr(postId, true)}")'>${linkInfo.unfilterText || ''}</a>`
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
      let playLink = linkScope.querySelector(`.${ns}-play-link`);
      const addedSound = Player.sounds.find(sound => sound.post === postId);
      if (playLink && !addedSound) {
        playLink.parentNode.parentNode.removeChild(playLink.parentNode);
      } else if (!playLink && addedSound) {
        _.element('<span>'
					+ (linkInfo.prependText || '')
					+ `<a href="javascript:" class="${ns}-play-link ${linkInfo.class}" @click='posts.playPost("${_.escAttr(postId, true)}")'>${linkInfo.text || ''}</a>`
					+ (linkInfo.appendText || '')
					+ '</span>', relative, linkInfo.position);
      }
    }
  },

  /**
	 * Play a post's first sound in the player. Looked up when clicked: the post's first
	 * sound changes when sounds are filtered or removed.
	 */
  playPost(postId) {
    const sound = Player.sounds.find(sound => sound.post === postId);
    sound && Player.play(sound);
  },

  /**
	 * The element a post's play/add links are inserted into. Looking in the whole post found
	 * links of nested posts (inline quotes, a FoolFuuka OP's replies) instead.
	 */
  _linkScope(post) {
    const { relative: selector, position } = selectors.playLink;
    const relative = [].concat(selector || []).map(sel => post.querySelector(sel)).find(Boolean);
    if (!relative) {
      return post;
    }
    // Links are inserted inside the anchor (FoolFuuka) or next to it (4chan, Fuuka).
    return position === 'beforeend' || position === 'afterbegin' ? relative : relative.parentNode;
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
    // The host comes from the post. Allow entries also match subdomains, so refuse a
    // single label ("com" would allow every .com site) and local or IP-address hosts (the
    // player fetches allowed sounds with the userscript's cross-site requests).
    const unsafe = allowed.host.filter(host => !host.includes('.') || /^[\d.]+$|^\[|(^|\.)localhost$|\.local$/.test(host));
    unsafe.length && Player.logError(`Not allowing ${_.escHTML(unsafe.join(', '))} from a post. Add it in Settings &gt; Filter if you trust it.`, null, 'warning');
    const hosts = allowed.host.filter(host => !unsafe.includes(host));
    if (hosts.length) {
      Player.set('allow', Player.config.allow.concat(hosts));
    }
    if (allowed.image || allowed.sound.length) {
      Player.set('filters', Player.config.filters.filter(filter => {
        return filter !== allowed.image
					&& !allowed.sound.find(sound => filter.replace(/^(https?:)?\/\//, '') === sound);
      }));
    }
  }
};
