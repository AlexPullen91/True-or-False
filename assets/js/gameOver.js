const mostRecentScore = localStorage.getItem("mostRecentScore");
score.innerText = `You scored: ${mostRecentScore}`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
