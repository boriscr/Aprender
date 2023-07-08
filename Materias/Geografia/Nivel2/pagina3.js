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
      "Montañas",
      "Llanuras",
      "Mesetas",
      "Sistemas serranos",
      "Ríos y cascadas"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué proceso geológico formó la Cordillera de los Andes?",
    options: [
      "Vulcanismo",
      "Erosión",
      "Meteorización",
      "Oro génesis",
      "Tectónica de placas"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es el relieve más extenso de Argentina?",
    options: [
      "Cordillera de los Andes",
      "Meseta Patagónica",
      "Sistema serrano",
      "Llanuras",
      "Meseta Misionera"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué relieve se caracteriza por tener ríos y cascadas como las Cataratas del Iguazú?",
    options: [
      "Meseta Misionera",
      "Cordillera de los Andes",
      "Meseta Cuna",
      "Sistema serrano",
      "Llanuras"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué recurso energético es muy valorado y explotado en la Meseta Patagónica?",
    options: [
      "Petróleo",
      "Gas",
      "Carbón",
      "Uranio",
      "Energía eólica"
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