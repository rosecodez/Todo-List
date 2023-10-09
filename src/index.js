import './style.css';
import { createToDo } from "./AppLogic/CreateToDo.js";
import { getCurrentDate } from "./AppLogic/currentDate.js";

const addTaskBtn = document.getElementById("add-task");
const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
getCurrentDate()
addTaskBtn.addEventListener("click", () => {
    dialog.showModal();
});
confirmBtn.addEventListener("click", function (event) {
    event.preventDefault();
    dialog.close();
});