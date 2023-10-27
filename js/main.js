let task_input = document.getElementById("taskInput"),
    form = document.forms[0],
    output = document.getElementById("output"),
    tasks_counter = document.querySelector("#tasksCounter"),
    finished_counter = document.getElementById("finishedCounter");


let tasks = [];

window.onload = getTasks();


form.addEventListener("submit", function (ev) {
    ev.preventDefault()
    if (task_input.value === "") {
        alert("You can not add an empty task")
    }
    else if (tasks.includes(task_input.value)) {
        alert("you can not add >>" + task_input.value + " << again")
    }
    else {
        tasks.push(task_input.value)
        afterAdd()
        addTasks()
        counter()
        finishTask()
        deleteTask()
        saveTasks()
    }
})


function afterAdd() {
    task_input.value = ""
    task_input.focus()
}

function addTasks() {
    /*
        output.innerHTML = ""
        for (let index = 0; index < tasks.length; index++) {
            const task = tasks[index];
    
            // let task_li = document.createElement('li');
            // task_li.className = "list-group-item";
            // task_li.innerHTML = task;
    
            let task_li = `<li class="list-group-item">${task}</li>`
    
            output.innerHTML += task_li
        }
        */
    let task_li = `<li class="task list-group-item d-flex justify-content-between align-items-center text-bg-secondary">
                        <span class="fw-bold">${tasks[tasks.length - 1]}</span> 
                        <i class="fa-solid fa-trash text-danger"></i>
                    </li>`

    output.innerHTML += task_li
}

function counter() {
    // tasks_counter.innerHTML = tasks.length
    tasks_counter.innerHTML = output.children.length
}
function finishTask() {
    let tasks = document.getElementsByClassName("task")

    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];

        task.addEventListener("click", function () {
            task.classList.toggle("bg-success")
            task.classList.toggle("finished")
            countFinished()
        })
    }
}

function countFinished() {
    let finished = document.querySelectorAll(".finished");
    finished_counter.textContent = finished.length
}

function deleteTask() {
    let delete_icons = document.querySelectorAll(".fa-trash");

    for (let index = 0; index < delete_icons.length; index++) {
        const delete_icon = delete_icons[index];

        delete_icon.addEventListener("click", function (ev) {
            ev.stopPropagation()
            this.parentElement.remove()
            tasks.splice(tasks.indexOf(delete_icon.previousElementSibling.textContent), 1)
            console.log(tasks)
            counter()
            countFinished()
        })
    }
}
function saveTasks() {
    localStorage.setItem('tasks', tasks.toString())
}

function getTasks() {
    if (localStorage.getItem("tasks")) {
        tasks = localStorage.getItem("tasks").split(",")

        for (let index = 0; index < tasks.length; index++) {
            const task = tasks[index];
            output.innerHTML += `<li class="task list-group-item d-flex justify-content-between align-items-center text-bg-secondary">
            <span class="fw-bold">${task}</span> 
            <i class="fa-solid fa-trash text-danger"></i>
            </li>`
        }
    }
}