import { count } from "../index.js";

export function viewEach() {
    const items = document.querySelectorAll(".tasks");
    
    items.forEach((item) => {
    item.addEventListener("click", (e) => {
        item.classList.toggle("active");
        let itemsArray = [...items];
        let array = itemsArray.filter((item) => item !== e.target);
        array.forEach((elem) => {
        elem.hidden = !elem.hidden;
        });
    });
    });
}