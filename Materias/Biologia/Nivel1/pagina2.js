document.getElementById("level").textContent = "Nivel 1";
document.getElementById("name-title").textContent = "Revolución de Mayo";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/nk47_v00buw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuáles fueron los factores que generaron inquietud entre los criollos antes del 25 de mayo de 1810?",
    options: [
      "Las invasiones inglesas y la Revolución Industrial.",
      "La Revolución Francesa y la independencia de las colonias inglesas.",
      "Las noticias de la institución del rey Fernando VII y la Revolución Industrial.",
      "Las invasiones inglesas y las noticias de la institución del rey Fernando VII.",
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué suceso ocurrió en enero de 1810 en España y cómo afectó al continente americano?",
    options: [
      "Caída de la Junta Central y avance del ejército francés.",
      "Independencia de las colonias inglesas y caída del virrey Cisneros.",
      "Revolución Industrial y caída del virrey Cisneros.",
      "Revolución Francesa y caída de la Junta Central.",
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cómo intentó el virrey Cisneros ocultar la noticia sobre la caída de la Junta Central en España?",
    options: [
      "Aceptando la divulgación de la noticia.",
      "Utilizando espías para difundir la información.",
      "Impidiendo la divulgación de la noticia.",
      "Anunciando públicamente la caída de la Junta Central.",
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué evento importante ocurrió el 19 de mayo de 1810 y qué se decidió en él?",
    options: [
      "Convocatoria a un cabildo abierto para decidir el gobierno en ausencia de la Junta Central.",
      "Renuncia del virrey Cisneros y formación de la primera junta de gobierno.",
      "Anuncio de la independencia de España por parte de los criollos.",
      "Caída de la institución del virrey y nombramiento de una junta provisoria.",
    ],
    correctAnswer: 0
  },
  {
    question: "¿Quiénes formaron la primera junta de gobierno el 25 de mayo de 1810?",
    options: [
      "Españoles y representantes de la Corona.",
      "Criollos y líderes militares.",
      "Ingleses y revolucionarios franceses.",
      "Indígenas y esclavos.",
    ],
    correctAnswer: 1
  }
      // Agregar más preguntas...
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