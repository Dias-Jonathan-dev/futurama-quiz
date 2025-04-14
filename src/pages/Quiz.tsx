import { useLoaderData } from "react-router-dom";
import Question from "../components/Question";
import type { QuizQuestion } from "../services/types";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";

function Quiz() {
	const quiz = useLoaderData() as QuizQuestion[];

	return (
		<>
			<header className="header-quiz">
				<Link to="/" className="home-return">
					Revenir à l'accueil
				</Link>
			</header>
			<div className="quiz-bloc">
				<h2>Bienvenue sur notre Quiz !</h2>
				{quiz.slice(0, 26).map((elem) => (
					<Question key={elem.id} question={elem} />
				))}
			</div>
			<BackToTop />
		</>
	);
}

export default Quiz;
