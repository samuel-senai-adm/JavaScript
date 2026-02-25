document.getElementById("counteudo").innerHTML = "<p>Olá, mundo DOM!</p>";
document.getElementById("mensagem").textContent = "Texto simples, sem HTML(textContent).";
document.getElementById("foto").setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnr0ccxDPw1-oLgosOLgUgieAI1xl7pQXFOw&s")

let url = document.getElementById("link").getAttribute("href");
console.log(url); //https://example.com

document.getElementById("caixa").style.backgroundColor = "pink";

document.getElementById("alerta").classList.add("destaque");
