let task_input = document.getElementById("taskInput"),
    form = document.forms[0],
    output = document.getElementById("output"),
    tasks_counter = document.querySelector("#tasksCounter"),
    finished_counter = document.getElementById("finishedCounter"),
    empty = document.getElementById("empty"),
    tasks = [],
    id = 0;

window.onload = function () {
    getTasks();
    deleteTask();
    counter();
    finishTask();
    countFinished();
    checkEmpty();
}


form.addEventListener("submit", function (ev) {
    ev.preventDefault()
    if (task_input.value === "") {
        alert("You can not add an empty task")
    }
    else if (tasks.includes(task_input.value)) {
        alert("you can not add >>" + task_input.value + " << again")
    }
    else {
        tasks.push({ content: task_input.value, status: false })
        afterAdd();
        addTasks();
        counter();
        finishTask();
        deleteTask();
        saveTasks();
        checkEmpty();
    }
})

function afterAdd() {
    task_input.value = ""
    task_input.focus()
}

function addTasks() {

    let task_li = `<li class="task list-group-item d-flex justify-content-between align-items-center text-bg-secondary" id=${id++}>
                        <span class="fw-bold">${tasks[tasks.length - 1].content}</span> 
                        <i class="fa-solid fa-trash text-danger"></i>
                    </li>`

    output.innerHTML += task_li
}

function counter() {
    // tasks_counter.innerHTML = tasks.length
    tasks_counter.innerHTML = output.children.length
}
function finishTask() {
    let tasksLi = document.getElementsByClassName("task")

    for (let index = 0; index < tasksLi.length; index++) {
        const taskLi = tasksLi[index];

        taskLi.addEventListener("click", function () {
            taskLi.classList.toggle("bg-success")
            taskLi.classList.toggle("finished")
            tasks[taskLi.getAttribute('id')].status = !tasks[taskLi.getAttribute('id')].status;
            saveTasks()
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
            counter();
            countFinished();
            saveTasks();
            checkEmpty();
        })
    }
}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasks() {
    if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"));

        for (let index = 0; index < tasks.length; index++) {
            const task = tasks[index];
            output.innerHTML += `<li class="task list-group-item d-flex justify-content-between align-items-center text-bg-secondary 
                                    ${task.status && 'finished bg-success'}" id=${id++}>
                                    <span class="fw-bold">${task.content}</span> 
                                    <i class="fa-solid fa-trash text-danger"></i>
                                </li>`
        }
    }
}

function checkEmpty() {
    if (tasks.length === 0) {
        empty.classList.add('d-block')
        empty.classList.remove('d-none')
    }
    else {
        empty.classList.remove('d-block')
        empty.classList.add('d-none')
    }
}