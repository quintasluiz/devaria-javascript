//importar as classes
const Boleto = require('./Boleto');
const Pix = require('./Pix');
//importar o enum
const TipoPagamento = require('./TipoPagamento');

//receber a forma de pagamento e o valor
const formaDePagamento = process.argv[2]; //primeiro argumento da funçao
const valor = process.argv[3]; //segundo argumento da função
//validar os parametrosde entrada
if (!formaDePagamento){
    console.log('Forma de pagamento nao informada');
    return;
}

if (!valor) {
    console.log('Valor nao informado');
    return;
}
let objetoFormaPagamento;

const eBoleto =formaDePagamento.toLowerCase() === TipoPagamento.BOLETO.toLowerCase()
const ePix = formaDePagamento.toLowerCase() === TipoPagamento.PIX.toLowerCase()
//identificar a forma de pagamento
if(eBoleto){
    objetoFormaPagamento = new Boleto();
} else if (ePix) {
    objetoFormaPagamento = new Pix();
} else {

    console.log('Forma de pagamento invalida');
    return;
}


//efetuar o pagamento
objetoFormaPagamento.efetuarPagamento(valor);