document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Historia de los billetes Argentinos";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/OSNQmq1-dGo"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál fue la primera moneda de circulación masiva en Argentina?",
    options: [
      "a) Peso moneda corriente",
      "b) Peso fuerte",
      "c) Peso ley 18.188",
      "d) Austral"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál fue la moneda que estuvo vigente desde 1826 hasta 1881 en Argentina?",
    options: [
      "a) Peso fuerte",
      "b) Peso moneda corriente",
      "c) Peso ley 18.188",
      "d) Austral"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué ley de unificación monetaria se sancionó durante la presidencia de Julio Argentino Roca?",
    options: [
      "a) Ley 1130",
      "b) Ley 2216",
      "c) Ley 890",
      "d) Ley 22.707"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Año del primer billete íntegramente impreso en Argentina?",
    options: [
      "a) 1951",
      "b) 2001",
      "c) 1888",
      "d) 1883"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál fue la moneda emitida en reemplazo del austral en 1991?",
    options: [
      "a) Austral",
      "b) Peso fuerte",
      "c) Peso argentino",
      "d) Peso"
    ],
    correctAnswer: 2
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
     window.location.href = "../Nivel2/Pagina1.html";
     }