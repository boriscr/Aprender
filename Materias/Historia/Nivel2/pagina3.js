document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La GUERRA de la TRIPLE ALIANZA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/dtTnWayxPOY"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
var questions = [
  {
    question: "¿Cuál fue la mayor guerra de la historia de América Latina?",
    options: [
      "a) Guerra de la Independencia",
      "b) Guerra de la Triple Alianza",
      "c) Guerra Civil de Uruguay",
      "d) Guerra de la Triple Entente"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuáles fueron los países que formaron la Triple Alianza en la guerra?",
    options: [
      "a) Brasil, Argentina y Paraguay",
      "b) Brasil, Argentina y Uruguay",
      "c) Brasil, Paraguay y Uruguay",
      "d) Argentina, Paraguay y Uruguay"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál fue el país que invadió Uruguay en el conflicto?",
    options: [
      "a) Paraguay",
      "b) Argentina",
      "c) Brasil",
      "d) Reino Unido"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál fue la batalla más importante de la guerra de la Triple Alianza?",
    options: [
      "a) Batalla de Riachuelo",
      "b) Batalla de Corrientes",
      "c) Batalla de Tuyutí",
      "d) Batalla de Itá Ibaté"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál fue la última campaña de la guerra, donde los brasileños atacaron a Paraguay?",
    options: [
      "a) Campaña de Humaitá",
      "b) Campaña de Corrientes",
      "c) Campaña de Itá Ibaté",
      "d) Campaña de las Cordilleras"
    ],
    correctAnswer: 3
  }
];


//################################################################
//Respuestas
/*
var respuestas = [
  {
    id: 1,
    contenido: "¿Cuál fue la mayor guerra de la historia de América Latina? Respuesta correcta: b) Guerra de la Triple Alianza"
  },
  {
    id: 2,
    contenido: "¿Cuáles fueron los países que formaron la Triple Alianza en la guerra? Respuesta correcta: b) Brasil, Argentina y Uruguay"
  },
  {
    id: 3,
    contenido: "¿Cuál fue el país que invadió Uruguay en el conflicto? Respuesta correcta: c) Brasil"
  },
  {
    id: 4,
    contenido: "¿Cuál fue la batalla más importante de la guerra de la Triple Alianza? Respuesta correcta: c) Batalla de Tuyutí"
  },
  {
    id: 5,
    contenido: "¿Cuál fue la última campaña de la guerra, donde los brasileños atacaron la retaguardia paraguaya? Respuesta correcta: d) Campaña de las Cordilleras"
  }
];
var respuestas = [
  {
    id: 1,
    contenido: questions[0].question + " Respuesta correcta: " + questions[0].options[questions[0].correctAnswer]
  },
  {
    id: 2,
    contenido: questions[1].question + " Respuesta correcta: " + questions[1].options[questions[1].correctAnswer]
  },
  {
    id: 3,
    contenido: questions[2].question + " Respuesta correcta: " + questions[2].options[questions[2].correctAnswer]
  },
  {
    id: 4,
    contenido: questions[3].question + " Respuesta correcta: " + questions[3].options[questions[3].correctAnswer]
  },
  {
    id: 5,
    contenido: questions[4].question + " Respuesta correcta: " + questions[4].options[questions[4].correctAnswer]
  }
];*/


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