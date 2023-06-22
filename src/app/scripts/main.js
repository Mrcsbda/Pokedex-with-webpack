import "../styles/styles.scss"
import getPokemons from "./services/getPokemons"

const prueba = async () => {
    const data = await getPokemons()
    console.log(data)
}

prueba()