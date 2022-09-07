export default class Task {
  constructor(title, description, dueDate = "no due date", priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getDescription() {
    return this.description;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  getDueDate() {
    return this.dueDate();
  }

  setDueDate(date) {
    this.dueDate = date;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(setPriority) {
    this.priority = setPriority;
  }

  getFormattedDate() {
    const day = this.dueDate.split("-")[2];
    const month = this.dueDate.split("-")[1];
    const year = this.dueDate.split("-")[0];

    return `${month}/${day}/${year}`;
  }
}
