const input = document.querySelector("taskInput");
const addBtn = document.querySelector("addTaskButton");
const deletebtn = document.querySelector("deleteTaskButton");
const taskList = document.querySelector("taskList");

function add() {
    const task = input.value;
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
        input.value = "";
    }
}