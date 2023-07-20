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
      "a) Corrientes",
      "b) Buenos Aires",
      "c) Mendoza",
      "d) Córdoba"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué país realizó sus estudios José de San Martín?",
    options: [
      "a) España",
      "b) Francia",
      "c) Portugal",
      "d) Inglaterra"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué batalla San Martín luchó al frente de los Granaderos a Caballo?",
    options: [
      "a) Batalla de Maipú",
      "b) Batalla de San Lorenzo",
      "c) Batalla de Chacabuco",
      "d) Batalla de Ayacucho"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál era la visión de San Martín para América del Sur?",
    options: [
      "a) Unión de todas las naciones latinoamericanas",
      "b) Independencia solo para Argentina y Chile",
      "c) Mantener el dominio español en la región",
      "d) Anexar Sudamérica a España"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué año falleció José de San Martín?",
    options: [
      "a) 1822",
      "b) 1810",
      "c) 1850",
      "d) 1848"
    ],
    correctAnswer: 2
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