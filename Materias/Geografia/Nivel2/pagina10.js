document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "ASIA 🌏 Banderas Paises Capitales";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/mBOJy4dzcPU"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la capital de Malasia?",
    options: [
      "Kuala Lumpur",
      "Hanoi",
      "Bangkok",
      "Yakarta",
      "Singapur"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es la capital de Jordania?",
    options: [
      "Damasco",
      "Teherán",
      "Amman",
      "Riyadh",
      "Mascate"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Tailandia?",
    options: [
      "Dili",
      "Hanoi",
      "Bangkok",
      "Phnom Penh",
      "Colombo"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de India?",
    options: [
      "Islamabad",
      "Katmandú",
      "Nueva Delhi",
      "Mumbai",
      "Kabul"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la capital de Corea del Sur?",
    options: [
      "Seúl",
      "Pyongyang",
      "Tokio",
      "Beijing",
      "Taipei"
    ],
    correctAnswer: 0
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina9.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "../../Finalizado/Finalizado.html";
     }