const Letter = function (letterCharacter) {
    this.letterCharacter = letterCharacter;
    this.isGuessed = false;
    this.getLetter = () => {
        if (this.isGuessed) {
            return this.letterCharacter + " ";
        } else {
            return "_ ";
        }
    }
    this.checkCorrectLetter = (guessedLetter) => {
        if (guessedLetter === this.letterCharacter) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;
