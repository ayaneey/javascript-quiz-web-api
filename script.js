// Defining Variables
var containerQuestionEl = document.getElementById("question_container");
var containerWelcomeEl = document.getElementById("welcome_page");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-complete");
var formInitials = document.getElementById("initials-form");
var containerHighScoreEl = document.getElementById("highscore");
var containerCheckScoreEl = document.getElementById("score_check");
var correctEl = document.getElementById("correct");
var incorrectEl = document.getElementById("incorrect");

// question, answer and timer elements
var timerEl = document.querySelector("#timer");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var timeleft;
var score = 0;
var gameover;
timerEl.innerText = 0;

// Highscore array

var HighScores = [];
var QuestionIndex = 0;
var arrayShuffledQuestions;

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
