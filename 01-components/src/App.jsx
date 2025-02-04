import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
	const [selectedTopic, setSelectedTopic] = useState("");

	function handleSelect(tabId) {
		setSelectedTopic(tabId);
	}

	let tabContent = <div id="tab-content">Please select a topic</div>;

	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>{EXAMPLES[selectedTopic].code}</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((coreConcept) => {
							return <CoreConcept key={coreConcept.title} {...coreConcept} />;
						})}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{["Components", "JSX", "Props", "State"].map((item) => {
							return (
								<TabButton
									key={item}
									onSelect={handleSelect}
									isSelected={selectedTopic === item.toLowerCase()}
								>
									{item}
								</TabButton>
							);
						})}
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
