import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Accueil from "./pages/Accueil.tsx";
import Quiz from "./pages/Quiz.tsx";
import ApiQuiz from "./components/ApiQuiz.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/quiz",
				element: <Quiz />,
				loader: () => {
					return ApiQuiz();
				},
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement == null) {
	throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

createRoot(rootElement).render(<RouterProvider router={router} />);
