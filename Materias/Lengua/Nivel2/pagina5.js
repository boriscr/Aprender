document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La acentuación de las palabras y las reglas ortográficas";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/dfzlBAMVrBI"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la sílaba tónica de una palabra?",
    options: [
      "a) Es aquella en donde se hace un mayor énfasis en la pronunciación",
      "b) Es la última sílaba de una palabra",
      "c) Es la primera sílaba de una palabra",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Es aquella en donde se hace un mayor énfasis en la pronunciación
  },
  {
    question: "¿Cuál es la función de la tilde o acento ortográfico?",
    options: [
      "a) Señalar la acentuación de una palabra",
      "b) Indicar la sílaba tónica de una palabra",
      "c) Separar las palabras en sílabas",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Señalar la acentuación de una palabra
  },
  {
    question: "¿Qué son las palabras agudas?",
    options: [
      "a) Palabras que tienen el acento en la última sílaba y llevan tilde cuando terminan en esa vocal",
      "b) Palabras que tienen el acento en la penúltima sílaba y llevan tilde cuando terminan en consonante diferente de 'n' o vocal",
      "c) Palabras que tienen el acento en la antepenúltima sílaba y siempre llevan tilde",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Palabras que tienen el acento en la última sílaba y llevan tilde cuando terminan en vocal
  },
  {
    question: "¿Qué son las palabras graves o llanas?",
    options: [
      "a) Palabras que tienen el acento en la penúltima sílaba y llevan tilde cuando terminan en consonante diferente de 'n' o vocal",
      "b) Palabras que tienen el acento en la última sílaba y llevan tilde cuando terminan en vocal",
      "c) Palabras que tienen el acento en la antepenúltima sílaba y siempre llevan tilde",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Palabras que tienen el acento en la penúltima sílaba y llevan tilde cuando terminan en consonante diferente de 'n' o vocal
  },
  {
    question: "¿Qué son las palabras esdrújulas?",
    options: [
      "a) Palabras que tienen el acento en la antepenúltima sílaba y siempre llevan tilde",
      "b) Palabras que tienen el acento en la última sílaba y llevan tilde cuando terminan en vocal",
      "c) Palabras que tienen el acento en la penúltima sílaba y llevan tilde cuando terminan en consonante diferente de 'n' o vocal",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Palabras que tienen el acento en la antepenúltima sílaba y siempre llevan tilde
  },
  {
    question: "¿Qué son las palabras sobreesdrújulas?",
    options: [
      "a) Palabras que tienen el acento en la antepenúltima sílaba y siempre llevan tilde",
      "b) Palabras que tienen el acento en la penúltima sílaba y llevan tilde cuando terminan en consonante diferente de 'n' o vocal",
      "c) Palabras que tienen el acento en la anteantepenúltima sílaba y siempre llevan tilde",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Palabras que tienen el acento en la anteantepenúltima sílaba y siempre llevan tilde
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