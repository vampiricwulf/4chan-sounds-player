(data.sounds || Player.sounds).map(sound => !Player.playlist.matchesSearch(sound) ? '' : `
	<div
		class="${ns}-list-item ${ns}-row ${sound.playing ? 'playing' : ''} ${sound.error ? `${ns}-dead` : ''} ${ns}-align-center ${ns}-hover-trigger"
		${sound.error ? 'title="This sound failed to load and is skipped during playback. Click to retry."' : ''}
		@click="playlist.handleSelect"
		@dragstart.passive="playlist.handleDragStart"
		@dragenter.prevent="playlist.handleDragEnter"
		@dragend.prevent="playlist.handleDragEnd"
		@dragover.prevent=""
		@drop.prevent=""
		@contextmenu.stop.prevent='playlist.handleItemMenu($event, "${_.escAttr(sound.id, true)}")'
		@mouseenter="playlist.updateHoverImage"
		@mouseleave="playlist.removeHoverImage"
		@mousemove.passive="playlist.positionHoverImage"
		data-id="${_.escAttr(sound.id)}"
		draggable="true"
	>
		${Player.userTemplate.build({
			template: Player.config.rowTemplate,
			location: 'item-' + sound.id,
			sound,
			outerClass: `${ns}-col-auto`
		})}
	</div>`
).join('')
