"use strict";

var x = 5;
try {
    console.log(x)

} catch (error) {
    console.error("From Mohamed : " + error.message)
}
finally {
    console.log(55)
}


function calcArea(x, y) {
    if (isNaN(x) || isNaN(y)) {
        throw new Error("It is not number")
    }
    else {
        return x * y
    }
}
try {
    console.log(calcArea(5, "d"))
} catch (er) {
    console.error("Custom error : " + er.message)
}


// t = 80;

// console.log(t)


var iterate = 1


// while (iterate <= 10) {
//     console.log(iterate)
//     iterate++
// }

// do {
//     console.log(iterate)
//     iterate++
// } while (iterate <= 0);

for (var i = 1; i <= 10; i++) {
    if(i === 5) break;
    console.log(i)
}
// let persons = ["Mohamed", "Mahmoud", "Abdo", "Youssef", "Aya"]
// for (let index = 0; index < persons.length; index++) {
//     const element = persons[index];
//     console.log(element)
// }