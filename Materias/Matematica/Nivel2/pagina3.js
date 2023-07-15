document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "TEOREMA DE TALES";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/staL7w-eT58"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Quién es considerado el padre de la geometría?",
    options: [
      "a) Heródoto",
      "b) Euclides",
      "c) Tales de Mileto",
      "d) René Descartes"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Euclides
  },
  {
    question: "¿Qué son los triángulos semejantes?",
    options: [
      "a) Triángulos con la misma forma, ángulos iguales y lados proporcionales.",
      "b) Triángulos con la misma forma, pero distinta orientación.",
      "c) Triángulos con ángulos iguales, pero lados de diferente longitud.",
      "d) Triángulos con lados iguales, pero ángulos de diferente medida."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Triángulos con la misma forma, ángulos iguales y lados proporcionales.
  },
  {
    question: "¿Qué son las líneas paralelas?",
    options: [
      "a) Líneas que se cruzan en un punto.",
      "b) Líneas que tienen la misma longitud.",
      "c) Líneas que mantienen la misma distancia y nunca se cruzan.",
      "d) Líneas que forman ángulos rectos entre sí."
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Líneas que mantienen la misma distancia y nunca se cruzan.
  },
  {
    question: "¿Cuál es el primer teorema de Tales?",
    options: [
      "a) Si se traza una línea paralela a uno de los lados de un triángulo, se obtiene un triángulo semejante.",
      "b) La suma de los ángulos interiores de un triángulo es siempre igual a 180 grados.",
      "c) La longitud de un segmento es proporcional a la longitud de otro segmento paralelo a él.",
      "d) El cuadrado de la hipotenusa de un triángulo rectángulo es igual a la suma de los cuadrados de los catetos."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Si se traza una línea paralela a uno de los lados de un triángulo, se obtiene un triángulo semejante.
  },
  {
    question: "¿Qué se puede obtener al aplicar el teorema de Tales en un triángulo?",
    options: [
      "a) Triángulos con la misma forma pero de diferente tamaño.",
      "b) Triángulos con la misma forma y tamaño.",
      "c) Triángulos con lados de igual longitud.",
      "d) Triángulos con ángulos rectos."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Triángulos con la misma forma pero de diferente tamaño.
  },
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