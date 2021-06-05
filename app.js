const morseAlph = [
    ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
    ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
    ".--","-..-","-.--","--..","-----",".----","..---","...--","....-",
    ".....","-....","--...","---..","----.",".-.-.-","--..--","---...",
    "..--..",".----.","-....-","-..-.",".-..-.",".--.-.","-...-","---."
];

const alph = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9",
    ".",",",":","?","'","-","/",'"',"@","=","!"
];

const beep = new Audio("snd/beep.wav");
let isMoueUp = false;
let ping = 150;

// DOM
let morseBtn = document.getElementById("morse-btn");
let clearBtn = document.getElementById("clear-btn");
let deleteBtn = document.getElementById("delete-btn");
let morseScreen = document.getElementById("morse-screen");
let textScreen = document.getElementById("text-screen");
let text = document.getElementById("text");
// functions
function getMorseScreen() {
    return morseScreen.innerText;
}
function setMorseScreen(m) {
    morseScreen.innerText += m;
}
function clrMorseScreen() {
    morseScreen.innerText = '';
}
function getTextScreen() {
    return text.innerText;
}
function setTextScreen(t) {
    text.innerHTML += t;
}
function clrTextScreen() {
    text.innerText = '';
}

let flag1, flag2;

// ...morse button mousedown event
morseBtn.addEventListener("mousedown", function() {
    
    beep.play();
    
    flag1 = new Date().getTime();

    if(isMoueUp) {
        clearTimeout(mt);
        clearTimeout(st);
    } 
    // style
    this.style.width = "90px";
    this.style.height = "90px";
});

// ..morse button mouseup even
morseBtn.addEventListener("mouseup", function() {
    beep.pause();
    beep.currentTime = 0.1;
    flag2 = new Date().getTime();
    let passed = flag2 - flag1;
    if (passed < ping) {
        setMorseScreen(".");
    } else if (passed < 3*ping) {
        setMorseScreen("-");
    }

    mt = setTimeout(() => { // translate morse
        let index = morseAlph.indexOf(getMorseScreen());
        if (morseAlph.includes(getMorseScreen())) {

            setTextScreen(alph[index]);
            st = setTimeout(() => { setTextScreen('&nbsp;');}, 7*ping ); // blank space
            checkAnswer();
               
        }

        clrMorseScreen();
    }, 3*ping);
    
    isMoueUp = true;
    // style
    this.style.width = "100px";
    this.style.height = "100px";
    
});


// ..clear button events
clearBtn.addEventListener("mousedown", function() {
    text.innerText = '';
    clearTimeout(st);
    // style
    this.style.width = "45px";
    this.style.height = "45px";
});

clearBtn.addEventListener("mouseup", function() {
    // style
    this.style.width = "50px";
    this.style.height = "50px";
});


// ..delete button events
deleteBtn.addEventListener("mousedown", function() {
    let text = getTextScreen();
    text = text.slice(0, -1);
    clrTextScreen();
    setTextScreen(text);
    // style
    this.style.width = "45px";
    this.style.height = "45px";
});

deleteBtn.addEventListener("mouseup", function() {
    // style
    this.style.width = "50px";
    this.style.height = "50px";
});


// show hide alphabet
const settingsSec = document.querySelector('.settings');
const settingBtn = document.querySelector('#set-btn');

var toggle = true;
settingBtn.addEventListener('click', () => {
    if (settingsSec.style.height == '650px') {
        settingsSec.style.height = '0';
        settingsSec.style.opacity = '0';
        toggle = !toggle;
    } else {
        settingsSec.style.height = '650px';
        settingsSec.style.opacity = '1';
        toggle = !toggle;
    }
});

const cheatCodeSec = document.querySelector('.cheat-code');
const cheatBtn = document.querySelector('#cheat-btn');
cheatBtn.addEventListener('click', () => {
    if (cheatCodeSec.style.height == '650px') {
        cheatCodeSec.style.height = '0';
        cheatCodeSec.style.opacity = '0';
        toggle = !toggle;
    } else {
        cheatCodeSec.style.height = '650px';
        cheatCodeSec.style.opacity = '1';
        toggle = !toggle;
    }
});