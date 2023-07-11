document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "TABLA DE FRECUENCIAS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/JtB2w0QLRZ4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es la distribución de frecuencias o tabla de frecuencias?",
    options: [
      "a) La organización en forma de tabla de los datos estadísticos.",
      "b) La representación gráfica de los datos estadísticos.",
      "c) La suma de los datos estadísticos.",
      "d) La frecuencia con la que se repiten los datos estadísticos."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) La organización en forma de tabla de los datos estadísticos.
  },
  {
    question: "¿Qué representa la letra x en la tabla de frecuencias?",
    options: [
      "a) La frecuencia absoluta.",
      "b) La edad de los alumnos.",
      "c) El número total de datos.",
      "d) La frecuencia relativa."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) La edad de los alumnos.
  },
  {
    question: "¿Qué representa la letra f en la tabla de frecuencias?",
    options: [
      "a) La frecuencia absoluta.",
      "b) La edad de los alumnos.",
      "c) El número total de datos.",
      "d) La frecuencia relativa."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) La frecuencia absoluta.
  },
  {
    question: "¿Cómo se calcula la frecuencia relativa?",
    options: [
      "a) Dividiendo la frecuencia absoluta entre el número total de datos.",
      "b) Sumando todas las frecuencias absolutas.",
      "c) Multiplicando la frecuencia absoluta por 100.",
      "d) No se menciona en el video."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Dividiendo la frecuencia absoluta entre el número total de datos.
  },
  {
    question: "¿Qué representa la letra F en la tabla de frecuencias?",
    options: [
      "a) La frecuencia absoluta.",
      "b) La edad de los alumnos.",
      "c) El número total de datos.",
      "d) La frecuencia relativa acumulada."
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) La frecuencia relativa acumulada.
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