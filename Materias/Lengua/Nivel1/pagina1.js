document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Tipos de textos: Narrativo, argumentativo, descriptivo, expositivo";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/5r0x6E-oU3M"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué tipo de texto se caracteriza por la participación de dos o más personas hablando en torno a un tema determinado?",
    options: [
      "a) Diálogo",
      "b) Narración",
      "c) Descripción",
      "d) Exposición"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Diálogo
  },
  {
    question: "¿Cuál es la tipología textual que cuenta una serie de acciones o hechos que ocurren en un escenario y durante un tiempo determinado?",
    options: [
      "a) Narración",
      "b) Descripción",
      "c) Exposición",
      "d) Argumentación"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Narración
  },
  {
    question: "¿Cuál es la tipología textual que se limita a reflejar características de lugares, personas o tiempos?",
    options: [
      "a) Argumentación",
      "b) Exposición",
      "c) Descripción",
      "d) Instrucción"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Descripción
  },
  {
    question: "¿Cuál es el tipo de texto que busca convencer y opinar sobre una idea utilizando razones y argumentos?",
    options: [
      "a) Argumentación",
      "b) Exposición",
      "c) Diálogo",
      "d) Narración"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Argumentación
  },
  {
    question: "¿Qué tipo de texto contiene instrucciones para realizar una acción o seguir un proceso?",
    options: [
      "a) Exposición",
      "b) Descripción",
      "c) Diálogo",
      "d) Instrucción"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Instrucción
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "../Home.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina2.html";
     }