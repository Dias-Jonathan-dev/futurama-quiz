import type { QuizQuestion } from "../services/types";
import { useState } from "react";

interface Question {
	question: QuizQuestion;
}

function Question({ question }: Question) {
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [displayAnswer, setDisplayAnswer] = useState<boolean>(false);

	return (
		<div key={question.id}>
			<h3>{question.question}</h3>
			<ul>
				{question.possibleAnswers.map((answer) => (
					<li key={answer}>
						<button
							type="button"
							onClick={() => setSelectedAnswer(answer)}
							className={`
								button-quiz
								${selectedAnswer === answer ? "selected" : ""}
								${displayAnswer && answer === question.correctAnswer ? "correct" : ""}
								${displayAnswer && answer !== question.correctAnswer ? "incorrect" : ""}
							`}
						>
							{answer}
						</button>
					</li>
				))}
			</ul>
			<button
				type="button"
				onClick={() => {
					setDisplayAnswer(!displayAnswer);
				}}
			>
				Voir la réponse
			</button>
			{/* <p className={`right-answer${displayAnswer ? " display" : ""}`}>
				{question.correctAnswer}
			</p> */}
		</div>
	);
}

export default Question;
