import { useState } from "react";
import PokemonCard from "./pokemonCard";

import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const previous = () => {
    if (pokemonIndex > 0) {
      console.log("Previous");
      setpokemonIndex(pokemonIndex - 1);
    }
  };

  const next = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      console.log("next");
      setpokemonIndex(pokemonIndex + 1);
    }
  };

  const pokemon = pokemonList[pokemonIndex];
  return (
    <div>
      {console.log(pokemonIndex)}
      <nav>
        <PokemonCard pokemon={pokemon} />
        <button onClick={() => previous()}>Précedent</button>
        <button onClick={() => next()}>Suivant</button>
      </nav>
    </div>
  );
}

export default App;
