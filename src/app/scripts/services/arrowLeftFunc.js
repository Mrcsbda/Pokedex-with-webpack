const arrowLeftFunc = () => {
  let pokemonIndexArrow = JSON.parse(localStorage.getItem("pokemonIndex"));
  if (pokemonIndexArrow == 1) {
    console.log("no es posible");
  } else {
    pokemonIndexArrow -= 4;
  }
  localStorage.setItem('pokemonIndex', JSON.stringify(pokemonIndexArrow));
  return pokemonIndexArrow;
}

export default arrowLeftFunc;