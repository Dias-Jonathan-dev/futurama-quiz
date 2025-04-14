export interface QuizQuestion {
	id: number;
	question: string;
	possibleAnswers: string[];
	correctAnswer: string;
}

export interface BackToTopButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}
