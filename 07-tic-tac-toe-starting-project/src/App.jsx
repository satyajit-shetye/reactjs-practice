import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	return gameTurns.length && gameTurns[0].player === "X" ? "O" : "X";
}

function deriveGameBoard(gameTurns) {
	const gameBoard = [...INITIAL_GAME_BOARD].map((innerArray) => [
		...innerArray,
	]);

	for (let turn of gameTurns) {
		const { square, player } = turn;
		const { row, column } = square;
		gameBoard[row][column] = player;
	}

	return gameBoard;
}

function deriveWinner(gameBoard, players) {
	let winner = false;
	for (let combinations of WINNING_COMBINATIONS) {
		const firstCombination =
			gameBoard[combinations[0].row][combinations[0].column];
		const secondCombination =
			gameBoard[combinations[1].row][combinations[1].column];
		const thirdCombination =
			gameBoard[combinations[2].row][combinations[2].column];

		if (
			firstCombination &&
			firstCombination === secondCombination &&
			firstCombination === thirdCombination
		) {
			winner = players[firstCombination];
		}
	}
	return winner;
}

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });

	const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);
	const isDraw = !winner && gameTurns.length === 9;

	function handleSelectActivePlayer(rowIndex, colIndex) {
		setGameTurns((prevTurn) => {
			const currentPlayer = deriveActivePlayer(prevTurn);
			return [
				{ square: { row: rowIndex, column: colIndex }, player: currentPlayer },
				...prevTurn,
			];
		});
	}

	function handleRestart() {
		setGameTurns([]);
	}

	function handleSetPlayers(symbol, name) {
		setPlayers((players) => {
			return {
				...players,
				[symbol]: name,
			};
		});
	}

	return (
		<main>
			<div id="game-container">
				{(winner || isDraw) && (
					<GameOver winner={winner} onRestart={handleRestart} />
				)}
				<ol id="players" className="highlight-player">
					<PlayerInfo
						name="Player 1"
						symbol="X"
						activePlayer={activePlayer}
						setPlayers={handleSetPlayers}
					/>
					<PlayerInfo
						name="Player 2"
						symbol="O"
						activePlayer={activePlayer}
						setPlayers={handleSetPlayers}
					/>
				</ol>
				<GameBoard
					gameBoard={gameBoard}
					onSelectPlayer={handleSelectActivePlayer}
				></GameBoard>
			</div>
			<ol id="log">
				<Log logs={gameTurns}></Log>
			</ol>
		</main>
	);
}

export default App;
