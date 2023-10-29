import { task } from "./AppLogic/CreateToDo.js";
import { count } from "../index.js"

let tasksArray = [];
export function saveTasks() {
    const task = document.querySelector("#task-" + count);
    console.log(task);
}