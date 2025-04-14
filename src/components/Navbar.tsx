import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Accueil</Link>
					<Link to="Quiz">Le Quiz</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
