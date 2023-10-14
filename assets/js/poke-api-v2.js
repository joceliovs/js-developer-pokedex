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

