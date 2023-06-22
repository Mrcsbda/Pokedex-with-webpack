import "../styles/styles.scss"
import printMainPokemon from "./UI/printPokemon"
import getPokemon from "./services/getPokemon"
import getPokemons from "./services/getPokemons"

document.addEventListener('DOMContentLoaded', async ()=> {
    const data = await getPokemons()
    const pokemon = await getPokemon(data[0])
    console.log(pokemon.sprites.other.dream_world.front_default)
    printMainPokemon(pokemon)
})

// const prueba = async () => {
//     const data = await getPokemons()
//     console.log(data)
// }

