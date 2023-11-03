import { createNewItem } from "../index.js";

export function saveTasks() {
    let items = [];
    const confirmBtn = document.getElementById("confirm");
    confirmBtn.addEventListener("click", () => {
        let newItem = createNewItem();
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
    });
}
