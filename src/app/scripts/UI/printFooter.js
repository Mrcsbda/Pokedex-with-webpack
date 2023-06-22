import getInfo from "../services/getInfo";

const printFooter = async (pkmList, container, id) => {
  container.innerHTML = "";
  for (let i = id; i < id + 4; i++) {
    let pkmInfo = await getInfo(i);
    console.log(pkmInfo.forms[0].name);
    container.innerHTML += `
    <img class="pokemon__sprite" src="${pkmInfo.sprites.other.dream_world.front_default}" alt="${pkmList[i].name}">
    `
  }
}

export default printFooter;