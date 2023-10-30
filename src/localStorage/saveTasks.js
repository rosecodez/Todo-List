import { task } from "../AppLogic/CreateToDo.js";
import { count } from "../index.js"

export function saveTasks() {
    let tasksArray = [];
    const task = document.querySelector("#task-" + count);
    tasksArray.push(task);
    for (let i = 0; i<tasksArray; i++) {
        console.log(tasksArray[i]);
    }
    console.log(tasksArray[0]);
    localStorage.setItem('todos', JSON.stringify(tasksArray));
}