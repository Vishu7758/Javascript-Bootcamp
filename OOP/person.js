class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })

        return bio
    }
    set fullName(fullName) {
        const splittedName = fullName.split(' ')
        this.firstName = splittedName[0]
        this.lastName = splittedName[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    updateGrade(gradeChange) {
        this.grade += gradeChange
    }
    
    getBio() {
        const passingStatus = this.grade >= 70 ? 'passing' : 'failing'

        return `${this.firstName} is ${passingStatus} the class`
    }
}
const vishal = new Student('Vishal', 'Kharade', 22, 88)
console.log(vishal.getBio())
vishal.updateGrade(-20)
console.log(vishal.getBio())

const kartik = new Employee('Kartik', 'Patil', 22, 'Supervisor', [])
console.log(kartik.getBio());