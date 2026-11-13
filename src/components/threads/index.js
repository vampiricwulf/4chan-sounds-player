const { get } = require('../../api');

const maxSavedBoards = 10;
const boardsURL = 'https://a.4cdn.org/boards.json';
const catalogURL = 'https://a.4cdn.org/%s/catalog.json';

// API subjects and comments are HTML (entities, <br>, quote spans). Parse them in an
// inert DOMParser document, which runs no scripts and loads nothing, to get plain text.
function htmlToText(html) {
  if (!html) {
    return '';
  }
  const text = String(html).replace(/<br\s*\/?>/gi, ' ');
  return new DOMParser().parseFromString(text, 'text/html').body.textContent;
}

module.exports = {
  template: require('./templates/threads.tpl'),
  boardsTemplate: require('./templates/boards.tpl'),
  listsTemplate: require('./templates/list.tpl'),

  boardList: null,
  soundThreads: null,
  displayThreads: {},
  selectedBoards: Board ? [ Board ] : [ 'a' ],
  showAllBoards: false,

  async initialize() {
    Player.threads.hasParser = is4chan && typeof Parser !== 'undefined';
    // If the native Parser hasn't been intialised chuck customSpoiler on it so we can call it for threads.
    // You shouldn't do things like this. We can fall back to the table view if it breaks though.
    if (Player.threads.hasParser && !Parser.customSpoiler) {
      Parser.customSpoiler = {};
    }

    Player.on('show', Player.threads._initialFetch);
    Player.on('view', Player.threads._initialFetch);
    Player.on('rendered', Player.threads.afterRender);
    Player.on('config:threadsViewStyle', Player.threads.render);
    try {
      const savedBoards = await GM.getValue('threads_board_selection');
      savedBoards && (Player.threads.selectedBoards = savedBoards.split(','));
    } catch (err) {
      // Leave it defaulted to the current board.
    }
  },

  /**
	 * Fetch the threads when the threads view is opened for the first time.
	 */
  _initialFetch() {
    if (Player.container && Player.config.viewStyle === 'threads' && Player.threads.boardList === null) {
      Player.threads.fetchBoards(true).catch(err => Player.logError('Failed fetching the boards list.', err));
      Player.off('show', Player.threads._initialFetch);
      Player.off('view', Player.threads._initialFetch);
    }
  },

  render() {
    if (Player.container) {
      _.elementHTML(Player.$(`.${ns}-threads`), Player.threads.template());
      Player.threads.afterRender();
    }
  },

  /**
	 * Render the threads and apply the board styling after the view is rendered.
	 */
  afterRender() {
    const threadList = Player.$(`.${ns}-thread-list`);
    if (threadList) {
      const bodyStyle = document.defaultView.getComputedStyle(document.body);
      threadList.style.background = bodyStyle.backgroundColor;
      threadList.style.backgroundImage = bodyStyle.backgroundImage;
      threadList.style.backgroundRepeat = bodyStyle.backgroundRepeat;
      threadList.style.backgroundPosition = bodyStyle.backgroundPosition;
    }
    Player.threads.renderThreads();
  },

  /**
	 * Render just the threads.
	 */
  renderThreads() {
    if (!Player.threads.hasParser || Player.config.threadsViewStyle === 'table') {
      _.elementHTML(Player.$(`.${ns}-threads-body`), Player.threads.listsTemplate());
    } else {
      try {
        const list = Player.$(`.${ns}-thread-list`);
        list.innerHTML = '';
        for (let board in Player.threads.displayThreads) {
          // Create a board title — board/title come from the official 4chan API
          // (boards.json) but escape for defense in depth. Text-node context so
          // escHTML (no `;`/`\`/quote handling needed).
          const boardConf = Player.threads.boardList.find(boardConf => boardConf.board === board);
          const boardTitle = `/${_.escHTML(boardConf.board)}/ - ${_.escHTML(boardConf.title)}`;
          _.element(`<div class="boardBanner"><div class="boardTitle">${boardTitle}</div></div>`, list);

          // Add each thread for the board
          const threads = Player.threads.displayThreads[board];
          for (let i = 0; i < threads.length; i++) {
            list.appendChild(Parser.buildHTMLFromJSON.call(Parser, threads[i], threads[i].board, true, true));

            // Add a line under each thread
            _.element('<hr style="clear: both">', list);
          }
        }
      } catch (err) {
        Player.logError('Unable to display the threads board view.', err, 'warning');
        // If there was an error fall back to the table view. Previous code called
        // `Player.renderThreads()` which doesn't exist (not exported at root) —
        // crashing the fallback too.
        Player.set('threadsViewStyle', 'table');
        Player.threads.renderThreads();
      }
    }
  },

  /**
	 * Render just the board selection.
	 */
  renderBoards() {
    _.elementHTML(Player.$(`.${ns}-thread-board-list`), Player.threads.boardsTemplate());
  },

  /**
	 * Toggle the threads view.
	 */
  toggle() {
    if (Player.config.viewStyle === 'threads') {
      Player.playlist.restore();
    } else {
      Player.display.setViewStyle('threads');
    }
  },

  /**
	 * Switch between showing just the selected boards and all boards.
	 */
  toggleBoardList() {
    Player.threads.showAllBoards = !Player.threads.showAllBoards;
    Player.$(`.${ns}-all-boards-link`).innerHTML = Player.threads.showAllBoards ? 'Selected Only' : 'Show All';
    Player.threads.renderBoards();
  },

  /**
	 * Select/deselect a board.
	 */
  async toggleBoard(board, selected) {
    if (selected) {
      !Player.threads.selectedBoards.includes(board) && Player.threads.selectedBoards.unshift(board);
    } else {
      Player.threads.selectedBoards = Player.threads.selectedBoards.filter(b => b !== board);
    }
    await GM.setValue('threads_board_selection', Player.threads.selectedBoards.slice(0, maxSavedBoards).join(','));
  },

  /**
	 * Fetch the board list from the 4chan API.
	 */
  async fetchBoards(fetchThreads) {
    Player.threads.loading = true;
    Player.threads.render();
    try {
      const response = await get(boardsURL);
      if (!response || !Array.isArray(response.boards)) {
        throw new Error('The boards list response had no boards.');
      }
      Player.threads.boardList = response.boards;
    } catch (err) {
      // Clear the loading state so the Update link comes back and the user can retry.
      Player.threads.loading = false;
      Player.threads.render();
      throw err;
    }
    if (fetchThreads) {
      Player.threads.fetch();
    } else {
      Player.threads.loading = false;
      Player.threads.render();
    }
  },

  /**
	 * Fetch the catalog for each selected board and search for sounds in OPs.
	 */
  async fetch() {
    // Only the latest fetch shows its results.
    const token = Player.threads._fetching = {};
    Player.threads.loading = true;
    Player.threads.render();
    if (!Player.threads.boardList) {
      try {
        await Player.threads.fetchBoards();
      } catch (err) {
        return Player.logError('Failed fetching the boards list.', err);
      }
      // fetchBoards ends by showing the idle view, but the catalogs are still to come.
      if (Player.threads._fetching !== token) {
        return;
      }
      Player.threads.loading = true;
      Player.threads.render();
    }
    const failedBoards = [];
    const boards = Player.threads.selectedBoards.slice();
    const byBoard = new Array(boards.length);
    const fetchBoard = async (board, i) => {
      const boardConf = Player.threads.boardList.find(boardConf => boardConf.board === board);
      if (!boardConf) {
        return;
      }
      // Catch per board so one failing catalog doesn't discard every other board's threads.
      let pages;
      try {
        pages = await get(catalogURL.replace('%s', board));
      } catch (err) {
        console.error('[4chan sounds player]', err);
        failedBoards.push(board);
        return;
      }
      byBoard[i] = (pages || []).flatMap(({ page, threads }) => threads.map(thread => Object.assign(thread, { board, page, ws_board: boardConf.ws_board })));
    };
    try {
      // A couple of catalogs at a time (4chan's API asks clients not to flood it), kept in
      // the order the boards are selected rather than the order they arrive.
      let next = 0;
      const worker = async () => {
        while (next < boards.length) {
          const i = next++;
          await fetchBoard(boards[i], i);
        }
      };
      await Promise.all([ worker(), worker() ]);
      if (Player.threads._fetching !== token) {
        return;
      }
      const allThreads = byBoard.flat().filter(Boolean);
      failedBoards.length && Player.logError(`Failed fetching the catalog for /${failedBoards.map(_.escHTML).join('/, /')}/.`, null, 'warning');

      Player.threads.soundThreads = allThreads.filter(thread => {
        const { sounds } = Player.posts.getSounds(thread.filename, `https://i.4cdn.org/${thread.board}/${thread.tim}${thread.ext}`, thread.no, `https://i.4cdn.org/${thread.board}/${thread.tim}s${thread.ext}`, thread.md5, true);
        return sounds.length;
      });
      // Plain text for the table view (escaped there) and for the filter, which would
      // otherwise match markup like "span" and miss entity-encoded text like "don't".
      Player.threads.soundThreads.forEach(thread => {
        thread._subText = htmlToText(thread.sub);
        thread._searchText = (thread._subText + ' ' + htmlToText(thread.com)).toLowerCase();
      });
    } catch (err) {
      Player.logError('Failed searching for sounds threads.', err);
    }
    Player.threads.loading = false;
    Player.threads.filter(Player.$(`.${ns}-threads-filter`).value, true);
    Player.threads.render();
  },

  /**
	 * Apply the filter input to the already fetched threads.
	 */
  filter(search, skipRender) {
    search = search.toLowerCase();
    Player.threads.filterValue = search || '';
    if (Player.threads.soundThreads === null) {
      return;
    }
    Player.threads.displayThreads = Player.threads.soundThreads.reduce((threadsByBoard, thread) => {
      // Show every thread when search is empty; otherwise match against sub OR com.
      // Original `search || ...` made any non-empty search match every thread.
      const matches = !search || (thread._searchText || '').includes(search);
      if (matches) {
        threadsByBoard[thread.board] || (threadsByBoard[thread.board] = []);
        threadsByBoard[thread.board].push(thread);
      }
      return threadsByBoard;
    }, {});
    !skipRender && Player.threads.renderThreads();
  }
};
