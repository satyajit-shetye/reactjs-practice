import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef(null);
	const dialog = useRef(null);

	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}

	function handleReset() {
		setTimeRemaining(targetTime * 1000);
	}

	function handleStart() {
		timer.current = setInterval(() => {
			setTimeRemaining((prevTime) => prevTime - 10);
		}, 10);
	}

	function handleStop() {
		dialog.current.open();
		clearInterval(timer.current);
	}

	return (
		<>
			<ResultModal
				ref={dialog}
				result="Lost"
				targetTime={targetTime}
				remainingTime={timeRemaining}
				onReset={handleReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				{<p>You Lost!!!</p>}
				<p className="challenge-time">
					{`${targetTime} second${targetTime > 1 ? "s" : ""}`}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{!timerIsActive ? "Start" : "Stop"} Challenge
					</button>
				</p>
				<p className={timerIsActive ? "active" : ""}>
					{timerIsActive ? "Time is running..." : "Time inactive"}
				</p>
			</section>
		</>
	);
}
