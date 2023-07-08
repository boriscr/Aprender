document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "LÍMITES Y FRONTERAS de la ARGENTINA";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/WOuEBfWe1y0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la definición de límites en geografía?",
    options: [
      "a) Líneas imaginarias que se trazan en un mapa para dividir territorios.",
      "b) Construcciones sociales determinadas por la sociedad.",
      "c) Elementos de la naturaleza que separan países y ciudades.",
      "d) Líneas rectas que unen diferentes puntos estratégicos."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué criterio se utiliza para diferenciar los territorios en los límites geodésicos?",
    options: [
      "a) Uso de elementos naturales como ríos y montañas.",
      "b) Uso de redes de paralelos y meridianos.",
      "c) Uso de líneas rectas que unen diferentes puntos.",
      "d) Uso de fronteras basadas en la soberanía de los estados."
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál fue el criterio utilizado para establecer el límite entre Argentina y Uruguay?",
    options: [
      "a) Línea recta que pasa por la mitad del río Uruguay.",
      "b) Línea de mayor profundidad del río de la Plata.",
      "c) Uso de la zona de mayor profundidad del río Uruguay.",
      "d) Línea recta entre Punta Raza y Punta M."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál fue el resultado del arbitraje internacional entre Argentina y Brasil en 1895?",
    options: [
      "a) Falló a favor de Argentina.",
      "b) Falló a favor de Brasil.",
      "c) No se llegó a un acuerdo.",
      "d) Se decidió establecer una línea media."
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál fue el criterio utilizado para establecer el límite en los Andes patagónicos entre Argentina y Chile?",
    options: [
      "a) Divisorias de aguas en las altas cumbres.",
      "b) Línea recta que une los puntos de mayor altura.",
      "c) Línea de vaguada en los ríos.",
      "d) Arbitraje internacional."
    ],
    correctAnswer: 0
  }
];

//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina1.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "Pagina3.html";
     }