document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "América y sus Capitales";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/a9mIOCYBTbA"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la capital de Canadá?",
    options: [
      "a) Ottawa",
      "b) Washington",
      "c) Ciudad de México",
      "d) Belmopán"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de Honduras?",
    options: [
      "a) Managua",
      "b) San Salvador",
      "c) Tegucigalpa",
      "d) San José"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Venezuela?",
    options: [
      "a) Bogotá",
      "b) Caracas",
      "c) Lima",
      "d) Santiago"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la capital de Ecuador?",
    options: [
      "a) Quito",
      "b) Buenos Aires",
      "c) Asunción",
      "d) Paramaribo"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de Argentina?",
    options: [
      "a) Sucre",
      "b) Montevideo",
      "c) Lima",
      "d) Buenos Aires"
    ],
    correctAnswer: 3
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