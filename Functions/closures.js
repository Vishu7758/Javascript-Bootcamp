// const myFunction = () => {
//     const messge = 'This is my message'
//     const printMessage = () => {
//         console.log(messge)
//     }
//     return printMessage
// }

// const myMessage = myFunction()
// myMessage()

const myCounter = () => {
    let count = 0;
    //Return JS object having access to count value
    return {
        incement() {
            count++
        },
        decrement() {
            count--
        },
        getCount() {
            return count
        }
    }
}

let counter = myCounter()
counter.decrement()
counter.decrement()
counter.incement()
counter.count = 0 //It just adds new proprty to the object but doesnt modify private count variable
console.log(counter.getCount());

const myAdder = (baseValue) => {
    return (addValue) => {
        return baseValue + addValue
    }
}

const add10 = myAdder(10)
console.log(add10(-5));
console.log(add10(15));

//Tipper
const createTipper = (baseTip) => {
    return (billAmt) => {
        return billAmt * baseTip
    }
}

const tip20 = createTipper(.20)
const tip25 = createTipper(.25)

console.log(tip20(1000));
console.log(tip25(2000));