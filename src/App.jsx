import { useState } from "react";
import Pokemoncard from "pokemoncard"
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
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const previous = () => {
    if (pokemonIndex > 0) {
      console.log("Previous");
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const next = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      console.log("next");
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      {console.log(pokemonIndex)}
      <nav>
        <button onClick={() => previous()}>Précedent</button>
        <button onClick={() => next()}>Suivant</button>
      </nav>

      <Pokemoncard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
