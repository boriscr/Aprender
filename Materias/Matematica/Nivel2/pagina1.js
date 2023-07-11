document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "CALCULAR UN PORCENTAJE";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/RE3XoDORMys"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué es un porcentaje?",
    options: [
      "a) Un número entero que representa una cantidad específica.",
      "b) Un símbolo matemático que representa una cantidad dada como una fracción en 100 partes iguales.",
      "c) Un tipo de operación matemática que involucra la suma de dos cantidades.",
      "d) Una medida de la amplitud de un ángulo en relación con un círculo completo."
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) Un símbolo matemático que representa una cantidad dada como una fracción en 100 partes iguales.
  },
  {
    question: "¿Qué significa que el 80 por ciento de la población es feliz?",
    options: [
      "a) Que 80 personas de cada 100 son felices.",
      "b) Que el 80 por ciento de las personas son felices en promedio.",
      "c) Que hay un total de 80 personas felices en la población.",
      "d) Que el 80 por ciento de las personas tienen la capacidad de ser felices."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Que 80 personas de cada 100 son felices.
  },
  {
    question: "¿Cómo se puede representar el porcentaje como una fracción?",
    options: [
      "a) Numerador igual al porcentaje y denominador igual a 100.",
      "b) Numerador igual a 100 y denominador igual al porcentaje.",
      "c) Numerador igual al porcentaje y denominador igual a la cantidad total.",
      "d) Numerador igual a la cantidad total y denominador igual al porcentaje."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Numerador igual al porcentaje y denominador igual a 100.
  },
  {
    question: "¿Cuál es el decimal equivalente al 60 por ciento?",
    options: [
      "a) 6",
      "b) 0.06",
      "c) 0.6",
      "d) 60"
    ],
    correctAnswer: 2 // La respuesta correcta es la opción c) 0.6
  },
  {
    question: "¿Cuál es la forma más rápida de obtener el resultado de un porcentaje?",
    options: [
      "a) Multiplicar la cantidad total por el decimal equivalente al porcentaje.",
      "b) Dividir la cantidad total entre el porcentaje y multiplicar por 100.",
      "c) Restar el porcentaje de 100 y multiplicar el resultado por la cantidad total.",
      "d) Sumar el porcentaje a 100 y multiplicar el resultado por la cantidad total."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Multiplicar la cantidad total por el decimal equivalente al porcentaje.
  },
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