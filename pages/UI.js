const overlay = document.querySelector(".overlay");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

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
