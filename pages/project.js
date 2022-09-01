export default class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
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

  getTasks() {
    return this.tasks;
  }

  findTask(taskName) {
    return this.tasks.some((task) => task.name === taskName);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name != taskName);
  }

  addTask(newTask) {
    if (this.tasks.some((task) => task.name === taskName.name)) {
      return;
    } else this.tasks.push(newTask);
  }
}
