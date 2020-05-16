import React from "react";
import logo from "./cloudhost.zone.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>
            <FontAwesomeIcon icon={["fas", "fa-cloud"]} />
            host.zone
          </code>
          <br />
          host your ideas
        </p>
      </header>
    </div>
  );
}

export default App;
