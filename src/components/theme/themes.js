module.exports = {
	'Fixed Playlist': {
		chanXControls: 'always',
		headerTemplate: '<div class="playlist-resizer fcsp-expander" data-direction="w" data-bypass-save="true" data-bypass-position="true" data-allow-offscreen="true"></div>\nrepeat-button shuffle-button hover-images-button playlist-button\nsound-title-marquee\nview-menu-button add-button reload-button close-button',
		rowTemplate: 'sound-title\np:{<img class="fcsp-row-image" src="sound-imageOrThumb">}\n<img class="fcsp-row-thumb" src="sound-thumb">',
		customCSS: '/* Fix the player to the right at full height (minus the 4chan X header) */\n#fcsp-container[data-view-style="playlist"] {\n\t/* Fixed width *\\/\n\twidth: 25rem !important;/**/\n\theight: auto !important;\n\ttop: 0px !important;\n\tright: 0px !important;\n\tbottom: 24px !important;\n\tleft: auto !important;\n\theight: auto !important;\n\tmax-height: calc(100% - 24px);\n\tbackground: none !important;\n\tborder: none !important;\n}\n\n/* Hide things when the playlist is open */\n/* Hide the image with the playlist open, unless it\'s a webm.\n * To show gifs as well change playing-video to playing-animated. */\n#fcsp-container[data-view-style="playlist"]:not(.playing-video) .fcsp-image-link,/**/ \n#fcsp-container[data-view-style="playlist"] .fcsp-controls,\n#fcsp-container[data-view-style="playlist"] .fcsp-hover-image,\n#fcsp-container[data-view-style="playlist"] .fcsp-footer,\n#fcsp-container[data-view-style="fullscreen"] .fcsp-row-thumb,\n#fcsp-container[data-view-style="fullscreen"] .fcsp-row-image {\n\tdisplay: none !important;\n}\n/* Header is shown with adjustments to handle the changed container style */\n/* Opacity and absolute position are used to auto hide the header */\n#fcsp-container[data-view-style="playlist"] .fcsp-header {\n\tposition: absolute !important;\n\topacity: 0;\n\tz-index: 9;\n\tcursor: inherit;\n\tbackground: $config[colors.background];\n\tborder-width: 0 1px 1px 0;\n\ttransition: all .3s ease;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-header:hover {\n\topacity: 1;\n}\n\n/* Don\'t show a scrollbar for the playlist for aesthetic reasons */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-container {\n\tscrollbar-width: none;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-list-container::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n/* Chunky playlist items, with no background and a squared thumbnail image. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item {\n\tbackground: none !important;\n\theight: auto !important;\n\ttext-align: right;\n\talign-items: center;\n\ttransition: all .5s ease;\n\tfont-size: 1rem;\n\tcolor: $config[colors.text];\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-row-thumb, #fcsp-container[data-view-style="playlist"] .fcsp-row-image {\n\theight: 3rem;\n\twidth: 3rem;\n\tobject-fit: cover;\n\ttransition: all .5s ease;\n}\n/* Show a gradient background and increase the size of list items when you hover over them. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item:hover {\n\tline-height: calc(1.5rem + 4px);\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n\tbackground-image: radial-gradient(circle at -50%, #0000 70%, $config[colors.odd_row]) !important;\n\tcolor: $config[colors.background];\n\t-webkit-text-stroke: 1px black;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item:hover .fcsp-row-thumb {\n\theight: 4rem;\n\twidth: 4rem;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-row-image {\n\theight: 7rem;\n\twidth: 7rem;\n}\n/* Add a gradient background to the playing item, make the text bigger, and style the text. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item.playing {\n\tbackground-image: radial-gradient(circle at -50%, #0000 70%, $config[colors.playing]) !important;\n\tpadding-left: 2px;\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tcolor: $config[colors.page_background];\n\t-webkit-text-stroke: 1px black;\n\ttext-shadow: 0 0 2px $config[colors.border];\n}\n/* Swap the thumb image with the full image for the playing item. */\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item:not(.playing) .fcsp-row-image {\n\tdisplay: none;\n}\n#fcsp-container[data-view-style="playlist"] .fcsp-list-item.playing .fcsp-row-thumb {\n\tdisplay: none;\n}\n/* Same gradient background style for dragging items. */\n#fcsp-container[data-view-style="playlist"] .fcsp-dragging {\n\tbackground-image: radial-gradient(circle at -50%, #0000 70%, $config[colors.dragging]) !important\n}\n\n/* Add a resizer to the left of the header when the playlist is open. */\n.playlist-resizer {\n\topacity: 1 !important;\n\tmargin: 0 !important;\n\twidth: .25rem !important;\n\theight: auto !important;\n\tbackground-color: $config[colors.border] !important;\n\tposition: absolute;\n\tleft: -.25rem !important;\n\ttop: 0 !important;\n\tbottom: 0 !important;\n\tborder-radius: 100% 0 0 100%;\n\tcursor: ew-resize !important;\n\tdisplay: none;\n\ttransition: all .5s ease;\n}\n.playlist-resizer:hover {\n\twidth: .4rem !important;\n\tleft: -.4rem !important;\n}\n#fcsp-container[data-view-style="playlist"] .playlist-resizer {\n\tdisplay: block;\n}\n/* Hide the default resizers */\n#fcsp-container[data-view-style="playlist"] .fcsp-expander:not(.playlist-resizer) {\n\tdisplay: none;\n}\n'
	}
};
