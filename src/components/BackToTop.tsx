import { useState, useEffect } from "react";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		// Ajouter l'événement de défilement
		window.addEventListener("scroll", handleScroll);

		// Supprimer l'événement de défilement au démontage du composant
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{isVisible && (
				<button className="scroll-button" onClick={scrollToTop}>
					Ʌ
				</button>
			)}
		</>
	);
};

export default BackToTop;
