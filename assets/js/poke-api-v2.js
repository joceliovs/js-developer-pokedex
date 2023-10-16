const pokeApiV2 = {};

function convertPokeApiV2DetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    // Adicione lógica para obter tipos, habilidades, estatísticas e outros detalhes do pokeDetail

    return pokemon;
}

pokeApiV2.getPokemonDetail = (pokemonName) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then(convertPokeApiV2DetailToPokemon)
        .catch((error) => {
            console.error('Erro ao obter detalhes do Pokémon da PokéAPI v2:', error);
            return null;
        });
};

function showPokemon(container, pokemon) {
    container.innerHTML = ''; // Limpa o conteúdo anterior, se houver

    if (!pokemon) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('alert', 'error');
        messageElement.textContent = 'Pokémon não encontrado. Verifique o nome ou número e tente novamente.';
        container.appendChild(messageElement);
        return;
    }

    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    const details = `<p>Number: ${pokemon.number}</p><p>Name: ${pokemon.name}</p><p>Type: ${pokemon.type}</p><p>Types: ${pokemon.types.join(', ')}</p><img src="${pokemon.photo}" alt="${pokemon.name}">`;
    pokemonElement.innerHTML = details;
    container.appendChild(pokemonElement);
}

function searchPokemon() {
    const pokemonNameOrNumber = document.getElementById('pokemonInput').value;
    const pokemonContainer = document.getElementById('pokemonList'); // Use o contêiner correto

    if (!pokemonNameOrNumber) {
        alert('Por favor, insira o nome ou número do Pokémon para buscar.');
        return;
    }

    // Continuar com a busca do Pokémon
    pokeApiV2.getPokemonDetail(pokemonNameOrNumber)
        .then((pokemon) => {
            if (pokemon) {
                showPokemon(pokemonContainer, pokemon);
            } else {
                showMessage(pokemonContainer, 'Pokémon não encontrado. Verifique o nome ou número e tente novamente.', 'error');
            }
        })
        .catch((error) => {
            showMessage(pokemonContainer, `Ocorreu um erro ao buscar o Pokémon: ${error.message}`, 'error');
        });
}

// Adicione um evento de clique ao botão de busca
const searchButton = document.getElementById('searchButton');
if (searchButton) {
    searchButton.addEventListener('click', searchPokemon);
}
