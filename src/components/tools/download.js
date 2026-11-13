const progressBarsTemplate = require('./templates/download-progress.tpl');
const videoUtil = require('./video-util');

// File types that run or render as code when opened.
const RISKY_EXTENSIONS = /\.(exe|com|bat|cmd|scr|pif|cpl|msi|msp|hta|html?|xhtml|mht|svg|js|jse|vbs|vbe|wsf|wsh|ps1|psm1|lnk|url|reg|jar|sh|app|dmg|pkg|deb|rpm|apk)$/i;

// A file name that can't be saved as something that runs: posts choose both the name and
// the link, so either can carry the extension. Windows drops trailing dots and spaces
// ("invoice.exe." saves as invoice.exe), so those go first; a risky extension gets .bin.
function safeFileName(name) {
  name = String(name || '').replace(/[. ]+$/, '') || 'download';
  return RISKY_EXTENSIONS.test(name) ? `${name}.bin` : name;
}

const get = (src, opts) => {
  let xhr;
  // Wrap so aborting rejects.
  let p = new Promise((resolve, reject) => {
    xhr = GM.xmlHttpRequest({
      method: 'GET',
      url: src,
      responseType: 'blob',
      // Reject HTTP errors so an error page isn't saved (or zipped) as the file.
      onload: response => response.status >= 400 ? reject(response) : resolve(response.response),
      onerror: response => reject(response),
      onabort: response => {
        response.aborted = true;
        reject(response);
      },
      ...(opts || {})
    });
  });
  if (opts && opts.catch) {
    p = p.catch(opts.catch);
  }
  // Wrap rather than assign the bare reference: invoked as `dl.abort()`, an unbound
  // xhr.abort would run with `this` = the promise, breaking managers whose abort uses `this`.
  p.abort = () => xhr.abort();
  return p;
};

/**
 * This component is mixed into tools so these function are under `Player.tools`.
 */
