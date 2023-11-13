var main_root = "./images/",
    images = ["nature1.webp", "nature2.avif", "nature3.jpg"],
    index = 0,
    image = document.createElement("img"),
    next = document.createElement("button"),
    previous = document.createElement("button");


window.addEventListener("load", () => {
    image.setAttribute("src", main_root + images[0])
    image.setAttribute("alt", images[0])
    next.innerHTML = "Next";
    previous.innerHTML = "Previous";
    document.body.appendChild(image)
    document.body.appendChild(next)
    document.body.appendChild(previous)
})

let changeSlide = () => {
    index++;
    if (index < images.length) {
        changer()
    }
    else { index = 0; changer() }
}

function changer() {

    image.setAttribute("src", main_root + images[index]);
    image.setAttribute("alt", images[index]);
}
// setInterval(changeSlide, 2000)


next.onclick = function () {
    index++;
    if (index < images.length) {
        changer()
    }
    else { index = 0; changer() }
}
previous.onclick = function () {
    index--;
    if (index >= 0) {
        changer()
    }
    else { index = images.length - 1; changer() }
}

function changer() {

    image.setAttribute("src", main_root + images[index]);
    image.setAttribute("alt", images[index]);
}