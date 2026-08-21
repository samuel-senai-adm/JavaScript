const nome = document.querySelector('#nome');
const salvar = document.querySelector('#salvar');
const recuperar = document.querySelector('#recuperar');
const excluir = document.querySelector('#excluir');

const resultado = document.querySelector('#resultado');

salvar.addEventListener('click', function () {

    localStorage.setItem('nome', nome.value);

    resultado.textContent = "Nome Salvo!";
});

//RECUPERAR
recuperar.addEventListener('click', function () {
    const nomeRecuperado = localStorage.getItem('nome');

    resultado.textContent = `Nome Armazenado/Recuperado: ${nomeRecuperado}`;
});

//EXCLUIR
excluir.addEventListener('click', function () {
    localStorage.removeItem('nome');

    resultado.textContent = "Nome Excluído!";
});