const downloadTool = module.exports = {
  downloadTemplate: require('./templates/download.tpl'),
  _downloading: null,

  /**
	 * Update the view when the hosts are updated.
	 */
  initialize() {
    Player.on('rendered', downloadTool.afterRender);
  },

  /**
	 * Store references to various elements.
	 */
  afterRender() {
    downloadTool.resetDownloadButtons();
  },

  async _handleDownloadCancel() {
    if (Player.tools._downloading) {
      Player.tools._downloadAllCanceled = true;
      Player.tools._downloading.forEach(dls => dls.forEach(dl => dl && dl.abort()));
    }
  },

  async _handleDownload(e) {
    Player.tools._downloadAllCanceled = false;
    e.currentTarget.style.display = 'none';
    Player.$(`.${ns}-download-all-cancel`).style.display = null;

    const combineVideo = Player.$('.download-all-video').checked;

    await Player.tools.downloadThread({
      includeImages: Player.$('.download-all-images').checked,
      includeSounds: Player.$('.download-all-audio').checked,
      ignoreDownloaded: Player.$('.download-all-ignore-downloaded').checked,
      maxSounds: +Player.$('.download-all-max-sounds').value || 0,
      // One ffmpeg instance muxes serially, so force single concurrency when combining.
      // Number inputs accept fractions despite step=1; both values must be integers
      // (new Array(1.5) throws, and the zip compressor has no level 1.5).
      concurrency: combineVideo ? 1 : Math.max(1, Math.floor(+Player.$('.download-all-concurrency').value) || 1),
      compression: Math.max(0, Math.min(Math.round(+Player.$('.download-all-compression').value) || 0, 9)),
      combineVideo,
      status: Player.$(`.${ns}-download-all-status`)
    }).catch(() => { /* it's logged */ });

    Player.tools.resetDownloadButtons();
  },

  resetDownloadButtons() {
    Player.$(`.${ns}-download-all-start`).style.display = Player.tools._downloading ? 'none' : null;
    Player.$(`.${ns}-download-all-cancel`).style.display = Player.tools._downloading ? null : 'none';
    Player.$(`.${ns}-download-all-save`).style.display = Player.tools.threadDownloadBlob ? null : 'none';
    Player.$(`.${ns}-download-all-clear`).style.display = Player.tools.threadDownloadBlob ? null : 'none';
    Player.$(`.${ns}-ignore-downloaded`).style.display = Player.sounds.some(s => s.downloaded) ? null : 'none';
  },

  /**
	 * Trigger a download for a file using GM.xmlHttpRequest to avoid cors issues.
	 *
	 * @param {String} src URL of the field to download.
	 * @param {String} name Name to save the file as.
	 */
  async download(src, name) {
    try {
      // The name comes from the post, but keep the extension of what's actually being
      // saved: "setup.exe[sound=...].png" would otherwise save the sound as setup.exe.
      // Sources without one (local blob: files) keep the name unless it's an executable or
      // script type.
      const urlExt = (String(src).split(/[?#]/)[0].match(/\.([a-z0-9]{1,5})$/i) || [])[1];
      name = String(name || 'download');
      const base = name.replace(/\.[a-z0-9]{1,5}$/i, '') || 'download';
      name = safeFileName(urlExt ? `${base}.${urlExt}` : name);
      const blob = await get(src);
      const a = _.element(`<a href="${URL.createObjectURL(blob)}" download="${_.escAttr(name)}" rel="noopener" target="_blank"></a>`);
      a.click();
      URL.revokeObjectURL(a.href);
    } catch (err) {
      Player.logError('There was an error downloading.', err, 'warning');
    }
  },

  /**
	 * Download the images and/or sounds in the thread as zip file.
	 *
	 * @param {Boolean} includeImages Whether images should be included in the download.
	 * @param {Boolean} includeSounds Whether audio files should be included in the download.
	 * @param {Boolean} ignoreDownloaded Whether sounds previously downloaded should be omitted from the download.
	 * @param {Boolean} maxSounds The maximum number of sounds to download.
	 * @param {Boolean} concurrency How many sounds can be download at the same time.
	 * @param {Boolean} compression Compression level.
	 * @param {Element} [status] Element in which to display the ongoing status of the download.
	 */
  async downloadThread({ includeImages, includeSounds, ignoreDownloaded, maxSounds, concurrency, compression, combineVideo, status }) {
    const zip = new JSZip();

    !(maxSounds > 0) && (maxSounds = Infinity);
    // What was already downloaded is tracked per kind, so skipping only skips sounds that
    // already have everything this run asks for (combining to mp4, then downloading the
    // images and audio, used to find "nothing to download").
    const wanted = combineVideo ? [ 'video' ] : [ includeImages && 'image', includeSounds && 'sound' ].filter(Boolean);
    const alreadyDone = s => s.downloaded && wanted.every(kind => s.downloaded[kind]);
    const toDownload = Player.sounds.filter(s => s.post && (!ignoreDownloaded || !alreadyDone(s))).slice(0, maxSounds);
    const count = toDownload.length;

    status && (status.style.display = 'block');

    if (!count || (!includeImages && !includeSounds && !combineVideo)) {
      return status && (status.innerHTML = 'Nothing to download.');
    }

    // Fail fast (before downloading anything) if this site's CSP blocks the encoder.
    if (combineVideo) {
      try {
        Player.tools._assertEncoderAvailable();
      } catch (err) {
        return status && (status.innerHTML = _.escHTML(err.reason || 'Combined video download is not available on this site.'));
      }
    }

    Player.tools._downloading = [];
    status && (status.innerHTML = `Downloading ${count} sound images.<br><br>
			This may take a while. You can leave it running in the background, but if you background the tab your browser will slow it down.
			You'll be prompted to download the zip file once complete.<br><br>`);
    // Skip/failure messages go here. They used to be inserted before the first worker's
    // progress element, which is removed when that worker runs out of sounds, so later
    // messages from the other workers were lost.
    const messages = status && _.element('<div></div>', status);

    const elementsArr = new Array(concurrency).fill(0).map(() => {
      // Show currently downloading files with progress bars.
      const el = status && _.element(progressBarsTemplate({ includeSounds: includeSounds || combineVideo, includeImages: includeImages && !combineVideo }), status);
      const dlRef = [];
      Player.tools._downloading.push(dlRef);
      const data = {
        dlRef,
        el,
        status: el && el.querySelector(`.${ns}-current-status`),
        image: el && el.querySelector(`.${ns}-image-bar`),
        sound: el && el.querySelector(`.${ns}-sound-bar`)
      };
      // Allow each download to be canceled individually. In case there's a huge download you don't want to include.
      // skipped also stops a combine job, which has no request here to abort.
      el && (el.querySelector(`.${ns}-cancel-download`).onclick = () => {
        data.skipped = true;
        dlRef.forEach(dl => dl && dl.abort());
      });
      return data;
    });

    // Two entries with the same path silently overwrite each other (two sounds in a post
    // with the same title, or names differing only in characters stripped from file
    // names), so number repeats. Case-insensitive, as most file systems are.
    const usedNames = new Set();
    const addFile = (name, content) => {
      name = safeFileName(name);
      let unique = name;
      for (let n = 2; usedNames.has(unique.toLowerCase()); n++) {
        unique = name.replace(/(\.[^./]*)?$/, ext => ` (${n})${ext}`);
      }
      usedNames.add(unique.toLowerCase());
      zip.file(unique, content);
    };
    const markDownloaded = (sound, ...kinds) => {
      sound.downloaded = { ...(sound.downloaded || {}) };
      kinds.forEach(kind => sound.downloaded[kind] = true);
    };

    let running = 0;

    // Download arg builder. Update progress bars, and catch errors to log and continue.
    const getArgs = (data, sound, type) => ({
      responseType: 'arraybuffer',
      onprogress: data[type] && (rsp => data[type].style.width = ((rsp.loaded / rsp.total) * 100) + '%'),
      catch: err => {
        if (err.aborted) {
          return 'aborted';
        }
        if (!err.aborted && !Player.tools._downloadAllCanceled) {
          console.error('[4chan sounds player] Download failed', err);
          // Escape title — it's parsed from arbitrary post filenames. Text-node
          // context, so escHTML (no `;`/`\`/quote handling needed).
          status && _.element(`<p>Failed to download ${_.escHTML(sound.title)} ${type}!</p>`, messages);
        }
      }
    });

    await Promise.all(elementsArr.map(async function downloadNext(data) {
      const sound = toDownload.shift();
      // Fall out if all downlads were canceled.
      if (!sound || Player.tools._downloadAllCanceled) {
        data.el && status.removeChild(data.el);
        return;
      }
      const i = ++running;
      data.skipped = false;
      // Show the name and reset the progress bars.
      if (data.el) {
        data.status.textContent = `${i} / ${count}: ${sound.title}`;
        data.image.style.width = data.sound.style.width = '0';
      }

      // Snapshot the src once so the GET and the zip entry key agree even if the
      // user toggles the rerouter mid-download.
      const soundSrc = sound.src;
      // Folder per post whenever images are downloaded: sound.filename is NOT unique
      // across posts, so a flat layout would silently overwrite same-named images from
      // different posts (data loss). Sounds keep a unique encoded-src key, so a
      // sounds-only download stays flat.
      // A standalone video is its own sound: fetch it once, as the image, and never
      // re-encode it when combining (it was fetched twice, and re-encoded at a loss).
      const standalone = sound.standaloneVideo;
      const prefix = (includeImages || standalone) && sound.post ? sound.post + '/' : '';
      // Download image and sound as selected.
      const [ imageRsp, soundRsp ] = await Promise.all([
        data.dlRef[0] = (combineVideo ? standalone : includeImages || (standalone && includeSounds)) && get(sound.image, getArgs(data, sound, 'image')),
        data.dlRef[1] = !combineVideo && includeSounds && !standalone && get(soundSrc, getArgs(data, sound, 'sound'))
      ]);

      // No post-handling if the whole download was canceled.
      if (!Player.tools._downloadAllCanceled) {
        if (imageRsp === 'aborted' || soundRsp === 'aborted' || data.skipped) {
          // Show which sounds were individually aborted.
          status && _.element(`<p>Skipped ${_.escHTML(sound.title)}.</p>`, messages);
        } else if (combineVideo && standalone) {
          imageRsp && addFile(`${prefix}${sound.filename}`, imageRsp);
          imageRsp && markDownloaded(sound, 'video', 'image', 'sound');
        } else if (combineVideo) {
          // Mux this sound's visual + audio into a single looping mp4.
          try {
            const blob = await Player.tools.mux(sound, {
              onProgress: data.sound && (p => data.sound.style.width = (p * 100) + '%'),
              isCanceled: () => Player.tools._downloadAllCanceled || data.skipped
            });
            // Always folder combined videos per-post: muxFileName (from the title) is
            // NOT unique across posts, so a flat layout would silently overwrite
            // same-named mp4s from different posts.
            const vidPrefix = sound.post ? sound.post + '/' : '';
            addFile(`${vidPrefix}${videoUtil.muxFileName(sound.title, sound.filename)}`, blob);
            markDownloaded(sound, 'video');
          } catch (err) {
            if (err.canceled) {
              !Player.tools._downloadAllCanceled && status && _.element(`<p>Skipped ${_.escHTML(sound.title)}.</p>`, messages);
            } else if (!Player.tools._downloadAllCanceled) {
              console.error('[4chan sounds player] Mux failed', err);
              status && _.element(`<p>Failed to combine ${_.escHTML(sound.title)}!</p>`, messages);
              // A failed job can dirty the wasm heap; reset for the next sound.
              Player.tools.terminate();
            }
          }
        } else {
          // Add the downloaded files to the zip, and record what arrived (the getArgs
          // catch resolves failures to undefined) so "skip downloaded" retries the rest.
          // Every sound of a multi-sound post brings the same post image: add it once.
          imageRsp && !usedNames.has(safeFileName(`${prefix}${sound.filename}`).toLowerCase()) && addFile(`${prefix}${sound.filename}`, imageRsp);
          soundRsp && addFile(`${prefix}${encodeURIComponent(soundSrc)}`, soundRsp);
          imageRsp && markDownloaded(sound, ...(standalone ? [ 'image', 'sound' ] : [ 'image' ]));
          soundRsp && markDownloaded(sound, 'sound');
        }
      }
      // Move on to the next sound.
      await downloadNext(data);
    }));

    // Free the encoder's memory now the batch is done; the next use re-creates it from the
    // cached core without downloading it again.
    combineVideo && Player.tools.terminate();
    // Show where we canceled at, if we did cancel.
    Player.tools._downloadAllCanceled && _.element(`<span>Canceled at ${running} / ${count}.`, status);
    // Nothing arrived (canceled straight away, or everything failed): don't offer an empty zip.
    if (!usedNames.size) {
      status && _.element('<div>Nothing was downloaded.</div>', status);
      Player.tools._downloading = null;
      Player.tools.resetDownloadButtons();
      return;
    }
    // Generate the zip file.
    const zipProgress = status && _.element('<div>Generating zip file...</div>', status);
    try {
      const zipOptions = {
        type: 'blob',
        compression: compression ? 'DEFLATE' : 'STORE',
        compressionOptions: {
          level: compression
        }
      };
      Player.tools.threadDownloadBlob = await zip.generateAsync(zipOptions, metadata => {
        status && (zipProgress.textContent = `Generating zip file (${metadata.percent.toFixed(2)}%)...`);
      });

      // Update the display and prompt to download.
      status && _.element('<span>Complete!', status);
      Player.tools.saveThreadDownload();
    } catch (err) {
      console.error('[4chan sounds player] Failed to generate zip', err);
      status && (zipProgress.textContent = 'Failed to generate zip file!');
    }
    Player.tools._downloading = null;
    Player.tools.resetDownloadButtons();
  },

  saveThreadDownload() {
    const threadNum = Thread || '-';
    const a = _.element(`<a href="${URL.createObjectURL(Player.tools.threadDownloadBlob)}" download="sounds-thread-${Board}-${threadNum}" rel="noopener" target="_blank"></a>`);
    a.click();
    URL.revokeObjectURL(a.href);
  },

  clearDownloadBlob() {
    delete Player.tools.threadDownloadBlob;
    Player.tools.resetDownloadButtons();
  }
};
