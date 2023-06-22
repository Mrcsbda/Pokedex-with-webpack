const pokemonContainer = document.getElementById('pokemonContainer')
const printMainPokemon = (pokemon) => {
    pokemonContainer.innerHTML = `
    <article class="main__pokemon">
        <section class="main__title">
          <img class ="main__type-icon" src="${typesIcons(pokemon.types[0].type.name)}" alt="Icon ${pokemon.types[0].type.name}" />
          <h2 class="main__pokemon-name">${(pokemon.name).toUpperCase()}</h2>
        </section>
        <figure class="main__pokemon-image-container">
          <img
            class="main__pokemon-image"
            src="${pokemon.sprites.other.dream_world.front_default}"
            alt="${pokemon.name} image"
          />
        </figure>
      </article>
      <article class="main__pokemon-statics-container">
        <section class="main__pokemon-statics">
          <h3 class="main__statics-subtitle">NO.</h3>
          <p class="main__statics-text">${pokemon.game_indices[4].game_index}</p>
        </section>
        <section class="main__pokemon-statics">
          <h3 class="main__statics-subtitle">EXPERIENCIA</h3>
          <p class="main__statics-text">${pokemon.base_experience}</p>
        </section>
        <section class="main__pokemon-statics">
          <h3 class="main__statics-subtitle">TYPE</h3>
          <p class="main__statics-text">${(pokemon.types[0].type.name).toUpperCase()}</p>
        </section>
        <section class="main__pokemon-statics">
          <h3 class="main__statics-subtitle">HABILITY</h3>
          <p class="main__statics-text">${(pokemon.abilities[0].ability.name).toUpperCase()}</p>
        </section>
        <section class="main__pokemon-statics">
          <h3 class="main__statics-subtitle">HEIGHT</h3>
          <p class="main__statics-text">${pokemon.height} m</p>
        </section>
        <section class="main__pokemon-statics">
          <h3 class="main__statics-subtitle">WEIGHT</h3>
          <p class="main__statics-text">${pokemon.weight} Kg</p>
        </section>
      </article>
    `
}

const typesIcons = (type) => {
    switch(type) {
        case "normal": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/4/43/Icon_Normal.png";
        case "grass": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/7/7f/Icon_Planta.png";
        case "fighting": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/4/4c/Icon_Lucha.png";
        case "flying": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/d/d3/Icon_Volador.png";
        case "poison": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/3/3e/Icon_Veneno.png"
        case "ground": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/8/8d/Icon_Tierra.png"
        case "rock": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/1/12/Icon_Roca.png"
        case "bug": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/7/7e/Icon_Bicho.png"
        case "ghost": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/9/9a/Icon_Fantasma.png"
        case "steel": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/b/bc/Icon_Acero.png"
        case "fire": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/4/44/Icon_Fuego.png"
        case "water": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/d/d3/Icon_Agua.png"
        case "psychic": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/c/c0/Icon_Ps%C3%ADquico.png"
        case "ice": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/2/22/Icon_Hielo.png"
        case "dragon": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/9/96/Icon_Drag%C3%B3n.png"
        case "dark": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/a/a4/Icon_Siniestro.png"
        case "fairy": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/6/60/Icon_Hada.png"
        case "electric": return "https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/3/33/Icon_El%C3%A9ctrico.png"
        default:  return "https://www.svgrepo.com/show/396378/exclamation-question-mark.svg";
    }
}
export default printMainPokemon