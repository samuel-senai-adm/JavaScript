const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');
//retangulos
// contexto.fillRect(50, 50, 150, 100);
// contexto.strokeRect(250, 50, 150, 100);

//linha
// contexto.beginPath();
// contexto.moveTo(10, 0);
// contexto.lineTo(50, 200);
// contexto.lineTo(640, 0);
// contexto.stroke();

// Deixa os traços mais grossos e arredondados
contexto.lineWidth = 4;
contexto.lineCap = "round";

// cabeça
contexto.beginPath();
contexto.arc(262, 140, 10, 0, Math.PI * 2);
contexto.stroke();

// corpo
contexto.beginPath();
contexto.moveTo(258, 150);
contexto.lineTo(260, 200);
contexto.stroke();

// perna esquerda
contexto.beginPath();
contexto.moveTo(260, 200);
contexto.lineTo(240, 220);
contexto.lineTo(240, 245);
contexto.stroke();

// perna direita
contexto.beginPath();
contexto.moveTo(260, 200);
contexto.lineTo(280, 220);
contexto.lineTo(280, 245);
contexto.stroke();

// braço esquerdo
contexto.beginPath();
contexto.moveTo(260, 150);
contexto.lineTo(250, 170);
contexto.lineTo(270, 180);
contexto.stroke();

// braço direito
contexto.beginPath();
contexto.moveTo(260, 150);
contexto.lineTo(270, 170);
contexto.lineTo(290, 150);
contexto.stroke();


