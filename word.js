/* 
Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing 
the current word the user is attempting to guess. That means the constructor should define:

* An array of `new` Letter objects representing the letters of the underlying word

* A function that returns a string representing the word. This should call the function on each letter object 
(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

* A function that takes a character as an argument and calls the guess function on each letter object (the second function 
    defined in `Letter.js`) */


var Letter = require("./letter.js");
var inquirer = require('inquirer');

function Word(nextWord) {
    //An array of `new` Letter objects representing the letters of the underlying word
    this.characters = [];
    this.nextWord = nextWord 
        for(var i = 0; i < this.nextWord.length; i++) {
            //console.log("hello looping here", );
            var testLetter = new Letter (this.nextWord[i]);
            //console.log(testLetter);
            this.characters.push(testLetter);
        }
    
    //A function that returns a string representing the word. This should call the 
    //function on each letter object (the first function defined in `Letter.js`) 
    //that displays the character or an underscore and concatenate those together.
    //this.revealWord = this.revealChar.toString();

    this.revealWord = function() {
        //populate the collection above with new Letter objects
        for(var i = 0; i < this.nextWord.length; i++) {
          var addedChar = new Letter(this.nextWord[i]); // created instance of Letter constructor function
          this.characters.push(addedChar); // reveals character of correctly guessed letter by user
            }
        }
    //A function that takes a character as an argument and calls the guess function 
    //on each letter object (the second function defined in `Letter.js`)
}
//var testLetter = new Letter ('a');
var testWord = new Word ("house");
console.log(testWord);


//export Word constructor to make available for index.js 
module.exports = Word;