`<div class="${ns}-menu dialog ${ns}-dialog" id="menu" tabindex="0" data-type="post" style="position: fixed;">
	${data.sound.post ? `<a class="entry" href="#${_.escAttr(data.postIdPrefix + data.sound.post)}">Show Post</a>` : ''}
	<div class="entry has-submenu" @entry-focus='playlist.loadTags("${_.escAttr(data.sound.id, true)}")' @entry-blur='playlist.abortTags("${_.escAttr(data.sound.id, true)}")'>
		Details
		<div class="dialog submenu tags-dialog" @click.stop="" data-sound-id="${_.escAttr(data.sound.id)}" style="inset: 0px auto auto 100%;">
			${Player.playlist.tagsDialogTemplate(data.sound)}
		</div>
	</div>
	<div class="entry has-submenu">
		Open
		<div class="dialog submenu" style="inset: 0px auto auto 100%;">
			<a class="entry" href="${_.escAttr(data.sound.image)}" target="_blank">Image</a>
			<a class="entry" href="${_.escAttr(data.sound.src)}" target="_blank">Sound</a>
		</div>
	</div>
	<div class="entry has-submenu">
		Download
		<div class="dialog submenu" style="inset: 0px auto auto 100%;">
			<a class="entry" href="#" @click.prevent='tools.download("${_.escAttr(data.sound.image, true)}", "${_.escAttr(data.sound.filename, true)}")'>Image</a>
			<a class="entry" href="#" @click.prevent='tools.download("${_.escAttr(data.sound.src, true)}", "${_.escAttr(data.sound.name, true)}")'>Sound</a>
		</div>
	</div>
	<div class="entry has-submenu">
		Filter
		<div class="dialog submenu" style="inset: 0px auto auto 100%;">
			${data.sound.imageMD5 ? `<a class="entry" href="#" @click.prevent='playlist.addFilter("${_.escAttr(data.sound.imageMD5, true)}")'>Image</a>` : ''}
			<a class="entry" href="#" @click.prevent='playlist.addFilter("${_.escAttr(data.sound._origSrc || data.sound.src, true).replace(/^(https?\:)?\/\//, '')}")'>Sound</a>
		</div>
	</div>
	<a class="entry" href="#" @click.prevent='remove("${_.escAttr(data.sound.id, true)}")'>Remove</a>
</div>`
