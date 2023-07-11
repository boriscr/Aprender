document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "¿QUÉ ES LA BIODIVERSIDAD?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/vQg_8s4LDHc"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es la biodiversidad?",
    options: [
      "a) La concentración de especies en lugares específicos",
      "b) La variedad de vida en nuestro planeta",
      "c) La cantidad total de especies descubiertas",
      "d) La diversidad genética dentro de una especie"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) La variedad de vida en nuestro planeta
  },
  {
    question: "¿Cuántas especies se estima que aún no han sido descubiertas?",
    options: [
      "a) 86% de las especies",
      "b) 50% de las especies",
      "c) 25% de las especies",
      "d) 10% de las especies"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) 86% de las especies
  },
  {
    question: "¿Cuál es uno de los beneficios de la biodiversidad para los ecosistemas?",
    options: [
      "a) Regulación del clima",
      "b) Aumento de la contaminación",
      "c) Disminución de la productividad",
      "d) Pérdida de hábitats naturales"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Regulación del clima
  },
  {
    question: "¿Qué son los 'puntos calientes de la biodiversidad'?",
    options: [
      "a) Lugares con una gran concentración de especies",
      "b) Espacios naturales protegidos",
      "c) Áreas afectadas por el cambio climático",
      "d) Regiones con una baja diversidad de vida"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Lugares con una gran concentración de especies
  },
  {
    question: "¿Cuáles son algunas de las principales amenazas para la biodiversidad?",
    options: [
      "a) Promoción del cambio climático",
      "b) Protección de los ecosistemas naturales",
      "c) Conservación de los puntos calientes",
      "d) Pérdida de hábitats y especies foráneas"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Pérdida de hábitats y especies foráneas
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