import quizCompleteLogo from "./../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
	const summary = userAnswers.reduce(
		(accumulator, currentValue) => {
			if (currentValue === null) {
				accumulator.skipped += 1;
			} else if (currentValue === QUESTIONS[accumulator.index].answers[0]) {
				accumulator.correct += 1;
			} else {
				accumulator.wrong += 1;
			}
			accumulator.index += 1;
			return accumulator;
		},
		{
			index: 0,
			skipped: 0,
			correct: 0,
			wrong: 0,
		}
	);

	return (
		<div id="summary">
			<img src={quizCompleteLogo} alt="quiz complete logo" />
			<h2>Quiz Completed!</h2>
			<div id="summary-stats">
				<p>
					<span className="number">
						{Math.round((summary.skipped / QUESTIONS.length) * 100)}%
					</span>
					<span className="text">Skipped</span>
				</p>
				<p>
					<span className="number">
						{Math.round((summary.correct / QUESTIONS.length) * 100)}%
					</span>
					<span className="text">Correct</span>
				</p>
				<p>
					<span className="number">
						{Math.round((summary.wrong / QUESTIONS.length) * 100)}%
					</span>
					<span className="text">Wrong</span>
				</p>
			</div>
			<ol>
				{userAnswers.map((answer, index) => {
					let answerClassName = "user-answer";

					if (answer === null) {
						answerClassName += " skipped";
					} else if (answer === QUESTIONS[index].answers[0]) {
						answerClassName += " correct";
					} else {
						answerClassName += " wrong";
					}

					return (
						<li key={index}>
							<h3>{index + 1}</h3>
							<p className="question">{QUESTIONS[index].text}</p>
							<p className={answerClassName}>{answer ?? "Skipped"}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
