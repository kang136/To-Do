const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTaskButton");
const deletebtn = document.querySelector("#deleteTaskButton");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {
    
    const taskText = input.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        input.value = "";
    }
});

function deleteTask() {
    const tasks = taskList.querySelectorAll("li");
    if (tasks.length > 0) {
        taskList.removeChild(tasks[tasks.length - 1]);
    }
}