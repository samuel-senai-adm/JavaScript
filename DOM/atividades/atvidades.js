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

let botaoToggle = document.querySelector("#botaoToggle")
let mensagem = document.querySelector(".mensagem")

botaoToggle.addEventListener("click", function () {
    mensagem.classList.toggle("oculto");
});

// Atividade 3- 