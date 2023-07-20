document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "Manuel Belgrano";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/NgzripRk6C0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál de las siguientes afirmaciones sobre Manuel Belgrano no es correcta?",
    options: [
      "a) Presenció con sus propios ojos la Revolución Francesa.",
      "b) Luchó contra los ingleses en la invasión a Buenos Aires en 1806.",
      "c) Luchó junto a San Martín en la Batalla de Chacabuco.",
      "d) Todas son correctas",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿En qué año nació Manuel Belgrano?",
    options: [
      "a) 1770",
      "b) 1789",
      "c) 1793",
      "d) 1810",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿En qué país presenció Manuel Belgrano la Revolución Francesa?",
    options: [
      "a) España",
      "b) Inglaterra",
      "c) Perú",
      "d) Francia",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué cargo ocupó Manuel Belgrano en la Primera Junta de Gobierno de Buenos Aires?",
    options: [
      "a) Vocal",
      "b) Secretario",
      "c) Presidente",
      "d) General en Jefe",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál fue la causa de la muerte de Manuel Belgrano?",
    options: [
      "a) Enfermedad",
      "b) Herida de guerra",
      "c) Pobreza",
      "d) Asesinato",
    ],
    correctAnswer: 0,
  },
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina6.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina8.html";
     }