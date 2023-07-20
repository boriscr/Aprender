document.getElementById("level").textContent = "Nivel 2";
document.getElementById("name-title").textContent = "La Revolución Francesa";
// Selecciona el elemento donde se desea insertar
var container = document.getElementById('video-container'); 
// Insertar el elemento 
container.innerHTML = ' <iframe src="https://www.youtube.com/embed/ttdq818TGD0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; 

//Preguntas
const questions = [
  {
    question: "¿Cuál fue el cambio social y político más importante que tuvo lugar en Europa a finales del siglo XVII?",
    options: [
      "a) La Revolución Industrial",
      "b) La Revolución Rusa",
      "c) La Revolución Francesa",
      "d) La Revolución Americana"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuáles fueron las principales ideas de la Ilustración?",
    options: [
      "a) La igualdad y la fraternidad",
      "b) La razón y la libertad",
      "c) La fe y la obediencia",
      "d) El poder absoluto y la sumisión"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál era la composición del Tercer Estado en la sociedad francesa?",
    options: [
      "a) La nobleza y el clero",
      "b) Los campesinos y los obreros",
      "c) Los comerciantes y los banqueros",
      "d) Los artistas y los intelectuales",
      "e) Opciones b, c y d"
    ],
    correctAnswer: 4
  },
  {
    question: "¿Qué suceso marcó el inicio de la Revolución Francesa?",
    options: [
      "a) La toma de la Bastilla",
      "b) La decapitación del rey Luis XVI",
      "c) La proclamación de la República",
      "d) La declaración de los Derechos del Hombre y del Ciudadano"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Quiénes lideraron la fase radical de la Revolución Francesa conocida como el 'Reino del Terror'?",
    options: [
      "a) Danton y Robespierre",
      "b) Luis XVI y María Antonieta",
      "c) Voltaire y Rousseau",
      "d) Montesquieu y Diderot"
    ],
    correctAnswer: 0
  }
];


//################################################################
//Botones de navegacion
  function backPage() {
    // Redirigir a la anterior página
     window.location.href = "Pagina9.html";
     }
     function homePage() {
      // Redirigir a home
      window.location.href = "../Home.html";
         }
  function nextPage() {
    // Redirigir a la siguiente página
     window.location.href = "../../Finalizado/Finalizado.html";
     }