import Project from "./project";

// Stores the projects in a list
export class ListOfProjects {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("Week"));
    this.projects.push(new Project("Home"));
    this.projects.push(new Project("Undefined"));
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject) {
    if (this.projects.some((project) => project.title === newProject.title)) {
      return false;
    }
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    this.projects = this.projects.filter((project) => project != projectName);
  }
}
