document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "FUNCIONES TRIGONOMETRICAS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/8zVW0U2jn8U"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué son los triángulos rectángulos?",
    options: [
      "a) Triángulos con tres lados iguales.",
      "b) Triángulos con un ángulo de 90 grados.",
      "c) Triángulos con un ángulo agudo.",
      "d) Triángulos con ángulos rectos."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Triángulos con un ángulo de 90 grados.
  },
  {
    question: "¿Cómo se llama el lado más largo de un triángulo rectángulo?",
    options: [
      "a) Hipotenusa",
      "b) Cateto opuesto",
      "c) Cateto adyacente",
      "d) Ángulo recto"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Hipotenusa
  },
  {
    question: "¿Cuál es la fórmula del seno de un ángulo en un triángulo rectángulo?",
    options: [
      "a) Cateto opuesto / Hipotenusa",
      "b) Cateto adyacente / Hipotenusa",
      "c) Cateto opuesto / Cateto adyacente",
      "d) Hipotenusa / Cateto opuesto"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Cateto opuesto / Hipotenusa
  },
  {
    question: "¿Cuál es la fórmula del coseno de un ángulo en un triángulo rectángulo?",
    options: [
      "a) Cateto opuesto / Hipotenusa",
      "b) Cateto adyacente / Hipotenusa",
      "c) Cateto opuesto / Cateto adyacente",
      "d) Hipotenusa / Cateto opuesto"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Cateto adyacente / Hipotenusa
  },
  {
    question: "¿Cuál es la fórmula de la tangente de un ángulo en un triángulo rectángulo?",
    options: [
      "a) Cateto opuesto / Hipotenusa",
      "b) Cateto adyacente / Hipotenusa",
      "c) Cateto opuesto / Cateto adyacente",
      "d) Hipotenusa / Cateto opuesto"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Cateto opuesto / Cateto adyacente
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