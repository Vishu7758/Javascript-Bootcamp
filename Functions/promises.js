//callback
// const getDataCallback = (callback) => {
//     setTimeout(() => {
//         callback('This is error', undefined)
//         callback(undefined, 'This is callback data')
//     }, 2000)
// }

// getDataCallback((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

const getDataCallback2 = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num*2)
        } else {
            callback('This is error', undefined)
        }
    }, 2000)
}

getDataCallback2(2, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        getDataCallback2(data, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data);
            }
        })
    }
})

//Promises
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is promise data')
//         reject('This is promise error') //Only resolve will get called and reject call will not be processed
//     }, 2000)
// })

// myPromise.then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })

const myPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Promise Error')
    }, 2000)
})
//Promise Chaining providing error handler for each step
myPromise(4).then((data) => {
    myPromise(data).then((data) => {
        console.log(`Promise data : ${data}`);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
})

//Promise chaining with only one single error handler
myPromise(10).then((data) => {
    return myPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err);
})