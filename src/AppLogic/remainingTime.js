import { getCurrentDate } from "./currentDate";
import { count } from "..";
export function remainingTime() {
    let current_date = new Date (getCurrentDate());
    const chosen_date = new Date (dueDate.value);

    let remainingDays = current_date.getTime() - chosen_date.getTime();
    let days = Math.ceil(remainingDays / ( 1000 *3600 * 24));

    const dueDateText = document.querySelector("#dueDateText-" + count);
    
    dueDateText.textContent = "dueDate: " + dueDate.value + "(Remaining days: " + Math.abs(days) + ")";
}