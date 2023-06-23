
const listFilter = (pokemonList, pkmName) => {
  let newPokemonList = [];
  let pokemonName = pkmName.toLowerCase();
  for (let i = 0; i < pokemonList.length; i++) {
    if ((pokemonList[i].name).includes(pokemonName)) {
      let newPokemon = {
        name: `${pokemonList[i].name}`,
        url: `${pokemonList[i].url}`
      }
      newPokemonList.push(newPokemon);
    }
  }

  return newPokemonList;
}

export default listFilter;