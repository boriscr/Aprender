document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "El funcionamiento del sistema respiratorio";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/CEmcS_FPu2k"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la principal función del sistema respiratorio?",
    options: [
      "Obtener energía para los procesos corporales.",
      "Eliminar sustancias tóxicas del cuerpo.",
      "Proteger los pulmones de la contaminación.",
      "Regular la temperatura del cuerpo."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuáles son los órganos responsables del intercambio gaseoso en los pulmones?",
    options: [
      "Fosas nasales.",
      "Bronquios.",
      "Alvéolos.",
      "Tráquea."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué función tiene el diafragma en la respiración?",
    options: [
      "Filtrar el aire que se inhala.",
      "Separar la cavidad torácica de la abdominal.",
      "Dilatar la tráquea.",
      "Regular la presión sanguínea."
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué sucede durante el proceso de acondicionamiento del aire inhalado?",
    options: [
      "El aire se enfría y se filtra.",
      "El aire se calienta, se humidifica y se filtra.",
      "El aire se humidifica y se dilata.",
      "El aire se enfría y se humidifica."
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la consecuencia del tabaquismo en los pulmones?",
    options: [
      "Aumenta la capacidad pulmonar.",
      "Fortalece los músculos respiratorios.",
      "Provoca cambios en la morfología pulmonar.",
      "Reduce la incidencia de enfermedades respiratorias."
    ],
    correctAnswer: 2
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "../Nivel1/Pagina5.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina2.html";
     }