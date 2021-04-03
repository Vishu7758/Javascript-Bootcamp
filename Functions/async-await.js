const myPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Promise Error')
    }, 2000)
})

const processData = async () => {
    let myData = await myPromise(5)
    myData = await myPromise(myData)
    myData = await myPromise(myData)
    return myData
}

processData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})