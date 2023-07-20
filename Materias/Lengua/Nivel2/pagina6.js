document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "El uso correcto de los signos de puntuación.";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/LtP_UkSj5ho"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "Los signos de puntuación nos ayudan a:",
    options: [
      "a) Leer y escribir mejor",
      "b) Escuchar y hablar mejor",
      "c) Ver y oír mejor",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Leer y escribir mejor
  },
  {
    question: "¿Cuál es la función de los signos de puntuación?",
    options: [
      "a) Decorar y embellecer el texto",
      "b) Organizar y estructurar el texto",
      "c) Cambiar el significado del texto",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Organizar y estructurar el texto
  },
  {
    question: "¿Qué se indica con la exclamación '¡Mira!'?",
    options: [
      "a) Sorpresa o énfasis",
      "b) Pregunta o duda",
      "c) Afirmación o aprobación",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Sorpresa o énfasis
  },
  {
    question: "¿Cuál es la función de los signos de interrogación?",
    options: [
      "a) Ninguna de las anteriores",
      "b) Indicar una afirmación",
      "c) Indicar una orden",
      "d) Indicar una pregunta"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Indicar una pregunta
  },
  {
    question: "¿Cuál es la función de las comas en el texto 'María, Gisela y José María'?",
    options: [
      "a) Separar elementos o palabras en una enumeración",
      "b) Indicar una pausa breve en la lectura",
      "c) Señalar una aclaración o inciso",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Separar elementos o palabras en una enumeración
  },
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