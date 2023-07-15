document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "¿QUE ES LA GEOMETRÍA?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/RWwJ7NGpdQQ"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es la geometría?",
    options: [
      "a) La rama de las matemáticas que estudia la extensión de figuras en un plano o espacio y la forma de medirlas.",
      "b) La ciencia que estudia los cuerpos celestes y sus movimientos.",
      "c) La disciplina que se encarga del estudio de los números y sus propiedades.",
      "d) La rama de la física que se ocupa del estudio de la materia y la energía."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) La rama de las matemáticas que estudia la extensión de figuras en un plano o espacio y la forma de medirlas.
  },
  {
    question: "¿Quién es considerado el padre de la geometría?",
    options: [
      "a) Heródoto",
      "b) Euclides",
      "c) Descartes",
      "d) René"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Euclides
  },
  {
    question: "¿Qué son los axiomas en geometría?",
    options: [
      "a) Enunciados que describen y relacionan conceptos en la geometría.",
      "b) Herramientas utilizadas para medir longitudes y ángulos.",
      "c) Las fórmulas utilizadas para calcular áreas y volúmenes.",
      "d) Instrumentos utilizados para trazar figuras geométricas."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Enunciados que describen y relacionan conceptos en la geometría.
  },
  {
    question: "¿Cuál es la importancia del número pi en geometría?",
    options: [
      "a) Es utilizado para calcular el perímetro y área de los círculos.",
      "b) Es el número que representa la proporción entre la circunferencia y el diámetro de un círculo.",
      "c) Ayuda a establecer las relaciones entre puntos, líneas y ángulos en la geometría.",
      "d) Es una constante que se utiliza para calcular el volumen de los sólidos geométricos.",
      "e) Opcion a y b"
    ],
    correctAnswer: 4 // La respuesta correcta es la opción e) Opcion a y b
  },
  {
    question: "¿Cuál de las siguientes opciones NO es un tipo de geometría?",
    options: [
      "a) Geometría descriptiva",
      "b) Geometría algebraica",
      "c) Geometría numérica",
      "d) Geometría proyectiva"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Geometría numérica
  },
 ]

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