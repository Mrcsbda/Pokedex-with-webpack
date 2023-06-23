const arrowLeftFunc = () => {
  let pokemonIndexArrow = JSON.parse(localStorage.getItem("pokemonIndex"));
  if (pokemonIndexArrow < 4) {
    console.log("no es posible");
  } else {
    pokemonIndexArrow += -4;
  }
  localStorage.setItem('pokemonIndex', JSON.stringify(pokemonIndexArrow));
  console.log(`lista #${pokemonIndexArrow} a #${pokemonIndexArrow - 4}`)
  return pokemonIndexArrow;
}

export default arrowLeftFunc;