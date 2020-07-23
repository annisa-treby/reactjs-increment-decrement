import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import LinkLearnReact from "./components/LinkLearnReact";

function App() {
  const user = {
    name: "annisa",
    email: "annisatreby.at@gmail.com",
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hallo Annisa</h2>
        <Greeting user={user} message="enjoy with react" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <LinkLearnReact user={user} />
      </header>
    </div>
  );
}

export default App;
