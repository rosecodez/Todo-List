import { count } from "../index.js";
import { remainingTime } from "./remainingTime.js";

export function editToDo() {
  let editItemBtn = document.createElement("button");
  editItemBtn.textContent = "Edit";
  editItemBtn.setAttribute("id", "editItemBtn-" + count.value);
  editItemBtn.style.padding = "6px 8px";
  editItemBtn.style.backgroundColor = "white";

  editItemBtn.querySelector("#editItemBtn-" + count.value);
  editItemBtn.addEventListener("click", () => {
    dialog.showModal();
    const confirm = document.getElementById("confirm");
    confirm.style.display = "none";
    const confirmEditBtn = document.querySelector(
      "#confirmEditBtn-" + count.value,
    );
    confirmEditBtn.style.display = "flex";
  });
  return editItemBtn;
}

export function confirmEditToDo() {
  let confirmEditBtn = document.createElement("button");
  confirmEditBtn.setAttribute("id", "confirmEditBtn-" + count.value);
  confirmEditBtn.textContent = "confirmEditBtn";

  confirmEditBtn.style.padding = "6px 8px";
  confirmEditBtn.style.display = "none";
  confirmEditBtn.style.alignItems = "center";

  const titleText = document.querySelector("#titleText-" + count.value);
  const descriptionText = document.querySelector(
    "#descriptionText-" + count.value,
  );
  const dueDateText = document.querySelector("#dueDateText-" + count.value);
  const priorityText = document.querySelector("#priorityText-" + count.value);
  const notesText = document.querySelector("#notesText-" + count.value);

  confirmEditBtn.querySelector("#confirmEditBtn-" + count.value);
  confirmEditBtn.addEventListener("click", () => {
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

    class Item {
      constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
      }
    }
    const newItem = new Item(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      notes.value,
    );

    dialog.close();
    const confirmBtn = document.getElementById("confirm");
    confirmBtn.style.display = "none";
    remainingTime();
  });

  const addTaskBtn = document.getElementById("add-task");
  addTaskBtn.addEventListener("click", () => {
    confirmEditBtn.style.display = "none";
  });
  return confirmEditBtn;
}
