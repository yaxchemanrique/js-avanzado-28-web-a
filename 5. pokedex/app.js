const container = document.querySelector('.container');
const searchInput = document.querySelector('#search-by-name');

const globalPokemons = [];
/*[
    {
        pokemonName: 'bulbasaur',
        id: 1,
        img: url,
        types: [tipo1, tipo2],
    },
    {
        pokemonName: 'bulbasaur',
        id: 2,
        img: url,
        types: [tipo1, tipo2],
    },
]*/

const getPokemons = async function() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    const pokemons = data.results;
    
    for(let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        // {name: 'ivysaur', url: 'https://pokeapi.co...'}
        const pokemonName = pokemon.name;
        const pokemonUrl = pokemon.url;
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        normalizePokemons(data, pokemonName);
    }
    globalPokemons.forEach(pokemon => renderPokemonCard(pokemon))
}

const normalizePokemons = function (data, pokemonName) {
    const img = data.sprites.other['official-artwork'].front_default;
    const id = data.id;

    const normalizedPokemon = {
        pokemonName,
        id,
        img,
    };

    globalPokemons.push(normalizedPokemon);
}

const renderPokemonCard = function(obj) {
    const pokemonCard = document.createElement('div');
    pokemonCard.innerHTML = `
        <img src="${obj.img}"
        alt="${obj.pokemonName}">
        <h2>#<span>${obj.id}</span> ${obj.pokemonName}</h2>
    `;
    pokemonCard.classList = 'pokemon-card';
    container.appendChild(pokemonCard);
};

const searchByName = function (searchingParameter) {
    const filteredPokemon = globalPokemons.filter((pokemon) => {
        if(pokemon.pokemonName.includes(searchingParameter)) {
            // console.log(pokemon);
            return pokemon;
        }
    })
    return filteredPokemon;
}

searchInput.addEventListener('input', () => {
    container.innerHTML = '';
    const inputText = searchInput.value;
    filteredPokemon.forEach(pokemon => renderPokemonCard(pokemon));
})

getPokemons();