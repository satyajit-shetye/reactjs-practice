import { useState } from "react";
import QUESTIONS from "../questions";
import Answers from "./Answers";
import ProgressBar from "./ProgressBar";

const MAX_TIME_LIMIT = 5000;
export default function Question({ onSelect, index }) {
	const [selectedAnswer, setSelectedAnswer] = useState();

	function handleSelectedAnswer(answer) {
		setSelectedAnswer({
			answer,
			isCorrect: null,
		});

		setTimeout(() => {
			setSelectedAnswer({
				answer,
				isCorrect: answer === QUESTIONS[index].answers[0],
			});

			setTimeout(() => {
				onSelect(answer);
			}, 1000);
		}, 2000);
	}

	let answerState = "";
	let calculatedTimer = MAX_TIME_LIMIT;

	if (selectedAnswer && selectedAnswer.isCorrect === null) {
		answerState = "selected";
		calculatedTimer = 2000;
	} else if (selectedAnswer) {
		answerState = selectedAnswer.isCorrect ? "correct" : "wrong";
		calculatedTimer = 1000;
	}

	return (
		<div id="question">
			<ProgressBar
				key={calculatedTimer}
				timer={calculatedTimer}
				onTimeout={answerState === "" ? () => onSelect(null) : null}
				mode={answerState}
			/>
			<h2>
				{index + 1}. {QUESTIONS[index].text}
			</h2>
			<Answers
				answers={QUESTIONS[index].answers}
				userSelectedAnswer={selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectedAnswer}
			/>
		</div>
	);
}
