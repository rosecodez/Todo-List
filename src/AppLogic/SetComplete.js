import { count } from "../index.js"

export function setComplete() {
    let setCompleteBtn = document.createElement("button");
    setCompleteBtn.textContent = "Complete";
    setCompleteBtn.setAttribute("id", "setComplete-" +count);
    setCompleteBtn.style.padding = "6px 8px";
    setCompleteBtn.style.backgroundColor = "white";

    const task = document.querySelector("#task-" + count);

    setCompleteBtn.addEventListener("click", function() {
        setCompleteBtn.parentElement.remove();

        console.log(task);
    })
    return setCompleteBtn
}
