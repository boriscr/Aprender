document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "CLIMAS DE LA ARGENTINA. Elementos, factores y tipos de clima.";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/Tm9teTOG38E"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿En qué capa de la atmósfera ocurren los fenómenos meteorológicos?",
    options: [
      "a) Estratosfera",
      "b) Mesosfera",
      "c) Troposfera",
      "d) Termosfera"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué es el clima?",
    options: [
      "a) Promedio de los datos meteorológicos a lo largo de 30 años.",
      "b) La capa inferior de la atmósfera.",
      "c) Variaciones diarias de temperatura y precipitaciones.",
      "d) Estaciones del año."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué factores influyen en el tipo de clima de un lugar?",
    options: [
      "a) Presión y temperatura.",
      "b) Altitud y vientos.",
      "c) Latitud y estaciones del año.",
      "d) Humedad y precipitaciones."
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué factor está relacionado con el ángulo de los rayos solares en relación a la latitud?",
    options: [
      "a) Presión atmosférica.",
      "b) Altitud de las montañas.",
      "c) Variaciones estacionales.",
      "d) Precipitaciones."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué tipo de viento se produce cuando una masa de aire cálido asciende y se encuentra con una masa de aire frío en ascenso?",
    options: [
      "a) Anticiclón.",
      "b) Ciclón.",
      "c) Sudestada.",
      "d) Pampero."
    ],
    correctAnswer: 1
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina2.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina4.html";
     }