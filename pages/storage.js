import Project from "./project";

// Standard projects where everything gets stored. Used to populate screen, and fetch data
const home = new Project("Undefined");
const today = new Project("Today");
const week = new Project("Week");
export const listOfProjects = [today, week, home];

export default class ListOfProjects {}

export let curProject = listOfProjects[2]; //Stores the current project selected. Defaults at home
