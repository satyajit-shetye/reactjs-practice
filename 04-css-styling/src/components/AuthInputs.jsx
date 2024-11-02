import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Input from "./Input";

const Container = styled.div`
	&#auth-inputs {
		width: 100%;
		max-width: 28rem;
		padding: 2rem;
		margin: 0 auto;
		border-radius: 0.5rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		background: linear-gradient(180deg, #474232 0%, #28271c 100%);
		color: white;
	}
`;

const Controls = styled.div`
	&.controls {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}
`;

const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
`;

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === "email") {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes("@");
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<Container id="auth-inputs">
			<Controls>
				<Input
					label="Email"
					type="text"
					invalid={emailNotValid}
					onChange={(event) =>
						handleInputChange("password", event.target.value)
					}
				/>
				<Input
					label="Password"
					type="password"
					invalid={passwordNotValid}
					onChange={(event) =>
						handleInputChange("password", event.target.value)
					}
				/>
			</Controls>
			<Actions>
				<Button type="button" className="text-button">
					Create a new account
				</Button>
				<Button className="button" onClick={handleLogin}>
					Sign In
				</Button>
			</Actions>
		</Container>
	);
}
