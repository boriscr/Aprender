document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Conceptos de BIOLOGÍA básica";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/u7i4TMql3MM"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué características de las células son utilizadas para clasificar a los seres vivos en reinos?",
    options: [
      "Tipo de célula (procariota o eucariota)",
      "Forma de reproducción (sexual o asexual)",
      "Número de células (unicelulares o pluricelulares)",
      "Obtención de energía y materia orgánica",
      "Todas las anteriores"
    ],
    correctAnswer: 4
  },
  {
    question: "¿Cuál de los siguientes reinos utiliza la luz como fuente de energía y es capaz de transformar la materia inorgánica en orgánica?",
    options: [
      "Reino de las plantas",
      "Reino de los hongos",
      "Reino de los animales",
      "Reino de las bacterias",
      "Reino de los protistas"
    ],
    correctAnswer: 0
  },
  {
    question: "Utiliza la luz como fuente de energía y puede transformar la materia inorgánica en orgánica:",
    options: [
      "Reino de las plantas",
      "Reino de los hongos",
      "Fotoautótrofo",
      "Heterótrofa",
      "Autótrofa"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál de los siguientes reinos no puede utilizar la energía de la luz y obtiene la materia orgánica de otros seres vivos?",
    options: [
      "Reino de las plantas",
      "Reino de los hongos",
      "Reino de los animales",
      "Reino de las bacterias",
      "Reino de los protistas"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál de los siguientes reinos es capaz de transformar la materia inorgánica en orgánica pero no puede utilizar la energía de la luz?",
    options: [
      "Reino de las plantas",
      "Reino de los hongos",
      "Reino de los animales",
      "Reino de las bacterias",
      "Reino de los protistas"
    ],
    correctAnswer: 3
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "../Home.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina2.html";
     }