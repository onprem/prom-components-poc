import React, { FC } from "react";
import { Router, RouteComponentProps, Link } from "@reach/router";
import { Container } from "reactstrap";
import { Checkbox, ToggleMoreLess, Flags, Navigation } from "@prmsrswt/prom-components";
import { useLocalStorage } from "@prmsrswt/prom-components/lib/hooks";
import logo from "./logo.svg";
import "./App.css";

const Home: FC<RouteComponentProps> = () => {
  const [isChecked, setIsChecked] = useLocalStorage<boolean>("check-me", false);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Prometheus component library demo.</p>
      <Link to="/flags">Go to Flags page</Link>
      <Checkbox id="chk" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}>
        Check Me!
      </Checkbox>
      <ToggleMoreLess showMore={true} event={() => console.log("toggled")}>
        More?
      </ToggleMoreLess>
    </header>
  );
};

function App() {
  return (
    <>
      <Navigation pathPrefix="" thanosComponent="query" defaultRoute="/new" />
      <Container fluid style={{ paddingTop: 70 }}>
        <Router basepath="/new">
          <Home path="/" />
          <Flags path="/flags" pathPrefix="" />
        </Router>
      </Container>
    </>
  );
}

export default App;
