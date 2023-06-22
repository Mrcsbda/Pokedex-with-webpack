const arrowRightFunc = () => {

  let pokemonIndexArrow = JSON.parse(localStorage.getItem("pokemonIndex"));
  console.log(pokemonIndexArrow);
  pokemonIndexArrow += 4;
  console.log(pokemonIndexArrow);
  localStorage.setItem('pokemonIndex', JSON.stringify(pokemonIndexArrow));
  return pokemonIndexArrow;
}

export default arrowRightFunc;