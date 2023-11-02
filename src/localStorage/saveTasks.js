import { createNewItem } from "../index.js";

export function saveTasks() {
    let tasksArray = [];
    const confirmBtn = document.getElementById("confirm");
    confirmBtn.addEventListener("click", () => {
        let newItem = createNewItem();
        tasksArray.push(newItem);
        localStorage.setItem('items', JSON.stringify(tasksArray));
        let savedItems = JSON.parse (localStorage.getItem("items"));
        console.log(savedItems);
        const tasks = document.getElementById("tasks");
        tasks.appendChild(savedItems);
    });
}