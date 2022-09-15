import edit from "../img/edit.png";
import deleteImgSrc from "../img/delete.png";
import newProjectBtnImg from "../img/plus-circle.svg";
import deleteProjectImg from "../img/icons8-remove-24.png";
import {
  submitTask,
  submitProject,
  deleteTaskFromList,
  editTask,
  saveTasks,
  deleteProject,
} from "./handler";
import { ListOfProjects } from "./storage";
import Task from "./task";
import Project from "./project";

const newProject = new ListOfProjects();

// const localeListOfProjects = new ListOfProjects();
const projects = JSON.parse(localStorage.getItem("listOfProjects")) || [];

// Adds the tasks from local storage to list of projects that is not default
for (let i = 1; i < projects.length; i++) {
  const tasksFromProject = JSON.parse(localStorage.getItem(projects[i])) || [];
  newProject.addProject(new Project(projects[i], tasksFromProject));
}

// const newProject.projects = newProject.projects;

// Loops trough list of projects and add tasks to the projects
for (let j = 3; j < newProject.projects.length; j++) {
  const tasks =
    JSON.parse(localStorage.getItem(newProject.projects[j].title)) || [];

  for (let i = 0; i < tasks.length; i++) {
    newProject.projects[j].addTask(
      new Task(
        tasks[i].title,
        tasks[i].description,
        tasks[i].dueDate,
        tasks[i].priority,
        tasks[i].active
      )
    );
  }
}

const overlay = document.querySelector(".overlay");
const isVisible = "is-visible";
const listBody = document.querySelector(".list-body");
const modal = document.querySelector(".modal");
const projectList = document.querySelector(".project-list");
const sideBarButtons = document.querySelectorAll(".timeframe");

const totalTasks = document.getElementById("total-count");
const todayTasks = document.getElementById("today-count");
const weekTasks = document.getElementById("week-count");
const listTitle = document.getElementById("list-title");

let curProject = newProject.projects[2]; //Stores the current project selected. Defaults at home

// Opens the modal for creating a new task
export function openTaskModal() {
  const newTask = document.querySelector(".add-task");
  newTask.addEventListener("click", function () {
    newTaskModal();
    modal.classList.add(isVisible);
    overlay.classList.add("active");
  });
}

// Function for closing modal. Takes the close button of current modal as input
function closeModal(el) {
  el.addEventListener("click", function () {
    modal.classList.remove(isVisible);
    overlay.classList.remove("active");
  });
}

// Function for opening the project modal
function projectModal() {
  modal.innerHTML = "";

  const modalDialog = document.createElement("div");
  // modalDialog.className = "modal";
  modalDialog.className = "project-modal-dialog";
  modalDialog.innerHTML = `
        <header class="modal-header">
          <p>New Project</p>
          <button class="close-modal" aria-label="close modal" data-close>
            X
          </button>
        </header>
        <section>
          <form class="modal-form">
            <div class="project-inputs">
              <input
                type="text"
                placeholder="Project name"
                id="projectname"
                name="projectname"
                required
              />
              <span class="error-msg"></span>
            </div>
            <div class="submit-btn-project">
              <button class="submit-project btn" type="button">Submit</button>
            </div>
          </form>
        </section>
      `;
  modal.appendChild(modalDialog);
  const closeProjectModal = document.querySelector("[data-close]");
  modal.classList.add(isVisible);
  overlay.classList.add("active");
  submitProject(newProject);
  closeModal(closeProjectModal);
}

