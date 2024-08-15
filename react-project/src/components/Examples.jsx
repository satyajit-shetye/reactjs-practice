import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [content, setContent] = useState("");

  function handleClick(title) {
    setContent(title);
  }

  function renderContent() {
    if (!content) {
      return (
        <div id="tab-content">
          <p>Please select a topic.</p>
        </div>
      );
    } else {
      return (
        <div id="tab-content">
          <h3>{EXAMPLES[content].title}</h3>
          <p>{EXAMPLES[content].description}</p>
          <pre>
            <code>{EXAMPLES[content].code}</code>
          </pre>
        </div>
      );
    }
  }

  return (
    <Section id="examples" title={"Examples"}>
      <Tabs
        buttons={Object.keys(EXAMPLES).map((item) => {
          return (
            <TabButton
              onSelect={handleClick}
              isActive={content === item.toLowerCase()}
              key={item}
            >
              {EXAMPLES[item].title}
            </TabButton>
          );
        })}
      >
        {renderContent()}
      </Tabs>
    </Section>
  );
}
