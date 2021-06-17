let numero = 0;

while (numero < 20) {
    console.log(numero);
    numero++;
}




let numeroCarro = 1

const lavarCarro = () => {
    console.log(`lavando carro ${numeroCarro}`)
}

const verificarTemCarroNaFila = () => {
    return(
        numeroCarro < 10
    );
}

let temCarroNaFila = true;
while (temCarroNaFila) {
    lavarCarro()
    temCarroNaFila = verificarTemCarroNaFila();
    numeroCarro++;
}