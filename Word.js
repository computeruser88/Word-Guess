var Letter = require("./Letter.js");

var Word = function (word) {
    this.word = word;
    this.letterArray = [];
    this.tempArray = [];
    this.createLetters = () => {
        this.tempArray = this.word.split('');
    }
    this.createLetterArray = () => {
        for (var i = 0; i < this.tempArray.length; i++) {
            this.letterArray[i] = new Letter(this.tempArray[i]);
        }
    }
    this.returnWordString = () => {
        var wordString = "";
        for (var i = 0; i < this.letterArray.length; i++) {
            wordString += this.letterArray[i].getLetter();
        }
        return wordString;
    };
    this.guessedCharacter = (character) => {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkCorrectLetter(character);
            if (this.letterArray[i].isGuessed && this.letterArray[i].getLetter() === character) {
                return this.letterArray[i].getLetter();
            }
        }
    };
}

// var wordtoguess = new Word("jurassic");
// wordtoguess.createLetters();
// wordtoguess.createLetterArray();
// console.log(wordtoguess.returnWordString());
// wordtoguess.guessedCharacter('j');
// wordtoguess.guessedCharacter('s');
// wordtoguess.guessedCharacter('x');
// console.log(wordtoguess.returnWordString());

module.exports = Word;