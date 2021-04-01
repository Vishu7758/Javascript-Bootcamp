let add = function (a, b) {
    return a + b
}
console.log(add(2, 4));

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

console.log(getScoreText("Vishal", 20));
console.log(getScoreText("Vishal"));
console.log(getScoreText(undefined, 20));
console.log(getScoreText());

let getTip = function (total, tipPercent = 0.2) {
    return total * tipPercent
}

console.log(getTip(100, .4));