 /* import POKEMON from './data/pokemon/pokemon.js'
 // SE PUEDE IMPORTAR CON EL NOMBRE POKEMON, ALLPOKEMON O ETC. PORQUE SE REALIZÓ UN EXPORT POR DEFECTO 
import allPokemon from './data/pokemon/pokemon.js';
//import { example } from './data.js';//
//console.log(example);//
//IMPORTANDO UNA CONSTANTE (DEBE SALIR 27)
//
/*function muestraPokemon () { let todosLosPokemon; 
   todosLosPokemon = document.getElementById('container');
   todosLosPokemon.innerHTML = ALLPOKEMON; }
muestraPokemon() */
// allpokemon.forEach( function(muestraPokemon) {
//    let todosLosPokemon; 
//    todosLosPokemon = document.getElementById('container');
//    todosLosPokemon.innerHTML = allpokemon;
//    console.log(muestraPokemon);}); 
 // FILTRAR
// const pokeType = allPokemon.filter( function selectype (tipos){
//    if (tipos.type == 'Fire') { return true;}
// });
// const pokeType = allPokemon.filter (tipos => tipos.type =='Dragon');
// console.log(pokeType);
/*function muestraPokemon () { let todosLosPokemon; 
   todosLosPokemon = document.getElementById('container');
   todosLosPokemon.innerHTML = ALLPOKEMON; } */

// intento2
// let allCards = '';
// const container = show => {
//    for ( let i = 0; i < show.length; i += 1) {
//       allCards += `<div class="cards">
//          <img src="${show[i].img}" width="175px" height:"175px" class:"img-fluid" alt="imgPokemon">
//           <center><h3>${show[i].name} #${show[i].num}</h3></center>
//           <div class="dropdown-cards">
//           <center><p>Tipo:${show[i].type}</p>
//           <p>Caramelos:${show[i].candy_count} </p>
//           <p>T. Aparición:${show[i].spawn_time}</p>
//           <p>Debilidad:${show[i].weaknesses}</p>
//          </center></div>
//          </div>` 
//    }
//    document.querySelector ('#show-pokemon').innerHTML= allCards;
// };
// container(allPokemon);
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
import POKEMON from './data/pokemon/pokemon.js';
import {
  idPokemon, orderFilter, typeFilter, weaknessFilter, topPokemon,
// eslint-disable-next-line import/extensions
} from './data.js';
const pokeImages = document.getElementById('show-pokemon');
const pokemonContainer = (dataPOKEMON) => {
  let pokeCards = '';
  dataPOKEMON.forEach((show) => {
    pokeCards += ` <div class="cards">
      <div class="cards-data">
        <div class="cards-main">
          <img src="${show.img}" class="img-pokemon" alt="Image-Pokemon">
          <p>${show.name} #${show.num}</p>
        </div>
        <div class="cards-dropdown">
            <p class="boldstyle">Tipo: <em>${show.type}</em></p>
            <p class="boldstyle">Caramelos: <em>${show.candy_count}</em></p>
            <p class="boldstyle">Frecuencia de Aparición: <em>${show.spawn_chance}%</em></p>
            <p class="boldstyle">Debilidad: <em>${show.weaknesses}</em></p>
        </div>
      </div>
    </div>`;
  });
  pokeImages.innerHTML = pokeCards;
};
pokemonContainer(POKEMON);
// BOTÓN PARA MOSTRAR TODOS LOS POKEMON EN ORDEN POR ID
const showAllPokemon = document.querySelector('#show');
showAllPokemon.addEventListener('click', (event) => {
  pokemonContainer(idPokemon(POKEMON, event.target.id));
});
// MOSTRAR ORDEN ALFABÉTICO Y CANTIDAD DE CARAMELOS
const selectOrder = document.querySelector('#poke-order');
selectOrder.addEventListener('change', () => {
  pokemonContainer(orderFilter(POKEMON, selectOrder.value));
});
// MOSTRAR FILTRO DE TIPOS
const selectType = document.querySelector('#poke-type');
selectType.addEventListener('change', (event) => {
  pokemonContainer(typeFilter(POKEMON, event.target.value));
});
// MOSTRAR FILTRO DE DEBILIDADES
const selectWeakness = document.querySelector('#poke-weakness');
selectWeakness.addEventListener('change', (event) => {
  pokemonContainer(weaknessFilter(POKEMON, event.target.value));
});
// MOSTRAR FILTRO DE TOP 10 DE FRECUENCIA DE APARICIÓN
const showTopPokemon = document.querySelector('#poke-top');
showTopPokemon.addEventListener('click', (event) => {
  pokemonContainer(topPokemon(POKEMON, event.target.id));
});
orderFilter(POKEMON, selectOrder);
typeFilter(POKEMON, selectType);
weaknessFilter(POKEMON, selectWeakness);
