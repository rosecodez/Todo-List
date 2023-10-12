let deleteBtn = document.createElement("button");
task.appendChild(deleteBtn);
deleteBtn.setAttribute("id", "delete")
deleteBtn.textContent = "Delete";

deleteBtn.addEventListener("click", function (event) {
    task.remove(); 
})