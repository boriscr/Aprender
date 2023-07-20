document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Organización Nacional";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/W_3D1btuNTo"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
    {
      question: "Bajo qué régimen se rigieron los territorios que conformaban la Confederación Argentina hasta el año 1852?",
      options: [
        "a) Régimen federal rosista",
        "b) Régimen centralista de Buenos Aires",
        "c) Régimen unitario liderado por Mitre",
        "d) Régimen democrático de Urquiza"
      ],
      correctAnswer: 0
    },
    {
      question: "Quién se opuso a la sanción de una constitución y a la existencia de un gobierno central durante el período rosista?",
      options: [
        "a) Juan Manuel de Rosas",
        "b) Justo José de Urquiza",
        "c) Valentín Alsina",
        "d) Vicente López y Planes"
      ],
      correctAnswer: 0
    },
    {
      question: "Qué obstaculizó el comercio de las provincias del litoral durante el régimen rosista?",
      options: [
        "a) La falta de infraestructura vial",
        "b) La guerra contra los indígenas",
        "c) La libre navegación de los ríos interiores",
        "d) La participación de Buenos Aires en la Confederación"
      ],
      correctAnswer: 2
    },
    {
      question: "Quién encabezó la alianza que derrotó a las fuerzas de Buenos Aires en la batalla de Caseros en 1852?",
      options: [
        "a) Juan Manuel de Rosas",
        "b) Justo José de Urquiza",
        "c) Valentín Alsina",
        "d) Vicente López y Planes"
      ],
      correctAnswer: 1
    },
    {
      question: "Qué evento marcó el fin del gobierno rosista y el comienzo de la Organización Nacional en Argentina?",
      options: [
        "a) La sanción de una nueva constitución",
        "b) La firma del Pacto de San Nicolás",
        "c) La batalla de Pavón",
        "d) El levantamiento de Buenos Aires"
      ],
      correctAnswer: 1
    }
  ];
  
//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina2.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina4.html";
     }