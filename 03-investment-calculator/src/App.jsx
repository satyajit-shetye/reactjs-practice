import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 300,
		expectedReturn: 5.5,
		duration: 12,
	});

	let isResultValid = false;

	function onHandleInputChange(key, value) {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[key]: value ? Number(value) : 0,
			};
		});
	}

	isResultValid = userInput.duration > 0;

	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChange={onHandleInputChange} />
			{!isResultValid && (
				<p className="center">Please enter valid Input data.</p>
			)}
			{isResultValid && <Results userInput={userInput} />}
		</>
	);
}

export default App;
