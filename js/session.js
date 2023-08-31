var person =
{
    name: "Ali",
    age: 20,
    city: {
        cityOne: "Cairo",
        cityTwo: "Shaqia"
    }
}

console.log(person)
console.log(typeof person)

// Bracket notation
console.log(person["age"])

// Dot notation
console.log(person.name)

console.log("Hello your name is " + person.name + " and your age is " + person.age)



function sayHello(username) {
    console.log("Hello " + username)
}

// var sayHello = function () {
//     console.log("OK")
// }

console.log(typeof sayHello)
sayHello("Mohamed")

/*
function sum(x, y) {
    console.log(x + y)
}
function divide(x, y) {
    console.log(x / y)
}
function substraction(x, y) {
    console.log(x - y)
}
function muliply(x, y) {
    console.log(x * y)
}

var x = prompt("Please enter your first number"),
    y = prompt("Please enter your second number")


sum(x, y)
divide(x, y)
substraction(x, y)
muliply(x, y)

function sum2(x, y) {
    return x + y
}
console.log(sum2(8, 4))

/************************************/
var persons = ["Mohamed", "Ahmed", "Mahmoud", "Abdo", "Omar"];

// var persons = new Array();

// persons[0] = "Mohamed";
// persons[1] = "Ahmed";

console.log(persons)
console.log(persons[4])
console.log(persons.length)

console.log(persons[3])
console.log(persons[persons.length - 1])
console.log(persons.at(-1))
console.log(typeof persons)