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

    const chosenProj = project.value; //The name value of the chosen project

    const currentProj = getProjectFromName(listOfProjects, chosenProj);

    currentProj.addTask(newTask); // Adds the task to the correct project
    populateList(currentProj);

    const listOfTasks = currentProj.tasks;

    saveTasks(chosenProj, listOfTasks, currentProj);

    populateList(currentProj);

    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    overlay.classList.remove("active");
  });
}

// Saves the tasks to local storage
function saveTasks(chosenProjName, listOfTasks, currentProj) {
  let list = [];
  for (let i = 0; i < listOfTasks.length; i++) {
    list.push(listOfTasks[i]);
  }

  localStorage.setItem(chosenProjName, JSON.stringify(list));

  const tasks = JSON.parse(localStorage.getItem(chosenProjName)) || [];
  // const locallyStored = JSON.parse(localStorage.getItem("Undefined")) || [];

  for (let i = 0; i < tasks.length; i++) {
    currentProj.addTask(tasks[i]);
  }
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

    const listOfProjectsNew = listOfProjects.projects;

    let list = [];
    for (let i = 0; i < listOfProjectsNew.length; i++) {
      list.push(listOfProjectsNew[i]);
    }

    localStorage.setItem("listOfProjects", JSON.stringify(list));

    const projects = JSON.parse(localStorage.getItem("listOfProjects")) || [];

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
          saveTasks(project[i].title, project[i].tasks, project[i]);
        }
      }
    }

    populateList();
  });
}

// Edits the task
export function editTask(btn, project, task, listOfProjects) {
  btn.addEventListener("click", () => {
    task.setTitle(title.value);
    task.setDescription(description.value);
    task.setDueDate(duedate.value);
    task.setPriority(taskpriority.value);

    const chosenProj = getProjectFromName(listOfProjects, project.value);

    swapProjects(chosenProj, task, listOfProjects);
    saveTasks(project.value, chosenProj.tasks, chosenProj);

    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    overlay.classList.remove("active");
  });
}

// Function for moving a task to another project when edited.
function swapProjects(project, task, listOfProjects) {
  if (project.findTask(task.title) === false) {
    for (let i = 0; i < listOfProjects.length; i++) {
      for (let j = 0; j < listOfProjects[i].tasks.length; j++) {
        if (listOfProjects[i].tasks[j].title === task.title) {
          listOfProjects[i].deleteTask(task);
          project.addTask(task);
        }
      }
    }
    populateList();
  } else {
    populateList();
  }
}

// Initializes the app
export function initApp() {
  openTaskModal();

  populateList();
  populateProjectList();
}
