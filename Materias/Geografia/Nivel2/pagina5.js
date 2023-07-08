document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "RELIEVE DE AMÉRICA. Procesos que dieron origen.";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/r84BDiTzQQc"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es el tipo de relieve que se forma en las zonas más altas de América?",
    options: [
      "Montañas",
      "Mesetas",
      "Llanuras",
      "Volcanes",
      "Cañones"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué son los procesos endógenos en la formación del relieve?",
    options: [
      "Procesos atmosféricos",
      "Procesos químicos",
      "Procesos internos del planeta",
      "Procesos erosivos",
      "Procesos de sedimentación"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué ocurre en los bordes convergentes de las placas tectónicas?",
    options: [
      "Las placas se separan",
      "Las placas se rozan",
      "Las placas se desplazan lateralmente",
      "Las placas se estabilizan",
      "Las placas se hunden"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es uno de los agentes atmosféricos que actúan en los procesos exógenos del relieve?",
    options: [
      "Viento",
      "Luz solar",
      "Gravedad",
      "Temperatura",
      "Electricidad"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es uno de los principales tipos de relieve en América?",
    options: [
      "Montañas",
      "Playas",
      "Cañones",
      "Volcanes",
      "Cañadones"
    ],
    correctAnswer: 0
  }
];


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
     window.location.href = "Pagina6.html";
     }