const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const playerName = document.getElementById("playerName");
const youScored = document.getElementById("youScored");
const saveScoreBtn = document.getElementById("saveScoreBtn");
youScored.innerText = `You scored: ${mostRecentScore}`;

playerName.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !playerName.value;
});

saveHighScore = (e) => {
  e.preventDefault();
  const score = {
    score: mostRecentScore,
    name: playerName.value,
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(10);

  localStorage.setItem("highScores", JSON.stringify(highScores));
};
