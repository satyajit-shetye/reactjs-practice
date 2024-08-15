import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";
import Section from "./Section";

export default function CoreConcept() {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcepts key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </Section>
  );
}
