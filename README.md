# Ex03 To-Do List using JavaScript
## Date :10-02-2026
## Name :Eshwer M
## Reg No :212224040086

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>3D Colorful To-Do App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="todo-card">
    <h1 class="neon-title">✨TO-DO LIST✨</h1>


    <div class="input-box">
        <input type="text" id="taskInput" placeholder="What’s your next task?">
        <button onclick="addTask()">➕</button>
    </div>

    <ul id="taskList"></ul>
</div>

<script src="script.js"></script>
</body>
</html>
```
style.css
```
* {
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 3D Card */
.todo-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 25px;
    width: 350px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    transform: perspective(1000px) rotateX(5deg);
    transition: 0.4s;
}

.todo-card:hover {
    transform: perspective(1000px) rotateX(0deg) scale(1.02);
}

h1 {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
}

/* Input */
.input-box {
    display: flex;
    gap: 10px;
}

input {
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
}

button {
    background: linear-gradient(45deg, #00f2fe, #4facfe);
    border: none;
    border-radius: 10px;
    padding: 10px 14px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
}

button:hover {
    transform: scale(1.1);
}

/* Tasks */
ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

li {
    background: rgba(255,255,255,0.85);
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: slideIn 0.4s ease;
}

li.completed {
    text-decoration: line-through;
    background: #b2f7ef;
}

.delete {
    background: crimson;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    cursor: pointer;
}

.delete:hover {
    box-shadow: 0 0 10px crimson;
}

/* Animation */
@keyframes slideIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
.neon-title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
    letter-spacing: 2px;
    animation: blinkGlow 1.5s infinite alternate;
}

/* Blinking + Color changing effect */
@keyframes blinkGlow {
    0% {
        color: #00f2fe;
        text-shadow: 0 0 5px #00f2fe, 0 0 15px #00f2fe;
    }
    50% {
        color: #ff4ecd;
        text-shadow: 0 0 5px #ff4ecd, 0 0 15px #ff4ecd;
    }
    100% {
        color: #7CFF00;
        text-shadow: 0 0 5px #7CFF00, 0 0 20px #7CFF00;
    }
}
```
script.js
```
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
```
## OUTPUT
![alt text](<Screenshot 2026-02-10 153008.png>)
![alt text](<Screenshot 2026-02-10 152955.png>)
## RESULT
The program for creating To-do list using JavaScript is executed successfully.
