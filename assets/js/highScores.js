const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const highScoresResults = document.querySelector("#highScoresResults");

/**
 * iterates through each score in highscores array and 
 * and adds an <li></li> to the list
 */
highScoresResults.innerHTML = highScores.map(score => {
    return `<li class="high-score-list-items">${score.name} - ${score.score}</li>`;
}).join("")
