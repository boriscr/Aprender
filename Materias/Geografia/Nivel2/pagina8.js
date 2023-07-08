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
      "Roma",
      "Madrid",
      "París",
      "Berlín",
      "Viena"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de España?",
    options: [
      "Atenas",
      "Madrid",
      "Lisboa",
      "Dublín",
      "Roma"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la capital de Alemania?",
    options: [
      "Viena",
      "París",
      "Berlín",
      "Budapest",
      "Roma"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Francia?",
    options: [
      "Roma",
      "Londres",
      "París",
      "Berna",
      "Madrid"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Turquía?",
    options: [
      "Ankara",
      "Moscú",
      "Estocolmo",
      "Atenas",
      "Roma"
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