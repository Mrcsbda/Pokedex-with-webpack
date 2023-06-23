import getPokemon from "../services/getPokemon";
import getPokemons from "../services/getPokemons";
import printMainPokemon from "./printPokemon";

const changePokemon = (pokemonBtn) => {
  for (let i = 0; i < pokemonBtn.length; i++) {
    pokemonBtn[i].addEventListener("click", async () => {
      const pokemonName = pokemonBtn[i].getAttribute("alt");
      let data = await getPokemons();
      let pokemonFiltrado = data.find(
        (pokemon) => pokemon.name === pokemonName
      );
      console.log(pokemonFiltrado);
      let pokemon = await getPokemon(pokemonFiltrado);
      printMainPokemon(pokemon);
    });
  }
};

export default changePokemon;
