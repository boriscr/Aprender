document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Anatomía del SISTEMA DIGESTIVO";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/9cOwNxqn5dk"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la función principal de la boca en el sistema digestivo?",
    options: [
      "a) Inicio de la digestión",
      "b) Producción de bilis",
      "c) Absorción de nutrientes",
      "d) Excreción de desechos",
      "e) Filtración de nutrientes"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué función cumple la lengua en el sistema digestivo?",
    options: [
      "a) Deglución de alimentos",
      "b) Producción de enzimas digestivas",
      "c) Absorción de agua",
      "d) Filtración de nutrientes",
      "e) Excreción de desechos"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la función principal de las glándulas salivales en el sistema digestivo?",
    options: [
      "a) Producción de saliva",
      "b) Producción de bilis",
      "c) Absorción de nutrientes",
      "d) Secreción de enzimas digestivas",
      "e) Excreción de desechos"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Dónde se encuentra el esfínter gastroesofágico en el sistema digestivo?",
    options: [
      "a) Entre el esófago y el estómago",
      "b) Entre el estómago y el intestino delgado",
      "c) Entre el intestino delgado y el intestino grueso",
      "d) Entre el recto y el ano",
      "e) Entre el hígado y el páncreas"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la función principal del intestino grueso en el sistema digestivo?",
    options: [
      "a) Formación de heces",
      "b) Absorción de nutrientes",
      "c) Producción de bilis",
      "d) Producción de enzimas digestivas",
      "e) Excreción de desechos"
    ],
    correctAnswer: 0
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina2.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina4.html";
     }