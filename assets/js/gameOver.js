const mostRecentScore = localStorage.getItem("mostRecentScore");
const youScored = document.getElementById("youScored");
youScored.innerText = `You scored: ${mostRecentScore}`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

saveHighScore = (e) => {
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);

}