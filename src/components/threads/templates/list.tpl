Object.keys(Player.threads.displayThreads).reduce((rows, board) => {
	return rows.concat(Player.threads.displayThreads[board].map(thread => `
		<tr>
			<td>
				<a class="quotelink" href="//boards.${thread.ws_board ? '4channel' : '4chan'}.org/${_.escAttr(thread.board)}/thread/${_.escAttr(thread.no)}#p${_.escAttr(thread.no)}" target="_blank">
					>>>/${_.escHTML(thread.board)}/${_.escHTML(thread.no)}
				</a>
			</td>
			<td>${thread.sub || ''}</td>
			<td>${_.escHTML(thread.replies)} / ${_.escHTML(thread.images)}</td>
			<td>${_.timeAgo(thread.time)}</td>
			<td>${_.timeAgo(thread.last_modified)}</td>
		</tr>
	`))
}, []).join('')
