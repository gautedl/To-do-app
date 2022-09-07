import Project from "./project";
import Task from "./task";
import { openTaskModal, populateList, populateProjectList } from "./UI";

const isVisible = "is-visible";
const overlay = document.querySelector(".overlay");

export function submitTask(listOfProjects, project) {
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
    // project.addTask(newTask);
    const chosenProj = project.value; //The name value of the chosen project

    getProjectFromName(listOfProjects, chosenProj).addTask(newTask); // Adds the task to the correct project
    populateList();
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    overlay.classList.remove("active");
  });
}

// Gets a project from project name
function getProjectFromName(project, title) {
  for (let i = 0; i < project.length; i++) {
    if (project[i].title === title) {
      return project[i];
    }
  }
}

// Creates new project
export function submitProject(listOfProjects) {
  const submitProjectBtn = document.querySelector(".submit-project");
  submitProjectBtn.addEventListener("click", function (e) {
    if (projectname.value === "") return;

    const newProject = new Project(projectname.value);
    listOfProjects.addProject(newProject);
    populateProjectList();
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    overlay.classList.remove("active");
  });
}

// Deletes a task when the trash can is clicked
export function deleteTask(div, project, task) {
  div.addEventListener("click", function (e) {
    for (let i = 0; i < project.length; i++) {
      for (let j = 0; j < project[i].tasks.length; j++) {
        if (project[i].tasks[j].title === task.title) {
          project[i].deleteTask(task);
        }
      }
    }

    populateList();
  });
}

export function editTask(div, project, task) {
  div.addEventListener("click", () => {});
}

// Initializes the app
export function initApp() {
  openTaskModal();

  populateList();
  populateProjectList();
}
