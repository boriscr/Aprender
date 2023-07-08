document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "La Célula PROCARIOTA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/Qo7acTpLUts"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la unidad fundamental de la vida?",
    options: [
      "Un organismo unicelular",
      "Una célula procariota",
      "La célula",
      "Un organismo pluricelular"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué tipo de célula está formada por una sola célula?",
    options: [
      "Célula procariota",
      "Célula eucariota",
      "Organismo unicelular",
      "Organismo pluricelular"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la función principal de la membrana plasmática en una célula?",
    options: [
      "Regular el ingreso y salida de sustancias",
      "Producir energía",
      "Controlar la reproducción celular",
      "Transportar nutrientes"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la diferencia principal entre células procariotas y células eucariotas?",
    options: [
      "Las células procariotas tienen membrana nuclear",
      "Las células eucariotas tienen orgánulos",
      "Las células procariotas son unicelulares",
      "Las células eucariotas se dividen por mitosis"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el tipo de restaurante que representa una célula eucariota vegetal?",
    options: [
      "Restaurante fast food",
      "Restaurante de comida gourmet",
      "Restaurante de animales",
      "Restaurante vegetariano"
    ],
    correctAnswer: 3
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