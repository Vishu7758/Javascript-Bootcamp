const calculatAvg = (thing, ...numbers) => {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num
    })
    const avg = (sum) / (numbers.length)
    return `The average ${thing} is ${avg}`
}

//Exercise
const printTeam = (teamName, coach, ...players) => {
    // console.log(`Team Name: ${teamName}`);
    // console.log(`Team Coach: ${coach}`);
    // console.log(`Players: ${players.join(', ')}\n`);
}
printTeam('MI', 'Jonty', 'Rohit', 'Sachin')

//using spread operator
const myTeam = {
    name: 'CSK',
    coach: 'Shane Watson',
    players: ['M. S. Dhoni', 'DJ Bravo', 'Ambati Rayudu']
}
printTeam(myTeam.name, myTeam.coach, ...myTeam.players)//Used spread operator to split players array

//Using spread operator to create true clone of a array 
let cities = ['Patna', 'Jodhpur', 'Kanpur']

const citiesCopy = ['Delhi', ...cities] //spread variable can be used at first or at last acc. to need

//alternate syntax for push and unshift
cities = ['Kolahpur', ...cities] //alternate syntax for unshift
cities = [...cities, 'Agra']

// console.log(cities);
// console.log(citiesCopy);


//Object spread operator to copy contents of one object to the other
const obj1 = {
    name: 'Vishal',
    college: 'DKTE',
    city: 'Ichalkaranji'
}

const obj2 = {
    ...obj1,
    name: 'Omkar' //overriding name property in obj2 alternate way is obj2.name='omkar'
}

// console.log(obj1);
// console.log(obj2);

//Exercise
const person = {
    name: 'Ishan Kishan',
    age:  25
}

const location = {
    city: 'Mumbai',
    country: 'India'
}
//combining both location and person into one object
const overview = {
    ...person,
    ...location
}

// console.log(overview);



//Destructuring
//1. Object destructuring
const todo = {
    id: 'avbasdacxacx',
    text: 'Oreder me a pizza',
    completed: false
}

//her objects property ie=s reffered and if u want u can give it a local name and using spread syntax
//u can store remaining properties of objects inside that variable. It'll be empty if no property remained
//to capture. You can also give default value to any variable. It takes that value if property for that
//name is not found
const { id:myId, completed, details = 'Default value provided', ...others } = todo 
console.log(myId);
console.log(completed);
console.log(others);

//Using object destructuring inside function argument directly
//Use array notation if u want to destrucure your array
const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`);
}
printTodo(todo)


//2. Array Destructuring
const myArr = [10, 20, 30, 60, 42]
//Similarly we can destrucure tthe array. If u want to skip any variable just put ',' and dont write
//any variavle name as done for second variable below
const [firstVar, , thirdVar, ...remaining] = myArr
console.log(firstVar);
console.log(thirdVar);
console.log(remaining);