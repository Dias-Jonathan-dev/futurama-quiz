import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/quiz");
	};

	return (
		<>
			<header>
				<h1>FUTURAMA</h1>
				<p>"Et mon cul c’est du téflon ?"</p>
				<Navbar />
			</header>
			<main>
				<h2>Futuraquiz !</h2>
				<div className="main-content">
					<img className="fry" src="src/assets/Fry.png" alt="fry" />
					<p>
						Bienvenue sur le quiz dédié aux fans de la série
						<span className="bluebold"> FUTURAMA !</span> Viens tester tes
						connaissances et découvre si tu es de taille à rejoindre l'équipage
						du <span className="bluebold">PLANET EXPRESS !</span>
					</p>
				</div>
				<button type="button" onClick={handleClick}>
					Débuter le quiz
				</button>
			</main>
		</>
	);
};

export default Accueil;
