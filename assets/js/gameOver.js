const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const playersScore = localStorage.getItem("playersScore");
const playerName = document.querySelector("#playerName");
const youScored = document.querySelector("#youScored");
const saveScoreButton = document.querySelector("#saveScoreButton");
youScored.innerText = `You scored: ${playersScore}`;

/**
 * adds event listener that disables save button unless 
 * input field is typed in
 */
playerName.addEventListener("keyup", () => {
  saveScoreButton.disabled = !playerName.value;
});

/**
 * saves the users name and score when clicked
 * after click, input field and button are disabled to prevent
 * erroneous input and button text changes to alert the player.
 * top 10 scores are sorted highest to lowest then saved to local storage
 */
saveHighScore = (event) => {
  event.preventDefault();
  const score = {
    score: playersScore,
    name: playerName.value,
  };

  saveScoreButton.disabled = true;
  playerName.disabled = true;
  saveScoreButton.innerText = `Saved!`;

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScores));
};
