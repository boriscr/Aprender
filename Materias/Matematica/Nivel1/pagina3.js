document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "NUMEROS RACIONALES E IRRACIONALES";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/6khaK08qz-E"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

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
    question: "¿Cuál es el símbolo utilizado para representar los números racionales?",
    options: [
      "a) Q",
      "b) N",
      "c) Z",
      "d) I"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Q
  },
  {
    question: "¿Cuál de los siguientes conjuntos abarca los números naturales y los números negativos?",
    options: [
      "a) Conjunto de los números enteros",
      "b) Conjunto de los números racionales",
      "c) Conjunto de los números irracionales",
      "d) Conjunto de los números reales"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Conjunto de los números enteros
  },
  {
    question: "¿Cuál de las siguientes opciones NO es un número racional?",
    options: [
      "a) 2",
      "b) -8",
      "c) -0.75",
      "d) √4"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) √4
  },
  {
    question: "¿Cuál de los siguientes números es irracional?",
    options: [
      "a) 0.25",
      "b) 0.56666666667",
      "c) π (pi)",
      "d) √2"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) π (pi)
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