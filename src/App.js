import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="pastèque" />
          <p>
              Pour l'instant tout se passe entre les sources sur <code> Github</code> et le build dans <code>DockerHub</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
