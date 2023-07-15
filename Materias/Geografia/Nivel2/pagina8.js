document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "EUROPA 🌍 Paises y Capitales Banderas del Mundo";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/hFUwORfpyTU"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la capital de Italia?",
    options: [
      "a) Roma",
      "b) Madrid",
      "c) París",
      "d) Berlín",
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de España?",
    options: [
      "a) Atenas",
      "b) Madrid",
      "c) Lisboa",
      "d) Dublín",
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la capital de Alemania?",
    options: [
      "a) Viena",
      "b) París",
      "c) Berlín",
      "d) Budapest",
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Francia?",
    options: [
      "a) Roma",
      "b) Londres",
      "c) París",
      "d) Berna",
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Turquía?",
    options: [
      "a) Ankara",
      "b) Moscú",
      "c) Estocolmo",
      "d) Atenas",
    ],
    correctAnswer: 0
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina7.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina9.html";
     }