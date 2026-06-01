`<select class="${ns}-create-sound-host">
	${Object.keys(Player.config.uploadHosts).map((hostId) =>
		Player.config.uploadHosts[hostId] && !Player.config.uploadHosts[hostId].invalid
			? `<option value="${_.escAttr(hostId)}" ${Player.config.defaultUploadHost === hostId ? 'selected' : ''}>${_.escHTML(hostId)}</option>`
			: ''
	).join('')}
</select>`
