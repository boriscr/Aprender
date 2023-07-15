document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Verbos regulares e irregulares";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/7Ac7wFUybXI"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué son los verbos regulares?",
    options: [
      "a) Verbos que mantienen la misma raíz al ser conjugados",
      "b) Verbos que varían al ser conjugados",
      "c) Verbos que no se conjugan",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Verbos que mantienen la misma raíz al ser conjugados
  },
  {
    question: "¿Qué son los verbos irregulares?",
    options: [
      "a) Verbos que mantienen la misma raíz al ser conjugados",
      "b) Verbos que varían al ser conjugados",
      "c) Verbos que no se conjugan",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Verbos que varían al ser conjugados
  },
  {
    question: "¿Cuál es un ejemplo de verbo regular?",
    options: [
      "a) Amar",
      "b) Caber",
      "c) Saltar",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Amar
  },
  {
    question: "¿Cuál es un ejemplo de verbo irregular?",
    options: [
      "a) Amar",
      "b) Caber",
      "c) Saltar",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Caber
  },
  {
    question: "¿Qué característica diferencia a los verbos regulares de los verbos irregulares?",
    options: [
      "a) Los verbos regulares mantienen la misma raíz en todas las conjugaciones",
      "b) Los verbos irregulares mantienen la misma raíz en todas las conjugaciones",
      "c) Los verbos regulares no se conjugan",
      "d) Los verbos irregulares no se conjugan"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Los verbos regulares mantienen la misma raíz en todas las conjugaciones
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