import { useState } from "react";

export default function NewTask({ onAddTask }) {
	const [enteredTask, setEnteredTask] = useState("");

	function handleButtonClick() {
		onAddTask({
			name: enteredTask,
		});
		setEnteredTask("");
	}
	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				value={enteredTask}
				onChange={(event) => setEnteredTask(event.target.value)}
			/>
			<button
				className="text-stone-700 hover:text-stone-950"
				onClick={handleButtonClick}
			>
				Add Task
			</button>
		</div>
	);
}