// Function for creating and populating the task modal
function newTaskModal() {
  modal.innerHTML = ""; // Cleans up modal for every time it's called

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog";
  const header = document.createElement("header");
  header.className = "modal-header";
  header.innerHTML = `
          <p>New Task</p>
          <button class="close-modal" aria-label="close modal" data-close>
            X
          </button>`;
  modalDialog.appendChild(header);

  const section = document.createElement("section");
  section.className = "modal-content";
  const form = document.createElement("form");
  form.className = "task-form";
  const leftSide = document.createElement("div");
  leftSide.className = "left-side";
  leftSide.innerHTML = `
              <input
                class="inputs"
                placeholder="Task name"
                type="text"
                id="title"
                name="title"
                required
              />
              <textarea
                type="text"
                placeholder="Description"
                id="description"
                name="description"
                
                required
              ></textarea>`;

  form.appendChild(leftSide);
  const rightSide = document.createElement("div");
  rightSide.className = "right-side";

  const dueDateDiv = document.createElement("div");
  dueDateDiv.className = "form-div";
  dueDateDiv.innerHTML = `
                <label for="duedate">Due Date</label>
                <input type="date" class="inputs" name="duedate" id="duedate" />`;

  const priDiv = document.createElement("div");
  priDiv.className = "form-div";
  priDiv.innerHTML = `<label for="taskpriority">Priority</label>
                <select name="taskpriority" id="taskpriority">
                  <option class="lowPri" value="low">Low</option>
                  <option value="medium" class="mediumPri">Medium</option>
                  <option value="high" class="highPri">High</option>
                </select>`;

  const projectDiv = document.createElement("div");
  projectDiv.className = "form-div";
  projectDiv.innerHTML = `<label for="pickproject">Project</label>`;

  const pickProject = document.createElement("select");
  pickProject.name = "pickproject";
  pickProject.id = "pickproject";
  for (let i = 3; i < newProject.projects.length; i++) {
    const option = document.createElement("option");
    option.value = newProject.projects[i].title;
    option.textContent = newProject.projects[i].title;
    pickProject.appendChild(option);
  }

  projectDiv.appendChild(pickProject);

  rightSide.appendChild(dueDateDiv);
  rightSide.appendChild(priDiv);
  rightSide.appendChild(projectDiv);
  form.appendChild(rightSide);

  const button = document.createElement("div");
  button.className = "submit-btn";
  button.innerHTML = `<button class="submit-task btn" type="button">Submit</button>`;
  form.appendChild(button);
  section.appendChild(form);
  modalDialog.appendChild(section);

  modal.appendChild(modalDialog); // Appends the newly created modal to modal tag in index.html
  const closeTaskModal = document.querySelector("[data-close]"); //Fetches the clsoe button from modal inenrHTML
  submitTask(newProject.projects, pickProject); // Submits task to project.
  closeModal(closeTaskModal); // Closes the modal
}

// Populates the list view with tasks from the selected project
export function populateList(project = curProject) {
  listBody.innerHTML = "";
  // updateDefaultTasks();
  addAllTasksToHome();
  numberOfTasksSideBar();
  if (project.title === "Undefined") listTitle.textContent = "Home";
  else listTitle.textContent = project.title;

  if (project.tasks.length === 0) return;

  for (let i = 0; i < project.tasks.length; i++) {
    const listCard = document.createElement("div");
    listCard.className = "list-card";
    const checkBoxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.className = "checkbox";
    checkbox.type = "checkbox";
    checkbox.id = "mark-task";
    checkbox.for = "task-name";

    const checkboxLabel = document.createElement("label");
    checkboxLabel.className = "checkbox-name";
    checkboxLabel.for = "task-name";
    checkBoxContainer.appendChild(checkbox);

    const listItem = document.createElement("div");
    listItem.className = "list-items";
    const openTaskBtn = document.createElement("button");
    openTaskBtn.className = "open-task";
    openTaskBtn.classList.add("btn");
    openTaskBtn.textContent = "Open";
    const dueDate = document.createElement("div");
    dueDate.className = "task-date";
    const editImg = document.createElement("img");
    editImg.id = "edit-task";
    editImg.src = edit;
    const deleteImg = document.createElement("img");
    deleteImg.id = "delete-task";
    deleteImg.src = deleteImgSrc;

    priorityColor(project.tasks[i].priority, listCard);

    checkboxLabel.textContent = project.tasks[i].title;
    dueDate.textContent = project.tasks[i].getFormattedDate();
    checkBoxContainer.appendChild(checkboxLabel);

    listItem.appendChild(openTaskBtn);
    listItem.appendChild(dueDate);
    listItem.appendChild(editImg);
    listItem.appendChild(deleteImg);

    listCard.appendChild(checkBoxContainer);
    listCard.appendChild(listItem);

    listBody.appendChild(listCard);

    if (!project.tasks[i].active) {
      listCard.classList.add("unactive");
      checkbox.checked = true;
    }

    checkTask(checkbox);
    editTaskModal(editImg, project.tasks[i]);
    deleteTaskFromList(deleteImg, newProject.projects, project.tasks[i]);

    taskInfoModal(openTaskBtn, project.tasks[i]);
  }
}

