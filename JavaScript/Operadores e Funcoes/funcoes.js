//Blocos de código reutilizáveis

function saudacao() {
    console.log("Olá, JavaScript!");
}

saudacao();

//-------------Exemplos -------------//

// ------------

function nome(nome) {
    console.log("Olá, " + nome);
}

nome("Ana");

//-------------

function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3));

console.log("--------Atividade 7---------");

let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros:");

function contar(peso, altura) {
    return peso / (altura * altura);
}

imc = contar(peso, altura);
imcArd = imc.toFixed(2);

console.log("Seu IMC é: " + imcArd);

console.log("--------Atividade 8---------");

let nMr2 = prompt("Digite um número:");
function ParOuImpar(nMr2) {
    if (nMr2 % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(ParOuImpar(nMr2));

console.log("Funções Nativas");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let date = new Date();
}