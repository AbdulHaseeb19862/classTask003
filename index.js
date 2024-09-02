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


