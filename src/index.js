import './style.css';
import { createToDo } from "./AppLogic/CreateToDo.js";
import { getCurrentDate } from "./AppLogic/currentDate.js";
import { createItem } from "./AppLogic/CreateToDo.js";
import { disablePreviousDate } from "./AppLogic/disablePreviousDate.js"
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
const priority1 = document.getElementById("priority1");
const priority2 = document.getElementById("priority2");
const priority3 = document.getElementById("priority3");
const priority4 = document.getElementById("priority4");
const notes = document.getElementById("notes");

getCurrentDate();
addTaskBtn.addEventListener("click", () => {
    dialog.showModal();
    disablePreviousDate();
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
    titleText.textContent = "⁍Title:" + title.value;


    descriptionText.textContent = "Description:" + description.value;


    dueDateText.textContent = "dueDate:" + dueDate.value;


    priorityText.textContent = "Priority:" + priority.value;

    notesText.textContent = "Notes:" + notes.value;

    if(priority1.checked) {
        priorityText.textContent = priority1.value;
        priorityText.style.background="background: rgba(255, 0, 0, 0.527)"
    } else if (priority2.checked) {
        priorityText.textContent = priority2.value;
        priorityText.style.background="background: rgba(255, 145, 0, 0.527)"
    } else if (priority3.checked) {
        priorityText.textContent = priority3.value;
        priorityText.style.background="background: rgba(157, 255, 0, 0.527)"
    } else if (priority4.checked) {
        priorityText.textContent = priority4.value;
        priorityText.style.background="background: rgba(0, 102, 255, 0.527)"
    }
});

confirmBtn.onclick = function () {
    count++;
    console.log(count);
    if (count <=2) {
        title.value = "";
        description.value = "";
        dueDate.value = "";
        priority.value = false;
        notes.value = "";
    }
}