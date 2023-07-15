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
      options: ["a) XV", "b) XVI", "c) XIV", "d) XII"],
      correctAnswer: 0
    },
    {
      question: "¿Quien inició la conquista de América?",
      options: ["a) Napoleón Bonaparte", "b) Cristóbal Colón", "c) Alejandro Magno", "d) Simón Bolívar"],
      correctAnswer: 1
    },
    {
      question: "Cristóbal Colón llegó por primera vez al continente americano en el año...",
      options: ["a) 1492", "b) 1592", "c) 1482", "d) 1490"],
      correctAnswer: 0
    },
    {
        question: "Conquista de Mexico:",
        options: ["a) 1518", "b) 1815", "c) 1519", "d) 1515"],
        correctAnswer: 2
      },
      {
        question: "La ciudad del Dorado era:",
        options: ["a) Ciudad Inca", "b) Ciudad de Azteca", "c) Ciudad hecha de oro", "d) Ninguna de las anteriores"],
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