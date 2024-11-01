import reactCoreConceptsImage from "./../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescription = ["Fundamental", "Core", "Crucial"];

function getIndex(max) {
	return Math.floor(Math.random() * max);
}

export function Header() {
	const listCount = reactDescription.length;
	const description = reactDescription[getIndex(listCount)];

	return (
		<header>
			<img src={reactCoreConceptsImage} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
