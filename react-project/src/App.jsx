/* eslint-disable react/jsx-key */
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
