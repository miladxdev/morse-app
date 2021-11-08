const practiceElement = element(".practice");
const tryElement = element("#try");

let score = JSON.parse(localStorage.getItem("score"));
let randomLetter = "";
let letterCounter = 1;
let temp = "";

for (let i = 0; i < letterCounter; i++) {
  randomLetter += letters[Math.floor(Math.random() * 26)];
}

tryElement.innerHTML = randomLetter;

function resetAnimation(elem) {
  element(elem).style.animation = "none";
  element(elem).offsetHeight; /* trigger reflow */
  element(elem).style.animation = null;
}

function checkOutput() {
  if (getTextScreen() === "SOS") {
    resetAnimation("#clear-btn");
    resetAnimation("#morse-btn");
    resetAnimation("#delete-btn");

    element("#clear-btn").style.animation = "sos 1s ease 5 .1s";
    element("#morse-btn").style.animation = "sos 1s ease 5 .2s";
    element("#delete-btn").style.animation = "sos 1s ease 5 .3s";
  }

  if (element("#training-checkbox").checked) {
    if (getTextScreen() === randomLetter) {
      score += 5;
      localStorage.setItem("score", score);

      letterCounter = Math.floor(score / 100) + 1;

      randomLetter = "";
      element("#score").innerHTML = score;

      for (let i = 0; i < letterCounter; i++) {
        randomLetter += letters[Math.floor(Math.random() * 26)];
      }

      element(".xp").style.width = (score % 100) + "%";

      setTimeout(function () {
        tryElement.innerHTML = randomLetter;
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

// reset data
element("#reset-btn").onclick = () => {
  score = 0;
  element(".xp").style.width = 0;
  element("#score").innerHTML = 0;
  localStorage.setItem("score", 0);
};
