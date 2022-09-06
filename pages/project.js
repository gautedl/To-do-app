export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getTasks() {
    return this.tasks;
  }

  findTask(taskName) {
    return this.tasks.some((task) => task.title === taskName);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name != taskName);
  }

  addTask(newTask) {
    if (this.tasks.some((task) => task.title === newTask.title)) {
      return;
    } else this.tasks.push(newTask);
  }
}
