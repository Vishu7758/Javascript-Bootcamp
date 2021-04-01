const getPuzzleAsync = (callback) => {
    //Making HTTP Request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            // console.log(data);
            callback(data.puzzle, undefined)
        } else if (e.target.readyState === 4) {
            // console.log('An error has taken place');
            callback(undefined, 'An error has taken place')
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1`')
    request.send()
}

const getPuzzleSync = () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=1', false)
    request.send()

    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        return data;
        // console.log(data);
    } else if (request.readyState === 4) {
        // console.log('An error has taken place');
        throw new Error("Things did not go well")
    }
}