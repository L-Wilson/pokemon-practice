import React, { Component } from "react";
import { Link } from "react-router-DOM";
import axios from "axios";

export default class Pokemons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokemons: []
    };
  }
  getPokemons() {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(response => {
      this.setState({
        isLoading: false,
        pokemons: response.data
      });
      console.log(data);
    });
  }
  componentDidMount() {
    this.getPokemons();
  }
  render() {
    return (
      <div>
        <h1>List of pokemons</h1>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.pokemons.map(pokemon => (
          <div key={pokemon._id} style={{ clear: "both", height: 70 }}>
            <img
              src={pokemon.image_url}
              style={{ float: "left", height: 50 }}
            />
            <Link to={"/pokemons/" + pokemon._id}>{pokemon.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}
