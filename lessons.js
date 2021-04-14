let tryElement = document.getElementById("try");
let scoreElement = document.getElementById("score");

let randomAlph = alph[Math.floor(Math.random() * 26)];
let score = 0;

tryElement.innerHTML = "Try: " + randomAlph;

function checkAnswer() {
    if (getTextScreen() == randomAlph) {
        score += 5;
        scoreElement.innerHTML = 'score: ' + score;
        randomAlph = alph[Math.floor(Math.random() * 26)];
        tryElement.innerHTML += "&nbsp"+"<img src='icon/check-icon.png' style='width:20px; position:absolute; filter:none'>";
        scoreElement.style.color = "lime";
        setTimeout(function() {
            tryElement.innerHTML = "Try: " + randomAlph;
            scoreElement.style.color = "#c8c8c8";
            clrTextScreen();
        }, 2000);
    }
}