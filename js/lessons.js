const practiceElem = selectElem(".practice");
const tryElement = selectElem("#try");
const xpElem = selectElem(".xp");

let score = 0;
let randomWord = "";
let letters = 1;
let temp = "";

for (let i = 0; i < letters; i++) {
  randomWord += alph[Math.floor(Math.random() * 26)];
}

tryElement.innerHTML = randomWord;

function checkAnswer() {
  if (selectElem("#training").checked) {
    if (getTextScreen().toUpperCase() === randomWord) {
      score += 5;
      localStorage.setItem("score", score);

      letters = Math.floor(score / 100) + 1;

      randomWord = "";
      selectElem("#score").innerHTML = score;

      for (let i = 0; i < letters; i++) {
        randomWord += alph[Math.floor(Math.random() * 26)];
      }

      xpElem.style.width = (score % 100) + "%";

      setTimeout(function () {
        tryElement.innerHTML = randomWord;
        clrTextScreen();
      }, 2000);
    }
  }
}

// toggle practice mode
selectElem("#training").addEventListener("change", function () {
  if (this.checked) {
    practiceElem.style.opacity = "0.8";
  } else {
    practiceElem.style.opacity = "0.1";
  }
});
