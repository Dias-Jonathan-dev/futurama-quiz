import { Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>Copyright 2025</p>
			</footer>
		</>
	);
}

export default App;
