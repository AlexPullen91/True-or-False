const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const mostRecentScore = localStorage.getItem("mostRecentScore");
const playerName = document.querySelector("#playerName");
const youScored = document.querySelector("#youScored");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
youScored.innerText = `You scored: ${mostRecentScore}`;

playerName.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !playerName.value;
});

saveHighScore = (event) => {
  event.preventDefault();
  const score = {
    score: mostRecentScore,
    name: playerName.value,
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScores));
};
