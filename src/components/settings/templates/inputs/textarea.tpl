`<div class="${ns}-col ${!data.setting.inlineTextarea ? `${ns}-row` : ''} ${ns}-align-center">
	<textarea ${data.attrs}>${_.escHTML(data.value)}</textarea>
</div>`
