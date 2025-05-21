import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import FryImg from "./assets/Fry.png";

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
					<img className="fry" src={FryImg} alt="fry" />
					<p>
						Bienvenue, nerd de l’espace ! Ce quiz est réservé aux vrais fans de
						<span className="bluebold"> FUTURAMA !</span> Prouve que tu connais
						mieux la série que Bender connaît l’alcool... et gagne ta place à
						bord du du <span className="bluebold">PLANET EXPRESS !</span>
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
