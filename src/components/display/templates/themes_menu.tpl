`<div class="${ns}-menu ${ns}-dialog dialog" id="menu" tabindex="0" data-type="post" style="position: fixed;">
	${[ 'Default' ].concat(Player.config.savedThemesOrder).map(name => `
		<a class="${ns}-row nowrap ${ns}-align-center entry" href="#" @click.prevent='theme.switch("${_.escAttr(name, true)}");playlist.restore'>
			<span ${Player.config.selectedTheme === name ? 'style="font-weight: 700;"' : ''}>${_.escHTML(name)}</span>
		</a>
	`).join('')}
</div>`
