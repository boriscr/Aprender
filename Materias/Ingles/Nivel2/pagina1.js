document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La Conquista del Perú | Francisco Pizarro y el Imperio Inca";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/tjQJCgx4GGw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
var questions = [
  {
    question: "¿Cuál era el imperio más extenso de la América precolombina?",
    options: [
      "a) Imperio Azteca",
      "b) Imperio Inca",
      "c) Imperio Maya",
      "d) Imperio Chibcha"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué técnica utilizaban los incas para adaptarse al relieve y facilitar la distribución de agua?",
    options: [
      "a) Caminos de piedra",
      "b) Terrazas o andenes de cultivo",
      "c) Cultivo en terraplenes",
      "d) Sistemas de riego"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Quién lideró la conquista del Perú?",
    options: [
      "a) Hernán Cortés",
      "b) Vasco Núñez de Balboa",
      "c) Francisco Pizarro",
      "d) Hernando de Luque"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué estrategia utilizaron los españoles para capturar al Inca Atahualpa?",
    options: [
      "a) Emboscada en las montañas",
      "b) Negociaciones pacíficas",
      "c) Ataque sorpresa durante una entrevista",
      "d) Asedio a la ciudad de Cajamarca"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Por qué terminaron muertos los dos conquistadores más importantes de esta historia?",
    options: [
      "a) Fueron ejecutados por orden del Inca Atahualpa",
      "b) Murieron en combate durante la conquista del Perú",
      "c) Se enfrentaron en una guerra civil entre pizarristas y almagristas",
      "d) Fueron asesinados por sus propios hombres"
    ],
    correctAnswer: 2
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "../Nivel1/Pagina5.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina2.html";
     }