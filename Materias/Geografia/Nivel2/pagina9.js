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
      "Luanda",
      "Argel",
      "Porto Novo",
      "Gaborone",
      "Minsk"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de Egipto?",
    options: [
      "Luanda",
      "Argel",
      "Cairo",
      "Asmara",
      "Nicosia"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Marruecos?",
    options: [
      "Rabat",
      "Bujumbura",
      "Cairo",
      "Accra",
      "Lisboa"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de Nigeria?",
    options: [
      "Luanda",
      "Lagos",
      "Accra",
      "Abuja",
      "Dakar"
    ],
    correctAnswer: 3
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