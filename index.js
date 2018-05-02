
/* The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses */


var Word = require("./word.js");
var inquirer = require('inquirer');

var doesRandomWork = new Word (this.nextRandomWord);

//var wordGuessGame = {
  var wordBank = ['SAGE', 'PAPRIKA', 'GARAM MASALA', 'SAFFRON', 'TUMERIC', 'ROSEMARY', 'CARDAMOM', 'CORIANDER', 'FENUGREEK'];
  var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
  var guessesRemaining = 9;
  
  function newGame() {

  }

  function startGame() {

  }



inquirer.prompt([
  {
    name: "intro",
    type: "confirm",
    message: "Welcome to the Word Guess Game! Would you like to play?"
  }
]).then(answers => {
    if (answers.intro === true) {
      console.log("let's play!")
      guessALetter()
      //wordGuessGame.startGame()
    } else {
      console.log("maybe next time")
    }

  

    
});

function guessALetter() {
  console.log("guess a letter");
  inquirer.prompt([
    {
      name: "number1",
      type: "input",
      message: "guess a letter?"
    }
  ]).then(answers => {
    console.log("answer1", answers);
    guessThisWord();
    guessALetter();
      
  });
}

function guessThisWord () {
  console.log(randomWord.split(''));
}