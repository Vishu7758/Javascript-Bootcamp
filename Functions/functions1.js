let converter = function (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

let f32 = converter(32)
let f68 = converter(68)

console.log(f32);
console.log(f68);