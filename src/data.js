/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

// FUNCIÓN DE ORDEN POR ID
export const idPokemon = (POKEMON, order) => {
  let pokemonOrder = [];
  if (order === 'show') {
    pokemonOrder = POKEMON.sort((a, b) => (a.id - b.id));
  }
  return pokemonOrder;
};

// FUNCIÓN DE ORDEN ALFABÉTICO + CANTIDAD DE CARAMELOS
export const orderData = (POKEMON, order) => {
  let pokemonOrder = [];
  if (order === 'ascendant-az') {
    pokemonOrder = POKEMON.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
  }

  if (order === 'descendant-za') {
    pokemonOrder = POKEMON.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
    });
  }

  if (order === 'more-candies') {
    pokemonOrder = POKEMON.sort((a, b) => (b.candy_count - a.candy_count));
  }

  if (order === 'less-candies') {
    pokemonOrder = POKEMON.sort((a, b) => (a.candy_count - b.candy_count));
  }
  return pokemonOrder;
};

// FUNCION DE FILTRO POR TIPOS
export const typeFilter = (show, pokeType) => {
  const arrFilter = [];
  show.forEach((showOne) => {
    if (showOne.type.indexOf(pokeType) !== -1) {
      arrFilter.push(showOne);
    }
  });
  return arrFilter;
};

// FUNCION DE FILTRO POR DEBILIDADES
export const weaknessFilter = (show, pokeWeakness) => {
  const arrFilter = [];
  show.filter((showTwo) => {
    if (showTwo.weaknesses.indexOf(pokeWeakness) !== -1) {
      arrFilter.push(showTwo);
    }
  });
  return arrFilter;
};

// FUNCION DE TOP 10 DE FRECUENCIA DE APARICIÓN
export const topPokemon = (POKEMON, order) => {
  let pokemonTop = [];
  if (order === 'poke-top') {
    pokemonTop = POKEMON.sort((a, b) => (b.spawn_chance - a.spawn_chance));
  }
  return pokemonTop.slice(0, 10);
};
// FUNCIÓN DE ORDEN ALFABÉTICO + CANTIDAD DE CARAMELOS
export const orderFilter = (POKEMON, order) => {
  let pokemonOrder = [];
  if (order === 'ascendant-az') {
    pokemonOrder = POKEMON.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
    });
  }
  if (order === 'descendant-za') {
    pokemonOrder = POKEMON.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
    });
  }
  if (order === 'more-candies') {
    pokemonOrder = POKEMON.sort((a, b) => (b.candy_count - a.candy_count));
  }
  if (order === 'less-candies') {
    pokemonOrder = POKEMON.sort((a, b) => (a.candy_count - b.candy_count));
  }
  return pokemonOrder;
};
// FUNCION DE FILTRO POR TIPOS
export const typeFilter = (show, pokeType) => {
  const arrFilter = [];
  show.filter((showOne) => {
    if (showOne.type.indexOf(pokeType) !== -1) {
      arrFilter.push(showOne);
    }
  });
  return arrFilter;
};
// FUNCION DE FILTRO POR DEBILIDADES
export const weaknessFilter = (show, pokeWeakness) => {
  const arrFilter = [];
  show.filter((showTwo) => {
    if (showTwo.weaknesses.indexOf(pokeWeakness) !== -1) {
      arrFilter.push(showTwo);
    }
  });
  return arrFilter;
};
// FUNCION DE TOP 10 DE FRECUENCIA DE APARICIÓN
export const topFilter = (show, pokeTop) => {
  const arrFilter = [];
  show.filter((showThree) => {
    if (showThree.spawn_chance.indexOf(pokeTop) !== -1) {
      arrFilter.push(showThree);
    }
  });
  return arrFilter;
};
export const topPokemon = (POKEMON, order) => {
  let pokemonTop = [];
  if (order === 'poke-top') {
    pokemonTop = POKEMON.sort((a, b) => (b.spawn_chance - a.spawn_chance));
  }
  return pokemonTop.slice(0, 10);
};