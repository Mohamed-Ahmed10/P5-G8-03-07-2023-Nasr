window.onload = function () { console.log("Loaded") }
var test = document.querySelector("#test"),
    btn = document.getElementById("btn"),
    parent = document.getElementsByClassName("parent")[0]


var node = document.createElement("span"),
    text = document.createTextNode("This is text")



btn.onclick = function replaceClasses() {
    // test.className = "fromJS"
    // test.classList.add("fromJS")
    // test.classList.remove("fromHTML")
    // test.classList.toggle("fromJS")
    // console.log(test.classList.contains("ok"))
    // console.log(test.classList.item(1))


    node.append(text)
    // parent.prepend(text)

    // parent.appendChild(node)
}

console.log(parent)
console.log(parent.children)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)


console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.lastChild)

/////////////////////////////////////////////////////
var btn2 = document.getElementById("btn2"),
    myForm = document.forms[0],
    myInput = myForm.children[0],
    output = document.getElementById("output")


// btn2.onclick = function () { console.log("Clicked") }
// btn2.onclick = function () { console.log("Clicked 2") }


// btn2.addEventListener('click', function () { console.log("Click from event listener") })

btn2.addEventListener('click', function (ev) {
    console.log("Click from event listener 2")
    ev.target.textContent = "OK"
})

myForm.addEventListener("submit", function (ev) {
    ev.preventDefault()
    console.log("Submitted")
    console.log(this)
})
console.log(myInput)
// Click dblclick submit (preventDefault) contextmenu


myInput.addEventListener("blur", function (event) {
    // output.innerHTML = event.target.value
    console.log("Blur")
})