const readLine = require('readline');
const Produto = require('./Produto');

const leitor = readLine.createInterface({
    input: process.stdin, //entrada teclado
    output: process.stdout
});

const produtosMercado = [
   new Produto("feijão", 5),
   new Produto("arroz", 10.50), 
   new Produto("melancia", 2), 
   new Produto("suco", 10),
   new Produto("alface", 3)
];

const validarLista = (listaMercado) => {
    //verificar se a lista esta vazia, false, null ou undefined
    if (!listaMercado) { 
        throw Error("A lista nao pode ser vazia")
    }
    const itensDesejados = listaMercado.split(","); //["feijao", "arroz"] antes era ["feijão, arroz"] uma string unica
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length; //trim tira os espaços

    if (itensInvalidos > 0) {
        throw Error(`existem ${itensInvalidos} itens invalidos`);
    }

    return itensDesejados;
}

const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis =[];
    const produtosIndisponiveis =[];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();
        const produto = produtosMercado.find(produtoMercado => produtoMercado.nome === itemFormatado);

        if (produto) {
            produtosDisponiveis.push(produto);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

leitor
    .question(
        "Digite a lista de produtos separados por virgula: \n",
        (listaProdutos) => {
            try {
               const listaValida =  validarLista(listaProdutos);
                const disponibilidade = obterDisponibilidade();
                
                console.log('Os seguintes produtos estao disponiveis', disponibilidade.produtosDisponiveis);
                console.log('Os seguintes prdutos estao indisponiveis', disponibilidade.produtosIndisponiveis);
                
                const disponiveisOrdenados = disponibilidade
                    .produtosDisponiveis
                    .sort((produto1, produto2) => produto1.nome.localeCompare(produto2.nome));
            
                console.log('Produtos disponiveis ordenados alfabeticamente', disponiveisOrdenados);
                
                } catch (e) {
                console.log(`Erro ao processar a lista (${e.message})`);
            } finally {
                leitor.close();

            }
        }
    );