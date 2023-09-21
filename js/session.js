console.log(parseInt("15.95"))
console.log(Number("15.15"))
console.log(parseFloat("15.15"))



var myName = "Mohamed",
    lastName = "Ahmed",
    job = "frontend developer and frontend instructor";

/**************************** concat ************************************

console.log(myName.concat(lastName , job))

/**************************** startsWith ************************************

console.log(job.startsWith("front"))
/**************************** endsWith ************************************

console.log(job.endsWith("instructor"))

/**************************** includes ************************************

console.log(job.includes("and"))

/**************************** indexOf ************************************
console.log(job.indexOf("frontend"))

/**************************** lastIndexOf ************************************
console.log(job.lastIndexOf("frontend"))

/**************************** match ************************************
// console.log(job.match("Front"))
console.log(job.match(/Front/g))

/**************************** repeat ************************************
console.log(myName.repeat(5))

/**************************** replace ************************************

// console.log(job.replace("front", "new"))
console.log(job.replace(/front/g, "new"))

// gi
/**************************** search ************************************
console.log(job.search(/Developer/i))

/**************************** slice ******************VIMP******************

console.log(job.slice(0, 7))

/**************************** split *********************VIMP***************

console.log(job.split(" "))
/**************************** substr ************************************
console.log(myName.substr(1, 3))

/**************************** substring ************************************
console.log(myName.substring(1, 3))

/**************************** toLowerCase ************************************

console.log(myName.toLowerCase())

/**************************** toUpperCase ************************************

console.log(myName.toUpperCase())
/**************************** trim ************************************/

var newJob = "             Front  end         developer             ";

console.log(newJob);
console.log(newJob.trim());
console.log(newJob.trimStart());
console.log(newJob.trimEnd());
// */

/*

-------------------------------
Task 1
    Create an array include some names then check the names starts with letter m or not
    Then print in console   this name starts with letter m
    Use array with some capital and small example ["Mohamed" , "mahmoud" , "Ali" ] want to output mohamed and mahmoud
-------------------------------

*/

// for (let iterate = 65; iterate <= 122; iterate++) {
//     if (iterate >= 91 && iterate <= 96) continue
//     console.log(String.fromCharCode(iterate))
// }


// var username = prompt("Please enter your name ");

// console.log(username.match(/ /g).length + 1)

/*
var userText = "My course Is Javascript best Course in The world";

function calcCapital(sentence) {
    var counter = 0;
    sentence = sentence.split(" ");

    for (let index = 0; index < sentence.length; index++) {
        const word = sentence[index];
        // if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) { counter++ }
        if (word.charAt(0) === word.charAt(0).toUpperCase()) { counter++ }
    }
    return counter
}

console.log(calcCapital(userText))
console.log(calcCapital("Test test Test"))
*/