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
      "Sector primario",
      "Sector secundario",
      "Sector terciario",
      "Sector industrial",
      "Sector comercial"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál de las siguientes regiones de Argentina se destaca por la producción de vinos?",
    options: [
      "Región Pampeana",
      "Región Extrapampeana",
      "Región Patagónica",
      "Región Noroeste",
      "Región Cuyana"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué actividades económicas se encuentran en el sector terciario?",
    options: [
      "Agricultura y ganadería",
      "Industria y construcción",
      "Transporte y turismo",
      "Minería y pesca",
      "Educación y salud"
    ],
    correctAnswer: 2
  },
  {
    question: "¿En qué etapa del circuito productivo se transforman las materias primas en productos finales?",
    options: [
      "Eslabón primario",
      "Eslabón secundario",
      "Eslabón terciario",
      "Eslabón industrial",
      "Eslabón de distribución"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el principal producto del circuito productivo de la yerba mate en Argentina?",
    options: [
      "Azúcar",
      "Vinos",
      "Yerba mate",
      "Frutas frescas",
      "Aceite de oliva"
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