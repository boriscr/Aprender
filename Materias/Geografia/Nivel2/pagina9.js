document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "AFRICA 🌍 Paises Capitales";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/qh1-zB02Z6M"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la capital de Angola?",
    options: [
      "a) Luanda",
      "b) Argel",
      "c) Porto Novo",
      "d) Gaborone"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de Egipto?",
    options: [
      "a) Luanda",
      "b) Argel",
      "c) Cairo",
      "d) Asmara"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Marruecos?",
    options: [
      "a) Rabat",
      "b) Bujumbura",
      "c) Cairo",
      "d) Accra"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de Nigeria?",
    options: [
      "a) Luanda",
      "b) Lagos",
      "c) Accra",
      "d) Abuja"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es la capital de Sudáfrica?",
    options: [
      "a) Luanda",
      "b) Pretoria",
      "c) Accra",
      "d) Lisboa"
    ],
    correctAnswer: 1
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