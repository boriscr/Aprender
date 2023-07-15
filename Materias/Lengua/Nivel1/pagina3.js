document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Párrafos, idea principal y secundaria";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/5A3BYRWmg20"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué son los párrafos en un texto?",
    options: [
      "a) Oraciones complementarias",
      "b) Títulos principales",
      "c) Unidades de un discurso",
      "d) Temáticas secundarias"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Unidades de un discurso
  },
  {
    question: "¿Qué elemento debe contener la estructura de un párrafo?",
    options: [
      "a) Título",
      "b) Idea principal",
      "c) Figuras literarias",
      "d) Personajes"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Idea principal
  },
  {
    question: "¿Qué son las ideas secundarias en un párrafo?",
    options: [
      "a) Ideas que complementan la idea principal",
      "b) Oraciones principales del párrafo",
      "c) Temas diferentes al principal",
      "d) Sinónimos de la idea principal"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Ideas que complementan la idea principal
  },
  {
    question: "¿Qué función cumple el punto aparte en un párrafo?",
    options: [
      "a) Dividir un párrafo de otro",
      "b) Indicar una pausa fuerte en la misma oración",
      "c) Aclarar o complementar la información principal",
      "d) Dejar la oración como incompleta o en suspenso"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Dividir un párrafo de otro
  },
  {
    question: "¿Cuál es el signo de puntuación que indica una pausa larga y complementa la información principal?",
    options: [
      "a) Punto y coma",
      "b) Dos puntos",
      "c) Coma",
      "d) Punto suspensivo"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Dos puntos
  }
];

  
//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina2.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina4.html";
     }