let taskList = document.getElementById("taskList");

window.onload = loadTasks;

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Machi task enter pannunga 😅");
        return;
    }

    createTask(text);
    saveTasks();
    input.value = "";
}

function createTask(text, completed = false) {
    let li = document.createElement("li");
    li.textContent = text;

    if (completed) li.classList.add("completed");

    li.onclick = () => {
        li.classList.toggle("completed");
        saveTasks();
    };

    let del = document.createElement("span");
    del.textContent = "✖";
    del.className = "delete";
    del.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
    };

    li.appendChild(del);
    taskList.appendChild(li);
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.childNodes[0].textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(task => createTask(task.text, task.completed));
}
