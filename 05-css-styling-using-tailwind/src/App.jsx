import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import { StrictMode } from "react";

export default function App() {
	return (
		<StrictMode>
			<Header />
			<main>
				<AuthInputs />
			</main>
		</StrictMode>
	);
}
