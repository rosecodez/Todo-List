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