document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "FUNCIONES CUADRÁTICAS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/gnAdna_tLK0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es el plano cartesiano?",
    options: [
      "a) Una recta numérica.",
      "b) Un sistema de coordenadas formado por dos rectas numéricas perpendiculares.",
      "c) Un sistema de coordenadas formado por tres rectas numéricas perpendiculares.",
      "d) Un sistema de coordenadas formado por dos rectas paralelas."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Un sistema de coordenadas formado por dos rectas numéricas perpendiculares.
  },
  {
    question: "¿Cómo se llama la recta horizontal en el plano cartesiano?",
    options: [
      "a) Abscisas o eje de las x.",
      "b) Ordenada o eje de las y.",
      "c) Verticales o eje z.",
      "d) Origen."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Abscisas o eje de las x.
  },
  {
    question: "¿Cómo se llama la recta vertical en el plano cartesiano?",
    options: [
      "a) Abscisas o eje de las x.",
      "b) Ordenada o eje de las y.",
      "c) Verticales o eje z.",
      "d) Origen."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Ordenada o eje de las y.
  },
  {
    question: "¿Qué representa el vértice de una parábola?",
    options: [
      "a) El punto más alto de la parábola.",
      "b) El punto más bajo de la parábola.",
      "c) El punto de intersección entre la parábola y el eje de simetría.",
      "d) El punto de intersección entre la parábola y el eje de las x."
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) El punto de intersección entre la parábola y el eje de simetría.
  },
  {
    question: "¿Cuál es la fórmula para encontrar el vértice de una parábola cuadrática?",
    options: [
      "a) x = -b / 2a",
      "b) x = -b / a",
      "c) x = -a / 2b",
      "d) x = -a / b"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) x = -b / 2a.
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina6.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina8.html";
     }