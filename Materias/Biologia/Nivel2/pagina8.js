document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Ciclos Biogeoquímicos";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/ETle6KejZ0M"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué son los ciclos biogeoquímicos?",
    options: [
      "a) Interacciones entre elementos vivos y no vivos en los ecosistemas",
      "b) Procesos químicos que ocurren en los ciclos de vida de los seres vivos",
      "c) Transformación y circulación de energía en los ecosistemas",
      "d) Movimiento del agua a través del planeta"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Interacciones entre elementos vivos y no vivos en los ecosistemas
  },
  {
    question: "¿Cuál es uno de los ciclos biogeoquímicos más importantes?",
    options: [
      "a) Ciclo hidrológico",
      "b) Ciclo del nitrógeno",
      "c) Ciclo del carbono",
      "d) Ciclo del oxígeno"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Ciclo hidrológico
  },
  {
    question: "¿En qué consiste el ciclo hidrológico?",
    options: [
      "a) Circulación del carbono en la tierra, océanos y atmósfera",
      "b) Absorción de nitrógeno por los seres vivos",
      "c) Transformación y circulación del agua en todo el planeta",
      "d) Intercambio de oxígeno entre los seres vivos y la atmósfera"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Transformación y circulación del agua en todo el planeta
  },
  {
    question: "¿Cuál es uno de los ciclos biogeoquímicos más complejos?",
    options: [
      "a) Ciclo del carbono",
      "b) Ciclo del fósforo",
      "c) Ciclo del oxígeno",
      "d) Ciclo del azufre"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Ciclo del azufre
  },
  {
    question: "¿Qué limita el crecimiento de los ecosistemas en relación al ciclo del fósforo?",
    options: [
      "a) La escasez de fósforo en el planeta",
      "b) La liberación de oxígeno por los seres vivos",
      "c) El ciclo lento del carbono",
      "d) La circulación del agua en los ecosistemas"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) La escasez de fósforo en el planeta
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