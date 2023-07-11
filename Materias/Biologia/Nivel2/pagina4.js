document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Selección natural";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/Cz6VTtlQksE"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué causa la diversidad de especies en nuestro planeta?",
    options: [
      "a) Evolución",
      "b) Mutaciones",
      "c) Adaptación al medio",
      "d) Reproducción"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Evolución
  },
  {
    question: "¿Qué son las mutaciones en los seres vivos?",
    options: [
      "a) Cambios en los rasgos heredados",
      "b) Enfermedades mortales",
      "c) Adaptaciones al entorno",
      "d) Reproducción de características"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Cambios en los rasgos heredados
  },
  {
    question: "¿Cuál es el proceso por el cual los seres vivos mejor adaptados sobreviven y se reproducen?",
    options: [
      "a) Selección natural",
      "b) Mutaciones genéticas",
      "c) Herencia de rasgos",
      "d) Competencia por recursos"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Selección natural
  },
  {
    question: "¿Qué ocurre con los conejos que tienen rasgos desfavorables en un entorno específico?",
    options: [
      "a) Se reproducen más que los demás",
      "b) Sobreviven y se adaptan rápidamente",
      "c) Son más fuertes y resistentes",
      "d) Se reproducen menos y sus rasgos disminuyen"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Se reproducen menos y sus rasgos disminuyen
  },
  {
    question: "¿Cuál es la relación entre las mutaciones y la selección natural en la evolución de las especies?",
    options: [
      "a) Las mutaciones generan la selección natural",
      "b) La selección natural causa mutaciones",
      "c) Las mutaciones y la selección natural son independientes",
      "d) Las mutaciones son seleccionadas por la selección natural"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Las mutaciones son seleccionadas por la selección natural
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina3.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina5.html";
     }