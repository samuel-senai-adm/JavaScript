document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        // Validação
        if (nome === "") {
            mostrarMensagem("Por favor, preencha o seu nome.", "erro");
            return;
        }

        if (email === "") {
            mostrarMensagem("Por favor, preencha o seu e-mail.", "erro");
            return;
        }

        // Validação simples de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarMensagem("Por favor, digite um e-mail válido.", "erro");
            return;
        }

        // Mensagem personalizada de sucesso
        mostrarMensagem(`Obrigado, ${nome}! Recebemos o seu contato (${email}). Em breve retornaremos!`, "sucesso");

        // Limpa o formulário
        form.reset();
    });

    function mostrarMensagem(texto, tipo) {
        mensagem.textContent = texto;
        mensagem.style.display = "block";

        if (tipo === "sucesso") {
            mensagem.style.color = "green";
        } else {
            mensagem.style.color = "red";
        }

        // Esconde a mensagem depois de 5 segundos
        setTimeout(() => {
            mensagem.style.display = "none";
        }, 5000);
    }
});