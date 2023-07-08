document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "CUENCAS HÍDRICAS Y RÍOS de la ARGENTINA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/4escR82zYGg"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué tipo de relieve favorece la formación de rápidos, saltos y cascadas en los ríos de Argentina?",
    options: [
      "Relieve con pendiente",
      "Relieve llano",
      "Relieve montañoso",
      "Relieve mesetario",
      "Relieve volcánico"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué es una cuenca hidrográfica?",
    options: [
      "Un curso de agua principal",
      "Un tipo de río",
      "Una línea divisoria de aguas",
      "Un área de superficie que aporta agua a un curso",
      "Un sistema de represas"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué sucede en el curso medio de un río?",
    options: [
      "Se forman rápidos y cascadas",
      "Se erosionan los sedimentos",
      "Se depositan los sedimentos",
      "Se forman meandros",
      "Se produce la desembocadura"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué tipo de cuenca hidrográfica predomina en Argentina?",
    options: [
      "Cuenca exótica",
      "Cuenca endorreica",
      "Cuenca arreica",
      "Cuenca pluvial",
      "Cuenca sexorreica"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la cuenca hídrica más grande de Argentina?",
    options: [
      "Cuenca del Río Paraná",
      "Cuenca del Río de la Plata",
      "Cuenca del Río Uruguay",
      "Cuenca del Río Paraguay",
      "Cuenca del Río Colorado"
    ],
    correctAnswer: 1
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