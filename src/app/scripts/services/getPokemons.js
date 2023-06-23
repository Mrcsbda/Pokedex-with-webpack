import axios from "axios"
import { URL_API } from "./data"

const getPokemons = async () => {
    try {
        const { data } = await axios.get(URL_API)
        return data.results;
    } catch (error) {
        console.log(error)
        return error
    }
}

export default getPokemons