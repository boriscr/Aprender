document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "🌎 ¿Qué son las Actividades Económicas? ";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/dRjzjihvTpw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué actividades económicas se originan en el sector primario?",
    options: [
      "a) Industria y construcción.",
      "b) Agricultura, ganadería, pesca y minería.",
      "c) Distribución y comercialización.",
      "d) Transporte, salud, educación y turismo."
    ],
    correctAnswer: 1
  },
  {
    question: "¿En qué sector se transforman las materias primas en productos?",
    options: [
      "a) Sector primario.",
      "b) Sector secundario.",
      "c) Sector terciario.",
      "d) Sector industrial."
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuáles son ejemplos de actividades económicas terciarias?",
    options: [
      "a) Agricultura y ganadería.",
      "b) Industria y construcción.",
      "c) Transporte y turismo.",
      "d) Minería y pesca."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué sector se encarga de la distribución y comercialización de productos elaborados?",
    options: [
      "a) Sector primario.",
      "b) Sector secundario.",
      "c) Sector terciario.",
      "d) Ninguna"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál de las siguientes opciones describe una actividad del sector secundario?",
    options: [
      "a) Obtención de leche.",
      "b) Transformación de materias primas en productos.",
      "c) Distribución y comercialización de productos.",
      "d) Prestación de servicios de transporte."
    ],
    correctAnswer: 1
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