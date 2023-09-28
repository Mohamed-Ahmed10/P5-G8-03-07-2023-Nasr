/*
1- contatenate two arrays and check if any item is num or not ( use every and typeof ) and output if greater then 3 .

2- create  a  prompt to get tasks and push all in an array then output all at tour page .

3- create a  three prompt ages  and get it's values then check if any one is under age or not
EXAMPLE >>> [25 , 5 ,  12 , 25 , 55]
OUTPUT >>> you have all is not +18 (with every if return true) && you have just 5 and 12 is underage (with if condition)



4- create four prompt get text values then (display it in console ordered with sort ) [like >> 1-Mohamed]

5- create an array when you find (no) then convert all next elements in array to (thanks)
EXAMPLE >>> ["Mohamed" , 1 , "Hey" , "no" ,"Front" , "JS"] 
OUTPUT >>> ["Mohamed" , 1 , "Hey" , "no" ,"thanks" , "thanks"] 
hint : user loop , if and fill()

var ages = [25, 5, 12, 25, 55],
isAdult = ages.every(age => age >= 18)

if (!isAdult) {
    var underAge = ages.filter(age => age <= 18);

    console.log("You have all +18 but " + underAge.join(" and "))
}
else {
    console.log("All +18")
}


var outputs = [];

for (let counter = 1; counter <= 4; counter++) {
    var userInput = prompt("Please enter your name");
    outputs.push(userInput)
}

outputs.forEach(function (output, index) {
    console.log(index + 1 +" - " + output)
})

var example = ["Mohamed", "no", 1, "Hey", "Front", "JS"];

console.log(example.fill("Thanks", example.indexOf("no") + 1));
*/

console.log(Math.max(4, 54, 780, 7, 4, 51, 2))
console.log(Math.min(4, 54, 780, 7, 4, 51, 2))
console.log(Math.round(2.5))
console.log(Math.round(2.4))
console.log(Math.ceil(2.4))
console.log(Math.floor(2.999999))
console.log(Math.pow(5, 3))
console.log(Math.sqrt(25))
console.log(Math.abs(-8))


console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)


var x = 512.512
console.log(x.toExponential())
console.log(x.toFixed(2))
console.log(x.toPrecision(3))

var myDate = new Date()

console.log(myDate.getTimezoneOffset())

myDate = myDate.getTime() / 1000 / 60 / 60 / 24
console.log(myDate)

var comingDate = new Date(2023, 9, 8)

console.log(comingDate)
comingDate = comingDate.getTime() / 1000 / 60 / 60 / 24

console.log(comingDate)

console.log(comingDate - myDate)



console.log(Math.floor(Math.random() * 7))

var persons = ["Mohamed", "Mahmoud", "Ali", "Gaber", "Mariem"];

var quotes = [
    {
        author: "Mohamed",
        quote: 'I am the best'
    },
    {
        author: "Mahmoud",
        quote: 'I am the best 2'
    },
    {
        author: "Ali",
        quote: 'I am the best 3'
    }
]

// console.log(Math.round(Math.random() * (persons.length - 1)))

let index = Math.floor(Math.random() * quotes.length)

console.log(quotes[index].author +"  " +quotes[index].quote)