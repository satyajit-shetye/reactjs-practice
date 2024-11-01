export default function GameBoard({ onSelectPlayer, gameBoard }) {
	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => {
				return (
					<li key={rowIndex}>
						<ol>
							{row.map((playerSymbol, colIndex) => {
								return (
									<button
										key={colIndex}
										onClick={() => onSelectPlayer(rowIndex, colIndex)}
										disabled={!!playerSymbol}
									>
										{playerSymbol}
									</button>
								);
							})}
						</ol>
					</li>
				);
			})}
		</ol>
	);
}
