import './style.css';
import { getCurrentDate } from "./AppLogic/currentDate.js";
import { createItem } from "./AppLogic/CreateToDo.js";
import { disablePreviousDate } from "./AppLogic/disablePreviousDate.js"
import { viewEach } from "./AppLogic/ViewEach.js";

let count = 0;

const addTaskBtn = document.getElementById("add-task");
const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
const cancelBtn = document.getElementById("cancel");
const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const priority1 = document.getElementById("priority1");
const priority2 = document.getElementById("priority2");
const priority3 = document.getElementById("priority3");
const priority4 = document.getElementById("priority4");
const notes = document.getElementById("notes");
const form = document.querySelector("form");
const viewAllBtn = document.getElementById("view-all");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  console.log(Object.fromEntries(formData));
});

getCurrentDate();

addTaskBtn.addEventListener("click", () => {
    dialog.showModal();
    disablePreviousDate();
    
    confirmBtn.style.display = "flex";
    
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = false;
    notes.value = "";

    count++;
    console.log(count);
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
});

confirmBtn.addEventListener("click", function () {
    createItem(count);
    dialog.close();
    
    const titleText = document.querySelector("#titleText-" + count);
    const descriptionText = document.querySelector("#descriptionText-" + count);
    const dueDateText = document.querySelector("#dueDateText-" + count);
    const priorityText = document.querySelector("#priorityText-" + count);
    const notesText = document.querySelector("#notesText-" + count);
    
    titleText.textContent = "⁍Title: " + title.value;
    descriptionText.textContent = "Description: " + description.value;
    dueDateText.textContent = "dueDate: " + dueDate.value;
    priorityText.textContent = "Priority: " + priority.value;
    notesText.textContent = "Notes: " + notes.value;

    if(priority1.checked) {
        priorityText.textContent = priority1.value;
        priorityText.style.background
    } else if (priority2.checked) {
        priorityText.textContent = priority2.value;
    } else if (priority3.checked) {
        priorityText.textContent = priority3.value;
    } else if (priority4.checked) {
        priorityText.textContent = priority4.value;
    }

    descriptionText.style.display = "none";
    priorityText.style.display = "none";
    notesText.style.display = "none";
    viewEach();
});

export { count };