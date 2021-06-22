const FormaPagamento = require('./FormaPagamento');

class Pix extends FormaPagamento {
    efetuarPagamento(valor){
        console.log(`Efetuando pagmento de R$ ${valor} no pix`);
        }
}

module.exports = Pix;