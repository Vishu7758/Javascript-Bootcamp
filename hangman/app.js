const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
puzzleEl.textContent = h1.puzzle
guessesEl.textContent = h1.statusMessage

const h2 = new Hangman('New Jersy', 4)
console.log(h1.status);


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    h1.makeGuess(guess)
    puzzleEl.textContent = h1.puzzle
    guessesEl.textContent = h1.statusMessage
})

getPuzzleAsync((puzzle, error) => {
    if (error) {
        console.log(`Error : ${error}`);
    } else {
        console.log(puzzle);
    }
})

console.log(getPuzzleSync().puzzle);

// const countryCode = 'IN'
// const request2 = new XMLHttpRequest()

// request2.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const countryObj = data.find((country) => country.alpha2Code === countryCode)
//         if(countryObj != undefined) {
//             console.log(countryObj.name);
//         }
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch data');
//     }
// })

// request2.open('GET', 'http://restcountries.eu/rest/v2/all')
// request2.send()

