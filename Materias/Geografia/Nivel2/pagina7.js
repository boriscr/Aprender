document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "REGIONES DE JUJUY";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/Q0FHj9MU9B0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la región de la provincia de Jujuy que se caracteriza por ser una densa meseta de altura de unos 4000 metros sobre el nivel del mar?",
    options: [
      "a) La Quebrada",
      "b) Los Valles",
      "c) La Puna",
      "d) Las Yungas"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cómo se conoce popularmente a la región de la provincia de Jujuy recorrida de norte a sur por el río grande y que presenta cordones montañosos policromados?",
    options: [
      "a) La Quebrada",
      "b) Los Valles",
      "c) La Puna",
      "d) Las Yungas"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la región de la provincia de Jujuy conocida como la continuación hacia el este de la Quebrada y caracterizada por tener un clima subtropical y altas temperaturas en verano?",
    options: [
      "a) La Quebrada",
      "b) Los Valles",
      "c) La Puna",
      "d) Las Yungas"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el nombre de la región de la provincia de Jujuy que se encuentra al sur de la Quebrada y constituye la región de mayor concentración de la población?",
    options: [
      "a) La Quebrada",
      "b) Los Valles",
      "c) La Puna",
      "d) Las Yungas"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la capital de la provincia de Jujuy?",
    options: [
      "a) San Miguel de Tucumán",
      "b) Salta",
      "c) San Salvador de Jujuy",
      "d) La Plata"
    ],
    correctAnswer: 2
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina6.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina8.html";
     }