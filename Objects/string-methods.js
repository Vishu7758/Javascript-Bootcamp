let myName = "Vishal Kharade"

console.log(myName.length);

console.log(myName.toUpperCase());

console.log(myName.toLowerCase());

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('abcd'));
console.log(isValidPassword('abcd12345'));
console.log(isValidPassword('abcdpassword'));
console.log(isValidPassword('abcd$#!@!@password'));