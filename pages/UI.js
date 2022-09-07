import edit from "../img/edit.png";
import deleteImgSrc from "../img/delete.png";
import { submitTask, submitProject } from "./handler";
import { listOfProjects } from "./storage";
import isToday from "date-fns/isToday";

const overlay = document.querySelector(".overlay");
const isVisible = "is-visible";
const listBody = document.querySelector(".list-body");
const modal = document.querySelector(".modal");
const projectList = document.querySelector(".project-list");
const sideBarButtons = document.querySelectorAll(".timeframe");

const totalTasks = document.getElementById("total-count");
const todayTasks = document.getElementById("today-count");
const weekTasks = document.getElementById("week-count");

let curProject = listOfProjects[2]; //Stores the current project selected. Defaults at home

// Opens the modal for creating a new task
export function openTaskModal() {
  const newTask = document.querySelector(".add-task");
  newTask.addEventListener("click", function () {
    taskModal();
    modal.classList.add(isVisible);
    overlay.classList.add("active");
  });
}

// Function for closing modal. Takes the close button of current modal as input
function closeModal(el) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
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
            </div>
            <div class="submit-btn">
              <button class="submit-project" type="button">Submit</button>
            </div>
          </form>
        </section>
      `;
  modal.appendChild(modalDialog);
  const closeProjectModal = document.querySelector("[data-close]");
  modal.classList.add(isVisible);
  overlay.classList.add("active");
  submitProject();
  closeModal(closeProjectModal);
}

// Function for creating and populating the task modal
function taskModal() {
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
                cols="30"
                rows="4"
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
  for (let i = 2; i < listOfProjects.length; i++) {
    const option = document.createElement("option");
    option.value = listOfProjects[i].title;
    option.textContent = listOfProjects[i].title;
    pickProject.appendChild(option);
  }

  projectDiv.appendChild(pickProject);

  rightSide.appendChild(dueDateDiv);
  rightSide.appendChild(priDiv);
  rightSide.appendChild(projectDiv);
  form.appendChild(rightSide);

  const button = document.createElement("div");
  button.className = "submit-btn";
  button.innerHTML = `<button class="submit-task" type="button">Submit</button>`;
  form.appendChild(button);
  section.appendChild(form);
  modalDialog.appendChild(section);

  modal.appendChild(modalDialog); // Appends the newly created modal to modal tag in index.html
  const closeTaskModal = document.querySelector("[data-close]"); //Fetches the clsoe button from modal inenrHTML
  submitTask(); // Submits task to project. NEEDS TO GET THE CORRECT PROJECT
  closeModal(closeTaskModal); // Closes the modal
}

// Populates the list view with tasks from the selected project
export function populateList(project = curProject) {
  listBody.innerHTML = "";
  addAllTasksToHome();
  numberOfTasksSideBar();

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
  }
}

// Lists the projects created
export function populateProjectList() {
  projectList.innerHTML = "";
  const newProjectBtn = document.createElement("button");
  newProjectBtn.className = "new-project";
  newProjectBtn.textContent = "Add Project";
  newProjectBtn.onclick = projectModal;
  const btnLi = document.createElement("li");
  btnLi.appendChild(newProjectBtn);

  for (let i = 3; i < listOfProjects.length; i++) {
    const projecTitle = document.createElement("li");
    projecTitle.textContent = listOfProjects[i].title;
    projectList.appendChild(projecTitle);
  }

  projectList.appendChild(btnLi);
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
function numberOfTasksSideBar() {
  tasksToday();
  tasksWeek();
  totalTasks.textContent = listOfProjects[2].tasks.length;
  todayTasks.textContent = listOfProjects[2].getTasksToday().length;
  weekTasks.textContent = listOfProjects[2].getTasksWeek().length;
}

// Adds all the tasks to the "home" default project
function addAllTasksToHome() {
  for (let i = 3; i < listOfProjects.length; i++) {
    for (let j = 0; j < listOfProjects[i].tasks.length; j++) {
      listOfProjects[2].addTask(listOfProjects[i].tasks[j]);
    }
  }
}

// Populates the today object with todays tasks
function tasksToday() {
  for (let i = 0; i < listOfProjects[2].getTasksToday().length; i++) {
    listOfProjects[0].addTask(listOfProjects[2].getTasksToday()[i]);
  }
}

// Populates the week object with this weeks tasks
function tasksWeek() {
  for (let i = 0; i < listOfProjects[2].getTasksWeek().length; i++) {
    listOfProjects[1].addTask(listOfProjects[2].getTasksWeek()[i]);
  }
}

// buttons for selecting Home, Today or This week
sideBarButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.textContent === "Today") {
      curProject = listOfProjects[0];
      populateList(curProject);
    }

    if (e.target.textContent === "Home") {
      curProject = listOfProjects[2];
      populateList(curProject);
    }

    if (e.target.textContent === "This Week") {
      curProject = listOfProjects[1];
      populateList(curProject);
    }
  });
});
