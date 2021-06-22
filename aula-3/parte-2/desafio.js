//importar classes
const Ave = require('./Ave');
const Mamifero = require('./Mamifero');
const Peixe = require('./Peixe');
const Reptil = require('./Reptil')

//receber o nome do animal
const nomeAnimal = process.argv[2];

if (!nomeAnimal) {
    console.log('Favor passar o nome do animal');
    return;
}

//define a lista de animais que o programa espera
const listaAnimais = [
    new Mamifero("vaca", 4),
    new Reptil("cobra"),
    new Ave("gavião", true),
    new Peixe("tubarão")
];
//identificar o animal que o usuario digitou
const animalSelecionado = listaAnimais.find(animal => animal.nome.toLowerCase() === nomeAnimal.toLowerCase());
//validar se o animal foi encontrado
if (!animalSelecionado) {
    console.log('O animal nao esta na nossa lista');
    return;
}
//identificar qual grupo o animal pertence
if (animalSelecionado instanceof Mamifero) {
    //exibir os dados genericos e exclusivos do animal
    console.log(` O animal enocntrado é um mamifero com nome ${animalSelecionado.nome} e quantidade de mamas é ${animalSelecionado.quantidadeMamas}`);
} else if (animalSelecionado instanceof Reptil){
    console.log(` O animal enocntrado é um reptil com nome ${animalSelecionado.nome} e sabe controlar a sua temperatura  ${animalSelecionado.controlaTemperaturaCorpo}`);

}else if (animalSelecionado instanceof Reptil){
    console.log(` O animal enocntrado é um reptil com nome ${animalSelecionado.nome} e sabe controlar a sua temperatura  ${animalSelecionado.controlaTemperaturaCorpo}`);

}else if (animalSelecionado instanceof Ave){
    console.log(` O animal enocntrado é uma ave com nome ${animalSelecionado.nome} e sabe voar  ${animalSelecionado.voa}`);

}else if (animalSelecionado instanceof Peixe){
    console.log(` O animal enocntrado é um peixe com nome ${animalSelecionado.nome} e a quantidade de nadadeiras e  ${animalSelecionado.quantidadeNadadeiras}`);
}
