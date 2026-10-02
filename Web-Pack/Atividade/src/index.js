import { calcularMedia, verificarSituacao } from "./modulo.js";

const nota1 = 7;
const nota2 = 8;
const nota3 = 6;

const media = calcularMedia(nota1, nota2, nota3);
const situacao = verificarSituacao(media);

console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Média:", media);
console.log("Situação:", situacao);