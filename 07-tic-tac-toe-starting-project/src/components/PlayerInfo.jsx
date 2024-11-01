import { useState } from "react";

export default function PlayerInfo({ name, symbol, activePlayer, setPlayers }) {
	const [playerName, setPlayerName] = useState(name);
	const [isEditing, setIsEditing] = useState(false);

	function handleButtonClick() {
		setIsEditing((isEditing) => !isEditing);

		if (isEditing) {
			setPlayers(symbol, playerName);
		}
	}

	function handleInputChange(event) {
		setPlayerName(event.target.value);
	}

	let playerNameControl = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		playerNameControl = (
			<input type="text" value={playerName} onChange={handleInputChange} />
		);
	}
	return (
		<li className={activePlayer === symbol ? "active" : null}>
			<span className="player">
				{playerNameControl}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleButtonClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
