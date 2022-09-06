import Project from "./project";
import Task from "./task";

export function submitTask() {
  const submitTaskBtn = document.querySelector(".submit-task");
  submitTaskBtn.addEventListener("click", function (e) {
    const newTask = new Task(
      title.value,
      description.value,
      duedate.value,
      taskpriority.value
    );
    console.log(newTask);
  });
}

export function submitProject() {
  const submitProjectBtn = document.querySelector(".submit-project");
  submitProjectBtn.addEventListener("click", function (e) {
    const newProject = Project(projectname.value);
    console.log(newProject);
  });
}
