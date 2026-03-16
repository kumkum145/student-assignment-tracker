function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter an assignment");
        return;
    }

    createTask(task);

    saveTasks();

    input.value = "";
}

function createTask(taskText) {

    let li = document.createElement("li");
    li.textContent = taskText + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
}

function saveTasks() {

    let tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent.trim());
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let saved = localStorage.getItem("tasks");

    if (saved) {
        let tasks = JSON.parse(saved);

        tasks.forEach(task => {
            createTask(task);
        });
    }
}

loadTasks();
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
