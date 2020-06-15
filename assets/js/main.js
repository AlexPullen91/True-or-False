const statement = document.getElementById("statement");
const trueButton = document.getElementById("trueButton");
const falseButton = document.getElementById("falseButton");
const score = document.getElementById("score");
const loadingText = document.getElementById("loadingText");
const mainHub = document.getElementById("mainHub");

let currentStatement = {};
let statementCounter = 0;
let availableStatements = [];
let scoreAmount = 0;

let statements = [];

fetch("https://opentdb.com/api.php?amount=20&type=boolean")
  .then((res) => {
    return res.json();
  })
  .then((loadedStatements) => {
    statements = loadedStatements.results;
    startGame();
  })
  .catch((err) => {
    console.log(err);
  });

startGame = () => {
  statementCounter = 0;
  scoreAmount = 0;
  availableStatements = [...statements];
  getNextStatement();
  mainHub.classList.remove("hidden");
  loadingText.classList.add("hidden");
};

const maxStatements = 20;
const correctAnswerPoints = 1;

getNextStatement = () => {
  if (availableStatements.length === 0 || statementCounter > maxStatements) {
    localStorage.setItem("mostRecentScore", scoreAmount);
    return window.location.assign("/gameOver.html");
  }
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

  if (selectedChoice === correctAnswer) {
    Swal.fire({
        title: 'Correct!',
        confirmButtonText: 'Next',
        confirmButtonColor: '#00af14'
    });
    incrementScore(correctAnswerPoints);
  } else {
    Swal.fire({
        title: 'Wrong!',
        confirmButtonText: 'Next',
        confirmButtonColor: '#e20000'
    })
  }

  getNextStatement();
});

falseButton.addEventListener("click", (e) => {
  let selectedChoice = e.target.innerHTML;

  if (selectedChoice === correctAnswer) {
    Swal.fire({
        title: 'Correct!',
        confirmButtonText: 'Next',
        confirmButtonColor: '#00af14'
    })
    incrementScore(correctAnswerPoints);
  } else {
    Swal.fire({
        title: 'Wrong!',
        confirmButtonText: 'Next',
        confirmButtonColor: '#e20000'
    })
  }

  getNextStatement();
});

incrementScore = (num) => {
  scoreAmount += num;
  score.innerHTML = `Score: ${scoreAmount}`;
};
