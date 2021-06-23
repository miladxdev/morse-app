let tryElement = document.getElementById("try");
let scoreElement = document.getElementById("score");
let xpElem = document.querySelector(".xp");
const trainingCheckbox = document.getElementById("training");

let score = 0;
let randomWord = "";
let words = 1;
let temp = "";

console.log(trainingCheckbox.checked);
for (let i = 0; i < words; i++) {
  randomWord += alph[Math.floor(Math.random() * 26)];
}
tryElement.innerHTML = randomWord;

function checkAnswer() {
  if (trainingCheckbox.checked) {
    if (getTextScreen() == randomWord) {
      score += 5;
      localStorage.setItem("score", score);

      words = Math.floor(score / 100) + 1;
      // console.log(words);
      randomWord = "";
      scoreElement.innerHTML = score;

      for (let i = 0; i < words; i++) {
        randomWord += alph[Math.floor(Math.random() * 26)];
      }

      // tryElement.style.color = "lime";
      // scoreElement.style.color = "lime";
      xpElem.style.width = (score % 100) + "%";

      setTimeout(function () {
        tryElement.innerHTML = randomWord;
        // scoreElement.style.color = "#c8c8c8";
        // tryElement.style.color = "#c8c8c8";
        clrTextScreen();
      }, 2000);
    }
  }
}
