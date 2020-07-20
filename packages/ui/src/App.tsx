import React from "react";
import { Checkbox, ToggleMoreLess } from "@prmsrswt/prom-components";
import { useLocalStorage } from "@prmsrswt/prom-components/lib/hooks";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useLocalStorage<boolean>("check-me", false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Prometheus component library demo.</p>
        <Checkbox id="chk" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}>
          Check Me!
        </Checkbox>
        <ToggleMoreLess showMore={true} event={() => console.log("toggled")}>
          More?
        </ToggleMoreLess>
      </header>
    </div>
  );
}

export default App;
