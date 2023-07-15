document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Los Pronombres Personales (Tónicos y Átonos)";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/KBVOMBFhlC4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué son los pronombres personales?",
    options: [
      "a) Palabras que se emplean para designar una cosa sin hacer referencia a su nombre",
      "b) Palabras que se emplean para designar a una persona sin hacer referencia a su nombre",
      "c) Palabras que se emplean para designar un lugar sin hacer referencia a su nombre",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Palabras que se emplean para designar a una persona sin hacer referencia a su nombre
  },
  {
    question: "¿Cuál es la función de los pronombres personales?",
    options: [
      "a) Sustituir a un sustantivo para evitar su repetición",
      "b) Acompañar a los determinantes en una oración",
      "c) Indicar el plural de un sustantivo",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Sustituir a un sustantivo para evitar su repetición
  },
  {
    question: "¿Qué diferencia hay entre los pronombres personales tónicos y los pronombres personales átonos?",
    options: [
      "a) Los pronombres personales tónicos pueden aparecer solos o acompañados de un verbo, mientras que los pronombres personales átonos siempre van acompañados de un verbo",
      "b) Los pronombres personales tónicos siempre van acompañados de un verbo, mientras que los pronombres personales átonos pueden aparecer solos o acompañados de un verbo",
      "c) Los pronombres personales tónicos y átonos tienen la misma función en una oración",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Los pronombres personales tónicos pueden aparecer solos o acompañados de un verbo, mientras que los pronombres personales átonos siempre van acompañados de un verbo
  },
  {
    question: "¿Cuáles son los pronombres personales tónicos de segunda persona?",
    options: [
      "a) Tú y vosotros",
      "b) Usted y ustedes",
      "c) Tú y ustedes",
      "d) Vosotros y ustedes"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Tú y ustedes
  },
  {
    question: "¿Cuáles son los pronombres personales átonos de tercera persona del plural?",
    options: [
      "a) Les y los",
      "b) Se y lo",
      "c) Ellos y ellas",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Les y los
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