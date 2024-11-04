import { useRef, useState } from "react";

export default function Player() {
	const playerNameInput = useRef();

	const [playerName, setPlayerName] = useState("");

	function handleButtonClick() {
		setPlayerName(playerNameInput.current.value);
		playerNameInput.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {playerName ?? "unknown entity"}</h2>
			<p>
				<input type="text" ref={playerNameInput} />
				<button onClick={handleButtonClick}>Set Name</button>
			</p>
		</section>
	);
}
