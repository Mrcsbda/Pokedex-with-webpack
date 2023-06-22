import axios from "axios"

const getPokemon = async (pokemon) => {
    try {
        const { data } = await axios.get(pokemon.url)
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
}

export default getPokemon