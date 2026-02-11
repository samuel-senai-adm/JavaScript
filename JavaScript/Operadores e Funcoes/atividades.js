console.log("====Atividades====")

console.log("---Atividade 1---")

function data() {
    let data = new Date();
    console.log("Hora: " , data.getHours() , ":" , data.getMinutes());
}
data();

console.log ("---Atividade 2---");

function somAEMedia() {
    let a = Number(prompt("Digite o primeiro número:"));
    let b = Number(prompt("Digite o segundo número:"));
    let soma = a + b;
    let media = soma / 2;
    console.log("Soma: " , soma);
    console.log("Média: " , media);
}
somAEMedia();

console.log("---Atividade 3---");

function caracterQuantidadeENomeMaiusculo(name) {
    let nome = prompt("Digite seu nome:");
    let qntDCaracter = nome.length;
    let nomeMaiusculo = nome.toUpperCase();
    console.log("Quantidade de caracteres: " , qntDCaracter);
    console.log("Nome em maiúsculo: " , nomeMaiusculo);
}
caracterQuantidadeENomeMaiusculo()

console.log("---Atividade 4---");

function VerificaTexto(texto) {
    let frase = prompt("Digite uma frase:");
    console.log(frase.includes("HTML"));
}
VerificaTexto();



