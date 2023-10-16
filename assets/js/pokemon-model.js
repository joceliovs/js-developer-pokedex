class Pokemon {
    constructor() {
        this.number = null;
        this.name = null;
        this.type = null;
        this.types = [];
        this.photo = null;
    }

    // Método para exibir detalhes do Pokémon
    showDetails() {
        console.log(`Number: ${this.number}`);
        console.log(`Name: ${this.name}`);
        console.log(`Type: ${this.type}`);
        console.log(`Types: ${this.types.join(', ')}`);
        console.log(`Photo: ${this.photo}`);
    }
    
}
function searchPokemon() {
    const pokemonNameOrNumber = document.getElementById('pokemonInput').value;
    const pokemonContainer = document.getElementById('pokemonContainer');
    if (pokemonNameOrNumber) {
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
    } else {
        showMessage(pokemonContainer, 'Por favor, insira o nome ou número do Pokémon para buscar.', 'error');
    }
}

// Função para exibir o Pokémon na tela
function showPokemon(container, pokemon) {
    container.innerHTML = ''; // Limpa o conteúdo anterior, se houver
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    const details = `<p>Number: ${pokemon.number}</p><p>Name: ${pokemon.name}</p><p>Type: ${pokemon.type}</p><p>Types: ${pokemon.types.join(', ')}</p><img src="${pokemon.photo}" alt="${pokemon.name}">`;
    pokemonElement.innerHTML = details;
    container.appendChild(pokemonElement);

    
};
