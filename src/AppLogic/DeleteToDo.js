import { count } from "../index.js"
export function createDeleteBtn() {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("id", "deleteBtn-" +count);
    deleteBtn.style.padding = "6px 8px";
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.remove();
    })
    return deleteBtn
}