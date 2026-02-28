const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTaskButton");
const deletebtn = document.querySelector("#deleteTaskButton");
const taskList = document.querySelector("#taskList");
const check = document.querySelector("#check");

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

        // When checkbox is checked → add line-through
        checkbox.addEventListener("change", function() {
            span.classList.toggle("completed");
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