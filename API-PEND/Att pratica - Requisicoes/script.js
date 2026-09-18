// ========================================
// PERSONAGENS - BUSCAR POR ID
// ========================================

let botaoPersonagem = document.getElementById("buscarPersonagem");
let resultadoPersonagem = document.getElementById("resultadoPersonagem");
let idPersonagem = document.getElementById("idPersonagem");

botaoPersonagem.addEventListener("click", async () => {

    const id = idPersonagem.value;

    if (id === "") {
        resultadoPersonagem.innerHTML =
            "Por favor, insira um ID.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/characters/${id}`
        );

        if (!resposta.ok) {
            resultadoPersonagem.innerHTML =
                "Personagem não encontrado.";

            return;
        }

        const dados = await resposta.json();

        resultadoPersonagem.innerHTML = `
            <p>
                <strong>Nome:</strong> ${dados.name} <br>
                <strong>ID:</strong> ${dados.id}
            </p>

            <hr>
        `;

    } catch (erro) {

        resultadoPersonagem.innerHTML =
            "Ocorreu um erro ao buscar o personagem.";

        console.log("Erro: ", erro);
    }

});


// ========================================
// PERSONAGENS - BUSCAR POR NOME
// ========================================

let botaoPersonagemNome =
    document.getElementById("buscarPersonagemNome");

let nomePersonagem =
    document.getElementById("nomePersonagem");

botaoPersonagemNome.addEventListener("click", async () => {

    const nome = nomePersonagem.value;

    if (nome === "") {
        resultadoPersonagem.innerHTML =
            "Por favor, insira um nome.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/characters?name=${nome}`
        );

        if (!resposta.ok) {
            resultadoPersonagem.innerHTML =
                "Personagem não encontrado.";

            return;
        }

        const dados = await resposta.json();

        resultadoPersonagem.innerHTML = "";

        dados.characters.forEach(personagem => {

            resultadoPersonagem.innerHTML += `
                <p>
                    <strong>Nome:</strong> ${personagem.name} <br>
                    <strong>ID:</strong> ${personagem.id}
                </p>

                <hr>
            `;

        });

    } catch (erro) {

        resultadoPersonagem.innerHTML =
            "Ocorreu um erro ao buscar o personagem.";

        console.log("Erro: ", erro);
    }

});


// ========================================
// CLÃS - BUSCAR POR ID
// ========================================

let botaoCla = document.getElementById("buscarCla");
let resultadoCla = document.getElementById("resultadoCla");
let idCla = document.getElementById("idCla");

botaoCla.addEventListener("click", async () => {

    const id = idCla.value;

    if (id === "") {
        resultadoCla.innerHTML =
            "Por favor, insira um ID.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/clans/${id}`
        );

        if (!resposta.ok) {
            resultadoCla.innerHTML =
                "Clã não encontrado.";

            return;
        }

        const dados = await resposta.json();

        resultadoCla.innerHTML = `
            <p>
                <strong>Nome:</strong> ${dados.name} <br>
                <strong>ID:</strong> ${dados.id}
            </p>

            <hr>
        `;

    } catch (erro) {

        resultadoCla.innerHTML =
            "Ocorreu um erro ao buscar o clã.";

        console.log("Erro: ", erro);
    }

});


// ========================================
// CLÃS - BUSCAR POR NOME
// ========================================

let botaoClaNome =
    document.getElementById("buscarClaNome");

let nomeCla =
    document.getElementById("nomeCla");

botaoClaNome.addEventListener("click", async () => {

    const nome = nomeCla.value;

    if (nome === "") {
        resultadoCla.innerHTML =
            "Por favor, insira um nome.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/clans?name=${nome}`
        );

        if (!resposta.ok) {
            resultadoCla.innerHTML =
                "Clã não encontrado.";

            return;
        }

        const dados = await resposta.json();

        resultadoCla.innerHTML = "";

        dados.clans.forEach(cla => {

            resultadoCla.innerHTML += `
                <p>
                    <strong>Nome:</strong> ${cla.name} <br>
                    <strong>ID:</strong> ${cla.id}
                </p>

                <hr>
            `;

        });

    } catch (erro) {

        resultadoCla.innerHTML =
            "Ocorreu um erro ao buscar o clã.";

        console.log("Erro: ", erro);
    }

});


// ========================================
// VILAS - BUSCAR POR ID
// ========================================

