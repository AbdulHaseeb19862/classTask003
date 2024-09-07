// const questions = [
//   {
//     quest: "What is 2 +2 ?",
//     choices: [1, 2, 3, 4],
//     answerIndex: 3,
//   },

//   {
//     quest: "What is 0 +2 ?",
//     choices: [1, 2, 3, 4],
//     answerIndex: 1,
//   },
// ];
// var currentIndex = 0;

// function showQuestion() {
//   var questionEl = document.getElementById("question");
//   questionEl.textContent = questions[currentIndex].quest;
//   document.getElementById("choice1").textContent =
//     questions[currentIndex].choices[0];
//   document.getElementById("choice2").textContent =
//     questions[currentIndex].choices[1];
//   document.getElementById("choice3").textContent =
//     questions[currentIndex].choices[2];
//   document.getElementById("choice4").textContent =
//     questions[currentIndex].choices[3];
// }

// function nextQuestion() {
//   currentIndex++;
//   showQuestion();
// }

// function checkAnswer(selectedOptionIndex) {
//   if (selectedOptionIndex === questions[currentIndex].answerIndex) {
//     alert("You got it right.");
//     // nextQuestion();
//     showQuestion();
//   } else {
//     alert("Wrong! try next time.");
//     // nextQuestion();
//     showQuestion();
//   }
// }

// showQuestion();

const questions = [
  {
    question: "What is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: true },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },

  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  console.log(selectedButton);
  const correctAnswer = selectedButton.dataset.correct === "true";
  if (correctAnswer) {
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

startQuiz();
