import { count } from "../index.js"
import verify from "../Icons/check.png";

export function setComplete() {
    const setCompleteBtn = new Image();
    setCompleteBtn.src = verify;
    setCompleteBtn.setAttribute("id", "setComplete-" +count);
    setCompleteBtn.style.padding = "6px 8px";

    const task = document.querySelector("#task-" + count);
    
    let setCompleteCount = 2;
    setCompleteBtn.addEventListener("click", function() {
        setCompleteCount++;
        if(setCompleteCount % 2 == 0) {
            console.log("verify count is: " + setCompleteCount);
            task.style.backgroundColor = "#e11d487a";
        }
        else {
            console.log("verify count is: " + setCompleteCount);
            task.style.backgroundColor = "#1de16d7a";
        }
    })
    return setCompleteBtn
}
