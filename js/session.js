import add from "./main.js";
import { multiply } from "./main.js"



console.log(add(54, 6))
console.log(multiply(5, 6))


var user = {
    name: "Ali",
    age: 50,
    calcAgeInDays: function () {
        return user.age * 365
    }
}

console.log(user.name)
console.log(user.age)
console.log(user.calcAgeInDays())



export default class Person {
    constructor(name = "Unknown person", age = 0) {
        this.name = name;
        this.age = age;
    }
}