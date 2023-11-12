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


/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

*/
/*
Examples:
    (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// function getSum(a, b) {
//     let result = 0;
//     for (let index = a; index < b; index++) {
//         result += index;
//     }
//     for (let index = a; index > b; index--) {
//         result += index;
//     }
//     if (a !== b) {
//         result += b;
//     }

//     return result;
// }

// OR 



// OR

function getSum(a, b) {
    let result = 0;
  
    let start = Math.min(a, b);
    let end = Math.max(a, b);
  
    if(start !== end)
    {
        for (let index = start; index <= end; index++) {
            result += index;
        }
    }
    else
    {
      result = "There are tha same"
    }
  
    return result;
  }
  
  console.log(getSum(3, 3));
  