import { useState } from "react";

import { EXAMPLES } from "../../data";
import TabButton from "./TabButton/TabButton";
import Section from "../Section/Section";
import Tab from "./Tab/Tab";

import "./Examples.css";

export default function Examples() {
	const [tabContent, setTabContent] = useState("");

	function handleSelect(tab) {
		setTabContent(tab);
	}

	let content = (
		<div id="tab-content">
			<p>Please select a topic.</p>
		</div>
	);

	if (tabContent) {
		content = (
			<div id="tab-content">
				<h3>{EXAMPLES[tabContent].title}</h3>
				<p>{EXAMPLES[tabContent].description}</p>
				<pre>
					<code>{EXAMPLES[tabContent].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<Section id="examples" title="Examples">
			<Tab
				buttons={
					<>
						<TabButton
							isSelected={tabContent === "components"}
							onClick={() => handleSelect("components")}
						>
							Component
						</TabButton>
						<TabButton
							isSelected={tabContent === "jsx"}
							onClick={() => handleSelect("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={tabContent === "props"}
							onClick={() => handleSelect("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={tabContent === "state"}
							onClick={() => handleSelect("state")}
						>
							State
						</TabButton>
					</>
				}
			>
				{content}
			</Tab>
		</Section>
	);
}
