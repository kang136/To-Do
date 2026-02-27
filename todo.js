const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTaskButton");
const deletebtn = document.querySelector("#deleteTaskButton");
const taskList = document.querySelector("#taskList");
const check = document.querySelector("#check");

addBtn.addEventListener("click", function() {
    
    const taskText = input.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.id = "check";
        const newLabel = document.createElement('label');
        newLabel.htmlFor = check;
         newLabel.appendChild(document.createTextNode( input.value));
        li.appendChild(checkbox);
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