import { createNewItem } from "../index.js";

export function saveTasks() {
    let tasksArray = [];
    const confirmBtn = document.getElementById("confirm");
    confirmBtn.addEventListener("click", () => {
        let newItem = createNewItem();
        console.log(newItem);
        tasksArray.push(newItem);
        console.log(tasksArray);
        localStorage.setItem('items', JSON.stringify(tasksArray));
    });
    
}
