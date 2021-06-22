class Produto {
    #nome;
    #preco;
    #tipo;

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
        this.#tipo = 'movel'
    }

    get nome(){
        return this.#nome;
    }
    get preco(){
        return this.#preco * 0.75;
    }
}

const produto = new Produto('monitor', 2500);
produto.nome = 'copo'
console.log(produto.#nome);