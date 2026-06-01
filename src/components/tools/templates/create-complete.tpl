`<span>
	<br>Complete!<br>
	${is4chan ? '<a href="#" @click.prevent="tools.addCreatedToQR">Post</a> - ' : ''}
	<a href="#" @click.prevent="tools.addCreatedToPlayer">Add</a> -
	<a href="${_.escAttr(Player.tools._createdImageURL)}" download="${_.escAttr(Player.tools._createdImage.name)}" title="${_.escAttr(Player.tools._createdImage.name)}">Download</a>
</span>`