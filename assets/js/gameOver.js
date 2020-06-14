const mostRecentScore = localStorage.getItem("mostRecentScore");
youScored.innerText = `You scored: ${mostRecentScore}`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

saveHighScore = (e) => {
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    console.log(score);

}