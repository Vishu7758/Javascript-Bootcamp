let gradeCalculator = function (score, totalScore) {
    let grade = null
    let percent = (score / totalScore) * 100
    
    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${percent}%)!`
}

console.log(gradeCalculator(9, 20));