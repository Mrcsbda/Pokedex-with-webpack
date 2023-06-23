const arrowLeftFunc = () => {
  let pokemonIndexArrow = JSON.parse(localStorage.getItem("pokemonIndex"));
  if (pokemonIndexArrow < 4) {
  } else {
    pokemonIndexArrow += -4;
  }
  localStorage.setItem('pokemonIndex', JSON.stringify(pokemonIndexArrow));
  return pokemonIndexArrow;
}

export default arrowLeftFunc;