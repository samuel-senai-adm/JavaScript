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

// Atividade 5 - 6 - 7  Criar elementos dinamicamente

let txt = document.querySelector("#txt");
let adicionar = document.querySelector("#adiciona");
let list = document.querySelector("#list");

adicionar.addEventListener("click", function() {
    if (txt.value === "") {
        alert("Preencha o campo para adicionar à lista");
        return;
    }
    let novoItem = document.createElement("li");
    novoItem.textContent = txt.value;
    list.appendChild(novoItem);
    txt.value = ""; 
    novoItem.addEventListener("click", function() {
        let confirmar = confirm("Tem certeza que deseja remover este item?");
        if (confirmar) {
            list.removeChild(novoItem);
        }
    });
});

// Atividade Hard

let nome = document.querySelector("#nome")
let save = document.querySelector("#save")
let paragrafo = document.querySelector("#p");

save.addEventListener("click", function() {
    if (nome.value.trim() === "") {
        p.textContent = "O campo nome é obrigatório";
        p.style.color ="red";
    } else{
     (nome.value.trim() === paragrafo.textContent)
        p.textContent = "Nome adicionado com sucesso!";
        p.style.color ="green";
    }}
);
