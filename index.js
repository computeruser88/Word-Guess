var inquirer = require("inquirer");
var isLetter = require('is-letter');

function getLetter(letter){
    var getLetterPrompt = {
        type: "input",
        name: "letter",
        message: "Guess a letter: "
    }
    inquirer.prompt(getLetterPrompt).then(function(letter){
        if (isLetter(letter)){
            // check if letter is in word
        }
    })
}

function generateRandomWord() {
    var words = ["armadillo", "beautiful", "calibrate", "derelict", "empathy", "frugal", "giraffe", "humiliate", "injurious", "judicial", "kangaroo", "laughter", "mitochondria", "nebulous", "ostracize", "phlegm", "query", "randomize", "satiate", "testosterone", "unicorn", "vendetta", "whirlpool", "xenon", "yellowtail", "zoology"];
    var randomWord = words[Math.floor(Math.random() * words.length) + 1];
}
