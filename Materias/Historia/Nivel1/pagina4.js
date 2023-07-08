document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "¿Por qué sucedió el Golpe de Estado?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/sAwl4Mudi4U"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál fue la causa del fallecimiento del presidente Juan Domingo Perón?",
    options: [
      "Paro cardíaco",
      "Enfermedad respiratoria",
      "Accidente automovilístico",
      "Envenenamiento",
      "Suicidio"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Quién se convirtió en la sucesora de Juan Domingo Perón como presidenta de Argentina?",
    options: [
      "María Estela Martínez de Perón",
      "Cristina Fernández de Kirchner",
      "Eva Perón",
      "Isabel Allende",
      "Michelle Bachelet"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál era la principal amenaza que enfrentaba Isabel Perón durante su presidencia?",
    options: [
      "Revolución de corte socialista",
      "Invasión extranjera",
      "Crisis económica",
      "Conflictos territoriales",
      "Desastres naturales"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué medida tomó Isabel Perón para intentar contener la situación de inestabilidad en el país?",
    options: [
      "Buscar una coalición nacional con diferentes sectores de la sociedad",
      "Implementar políticas de austeridad",
      "Promover la libertad de expresión",
      "Crear programas de empleo",
      "Establecer un régimen autoritario"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué sucedió el 24 de marzo de 1976 en Argentina?",
    options: [
      "Se produjo un golpe militar y se estableció la junta militar en el poder",
      "Se celebraron elecciones democráticas",
      "Se proclamó la independencia del país",
      "Se firmó un tratado de paz con un país vecino",
      "Se declaró un estado de emergencia por desastre natural"
    ],
    correctAnswer: 0
  }
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