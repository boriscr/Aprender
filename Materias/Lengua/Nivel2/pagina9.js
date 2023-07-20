document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Análisis de texto";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/f3_-qC9ifXY"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es el primer paso para hacer un análisis de un texto?",
    options: [
      "a) Hacer una lectura preliminar",
      "b) Realizar una lectura comprensiva",
      "c) Iniciar el análisis interno",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Hacer una lectura preliminar
  },
  {
    question: "¿Qué se debe hacer durante la lectura preliminar de un texto?",
    options: [
      "a) Leer sin hacer nada para contextualizar y desarrollar un conocimiento previo del texto",
      "b) Subrayar ideas importantes y agregar anotaciones o notas al lado de la hoja",
      "c) Destacar las ideas importantes y subrayar cosas que consideres deben ser subrayadas",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  },
  {
    question: "¿Cuáles son los tipos de historias que un autor puede utilizar para contar la historia?",
    options: [
      "a) Narrativa, pragmática, materialista, ideológica y genética",
      "b) Narrativa, pragmática",
      "c) Narrativa, ideológica",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Narrativa, pragmática y genética
  },
  {
    question: "¿Qué se debe hacer durante el análisis interno de un texto?",
    options: [
      "a) Definir los términos que no se comprenden y separar las ideas básicas de las secundarias",
      "b) Entender lo que quiere reflejar el autor con su obra y qué intención tiene",
      "c) Identificar la metodología utilizada por el autor",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  },
  {
    question: "¿Cuál es la finalidad del análisis de un texto?",
    options: [
      "a) Separar elementos fundamentales de un texto para comprenderlo mejor",
      "b) Comprender el texto por partes y luego asociar los elementos",
      "c) Utilizar métodos como el de Tim Ferrys y el aprendizaje asociativo",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina8.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina10.html";
     }