import Task from "../pages/task";
import Project from "../pages/project";

const task = new Task();
task.setTitle("Yo");
task.setDescription("desc");
task.setDueDate("10-15-15");
task.setPriority("high");

const project = new Project("new", "project");
project.addTask(task);

console.log(project);
