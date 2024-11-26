import { useEffect, useState } from "react";

export default function ProgressBar({ timer, onTimeout, mode }) {
	const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const timeout = setTimeout(onTimeout, timer);
		return () => {
			clearTimeout(timeout);
		};
	}, [timer, onTimeout]);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevRemainingTime) => {
				return prevRemainingTime - 10;
			});
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<progress
			id="question-time"
			max={timer}
			value={remainingTime}
			className={mode}
		></progress>
	);
}
