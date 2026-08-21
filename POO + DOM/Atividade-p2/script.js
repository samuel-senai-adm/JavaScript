class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * (this.desconto / 100));
    }
};


// nova classe

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        this.exibir();
    }

    exibir() {
        const resultado = document.querySelector('#resultado');

        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.preco}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>

                    <button class="botaoExcluir" onclick="estoque.excluirProduto(${indice})">
                        Excluir
                    </button>
                </div>
                <hr>
            `;
        });
    }
}

const estoque = new Estoque();
const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

botaoCadastrar.addEventListener('click', function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);

    produto.aplicarDesconto();
    estoque.adicionarProduto(produto);
    estoque.exibir();

});






