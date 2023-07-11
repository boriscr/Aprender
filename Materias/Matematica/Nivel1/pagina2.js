document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "FRACCIONES DECIMALES";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/zBAOT2vUFPI"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué se llama al número de arriba en una fracción?",
    options: [
      "a) Numerador",
      "b) Denominador",
      "c) Entero",
      "d) Potencia"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Numerador
  },
  {
    question: "¿Qué indica el denominador en una fracción?",
    options: [
      "a) En cuántas partes iguales se divide el entero",
      "b) Cuántas partes se toman del entero",
      "c) Cuántas partes iguales se toman del entero",
      "d) La potencia de 10"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) En cuántas partes iguales se divide el entero
  },
  {
    question: "¿Cuáles de las siguientes fracciones son fracciones decimales?",
    options: [
      "a) Tres décimos",
      "b) Ocho centésimos",
      "c) Quince milésimas",
      "d) Diez enteros"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Quince milésimas
  },
  {
    question: "¿Qué caracteriza a las fracciones decimales?",
    options: [
      "a) Tienen numerador y denominador iguales",
      "b) El numerador es mayor que el denominador",
      "c) El denominador es una potencia de 10",
      "d) Son fracciones mayores a 1"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) El denominador es una potencia de 10
  },
  {
    question: "¿Qué se debe hacer si el denominador de una fracción decimal es una potencia de 10?",
    options: [
      "a) Multiplicar el numerador por el denominador",
      "b) Dividir el numerador por el denominador",
      "c) Sumar el numerador y el denominador",
      "d) No hacer ninguna operación adicional"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) No hacer ninguna operación adicional
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina1.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina3.html";
     }