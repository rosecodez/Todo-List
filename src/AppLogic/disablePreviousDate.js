export function disablePreviousDate() {
  dueDate.min = new Date().toISOString().split("T")[0];
}
