document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "TEOREMA DE PITAGORAS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/eTEBvBIz8Ok"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Quién fue Pitágoras?",
    options: [
      "a) Un filósofo y matemático griego",
      "b) Un científico egipcio",
      "c) Un filósofo romano",
      "d) Un matemático chino"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Un filósofo y matemático griego
  },
  {
    question: "¿Qué es un triángulo rectángulo?",
    options: [
      "a) Un triángulo con tres lados iguales.",
      "b) Un triángulo con un ángulo de 90 grados.",
      "c) Un triángulo con un ángulo agudo.",
      "d) Un triángulo con ángulos rectos."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Un triángulo con un ángulo de 90 grados.
  },
  {
    question: "¿Cómo se llama el lado más largo de un triángulo rectángulo?",
    options: [
      "a) Hipotenusa",
      "b) Cateto",
      "c) Ángulo recto",
      "d) Base"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Hipotenusa
  },
  {
    question: "¿Cómo se llaman los lados que no son la hipotenusa en un triángulo rectángulo?",
    options: [
      "a) Catetos",
      "b) Hipotenusa",
      "c) Ángulo recto",
      "d) Base"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Catetos
  },
  {
    question: "¿Cómo se calcula el cuadrado de un número?",
    options: [
      "a) Multiplicando el número por sí mismo.",
      "b) Sumando el número consigo mismo.",
      "c) Dividiendo el número entre sí mismo.",
      "d) Restando el número a sí mismo."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Multiplicando el número por sí mismo.
  },
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