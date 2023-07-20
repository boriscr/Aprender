document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "PASADO, PRESENTE Y FUTURO - Tiempos verbales";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/hgICgwqvwmE"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué indican los verbos?",
    options: [
      "a) Acciones",
      "b) Tiempos verbales",
      "c) Estados de ánimo",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Acciones
  },
  {
    question: "¿Qué nos indica el tiempo verbal?",
    options: [
      "a) La acción que ya pasó",
      "b) La acción que está ocurriendo ahora",
      "c) La acción que ocurrirá en el futuro",
      "d) Todas las opciones anteriores son correctas"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las opciones anteriores son correctas
  },
  {
    question: "En la oración 'Mi familia me organizó una fiesta sorpresa', ¿en qué tiempo verbal se encuentra el verbo 'organizó'?",
    options: [
      "a) Pasado",
      "b) Presente",
      "c) Futuro",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Pasado
  },
  {
    question: "En la oración 'Camila jugará el jueves al fútbol', ¿en qué tiempo verbal se encuentra el verbo 'jugará'?",
    options: [
      "a) Pasado",
      "b) Presente",
      "c) Futuro",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Futuro
  },
  {
    question: "Si queremos indicar que una acción ocurrió en el pasado, ¿qué forma del verbo debemos utilizar?",
    options: [
      "a) Infinitivo",
      "b) Presente",
      "c) Pasado",
      "d) Futuro"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Pasado
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina1.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina3.html";
     }