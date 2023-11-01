import { createNewItem } from "../index.js";

export function saveTasks() {
    let tasksArray = [];
    const confirmBtn = document.getElementById("confirm");
    confirmBtn.addEventListener("click", () => {
        let newItem = createNewItem();
        tasksArray.push(newItem);
        console.log(newItem)

        localStorage.setItem("items", JSON.stringify(newItem));
    });
}
