export function createToDo () {
    class Item {
        constructor(title, description, dueDate, priority, notes, checklist) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.checklist = checklist;
        }
        date() {
            const date = newDate();
            return date.getFullYear() - this.year;
        }
    }
    const item1 = new Item("Study", "Study 2 hours", "Infinite", 2, "", "" );
    console.log(item1); 
}

export function createItem(num) {
    
    const tasks = document.getElementById("tasks");
    let task = document.createElement("div");
    tasks.appendChild(task);
    task.setAttribute("id", "task"+num);

    let titleText = document.createElement("div");
    task.appendChild(titleText);
    titleText.setAttribute("id", "titleText-"+num);
    
    let descriptionText = document.createElement("div");
    task.appendChild(descriptionText);
    descriptionText.setAttribute("id", "descriptionText-"+num);

    let dueDateText = document.createElement("div");
    task.appendChild(dueDateText);
    dueDateText.setAttribute("id", "dueDateText-"+num);

    let priorityText = document.createElement("div");
    task.appendChild(priorityText);
    priorityText.setAttribute("id", "priorityText-"+num);

    let notesText = document.createElement("div");
    task.appendChild(notesText);
    notesText.setAttribute("id", "notesText-"+num);

    let deleteBtn = document.createElement("button");
    task.appendChild(deleteBtn);
    deleteBtn.setAttribute("id", "delete-" +num);
    deleteBtn.textContent = "Delete";

    document.getElementById("delete-" +num).style.padding = "6px 8px";

    deleteBtn.addEventListener("click", function () {
        task.remove(); 
    })
}