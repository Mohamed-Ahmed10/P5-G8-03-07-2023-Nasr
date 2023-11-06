var firstName = "Mohamed",
    lastName = "Ahmed",
    btn = document.getElementById("btn")


console.log("Hello " + firstName + " " + lastName)
console.log(`Hello ${firstName} ${lastName}`)


// btn.onclick = function () {
//     console.log(this) 
// }

btn.onclick = () => console.log(this)

// console.log(sayHello())

// Spread operator

var students1 = ["test", "test2"],
    students2 = ["test3", "test4"];

console.log(...students1)
console.log([...students1, ...students2])

var numbers = [100, 4, 5, 15, 1, 8, 7]
var max = 0;
// for (let index = 0; index < numbers.length; index++) {

//     if (numbers[index] > max) { max = numbers[index] }

// }
console.log(max)

console.log(Math.max(...numbers))


for (const number of numbers) {
    console.log(number)
}

numbers.forEach((number) => {
    console.log(number)
})



// Promise


const myPromise = new Promise(function (myResolve, myReject) {
    myResolve("I love You !!")
});
myPromise.then(function (value) {
    console.log(value)
});
console.log("test")



function calc(...numbers) {
    let sum = 0;
    for (let arg of numbers) sum += arg;
    console.log(sum)
}

calc(5, 7, 8,874)