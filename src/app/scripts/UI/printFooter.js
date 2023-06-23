import getPokemon from "../services/getPokemon";
import changePokemon from "./changePokemon";


const printFooter = async (pkmList, container, index) => {
  if (index >= pkmList.length) return;
  container.innerHTML = "";

  for (let i = index; i < index + 4; i++) {
    if (i < pkmList.length) {
      let pkmName = pkmList[i].name;
      let pkmInfo = await getPokemon(pkmList[i]);
      container.innerHTML += `
    <img  class="footer__pokemon" src="${pkmInfo.sprites.other["official-artwork"].front_default}"
    alt="${pkmName}">
    `;
    } else {
      break;
    }
  }

  const pokemonBtn = document.querySelectorAll(".footer__pokemon");
  changePokemon(pokemonBtn)  
};

export default printFooter;
