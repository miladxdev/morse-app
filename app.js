const morseAlphabet = [
    ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
    ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
    ".--","-..-","-.--","--..","-----",".----","..---","...--","....-",
    ".....","-....","--...","---..","----.",".-.-.-","--..--","---...",
    "..--..",".----.","-....-","-..-.",".-..-.",".--.-.","-...-","---."
];

const alphabet = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9",
    ".",",",":","?","'","-","/",'"',"@","=","!"
];

const beep = new Audio("snd/beep.wav");


// DOM
let morseBtn = document.getElementById("morse-btn");
let morseScreen = document.getElementById("morse-screen");
let textScreen = document.getElementById("text-screen");

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
    return textScreen.innerText;
}
function setTextScreen(m) {
    textScreen.innerText += m;
}
function clrTextScreen() {
    textScreen.innerText = '';
}

let flag1, flag2;
// morse button mousedown event
morseBtn.addEventListener("mousedown", function() {
    flag1 = new Date().getTime();

    beep.currentTime = 1;
    beep.play();
});

// morse button mouseup even
morseBtn.addEventListener("mouseup", function() {
    flag2 = new Date().getTime();
    let passed = flag2 - flag1;
    console.log("passed: "+passed);

    if (passed < 200) {
        setMorseScreen(".");
    } else {
        setMorseScreen("-");
    }

    beep.pause();
    
    console.log("audio: "+beep.currentTime+"\n");

});
