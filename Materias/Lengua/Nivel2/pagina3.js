document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Concordancia entre sujeto y verbo";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/9OLXPF6F__w"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es la concordancia de género y número?",
    options: [
      "a) Cuando el sujeto y el verbo tienen la misma persona",
      "b) Cuando el sujeto y el verbo tienen la misma acción",
      "c) Cuando el sujeto y el verbo tienen la misma concordancia",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Cuando el sujeto y el verbo tienen la misma concordancia
  },
  {
    question: "¿Cuál es el sujeto en la oración 'Julia estudia en casa'?",
    options: [
      "a) Julia",
      "b) Estudia",
      "c) Casa",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Julia
  },
  {
    question: "¿Cuál es el verbo en la oración 'Julia estudia en casa'?",
    options: [
      "a) Julia",
      "b) Estudia",
      "c) Casa",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Estudia
  },
  {
    question: "¿Cuál es la forma correcta de concordancia en la oración 'Ella jugamos con un rompecabezas'?",
    options: [
      "a) Ella juega",
      "b) Ella jugamos",
      "c) Ella juegan",
      "d) Ella juegue"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Ella juega
  },
  {
    question: "¿Cuál es la forma correcta de concordancia en la oración 'El lanza su avión de papel'?",
    options: [
      "a) El lanza",
      "b) El lanzan",
      "c) El lanzas",
      "d) El lanzamos"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) El lanza
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina2.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina4.html";
     }