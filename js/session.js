//  1- input >> JavaScript is my favorite language
/*
output >>
    1- JavaScript
    2- is
    3- my
    4- favorite
    5- language

/*


    Result :
    var input = "JavaScript is my favorite language";

    input = input.split(" ");

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        console.log(index + 1 + " - " + element)
    }

    input.forEach((element, index) => {
        console.log(`${index + 1} - ${element}`)
    });
*/


// Create a function thats have a number lower then 100 then sum all of numbers from ZERO to this number

let submission = (x) => {
    if (x <= 100) {
        var result = 0;
        for (let i = 1; i <= x; i++) {
            result += i
        }
    }
    else alert("You must enter a number lower than 100")

    return result
}

var userInput = +prompt("Please enter your number")

console.log(submission(userInput))