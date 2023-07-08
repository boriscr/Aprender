document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La SEGUNDA GUERRA MUNDIAL";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/sRi0bCjnMFs"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál fue el origen de la Segunda Guerra Mundial?",
    options: [
      "a) La invasión de Polonia por parte de Alemania",
      "b) El ataque a Pearl Harbor",
      "c) El bombardeo de Hiroshima y Nagasaki",
      "d) La firma del Tratado de Versalles"
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué país lideró las potencias del Eje durante la Segunda Guerra Mundial?",
    options: [
      "a) Alemania",
      "b) Estados Unidos",
      "c) Francia",
      "d) Italia"
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál fue la estrategia utilizada por Alemania en la conquista de Francia?",
    options: [
      "a) Guerra relámpago",
      "b) Guerra de trincheras",
      "c) Guerra de guerrillas",
      "d) Guerra naval"
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál fue el resultado de la Batalla de Inglaterra?",
    options: [
      "a) Victoria de Alemania",
      "b) Victoria de Estados Unidos",
      "c) Victoria de Inglaterra",
      "d) Empate"
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál fue el objetivo principal de la Operación Barbarroja?",
    options: [
      "a) Conquistar Italia",
      "b) Invadir Inglaterra",
      "c) Conquistar la Unión Soviética",
      "d) Liberar Francia"
    ],
    correctAnswer: 2,
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
     window.location.href = "Pagina6.html";
     }