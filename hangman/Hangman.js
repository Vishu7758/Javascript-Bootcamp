const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculatStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }

}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}"`
    } else {
        return 'Great work! You guessed the word.'
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter == ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle;
}

Hangman.prototype.makeGuess = function (guessLetter) {
    guessLetter = guessLetter.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guessLetter)
    const isBadGuess = !this.word.includes(guessLetter)


    if(this.status !== 'playing') {
        return
    }

    if (isUnique) {
        this.guessedLetters.push(guessLetter)
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }

    this.calculatStatus()
}

const h1 = new Hangman('cat', 2)
