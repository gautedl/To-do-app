import Project from "./project";
import Task from "./task";
import edit from "../img/edit.png";
import deleteImgSrc from "../img/delete.png";

const overlay = document.querySelector(".overlay");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
const listBody = document.querySelector(".list-body");

export function openTaskModal() {
  const modal = document.querySelector(".modal");
  const newTask = document.querySelector(".add-task");
  newTask.addEventListener("click", function () {
    modal.classList.add(isVisible);
    overlay.classList.add("active");
  });
}

export function openProjectModal() {
  const modal = document.querySelector(".project-modal");
  const newProject = document.querySelector(".new-project");
  newProject.addEventListener("click", function () {
    modal.classList.add(isVisible);
    overlay.classList.add("active");
  });
}

export function closeModal() {
  for (const el of closeEls) {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(
        isVisible
      );
      overlay.classList.remove("active");
    });
  }
}

export function populateList(project) {
  listBody.innerHTML = "";

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
    dueDate.textContent = project.tasks[i].dueDate;
    checkBoxContainer.appendChild(checkboxLabel);

    listItem.appendChild(openTaskBtn);
    listItem.appendChild(dueDate);
    listItem.appendChild(editImg);
    listItem.appendChild(deleteImg);

    listCard.appendChild(checkBoxContainer);
    listCard.appendChild(listItem);

    listBody.appendChild(listCard);

    console.log(listCard);
  }

  function priorityColor(priority, div) {
    if (priority === "low") {
      div.classList.add("low-pri");
    } else if (priority === "medium") {
      div.classList.add("medium-pri");
    } else if (priority === "high") {
      div.classList.add("high-pri");
    }
  }
}
