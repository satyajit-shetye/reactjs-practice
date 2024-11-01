import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";
import { CoreConcept } from "./CoreConcept/CoreConcept";

import "./CoreConcepts.css";

export default function CoreConcepts() {
	return (
		<Section id="core-concepts" title="Core Concepts">
			<ul>
				{CORE_CONCEPTS.map((coreConcept, index) => {
					return <CoreConcept {...coreConcept} key={index}></CoreConcept>;
				})}
			</ul>
		</Section>
	);
}
