document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "RELACIONES ENTRE LOS SERES VIVOS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/0dHK3TcTtdg"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuáles son los dos tipos de relaciones que pueden existir entre los seres vivos?",
    options: [
      "a) Relaciones de alimentación y de apareamiento",
      "b) Relaciones interespecíficas e intraespecíficas",
      "c) Relaciones simbióticas y de competencia",
      "d) Relaciones de colaboración y de competencia"
    ],
    correctAnswer: 1 // Respuesta correcta: b) Relaciones interespecíficas e intraespecíficas
  },
  {
    question: "¿Cuál es una forma de relación intraespecífica en la que los individuos viven juntos para ayudarse en la defensa y búsqueda de alimentos?",
    options: [
      "a) Asociación gregaria",
      "b) Asociación colonial",
      "c) Asociación social",
      "d) Asociación familiar"
    ],
    correctAnswer: 0 // Respuesta correcta: a) Asociación gregaria
  },
  {
    question: "¿Cuál es un ejemplo de relación interespecífica en la que dos especies se benefician mutuamente?",
    options: [
      "a) Mutualismo",
      "b) Comensalismo",
      "c) Parasitismo",
      "d) Depredación"
    ],
    correctAnswer: 0 // Respuesta correcta: a) Mutualismo
  },
  {
    question: "¿En qué tipo de relación uno de los individuos se beneficia sin perjudicar al otro?",
    options: [
      "a) Comensalismo",
      "b) Mutualismo",
      "c) Parasitismo",
      "d) Depredación"
    ],
    correctAnswer: 0 // Respuesta correcta: a) Comensalismo
  },
  {
    question: "¿En qué tipo de relación un organismo vive a costa del otro y lo perjudica sin causarle la muerte?",
    options: [
      "a) Parasitismo",
      "b) Mutualismo",
      "c) Comensalismo",
      "d) Depredación"
    ],
    correctAnswer: 0 // Respuesta correcta: a) Parasitismo
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina5.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina7.html";
     }