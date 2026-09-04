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