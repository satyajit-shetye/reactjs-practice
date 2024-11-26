import { useRef } from "react";

export default function Answers({
	answers,
	userSelectedAnswer,
	answerState,
	onSelect,
}) {
	const shuffledAnswers = useRef();

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers].sort(() => {
			return Math.random() - 0.5;
		});
	}

	return (
		<ul id="answers">
			{shuffledAnswers.current.map((answer) => {
				const isSelected = answer === userSelectedAnswer?.answer;

				return (
					<li key={answer} className={"answer"}>
						{isSelected}
						<button
							className={isSelected ? answerState : ""}
							onClick={() => onSelect(answer)}
							disabled={!isSelected && userSelectedAnswer?.answer}
						>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
