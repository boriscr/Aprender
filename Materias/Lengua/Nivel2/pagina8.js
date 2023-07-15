document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "TEXTOS LITERARIOS: FUNCION, ESTRUCTURA, TIPOS, CARACTERISTICAS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/i_ITB5R40rI"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es un texto literario?",
    options: [
      "a) Un grupo de oraciones conectadas que contienen diferentes informaciones pero de un solo tema",
      "b) Un grupo de oraciones organizadas en bloques llamados párrafos",
      "c) Textos que utilizan un lenguaje estético con el objetivo de embellecer las oraciones y llamar la atención del lector",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) Textos que utilizan un lenguaje estético con el objetivo de embellecer las oraciones y llamar la atención del lector
  },
  {
    question: "¿Cuál es la diferencia entre un texto literario y un texto no literario?",
    options: [
      "a) Los textos literarios son objetivos y utilizan el lenguaje en prosa, mientras que los textos no literarios buscan comunicar a través de lo bello y lo sublime",
      "b) Los textos literarios utilizan figuras literarias como la metáfora, la comparación, la hipérbole, etc., mientras que los textos no literarios son más objetivos y utilizan el lenguaje común y corriente",
      "c) Los textos literarios siguen un lenguaje estético durante toda la narrativa, mientras que los textos no literarios no comienzan hablando bonito y luego hablando normal",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Los textos literarios utilizan figuras literarias como la metáfora, la comparación, la hipérbole, etc., mientras que los textos no literarios son más objetivos y utilizan el lenguaje común y corriente
  },
  {
    question: "¿Cuáles son las características de un texto literario?",
    options: [
      "a) Utiliza un lenguaje estético, es ficcional y busca reflejar la perspectiva del autor sobre temas variados",
      "b) Sigue un lenguaje estético durante toda la narrativa y utiliza recursos discursivos como la narración, la descripción, el diálogo, etc.",
      "c) Puede tener diferentes tonos y estilos, y puede ser triste, alegre, irónico, etc.",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  },
  {
    question: "¿Cuáles son los tipos de textos literarios?",
    options: [
      "a) Narrativos, líricos y dramáticos",
      "b) Leyendas, mitos, crónicas, noticias, etc.",
      "c) Poesía, poemas, hadas, etc.",
      "d) Todas las anteriores"
    ],
    correctAnswer: 3 // La respuesta correcta es la opción d) Todas las anteriores
  },
  {
    question: "¿Cuál es la diferencia entre un pronombre personal tónico y un pronombre personal átono?",
    options: [
      "a) Los pronombres personales tónicos pueden aparecer solos o acompañados de un verbo, mientras que los pronombres personales átonos siempre van acompañados de un verbo",
      "b) Los pronombres personales tónicos son de primera persona, segunda persona y tercera persona, mientras que los pronombres personales átonos son de primera persona del singular y plural",
      "c) Los pronombres personales tónicos siguen un lenguaje estético durante toda la narrativa, mientras que los pronombres personales átonos son más objetivos y utilizan el lenguaje común y corriente",
      "d) Ninguna de las anteriores"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Los pronombres personales tónicos pueden aparecer solos o acompañados de un verbo, mientras que los pronombres personales átonos siempre van acompañados de un verbo
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