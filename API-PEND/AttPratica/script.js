const ingredientes = document.querySelectorAll('.ingrediente');
const pizza = document.querySelector('#pizza');
const concluir = document.querySelector('#concluir');
const mensagem = document.querySelector('#mensagem');


// Arrastar ingrediente
ingredientes.forEach(function (ingrediente) {

    ingrediente.addEventListener("dragstart", function (event) {

        event.dataTransfer.setData("text", event.target.innerText);

    });

});


// Permitir soltar
pizza.addEventListener("dragover", function (event) {

    event.preventDefault();

});


// Soltar ingrediente
pizza.addEventListener("drop", function (event) {

    event.preventDefault();

    const ingrediente = event.dataTransfer.getData("text");

    const novoIngrediente = document.createElement("div");

    novoIngrediente.innerHTML = `
        <p>${ingrediente}</p>

        <button class="botaoExcluir">
            Remover
        </button>
    `;

    pizza.appendChild(novoIngrediente);

    // Botão remover
    const botaoExcluir = novoIngrediente.querySelector(".botaoExcluir");

    botaoExcluir.addEventListener("click", function () {

        novoIngrediente.remove();

    });

});


// Concluir pizza
concluir.addEventListener("click", function () {

    mensagem.innerText = "🍕 Pizza montada! Recebemos seu pedido!";

});