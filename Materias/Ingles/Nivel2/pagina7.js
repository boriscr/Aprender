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
      "Presenció con sus propios ojos la Revolución Francesa.",
      "Luchó contra los ingleses en la invasión a Buenos Aires en 1806.",
      "Luchó junto a San Martín en la Batalla de Chacabuco.",
      "No se sabe con exactitud quién las vio y documentó por primera vez.",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿En qué año nació Manuel Belgrano?",
    options: [
      "1770",
      "1789",
      "1793",
      "1810",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿En qué país presenció Manuel Belgrano la Revolución Francesa?",
    options: [
      "España",
      "Inglaterra",
      "Perú",
      "Francia",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué cargo ocupó Manuel Belgrano en la Primera Junta de Gobierno de Buenos Aires?",
    options: [
      "Vocal",
      "Secretario",
      "Presidente",
      "General en Jefe",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál fue la causa de la muerte de Manuel Belgrano?",
    options: [
      "Enfermedad",
      "Herida de guerra",
      "Pobreza",
      "Asesinato",
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