document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "¿QUÉ ES LA CÉLULA?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/wAqLtaRQMEA"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la clasificación de los organismos según el número de células que los componen?",
    options: [
      "Organismos eucariotas y procariotas",
      "Organismos autótrofos y heterótrofos",
      "Organismos unicelulares y pluricelulares",
      "Organismos vegetales y animales",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Cuál es la función de reproducción de las células?",
    options: [
      "Recepción y respuesta a estímulos",
      "Formación de nuevas células a partir de una célula madre",
      "Incorporación, transformación y asimilación de nutrientes",
      "Obtención de energía de moléculas orgánicas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es la clasificación de las células según la presencia de un núcleo celular?",
    options: [
      "Células autótrofas y heterótrofas",
      "Células eucariotas y procariotas",
      "Células unicelulares y pluricelulares",
      "Células vegetales y animales",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿De qué se encargan los ribosomas en la célula?",
    options: [
      "Formar proteínas",
      "Controlar las funciones celulares",
      "Regular el intercambio de sustancias con el ambiente",
      "Almacenar el material genético",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es la función principal del ADN en la célula?",
    options: [
      "Controlar las funciones celulares",
      "Obtener energía de moléculas inorgánicas",
      "Formar nuevas células a través de la división celular",
      "Transmitir caracteres hereditarios a la descendencia",
    ],
    correctAnswer: 3,
  },
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