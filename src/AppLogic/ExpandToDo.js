import { count } from "../index.js";

export function createExpandBtn() {
    let expandBtn = document.createElement("button");
    expandBtn.textContent = "↓";
    expandBtn.setAttribute("id", "expandBtn-" +count);
    expandBtn.style.padding = "6px 8px";
    expandBtn.style.backgroundColor = "white";
    
    let expandCount = 0;
    const titleText = document.querySelector("#titleText-" + count);
    const descriptionText = document.querySelector("#descriptionText-" + count);
    const dueDateText = document.querySelector("#dueDateText-" + count);
    const priorityText = document.querySelector("#priorityText-" + count);
    const notesText = document.querySelector("#notesText-" + count);

    expandBtn.addEventListener("click", function() {
        expandCount++
        console.log("Expand Count is: " + expandCount)

        if(expandCount % 2 == 0) {
            console.log("Even number");

            descriptionText.style.display = "none";
            priorityText.style.display = "none";
            notesText.style.display = "none";
        }
        else {
            console.log("Odd number");
            
            descriptionText.style.display = "flex";
            priorityText.style.display = "flex";
            notesText.style.display = "flex";
        }
    })   
    return expandBtn
}
 

