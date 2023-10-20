import { count } from "../index.js"
export function editToDo() {
    let editItemBtn = document.createElement("button");
    editItemBtn.textContent = "Edit";
    editItemBtn.setAttribute("id", "editItemBtn-" +count);
    editItemBtn.style.padding = "6px 8px";

    editItemBtn.querySelector("#editItemBtn-" + count);
    editItemBtn.addEventListener("click", () => {
        dialog.showModal();
        const confirm = document.getElementById("confirm");
        confirm.style.display = "none";
        const confirmEditBtn = document.querySelector("#confirmEditBtn-" + count);
        confirmEditBtn.style.display = "flex";
    });
    return editItemBtn
}
export function confirmEditToDo() {
    let confirmEditBtn = document.createElement("button");
    confirmEditBtn.setAttribute("id", "confirmEditBtn-" +count);
    confirmEditBtn.textContent = "confirmEditBtn";

    confirmEditBtn.style.padding = "6px 8px";
    confirmEditBtn.style.display = "none";
    confirmEditBtn.style.alignItems = "center";

    const titleText = document.querySelector("#titleText-" + count);
    const descriptionText = document.querySelector("#descriptionText-" + count);
    const dueDateText = document.querySelector("#dueDateText-" + count);
    const priorityText = document.querySelector("#priorityText-" + count);
    const notesText = document.querySelector("#notesText-" + count);

    confirmEditBtn.querySelector("#confirmEditBtn-" + count);
    confirmEditBtn.addEventListener("click", () => {
        titleText.textContent = "⁍Title: " + title.value;
        descriptionText.textContent = "Description: " + description.value;
        dueDateText.textContent = "dueDate: " + dueDate.value;
        priorityText.textContent = "Priority: " + priority.value;
        notesText.textContent = "Notes: " + notes.value;
        dialog.close();
        const confirmBtn = document.getElementById("confirm");
        confirmBtn.style.display = "none";
    })
    const addTaskBtn = document.getElementById("add-task");
    addTaskBtn.addEventListener("click", () => {
        confirmEditBtn.style.display = "none";
    })
    return confirmEditBtn
}