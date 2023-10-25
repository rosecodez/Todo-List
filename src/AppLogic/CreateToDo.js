import { createDeleteBtn } from "./DeleteToDo.js";
import { editToDo } from "./EditToDo.js";
import { confirmEditToDo } from "./EditToDo.js";
import { createExpandBtn } from "./ExpandToDo.js";
import { setComplete } from "./SetComplete.js";

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
    let task = document.createElement("button");
    return task
}

let task = createTask();
export { task }

export function createItem(num) {
    const tasks = document.getElementById("tasks");

    let task = createTask();
    task.setAttribute("id", "task-"+num);
    task.setAttribute("class", "tasks");
    tasks.appendChild(task);

    let deleteBtn = createDeleteBtn();
    task.appendChild(deleteBtn);
    deleteBtn.style.width = "60px";

    let setCompleteBtn = setComplete();
    task.appendChild(setCompleteBtn);
    setCompleteBtn.style.width = "34px";

    let editItemBtn = editToDo();
    task.appendChild(editItemBtn);
    editItemBtn.style.width = "60px";

    let bottom = document.createElement("div");
    bottom.setAttribute("id", "bottom-"+num);
    task.appendChild(bottom);

    let top = document.createElement("div");
    top.setAttribute("id", "top-"+num);
    task.appendChild(top);
    top.style.backgroundColor = "#e11d4800";
    bottom.style.backgroundColor = "#e11d4800";
    
    let titleText = document.createElement("div");
    top.appendChild(titleText);
    titleText.setAttribute("id", "titleText-"+num);

    let dueDateText = document.createElement("div");
    top.appendChild(dueDateText);
    dueDateText.setAttribute("id", "dueDateText-"+num);

    let descriptionText = document.createElement("div");
    bottom.appendChild(descriptionText);
    descriptionText.setAttribute("id", "descriptionText-"+num);

    let priorityText = document.createElement("div");
    bottom.appendChild(priorityText);
    priorityText.setAttribute("id", "priorityText-"+num);

    let notesText = document.createElement("div");
    bottom.appendChild(notesText);
    notesText.setAttribute("id", "notesText-"+num);

    let confirmEditBtn = confirmEditToDo();
    const buttons = document.getElementById("buttons");
    buttons.appendChild(confirmEditBtn);
    
    let expandBtn = createExpandBtn();
    task.appendChild(expandBtn);
}