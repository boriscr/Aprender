document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "¿QUÉ ES LA ESTADÍSTICA?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/0_ybaigJd1s"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es la estadística?",
    options: [
      "a) La rama de las matemáticas que estudia las figuras geométricas.",
      "b) La rama de las matemáticas que se encarga del análisis de funciones.",
      "c) La rama de las matemáticas que se encarga de la obtención, organización, análisis e interpretación de un conjunto de datos.",
      "d) La rama de las matemáticas que estudia los números complejos."
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) La rama de las matemáticas que se encarga de la obtención, organización, análisis e interpretación de un conjunto de datos.
  },
  {
    question: "¿Cuál es la razón principal de la estadística?",
    options: [
      "a) Ayudar a comprender mejor los hechos mediante el análisis de datos.",
      "b) Estudiar las formas geométricas en el espacio.",
      "c) Resolver ecuaciones matemáticas complejas.",
      "d) Realizar predicciones sobre eventos futuros."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Ayudar a comprender mejor los hechos mediante el análisis de datos.
  },
  {
    question: "¿Cuál es la diferencia entre la estadística descriptiva y la estadística inferencial?",
    options: [
      "a) La estadística descriptiva se encarga de recolectar y organizar datos, mientras que la estadística inferencial hace predicciones y conclusiones.",
      "b) La estadística descriptiva se encarga de hacer predicciones y conclusiones, mientras que la estadística inferencial recolecta y organiza datos.",
      "c) No hay diferencia, son dos términos que se refieren a lo mismo.",
      "d) La estadística descriptiva se enfoca en datos cualitativos y la estadística inferencial en datos cuantitativos."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) La estadística descriptiva se encarga de recolectar y organizar datos, mientras que la estadística inferencial hace predicciones y conclusiones.
  },
  {
    question: "¿Cuál es el objetivo principal de la estadística descriptiva?",
    options: [
      "a) Realizar predicciones y generalizaciones.",
      "b) Obtener conclusiones a partir del análisis de datos.",
      "c) Describir las características de los datos mediante indicadores, tablas y gráficos.",
      "d) Organizar y presentar datos de manera visual."
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Describir las características de los datos mediante indicadores, tablas y gráficos.
  },
  {
    question: "¿Qué disciplinas hacen uso de la estadística?",
    options: [
      "a) Geografía, literatura y música.",
      "b) Arquitectura, danza y fotografía.",
      "c) Economía, psicología, sociología, educación, medicina, biología, entre otras.",
      "d) Deportes, cocina y manualidades."
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Economía, psicología, sociología, educación, medicina, biología, entre otras.
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina5.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina7.html";
     }