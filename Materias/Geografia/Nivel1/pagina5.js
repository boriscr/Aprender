document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "🚜 CIRCUITOS PRODUCTIVOS REGIONALES 🏭 o ECONOMÍAS REGIONALES de ARGENTINA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/119Gygx7jhI"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿En qué sector se originan los productos agrícolas y ganaderos en Argentina?",
    options: [
      "a) Sector primario",
      "b) Sector secundario",
      "c) Sector terciario",
      "d) Sector industrial",
      "e) Sector comercial"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál de las siguientes regiones de Argentina se destaca por la producción de vinos?",
    options: [
      "a) Región Pampeana",
      "b) Región Extrapampeana",
      "c) Región Patagónica",
      "d) Región Noroeste",
      "e) Región Cuyana"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué actividades económicas se encuentran en el sector terciario?",
    options: [
      "a) Agricultura y ganadería",
      "b) Industria y construcción",
      "c) Transporte y turismo",
      "d) Minería y pesca",
      "e) Educación y salud"
    ],
    correctAnswer: 2
  },
  {
    question: "¿En qué etapa del circuito productivo se transforman las materias primas en productos finales?",
    options: [
      "a) Eslabón primario",
      "b) Eslabón secundario",
      "c) Eslabón terciario",
      "d) Eslabón industrial",
      "e) Eslabón de distribución"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el principal producto del circuito productivo de la yerba mate en Argentina?",
    options: [
      "a) Azúcar",
      "b) Vinos",
      "c) Yerba mate",
      "d) Frutas frescas",
      "e) Aceite de oliva"
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