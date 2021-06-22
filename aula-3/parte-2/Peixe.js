const Animal = require('./Animal');

class Peixe extends Animal{
    constructor(nome, quantidadeNadadeiras){
        super(nome);
        this.quantidadeMamas = quantidadeNadadeiras;
    }
}

module.exports = Peixe;