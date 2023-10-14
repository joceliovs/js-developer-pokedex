const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    // Verifica se a imagem está disponível antes de atribuí-la
    if (pokeDetail.sprites && pokeDetail.sprites.other && pokeDetail.sprites.other.dream_world && pokeDetail.sprites.other.dream_world.front_default) {
        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
    }

    return pokemon;
}

// Obtém detalhes de um Pokémon específico
    pokeApi.getPokemonDetail = (pokemon) => {
        return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
            .catch((error) => {
                console.error('Erro ao obter detalhes do Pokémon:', error);
                return null; // ou lance um erro personalizado para lidar com isso adequadamente
            });
    };

// Obtém uma lista de Pokémon com base no deslocamento e no limite especificados
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => {
            console.error('Erro ao obter a lista de Pokémon:', error);
            return []; // ou lance um erro personalizado para lidar com isso adequadamente
        });
};
