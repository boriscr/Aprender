document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "¿Qué son los RECURSOS NATURALES?";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/8DrWh--N74Y"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Qué recursos naturales son aquellos que la misma naturaleza repone a una velocidad lo suficientemente rápida como para contrarrestar su consumo?",
    options: [
      "a) Recursos naturales renovables",
      "b) Recursos naturales no renovables",
      "c) Recursos naturales minerales",
      "d) Recursos naturales energéticos",
      "e) Recursos naturales vegetales"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es el recurso natural no renovable proveniente de la descomposición a lo largo de millones de años de las sustancias químicas que forman a los seres vivos?",
    options: [
      "a) Agua",
      "b) Petróleo",
      "c) Sal marina",
      "d) Árboles",
      "e) Aire"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué recurso natural utilizamos no solo para darle sabor a nuestros alimentos, sino también como fuente de cloro y de metales alcalinos?",
    options: [
      "a) Agua",
      "b) Petróleo",
      "c) Sal marina",
      "d) Árboles",
      "e) Aire"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué recurso natural utilizamos principalmente como fuente de alimento y está compuesto por todas las especies animales que habitan en el mar?",
    options: [
      "a) Agua",
      "b) Petróleo",
      "c) Sal marina",
      "d) Fauna marina",
      "e) Aire"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es el recurso natural no renovable que se encuentra en cantidades limitadas y se utiliza principalmente como medio de inversión y en la fabricación de joyería fina?",
    options: [
      "a) Oro",
      "b) Gas natural",
      "c) Hierro",
      "d) Biogás",
      "e) Plata"
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