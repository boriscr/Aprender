document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La GUERRA de independencia ARGENTINA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/xQgiNKUDI2E"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
var questions = [
  {
    question: "¿Cuál fue el primer país en intentar su independencia en la región?",
    options: [
      "a) Argentina",
      "b) Chile",
      "c) Perú",
      "d) Uruguay"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál fue la capital del Virreinato del Río de la Plata?",
    options: [
      "a) Buenos Aires",
      "b) Lima",
      "c) Montevideo",
      "d) Córdoba"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Quién lideró el ejército de los Andes durante la guerra de independencia?",
    options: [
      "a) José de San Martín",
      "b) Manuel Belgrano",
      "c) Martín Miguel de Güemes",
      "d) José Gervasio Artigas"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué año se declaró formalmente la independencia de Argentina?",
    options: [
      "a) 1808",
      "b) 1810",
      "c) 1816",
      "d) 1821"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Quién lideró el cruce de los Andes para liberar Chile y Perú?",
    options: [
      "a) José de San Martín",
      "b) Manuel Belgrano",
      "c) Martín Miguel de Güemes",
      "d) José Gervasio Artigas"
    ],
    correctAnswer: 0
  }
];

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