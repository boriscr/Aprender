document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Suma, resta, multiplicación y división de números enteros";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/q5w2-RRniOY"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la regla de signos que se aplica al multiplicar o dividir números enteros positivos y negativos?",
    options: [
      "a) Si multiplicamos o dividimos números con el mismo signo, el resultado es positivo. Si son diferentes, el resultado es negativo.",
      "b) Si multiplicamos o dividimos números con el mismo signo, el resultado es negativo. Si son diferentes, el resultado es positivo.",
      "c) Si sumamos o restamos números con el mismo signo, el resultado es positivo. Si son diferentes, el resultado es negativo.",
      "d) Si sumamos o restamos números con el mismo signo, el resultado es negativo. Si son diferentes, el resultado es positivo."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Si multiplicamos o dividimos números con el mismo signo, el resultado es positivo. Si son diferentes, el resultado es negativo.
  },
  {
    question: "¿Qué se hace cuando hay un signo negativo delante de un paréntesis en una operación con números enteros?",
    options: [
      "a) Se cambia de signo a todos los números dentro del paréntesis.",
      "b) Se suma el número negativo con el número dentro del paréntesis.",
      "c) Se multiplica el número negativo por el número dentro del paréntesis.",
      "d) No se hace ningún cambio en los números dentro del paréntesis."
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) Se cambia de signo a todos los números dentro del paréntesis.
  },
  {
    question: "¿Cuál es el resultado de la operación +2 + (-6)?",
    options: [
      "a) -8",
      "b) -4",
      "c) 8",
      "d) 4"
    ],
    correctAnswer: 1 // La respuesta correcta es la opción b) -4
  },
  {
    question: "¿Cuál es el resultado de la operación -4 x 3?",
    options: [
      "a) -12",
      "b) 12",
      "c) -7",
      "d) 7"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) -12
  },
  {
    question: "¿Cuál es el resultado de la operación 18 ÷ (-9)?",
    options: [
      "a) -2",
      "b) 2",
      "c) -6",
      "d) 6"
    ],
    correctAnswer: 0 // La respuesta correcta es la opción a) -2
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "../Home.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina2.html";
     }