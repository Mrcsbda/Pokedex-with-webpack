//inportaciones
import "../styles/styles.scss"
import printMainPokemon from "./UI/printPokemon"
import getPokemon from "./services/getPokemon"
import getPokemons from "./services/getPokemons"
import printFooter from "./UI/printFooter"
import arrowLeftFunc from "./services/arrowLeftFunc";
import arrowRightFunc from "./services/arrowRightFunc";
import listFilter from "./services/listFilter"

//constantes del DOM
const pokemonFooter = document.getElementById("figure-pokemons");
const arrowLeft = document.getElementById("left-arrow");
const arrowRight = document.getElementById("right-arrow");
const searchBtn = document.getElementById("header__button");
const searchInput = document.getElementById("header__input");

//Eventos
document.addEventListener("DOMContentLoaded", async () => {
  //pedimos los pokemones en la pagina
  const pokemonList = await getPokemons();
  //inicializamos la barra de pokemones y la introducimos
  let pokemonIndex = 0;
  localStorage.setItem('pokemonIndex', JSON.stringify(pokemonIndex));
  //procedemos a mostrar un pokemon aleatorio
  const pokemonRandomPosition = Math.floor(Math.random() * pokemonList.length);
  const pokemon = await getPokemon(pokemonList[pokemonRandomPosition])
  console.log(pokemon)
  printMainPokemon(pokemon)
  //imprimimos los pokemones de la barra inferior
  printFooter(pokemonList, pokemonFooter, pokemonIndex);
})

arrowLeft.addEventListener("click", async () => {
  const pokemonList = await getPokemons();
  let newIndexL = arrowLeftFunc();
  let pkmText = searchInput.value;
  let newPokemonList = listFilter(pokemonList, pkmText)
  if (!pkmText) {
    printFooter(pokemonList, pokemonFooter, newIndexL);
  } else {

    localStorage.setItem('pokemonIndex', JSON.stringify(newIndexL));
    printFooter(newPokemonList, pokemonFooter, newIndexL);
  }
})

arrowRight.addEventListener("click", async () => {
  const pokemonList = await getPokemons();
  let newIndexR = arrowRightFunc();
  let pkmText = searchInput.value;
  let newPokemonList = listFilter(pokemonList, pkmText)

  if (!pkmText) {
    printFooter(pokemonList, pokemonFooter, newIndexR);
  } else {

    localStorage.setItem('pokemonIndex', JSON.stringify(newIndexR));
    printFooter(newPokemonList, pokemonFooter, newIndexR);
  }
})

searchBtn.addEventListener("click", async () => {
  const pokemonList = await getPokemons();
  let pkmText = searchInput.value;
  console.log(`usted esta buscando a ${pkmText}`)
  let newIndexQ = 0;
  localStorage.setItem('pokemonIndex', JSON.stringify(newIndexQ));

  let newPokemonList = listFilter(pokemonList, pkmText)
  console.log(newPokemonList);
  printFooter(newPokemonList, pokemonFooter, newIndexQ);

})