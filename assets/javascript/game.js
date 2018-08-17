let score = 0;
let currentWord = "";
let guessLeft = 9;
let currentGuesses = [];
let wrongLetters = [];

function hideword() {
  for(let i = 0; i < currentWord.length; i ++) {
    if(currentGuesses.indexOf(currentWord[i])) {

    }
  }
}

const allWords = ["chicago", "basketball", "mountain", "jaguar", "pineapple", "computer"];

function randWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function restartRound() {
  currentWord = randWord(allWords);
  guessLeft = 9;
  wrongLetters = [];
  currentGuesses = [];

}

document.addEventListener("keypress", function(e) {
const letter = e.key.toLocaleLowerCase();
console.log(letter);
console.log(randWord(allWords));
)

function displayValues() {
  let score = document.querySelector("#score");
  let hWord = document.querySelector("#hiddenword");
  let gLeft = document.querySelector("#guessleft");
  let wrLet = document.querySelector("#wrongletters");

  document.getElementById("score").innerHTML = "score";
  document.getElementById("hWord").innerHTML = "hiddenword";
  document.getElementById("gLeft").innerHTML = "guessleft";
  document.getElementById("wrLet").innerHTML = "wrongletters.join()";

}

document.addEventListener("keypress", function(e) {
  const letter = e.key.toLocaleLowerCase();
  currentGuesses.push(letter);

  if(guessLeft === 0) {
    restartRound();
    return;
  }

  if(hiddenword() === currentWord) {
    score ++
    restartRound();
    return;
  }

  if(currentWord.indexOf(letter) !== -1) {

    guessLeft--;
    wrongLetters.push(letter);
  }

  displayValues();
});

restartRound();
displayValues();

