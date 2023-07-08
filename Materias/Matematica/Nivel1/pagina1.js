document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Conquista y Colonización";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/XLYB-GRE6Fk"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
var questions = [
    {
      question: "¿En que siglo se inició la conquista de América?",
      options: ["XV", "XVI", "XIV", "XII"],
      correctAnswer: 0
    },
    {
      question: "¿Quien inició la conquista de América?",
      options: ["Napoleón Bonaparte", "Cristóbal Colón", "Alejandro Magno", "Simón Bolívar"],
      correctAnswer: 1
    },
    {
      question: "Cristóbal Colón llegó por primera vez al continente americano en el año...",
      options: ["1492", "1592", "1482", "1490"],
      correctAnswer: 0
    },
    {
        question: "Conquista de Mexico:",
        options: ["1518", "1815", "1519", "1515"],
        correctAnswer: 2
      },
      {
        question: "Conquista de Mexico:",
        options: ["1518", "1815", "1519", "1515"],
        correctAnswer: 2
      },
    // Agregar más preguntas...
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