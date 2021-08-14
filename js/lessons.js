const practiceElement = element(".practice");
const tryElement = element("#try");
const xpElement = element(".xp");

let score = 0;
let randomWord = "";
let letters = 1;
let temp = "";

for (let i = 0; i < letters; i++) {
  randomWord += alph[Math.floor(Math.random() * 26)];
}

tryElement.innerHTML = randomWord;

function resetAnimation(element) {
  element.style.animation = "none";
  element.offsetHeight; /* trigger reflow */
  element.style.animation = null;
}

function checkOutput() {
  if (getTextScreen() === "SOS") {
    resetAnimation(element("#clear-btn"));
    resetAnimation(element("#morse-btn"));
    resetAnimation(element("#delete-btn"));
    element("#clear-btn").style.animation = "sos 1s ease 5 .1s";
    element("#morse-btn").style.animation = "sos 1s ease 5 .2s";
    element("#delete-btn").style.animation = "sos 1s ease 5 .3s";
  }

  if (element("#training-checkbox").checked) {
    if (getTextScreen() === randomWord) {
      score += 5;
      localStorage.setItem("score", score);

      letters = Math.floor(score / 100) + 1;

      randomWord = "";
      element("#score").innerHTML = score;

      for (let i = 0; i < letters; i++) {
        randomWord += alph[Math.floor(Math.random() * 26)];
      }

      xpElement.style.width = (score % 100) + "%";

      setTimeout(function () {
        tryElement.innerHTML = randomWord;
        clrTextScreen();
      }, 2000);
    }
  }
}

// toggle practice mode
element("#training-checkbox").addEventListener("change", function () {
  if (this.checked) {
    practiceElement.style.opacity = "0.8";
  } else {
    practiceElement.style.opacity = "0.1";
  }
});
