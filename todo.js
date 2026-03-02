const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTaskButton");
const deletebtn = document.querySelector("#deleteTaskButton");
let taskList = document.querySelector("#taskList");
const option = document.querySelector("#option");




input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
addBtn.addEventListener("click", function() {
    const taskText = input.value.trim();

    if (taskText) {
        const li = document.createElement("li");
        li.classList.add("taskItem");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        const image = document.createElement("img");
        image.src = "delete.png";
        image.classList.add("deleteImage");
        const span = document.createElement("span");
        span.classList.add("taskText");
        span.textContent = taskText;

        // When checkbox is checked it adds a line-through and removes it when unchecked
        checkbox.addEventListener("input", function() {
            span.classList.toggle("completed", checkbox.checked);
        });

        image.addEventListener("click", function() {
            taskList.removeChild(li);
        });
        li.appendChild(checkbox);
        li.appendChild(image);
        li.appendChild(span);
        taskList.appendChild(li);

        input.value = "";
    }else {
        input.placeholder = "Please enter a task!";
        input.style.color = "red";
        setTimeout(() => {
            input.placeholder = "Enter a task...";
        }, 2000);
    }
});