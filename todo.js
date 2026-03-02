const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTaskButton");
const deletebtn = document.querySelector("#deleteTaskButton");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {
    const taskText = input.value.trim();

    if (taskText) {
        const li = document.createElement("li");
        li.classList.add("taskItem");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        const span = document.createElement("span");
        span.classList.add("taskText");
        span.textContent = taskText;

        // When checkbox is checked it adds a line-through and removes it when unchecked
        checkbox.addEventListener("input", function() {
            span.classList.toggle("completed", checkbox.checked);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
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