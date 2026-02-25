console.log("Óla, JavaScript!");
let a =10;
let b =3;

console.log("Adição: ", a + b);
console.log("Subtração: ", a - b);
console.log("Multiplicação: ", a * b);
console.log("Divisão: ", a / b);
console.log("Resto da divisão: ", a % b);
console.log("Potência: ", a ** b);
let contador = 5;
contador++;
console.log(contador);

let D = 5;
let C = 7;
let F = 8;

console.log((D + C + F)/3);
console.log(C % D);

let x = 10;
let y = "10";

console.log("Compara valores: ", x == y);
console.log("Compara valores e tipo: ", x === y);
console.log("Compara valores diferentes: ", x != y);
console.log("Compara valores e tipo diferentes: ", x !== y);

console.log("Óla JavaScript é", a);

console.log("Atividade 3"); 

let idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
else {
    console.log("você é menor de idade.");
}

let nmr = 8;
let nmr2 = 6;

console.log("Atividade 4");

if (nmr > nmr2) {
    console.log("O número" , nmr , "é maior que o número", nmr2);
} else if (nmr < nmr2) {
    console.log("O número", nmr , "não é maior que o número", nmr2);
} else {
    console.log("Os números são iguais.");
}

console.log("Operadores Lógicos");

let idade1 = 20;
let TemCarteira = true;

console.log(idade1 >= 18 && TemCarteira);

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado); // true

console.log("Atividade 5");

let nota1 = 7.5;
let nota2 = 8.0;
let frequencia = 74;
let media = (nota1 + nota2) / 2;

if (media >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log("Atvididade 6");

let login = true;
let token = false;

console.log(login || token);
