// // Defining Variables
var containerQuestionEl = document.getElementById("questions_container");
var containerWelcomeEl = document.getElementById("welcome_page");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-complete");
var formInitialsEl = document.getElementById("initials-form");
var containerHighScoresEl = document.getElementById("highscore");
var containerScoreBoardEl = document.getElementById("score_board");
var correctEl = document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");
let next_question_button = document.getElementById("next-question-button");
let containerQuestions = document.getElementById("container-questions");
let finalScoreEl = document.getElementById("final_output");

// // question, answer and timer elements
var timerEl = document.querySelector("#timer");
var questionEl = document.getElementById("question");
var optionEl = document.getElementById("options");
// var answerEl = document.getElementById("answer");
var timeleft = 60;
var score = 0;
var gameover;
timerEl.innerText = 0;

// // High-score array

var HighScores = [];
var QuestionIndex = 0;
var arrayShuffledQuestions;

// // buttons
var btnStartEl = document.querySelector("#start-game");
var btnClearScoresEl = document.querySelector("#clear-btn");
var btnGoBackEl = document.querySelector("#back-btn");

// Questions array

var questions = [
  {
    question: "Question 1: Commonly used data types DO NOT include:",
    answer: "3. alerts",
    choices: [
      { choice: "1. strings" },
      { choice: "2. booleans" },
      { choice: "3. alerts" },
      { choice: "4. numbers" },
    ],
  },

  {
    question:
      "Question 2: The condition in an if/else statement is enclosed with ______________.",
    answer: "3. parenthesis",
    choices: [
      { choice: "1. quotes" },
      { choice: "2. curly brackets" },
      { choice: "3. parenthesis" },
      { choice: "4. square brackets" },
    ],
  },

  {
    question:
      "Question 3: Arrays in JavaScript can be used to store______________.",
    answer: "4. all of the above",
    choices: [
      { choice: "1. numbers and strings" },
      { choice: "2. other arrays" },
      { choice: "3. boolean" },
      { choice: "4. all of the above" },
    ],
  },

  {
    question:
      "Question 4: String values must be enclosed with______________ when assigned to variables.",
    answer: "3. quotes",
    choices: [
      { choice: "1. commas" },
      { choice: "2. curly brackets" },
      { choice: "3. quotes" },
      { choice: "4. parenthesis" },
    ],
  },

  {
    question:
      "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "1. console.log",
    choices: [
      { choice: "1. console.log" },
      { choice: "2. JavaScript" },
      { choice: "3. terminal/bash" },
      { choice: "4. for loops" },
    ],
  },
];
let questionNumber = 1;
function replaceQuestionDiv() {
  containerWelcomeEl.setAttribute("class", "hide");
  containerQuestionEl.setAttribute("class", "show");
}

let interval = () => {
  let timeInterval = setInterval(() => {
    timeleft--;
    timerEl.innerHTML = timeleft;
    if (timeleft == 0) {
      console.log("if");
      clearInterval(timeInterval);
      finalScore();
    }
  }, 1000);
};

// function to populate quiz
function populateQuizDetails() {
  let currentNumber = questionNumber;
  if (currentNumber == 6) {
    timeleft = 1;
    correctEl.setAttribute("class", "hide");
    incorrectEl.setAttribute("class", "hide");
    next_question_button.setAttribute("class", "hide");
    finalScore();
  } else {
    console.log(`value before ${currentNumber}`);
    next_question_button.setAttribute("class", "hide");
    correctEl.setAttribute("class", "hide");
    incorrectEl.setAttribute("class", "hide");
    optionEl.innerHTML = "";
    let currentQuestion = questions[currentNumber - 1];
    questionEl.innerHTML = currentQuestion.question;
    let choices = currentQuestion.choices;
    console.log(currentQuestion);
    let unorderedList = document.createElement("ul");

    for (let i = 0; i < choices.length; i++) {
      let listItem = document.createElement("li");
      listItem.setAttribute("data-answer", currentQuestion.answer);
      listItem.addEventListener("click", function (event) {
        console.log(event.target);

        let correctAnswer = event.target.dataset.answer;
        let text = event.target.innerHTML;
        if (text === correctAnswer) {
          correctEl.setAttribute("class", "show");
          incorrectEl.setAttribute("class", "hide");
          next_question_button.setAttribute("class", "show");
          score += 5;
        } else {
          incorrectEl.setAttribute("class", "show");
          correctEl.setAttribute("class", "hide");
          next_question_button.setAttribute("class", "show");
          timeleft -= 3;
          score -= 2;
        }
      });
      listItem.innerHTML = choices[i].choice;
      unorderedList.appendChild(listItem);
    }
    questionNumber++;

    console.log(questionNumber);
    optionEl.appendChild(unorderedList);
  }
}

function finalScore() {
  containerQuestions.setAttribute("class", "hide");
  containerScoreBoardEl.innerHTML = score;
  containerHighScoresEl.setAttribute("class", "show");
}

function countDown() {
  interval();
}

function initializeQuiz() {
  replaceQuestionDiv();
  next_question_button.addEventListener("click", function (event) {
    populateQuizDetails();
  });
  countDown();
  populateQuizDetails();
}

btnStartEl.addEventListener("click", function (event) {
  initializeQuiz();
});
