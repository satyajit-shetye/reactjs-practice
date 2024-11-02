import logo from "../assets/logo.png";
import { styled } from "styled-components";

const HeaderElm = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 2rem;

	@media (min-width: 768px) {
		margin-bottom: 4rem;
	}
`;

const ImageElm = styled.img`
	object-fit: contain;
	margin-bottom: 2rem;
	width: 11rem;
	height: 11rem;
`;

const H1Elm = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 0.4em;
	text-align: center;
	text-transform: uppercase;
	color: #9a3412;
	font-family: "Pacifico", cursive;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 2.25rem;
	}
`;

const PElm = styled.p`
	text-align: center;
	color: #a39191;
	margin: 0;
`;

export default function Header() {
	return (
		<HeaderElm>
			<ImageElm src={logo} alt="A canvas" />
			<H1Elm>ReactArt</H1Elm>
			<PElm>A community of artists and art-lovers.</PElm>
		</HeaderElm>
	);
}
