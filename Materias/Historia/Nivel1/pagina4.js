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
      "a) Paro cardíaco",
      "b) Enfermedad respiratoria",
      "c) Accidente automovilístico",
      "d) Envenenamiento",
      "e) Suicidio"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Quién se convirtió en la sucesora de Juan Domingo Perón como presidenta de Argentina?",
    options: [
      "a) María Estela Martínez de Perón",
      "b) Cristina Fernández de Kirchner",
      "c) Eva Perón",
      "d) Isabel Allende",
      "e) Michelle Bachelet"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál era la principal amenaza que enfrentaba Isabel Perón durante su presidencia?",
    options: [
      "a) Revolución de corte socialista",
      "b) Invasión extranjera",
      "c) Crisis económica",
      "d) Conflictos territoriales",
      "e) Desastres naturales"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué medida tomó Isabel Perón para intentar contener la situación de inestabilidad en el país?",
    options: [
      "a) Buscar una coalición nacional con diferentes sectores de la sociedad",
      "b) Implementar políticas de austeridad",
      "c) Promover la libertad de expresión",
      "d) Crear programas de empleo",
      "e) Establecer un régimen autoritario"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué sucedió el 24 de marzo de 1976 en Argentina?",
    options: [
      "a) Se produjo un golpe militar y se estableció la junta militar en el poder",
      "b) Se celebraron elecciones democráticas",
      "c) Se proclamó la independencia del país",
      "d) Se firmó un tratado de paz con un país vecino",
      "e) Se declaró un estado de emergencia por desastre natural"
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