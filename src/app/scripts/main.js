import "../styles/styles.scss"
import printMainPokemon from "./UI/printPokemon"
import getPokemon from "./services/getPokemon"
import getPokemons from "./services/getPokemons"

document.addEventListener('DOMContentLoaded', async ()=> {
    const data = await getPokemons()
    const pokemonRandomPosition = Math.floor(Math.random() * data.length);
    const pokemon = await getPokemon(data[pokemonRandomPosition])
    printMainPokemon(pokemon)
})

// const prueba = async () => {
//     const data = await getPokemons()
//     console.log(data)
// }

