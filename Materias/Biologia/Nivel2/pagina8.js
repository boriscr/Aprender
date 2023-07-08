document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "JOSE DE SAN MARTIN";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/iQ50LHyFRew"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿En qué provincia argentina nació José de San Martín?",
    options: [
      "Corrientes",
      "Buenos Aires",
      "Mendoza",
      "Córdoba",
      "Santa Fe"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué país realizó sus estudios José de San Martín?",
    options: [
      "España",
      "Francia",
      "Portugal",
      "Inglaterra",
      "Italia"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué batalla San Martín luchó al frente de los Granaderos a Caballo?",
    options: [
      "Batalla de San Lorenzo",
      "Batalla de Maipú",
      "Batalla de Chacabuco",
      "Batalla de Ayacucho",
      "Batalla de Junín"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál era la visión de San Martín para América del Sur?",
    options: [
      "Unión de todas las naciones latinoamericanas",
      "Independencia solo para Argentina y Chile",
      "Mantener el dominio español en la región",
      "Anexar Sudamérica a España",
      "Crear una confederación con Europa"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué año falleció José de San Martín?",
    options: [
      "1850",
      "1810",
      "1822",
      "1848",
      "1830"
    ],
    correctAnswer: 0
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