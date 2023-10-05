var test_id = document.getElementById("testId"),
    test_class = document.getElementsByClassName("test"),
    tag_selector = document.getElementsByTagName("div"),
    name_selector = document.getElementsByName("username");

console.log(test_id)
console.log(test_class)
console.log(tag_selector)
console.log(name_selector)


////////////////////////////////////////////////////////////////////////////
var id_selector = document.querySelector("#testId"),
    class_selector = document.querySelectorAll(".test")

console.log(id_selector)
console.log(id_selector.getAttribute("data-user"))
console.log(class_selector)



function addAttr() {
    // id_selector.setAttribute("from-js", "This text from JS")
    // id_selector.innerHTML += "<span>This is from JS</span>"
    // console.log(id_selector.innerHTML)
    console.log(id_selector.outerHTML)
    // console.log(id_selector.textContent)
    // console.log(name_selector[0].value)
}

var user_password = document.getElementById("userPassword"),
    password_btn = document.getElementById("passwordBtn"),
    alert_msg = document.querySelector("#alertMsg")


function toggleShow() {
    // if (user_password.getAttribute("type") === "password") {
    //     user_password.setAttribute("type", "text")
    //     password_btn.textContent = "Hide password"
    // }
    // else {
    //     user_password.setAttribute("type", "password")
    //     password_btn.textContent = "Show password"
    // }

    // console.log(user_password.value.split(" ").join(""))


    if (user_password.value.split("").some(letter => letter === " ")) {
        // alert_msg.innerHTML = "You have a spaces and this is not allowed"
        alert_msg.classList.add("show")
    }
    else if (user_password.value.length < 8) {
        alert_msg.classList.add("show")
        // alert_msg.innerHTML = "Your password is less than 8"
    }
    else {
        alert_msg.innerHTML = "الله ينور عليك"
    }
}


var class_explain = document.querySelectorAll(".classExplain")[0];



let classFn = function () {
    // class_explain.className = "fromJS"
    // class_explain.classList.add("fromJS")
    // class_explain.classList.remove("classExplain")
    // console.log(class_explain.classList.contains("classExplain"))
    class_explain.classList.toggle("fromJS")

}