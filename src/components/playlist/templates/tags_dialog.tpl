{
	if (!data.tags) {
		return '<div class="entry">Loading</div>';
	}
	const tagsArr = Object.entries(data.tags).filter(([ name ]) => name);
	if (!tagsArr.length) {
		return '<div class="entry">No data</div>';
	}
	// Escape both the tag name and value: ID3 tags come from arbitrary hosted audio
	// files and a malicious TIT2/COMM value would otherwise execute as HTML.
	return tagsArr.map(([ name, value ]) => `<div class="entry">
		<span class="tag-name">
			${_.escHTML(name[0].toUpperCase() + name.slice(1))}:
		</span>
		${_.escHTML(value)}
	</div>`).join('');
}
