import { count } from "../index.js";

export function createExpandBtn() {
  let expandBtn = document.createElement("button");

  expandBtn.setAttribute("id", "expandBtn-" + count.value);
  expandBtn.style.padding = "6px 8px";
  expandBtn.style.backgroundColor = "white";
  expandBtn.style.alignSelf = "flex-end";
  expandBtn.textContent = "↑";
  let expandCount = 0;
  const descriptionText = document.querySelector(
    "#descriptionText-" + count.value,
  );
  const priorityText = document.querySelector("#priorityText-" + count.value);
  const notesText = document.querySelector("#notesText-" + count.value);

  expandBtn.addEventListener("click", function () {
    expandCount++;
    if (expandCount % 2 == 0) {
      expandBtn.textContent = "↑";
      descriptionText.style.display = "none";
      priorityText.style.display = "none";
      notesText.style.display = "none";
    } else {
      expandBtn.textContent = "↓";
      descriptionText.style.display = "flex";
      priorityText.style.display = "flex";
      notesText.style.display = "flex";
    }
  });
  return expandBtn;
}
