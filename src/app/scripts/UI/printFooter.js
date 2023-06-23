
import getPokemon from "../services/getPokemon";

const printFooter = async (pkmList, container, index) => {
  if (index > pkmList.length) return;
  container.innerHTML = "";
  console.log(index);
  console.log(pkmList.length)

  for (let i = index; i < index + 4; i++) {
    if (i < pkmList.length) {
      let pkmName = pkmList[i].name;

      let pkmInfo = await getPokemon(pkmList[i])
      console.log(pkmInfo.forms[0].name);

      container.innerHTML += `
    <img class="footer__pokemon" src="${pkmInfo.sprites.other['official-artwork'].front_default}" alt="${pkmName}">
    `
    } else { console.log(`posicion ${index}`) };
  }
}

export default printFooter;