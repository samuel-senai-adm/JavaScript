let botao = document.getElementById("buscarUsuarios");
let resultado = document.getElementById("resultado");
let idUsuario = document.getElementById("idUsuario");
// botao.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(resposta => resposta.json())
//         .then(dados => {
//             resultado.innerHTML = "";
//             dados.forEach(usuario => {
//                 resultado.innerHTML += `
//                 <p>
//                     <strong>Nome:</strong> ${usuario.name} <br>
//                     ${usuario.email} 
//                 </p>
//                 <hr>
//                 `;
//             });
//         })
//         .catch(erro => {
//             console.log("Erro: ", erro);
//         });
// });

// async / await
// botao.addEventListener("click", async () => {
//     try {
//         const resposta = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const dados = await resposta.json();

//         resultado.innerHTML = "";

//         dados.forEach(usuario => {

//             resultado.innerHTML += `
//             <p>
//                 <strong>Nome:</strong> ${usuario.name} <br>
//                 ${usuario.email}
//             </p>
//             <hr>

//             `;

//         });

//     } catch (erro) {
//         resultado.innerHTML = "Ocorreu um erro ao buscar os usuários.";
//         console.log("Erro: ", erro);
//     }
// });


// com campo de busca
botao.addEventListener("click", async () => {
    const id = idUsuario.value;

    if (id === "") {
        resultado.innerHTML = "Por favor, insira um ID de usuário.";
        return;
    }

    try {

        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

            resultado.innerHTML = `
            <p>
                <strong>Nome:</strong> ${dados.name} <br>
                Email: ${dados.email}
                Cidade: ${dados.address.city}
                Telefone: ${dados.phone}
            </p>
            <hr>
        `;

    } catch (erro) {
        resultado.innerHTML = "Ocorreu um erro ao buscar os usuários.";
        console.log("Erro: ", erro);
    }
});


