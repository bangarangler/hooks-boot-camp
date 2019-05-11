import React from "react";
import "./App.css";
import Toggler from "./components/Toggler.js";
import SimpleFormHooks from "./components/simpleFormHooks.js";

function App() {
  return (
    <div className="App">
      <p>hello from app</p>
      <Toggler />
      <SimpleFormHooks />
    </div>
  );
}

export default App;
