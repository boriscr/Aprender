document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La PRIMERA GUERRA MUNDIAL";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/P3BZGnkCn-M"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
var questions = [
  {
    question: "¿Cuál fue el conflicto armado más grande de la historia hasta la fecha mencionada?",
    options: [
      "a) Guerra de Trincheras",
      "b) Guerra Mundial",
      "c) Revolución Industrial",
      "d) Guerra de Independencia"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuáles eran los bloques bien definidos en el conflicto?",
    options: [
      "a) Triple Entente y Triple Alianza",
      "b) Alemania y Francia",
      "c) Reino Unido y Rusia",
      "d) Imperio Austrohúngaro e Italia"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Quién fue asesinado en Sarajevo, lo que desencadenó la guerra?",
    options: [
      "a) Francisco Fernando de Austria",
      "b) Francisco Pizarro",
      "c) Napoleón Bonaparte",
      "d) Winston Churchill"
    ],
    correctAnswer: 0
  },
  {
    question: "¿En qué batalla los aliados lograron detener el avance alemán hacia París?",
    options: [
      "a) Batalla del Marne",
      "b) Batalla de Waterloo",
      "c) Batalla de Tanember",
      "d) Batalla de Gallipoli"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué estrategia adoptaron ambos bandos una vez estabilizados los frentes?",
    options: [
      "a) Guerra de Desgaste",
      "b) Guerra Móvil",
      "c) Guerra Química",
      "d) Guerra Aérea"
    ],
    correctAnswer: 0
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