import { savedItems } from "..";
import { count } from "..";
import { createItem } from "../AppLogic/CreateToDo";
import { getCurrentDate } from "../AppLogic/currentDate";
import { items } from "..";

export function searchTasks() {
    if(!savedItems || !savedItems.length) {
        console.log("local storage is empty");
    } else {
        console.log("local storage is not empty");
    
        savedItems.forEach( (element, index)=>{
            count = index;
            createItem(count);
            const titleText = document.querySelector("#titleText-" + count);
            const descriptionText = document.querySelector("#descriptionText-" + count);
            const dueDateText = document.querySelector("#dueDateText-" + count);
            const priorityText = document.querySelector("#priorityText-" + count);
            const notesText = document.querySelector("#notesText-" + count);
            
            titleText.textContent = "⁍Title: " + `${element.title}`;
            descriptionText.textContent = "Description: " + `${element.description}`;
            priorityText.textContent = "Priority: " + `${element.priority}`;
            notesText.textContent = "Notes: " + `${element.notes}`;
    
            descriptionText.style.display = "none";
            priorityText.style.display = "none";
            notesText.style.display = "none";
            const dueDate = document.getElementById("dueDate").value;
    
            let current_date = new Date (getCurrentDate());
            console.log("current date: " + current_date)
            const chosen_date = new Date (`${element.dueDate}`);
            console.log("chosen date: " + chosen_date)
    
            let remainingDays = current_date.getTime() - chosen_date.getTime();
            let days = Math.ceil(remainingDays / ( 1000 *3600 * 24));
    
            dueDateText.textContent = "dueDate: " + `${element.dueDate}` + "(Remaining days: " + Math.abs(days) + ")";
            if (`${element.dueDate}`.length == 0) {
                dueDateText.textContent = "dueDate: ";
            }
    
            items.push(element);
            });
    }
}