let botaoVila = document.getElementById("buscarVila");
let resultadoVila = document.getElementById("resultadoVila");
let idVila = document.getElementById("idVila");

botaoVila.addEventListener("click", async () => {

    const id = idVila.value;

    if (id === "") {
        resultadoVila.innerHTML =
            "Por favor, insira um ID.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/villages/${id}`
        );

        if (!resposta.ok) {
            resultadoVila.innerHTML =
                "Vila não encontrada.";

            return;
        }

        const dados = await resposta.json();

        resultadoVila.innerHTML = `
            <p>
                <strong>Nome:</strong> ${dados.name} <br>
                <strong>ID:</strong> ${dados.id}
            </p>

            <hr>
        `;

    } catch (erro) {

        resultadoVila.innerHTML =
            "Ocorreu um erro ao buscar a vila.";

        console.log("Erro: ", erro);
    }

});


// ========================================
// VILAS - BUSCAR POR NOME
// ========================================

let botaoVilaNome =
    document.getElementById("buscarVilaNome");

let nomeVila =
    document.getElementById("nomeVila");

botaoVilaNome.addEventListener("click", async () => {

    const nome = nomeVila.value;

    if (nome === "") {
        resultadoVila.innerHTML =
            "Por favor, insira um nome.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/villages?name=${nome}`
        );

        if (!resposta.ok) {
            resultadoVila.innerHTML =
                "Vila não encontrada.";

            return;
        }

        const dados = await resposta.json();

        resultadoVila.innerHTML = "";

        dados.villages.forEach(vila => {

            resultadoVila.innerHTML += `
                <p>
                    <strong>Nome:</strong> ${vila.name} <br>
                    <strong>ID:</strong> ${vila.id}
                </p>

                <hr>
            `;

        });

    } catch (erro) {

        resultadoVila.innerHTML =
            "Ocorreu um erro ao buscar a vila.";

        console.log("Erro: ", erro);
    }

});


// ========================================
// KEKKEI-GENKAI - BUSCAR POR ID
// ========================================

let botaoKekkei =
    document.getElementById("buscarKekkei");

let resultadoKekkei =
    document.getElementById("resultadoKekkei");

let idKekkei =
    document.getElementById("idKekkei");

botaoKekkei.addEventListener("click", async () => {

    const id = idKekkei.value;

    if (id === "") {
        resultadoKekkei.innerHTML =
            "Por favor, insira um ID.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/kekkei-genkai/${id}`
        );

        if (!resposta.ok) {
            resultadoKekkei.innerHTML =
                "Kekkei-genkai não encontrada.";

            return;
        }

        const dados = await resposta.json();

        resultadoKekkei.innerHTML = `
            <p>
                <strong>Nome:</strong> ${dados.name} <br>
                <strong>ID:</strong> ${dados.id}
            </p>

            <hr>
        `;

    } catch (erro) {

        resultadoKekkei.innerHTML =
            "Ocorreu um erro ao buscar a Kekkei-genkai.";

        console.log("Erro: ", erro);
    }

});


// ========================================
// KEKKEI-GENKAI - BUSCAR POR NOME
// ========================================

let botaoKekkeiNome =
    document.getElementById("buscarKekkeiNome");

let nomeKekkei =
    document.getElementById("nomeKekkei");

botaoKekkeiNome.addEventListener("click", async () => {

    const nome = nomeKekkei.value;

    if (nome === "") {
        resultadoKekkei.innerHTML =
            "Por favor, insira um nome.";

        return;
    }

    try {

        const resposta = await fetch(
            `https://dattebayo-api.onrender.com/kekkei-genkai?name=${nome}`
        );

        if (!resposta.ok) {
            resultadoKekkei.innerHTML =
                "Kekkei-genkai não encontrada.";

            return;
        }

        const dados = await resposta.json();

        resultadoKekkei.innerHTML = "";

        dados["kekkei-genkai"].forEach(kekkei => {

            resultadoKekkei.innerHTML += `
                <p>
                    <strong>Nome:</strong> ${kekkei.name} <br>
                    <strong>ID:</strong> ${kekkei.id}
                </p>

                <hr>
            `;

        });

    } catch (erro) {

        resultadoKekkei.innerHTML =
            "Ocorreu um erro ao buscar a Kekkei-genkai.";

        console.log("Erro: ", erro);
    }

});