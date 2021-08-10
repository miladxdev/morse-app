// prettier-ignore
const morseAlph = [
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
const alph = [
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z", "0", "1", "2", "3", "4", "5",
  "6", "7", "8", "9", ".", ",", ":", "?",
  "'", "-", "/", '"', "@", "=", "!",
];

const beep = new Audio("snd/beep.wav");
let isMoueUp = false;
let ping = 150;

// DOM
const selectElem = (e) => document.querySelector(e);

let morseScreen = selectElem("#morse-screen");
// let textScreen = selectElem("#text-screen");

let text = selectElem("#text");
let lowerCaseCheckbox = selectElem("#lowercase");
let muteCheckbox = selectElem("#mute");

// functions
getMorseScreen = () => morseScreen.innerText;

setMorseScreen = (m) => (morseScreen.innerText += m);

clrMorseScreen = () => (morseScreen.innerText = "");

getTextScreen = () => text.innerText;

setTextScreen = (t) => (text.innerHTML += t);

clrTextScreen = () => (text.innerText = "");

let flag1, flag2, mt, st;

function stage1() {
  beep.play();
  beep.volume = muteCheckbox.checked ? 0 : 1;
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
    let index = morseAlph.indexOf(getMorseScreen());
    if (morseAlph.includes(getMorseScreen())) {
      setTextScreen(lowerCaseCheckbox.checked ? alph[index].toLowerCase() : alph[index].toUpperCase());
      st = setTimeout(() => {
        setTextScreen("&nbsp;"); // print blank space
      }, 7 * ping);
      checkAnswer();
    }

    clrMorseScreen();
  }, 3 * ping);

  isMoueUp = true;
}
// ...morse button mousedown event
selectElem("#morse-btn").addEventListener("mousedown", stage1);

// ...morse button mouseup event
selectElem("#morse-btn").addEventListener("mouseup", stage2);

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Numpad0") stage1();
});

document.body.addEventListener("keyup", (e) => {
  if (e.code === "Numpad0") stage2();
});

// ..clear button events
selectElem("#clear-btn").addEventListener("mousedown", () => {
  text.innerText = "";
  clearTimeout(st);
});

// ..delete button events
selectElem("#delete-btn").addEventListener("mousedown", () => {
  let text = getTextScreen();
  text = text.slice(0, -1);
  clrTextScreen();
  setTextScreen(text);
  clearTimeout(st);
});

// toggle settings
const settingsSec = selectElem(".settings");
const settingBtn = selectElem("#set-btn");

settingBtn.addEventListener("click", () => {
  if (settingsSec.style.height == "650px") {
    settingsSec.style.height = "0";
    settingsSec.style.opacity = "0";
  } else {
    settingsSec.style.height = "650px";
    settingsSec.style.opacity = "1";
  }
});

// toggle cheat code
const cheatCodeSec = selectElem(".cheat-code");
const cheatBtn = selectElem("#cheat-btn");

cheatBtn.addEventListener("click", () => {
  if (cheatCodeSec.style.height == "650px") {
    cheatCodeSec.style.height = "0";
    cheatCodeSec.style.opacity = "0";
  } else {
    cheatCodeSec.style.height = "650px";
    cheatCodeSec.style.opacity = "1";
  }
});
