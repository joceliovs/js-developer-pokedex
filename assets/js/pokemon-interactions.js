// Função para exibir uma mensagem de saudação ao Pokémon
function greetPokemon(pokemon) {
    console.log(`Olá, ${pokemon.name}! Bem-vindo à Pokedex!`);
}

// Função para reproduzir um som específico para o Pokémon
function playPokemonSound(pokemon) {
    console.log(`Reproduzindo som especial para ${pokemon.name}...`);
}

// Função para realizar uma ação específica com base no tipo do Pokémon
function performActionBasedOnType(pokemon) {
    switch (pokemon.type) {
        case 'fire':
            console.log('Cuidado! É um tipo de fogo!');
            break;
        case 'water':
            console.log('Prepare-se para uma batalha aquática!');
            break;
        default:
            console.log('Um novo desafio Pokémon espera por você!');
    }
}

// ... outras funções de interação com os Pokémon ...

