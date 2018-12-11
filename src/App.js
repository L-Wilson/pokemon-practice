import React, { Component } from "react";
import Pokemons from "./pokemons";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Pokemons />
        <div className="App" />
      </div>
    );
  }
}

export default App;
