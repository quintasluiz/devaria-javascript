const readLine = require('readline');

const leitor = readLine.createInterface({
    input: process.stdin, //entrada teclado
    output: process.stdout
});

const produtosMercado = ["feijão", "arroz", "melancia", "suco","alface"];

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
        if (produtosMercado.includes(itemFormatado)) {
            produtosDisponiveis.push(itemFormatado);
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
                    .sort((produto1, produto2) => produto1.localeCompare(produto2));
            
                console.log('Produtos disponiveis ordenados alfabeticamente', disponiveisOrdenados);
                
                } catch (e) {
                console.log(`Erro ao processar a lista (${e.message})`);
            } finally {
                leitor.close();

            }
        }
    );
