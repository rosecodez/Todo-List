import { task } from "./CreateToDo.js"
import { count } from "../index.js";
export function createCollapsibleBtn() {
    const collapsibleBtn = document.createElement("button");
    collapsibleBtn.setAttribute("class", "collapsible");
    const task = document.querySelector("#task-" + count);


    collapsibleBtn.addEventListener("click", () => {
        for ( const child of task.children) {
            console.log()
        }
    })
    return collapsibleBtn
}

