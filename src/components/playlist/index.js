const { postIdPrefix } = require('../../selectors');
const xhrReplacer = require('../../xhr-replace');

const itemMenuTemplate = require('./templates/item_menu.tpl');

module.exports = {
  atRoot: ['add', 'remove'],
  public: ['search'],

  tagLoadTO: {},
  // Sounds the user removed from the playlist, by id. Kept until the page is reloaded, so
  // reading the posts again doesn't bring them back, and they can be restored from their
  // post's add link or the footer.
  _removed: new Map(),

  template: require('./templates/player.tpl'),
  listTemplate: require('./templates/list.tpl'),
  tagsDialogTemplate: require('./templates/tags_dialog.tpl'),

  initialize() {
    // Keep track of the last view style so we can return to it.
    Player.playlist._lastView =
      Player.config.viewStyle === 'playlist' ||
      Player.config.viewStyle === 'image'
        ? Player.config.viewStyle
        : 'playlist';

    Player.on('view', (style) => {
      // Focus the playing song when switching to the playlist.
      style === 'playlist' && Player.playlist.scrollToPlaying();
      // Track state.
      if (style === 'playlist' || style === 'image') {
        Player.playlist._lastView = style;
      }
    });

    // Keey track of the hover image element.
    Player.on('rendered', Player.playlist.afterRender);

    // Various things to do when a new sound plays.
    Player.on('playsound', (sound) => {
      // Handlers run one after another, so a stop or another play can come first: then this
      // sound isn't the one to show.
      if (sound !== Player.playing) {
        return;
      }
      // Start the loading bars afresh, even for the same sound played again, timed from
      // about when its files started loading.
      Player.playlist._loading = null;
      const loadStart = performance.now();
      // Update the image/video.
      Player.playlist.showImage(sound);
      Player.playlist._loadingState(loadStart);
      // Update the previously and the new playing rows.
      Player.$all(
        `.${ns}-list-item.playing, .${ns}-list-item[data-id="${Player.playing.id}"]`,
      ).forEach((el) => {
        const rowSound = Player.sounds.find((s) => s.id === el.dataset.id);
        const newItem = rowSound && Player.playlist.listTemplate({ sounds: [ rowSound ] });
        // Empty when the previous sound no longer matches an active search (only the
        // playing sound is kept): drop its row, as the search would have.
        newItem && newItem.trim() && _.element(newItem, el, 'beforebegin');
        el.parentNode.removeChild(el);
      });
      // If the player isn't fullscreen scroll to the playing item.
      Player.config.viewStyle !== 'fullscreen' &&
        Player.playlist.scrollToPlaying('nearest');
      // Scroll the thread to the playing post.
      Player.config.autoScrollThread &&
        sound.post &&
        (location.href =
          location.href.split('#')[0] + '#' + postIdPrefix + sound.post);
      // Load tags from the audio file.
      Player.playlist.loadTags(Player.playing.id);
    });

    // Reset to the placeholder image when the player is stopped.
    Player.on('stop', () => {
      Player.$all(`.${ns}-list-item.playing`).forEach((el) =>
        el.classList.remove('playing'),
      );
      Player.$all(`.${ns}-row-loading`).forEach((el) => el.remove());
      Player.playlist._loading = null;
      // document, not Player.$: the picture-in-picture thumbnail moves the image to <body>.
      const container = document.querySelector(`.${ns}-image-link`);
      container.href = '#';
      document.querySelector(`.${ns}-background-image`).src = Player.video.src = '';
      document.querySelector(`.${ns}-image`).src =
        `data:image/svg+xml;base64,${btoa(Icons.fcSounds)}`;
      container.classList.remove(`${ns}-show-video`);
    });

    // Show or remove the playing row's loading bars.
    Player.on('config:rowLoadingBars', () => Player.playlist.refreshRow(Player.playing));

    // Reapply filters when they change
    Player.on('config:filters', Player.playlist.applyFilters);
    Player.on('config:allow', Player.playlist.applyFilters);

    // Listen to anything that can affect the display of hover images
    Player.on('config:hoverImages', Player.playlist.setHoverImageVisibility);
    Player.on('menu-open', Player.playlist.setHoverImageVisibility);
    Player.on('menu-close', Player.playlist.setHoverImageVisibility);

    // Listen to the search display being toggled
    Player.on('config:showPlaylistSearch', Player.playlist.toggleSearch);

    // Listen for the playlist being shuffled/ordered.
    Player.on('config:shuffle', Player.playlist._handleShuffle);

    // Update an open tags info dialog when tags are loaded for a sound.
    Player.on('tags-loaded', (sound) => {
      const dialog = Player.$(`.tags-dialog[data-sound-id="${sound.id}"]`);
      dialog &&
        _.elementHTML(dialog, Player.playlist.tagsDialogTemplate(sound));
    });

    // Resize the image when the config is changed (from other tabs)
    Player.on(
      'config:imageHeight',
      (height) => (document.querySelector(`.${ns}-image-link`).style.height = height + 'px'),
    );

    // Preload the next audio.
    Player.on(['playsound', 'order'], () => {
      const next =
        Player.sounds[
          (Player.sounds.indexOf(Player.playing) + 1) % Player.sounds.length
        ];
      // With a single sound the next one is the playing one, already loading.
      next && next !== Player.playing && Player.playlist.preload(next);
    });

    // Maintain changes to the user templates it's dependent values
    Player.userTemplate.maintain(Player.playlist, 'rowTemplate', ['shuffle']);

    // Resize observer to handle transparent images
    Player.playlist.imageResizeObserver = new ResizeObserver(
      Player.playlist.resizeTransBG,
    );
  },

  /**
   * Render the playlist.
   */
  render() {
    if (!Player.container) {
      return;
    }
    _.elementHTML(
      Player.$(`.${ns}-list-container`),
      Player.playlist.listTemplate(),
    );
    Player.playlist.afterRender();
  },

  afterRender() {
    Player.playlist.image = Player.$(`.${ns}-image`);
    Player.playlist.transparentImageBG = Player.$(
      `.${ns}-image-transparent-bg`,
    );
    Player.playlist.hoverImage = Player.$(`.${ns}-hover-image`);
    Player.playlist.imageResizeObserver.disconnect();
    Player.playlist.imageResizeObserver.observe(Player.playlist.image);
    Player.playlist.image.onload = Player.playlist.resizeTransBG;
  },

  /**
   * Restore the last playlist or image view.
   */
  restore() {
    Player.display.setViewStyle(Player.playlist._lastView || 'playlist');
  },

  /**
   * Update the image displayed in the player.
   */
  showImage(sound) {
    const container = document.querySelector(`.${ns}-image-link`);
    const img = container.querySelector(`.${ns}-image`);
    const background = container.querySelector(`.${ns}-background-image`);
    img.src = background.src = '';
    // Without a usable image keep the placeholder; assigning null requests ".../null".
    img.src = sound.imageOrThumb || `data:image/svg+xml;base64,${btoa(Icons.fcSounds)}`;
    background.src = sound.imageOrThumb || '';
    Player.isVideo && (Player.video.src = sound.image);
    if (Player.config.viewStyle !== 'fullscreen') {
      container.href = sound.image;
    }
    container.classList[Player.isVideo ? 'add' : 'remove'](ns + '-show-video');
  },

  /**
   * Resize the background element that prevents transparent images display over themself.
   */
  resizeTransBG() {
    const contentBoxRatio =
      Player.playlist.image.width / Player.playlist.image.height;
    const imageSizeRatio =
      Player.playlist.image.naturalWidth / Player.playlist.image.naturalHeight;
    const bgEl = Player.playlist.transparentImageBG;
    bgEl.style.width =
      Math.min((imageSizeRatio / contentBoxRatio) * 100, 100) + '%';
    bgEl.style.height =
      Math.min((contentBoxRatio / imageSizeRatio) * 100, 100) + '%';
  },

  /**
   * Switch between playlist and image view.
   */
  toggleView(e) {
    e && e.preventDefault();
    let style =
      Player.config.viewStyle === 'playlist'
        ? 'image'
        : Player.config.viewStyle === 'image'
          ? 'playlist'
          : Player.playlist._lastView;
    Player.display.setViewStyle(style);
  },

  /**
   * Add a new sound from the thread to the player.
   */
  add(sound, skipRender) {
    try {
      const id = sound.id;
      // Make sure the sound is not a duplicate.
      if (Player.sounds.find((sound) => sound.id === id)) {
        return;
      }

      // Add the sound with the location based on the shuffle settings.
      // Shuffle: a uniform insertion point in [0, length] (operator precedence made the
      // old `* length - 1` yield [-1, length-1), skewing the distribution and never
      // targeting the last slot). Sorted: the first sound that should sort AFTER the new
      // one — `> 0`, not `> 1` (compareIds returns the raw signed diff, so same-post
      // sounds whose SIDs differ by exactly 1 were inserted one position out of order).
      // Posts are parsed in thread order, so a new sound usually goes last: check that
      // first instead of scanning the whole list for every sound (quadratic on big threads).
      const last = Player.sounds[Player.sounds.length - 1];
      let index = Player.config.shuffle
        ? Math.floor(Math.random() * (Player.sounds.length + 1))
        : !last || Player.compareIds(last.id, id) <= 0
          ? Player.sounds.length
          : Player.sounds.findIndex((s) => Player.compareIds(s.id, id) > 0);
      index < 0 && (index = Player.sounds.length);
      Player.sounds.splice(index, 0, sound);

      if (Player.container) {
        if (!skipRender) {
          // Add the sound to the playlist.
          const list = Player.$(`.${ns}-list-container`);
          let rowContainer = _.element(
            `<div>${Player.playlist.listTemplate({ sounds: [sound] })}</div>`,
          );
          // listTemplate filters by the current search; if the new sound doesn't
          // match, rowContainer.children[0] is undefined. The sound stays in
          // Player.sounds (so search re-matching surfaces it) but has no DOM
          // row until the next full render. Skip the DOM insert; the 'add'
          // event still needs to fire below so count templates update.
          const newRow = rowContainer.children[0];
          if (newRow) {
            // The data-id selector falls back to appendChild when the next sound
            // is also search-filtered (its row isn't in DOM so `before` is null).
            const nextSound = Player.sounds[index + 1];
            const before = nextSound && Player.$(
              `.${ns}-list-item[data-id="${nextSound.id}"]`,
            );
            if (before) {
              list.insertBefore(newRow, before);
            } else {
              list.appendChild(newRow);
            }
          }
        }

        // If nothing else has been added yet show the image for this sound.
        if (Player.sounds.length === 1) {
          Player.playlist.showImage(sound);
        }
        // Auto show if enabled, we're on a thread, and this is the first non-standlone item.
        // Skip during applyFilters so a rerouter toggle / allow-list change doesn't pop a
        // hidden player open unexpectedly.
        if (
          !Player._applyingFilters &&
          Player.config.autoshow &&
          /\/thread\//.test(location.href) &&
          !sound.standaloneVideo && !Player.sounds.some((s) => s !== sound && !s.standaloneVideo)
        ) {
          Player.show();
        }
        Player.trigger('add', sound);
      }
    } catch (err) {
      Player.logError(
        'There was an error adding to the sound player. Please check the console for details.',
        err,
      );
    }
  },

  addFromDrop(e) {
    for (let item of e.dataTransfer.items) {
      const entry = item.getAsEntry
        ? item.getAsEntry()
        : item.webkitGetAsEntry();
      entry && Player.playlist._scanEntry(entry);
    }
  },

  _scanEntry(entry) {
    if (entry.isDirectory) {
      return Player.playlist._readEntries(entry.createReader());
    }
    return entry.file((file) => Player.playlist.addFromFiles([file]));
  },

  _readEntries(reader) {
    reader.readEntries((entries) => {
      if (entries.length) {
        entries.forEach(Player.playlist._scanEntry);
        Player.playlist._readEntries(reader);
      }
    });
  },

  /**
   * The add-files input changed. Take the files and clear the input, so picking the same
   * file again (after removing it) still fires a change.
   */
  handleFileSelect(e) {
    const files = [ ...e.currentTarget.files ];
    e.currentTarget.value = '';
    Player.playlist.addFromFiles(files);
  },

  addFromFiles(files) {
    // Check each of the files for sounds.
    [...files].forEach((file) => {
      if (
        !file.type.startsWith('image') &&
        file.type !== 'video/webm' &&
        file.type !== 'video/mp4'
      ) {
        return;
      }
      const imageSrc = URL.createObjectURL(file);
      const type = file.type;
      let thumbSrc = imageSrc;
      // Declared before the early return below: _continue reads it for images too.
      let added = false;

      // If it's not a webm just use the full image as the thumbnail
      if (file.type !== 'video/webm' && file.type !== 'video/mp4') {
        return _continue();
      }

      // If it's a webm grab the first frame as the thumbnail
      const canvas = document.createElement('canvas');
      const video = document.createElement('video');
      const context = canvas.getContext('2d');
      video.addEventListener('seeked', function () {
        if (video.videoWidth && video.videoHeight) {
          // Scaled down and as a JPEG: a full-size PNG of a 1080p frame is several MB,
          // kept for as long as the sound is in the playlist.
          const scale = Math.min(1, 640 / Math.max(video.videoWidth, video.videoHeight));
          canvas.width = Math.round(video.videoWidth * scale);
          canvas.height = Math.round(video.videoHeight * scale);
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          thumbSrc = canvas.toDataURL('image/jpeg', 0.85);
        } else {
          thumbSrc = null;
        }
        // Unload the probe video (the file stays available through its object URL).
        video.removeAttribute('src');
        video.load();
        _continue();
      }, { once: true });
      // A video the browser can't decode never seeks, which silently dropped the file.
      // Add it anyway, just without a thumbnail.
      video.addEventListener('error', () => {
        thumbSrc = null;
        _continue();
      }, { once: true });
      video.src = imageSrc;
      video.currentTime = 0.001;

      function _continue() {
        if (added) {
          return;
        }
        added = true;
        const { sounds } = Player.posts.getSounds(
          file.name,
          imageSrc,
          null,
          thumbSrc,
          null,
          true,
        );
        // getSounds only picks the thumbnail for URLs ending in .webm/.mp4, and a blob:
        // URL doesn't, so a local video's image would be the video itself, which an <img>
        // shows as broken. Use the extracted frame (or the placeholder without one).
        const isVideoFile = type === 'video/webm' || type === 'video/mp4';
        sounds.forEach((sound) => Player.add({ ...sound, local: true, type, ...(isVideoFile && { imageOrThumb: thumbSrc, thumb: thumbSrc }) }));
      }
    });
  },

  selectLocalFiles() {
    Player.$(`.${ns}-add-local-file-input`).click();
  },

  /**
   * Remove a sound
   */
  /**
   * Remove several sounds. If the playing one is among them, playback moves past all of
   * them at once instead of onto another that's about to go.
   */
  removeAll(sounds, opts) {
    sounds.forEach(sound => sound._removing = true);
    try {
      sounds.forEach(sound => Player.playlist.remove(sound, opts));
    } finally {
      sounds.forEach(sound => delete sound._removing);
    }
  },

  remove(sound, { temporary } = {}) {
    // Accept the sound object or id
    if (typeof sound !== 'object') {
      sound = Player.sounds.find((s) => s.id === '' + sound);
    }
    const index = Player.sounds.indexOf(sound);
    // Remember what the user removed so parsing the posts again (a setting change, a
    // thread update, a re-inserted post) doesn't bring it back, and so it can be restored.
    // Filters and settings that remove sounds temporarily don't count, and local files
    // can't come back (their object URL is released below).
    const userRemoved = !!sound && !temporary && !Player._applyingFilters;
    userRemoved && !sound.local && Player.playlist._removed.set(sound.id, sound);

    // If the playing sound is being removed then play the next sound.
    if (Player.playing === sound) {
      // A play still waiting for a sound webm to load counts as playing.
      Player.next({ force: true, paused: Player.audio.paused && !Player.actions._pendingPlay });
      // Nothing else to move to (it was the only sound, the last one with repeat off, or
      // every other sound is dead). Stop instead of playing a sound that's left the list.
      Player.playing === sound && Player.stop();
    }
    // Remove the sound from the the list and play order.
    index > -1 && Player.sounds.splice(index, 1);

    // A removed local file's object URL can go once no other sound uses it (a file can hold
    // several sounds). Not for temporary removals, which can bring the sound back.
    if (userRemoved && sound.local && !Player.sounds.some(s => s.image === sound.image) && /^blob:/.test(sound.image)) {
      URL.revokeObjectURL(sound.image);
    }
    // Remove the item from the list.
    const item = sound && Player.$(`.${ns}-list-item[data-id="${sound.id}"]`);
    item && Player.$(`.${ns}-list-container`).removeChild(item);
    // Update the post's play link (applyFilters does this itself once it's done).
    sound && sound.post && !Player._applyingFilters && Player.posts.updateButtons(sound.post);
    sound && Player.trigger('remove', sound);
  },

  /**
   * Put sounds the user removed back in the playlist, in their place: a post's, or all of
   * them when no post is given. Returns how many came back.
   */
  restoreRemoved(postId) {
    const restored = [];
    Player.playlist._removed.forEach((sound, id) => {
      if ((postId == null || sound.post === String(postId)) && Player.playlist._restorable(sound)) {
        Player.playlist._removed.delete(id);
        restored.push(sound);
      }
    });
    let filtered = false;
    restored.forEach(sound => {
      sound.playing = false;
      // The Fatbox rerouter may have been turned on or off since it was removed.
      typeof sound._origSrc === 'string' && (sound.src = Player.posts.rerouteSrc(sound._origSrc));
      // Filters or allowed hosts changed since then apply as they would to a new post.
      sound.disallow = Player.disallowedSound(sound);
      if (!sound.disallow) {
        Player.add(sound);
      } else if (!sound.disallow.invalid) {
        Player.filteredSounds.push(sound);
        filtered = true;
      }
    });
    new Set(restored.map(sound => sound.post)).forEach(post => post && Player.posts.updateButtons(post));
    filtered && Player.trigger('filters-applied');
    return restored.length;
  },

  /**
   * How many sounds the user removed that can be restored: a post's, or all of them.
   */
  removedCount(postId) {
    let count = 0;
    Player.playlist._removed.forEach(sound => (postId == null || sound.post === postId) && Player.playlist._restorable(sound) && count++);
    return count;
  },

  /**
   * A removed video without a sound only comes back while Include Video allows videos.
   */
  _restorable(sound) {
    return !sound.standaloneVideo || sound.local || Player.posts.videosAllowed();
  },

  toggleRepeat() {
    const values = ['all', 'one', 'none'];
    const current = values.indexOf(Player.config.repeat);
    Player.set('repeat', values[(current + 4) % 3]);
  },

  toggleShuffle() {
    Player.set('shuffle', !Player.config.shuffle);
  },

  _handleShuffle() {
    // Update the play order.
    if (!Player.config.shuffle) {
      Player.sounds.sort((a, b) => Player.compareIds(a.id, b.id));
    } else {
      const sounds = Player.sounds;
      for (let i = sounds.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sounds[i], sounds[j]] = [sounds[j], sounds[i]];
      }
    }
    Player.trigger('order');
  },

  /**
   * Handle an playlist item being clicked. Either open/close the menu or play the sound.
   */
  handleSelect(e) {
    // Ignore if a link was clicked.
    if (e.target.nodeName === 'A' || e.target.closest('a')) {
      return;
    }
    const id = e.currentTarget.getAttribute('data-id');
    const sound = id && Player.sounds.find((sound) => sound.id === id);
    sound && Player.play(sound);
  },

  /**
   * Display an item menu.
   */
  handleItemMenu(e, id) {
    const sound = Player.sounds.find((s) => s.id === id);

    // Add row item menus to the list container. Append to the container otherwise.
    const listContainer = e.currentTarget.closest(`.${ns}-list-container`);
    const parent = listContainer || Player.container;

    // Create the menu.
    const html = itemMenuTemplate({ sound, postIdPrefix });
    const dialog = _.element(html, parent);
    const relative = e.currentTarget.classList.contains(
      `${ns}-item-menu-button`,
    )
      ? e.currentTarget
      : e;
    Player.display.showMenu(relative, dialog, parent);
  },

  /**
   * Toggle the hoverImages setting
   */
  toggleHoverImages(e) {
    e && e.preventDefault();
    Player.set('hoverImages', !Player.config.hoverImages);
  },

  /**
   * Only show the hover image with the setting enabled, no item menu open, and nothing being dragged.
   */
  setHoverImageVisibility() {
    const container = Player.$(`.${ns}-player`);
    const hideImage =
      !Player.config.hoverImages ||
      Player.playlist._dragging ||
      container.querySelector(`.${ns}-menu`);
    container.classList[hideImage ? 'add' : 'remove'](`${ns}-hide-hover-image`);
  },

  /**
   * Set the displayed hover image and reposition.
   */
  updateHoverImage(e) {
    const id = e.currentTarget.getAttribute('data-id');
    const sound = Player.sounds.find((sound) => sound.id === id);
    if (!sound || !sound.thumb) {
      return Player.playlist.removeHoverImage();
    }
    Player.playlist.hoverImage.style.display = 'block';
    Player.playlist.hoverImage.setAttribute('src', sound.thumb);
    Player.playlist.positionHoverImage(e);
  },

  /**
   * Reposition the hover image to follow the cursor.
   */
  positionHoverImage(e) {
    const { width, height } =
      Player.playlist.hoverImage.getBoundingClientRect();
    const maxX = document.documentElement.clientWidth - width - 5;
    Player.playlist.hoverImage.style.left =
      Math.min(e.clientX, maxX) + 5 + 'px';
    Player.playlist.hoverImage.style.top = e.clientY - height - 10 + 'px';
  },

  /**
   * Hide the hover image when nothing is being hovered over.
   */
  removeHoverImage() {
    Player.playlist.hoverImage.style.display = 'none';
  },

  /**
   * Start dragging a playlist item.
   */
  handleDragStart(e) {
    // Reordering while a search is active would splice Player.sounds at positions
    // derived from the full array, but only the matching rows are in the DOM — so the
    // array order would diverge from what the user sees. Disable reorder during search.
    if (Player.playlist._lastSearch) {
      return;
    }
    Player.playlist._dragging = e.currentTarget;
    Player.playlist.setHoverImageVisibility();
    e.currentTarget.classList.add(`${ns}-dragging`);
    const img = document.createElement('img');
    img.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    img.opacity = 0;
    e.dataTransfer.setDragImage(img, 0, 0);
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData(
      'text/plain',
      e.currentTarget.getAttribute('data-id'),
    );
  },

  /**
   * Swap a playlist item when it's dragged over another item.
   */
  handleDragEnter(e) {
    if (!Player.playlist._dragging) {
      return;
    }
    const moving = Player.playlist._dragging;
    const id = moving.getAttribute('data-id');
    let before = e.target.closest && e.target.closest(`.${ns}-list-item`);
    if (!before || moving === before) {
      return;
    }
    const movingIdx = Player.sounds.findIndex((s) => s.id === id);
    const list = moving.parentNode;

    // If the item is being moved down it needs inserting before the node after the one it's dropped on.
    const position = moving.compareDocumentPosition(before);
    if (position & 0x04) {
      before = before.nextElementSibling;
      // Skip anything that isn't a row (an open row menu lives in the list too).
      while (before && !before.classList.contains(`${ns}-list-item`)) {
        before = before.nextElementSibling;
      }
    }

    // Move the element and sound.
    // If there's nothing to go before then append.
    if (before) {
      const beforeId = before.getAttribute('data-id');
      const beforeIdx = Player.sounds.findIndex((s) => s.id === beforeId);
      const insertIdx = movingIdx < beforeIdx ? beforeIdx - 1 : beforeIdx;
      list.insertBefore(moving, before);
      Player.sounds.splice(insertIdx, 0, Player.sounds.splice(movingIdx, 1)[0]);
    } else {
      Player.sounds.push(Player.sounds.splice(movingIdx, 1)[0]);
      list.appendChild(moving);
    }
    Player.trigger('order');
  },

  /**
   * Start dragging a playlist item.
   */
  handleDragEnd(e) {
    if (!Player.playlist._dragging) {
      return;
    }
    delete Player.playlist._dragging;
    e.currentTarget.classList.remove(`${ns}-dragging`);
    Player.playlist.setHoverImageVisibility();
  },

  /**
   * Scroll to the playing item, unless there is an open menu in the playlist.
   */
  scrollToPlaying(type = 'center') {
    if (Player.$(`.${ns}-list-container .${ns}-menu`)) {
      return;
    }
    const playing = Player.$(`.${ns}-list-item.playing`);
    playing && playing.scrollIntoView({ block: type });
  },

  /**
   * Remove any user filtered items from the playlist.
   */
  applyFilters() {
    const wasApplyingFilters = Player._applyingFilters;
    Player._applyingFilters = true;
    try {
      // Snapshot filteredSounds BEFORE Phase A pushes to it, so Phase B doesn't re-check
      // sounds Phase A just decided as disallowed.
      const filteredSnapshot = Array.from(Player.filteredSounds);

      // Phase A: partition Player.sounds into kept / newly-filtered.
      const newlyFiltered = [];
      Player.sounds.forEach((sound) => {
        // Local files were added without these checks (a blob: URL has no host to allow),
        // so filters and allowed hosts don't apply to them.
        sound.disallow = !sound.local && Player.disallowedSound(sound);
        if (sound.disallow) {
          newlyFiltered.push(sound);
        }
      });

      // Phase B: partition the pre-Phase-A filteredSounds into stillFiltered / newlyAllowed.
      const stillFiltered = [];
      const newlyAllowed = [];
      filteredSnapshot.forEach((sound) => {
        sound.disallow = Player.disallowedSound(sound);
        if (sound.disallow) {
          stillFiltered.push(sound);
        } else {
          newlyAllowed.push(sound);
        }
      });

      // Apply Phase A: remove newlyFiltered from Player.sounds (the DOM + Player.next
      // bookkeeping lives in playlist.remove). Don't call updateButtons yet —
      // getFilters reads Player.filteredSounds which won't include these sounds until
      // the rebuild below.
      Player.playlist.removeAll(newlyFiltered);

      // Apply Phase B: add newlyAllowed back to Player.sounds.
      newlyAllowed.forEach((sound) => {
        Player.playlist.add(sound);
      });

      // Rebuild Player.filteredSounds = stillFiltered ∪ newlyFiltered (preserve array
      // identity in case anything holds a reference). Iterative push to avoid the
      // engine-limited spread argument count on extreme inputs.
      Player.filteredSounds.length = 0;
      for (const s of stillFiltered) Player.filteredSounds.push(s);
      for (const s of newlyFiltered) Player.filteredSounds.push(s);

      // Now that filteredSounds is correct, refresh per-post UI for every sound that
      // changed buckets (so getFilters() reflects the post-move state).
      newlyFiltered.forEach((sound) => Player.posts.updateButtons(sound.post));
      newlyAllowed.forEach((sound) => Player.posts.updateButtons(sound.post));

      Player.trigger('filters-applied');
    } finally {
      Player._applyingFilters = wasApplyingFilters;
    }
  },

  // Add a filter.
  addFilter(filter) {
    filter && Player.set('filters', Player.config.filters.concat(filter));
  },

  /**
   * Search the playlist
   */
  _handleSearch(e) {
    Player.playlist.search(e.currentTarget.value.toLowerCase());
  },

  search(v) {
    // Matching is on lowercased text, as the search box lowercases what's typed; do the
    // same for a value passed in (the PlayerEvent API).
    v = typeof v === 'string' ? v.toLowerCase() : v;
    const lastSearch = Player.playlist._lastSearch;
    Player.playlist._lastSearch = v;
    if (v === lastSearch) {
      return;
    }
    Player.playlist.render();
  },

  matchesSearch(sound) {
    const v = Player.playlist._lastSearch;
    if (!v) return true;
    // Always include the currently-playing sound so its row stays in the DOM
    // (the .playing highlight + the playsound row-replace would otherwise have
    // nothing to target when search hides the row).
    if (sound === Player.playing) return true;
    // Cache the lowercased searchable text on the sound; the cache key is
    // sound.src so the rerouter mutation auto-invalidates. Saves an N×4
    // toLowerCase allocation per keystroke for large threads.
    let tokens = sound._searchTokens;
    if (!tokens || tokens._src !== sound.src) {
      tokens = sound._searchTokens = {
        _src: sound.src,
        title: (sound.title || '').toLowerCase(),
        post: (sound.post || '').toLowerCase(),
        src: (sound.src || '').toLowerCase(),
        origSrc: (typeof sound._origSrc === 'string' && sound._origSrc !== sound.src)
          ? sound._origSrc.toLowerCase()
          : null
      };
    }
    return tokens.title.includes(v)
      || (tokens.post && tokens.post.includes(v))
      || tokens.src.includes(v)
      || (tokens.origSrc && tokens.origSrc.includes(v));
  },

  /**
   * Re-render a single playlist row in place — e.g. after its dead-link mark
   * (sound.error) is set or cleared. No-op if the player isn't open or the row isn't
   * currently rendered (e.g. filtered out by an active search).
   */
  refreshRow(sound) {
    if (!sound || !Player.container) {
      return;
    }
    const el = Player.$(`.${ns}-list-item[data-id="${sound.id}"]`);
    const newItem = el && Player.playlist.listTemplate({ sounds: [ sound ] });
    if (el && newItem && newItem.trim()) {
      _.element(newItem, el, 'beforebegin');
      el.parentNode.removeChild(el);
    }
  },

  /**
   * The playing row's loading bars, at how much has loaded so far.
   */
  loadingBars() {
    if (!Player.config.rowLoadingBars) {
      return '';
    }
    const state = Player.playlist._loadingState();
    const hidden = `${ns}-row-loading-hidden`;
    return `<div class="${ns}-row-loading ${state.faded ? `${ns}-row-loaded` : ''}" aria-hidden="true">`
      + `<div class="${ns}-row-loading-video ${state.showVideo ? '' : hidden}" style="width: ${state.video * 100}%"></div>`
      + `<div class="${ns}-row-loading-audio ${state.showAudio ? '' : hidden}" style="width: ${state.audio * 100}%"></div>`
      + '</div>';
  },

  /**
   * Update the playing row's loading bars. Returns whether everything has loaded.
   */
  updateLoadingBars() {
    const state = Player.playlist._loadingState();
    const bars = Player.container && Player.$(`.${ns}-list-item.playing .${ns}-row-loading`);
    if (bars) {
      const [ video, audio ] = bars.children;
      video.style.width = `${state.video * 100}%`;
      audio.style.width = `${state.audio * 100}%`;
      video.classList[state.showVideo ? 'remove' : 'add'](`${ns}-row-loading-hidden`);
      audio.classList[state.showAudio ? 'remove' : 'add'](`${ns}-row-loading-hidden`);
      bars.classList[state.faded ? 'add' : 'remove'](`${ns}-row-loaded`);
    }
    return state.done;
  },

  /**
   * How much of the playing sound's video and audio have loaded, from 0 to 1, and which of
   * the two lines to show. A standalone video is both. A sound without a video only has audio.
   *
   * A line only shows for a file that came from the network: one that could play within
   * moments of being set (from the cache, or already preloaded) gets none. Whether the
   * browser is still downloading can't tell them apart, since it also pauses a network
   * download once it has enough buffered ahead. The choice is made once per sound.
   *
   * `faded` is when the shown lines are full; `done` is when everything has loaded.
   */
  _loadingState(start) {
    const playing = Player.playing;
    if (!playing) {
      return { video: 0, audio: 0, showVideo: false, showAudio: false, faded: false, done: false };
    }
    let track = Player.playlist._loading;
    if (!track || track.sound !== playing) {
      track = Player.playlist._loading = { sound: playing, start: start || performance.now(), decided: false, video: false, audio: false, readyAt: {} };
      Player.playlist._watchReady(track, 'audio', Player.audio);
      Player.isVideo && Player.playlist._watchReady(track, 'video', Player.video);
    }
    const hasVideo = !!Player.isVideo;
    const video = hasVideo ? Player.playlist._loadedRatio(Player.video) : 0;
    const audio = Player.playlist._loadedRatio(Player.audio);
    if (!track.decided && performance.now() - track.start >= Player.playlist.LOADING_GRACE_MS) {
      track.decided = true;
      const fromNetwork = kind => !(track.readyAt[kind] - track.start < Player.playlist.CACHED_READY_MS);
      track.video = hasVideo && video < 1 && fromNetwork('video');
      track.audio = audio < 1 && fromNetwork('audio');
    }
    return {
      video,
      audio,
      showVideo: track.video,
      showAudio: track.audio,
      faded: track.decided && (!track.video || video === 1) && (!track.audio || audio === 1),
      done: (!hasVideo || video === 1) && audio === 1
    };
  },

  // How long after a sound starts to decide which lines to show.
  LOADING_GRACE_MS: 500,
  // A file that can play within this long of being set didn't come from the network.
  // (Decoder start-up alone takes 100ms or more, so a cache hit isn't instant.)
  CACHED_READY_MS: 250,

  /**
   * Note when a media element first has enough data to play, for _loadingState. The event's
   * own timestamp is used, so a busy page doesn't make a cached file look slow.
   */
  _watchReady(track, kind, media) {
    if (!media) {
      return;
    }
    if (media.readyState >= media.HAVE_FUTURE_DATA) {
      track.readyAt[kind] = performance.now();
      return;
    }
    media.addEventListener('canplay', e => {
      Player.playlist._loading === track && track.readyAt[kind] === undefined && (track.readyAt[kind] = e.timeStamp);
    }, { once: true });
  },

  /**
   * The share of a media element's duration that has been downloaded.
   */
  _loadedRatio(media) {
    const duration = media && media.duration;
    if (!duration || !isFinite(duration) || !media.getAttribute('src')) {
      return 0;
    }
    let loaded = 0;
    for (let i = 0; i < media.buffered.length; i++) {
      loaded += media.buffered.end(i) - media.buffered.start(i);
    }
    const ratio = loaded / duration;
    // Durations are estimates for some formats, so the buffered end can stop just short.
    return ratio > 0.995 ? 1 : Math.max(0, ratio);
  },

  toggleSearch(show) {
    const input = Player.$(`.${ns}-playlist-search`);
    !show && Player.playlist._lastSearch && Player.playlist.search();
    // Hiding clears the search, so clear the box too rather than show a query that isn't applied.
    !show && (input.value = '');
    input.style.display = show ? null : 'none';
    show && input.focus();
  },

  /**
   * Attempt to load info tags from a sound source.
   * @param {String} id The sound id
   */
  loadTags(id) {
    const sound = Player.sounds.find((s) => s.id === id);
    // Fall out if they've already been loaded.
    if (sound.tags) {
      return;
    }
    // Wait a bit before fetching to ignore the mouse going across. Clear any pending
    // timer for this id first so rapid re-hover doesn't orphan an unclearable handle
    // (which would still fire a redundant fetch).
    clearTimeout(Player.playlist.tagLoadTO[id]);
    Player.playlist.tagLoadTO[id] = setTimeout(() => {
      const reader = new jsmediatags.Reader(sound.src);
      // Replace XMLHttpRequest to avoid cors.
      reader._findFileReader().prototype._createXHRObject = () =>
        new xhrReplacer.GM();
      // Load and read the tags.
      reader.read({
        onSuccess: handleTags,
        onError: handleTags,
      });
    }, 150);

    function handleTags(data) {
      // Store all the string tags that jsmediatags has set.
      sound.tags =
        data &&
        Object.entries(data.tags || {}).reduce((tags, [name, value]) => {
          typeof value === 'string' && (tags[name] = value);
          return tags;
        }, {});
      Player.trigger('tags-loaded', sound);
    }
  },

  /**
   * Cancel a pending of tags for a sond.
   * @param {String} id The sound id
   */
  abortTags(id) {
    clearTimeout(Player.playlist.tagLoadTO[id]);
    delete Player.playlist.tagLoadTO[id];
  },

  /**
   * Set a few initial values to being resizing the playlist image.
   */
  expandImageStart(e) {
    if (
      e.button !== 0 ||
      Player.isHidden ||
      Player.config.viewStyle !== 'playlist'
    ) {
      // Don't start a drag: expandImage would resize from stale or undefined start values
      // (e.g. a right-button drag).
      e.preventDrag = true;
    } else {
      Player.$(`.${ns}-image-link`).style.cursor = 'ns-resize';
      Player._imageResizeStartY = ((e.touches && e.touches[0]) || e).clientY;
      Player._imageResizeStartHeight = Player.config.imageHeight;
      Player._imageResized = false;
      Player._imageReizeMaxHeight =
        Player.$(`.${ns}-player`).getBoundingClientRect().height -
        Player.$(`.${ns}-controls`).getBoundingClientRect().height;
    }
  },

  /**
   * Resize the playlist image.
   */
  expandImage(e) {
    if (!Player.isHidden && Player.config.viewStyle === 'playlist') {
      Player._imageResized = true;
      const clientY = ((e.touches && e.touches[0]) || e).clientY;
      const height =
        Player._imageResizeStartHeight + clientY - Player._imageResizeStartY;
      Player.$(`.${ns}-image-link`).style.height =
        Math.min(Math.max(125, height), Player._imageReizeMaxHeight) + 'px';
    }
  },

  /**
   * Keep the image within the player.
   */
  setImageHeight(opts) {
    if (!Player.isHidden && Player.config.viewStyle === 'playlist') {
      Player.$(`.${ns}-image-link`).style.cursor = null;
      const imageLink = Player.$(`.${ns}-image-link`);
      const height = parseInt(imageLink.style.height);
      const maxHeight =
        Player.$(`.${ns}-player`).getBoundingClientRect().height -
        Player.$(`.${ns}-controls`).getBoundingClientRect().height;
      const finalHeight = Math.max(125, Math.min(height, maxHeight));
      imageLink.style.height = finalHeight + 'px';
      // Saved when the image itself was resized (the pointdragend event), not when the
      // player was.
      !(opts && opts.save === false) && Player.set('imageHeight', finalHeight);
    }
  },

  /**
   * If a click on the image link was after resizing then don't open the image.
   */
  expandImageClick(e) {
    !Player.isHidden &&
      Player.config.viewStyle === 'playlist' &&
      Player._imageResized &&
      e.preventDefault();
  },

  /**
   * Preload a sound.
   */
  async preload(sound) {
    // One element, reused: a new Audio per call (every track change and every drag step
    // fires this) left each one downloading. Setting a new src abandons the old load.
    if (sound.standaloneVideo || sound.error) {
      return;
    }
    const audio = Player.playlist._preloader || (Player.playlist._preloader = new Audio());
    audio.preload = 'auto';
    if (audio.src !== sound.src) {
      audio.src = sound.src;
    }
  },
};
