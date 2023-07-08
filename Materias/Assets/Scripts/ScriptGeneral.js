var currentQuestion = 0;
var score = 0;

function startQuiz() {
  document.getElementById("prueba-btn").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  var questionContainer = document.getElementById("questions");
  var questionElement = document.createElement("div");
  var questionText = document.createElement("h3");
  var optionContainer = document.createElement("div");

  questionText.textContent = questions[currentQuestion].question;
  questionElement.appendChild(questionText);

  for (var i = 0; i < questions[currentQuestion].options.length; i++) {
    var option = document.createElement("label");
    var input = document.createElement("input");
    var span = document.createElement("span");

    input.type = "radio";
    input.name = "answer";
    input.value = i;

    span.textContent = questions[currentQuestion].options[i];

    option.appendChild(input); 
    option.appendChild(span);
    optionContainer.appendChild(option);
  }

  questionElement.appendChild(optionContainer);
  questionContainer.appendChild(questionElement);
}

function verifyAnswers() {
  var selectedOption = document.querySelector("input[name='answer']:checked");

  if (selectedOption) {
    var answerFeedback = document.getElementById("answer-feedback");
    answerFeedback.innerHTML = "";

    var isCorrect = parseInt(selectedOption.value) === questions[currentQuestion].correctAnswer;
    var resultText = document.createElement("h4");
    resultText.textContent = isCorrect ? "¡Respuesta correcta!" : "Respuesta incorrecta.";
    resultText.classList.add(isCorrect ? "correct" : "incorrect");
    answerFeedback.appendChild(resultText);

    if (isCorrect) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      document.getElementById("questions").innerHTML = "";
      loadQuestion();
    } else {
      document.getElementById("verify-btn").style.display = "none";
      document.getElementById("result-container").style.display = "block";
      document.getElementById("title").textContent = "Resultado Final ";
      document.getElementById("final-score").textContent = "Respuestas Correctas: " + score + "/5";
      document.getElementById("next-btn").style.display = "block";
    }
  }
}
//##################################################################################
//Script de Respuestas

   // Obtener el elemento de la lista de respuestas por su ID
   var listaRespuestas = document.getElementById("respuestas-lista");

   // Recorrer el array de respuestas y agregar cada una como un elemento de la lista
   for (var i = 0; i < respuestas.length; i++) {
     var respuesta = respuestas[i];
     var listItem = document.createElement("p");
     listItem.innerText = respuesta.contenido;
     listaRespuestas.appendChild(listItem);
   }
//###################################################################################

//Botones de navegacion

     function Inicio() {
      // Redirigir a home
      window.location.href = "../../../Index.html";
         }