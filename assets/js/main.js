const statement = document.getElementById("statement");
const trueButton = document.getElementById("trueButton");
const falseButton = document.getElementById("falseButton");

let currentStatement = {};
let statementCounter = 0;
let availableStatements = [];

let statements = [
  {
    category: "Animals",
    type: "boolean",
    difficulty: "medium",
    question: "An octopus can fit through any hole larger than its beak.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "French is an official language in Canada.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Musicals & Theatres",
    type: "boolean",
    difficulty: "easy",
    question:
      "In the play Oedipus Rex, Oedipus kills his father due to jealousy in loving his mother.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

startGame = () => {
  statementCounter = 0;
  availableStatements = [...statements];
  getNextStatement();
};

const maxStatements = 3;

getNextStatement = () => {
  if (availableStatements.length === 0 || statementCounter > maxStatements) {
    return window.location.assign("/gameOver.html");
  }
  debugger;
  statementCounter++;
  const statementIndex = Math.floor(Math.random() * availableStatements.length);
  currentStatement = availableStatements[statementIndex];
  statement.innerHTML = currentStatement.question;

  correctAnswer = currentStatement.correct_answer;
  wrongAnswer = currentStatement.incorrect_answers[0];

  if (correctAnswer === "True") {
    trueButton.innerHTML = correctAnswer;
    falseButton.innerHTML = wrongAnswer;
  } else if (correctAnswer === "False") {
    falseButton.innerHTML = correctAnswer;
    trueButton.innerHTML = wrongAnswer;
  }

  availableStatements.splice(statementIndex, 1);
};

trueButton.addEventListener("click", (e) => {
  let selectedChoice = e.target.innerHTML;

  if(selectedChoice === correctAnswer) {
      alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
    }

  getNextStatement();
});

falseButton.addEventListener("click", (e) => {
  let selectedChoice = e.target.innerHTML;
  
  if(selectedChoice === correctAnswer) {
      alert("Correct Answer!");
    } else {
        alert("Wrong Answer!");
    }

  getNextStatement();
});

startGame();
