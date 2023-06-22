//"https://pokeapi.co/api/v2/pokemon/3/"

import axios from "axios"
import { URL_API_INFO_POKEMON } from "./data"

const getInfo = async (id) => {
  try {
    const { data } = await axios.get(URL_API_INFO_POKEMON(id))
    return data;
  } catch (error) {
    console.log(error)
    return error
  }
}

export default getInfo