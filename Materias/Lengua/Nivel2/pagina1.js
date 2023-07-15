document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Los Conectores de Texto";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/0yK64bAjrOw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la función de los conectores de texto?",
    options: [
      "a) Relacionar las ideas entre sí",
      "b) Dar sentido al texto",
      "c) Ambas opciones son correctas",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Ambas opciones son correctas
  },
  {
    question: "¿Qué tipo de conectores se utilizan para expresar oposición?",
    options: [
      "a) Temporales",
      "b) Aditivos",
      "c) De oposición",
      "d) De conclusión"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) De oposición
  },
  {
    question: "¿Cuál es la función de los conectores aditivos?",
    options: [
      "a) Expresar suma de ideas",
      "b) Marcar el comienzo del texto",
      "c) Marcar el final del texto",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Expresar suma de ideas
  },
  {
    question: "¿Qué tipo de conectores marcan el cierre del discurso?",
    options: [
      "a) Temporales",
      "b) Aditivos",
      "c) De oposición",
      "d) De conclusión"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) De conclusión
  },
  {
    question: "¿Qué función cumplen los conectores de referencia en un texto?",
    options: [
      "a) Relacionar las ideas entre sí",
      "b) Marcar el comienzo del texto",
      "c) Marcar el final del texto",
      "d) Establecer conexiones entre distintas partes del texto"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Establecer conexiones entre distintas partes del texto
  }
];



//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "../Nivel1/Pagina5.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina2.html";
     }