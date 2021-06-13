const listaPessoas = ["Douglas", "Rafael", "Daniel"];

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);


if(!listaPessoas.includes(nome)) {
    console.log("voce não foi convidado")
    return;
}

if(idade < 18) {
    console.log("apenas maiores de idade")
    return;
}

console.log("seja bem vindo!");