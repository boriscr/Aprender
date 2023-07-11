document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "LEYES DE LOS EXPONENTES";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/JkjgbByFanA"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la definición de potencia?",
    options: [
      "a) Una forma abreviada de escribir una multiplicación recurrente.",
      "b) Una forma abreviada de escribir una división recurrente.",
      "c) Una forma abreviada de escribir una suma recurrente.",
      "d) Una forma abreviada de escribir una resta recurrente."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Una forma abreviada de escribir una multiplicación recurrente.
  },
  {
    question: "¿Cuál es el resultado de 2^4?",
    options: [
      "a) 2",
      "b) 4",
      "c) 8",
      "d) 16"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) 16
  },
  {
    question: "En la multiplicación de potencias de la misma base, ¿qué se hace con los exponentes?",
    options: [
      "a) Se suman",
      "b) Se restan",
      "c) Se multiplican",
      "d) Se dividen"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Se suman
  },
  {
    question: "¿Cuál es el resultado de (2^2) * (2^3)?",
    options: [
      "a) 4",
      "b) 8",
      "c) 16",
      "d) 32"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) 32
  },
  {
    question: "En la división de potencias de la misma base, ¿qué se hace con los exponentes?",
    options: [
      "a) Se suman",
      "b) Se restan",
      "c) Se multiplican",
      "d) Se dividen"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Se restan
  },
 ]

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