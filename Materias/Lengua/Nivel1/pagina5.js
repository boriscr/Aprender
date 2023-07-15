document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Coherencia y Cohesión";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/1b4zfLc5M54"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la finalidad de la coherencia en un texto?",
    options: [
      "a) Organizar las ideas de manera clara y precisa",
      "b) Evitar contradicciones entre las ideas",
      "c) Establecer una conexión entre las ideas",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  },
  {
    question: "¿Qué se entiende por coherencia global en un texto?",
    options: [
      "a) La relación entre oraciones y párrafos",
      "b) La idea clara y el tema preciso en todo el texto",
      "c) La relación entre ideas a lo largo de un texto extenso",
      "d) La coherencia entre las partes de un texto"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) La relación entre ideas a lo largo de un texto extenso
  },
  {
    question: "¿Cuál es la función de la cohesión en un texto?",
    options: [
      "a) Proporcionar sentido a los enunciados individuales",
      "b) Establecer conexiones entre las palabras del texto",
      "c) Facilitar la comprensión del texto",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  },
  {
    question: "¿Cuál de los siguientes mecanismos de cohesión se utiliza para evitar la repetición de un tema en particular?",
    options: [
      "a) Referencia",
      "b) Sustitución",
      "c) Elipsis",
      "d) Reiteración"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Sustitución
  },
  {
    question: "¿Cuál es la función de las conjunciones en la cohesión del texto?",
    options: [
      "a) Interrelacionar las premisas",
      "b) Establecer relaciones temporales",
      "c) Indicar relaciones causales",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina4.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "../Nivel2/Pagina1.html";
     }