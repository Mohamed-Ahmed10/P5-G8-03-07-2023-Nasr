// import Person from "./session.js";
/*
function Person(name = "Unknown person", age = 0, calcAgeInDays ) {
    this.name = name;
    this.age = age;
    this.calcAgeInDays = function () {
        return this.age * 365
    }
}

var personOne = new Person("Mahmoud");
var personTwo = new Person("Mohamed", 10)


console.log(personOne)
console.log(personTwo.calcAgeInDays())
*/

class Person {
    constructor(name = "Unknown person", age = 0) {
        this.name = name;
        this.age = age;
    }
}

class Doctor extends Person {
    constructor(name, age, title) {
        super(name, age);
        this.title = title
    }
}

var personOne = new Person("Mahmoud");
console.log(personOne)

let doctorTwo = new Doctor("Ibrahim", 60, "Supervisor")

console.log(doctorTwo)

String.prototype.concatenate = function (a, b) { return a + " " + b }

var username = "Mohamed",
    lastName = "Ahmed"
console.log(username.concatenate(username, lastName))
console.log(username.concatenate("Abdo", "Yasser"))
console.log(username.concatenate("Mahmoud", "Talaat"))