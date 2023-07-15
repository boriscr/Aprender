document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Qué son las FIGURAS LITERARIAS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/SlmBEJx-mXU"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué son las figuras retóricas o figuras literarias?",
    options: [
      "a) Recursos visuales en la literatura",
      "b) Expresiones coloquiales",
      "c) Recursos lingüísticos que simplifican la realidad",
      "d) Sensaciones abstractas"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Recursos lingüísticos que simplifican la realidad
  },
  {
    question: "¿Cómo se define la comparación o símil en las figuras retóricas?",
    options: [
      "a) Comparar dos objetos o animales con características humanas",
      "b) Exagerar una idea para dar énfasis",
      "c) Desordenar las frases en una oración",
      "d) Indicar una repetición de sonidos semejantes"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Comparar dos objetos o animales con características humanas
  },
  {
    question: "¿En qué consiste la personificación en las figuras retóricas?",
    options: [
      "a) Asignar características humanas a objetos y animales",
      "b) Comparar dos ideas sin utilizar la palabra 'como'",
      "c) Exagerar una idea para dar énfasis",
      "d) Repetir una palabra o frase al inicio de cada verso"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Asignar características humanas a objetos y animales
  },
  {
    question: "¿Cuál es el recurso lingüístico que consiste en desordenar las frases en una oración?",
    options: [
      "a) Hipérbaton",
      "b) Hipérbole",
      "c) Metáfora",
      "d) Anáfora"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Hipérbaton
  },
  {
    question: "¿Qué figura retórica se caracteriza por exagerar una idea para dar énfasis?",
    options: [
      "a) Hipérbaton",
      "b) Hipérbole",
      "c) Metáfora",
      "d) Anáfora"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Hipérbole
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