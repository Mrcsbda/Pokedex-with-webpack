const arrowRightFunc = () => {

  let pokemonIndexArrow = JSON.parse(localStorage.getItem("pokemonIndex"));
  pokemonIndexArrow += 4;
  localStorage.setItem('pokemonIndex', JSON.stringify(pokemonIndexArrow));
  return pokemonIndexArrow;
}

export default arrowRightFunc;