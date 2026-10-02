export function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

export function verificarSituacao(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}