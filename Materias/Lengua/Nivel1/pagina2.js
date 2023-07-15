document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "INTRODUCCIÓN, DESARROLLO Y CONCLUSIÓN";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/D0YGkMjGV7k"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué tipo de texto narra hechos pasados lejanos o cercanos?",
    options: [
      "a) Descriptivo",
      "b) Instructivo",
      "c) Histórico",
      "d) Poético"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Histórico
  },
  {
    question: "¿Cuál es uno de los elementos que debe contener la estructura de un relato histórico?",
    options: [
      "a) Título",
      "b) Diálogo",
      "c) Figuras literarias",
      "d) Personajes"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Título
  },
  {
    question: "¿Qué se incluye en la bibliografía de un relato histórico?",
    options: [
      "a) Fuentes consultadas",
      "b) Resumen de la historia",
      "c) Relaciones de antecedentes y consecuentes",
      "d) Adverbios de tiempo"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Fuentes consultadas
  },
  {
    question: "¿Qué se busca al reescribir relatos históricos?",
    options: [
      "a) Recuperar el orden de los acontecimientos",
      "b) Agregar figuras literarias",
      "c) Cambiar la conclusión del relato",
      "d) Utilizar adverbios de tiempo"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Recuperar el orden de los acontecimientos
  },
  {
    question: "¿Qué se necesita para desarrollar un relato histórico?",
    options: [
      "a) Hechos centrales y sus relaciones",
      "b) Recursos visuales",
      "c) Emociones y sentimientos",
      "d) Figuras literarias"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Hechos centrales y sus relaciones
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina1.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina3.html";
     }