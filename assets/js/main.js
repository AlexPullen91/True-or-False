window.onload = function () {
  Particles.init({
    selector: ".background",
    color: "#ffffff",
    connectParticles: true,
    speed: 0.2
  });
};

const statement = document.querySelector("#statement")
const trueButton = document.querySelector("#trueButton");
const falseButton = document.querySelector("#falseButton");
const score = document.querySelector("#score");
const loadingText = document.querySelector("#loadingText");
const mainHub = document.querySelector("#mainHub");
const maxStatements = 20;
const correctAnswerPoints = 1;

let availableStatements = [];
let statements = [];
let currentStatement = {};
let statementCounter = 0;
let scoreAmount = 0;


fetch("https://opentdb.com/api.php?amount=20&type=boolean")
  .then((res) => {
    return res.json();
  })
  .then((loadedStatements) => {
    startGame(loadedStatements.results);
  })
  .catch((err) => {
    console.log(err);
  });

const startGame = (results) => {
  statementCounter = 0;
  scoreAmount = 0;
  availableStatements = [...results];
  getNextStatement();
  mainHub.classList.remove("hidden");
  loadingText.classList.add("hidden");
};

getNextStatement = () => {
  if (availableStatements.length === 0 || statementCounter > maxStatements) {
    localStorage.setItem("mostRecentScore", scoreAmount);
    // return window.location.assign("/True-or-False/gameover.html");
    return window.location.assign("/gameover.html");
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

trueButton.addEventListener("click", (event) => {
  let selectedChoice = event.target.innerHTML;

  if (selectedChoice === correctAnswer) {
    Swal.fire({
        title: "Correct!",
        confirmButtonText: "Next",
        confirmButtonColor: "#00af14"
    });
    incrementScore(correctAnswerPoints);
  } else {
    Swal.fire({
        title: "Wrong!",
        confirmButtonText: "Next",
        confirmButtonColor: "#e20000"
    })
  }

  getNextStatement();
});

falseButton.addEventListener("click", (event) => {
  let selectedChoice = event.target.innerHTML;

  if (selectedChoice === correctAnswer) {
    Swal.fire({
        title: "Correct!",
        confirmButtonText: "Next",
        confirmButtonColor: "#00af14"
    })
    incrementScore(correctAnswerPoints);
  } else {
    Swal.fire({
        title: "Wrong!",
        confirmButtonText: "Next",
        confirmButtonColor: "#e20000"
    })
  }

  getNextStatement();
});

const incrementScore = (num) => {
  scoreAmount += num;
  score.innerHTML = `Score: ${scoreAmount} out of 20`;
};
