import { useState } from "react";

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	const config = {
		control: <span className="player-name">{name}</span>,
		actionButtonLabel: "Edit",
	};

	if (isEditing) {
		config.control = <input value={name} />;
		config.actionButtonLabel = "Save";
	}

	const handleEditClick = () => {
		setIsEditing((isEditing) => !isEditing);
	};
	return (
		<li>
			<span className="player">
				{config.control}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{config.actionButtonLabel}</button>
		</li>
	);
}
