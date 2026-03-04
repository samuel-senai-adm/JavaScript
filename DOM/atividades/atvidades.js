// Atividade 1 - Mudar Cor do Título

let botaoAzul = document.querySelector("#botaoAzul");
let botaoVermelho = document.querySelector("#botaoVermelho");
let titulo = document.querySelector(".titulo");

botaoAzul.addEventListener("click", function () {
    titulo.style.color = "blue";
});

botaoVermelho.addEventListener("click", function(){
    titulo.style.color = "red";
});

// Atividada 2 - Mostrar e esconder

let botaoToggle = document.querySelector("#botaoToggle");
let mensagem = document.querySelector(".mensagem");

botaoToggle.addEventListener("click", function () {
    mensagem.classList.toggle("oculto");
});

// Atividade 3 - Contador de caracteres

let texto = document.querySelector("#texto");
let contador = document.querySelector("#contador");

texto.addEventListener("keyup", function () {
    let quantidadeDcaracter = texto.value.length;
    contador.textContent= "Número de caracteres: " + quantidadeDcaracter;
});

// Atividade 4 - Contador de cliques

let clique = document.querySelector("#clique");
let pContador = document.querySelector("#pContador");
let cont = 0;

clique.addEventListener("click", function() {
    cont++;
    pContador.textContent ="Quantidade de cliques: " + cont;
});

// Atividade 5 - Criar elementos dinamicamente

