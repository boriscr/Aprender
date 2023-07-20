document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "El SITEMA CIRCULATORIO";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/n1Sxp8AAUAw"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál es la función principal del sistema circulatorio?",
    options: [
      "Distribuir nutrientes a las células.",
      "Transportar gases respiratorios.",
      "Regular la temperatura corporal.",
      "Proteger el organismo contra patógenos."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuáles son las subdivisiones principales del sistema circulatorio?",
    options: [
      "Sistema cardiovascular y sistema respiratorio.",
      "Sistema respiratorio y sistema linfático.",
      "Sistema cardiovascular y sistema linfático.",
      "Sistema linfático y sistema endocrino."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué función cumple el corazón en el sistema circulatorio?",
    options: [
      "Distribuir la sangre a los pulmones.",
      "Regular la temperatura corporal.",
      "Bombeo de la sangre por todo el cuerpo.",
      "Filtrar la sangre y eliminar los desechos."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuáles son los tipos de vasos sanguíneos presentes en el sistema circulatorio?",
    options: [
      "Arterias, venas y capilares.",
      "Venas, linfáticos y arteriolas.",
      "Arteriolas, venas y linfáticos.",
      "Capilares y arterias."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es una función del sistema linfático en el sistema circulatorio?",
    options: [
      "Transportar la sangre oxigenada.",
      "Regular la presión sanguínea.",
      "Eliminar los desechos metabólicos.",
      "Filtrar la linfa y proteger contra agentes nocivos."
    ],
    correctAnswer: 3
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