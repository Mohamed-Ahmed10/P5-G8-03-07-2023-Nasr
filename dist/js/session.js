$(function () {
    $("#output").load("https://jsonplaceholder.typicode.com/comments")

    $.get("https://jsonplaceholder.typicode.com/posts", function (res) {
        console.log(res)
    })


    $(".my_btn").eq(1).click(function () {
        $.post("../text.txt",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
    });
});