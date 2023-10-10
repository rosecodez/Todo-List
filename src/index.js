import './style.css';
import { createToDo } from "./AppLogic/CreateToDo.js";
import { getCurrentDate } from "./AppLogic/currentDate.js";

let count = 0;

const addTaskBtn = document.getElementById("add-task");
const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
const cancelBtn = document.getElementById("cancel");
const tasks = document.getElementById("tasks");
const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const notes = document.getElementById("notes");

getCurrentDate()
addTaskBtn.addEventListener("click", () => {
    dialog.showModal();
});
confirmBtn.addEventListener("click", function (event) {
    createItem(count)
    const titleText = document.querySelector("#titleText-" + count);
    const descriptionText = document.querySelector("#descriptionText-" + count);
    const dueDateText = document.querySelector("#dueDateText-" + count);
    const priorityText = document.querySelector("#priorityText-" + count);
    const notesText = document.querySelector("#notesText-" + count);
    event.preventDefault();
    dialog.close();
    titleText.textContent = title.value;
    descriptionText.textContent = description.value;
    dueDateText.textContent = dueDate.value;
    priorityText.textContent = priority.value;
    notesText.textContent = notes.value;
});

confirmBtn.onclick = function () {
    count++;
    console.log(count);
    if (count <=2) {
        title.value = "";
        description.value = "";
        dueDate.value = "";
        priority.value = "priority1";
        notes.value = "";
    }
}

function createItem(num) {
    let task = document.createElement("div");
    tasks.appendChild(task);
    task.setAttribute("id", "task"+num);

    //table headers
    let titleText = document.createElement("div");
    task.appendChild(titleText);
    titleText.setAttribute("id", "titleText-"+num);
    
    let descriptionText = document.createElement("div");
    task.appendChild(descriptionText);
    descriptionText.setAttribute("id", "descriptionText-"+num);

    let dueDateText = document.createElement("div");
    task.appendChild(dueDateText);
    dueDateText.setAttribute("id", "dueDateText-"+num);

    let priorityText = document.createElement("div");
    task.appendChild(priorityText);
    priorityText.setAttribute("id", "priorityText-"+num);

    let notesText = document.createElement("div");
    task.appendChild(notesText);
    notesText.setAttribute("id", "notesText-"+num);

    let deleteBtn = document.createElement("button");
    task.appendChild(deleteBtn);
    deleteBtn.setAttribute("id", "delete")
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (event) {
        task.remove(); 
    })
    console.log(titleText)
}