import { de } from "date-fns/locale";
import { count } from "../index.js"
import { createDeleteBtn } from "./DeleteToDo.js";
import { deleteBtn } from "./DeleteToDo.js";
export function createToDo () {
    class Item {
        constructor(title, description, dueDate, priority, notes, checklist) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.checklist = checklist;
        }
        date() {
            const date = newDate();
            return date.getFullYear() - this.year;
        }
    }
    const item1 = new Item("Study", "Study 2 hours", "Infinite", 2, "", "" );
    //haven't used this code block yet *
}
export function createTask() {
    let task = document.createElement("div");
    return task
}
let task = createTask();
export { task }
export function createItem(num) {
    let task = createTask();
    const tasks = document.getElementById("tasks");
    tasks.appendChild(task);
    task.setAttribute("id", "task"+num);

    task.appendChild(deleteBtn);
    deleteBtn.setAttribute("id", "deleteBtn-" +num);
    document.getElementById("deleteBtn-" +num).style.padding = "6px 8px";

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

    let editItemBtn = document.createElement("button");
    task.appendChild(editItemBtn);
    editItemBtn.setAttribute("id", "editItemBtn-" +num);
    editItemBtn.textContent = "editItemBtn";
    document.getElementById("editItemBtn-" +num).style.padding = "6px 8px";

    let confirmEditBtn = document.createElement("button");
    const buttons = document.getElementById("buttons");
    buttons.appendChild(confirmEditBtn);
    confirmEditBtn.setAttribute("id", "confirmEditBtn-" +num);
    confirmEditBtn.textContent = "confirmEditBtn";

    document.getElementById("confirmEditBtn-" +num).style.padding = "6px 8px";
    document.getElementById("confirmEditBtn-" +num).style.display = "none";
    document.getElementById("confirmEditBtn-" +num).style.alignItems = "center";
    
    editItemBtn.addEventListener("click", () => {
        dialog.showModal();
        editItemBtn.querySelector("#editItemBtn-" + count);
        const confirm = document.getElementById("confirm");
        confirm.style.display = "none";
        document.querySelector("#confirmEditBtn-" + count).style.display = "flex";
    });

    confirmEditBtn.querySelector("#confirmEditBtn-" + count);
    confirmEditBtn.addEventListener("click", () => {
        titleText.textContent = "⁍Title: " + title.value;
        descriptionText.textContent = "Description: " + description.value;
        dueDateText.textContent = "dueDate: " + dueDate.value;
        priorityText.textContent = "Priority: " + priority.value;
        notesText.textContent = "Notes: " + notes.value;
        dialog.close();
        document.getElementById("confirm-").style.display = "none";
    })
}
