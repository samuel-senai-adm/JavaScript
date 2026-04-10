// regex
let mascaraNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/
let mascaraEmail = /\w+@\w+\.\w{2,}/
let mascaraTelefone = /^\(?\d{2}\)?[\s-]?\d{5}[\s-]\d{4}$/
// Botao de cadastro
let botao = document.querySelector("#botao");
// nome
let nome = document.querySelector("#nome");
let msgNome = document.querySelector("#msgNome");
// email
let email = document.querySelector("#email");
let msgEmail = document.querySelector("#msgEmail");
// senha
let senha = document.querySelector("#senha");
let msgSenha = document.querySelector("#msgSenha");
// telefone
let telefone = document.querySelector("#telefone")
let msgTel = document.querySelector("#msgTel")
let validarTel = document.querySelector("#validarTel");
let list = document.querySelector("#list");
// cadastro
let proximo = document.querySelector("#proximo")

function validarTudo() {
    if (
        mascaraNome.test(nome.value) &&
        mascaraEmail.test(email.value) &&
        senha.value.trim().length >= 6 &&
        mascaraTelefone.test(telefone.value)
    ) {
        document.querySelector("#proxima").style.display = "inline-block";
    } else {
        document.querySelector("#proxima").style.display = "none";
    }
}
nome.addEventListener("keyup", validarTudo);
email.addEventListener("keyup", validarTudo);
senha.addEventListener("keyup", validarTudo);
telefone.addEventListener("keyup", validarTudo);


nome.addEventListener("keyup", function () {
    if (!mascaraNome.test(nome.value)) {
        msgNome.textContent = "Nome Inválido. Exemplo: 'João'";
        msgNome.style.color = "red";
    } else {
        msgNome.textContent = "Nome Válido!";
        msgNome.style.color = "green";
    }
});

email.addEventListener("keyup", function () {
    if (!mascaraEmail.test(email.value)) {
        msgEmail.textContent = "E-mail Inválido. Exemplo: text@text.text";
        msgEmail.style.color = "red";
    } else {
        msgEmail.textContent = "E-mail Válido!";
        msgEmail.style.color = "green";
    }
});

senha.addEventListener("keyup", function () {
    let valor = senha.value.trim();
    if (valor.length < 6) {
        msgSenha.textContent = "Senha fraca";
        msgSenha.style.color = "red";
    } 
    else if (valor.length >= 6 && valor.length <10) {
        msgSenha.textContent = "Senha aceitável";
        msgSenha.style.color = "orange";
    } 
    else {
        msgSenha.textContent = "Senha forte";
        msgSenha.style.color = "green";
    }
});

telefone.addEventListener("keyup", function () {
    if (!mascaraTelefone.test(telefone.value)) {
        msgTel.textContent = "Telefone Inválido. Exemplo: (11) 22222-3333";
        msgTel.style.color = "red";
    } else {
        msgTel.textContent = "Telefone Válido!";
        msgTel.style.color = "green";
    }
});


botao.addEventListener("click", function() {
    if (!mascaraTelefone.test(telefone.value)) {
    alert("Digite um telefone válido!");
    return;
    }
    let novoItem = document.createElement("li");
    novoItem.textContent = telefone.value;
    list.appendChild(novoItem);
    // telefone.value = ""; 
    novoItem.addEventListener("click", function() {
        let confirmar = confirm("Tem certeza que deseja remover este item?");
        if (confirmar) {
            list.removeChild(novoItem);
        }
    });
});

