document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "La Célula EUCARIOTA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/Q4niskgHHHM"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la principal diferencia entre una célula procariota y una célula eucariota?",
    options: [
      "a) Las células procariotas tienen membrana nuclear",
      "b) Las células eucariotas son unicelulares",
      "c) Las células procariotas tienen núcleo y orgánulos celulares",
      "d) Las células eucariotas se dividen por mitosis"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Las células procariotas tienen orgánulos
  },
  {
    question: "¿Qué orgánulo se encuentra en las células eucariotas y no en las células animales?",
    options: [
      "a) Cloroplasto",
      "b) Mitocondria",
      "c) Lisosoma",
      "d) Ribosoma"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Cloroplasto
  },
  {
    question: "¿Qué función desempeñan las mitocondrias en las células eucariotas?",
    options: [
      "a) Síntesis de proteínas",
      "b) Almacenamiento de agua",
      "c) Producción de energía",
      "d) Digestión de nutrientes"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Producción de energía
  },
  {
    question: "¿Cuál es la principal diferencia entre una célula eucariota animal y una célula eucariota vegetal?",
    options: [
      "a) Las células animales tienen cloroplastos",
      "b) Las células vegetales tienen vacuolas más grandes",
      "c) Las células animales tienen pared celular",
      "d) Las células vegetales se dividen por mitosis"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Las células vegetales tienen vacuolas más grandes
  },
  {
    question: "¿Qué proceso es exclusivo de las células vegetales?",
    options: [
      "a) Fotosíntesis",
      "b) Respiración celular",
      "c) Reproducción sexual",
      "d) Excreción de desechos"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Fotosíntesis
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina3.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina5.html";
     }