import "../styles/styles.scss"
import getPokemons from "./services/getPokemons"
import printFooter from "./UI/printFooter"
import arrowLeftFunc from "./services/arrowLeftFunc";
import arrowRightFunc from "./services/arrowRightFunc";

const pokemonFooter = document.getElementById("figure-pokemons");
const arrowLeft = document.getElementById("left-arrow");
const arrowRight = document.getElementById("right-arrow");


document.addEventListener("DOMContentLoaded", async () => {
  const pokemonList = await getPokemons();
  let pokemonId = 1;
  localStorage.setItem('pokemonId', JSON.stringify(pokemonId));
  printFooter(pokemonList, pokemonFooter, pokemonId);
})

arrowLeft.addEventListener("click", async () => {
  const pokemonList = await getPokemons();
  const newIndexL = arrowLeftFunc();
  printFooter(pokemonList, pokemonFooter, newIndexL);
})

arrowRight.addEventListener("click", async () => {
  const pokemonList = await getPokemons();
  const newIndexR = arrowRightFunc();
  printFooter(pokemonList, pokemonFooter, newIndexR);

})