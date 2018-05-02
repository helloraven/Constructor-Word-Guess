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

function Word() {
    //An array of `new` Letter objects representing the letters of the underlying word
    this.characters = [];
    this.nextRandomWord = function () {
        //for(var i = 0; i < this.wordBank.length; i++) {
            //console.log("hello looping here", );
            Math.floor(Math.random()*this.wordBank.length);
            //var addRandomWord = new Letter (this.wordBank.split[i]);
            console.log("here is the next random word");
            //this.characters.push(testLetter);
        }
    
    
    
    //A function that returns a string representing the word. This should call the 
    //function on each letter object (the first function defined in `Letter.js`) 
    //that displays the character or an underscore and concatenate those together.
    //this.revealWord = this.revealChar.toString();

    this.revealWord = function() {
        //populate the collection above with new Letter objects
        for(var i = 0; i < this.nextRandomWord.length; i++) {
          var addedChar = new Letter(this.nextRandomWord.split[i]); // created instance of Letter constructor function
          this.characters.push(addedChar); // reveals character of correctly guessed letter by user
            }
        
    //A function that takes a character as an argument and calls the guess function 
    //on each letter object (the second function defined in `Letter.js`)
    }

};
//var testLetter = new Letter ('a');
//var testWord = new Word ("one");



//export Word constructor to make available for index.js 
module.exports = Word;