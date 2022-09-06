import Project from "./project";
import Task from "./task";
import {
  openTaskModal,
  openProjectModal,
  populateList,
  populateProjectList,
} from "./UI";
import { listOfProjects } from "./storage";

const project = new Project("new");
const isVisible = "is-visible";
const overlay = document.querySelector(".overlay");

// Submits the task a Project. NEEDS TO GET THE SELECTED PROJECT
export function submitTask() {
  const submitTaskBtn = document.querySelector(".submit-task");
  submitTaskBtn.addEventListener("click", function (e) {
    // const inProject = pickproject.value.some((el) => (el.title = title.value)); // Checks if task is in chosen project

    // Fields must have a value
    if (title.value === "" || description.value === "" || duedate.value === "")
      return;

    const newTask = new Task(
      title.value,
      description.value,
      duedate.value,
      taskpriority.value
    );
    project.addTask(newTask);
    console.log(newTask);
    populateList(project);
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    overlay.classList.remove("active");
  });
}

// Creates new project
export function submitProject() {
  const submitProjectBtn = document.querySelector(".submit-project");
  submitProjectBtn.addEventListener("click", function (e) {
    if (projectname.value === "") return;

    const newProject = new Project(projectname.value);
    listOfProjects.push(newProject);
    populateProjectList();
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    overlay.classList.remove("active");
    console.log(listOfProjects);
  });
}

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
const anotherProject = new Project("msdfasdf");
listOfProjects.push(project, anotherProject);

project.addTask(task);
project.addTask(task2);

// Initializes the app
export function initApp() {
  openTaskModal();

  console.log(project);
  populateList(project);
  populateProjectList();
  console.log(listOfProjects);
}
