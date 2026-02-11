console.log("Funções Nativas");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();
    console.log("Dia: " , data.getDate());
    console.log("Mês: " , data.getMonth() + 1); 
    console.log("Ano: " , data.getFullYear());
    console.log("Hora: " , data.getHours());
    console.log("Minutos: " , data.getMinutes());
    console.log("Segundos: " , data.getSeconds());
}
mostrarDataHora();

console.log("Desafio");

function mostrarDataHora() {
    let date = new Date();
    console.log("Desafio: " , date.getHours() , ":" , date.getMinutes() , ":" , date.getSeconds() , " " , date.getDate() , "/" , date.getMonth() + 1 , "/" , date.getFullYear());
}

console.log("Matematica");

console.log((Math.PI));

function calcularOperacoes(numero) {
    console.log("Raiz quadrada: " , Math.sqrt(numero));
    console.log("Numero inteiro mais próximo: " , Math.round(numero));
    console.log("Numero inteiro para cima: " , Math.ceil(numero));
    console.log("Numero inteiro para baixo: " , Math.floor(numero));
    console.log("Valor ao quadrado: " , Math.pow(numero, 2));
    console.log("Valor absoluto: " , Math.abs(numero));
}
calcularOperacoes(10);

console.log("String's");
function analisarTexto(texto) {
    console.log("Tamanho da string: " , texto.length);
    console.log("Tudo maiúsculo: " , texto.toUpperCase());
    console.log("Tudo minúsculo: " , texto.toLowerCase());
}

analisarTexto("JavaScript")

function VerificaTexto(frase) {
    console.log(frase.includes("JavaScript"));
}
VerificaTexto("Eu estudo JavaScript");  


function concatena(nome, curso) {
    return "Aluno: "  + nome + " | Curso: " + curso;
}
console.log(concatena("José", "Front-end"));