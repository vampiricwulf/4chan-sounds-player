const selectors = require('../../selectors');

module.exports = {
  initialize() {
    // Set the header offsets for use in templates.
    const { top, bottom } = Player.position.getHeaderOffset();
    Player.config.offsetTop = top + 'px';
    Player.config.offsetBottom = bottom + 'px';

    // Apply the last position/size, and post width limiting, when the player is shown.
    Player.on('show', async function () {
      // NB: persisted format is "left:top" (see stopResize/stopMove) so we destructure
      // in that order. Previous code labelled them `top, left` then passed them to
      // `move(top, left)` which happens to call move(x, y) where x=savedLeft,
      // y=savedTop — accidentally correct via mirrored mislabelling.
      const [ left, top ] = (await GM.getValue('position') || '').split(':');
      const [ width, height ] = (await GM.getValue('size') || '').split(':');
      // Use isFinite + non-empty check so a saved corner like '0:0' (player
      // pinned to top-left) restores correctly instead of being skipped via the
      // falsy-zero short-circuit. size has no '0' case (a 0px window is junk).
      const savedSize = +width && +height;
      savedSize && Player.position.resize(width, height, true);
      if (left !== undefined && left !== '' && top !== undefined && top !== ''
          && isFinite(+left) && isFinite(+top)) {
        Player.position.move(+left, +top);
      } else {
        // The first time, keep the default position clear of the page's header.
        Player.position.move(Player.container.offsetLeft, Player.container.offsetTop);
      }
      // Without a saved size, the default one, fitted to the window once placed (on a narrow
      // phone its header buttons were off-screen). Not its current size: a theme's layout
      // can stretch that, and it was measured where it was last shown.
      savedSize || Player.position.resize(360, 360);

      if (Player.config.limitPostWidths) {
        Player.position.setPostWidths();
        window.addEventListener('scroll', Player.position._scheduleWidths, { passive: true });
      }
    });

    // Put the saved size back after a temporary one, when the view or theme changes (the
    // Fixed Playlist width handle's size carried over to the default layout, cut off).
    Player.on([ 'view', 'config:selectedTheme' ], Player.position.restoreSize);

    // Remove post width limiting when the player is hidden.
    Player.on('hide', function () {
      Player.position.setPostWidths();
      window.removeEventListener('scroll', Player.position._scheduleWidths, { passive: true });
    });

    // Reapply the post width limiting config values when they're changed.
    Player.on('config', prop => {
      if (prop === 'limitPostWidths' || prop === 'minPostWidth') {
        window.removeEventListener('scroll', Player.position._scheduleWidths, { passive: true });
        Player.position.setPostWidths();
        if (Player.config.limitPostWidths) {
          window.addEventListener('scroll', Player.position._scheduleWidths, { passive: true });
        }
      }
    });

    // Remove post width limit from inline quotes. Only when nodes were added, and at most
    // once a frame: this observes the whole page, which changes constantly.
    let resetFrame = null;
    new MutationObserver(function (mutations) {
      if (resetFrame || !mutations.some(m => m.addedNodes.length)) {
        return;
      }
      resetFrame = requestAnimationFrame(() => {
        resetFrame = null;
        document.querySelectorAll('#hoverUI .postContainer, .inline .postContainer, .backlink_container article').forEach(post => {
          post.style.maxWidth && (post.style.maxWidth = null);
          post.style.minWidth && (post.style.minWidth = null);
        });
      });
    }).observe(document.body, {
      childList: true,
      subtree: true
    });

    // Listen for changes from other tabs. Validate the remote string the same way the
    // `show` restore does, so a malformed/empty/deleted value can't set "NaNpx".
    Player.syncTab('position', value => {
      const [ left, top ] = (value || '').split(':');
      // Clamp to this window: the position may come from a larger one.
      if (isFinite(+left) && left !== '' && isFinite(+top) && top !== '') {
        Player.position.move(+left, +top);
      }
    });
    // Keep the player on screen when the window shrinks. Not saved, so a larger window
    // still gets the saved position back.
    window.addEventListener('resize', _.debounce(() => {
      if (!Player.container || Player.isHidden || Player.config.viewStyle === 'fullscreen') {
        return;
      }
      const { width, height } = Player.container.getBoundingClientRect();
      Player.position.move(Player.container.offsetLeft, Player.container.offsetTop);
      Player.position.resize(width, height);
    }, 150));
    Player.syncTab('size', value => {
      const [ width, height ] = (value || '').split(':');
      +width && +height && Player.position.resize(width, height, true);
    });
  },

  /**
	 * Applies a max width to posts next to the player so they don't get hidden behind it.
	 */
  setPostWidths() {
    // Posts start at the left, so narrowing them only moves them out from under a player on
    // the right. With the player on the left it squeezed them and they stayed covered.
    const rect = !Player.isHidden && Player.config.limitPostWidths && Player.container.getBoundingClientRect();
    const enabled = !!rect && rect.left + rect.width / 2 > document.documentElement.clientWidth / 2;
    const posts = document.querySelectorAll(selectors.limitWidthOf);
    let limits = [];
    let maxWidthCss = '';
    let minWidthCss = '';

    if (enabled) {
      const offset = (document.documentElement.clientWidth - Player.container.offsetLeft) + 10;
      const startY = Player.container.offsetTop;
      const endY = Player.container.getBoundingClientRect().height + startY;
      maxWidthCss = `calc(100% - ${offset}px)`;

      const minWidth = Player.config.minPostWidth;
      // Coerce a bare number/numeric-string to a px value; pass through any string that
      // already includes a CSS unit (e.g. "40em", "300px"). Previous code emitted bare
      // numbers as raw CSS which browsers reject.
      minWidthCss = minWidth == null || minWidth === '' ? '' : String(_.cssLength(minWidth));

      // Read every position before writing any style. Interleaving them forced a layout
      // per post on each call, and this runs on scroll.
      limits = Array.from(posts, post => {
        const rect = post.getBoundingClientRect();
        return rect.bottom > startY && rect.top < endY;
      });
    }

    const limited = Player.position._limitedPosts || (Player.position._limitedPosts = new Set());
    const current = new Set(posts);
    // Posts limited before that no longer match (moved by quote threading, or removed) keep
    // their width otherwise.
    limited.forEach(post => {
      if (!current.has(post)) {
        post.style.maxWidth = post.style.minWidth = '';
        limited.delete(post);
      }
    });
    posts.forEach((post, i) => {
      const maxWidth = limits[i] ? maxWidthCss : '';
      const minWidth = limits[i] ? minWidthCss : '';
      post.style.maxWidth !== maxWidth && (post.style.maxWidth = maxWidth);
      post.style.minWidth !== minWidth && (post.style.minWidth = minWidth);
      limits[i] ? limited.add(post) : limited.delete(post);
    });
  },

  /**
   * Update post widths at most once a frame (scroll fires far more often).
   */
  _scheduleWidths() {
    if (Player.position._widthsFrame) {
      return;
    }
    Player.position._widthsFrame = requestAnimationFrame(() => {
      Player.position._widthsFrame = null;
      Player.position.setPostWidths();
    });
  },

  /**
	 * Handle the user grabbing the expander.
	 */
  initResize(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    Player._startX = (e.touches && e.touches[0] || e).clientX;
    Player._startY = (e.touches && e.touches[0] || e).clientY;
    let { width, height } = Player.container.getBoundingClientRect();
    Player._startWidth = width;
    Player._startHeight = height;
    Player._startTop = Player.container.offsetTop;
    Player._startLeft = Player.container.offsetLeft;
    const dir = e.currentTarget.dataset.direction || 'se';
    Player._resizeX = dir.includes('e') ? 1 : dir.includes('w') ? -1 : 0;
    Player._resizeY = dir.includes('s') ? 1 : dir.includes('n') ? -1 : 0;
    Player._resizeMoveX = dir.includes('w') ? -1 : 0;
    Player._resizeMoveY = dir.includes('n') ? -1 : 0;
    Player._resizeTarget = e.currentTarget;
  },

  /**
	 * Handle the user dragging the expander.
	 */
  doResize(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }

    const xDelta = ((e.touches && e.touches[0] || e).clientX - Player._startX) * Player._resizeX;
    const yDelta = ((e.touches && e.touches[0] || e).clientY - Player._startY) * Player._resizeY;
    const reposition = Player._resizeTarget.dataset.bypassPosition !== 'true' && (Player._resizeMoveX || Player._resizeMoveY);

    Player.position.resize(Player._startWidth + xDelta, Player._startHeight + yDelta, reposition || Player._resizeTarget.dataset.allowOffscreen);

    // If the direction is north or east then the player will need moving first.
    if (reposition) {
      Player.position.move(Player._startLeft + (xDelta * Player._resizeMoveX), Player._startTop + (yDelta * Player._resizeMoveY));
    }
  },

  /**
	 * Handle the user releasing the expander.
	 */
  stopResize(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }

    const { width, height } = Player.container.getBoundingClientRect();

    // A handle that doesn't save (the Fixed Playlist theme's width handle) only sizes the
    // player for the current layout: note it, so the saved size comes back on a change.
    Player.position._temporarySize = Player._resizeTarget.dataset.bypassSave === 'true'
      && { view: Player.config.viewStyle, theme: Player.config.selectedTheme };
    if (Player._resizeTarget.dataset.bypassSave !== 'true') {
      GM.setValue('size', width + ':' + height);
      if (Player._resizeMoveX || Player._resizeMoveY) {
        GM.setValue('position', parseInt(Player.container.style.left, 10) + ':' + parseInt(Player.container.style.top, 10));
      }
    }
  },

  /**
	 * Go back to the saved size (or the default one) after a temporary resize.
	 */
  async restoreSize() {
    const temporary = Player.position._temporarySize;
    // Not in fullscreen, where resizing does nothing: keep the note for leaving it. Not when
    // back in the layout the size was made for (leaving fullscreen): it still applies.
    if (!temporary || !Player.container || Player.config.viewStyle === 'fullscreen'
      || (Player.config.viewStyle === temporary.view && Player.config.selectedTheme === temporary.theme)) {
      return;
    }
    Player.position._temporarySize = false;
    const [ width, height ] = (await GM.getValue('size') || '').split(':');
    +width && +height ? Player.position.resize(+width, +height, true) : Player.position.resize(360, 360, true);
  },

  /**
	 * Resize the player.
	 */
  resize(width, height, allowOffscreen) {
    if (!Player.container || Player.config.viewStyle === 'fullscreen') {
      return;
    }
    const { top, bottom } = Player.position.getHeaderOffset();
    // Make sure the player isn't larger than the screen, or going off screen unless allowed.
    height = Math.min(height, document.documentElement.clientHeight - (allowOffscreen ? (top + bottom) : Player.container.offsetTop + bottom));
    width = Math.min(width, document.documentElement.clientWidth - (allowOffscreen ? 0 : Player.container.offsetLeft));

    Player.container.style.width = width + 'px';
    Player.container.style.height = height + 'px';
    Player.controls.preventWrapping();
    // Keep the image within the player, without saving: shrinking the player shouldn't
    // overwrite the chosen image height (and saved on every pointermove).
    Player.playlist.setImageHeight({ save: false });
  },

  /**
	 * Handle the user grabbing the header.
	 */
  initMove(e) {
    if (e.target.nodeName === 'A' || e.target.closest('a') || e.target.classList.contains(`${ns}-expander`)) {
      return e.preventDrag = true;
    }
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    Player.$(`.${ns}-header`).style.cursor = 'grabbing';

    // Try to reapply the current sizing to fix oversized winows.
    const { width, height } = Player.container.getBoundingClientRect();
    Player.position.resize(width, height);

    const clientX = (e.touches && e.touches[0] || e).clientX;
    const clientY = (e.touches && e.touches[0] || e).clientY;
    Player._offsetX = clientX - Player.container.offsetLeft;
    Player._offsetY = clientY - Player.container.offsetTop;
  },

  /**
	 * Handle the user dragging the header.
	 */
  doMove(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    const clientX = (e.touches && e.touches[0] || e).clientX;
    const clientY = (e.touches && e.touches[0] || e).clientY;
    Player.position.move(clientX - Player._offsetX, clientY - Player._offsetY);
  },

  /**
	 * Handle the user releasing the heaer.
	 */
  stopMove(e) {
    try { e.preventDefault(); } catch (e) { /* ignore */ }
    Player.$(`.${ns}-header`).style.cursor = null;
    GM.setValue('position', parseInt(Player.container.style.left, 10) + ':' + parseInt(Player.container.style.top, 10));
  },

  /**
	 * Move the player.
	 */
  move(x, y, allowOffscreen) {
    if (!Player.container) {
      return;
    }

    const { top, bottom } = Player.position.getHeaderOffset();

    // Ensure the player stays fully within the window.
    const { width, height } = Player.container.getBoundingClientRect();
    const maxX = allowOffscreen ? Infinity : document.documentElement.clientWidth - width;
    const maxY = allowOffscreen ? Infinity : document.documentElement.clientHeight - height - bottom;

    // Move the window.
    Player.container.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
    Player.container.style.top = Math.max(top, Math.min(y, maxY)) + 'px';

    // Once a frame: this runs on every pointermove while dragging, and the update lays out
    // every post in the thread.
    if (Player.config.limitPostWidths) {
      Player.position._scheduleWidths();
    }
  },

  /**
	 * Get the offset from the top or bottom required for the 4chan X header.
	 */
  getHeaderOffset() {
    const docClasses = document.documentElement.classList;
    let top = 0;
    let bottom = 0;
    // Count a fixed bar on whichever edge it actually is: 4chan-neXT's phone layouts move
    // the header to the other edge (without changing the html classes) and add a bar of
    // their own.
    const reserve = el => {
      const rect = el && el.getClientRects().length && el.getBoundingClientRect();
      if (rect && rect.height) {
        rect.top + rect.height / 2 < window.innerHeight / 2 ? (top += rect.height) : (bottom += rect.height);
      }
    };
    docClasses.contains('fixed') && reserve(document.querySelector('#header-bar'));
    // 4chan-neXT's mobile bar, and native 4chan's mobile nav (which covered the player's
    // header, leaving no way to drag it out).
    [ 'mobile-bar', 'boardNavMobile' ].forEach(id => {
      const bar = document.getElementById(id);
      bar && getComputedStyle(bar).position === 'fixed' && reserve(bar);
    });
    return { top, bottom };
  },

  /**
	 * Position a fixed item with respect to an element or event.
	 */
  showRelativeTo(item, relative) {
    // Try and put the item aligned to the left under the relative.
    const relRect = relative instanceof Node
      ? relative.getBoundingClientRect()
      : { top: relative.clientY, left: relative.clientX, width: 0, height: 0 };
    item.style.top = relRect.top + relRect.height + 'px';
    item.style.left = relRect.left + 'px';

    // Reposition around the relative if the item is off screen.
    const { width: width, height: height } = item.getBoundingClientRect();
    if (relRect.left + width > document.documentElement.clientWidth) {
      item.style.left = (relRect.left + relRect.width - width) + 'px';
    }
    const { top: headerTop, bottom: headerBottom } = Player.position.getHeaderOffset();
    if (relRect.top + relRect.height + height > document.documentElement.clientHeight - headerBottom) {
      item.style.top = (relRect.top - height) + 'px';
    }
    // Never past the window's edges (on a narrow screen the colour picker opened half
    // off the left side).
    const clamp = (value, min, max) => Math.max(min, Math.min(value, Math.max(min, max)));
    item.style.left = clamp(parseFloat(item.style.left), 0, document.documentElement.clientWidth - width) + 'px';
    item.style.top = clamp(parseFloat(item.style.top), headerTop, document.documentElement.clientHeight - headerBottom - height) + 'px';
  }
};