// Edits the task
function editTaskModal(editImg, task) {
  editImg.addEventListener("click", () => {
    modal.innerHTML = ""; // Cleans up modal for every time it's called

    const modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";
    const header = document.createElement("header");
    header.className = "modal-header";
    header.innerHTML = `
          <p>${task.title}</p>
          <button class="close-modal" aria-label="close modal" data-close>
            X
          </button>`;
    modalDialog.appendChild(header);

    const section = document.createElement("section");
    section.className = "modal-content";
    const form = document.createElement("form");
    form.className = "task-form";
    const leftSide = document.createElement("div");
    leftSide.className = "left-side";
    leftSide.innerHTML = `
              <input
                class="inputs"
                value="${task.title}"
                type="text"
                id="title"
                name="title"
                required
              />
              <textarea
                type="text"
                id="description"
                name="description"
                cols="30"
                rows="4"
                required
              >${task.description}</textarea>`;

    form.appendChild(leftSide);
    const rightSide = document.createElement("div");
    rightSide.className = "right-side";

    const dueDateDiv = document.createElement("div");
    dueDateDiv.className = "form-div";
    dueDateDiv.innerHTML = `
                <label for="duedate">Due Date</label>
                <input type="date" class="inputs" name="duedate" id="duedate" value="${task.dueDate}"/>`;

    const priDiv = document.createElement("div");
    priDiv.className = "form-div";

    priDiv.innerHTML = `<label for="taskpriority">Priority</label>
                <select name="taskpriority" id="taskpriority">
                  <option class="lowPri" value="low" ${
                    task.priority === "low" ? "selected" : ""
                  }>Low</option>
                  <option value="medium" class="mediumPri ${
                    task.priority === "medium" ? "selected" : ""
                  }">Medium</option>
                  <option value="high" class="highPri" ${
                    task.priority === "high" ? "selected" : ""
                  }>High</option>
                </select>`;

    const projectDiv = document.createElement("div");
    projectDiv.className = "form-div";
    projectDiv.innerHTML = `<label for="pickproject">Project</label>`;

    const pickProject = document.createElement("select");
    pickProject.name = "pickproject";
    pickProject.id = "pickproject";
    for (let i = 3; i < newProject.projects.length; i++) {
      const option = document.createElement("option");
      option.value = newProject.projects[i].title;
      option.textContent = newProject.projects[i].title;

      if (
        newProject.projects[i].findTask(task.title) &&
        newProject.projects[i].title != "Undefined"
      ) {
        option.selected = "true";
      }

      pickProject.appendChild(option);
    }

    projectDiv.appendChild(pickProject);

    rightSide.appendChild(dueDateDiv);
    rightSide.appendChild(priDiv);
    rightSide.appendChild(projectDiv);
    form.appendChild(rightSide);

    const button = document.createElement("div");
    button.innerHTML = `<button class="update-task btn" type="button">Update task</button>`;
    form.appendChild(button);
    section.appendChild(form);
    modalDialog.appendChild(section);

    modal.appendChild(modalDialog); // Appends the newly created modal to modal tag in index.html
    const closeTaskModal = document.querySelector("[data-close]"); //Fetches the clsoe button from modal inenrHTMLmodal.classList.add(isVisible);
    modal.classList.add(isVisible);
    overlay.classList.add("active");
    editTask(button, pickProject, task, newProject.projects);

    closeModal(closeTaskModal); // Closes the modal
  });
}

// Lists the projects created
export function populateProjectList() {
  // updateDefaultTasks();
  numberOfTasksSideBar();
  projectList.innerHTML = "";
  const newProjectBtn = document.createElement("button");
  newProjectBtn.className = "new-project";
  newProjectBtn.textContent = "Add Project";
  newProjectBtn.onclick = projectModal;
  const btnLi = document.createElement("li");
  const btnDiv = document.createElement("div");
  btnDiv.className = "button-list";

  const btnImg = document.createElement("img");
  btnImg.src = newProjectBtnImg;
  newProjectBtn.appendChild(btnImg);
  btnDiv.appendChild(newProjectBtn);
  btnLi.appendChild(btnDiv);

  for (let i = 3; i < newProject.projects.length; i++) {
    const deleteProjectBtn = document.createElement("img");
    deleteProjectBtn.src = deleteProjectImg;
    const projecTitle = document.createElement("li");
    projecTitle.className = "project-title";
    projecTitle.textContent = newProject.projects[i].title;
    if (newProject.projects[i].title != "Undefined") {
      projecTitle.appendChild(deleteProjectBtn);
    }
    projectList.appendChild(projecTitle);
    deleteProject(deleteProjectBtn, newProject.projects[i], newProject);
  }

  projectList.appendChild(btnLi);
  selectProjectSideBar();
}

function selectProjectSideBar() {
  const projectButtons = document.querySelectorAll(".project-title");

  projectButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      for (let i = 2; i < newProject.projects.length; i++) {
        if (newProject.projects[i].title === e.target.textContent) {
          populateList(newProject.projects[i]);
          listTitle.textContent = newProject.projects[i].title;
          curProject = newProject.projects[i];
        }
      }
    });
  });
}

