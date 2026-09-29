function addTask() {
    const newTask = document.createElement("li");

    let task = document.getElementById("input").value.trim();

    if (task === "") {
        alert("Enter a task first");
        return;
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskText = document.createElement("span");
    taskText.textContent = " " + task;
    checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
    updateTaskCount();
    });
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    document.getElementById("taskList").appendChild(newTask);
    document.getElementById("input").value = "";
    deleteTask(newTask);
    updateTaskCount();
}

function updateTaskCount() {
    const tasks = document.querySelectorAll("#taskList li");
    let all = tasks.length;
    let completed = 0;
    tasks.forEach(function(task) {
        const checkbox = task.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            completed++;
        }
    });
    let pending = all - completed;
    document.getElementById("allTasks").textContent = all;
    document.getElementById("pendingTasks").textContent = pending;
    document.getElementById("completedTasks").textContent = completed;
}

function deleteTask(newTask){
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        newTask.remove();
        updateTaskCount();
    }
}