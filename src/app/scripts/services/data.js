export const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=-1";

export const URL_API_INFO_POKEMON = (id) => {
  let URL_API_INFO = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  return URL_API_INFO;
}

