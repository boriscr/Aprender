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
      "a) Relieve con pendiente",
      "b) Relieve llano",
      "c) Relieve montañoso",
      "d) Relieve mesetario",
      "e) Relieve volcánico"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué es una cuenca hidrográfica?",
    options: [
      "a) Un curso de agua principal",
      "b) Un tipo de río",
      "c) Una línea divisoria de aguas",
      "d) Un área de superficie que aporta agua a un curso",
      "e) Un sistema de represas"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué sucede en el curso medio de un río?",
    options: [
      "a) Se forman rápidos y cascadas",
      "b) Se erosionan los sedimentos",
      "c) Se depositan los sedimentos",
      "d) Se forman meandros",
      "e) Se produce la desembocadura"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué tipo de cuenca hidrográfica predomina en Argentina?",
    options: [
      "a) Cuenca exótica",
      "b) Cuenca endorreica",
      "c) Cuenca arreica",
      "d) Cuenca pluvial",
      "e) Cuenca exorreica"
    ],
    correctAnswer: 4
  },
  {
    question: "¿Cuál es la cuenca hídrica más grande de Argentina?",
    options: [
      "a) Cuenca del Río Paraná",
      "b) Cuenca del Río de la Plata",
      "c) Cuenca del Río Uruguay",
      "d) Cuenca del Río Paraguay",
      "e) Cuenca del Río Colorado"
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