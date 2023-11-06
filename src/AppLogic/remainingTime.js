import { getCurrentDate } from "./currentDate";
import { count } from "..";
export function remainingTime() {
  const dueDate = document.getElementById("dueDate").value;
  let current_date = new Date(getCurrentDate());
  const chosen_date = new Date(dueDate);

  let remainingDays = current_date.getTime() - chosen_date.getTime();
  let days = Math.ceil(remainingDays / (1000 * 3600 * 24));

  const dueDateText = document.querySelector("#dueDateText-" + count.value);

  dueDateText.textContent =
    "dueDate: " + dueDate + "(Remaining days: " + Math.abs(days) + ")";
  if (dueDate.length == 0) {
    dueDateText.textContent = "dueDate: ";
  }
}
