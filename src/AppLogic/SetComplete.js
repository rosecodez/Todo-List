import { count } from "../index.js"
import verify from "../Icons/check.png";

export function setComplete() {
    const setCompleteBtn = new Image();
    setCompleteBtn.src = verify;
    setCompleteBtn.setAttribute("id", "setComplete-" +count.value);
    setCompleteBtn.style.padding = "6px 8px";

    const task = document.querySelector("#task-" + count.value);
    let setCompleteCount = 2;
    setCompleteBtn.addEventListener("click", function() {
        const titleText = document.querySelector("#titleText-" + count.value);
        setCompleteCount++;
        if(setCompleteCount % 2 == 0) {
            task.style.backgroundColor = "#e11d487a";
            titleText.textContent = "⁍Title: " + title.value + "(incomplete)";
        }
        else {
            task.style.backgroundColor = "#1de16d7a";
            titleText.textContent = "⁍Title: " + title.value + "(complete)";
        }
    })
    return setCompleteBtn
}
