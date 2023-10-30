export function searchForTasks() {
    const tasksArrayJson = localStorage.getItem('todos');
    if(tasksArrayJson){
        tasksArray = JSON.parse(tasksArrayJson);
    }
}