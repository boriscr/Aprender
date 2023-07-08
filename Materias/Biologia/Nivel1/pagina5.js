document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "ADN, Cromosomas y Genes";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/tfDRCSjqqvQ"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la biomolécula que almacena toda la información hereditaria en la célula?",
    options: [
      "Proteínas",
      "Azúcares",
      "Ácido nucleico",
      "Grupos fosfato",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué estructuras condensadas almacenan la información genética en las células eucariotas?",
    options: [
      "Cromatina",
      "Nucleótidos",
      "Organelos",
      "Histonas",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuántos pares de cromosomas tenemos en total?",
    options: [
      "23",
      "46",
      "32",
      "12",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo se llaman los segmentos cortos de ADN que contienen información precisa sobre las características de un ser vivo?",
    options: [
      "Histonas",
      "Nucleótidos",
      "Cromosomas",
      "Genes",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo se denomina el lugar que ocupa un gen en el cromosoma?",
    options: [
      "Cromatina",
      "Locus",
      "Núcleo",
      "And",
    ],
    correctAnswer: 1,
  },
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina4.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "../Nivel2/Pagina1.html";
     }