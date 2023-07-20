document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Diferencias entre virus ☣, bacterias 🦠y hongos 🍄";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/Gs-qktH1C8Q"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuáles son los tres tipos de microorganismos mencionados en el video?",
    options: [
      "a) Bacterias, ongos y virus",
      "b) Virus, hongos y bacterias",
      "c) Hongos, insectos y virus",
      "d) Hongos, celulas y virus"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Virus, hongos y bacterias
  },
  {
    question: "¿Cuál de los siguientes microorganismos puede sobrevivir sin vivir dentro de otro organismo?",
    options: [
      "a) Bacterias",
      "b) Virus",
      "c) Hongos y virus",
      "d) Ninguno de ellos"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Bacterias
  },
  {
    question: "¿Cuál de los siguientes microorganismos es considerado una partícula infecciosa?",
    options: [
      "a) Virus",
      "b) Bacterias",
      "c) Hongos",
      "d) Ninguno de ellos"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Virus
  },
  {
    question: "¿Cuál de los siguientes microorganismos puede reproducirse tanto sexual como asexualmente?",
    options: [
      "a) Hongos",
      "b) Bacterias",
      "c) Virus",
      "d) Ninguno de ellos"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Hongos
  },
  {
    question: "¿Cuál de los siguientes microorganismos nos afecta principalmente por sus metabolitos?",
    options: [
      "a) Bacterias",
      "b) Virus",
      "c) Hongos",
      "d) Ninguno de ellos"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Bacterias
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina8.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina10.html";
     }