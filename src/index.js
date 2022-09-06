import Task from "../pages/task";
import Project from "../pages/project";
import {
  openTaskModal,
  openProjectModal,
  closeModal,
  populateList,
} from "../pages/UI";
import { submitTask } from "../pages/handler";

openTaskModal();
openProjectModal();
closeModal();
// submitTask();
const task = new Task();
task.setTitle("Yo");
task.setDescription("desc");
task.setDueDate("10-15-15");
task.setPriority("high");

const task2 = new Task();
task2.setTitle("Y234o");
task2.setDescription("desc");
task2.setDueDate("10-15-15");
task2.setPriority("low");

const project = new Project("new");
project.addTask(task);
project.addTask(task2);

console.log(project);

populateList(project);
