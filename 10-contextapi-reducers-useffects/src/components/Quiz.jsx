import { useState } from "react";
import QUESTIONS from "../questions";

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	function handleSelectAnswer(selectedAnswer) {
		setUserAnswers((prevUserAnswer) => {
			return [...prevUserAnswer, selectedAnswer];
		});
	}

	if (activeQuestionIndex === QUESTIONS.length) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelect={handleSelectAnswer}
			/>
		</div>
	);
}
