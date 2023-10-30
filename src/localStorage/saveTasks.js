import { count } from "../index.js";
import { newItem } from "../index.js";
export function saveTasks() {
    let tasksArray = [];
    tasksArray.push(newItem);
    localStorage.setItem('todos', JSON.stringify(tasksArray));
}