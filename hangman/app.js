const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
puzzleEl.textContent = h1.getPuzzle()
guessesEl.textContent = h1.getStatusMessage()

const h2 = new Hangman('New Jersy', 4)
console.log(h1.status);


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    h1.makeGuess(guess)
    puzzleEl.textContent = h1.getPuzzle()
    guessesEl.textContent = h1.getStatusMessage()
})