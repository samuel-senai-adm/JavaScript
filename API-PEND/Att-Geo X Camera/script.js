// localização
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude: ", posicao.coords.latitude);
        console.log("Longitude: ", posicao.coords.longitude);
        console.log("Precisão: ", posicao.coords.accuracy);
    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
    }
);

// câmera
navigator.mediaDevices.getUserMedia({
    video: true, //audio: true
})
.then(function(stream) {
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Não foi possível acessar a câmera.", erro);
});

const botaoLocalizacao = document.querySelector("#mostrarLocalizacao");
const resultadoLocalizacao = document.querySelector("#resultadoLocalizacao");

botaoLocalizacao.addEventListener("click", function () {

    navigator.geolocation.getCurrentPosition(

        function (posicao) {

            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;
            const precisao = posicao.coords.accuracy;

            resultadoLocalizacao.innerHTML = `
                <p><strong>Latitude:</strong> ${latitude}</p>
                <p><strong>Longitude:</strong> ${longitude}</p>
                <p><strong>Precisão:</strong> ${precisao.toFixed(2)} metros</p>
            `;

        },

        function (erro) {

            resultadoLocalizacao.innerHTML = `
                <p>Não foi possível obter sua localização.</p>
            `;

            console.log("Erro ao obter localização:", erro);
        }

    );

});
const botaoRegistrar = document.querySelector("#registrar");

botaoRegistrar.addEventListener("click", function () {
    alert("Presença registrada com sucesso!");
});