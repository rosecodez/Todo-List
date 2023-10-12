import './style.css';
import { createToDo } from "./AppLogic/CreateToDo.js";
import { getCurrentDate } from "./AppLogic/currentDate.js";
import { createItem } from "./AppLogic/CreateToDo.js";
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
