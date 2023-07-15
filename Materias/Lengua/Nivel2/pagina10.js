document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "TEXTO ARGUMENTATIVO";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/IS3yTxP6EEk"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es el propósito comunicativo de un texto argumentativo?",
    options: [
      "a) Entretener al lector",
      "b) Informar al lector",
      "c) Convencer o persuadir al lector sobre un punto de vista",
      "d) Expresar emociones al lector"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Convencer o persuadir al lector sobre un punto de vista
  },
  {
    question: "¿Cuál es la estructura sugerida para un texto argumentativo?",
    options: [
      "a) Introducción, desarrollo argumental y conclusión",
      "b) Desarrollo argumental, conclusión y reflexión personal",
      "c) Introducción, cuerpo y conclusión",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Introducción, desarrollo argumental y conclusión
  },
  {
    question: "¿Qué se debe hacer en la introducción de un texto argumentativo?",
    options: [
      "a) Definir el tema a tratar y plantear la tesis",
      "b) Exponer los argumentos que sustentan la tesis",
      "c) Cerrar el texto y realizar una síntesis de lo expuesto",
      "d) Todas las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Definir el tema a tratar y plantear la tesis
  },
  {
    question: "¿Qué se debe hacer en el desarrollo argumental de un texto argumentativo?",
    options: [
      "a) Exponer los argumentos que sustentan la tesis",
      "b) Realizar una síntesis de lo expuesto en el texto",
      "c) Cerrar el texto y reafirmar la tesis",
      "d) Todas las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Exponer los argumentos que sustentan la tesis
  },
  {
    question: "¿Cuál es la función de la conclusión en un texto argumentativo?",
    options: [
      "a) Exponer los argumentos que sustentan la tesis",
      "b) Realizar una síntesis de todo lo expuesto y reafirmar la tesis",
      "c) Definir el tema a tratar y plantear la tesis",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Realizar una síntesis de todo lo expuesto y reafirmar la tesis
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina9.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "../../Finalizado/Finalizado.html";
     }