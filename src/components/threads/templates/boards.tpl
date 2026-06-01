(Player.threads.boardList || []).map(board => {
	let checked = Player.threads.selectedBoards.includes(board.board);
	return !checked && !Player.threads.showAllBoards ? '' : `
		<label>
			<input
				type="checkbox"
				@change='threads.toggleBoard("${_.escAttr(board.board, true)}", $event.currentTarget.checked)'
				value="${_.escAttr(board.board)}"
				${checked ? 'checked' : ''}
			/>
			/${_.escHTML(board.board)}/
		</label>`
}).join('')
