document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "RELIEVE de la ARGENTINA ";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/mq9M6qupMf4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué tipo de relieve se encuentra en el oeste de Argentina?",
    options: [
      "a) Montañas",
      "b) Llanuras",
      "c) Mesetas",
      "d) Sistemas serranos",
      "e) Ríos y cascadas"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué proceso geológico formó la Cordillera de los Andes?",
    options: [
      "a) Vulcanismo",
      "b) Erosión",
      "c) Meteorización",
      "d) Oro génesis",
      "e) Tectónica de placas"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es el relieve más extenso de Argentina?",
    options: [
      "a) Cordillera de los Andes",
      "b) Meseta Patagónica",
      "c) Sistema serrano",
      "d) Llanuras",
      "e) Meseta Misionera"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué relieve se caracteriza por tener ríos y cascadas como las Cataratas del Iguazú?",
    options: [
      "a) Meseta Misionera",
      "b) Cordillera de los Andes",
      "c) Meseta Cuna",
      "d) Sistema serrano",
      "e) Llanuras"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué recurso energético es muy valorado y explotado en la Meseta Patagónica?",
    options: [
      "a) Petróleo",
      "b) Gas",
      "c) Carbón",
      "d) Uranio",
      "e) Energía eólica"
    ],
    correctAnswer: 0
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