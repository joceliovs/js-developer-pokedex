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
