const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzleAsync('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()
// getPuzzleAsync((puzzle, error) => {
//     if (error) {
//         console.log(`Error : ${error}`);
//     } else {
//         console.log(puzzle);
//     }
// })

// console.log(getPuzzleSync().puzzle);

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

// getCountryDetails('EU', (countryDetails, error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(`Country name : ${countryDetails.name}`);
//     }
// })

// const countryDetail = getCountryDetails('IN')
// countryDetail.then((data) => {
//     console.log(`Country name : ${data.name}`);
//     console.log(`Country code : ${data.alpha2Code}`);
// }, (err) => {
//     console.log(err);
// })

//fetch API
// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json() //It returns a promise
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => { //this method gets called for whatever data returned by respons.json()
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error);
// })

// getPuzzleAsync(2).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// getCountryDetails('AR').then((country) => {
//     console.log(`Country name : ${country.name}`);
// }).catch((error) => {
//     console.log(error);
// })

// getLocation().then((data) => {
//     console.log(`City: ${data.city}`);
//     console.log(`Region: ${data.region}`);
//     console.log(`Country: ${data.country}`);
// }).catch((error) => {
//     console.log(error);
// })

// // //Combining Both above functions
// getLocation().then((data) => {
//     return getCountryDetails(data.country)
// }).then((country) => {
//     console.log(`(From combined)Country name : ${country.name}`);
// }).catch((error) => {
//     console.log(error);
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(error);
// })

