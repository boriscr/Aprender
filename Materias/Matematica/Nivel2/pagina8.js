document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "FUNCIONES LINEALES";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/edE5Y1kOgFw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es el plano cartesiano?",
    options: [
      "a) Una recta numérica.",
      "b) Un sistema de coordenadas formado por dos rectas numéricas perpendiculares.",
      "c) Un sistema de coordenadas formado por tres rectas numéricas perpendiculares.",
      "d) Un sistema de coordenadas formado por dos rectas paralelas."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Un sistema de coordenadas formado por dos rectas numéricas perpendiculares.
  },
  {
    question: "¿Cómo se llama la recta horizontal en el plano cartesiano?",
    options: [
      "a) Abscisas o eje de las x.",
      "b) Ordenada o eje de las y.",
      "c) Verticales o eje z.",
      "d) Origen."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Abscisas o eje de las x.
  },
  {
    question: "¿Cómo se llama la recta vertical en el plano cartesiano?",
    options: [
      "a) Abscisas o eje de las x.",
      "b) Ordenada o eje de las y.",
      "c) Verticales o eje z.",
      "d) Origen."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Ordenada o eje de las y.
  },
  {
    question: "¿Qué tipo de ecuaciones se están analizando en el video?",
    options: [
      "a) Ecuaciones de segundo grado.",
      "b) Ecuaciones lineales.",
      "c) Ecuaciones exponenciales.",
      "d) Ecuaciones trigonométricas."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Ecuaciones lineales.
  },
  {
    question: "¿Cuál es el exponente de x en las ecuaciones lineales mencionadas?",
    options: [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) No se menciona en el video."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) 1.
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina7.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina9.html";
     }