let tryElement = document.getElementById("try");
let scoreElement = document.getElementById("score");

let randomAlph = alph[Math.floor(Math.random() * alph.length)];
let score = 0;


tryElement.innerHTML = "Try: " + randomAlph;

function checkAnswer() {
    if (getTextScreen() == randomAlph) {
        score += 5;
        scoreElement.innerHTML = 'score: ' + score;
        randomAlph = alph[Math.floor(Math.random() * alph.length)];
        tryElement.innerHTML = "Try: " + randomAlph;
    }
}