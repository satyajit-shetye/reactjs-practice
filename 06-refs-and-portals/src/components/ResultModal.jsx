import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ReasultModal = forwardRef(function ResultModal(
	{ onReset, targetTime, remainingTime },
	ref
) {
	const dialogRef = useRef();

	const userLost = remainingTime <= 0;
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialogRef.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog ref={dialogRef} className="result-modal" onClose={onReset}>
			{userLost && <h2>You Lost</h2>}
			{!userLost && <h2>Score: {score}</h2>}
			<p>
				The target time was <strong>{targetTime}</strong> seconds.
			</p>
			<p>
				You stopped the timer with
				<strong>{formattedRemainingTime} seconds left.</strong>
			</p>
			<form method="dialog">
				<button onClick={onReset}>Close</button>
			</form>
		</dialog>,
		document.getElementsByTagName("body")[0]
	);
});

export default ReasultModal;
