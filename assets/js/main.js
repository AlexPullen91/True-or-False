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

getNextStatement = () => {
  const statementIndex = Math.floor(Math.random() * availableStatements.length);
  currentStatement = availableStatements[statementIndex];
  statement.innerText = currentStatement.question;

  correctAnswer = currentStatement.correct_answer;
  wrongAnswer = currentStatement.incorrect_answers[0];

  if (correctAnswer === "True") {
    trueButton.innerText = correctAnswer;
    falseButton.innerText = wrongAnswer;
  } else if (correctAnswer === "False") {
    falseButton.innerText = correctAnswer;
    trueButton.innerText = wrongAnswer;
  }
};

startGame();
