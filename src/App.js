import React, { Component } from "react";
import logo from "./logo.svg";
import State from "./components/useStateExample";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="pastèque" />
          <p>
            Pour l'instant tout se passe entre les sources sur
            <code> Github</code>
            et dans <code>DockerHub</code> via les actions
          </p>
          <State />
        </header>
      </div>
    );
  }
}

export default App;
