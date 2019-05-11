import React from "react";
import "./App.css";
import Toggler from "./components/Toggler.js";
import SimpleFormHooks from "./components/simpleFormHooks.js";
import SWMovies from "./components/SWMovies.js";

function App() {
  return (
    <div className="App">
      <p>hello from app</p>
      <Toggler />
      <SimpleFormHooks />
      <SWMovies />
    </div>
  );
}

export default App;
