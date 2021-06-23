let practiceElem = document.querySelector(".practice");
let tryElement = document.getElementById("try");
let scoreElement = document.getElementById("score");
let xpElem = document.querySelector(".xp");
const trainingCheckbox = document.getElementById("training");

let score = 0;
let randomWord = "";
let words = 1;
let temp = "";

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

      randomWord = "";
      scoreElement.innerHTML = score;

      for (let i = 0; i < words; i++) {
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

// toggle practice opacity
trainingCheckbox.addEventListener("change", function () {
  if (this.checked) {
    practiceElem.style.opacity = "0.8";
  } else {
    practiceElem.style.opacity = "0.1";
  }
});
