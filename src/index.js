import "../src/style.css";
import { getCurrentDate } from "./AppLogic/currentDate.js";
import { createItem } from "./AppLogic/CreateToDo.js";
import { disablePreviousDate } from "./AppLogic/disablePreviousDate.js";
import { task } from "./AppLogic/CreateToDo.js";
import { remainingTime } from "./AppLogic/remainingTime.js";
import { searchTasks } from "./localStorage/searchTasks";

export let count = (() => {
  let countVal = 0;
  return {
    get value() {
      return countVal;
    },
    set value(val) {
      countVal = val;
    },
    increment() {
      return ++countVal;
    },
    decrement() {
      return --countVal;
    },
  };
})();

export let savedItems = JSON.parse(localStorage.getItem("items"));
export let items = [];

const addTaskBtn = document.getElementById("add-task");
const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
const cancelBtn = document.getElementById("cancel");
const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const priority1 = document.getElementById("priority1");
const priority2 = document.getElementById("priority2");
const priority3 = document.getElementById("priority3");
const priority4 = document.getElementById("priority4");
const notes = document.getElementById("notes");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

getCurrentDate();

addTaskBtn.addEventListener("click", () => {
  dialog.showModal();
  disablePreviousDate();

  confirmBtn.style.display = "flex";
  task.style.backgroundColor = "#1de1407a";
  title.value = "";
  description.value = "";
  dueDate.value = "";
  priority.value = false;
  notes.value = "";

  count.increment();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
  count.decrement();
});
class Item {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}
export function createNewItem() {
  const newItem = new Item(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    notes.value,
  );
  return newItem;
}

confirmBtn.addEventListener("click", function () {
  createItem(count.value);
  dialog.close();
  const titleText = document.querySelector("#titleText-" + count.value);
  const descriptionText = document.querySelector(
    "#descriptionText-" + count.value,
  );
  const dueDateText = document.querySelector("#dueDateText-" + count.value);
  const priorityText = document.querySelector("#priorityText-" + count.value);
  const notesText = document.querySelector("#notesText-" + count.value);

  titleText.textContent = "⁍Title: " + title.value;
  dueDateText.textContent = "dueDate: " + dueDate.value;

  if (description.value === "") {
    descriptionText.textContent = "Description: none";
  } else {
    descriptionText.textContent = "Description: " + description.value;
  }

  if (priority.value === "") {
    priorityText.textContent = "Description: none";
  } else {
    priorityText.textContent = "Description: " + priority.value;
  }

  if (notes.value === "") {
    notesText.textContent = "Notes: none";
  } else {
    notesText.textContent = "Notes: " + notes.value;
  }

  if (priority1.checked) {
    priorityText.textContent = priority1.value;
    priorityText.style.background;
  } else if (priority2.checked) {
    priorityText.textContent = priority2.value;
  } else if (priority3.checked) {
    priorityText.textContent = priority3.value;
  } else if (priority4.checked) {
    priorityText.textContent = priority4.value;
  }
  descriptionText.style.display = "none";
  priorityText.style.display = "none";
  notesText.style.display = "none";
  remainingTime();
  let newItem = createNewItem();
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
  console.log(items);
});
searchTasks();
