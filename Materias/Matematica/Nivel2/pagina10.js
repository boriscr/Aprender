document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "PARA QUE SIRVE LAS MATEMÁTICAS EN LA VIDA REAL";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/Z4tPbyR7YWg"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la disciplina que provoca sudores fríos al escuchar palabras como raíz cuadrada, polinomios, ecuaciones y geometría?",
    options: [
      "a) Física",
      "b) Química",
      "c) Biología",
      "d) Matemáticas"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Matemáticas.
  },
  {
    question: "¿En qué aspecto de la vida profesional son indispensables las matemáticas?",
    options: [
      "a) En la construcción de puentes",
      "b) En el diseño de páginas web",
      "c) En el desarrollo de tecnologías",
      "d) En la educación de los niños",
      "e) Todas las anteriores "
    ],
    correctAnswer: 4 // La respuesta correcta es la opción a) En la construcción de puentes.
  },
  {
    question: "¿Para qué se utilizan las matemáticas en la vida particular?",
    options: [
      "a) Para calcular porcentajes de descuento",
      "b) Para medir el peso de los productos",
      "c) Para ver la hora y la fecha",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores.
  },
  {
    question: "¿Qué nos permite comprender mejor el funcionamiento de las páginas de redes sociales?",
    options: [
      "a) El conocimiento de algoritmos",
      "b) La capacidad de sumar, restar y multiplicar",
      "c) El manejo de la física",
      "d) El estudio de la biología"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) El conocimiento de algoritmos.
  },
  {
    question: "¿Cuál es la conclusión sobre las matemáticas según el video?",
    options: [
      "a) Son una ciencia inútil en la vida diaria.",
      "b) Son solo aplicables en la educación.",
      "c) Mejoran nuestra percepción y nos llevan al conocimiento.",
      "d) Son necesarias solo en la construcción de puentes."
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Mejoran nuestra percepción y nos llevan al conocimiento.
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