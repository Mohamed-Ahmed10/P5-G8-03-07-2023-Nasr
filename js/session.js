var x = 5;
if (x !== "5") {
    console.log("Yes")
    // if (10 > 9) {
    //     console.log("Yes 2")
    // }
}
else {
    console.log("No")
}

var y = 10;

console.log(y++)

console.log(++y)

console.log(--y)

console.log(y)


console.log(123 % 2)

console.log(5 == 30)

console.log(5 == "5")
console.log(5 === "5")



var z = 50;

z += 90;

console.log(z)

console.log(!true)

if (z > 100 || 5 > 40) {
    console.log("YES")
}
else {
    console.log("NO")
}

console.log("JS" && undefined && "test" && 50)

// & operator returns first false and last true


console.log("JS" || undefined || "test" || 50)

// | operator returns first true and last false


var t = "Mahmoud";


switch (t) {
    case "Mohamed":
    case "Mahmoud":
        console.log("Mohamed or Mahmoud")
        break
    case "Ali":
        console.log("TWO")
        break;
    default:
        console.log("NOOOOO")
}
