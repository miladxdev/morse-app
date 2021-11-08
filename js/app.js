// prettier-ignore
const signals = [
  ".-", "-...", "-.-.", "-..", ".", "..-.","--.",
  "....", "..", ".---", "-.-", ".-..","--", "-.",
  "---", ".--.", "--.-", ".-.", "...", "-", "..-",
  "...-", ".--", "-..-", "-.--", "--..", "-----",
  ".----", "..---", "...--", "....-", ".....",
  "-....", "--...", "---..", "----.", ".-.-.-",
  "--..--", "---...", "..--..", ".----.", "-....-",
  "-..-.",".-..-.",".--.-.","-...-","---.",
];
// prettier-ignore
const letters = [
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z", "0", "1", "2", "3", "4", "5",
  "6", "7", "8", "9", ".", ",", ":", "?",
  "'", "-", "/", '"', "@", "=", "!",
];

const beep = new Audio("snd/beep.wav");
let ping = 200; // time to print dot .

// DOM
const element = (e) => document.querySelector(e);

const text = element("#text");
const morseScreen = element("#morse-screen");

// functions
getMorseScreen = () => morseScreen.innerText;

setMorseScreen = (m) => (morseScreen.innerText += m);

clrMorseScreen = () => (morseScreen.innerText = "");

getTextScreen = () => text.innerText.toUpperCase();

setTextScreen = (t) => (text.innerHTML += t);

clrTextScreen = () => (text.innerText = "");

let flag1, flag2, mt, st;

function stage1() {
  beep.play();
  beep.volume = element("#mute-checkbox").checked ? 0 : 1;
  flag1 = new Date().getTime();
  clearTimeout(mt);
  clearTimeout(st);
}

function stage2() {
  beep.pause();
  beep.currentTime = 0.1;

  flag2 = new Date().getTime();
  let passed = flag2 - flag1;

  if (passed < ping) {
    setMorseScreen(".");
  } else if (passed < 3 * ping) {
    setMorseScreen("-");
  }

  mt = setTimeout(() => {
    // translate morse
    let index = signals.indexOf(getMorseScreen());

    if (signals.includes(getMorseScreen())) {
      setTextScreen(element("#lowercase-checkbox").checked ? letters[index].toLowerCase() : letters[index].toUpperCase());

      st = setTimeout(() => {
        setTextScreen("&nbsp;"); // print blank space
      }, 7 * ping);

      checkOutput();
    }

    clrMorseScreen();
  }, 3 * ping);
}

// mouse events
element("#morse-btn").addEventListener("mousedown", stage1);
element("#morse-btn").addEventListener("mouseup", stage2);

// keyboard Numpad[0] events
document.body.addEventListener("keydown", (e) => {
  if (e.code === "Numpad0") stage1();
});
document.body.addEventListener("keyup", (e) => {
  if (e.code === "Numpad0") stage2();
});

// ..clear button events
element("#clear-btn").addEventListener("mousedown", () => {
  text.innerText = "";
  clearTimeout(st);
});

// ..delete button events
element("#delete-btn").addEventListener("mousedown", () => {
  let text = getTextScreen();
  text = text.slice(0, -1);
  clrTextScreen();
  setTextScreen(text);
  clearTimeout(st);
});

// toggle settings
const settings = element(".settings");

element("#set-btn").addEventListener("click", () => {
  if (settings.style.height == "100%") {
    settings.style.height = "0";
    settings.style.opacity = "0";
    localStorage.setItem("setting", "false");
  } else {
    settings.style.height = "100%";
    settings.style.opacity = "1";
    localStorage.setItem("setting", "true");
  }
});

element("#close-settings").onclick = () => {
  settings.style.height = "0";
  settings.style.opacity = "0";
  localStorage.setItem("setting", "false");
};

// toggle cheat code
const cheatCode = element(".cheat-code");

element("#cheat-btn").addEventListener("click", () => {
  if (cheatCode.style.height == "100%") {
    cheatCode.style.height = "0";
    cheatCode.style.opacity = "0";
    localStorage.setItem("cheat", "false");
  } else {
    cheatCode.style.height = "100%";
    cheatCode.style.opacity = "1";
    localStorage.setItem("cheat", "true");
  }
});

element("#close-cheat").onclick = () => {
  cheatCode.style.height = "0";
  cheatCode.style.opacity = "0";
  localStorage.setItem("cheat", "false");
};
