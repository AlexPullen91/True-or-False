const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const playersScore = localStorage.getItem("playersScore");
const playerName = document.querySelector("#playerName");
const youScored = document.querySelector("#youScored");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
youScored.innerText = `You scored: ${playersScore}`;

playerName.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !playerName.value;
});

saveHighScore = (event) => {
  event.preventDefault();
  const score = {
    score: playersScore,
    name: playerName.value,
  };

  saveScoreBtn.disabled = true;
  playerName.disabled = true;
  saveScoreBtn.innerHTML = `Saved!`;

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScores));
};
