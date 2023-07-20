document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La GUERRA de las MALVINAS";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/crHwvNe69V8"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
var questions = [
  {
    question: "¿Quién fue el descubridor de las Malvinas?",
    options: [
      "a) Alguno de los miembros de la tripulación de Magallanes-Elcano en 1520",
      "b) John Davis en 1592",
      "c) No se sabe con exactitud quién las vio y documentó por primera vez",
      "d) Los británicos en 1690"
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué país estableció el primer asentamiento firme en las Malvinas?",
    options: [
      "a) Francia en 1764",
      "b) España en 1767",
      "c) Holanda en 1764",
      "d) Inglaterra en 1770"
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué país reclamó las Malvinas en 1767 como una extensión de su imperio?",
    options: [
      "a) Francia",
      "b) Inglaterra",
      "c) España",
      "d) Holanda"
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué país expulsó a los argentinos de las Malvinas en 1833?",
    options: [
      "a) Francia",
      "b) Inglaterra",
      "c) España",
      "d) Holanda"
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál fue el resultado final de la guerra de las Malvinas en 1982?",
    options: [
      "a) Victoria argentina y recuperación de las islas",
      "b) Victoria británica y mantenimiento del control de las islas",
      "c) Acuerdo de paz y reparto de soberanía",
      "d) Independencia de las islas y autogobierno"
    ],
    correctAnswer: 1,
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina5.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina7.html";
     }