// Function for giving the tasks the correct priority color
function priorityColor(priority, div) {
  if (priority === "low") {
    div.classList.add("low-pri");
  } else if (priority === "medium") {
    div.classList.add("medium-pri");
  } else if (priority === "high") {
    div.classList.add("high-pri");
  }
}

// Shows a number after Home, Today, This week with number of tasks
export function numberOfTasksSideBar() {
  totalTasks.textContent = newProject.projects[2].tasks.length;
  todayTasks.textContent = newProject.projects[2].getTasksToday().length;
  weekTasks.textContent = newProject.projects[2].getTasksWeek().length;
}

// Adds all the tasks to the "home" default project
function addAllTasksToHome() {
  newProject.projects[2].tasks.splice(0, newProject.projects[2].tasks.length);
  for (let i = 3; i < newProject.projects.length; i++) {
    for (let j = 0; j < newProject.projects[i].tasks.length; j++) {
      newProject.projects[2].addTask(newProject.projects[i].tasks[j]);
    }
  }
}

// Populates the today object with todays tasks

function tasksToday() {
  newProject.projects[0].tasks.splice(0, newProject.projects[0].tasks.length);
  for (let i = 0; i < newProject.projects[2].getTasksToday().length; i++) {
    newProject.projects[0].addTask(newProject.projects[2].getTasksToday()[i]);
  }

  // saveTasks("Today", newProject.projects[0].tasks, newProject.projects[0]);
}

// Populates the week object with this weeks tasks
function tasksWeek() {
  newProject.projects[1].tasks.splice(0, newProject.projects[1].tasks.length);
  for (let i = 0; i < newProject.projects[2].getTasksWeek().length; i++) {
    newProject.projects[1].addTask(newProject.projects[2].getTasksWeek()[i]);
  }

  // saveTasks("Week", newProject.projects[1].tasks, newProject.projects[1]);
}

// buttons for selecting Home, Today or This week
sideBarButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.textContent === "Today") {
      tasksToday();
      curProject = newProject.projects[0];
      listTitle.textContent = "Today";

      populateList(curProject);
    }

    if (e.target.textContent === "Home") {
      addAllTasksToHome();
      curProject = newProject.projects[2];
      listTitle.textContent = "Home";

      populateList(curProject);
    }

    if (e.target.textContent === "This Week") {
      tasksWeek();
      curProject = newProject.projects[1];
      listTitle.textContent = "This Week";

      populateList(curProject);
    }
  });
});

// Modal that shows the tasks info
function taskInfoModal(openBtn, task) {
  modal.innerHTML = "";

  openBtn.addEventListener("click", () => {
    modal.innerHTML = "";
    const modalDialog = document.createElement("div");
    // modalDialog.className = "modal";
    modalDialog.className = "project-modal-dialog";
    modalDialog.innerHTML = `
        <header class="modal-header">
          <p>${task.title}</p>
          <button class="close-modal" aria-label="close modal" data-close>
            X
          </button>
        </header>
        <section>
          <div class="modal-form">
            <div class="task-info">
              <p>${task.description}</p>
              <div class="date-pri">
                <p>Date: ${task.dueDate}</p>
                <p>Priority: ${task.priority}</p>
              </div>
            </div>
            <div class="btns">
              <button class="close btn" type="button">Close</button>
              <button class="edit btn" type="button">Edit</button>
            </div>
          </div>
        </section>
      `;

    modal.appendChild(modalDialog);
    const closeBtn = document.querySelector(".close");
    const editBtn = document.querySelector(".edit");
    const closeProjectModal = document.querySelector("[data-close]");
    modal.classList.add(isVisible);
    overlay.classList.add("active");
    editTaskModal(editBtn, task);
    closeModal(closeProjectModal);
    closeModal(closeBtn);
  });
}

// Sets the status of task to active or unactive when checkbox is clicked.
function checkTask(checkbox) {
  checkbox.addEventListener("click", (e) => {
    const taskName = checkbox.parentElement.children[1].textContent;

    for (let i = 3; i < newProject.projects.length; i++) {
      for (let j = 0; j < newProject.projects[i].tasks.length; j++) {
        console.log(newProject.projects[i]);
        if (newProject.projects[i].tasks[j].title === taskName) {
          console.log(newProject.projects[i].tasks[j].title);
          checkbox.parentElement.parentElement.classList.toggle("unactive");

          newProject.projects[i].tasks[j].active =
            !newProject.projects[i].tasks[j].active;
          saveTasks(
            newProject.projects[i].title,
            newProject.projects[i].tasks,
            newProject.projects[i]
          );
        }
      }
      return;
    }
  });
}
