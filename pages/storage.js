import Project from "./project";

// Stores the projects in a list
export default class ListOfProjects {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("Week"));
    this.projects.push(new Project("Undefined"));
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }
}
