document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Darwin y la evolución";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/QEDQfqB8_lE"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Quién es considerado como la figura más destacada en el tema de la evolución?",
    options: [
      "a) Charles Darwin",
      "b) Albert Einstein",
      "c) Isaac Newton",
      "d) Marie Curie"
    ],
    correctAnswer: 0 // Respuesta correcta: a) Charles Darwin
  },
  {
    question: "¿Qué proceso es la base de todo cambio evolutivo y el mecanismo con el que la naturaleza selecciona a los seres vivos que logran sobrevivir y reproducirse?",
    options: [
      "a) Mutaciones genéticas",
      "b) Selección artificial",
      "c) Selección natural",
      "d) Herencia genética"
    ],
    correctAnswer: 2 // Respuesta correcta: c) Selección natural
  },
  {
    question: "¿En qué archipiélago Charles Darwin encontró diferencias y similitudes en un grupo de pequeñas aves terrestres que luego se convertirían en icono de evolución?",
    options: [
      "a) Islas Malvinas",
      "b) Islas Galápagos",
      "c) Islas Canarias",
      "d) Islas Baleares"
    ],
    correctAnswer: 1 // Respuesta correcta: b) Islas Galápagos
  },
  {
    question: "Según la teoría de Charles Darwin, ¿qué determina qué individuos logran sobrevivir y reproducirse dejando descendientes con características similares?",
    options: [
      "a) Mutaciones aleatorias",
      "b) Selección artificial",
      "c) Adaptación al medio ambiente",
      "d) Selección natural"
    ],
    correctAnswer: 3 // Respuesta correcta: d) Selección natural
  },
  {
    question: "¿Qué nos mostró la teoría de la evolución de Charles Darwin sobre el ser humano?",
    options: [
      "a) Somos la especie más inteligente del planeta",
      "b) Somos una especie más entre las muchas que evolucionan",
      "c) Somos descendientes directos de los dinosaurios",
      "d) Somos seres inmutables sin evolución"
    ],
    correctAnswer: 1 // Respuesta correcta: b) Somos una especie más entre las muchas que evolucionan
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
     window.location.href = "Pagina6.html";
     }