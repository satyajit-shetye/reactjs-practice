import { useEffect, useState } from "react";

export default function ({ timer }) {
	const [remainingTime, setRemainingTime] = useState(timer);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevTime) => prevTime - 10);
		}, 10);

		return () => {
			clearTimeout(interval);
		};
	}, []);

	return <progress value={remainingTime} max={timer} />;
}
