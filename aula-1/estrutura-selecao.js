const valido = true;

if(valido) {
    console.log("expressão válida")
}

const marca = "volks";

if(marca === "volks") {
    console.log("marcavolks atendida");
} else if (marca === "ford") {
    console.log("marca ford atendida")
} else {
    console.log("marca nao atendida")
}


const nome = "Douglas";

switch(nome) {
    case "João":
        console.log("João encontrado");
        break;
    case "Douglas":
        console.log("Douglas encontrado");
        break;
    default:
        console.log("Nenhum encontrado");
}