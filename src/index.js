import './style.css';
import { getCurrentDate } from "./AppLogic/currentDate.js";
import { createItem } from "./AppLogic/CreateToDo.js";
import { disablePreviousDate } from "./AppLogic/disablePreviousDate.js"
import { createDeleteBtn } from "./AppLogic/DeleteToDo.js"
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
const searchBtn = document.getElementById("searchBtn");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  console.log(Object.fromEntries(formData));
});

cancelBtn.addEventListener("click", () => {
    dialog.close();
})
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

confirmBtn.addEventListener("click", function () {
    createItem(count);
    const titleText = document.querySelector("#titleText-" + count);
    const descriptionText = document.querySelector("#descriptionText-" + count);
    const dueDateText = document.querySelector("#dueDateText-" + count);
    const priorityText = document.querySelector("#priorityText-" + count);
    const notesText = document.querySelector("#notesText-" + count);
    const deleteBtn = document.querySelector("#deleteBtn-" + count);
    dialog.close();
    
    titleText.textContent = "⁍Title: " + title.value;
    descriptionText.textContent = "Description: " + description.value;
    dueDateText.textContent = "dueDate: " + dueDate.value;
    priorityText.textContent = "Priority: " + priority.value;
    notesText.textContent = "Notes: " + notes.value;

    if(priority1.checked) {
        priorityText.textContent = priority1.value;
    } else if (priority2.checked) {
        priorityText.textContent = priority2.value;
    } else if (priority3.checked) {
        priorityText.textContent = priority3.value;
    } else if (priority4.checked) {
        priorityText.textContent = priority4.value;
    }
});
createDeleteBtn();
export { count };