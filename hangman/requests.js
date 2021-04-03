// const getPuzzleAsync = (callback) => {
//     //Making HTTP Request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             // console.log(data);
//             callback(data.puzzle, undefined)
//         } else if (e.target.readyState === 4) {
//             // console.log('An error has taken place');
//             callback(undefined, 'An error has taken place')
//         }
//     })

//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1')
//     request.send()
// }

// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()

//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1', false)
//     request.send()

//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data;
//         // console.log(data);
//     } else if (request.readyState === 4) {
//         // console.log('An error has taken place');
//         throw new Error("Things did not go well")
//     }
// }

// const getCountryDetails = (countryCode, callback) => {
//     const request2 = new XMLHttpRequest()

//     request2.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const countryObj = data.find((country) => country.alpha2Code === countryCode)
//             if(countryObj != undefined) {
//                 callback(countryObj, undefined)
//             }
//         } else if (e.target.readyState === 4) {
//             callback(undefined, 'Things did not go well.Country details not found')
//         }
//     })

//     request2.open('GET', 'http://restcountries.eu/rest/v2/all')
//     request2.send()

// }


// const getPuzzleAsync = (count) => {
//     return new Promise((reject, resolve) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const data = JSON.parse(e.target.responseText)
//                 resolve(data)
//             } else if (e.readyState === 4) {
//                 reject('An error ahs taken place in promise')
//             }
//         })

//         request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${count}`)
//         request.send()
//     })
// }

// const getCountryDetails = (countryCode) => {
//     return new Promise((resolve, reject) => {
//         const countryRequest = new XMLHttpRequest()
//         countryRequest.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 const data = JSON.parse(e.target.responseText)
//                 const countryObj = data.find((country) => country.alpha2Code === countryCode)
//                 if (countryObj) {
//                     resolve(countryObj)
//                 }
//             } else if (e.target.readyState === 4) {
//                 reject('Things did not go well in promise')
//             }

//         })

//         countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//         countryRequest.send()
//     })
// }

const getPuzzleAsync = async (count) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getPuzzleAsyncOld = (count) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${count}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((responseData) => {
        return responseData.puzzle
    })
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)
    if (response.status === 200) {
        const countryDetail = await response.json()
        return countryDetail.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country data')
    }
}

const getCountryDetailsOld = (countryCode) => {
    return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fecth country details :(')
        }
    }).then((countryDetail) => {
        return countryDetail.find((country) => country.alpha2Code === countryCode)
    })
}

getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=8a41b0b8605a8f')
    if (response.status === 200) {
        return response.json() //because return doesn't require to await explicitly but return await response.json() also work
    } else {
        throw new Error('Unable to fecth location based on your IP')
    }
}

getLocationOld = () => {
    return fetch('http://ipinfo.io/json?token=8a41b0b8605a8f').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fecth location based on your IP')
        }
    })
}

getCurrentCountry = async () => {
    const myLocation = await getLocation()
    return getCountryDetails(myLocation.country)
}