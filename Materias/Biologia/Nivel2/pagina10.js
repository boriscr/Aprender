document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La ingeniería genética y la comida.";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/fi1h2E835ig"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es una de las áreas científicas más controvertidas relacionada con los OMG?",
    options: [
      "a) Medicina",
      "b) Alimentación",
      "c) Agricultura",
      "d) Alimentación y Agricultura"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Alimentación y Agricultura
  },
  {
    question: "¿Cuál es uno de los ejemplos mencionados en el video de la aplicación de la ingeniería genética en el campo médico?",
    options: [
      "a) Producción de insulina transgénica",
      "b) Mejora de cultivos resistentes al cambio climático",
      "c) Creación de animales con características beneficiosas",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Producción de insulina transgénica
  },
  {
    question: "¿Cuál es una de las principales preocupaciones con respecto a los OMG según se menciona en el video?",
    options: [
      "a) El flujo de genes no deseados",
      "b) La falta de estudios científicos",
      "c) El alto costo de los cultivos transgénicos",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) El flujo de genes no deseados
  },
  {
    question: "¿Qué porcentaje de los cultivos comerciales en los Estados Unidos es resistente a los herbicidas según se menciona en el video?",
    options: [
      "a) Más del 90%",
      "b) Menos del 50%",
      "c) Alrededor del 70%",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Más del 90%
  },
  {
    question: "¿Cuál es una de las posibles aplicaciones futuras de los OMG mencionada en el video?",
    options: [
      "a) Plantas que extraen nitrógeno del aire",
      "b) Cultivos con mayor resistencia a las inundaciones",
      "c) Frutas con más antioxidantes",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina9.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "../../Finalizado/Finalizado.html";
     }