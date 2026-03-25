let email = document.querySelector('#email')
let validacao = document.querySelector('#validacao')
let pa = document.querySelector("#pa")

let senha = document.querySelector("#senha")


validacao.addEventListener("click", function() {
    let valor = email.value.trim();

if (valor.includes("@") && valor.includes(".")) {
    pa.textContent = "Sucesso";
    pa.style.color = "green";

} else {
    pa.textContent = "E-mail inválido";
    pa.style.color = "red";
    }
});

senha.addEventListener("keyup", function() {
    let valor1 = senha.value.trim();

if (valor1.length < 6) {
    pa.textContent = "Senha Fraca";
    pa.style.color = "red";
}
else if (valor1.length >=6 && valor1.length <=10) {
    pa.textContent = "Senha aceitável";
    pa.style.color = "orange";
} else {
    pa.textContent = "Senha Forte";
    pa.style.color = "green";
}

});

