`<div class="${ns}-col ${ns}-align-center">
	<select ${data.attrs}>
		${Object.keys(data.setting.options).map(k => `<option value="${_.escAttr(k)}" ${data.value === k ? 'selected' : ''}>
			${_.escHTML(data.setting.options[k])}
		</option>`).join('')}
	</select>
</div>`
