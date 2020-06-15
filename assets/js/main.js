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
const correctAnswerPoint = 1;

let availableStatements = [];
let statements = [];
let currentStatement = {};
let statementCounter = 0;
let scoreAmount = 0;

/**
 * pulls questions from an API and passes them
 * into start game function
 */
fetch("https://opentdb.com/api.php?amount=20&type=boolean")
  .then((res) => {
    return res.json();
  })
  .then((loadedStatements) => {
    startGame(loadedStatements.results);
  })
  .catch(error => {
    console.error('Error:', error);
  });

/**
 * loads questions, sets score and counter to 0
 * calls next statement function and hides loader / reveals game
 */
const startGame = (results) => {
  statementCounter = 0;
  scoreAmount = 0;
  availableStatements = [...results];
  getNextStatement();
  mainHub.classList.remove("hidden");
  loadingText.classList.add("hidden");
};

/**
 * grabs the next statement until the cap is reached
 * sets the players score and moves onto the game over page.
 * randomly sorts the statements and displays them through the DOM
 * assigns correct and wrong answer to relevant buttons
 * removes a question from the array each time it's called
 */
getNextStatement = () => {
  if (availableStatements.length === 0 || statementCounter > maxStatements) {
    localStorage.setItem("playersScore", scoreAmount);
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

/**
 * adds click event to true button that checks for correct answer
 * awards a point if true then calls next statement
 */
trueButton.addEventListener("click", (event) => {
  let playersChoice = event.target.innerHTML;

  if (playersChoice === correctAnswer) {
    Swal.fire({
        title: "Correct!",
        confirmButtonText: "Next",
        confirmButtonColor: "#00af14"
    });
    increaseScore(correctAnswerPoint);
  } else {
    Swal.fire({
        title: "Wrong!",
        confirmButtonText: "Next",
        confirmButtonColor: "#e20000"
    })
  }

  getNextStatement();
});

/**
 * adds click event to false button that checks for correct answer
 * awards a point if true then calls next statement
 */
falseButton.addEventListener("click", (event) => {
  let playersChoice = event.target.innerHTML;

  if (playersChoice === correctAnswer) {
    Swal.fire({
        title: "Correct!",
        confirmButtonText: "Next",
        confirmButtonColor: "#00af14"
    })
    increaseScore(correctAnswerPoint);
  } else {
    Swal.fire({
        title: "Wrong!",
        confirmButtonText: "Next",
        confirmButtonColor: "#e20000"
    })
  }

  getNextStatement();
});

/**
 * updates scoreAmount variable which each point gained
 * sets the score text dynamically
 */
const increaseScore = (num) => {
  scoreAmount += num;
  score.innerText = `Score: ${scoreAmount} out of 20`;
};
