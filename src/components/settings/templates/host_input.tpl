Object.entries(Player.config.uploadHosts).map(([ name, host ]) => `
	<div class="${ns}-row ${ns}-col ${ns}-host-input ${host.invalid ? 'invalid' : ''}" data-host-name="${_.escAttr(name)}">
		<div class="${ns}-row ${ns}-host-controls">
			<div class="${ns}-col-auto">
				<label>
					<input
						type="checkbox"
						data-property="defaultUploadHost"
						${Player.config.defaultUploadHost === name ? 'checked': ''}
					/>
					Default
				</label>
			</div>
			<div class="${ns}-col-auto">
				<a href="#" class="${ns}-heading-action" @click.prevent="settings.hosts.remove">
					Remove
				</a>
			</div>
		</div>
		<div class="${ns}-row">
			${Object.entries(Player.settings.hosts.fields).map(([ field, title ]) => `
				<div class="${ns}-col">
					<input
						type="text"
						data-property="uploadHosts"
						name="${_.escAttr(field)}"
						value="${_.escAttr((field === 'name' ? name : host[field]) || '')}"
						placeholder="${_.escAttr(title)}"
					/>
				</div>
			`).join('')}
		</div>
		<div class="${ns}-row">
			<div class="${ns}-col">
				<textarea data-property="uploadHosts" name="data" placeholder="Data (JSON)">${
					_.escHTML(JSON.stringify(host.data, null, 4))
				}</textarea>
			</div>
		</div>
		<div class="${ns}-row">
			<div class="${ns}-col">
				<textarea data-property="uploadHosts" name="headers" placeholder="Headers (JSON)">${
					_.escHTML(host.headers ? JSON.stringify(host.headers, null, 4) : '')
				}</textarea>
			</div>
		</div>
	</div>
`).join('')
