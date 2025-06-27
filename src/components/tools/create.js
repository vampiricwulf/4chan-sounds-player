// Seems to be the cut off point for file names
const maxFilenameLength = 218;

const completeTemplate = require('./templates/create-complete.tpl');
const hostsTemplate = require('./templates/hosts-select.tpl');

/**
 * This component is mixed into tools so these function are under `Player.tools`.
 */
const createTool = module.exports = {
	_uploadIdx: 0,
	createTemplate: require('./templates/create.tpl'),
	createHostsTemplate: hostsTemplate,
	createCompleteTemplate: completeTemplate,

	/**
	 * Update the view when the hosts are updated.
	 */
	initialize() {
		Player.on('config:uploadHosts', () => Player.$(`.${ns}-create-hosts-container`).innerHTML = hostsTemplate());
		Player.on('config:defaultUploadHost', newValue => Player.$(`.${ns}-create-sound-host`).value = newValue);
		Player.on('rendered', createTool.afterRender);
	},

	/**
	 * Store references to various elements.
	 */
	afterRender() {
		createTool.status = Player.$(`.${ns}-create-sound-status`);
		Player.tools.imgInput = Player.$(`.${ns}-create-sound-img`);
		Player.tools.sndInput = Player.$(`.${ns}-create-sound-snd`);
	},

	/**
	 * Show/hide the "Use webm" checkbox when an image is selected.
	 */
	async handleImageSelect(e) {
		const input = e && e.currentTarget || Player.tools.imgInput;
		const image = input.files[0];
		let placeholder = image.name.replace(/\.[^/.]+$/, '');

		if (await Player.tools.hasAudio(image)) {
			Player.logError('Audio not allowed for the image video.', null, 'warning');
		}

		// Show the image name as the placeholder for the name input since it's the default
		Player.$(`.${ns}-create-sound-name`).setAttribute('placeholder', placeholder);
	},

	/**
	 * Update the custom file input display when the input changes
	 */
	handleFileSelect(input, files) {
		const container = input.closest(`.${ns}-file-input`);
		const fileText = container.querySelector('.text');
		const fileList = container.querySelector(`.${ns}-file-list`);
		files || (files = [...input.files]);
		container.classList[files.length ? 'remove' : 'add']('placeholder');
		fileText.innerHTML = files.length > 1
			? files.length + ' files'
			: files[0] && files[0].name || '';
		fileList && (_.elementHTML(fileList, files.length < 2 ? '' : files.map((file, i) =>
			`<div class="${ns}-row">
				<div class="${ns}-col ${ns}-truncate-text">${file.name}</div>
				<a class="${ns}-col-auto" @click.prevent="tools.handleFileRemove" href="#" data-idx="${i}">${Icons.close}</a>
			</div>`
		).join('')));
	},

	/**
	 * Handle a file being removed from a multi input
	 */
	handleFileRemove(e) {
		const idx = +e.currentTarget.getAttribute('data-idx');
		const input = e.currentTarget.closest(`.${ns}-file-input`).querySelector('input[type="file"]');
		const dataTransfer = new DataTransfer();
		for (let i = 0; i < input.files.length; i++) {
			i !== idx && dataTransfer.items.add(input.files[i]);
		}
		input.files = dataTransfer.files;
		Player.tools.handleFileSelect(input);
	},

	/**
	 * Show/hide the sound input when "Use webm" is changed.
	 */
	handleWebmSoundChange(e) {
		const sound = Player.tools.sndInput;
		const image = Player.tools.imgInput;
		Player.tools.handleFileSelect(sound, e.currentTarget.checked && [image.files[0]]);
	},

	toggleSoundInput(type) {
		const showURL = type === 'url';
		Player.$(`.${ns}-create-sound-snd-url`).closest(`.${ns}-row`).style.display = showURL ? null : 'none';
		Player.$(`.${ns}-create-sound-snd`).closest(`.${ns}-file-input`).style.display = showURL ? 'none' : null;
		Player.tools.useSoundURL = showURL;
	},

	/**
	 * Handle files being dropped on the create sound section.
	 */
	handleCreateSoundDrop(e) {
		const targetInput = e.target.nodeName === 'INPUT' && e.target.getAttribute('type') === 'file' && e.target;
		[...e.dataTransfer.files].forEach(file => {
			const isVideo = file.type.startsWith('video');
			const isImage = file.type.startsWith('image') || file.type === 'video/webm' || file.type === 'video/mp4';
			const isSound = file.type.startsWith('audio');
			if (isVideo || isImage || isSound) {
				const input = (file.type === 'video/webm' || file.type === 'video/mp4') && targetInput
					? targetInput
					: isImage
						? Player.tools.imgInput
						: Player.tools.sndInput;
				const dataTransfer = new DataTransfer();
				if (input.multiple) {
					[...input.files].forEach(file => dataTransfer.items.add(file));
				}
				dataTransfer.items.add(file);
				input.files = dataTransfer.files;
				Player.tools.handleFileSelect(input);
				input === Player.tools.imgInput && Player.tools.handleImageSelect();
				// Make sure sound file input is shown if a sound file is dropped
				if (input === Player.tools.sndInput && Player.tools.useSoundURL) {
					Player.tools.toggleSoundInput('file');
				}
			}
		});
		return false;
	},

	/**
	 * Handle the create button.
	 * Extracts video/audio if required, uploads the sound, and creates an image file names with [sound=url].
	 */
	async handleCreate() {
		// Revoke the URL for an existing created image.
		Player.tools._createdImageURL && URL.revokeObjectURL(Player.tools._createdImageURL);
		Player.tools._createdImage = null;

		createTool.status.style.display = 'block';
		createTool.status.innerHTML = 'Creating sound image';

		Player.$(`.${ns}-create-button`).disabled = true;

		// Gather the input values.
		const host = Player.config.uploadHosts[Player.$(`.${ns}-create-sound-host`).value];
		const useSoundURL = Player.tools.useSoundURL;
		let image = Player.tools.imgInput.files[0];
		let soundURLs = useSoundURL && Player.$(`.${ns}-create-sound-snd-url`).value.split(',').map(v => v.trim()).filter(v => v);
		let sounds = !(Player.$(`.${ns}-use-video`) || {}).checked || !image || !image.type.startsWith('video')
			? [...Player.tools.sndInput.files]
			: image && [image];
		const customName = Player.$(`.${ns}-create-sound-name`).value;
		// Only split a given name if there's multiple sounds.
		const names = customName
			? ((soundURLs || sounds).length > 1 ? customName.split(',') : [customName]).map(v => v.trim())
			: image && [image.name.replace(/\.[^/.]+$/, '')];

		try {
			if (!image) {
				throw new PlayerError('Select an image or video.', 'warning');
			}

			// No audio allowed for the "image" webm.
			if (image.type.startsWith('video') && await Player.tools.hasAudio(image)) {
				createTool.status.innerHTML += '<br>Audio not allowed for the image video.'
					+ '<br>Remove the audio from the video and try again.';
				throw new PlayerError('Audio not allowed for the image video.', 'warning');
			}

			const soundlessLength = names.join('').length + (soundURLs || sounds).length * 8;
			if (useSoundURL) {
				try {
					// Make sure each url is valid and strip the protocol.
					soundURLs = soundURLs.map(url => new URL(url) && url.replace(/^(https?:)?\/\//, ''));
				} catch (err) {
					throw new PlayerError('The provided sound URL is invalid.', 'warning');
				}
				if (maxFilenameLength < soundlessLength + soundURLs.join('').length) {
					throw new PlayerError('The generated image filename is too long.', 'warning');
				}
			} else {
				if (!sounds || !sounds.length) {
					throw new PlayerError('Select a sound.', 'warning');
				}

				// Check the final filename length if the URL length is known for the host.
				// Limit to 8 otherwise. zz.ht is as small as you're likely to get and that can only fit 8.
				const tooManySounds = host.filenameLength
					? maxFilenameLength < soundlessLength + (host.filenameLength) * sounds.length
					: sounds.length > 8;
				if (tooManySounds) {
					throw new PlayerError('The generated image filename is too long.', 'warning');
				}

				// Check videos have audio.
				sounds = await Promise.all(sounds.map(async sound => {
					if (sound.type.startsWith('video')) {
						if (!await Player.tools.hasAudio(sound)) {
							throw new PlayerError(`The selected video has no audio. (${sound.name})`, 'warning');
						}
					}
					return sound;
				}));

				// Upload the sounds.
				try {
					soundURLs = await Promise.all(sounds.map(async sound => Player.tools.postFile(sound, host)));
				} catch (err) {
					throw new PlayerError('Upload failed.', 'error', err);
				}
			}

			if (!soundURLs.length) {
				throw new PlayerError('No sounds selected.', 'warning');
			}

			// Create a new file that includes [sound=url] in the name.
			let filename = '';
			for (let i = 0; i < soundURLs.length; i++) {
				filename += (names[i] || '') + '[sound=' + encodeURIComponent(soundURLs[i].replace(/^(https?:)?\/\//, '')) + ']';
			}
			const ext = image.name.match(/\.([^/.]+)$/)[1];

			// Keep track of the create image and a url to it.
			Player.tools._createdImage = new File([image], filename + '.' + ext, { type: image.type });
			Player.tools._createdImageURL = URL.createObjectURL(Player.tools._createdImage);

			// Complete! with some action links
			_.element(completeTemplate(), createTool.status);
		} catch (err) {
			createTool.status.innerHTML += '<br>Failed! ' + (err instanceof PlayerError ? err.reason : '');
			Player.logError('Failed to create sound image', err);
		}
		Player.$(`.${ns}-create-button`).disabled = false;
	},

	hasAudio(file) {
		if (!file.type.startsWith('audio') && !file.type.startsWith('video')) {
			return false;
		}
		return new Promise((resolve, reject) => {
			const url = URL.createObjectURL(file);
			const video = document.createElement('video');
			video.addEventListener('loadeddata', () => {
				URL.revokeObjectURL(url);
				resolve(video.mozHasAudio || !!video.webkitAudioDecodedByteCount);
			});
			video.addEventListener('error', reject);
			video.src = url;
		});
	},

	/**
	 * Upload the sound file and return a link to it.
	 */
	async postFile(file, host) {
		const idx = Player.tools._uploadIdx++;

		if (!host || host.invalid) {
			throw new PlayerError('Invalid upload host.', 'error');
		}

		const formData = new FormData();
		Object.keys(host.data).forEach(key => {
			if (host.data[key] !== null) {
				formData.append(key, host.data[key] === '$file' ? file : host.data[key]);
			}
		});

		createTool.status.innerHTML += `<br><span class="${ns}-upload-status-${idx}">Uploading ${file.name}</span>`;

		return new Promise((resolve, reject) => {
			GM.xmlHttpRequest({
				method: 'POST',
				url: host.url,
				data: formData,
				responseType: host.responsePath ? 'json' : 'text',
				headers: host.headers,
				onload: async response => {
					if (response.status < 200 || response.status >= 300) {
						return reject(response);
					}
					const responseVal = host.responsePath
						? _.get(response.response, host.responsePath)
						: host.responseMatch
							? (response.responseText.match(new RegExp(host.responseMatch)) || [])[1]
							: response.responseText;
					const uploadedUrl = (host.soundUrl ? host.soundUrl.replace('%s', responseVal) : responseVal).trim();
					Player.$(`.${ns}-upload-status-${idx}`).innerHTML = `Uploaded ${file.name} to <a href="${uploadedUrl}" target="_blank">${uploadedUrl}</a>`;
					resolve(uploadedUrl);
				},
				upload: {
					onprogress: response => {
						const total = response.total > 0 ? response.total : file.size;
						Player.$(`.${ns}-upload-status-${idx}`).innerHTML = `Uploading ${file.name} - ${Math.floor(response.loaded / total * 100)}%`;
					}
				},
				onerror: reject
			});
		});
	},

	/**
	 * Add the created sound image to the player.
	 */
	addCreatedToPlayer() {
		Player.playlist.addFromFiles([Player.tools._createdImage]);
	},

	/**
	 * Open the QR window and add the created sound image to it.
	 */
	addCreatedToQR() {
		if (!is4chan) {
			return;
		}
		// Open the quick reply window.
		const qrLink = document.querySelector(isChanX ? '.qr-link' : '.open-qr-link');

		const dataTransfer = new DataTransfer();
		dataTransfer.items.add(Player.tools._createdImage);

		// 4chan X, drop the file on the qr window.
		if (isChanX && qrLink) {
			qrLink.click();
			const event = new CustomEvent('drop', { view: window, bubbles: true, cancelable: true });
			event.dataTransfer = dataTransfer;
			document.querySelector('#qr').dispatchEvent(event);

			// Native, set the file input value. Check for a quick reply
		} else if (qrLink) {
			qrLink.click();
			document.querySelector('#qrFile').files = dataTransfer.files;
		} else {
			document.querySelector('#togglePostFormLink a').click();
			document.querySelector('#postFile').files = dataTransfer.files;
			document.querySelector('.postForm').scrollIntoView();
		}
	}
};
