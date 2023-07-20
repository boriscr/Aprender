document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La Revolución Industrial";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/3LQAnFEADl4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Dónde tuvo lugar la Revolución Industrial?",
    options: [
      "a) Estados Unidos",
      "b) Inglaterra",
      "c) Francia",
      "d) España"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál fue el principal avance tecnológico de la Revolución Industrial?",
    options: [
      "a) Máquina de vapor",
      "b) Lámpara de gas",
      "c) Ferrocarril",
      "d) Barco de vapor"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué clase social se benefició principalmente de la Revolución Industrial?",
    options: [
      "a) Aristocracia terrateniente",
      "b) Proletariado",
      "c) Burguesía",
      "d) Súbditos convertidos en ciudadanos"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál fue la consecuencia demográfica de la Revolución Industrial en Inglaterra?",
    options: [
      "a) Reducción de la población",
      "b) Estancamiento demográfico",
      "c) Duplicación de la población",
      "d) Emigración masiva"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué sector se vio beneficiado por la aplicación del vapor en la Revolución Industrial?",
    options: [
      "a) Agricultura",
      "b) Minería",
      "c) Industria textil",
      "d) Industria textil y Minería"
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