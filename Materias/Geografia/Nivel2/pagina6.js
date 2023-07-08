document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "AMÉRICA LATINA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/hrcVBHVXlm8"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es el concepto que engloba a los países donde el español es la lengua materna?",
    options: [
      "Hispanicamérica",
      "Iberoamérica",
      "Latinoamérica",
      "Hispanoamérica"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué territorio se destaca por tener las mejores playas del planeta, la selva más biodiversa y la red hidrográfica con mayor caudal del mundo?",
    options: [
      "América del Norte",
      "América Latina",
      "Europa",
      "Asia"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué término incluye a los países que tienen tanto el español como el portugués como idiomas oficiales?",
    options: [
      "Hispanicamérica",
      "Iberoamérica",
      "Latinoamérica",
      "Lusoamérica"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál fue el origen del término 'América Latina'?",
    options: [
      "Francia",
      "Estados Unidos",
      "España",
      "Inglaterra"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué país latinoamericano tiene las mayores reservas de petróleo del mundo?",
    options: [
      "Venezuela",
      "México",
      "Brasil",
      "Argentina"
    ],
    correctAnswer: 0
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