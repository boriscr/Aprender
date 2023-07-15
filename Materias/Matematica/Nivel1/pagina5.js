document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "¿QUÉ ES EL ÁLGEBRA?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/EKeMeKv8c-I"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es el álgebra?",
    options: [
      "a) Una rama de las matemáticas que nos ayuda a plantear, desarrollar y resolver problemas utilizando números, letras, símbolos y signos.",
      "b) Una rama de las matemáticas que estudia los números y sus propiedades.",
      "c) Una rama de las matemáticas que se enfoca en el cálculo diferencial e integral.",
      "d) Una rama de las matemáticas que estudia las figuras geométricas."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Una rama de las matemáticas que nos ayuda a plantear, desarrollar y resolver problemas utilizando números, letras, símbolos y signos.
  },
  {
    question: "¿Qué representan las letras en el álgebra?",
    options: [
      "a) Cantidades que conocemos.",
      "b) Cantidades desconocidas llamadas incógnitas.",
      "c) Símbolos matemáticos.",
      "d) Constantes numéricas."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Cantidades desconocidas llamadas incógnitas.
  },
  {
    question: "¿Cuál es un ejemplo de símbolo utilizado en álgebra?",
    options: [
      "a) El número pi (π).",
      "b) El signo de igual (=).",
      "c) El signo de suma (+).",
      "d) El número 16."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción a) El número pi (π).
  },
  {
    question: "En álgebra, ¿qué símbolo se utiliza comúnmente para representar la multiplicación?",
    options: [
      "a) *",
      "b) +",
      "c) x",
      "d) ÷"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) *
  },
  {
    question: "¿Cuáles son los tipos de signos utilizados en álgebra?",
    options: [
      "a) Signos de operación, signos de relación y signos de agrupación.",
      "b) Signos de suma, signos de resta y signos de multiplicación.",
      "c) Signos de igualdad, signos de desigualdad y signos de división.",
      "d) Signos de apertura y signos de cierre."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Signos de operación, signos de relación y signos de agrupación.
  },

  ]

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
     window.location.href = "../Nivel2/Pagina1.html";
     }