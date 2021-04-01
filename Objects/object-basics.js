let person = {
    name : 'Andrew',
    age : 27,
    country : 'Philadelphia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.country}`);

person.age++// = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.country}`);

let converter = function (fahrenheit) {
    return {
        celcius: (fahrenheit - 32) * 5 / 9,
        fahrenheit : fahrenheit,
        kelvin : ((fahrenheit - 32) * 5 / 9) + 273.15
    }
}

let t1 = converter(68)
console.log(t1);