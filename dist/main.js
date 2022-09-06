/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/UI.js":
/*!*********************!*\
  !*** ./pages/UI.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openTaskModal\": () => (/* binding */ openTaskModal),\n/* harmony export */   \"populateList\": () => (/* binding */ populateList),\n/* harmony export */   \"populateProjectList\": () => (/* binding */ populateProjectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./pages/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./pages/task.js\");\n/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/edit.png */ \"./img/edit.png\");\n/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/delete.png */ \"./img/delete.png\");\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handler */ \"./pages/handler.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ \"./pages/storage.js\");\n\n\n\n\n\n\n\nconst overlay = document.querySelector(\".overlay\");\nconst isVisible = \"is-visible\";\nconst listBody = document.querySelector(\".list-body\");\nconst modal = document.querySelector(\".modal\");\nconst projectList = document.querySelector(\".project-list\");\n\n// Opens the modal for creating a new task\nfunction openTaskModal() {\n  const newTask = document.querySelector(\".add-task\");\n  newTask.addEventListener(\"click\", function () {\n    taskModal();\n    modal.classList.add(isVisible);\n    overlay.classList.add(\"active\");\n  });\n}\n\n// Function for closing modal. Takes the close button of current modal as input\nfunction closeModal(el) {\n  el.addEventListener(\"click\", function () {\n    this.parentElement.parentElement.parentElement.classList.remove(isVisible);\n    overlay.classList.remove(\"active\");\n  });\n}\n\n// Function for opening the project modal\nfunction projectModal() {\n  modal.innerHTML = \"\";\n\n  const modalDialog = document.createElement(\"div\");\n  // modalDialog.className = \"modal\";\n  modalDialog.className = \"project-modal-dialog\";\n  modalDialog.innerHTML = `\n        <header class=\"modal-header\">\n          <p>New Project</p>\n          <button class=\"close-modal\" aria-label=\"close modal\" data-close>\n            X\n          </button>\n        </header>\n        <section>\n          <form class=\"modal-form\">\n            <div class=\"project-inputs\">\n              <input\n                type=\"text\"\n                placeholder=\"Project name\"\n                id=\"projectname\"\n                name=\"projectname\"\n                required\n              />\n            </div>\n            <div class=\"submit-btn\">\n              <button class=\"submit-project\" type=\"button\">Submit</button>\n            </div>\n          </form>\n        </section>\n      `;\n  modal.appendChild(modalDialog);\n  const closeProjectModal = document.querySelector(\"[data-close]\");\n  modal.classList.add(isVisible);\n  overlay.classList.add(\"active\");\n  (0,_handler__WEBPACK_IMPORTED_MODULE_4__.submitProject)();\n  closeModal(closeProjectModal);\n}\n\n// Function for creating and populating the task modal\nfunction taskModal() {\n  modal.innerHTML = \"\"; // Cleans up modal for every time it's called\n\n  const modalDialog = document.createElement(\"div\");\n  modalDialog.className = \"modal-dialog\";\n  const header = document.createElement(\"header\");\n  header.className = \"modal-header\";\n  header.innerHTML = `\n          <p>New Task</p>\n          <button class=\"close-modal\" aria-label=\"close modal\" data-close>\n            X\n          </button>`;\n  modalDialog.appendChild(header);\n\n  const section = document.createElement(\"section\");\n  section.className = \"modal-content\";\n  const form = document.createElement(\"form\");\n  form.className = \"task-form\";\n  const leftSide = document.createElement(\"div\");\n  leftSide.className = \"left-side\";\n  leftSide.innerHTML = `\n              <input\n                class=\"inputs\"\n                placeholder=\"Task name\"\n                type=\"text\"\n                id=\"title\"\n                name=\"title\"\n                required\n              />\n              <textarea\n                type=\"text\"\n                placeholder=\"Description\"\n                id=\"description\"\n                name=\"description\"\n                cols=\"30\"\n                rows=\"4\"\n                required\n              ></textarea>`;\n\n  form.appendChild(leftSide);\n  const rightSide = document.createElement(\"div\");\n  rightSide.className = \"right-side\";\n\n  const dueDateDiv = document.createElement(\"div\");\n  dueDateDiv.className = \"form-div\";\n  dueDateDiv.innerHTML = `\n                <label for=\"duedate\">Due Date</label>\n                <input type=\"date\" class=\"inputs\" name=\"duedate\" id=\"duedate\" />`;\n\n  const priDiv = document.createElement(\"div\");\n  priDiv.className = \"form-div\";\n  priDiv.innerHTML = `<label for=\"taskpriority\">Priority</label>\n                <select name=\"taskpriority\" id=\"taskpriority\">\n                  <option class=\"lowPri\" value=\"low\">Low</option>\n                  <option value=\"medium\" class=\"mediumPri\">Medium</option>\n                  <option value=\"high\" class=\"highPri\">High</option>\n                </select>`;\n\n  const projectDiv = document.createElement(\"div\");\n  projectDiv.className = \"form-div\";\n  projectDiv.innerHTML = `<label for=\"pickproject\">Project</label>`;\n\n  const pickProject = document.createElement(\"select\");\n  pickProject.name = \"pickproject\";\n  pickProject.id = \"pickproject\";\n  const home = document.createElement(\"option\");\n  home.value = \"home\";\n  home.textContent = \"Home\";\n  pickProject.appendChild(home);\n  for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_5__.listOfProjects.length; i++) {\n    const option = document.createElement(\"option\");\n    option.value = _storage__WEBPACK_IMPORTED_MODULE_5__.listOfProjects[i].title;\n    option.textContent = _storage__WEBPACK_IMPORTED_MODULE_5__.listOfProjects[i].title;\n    pickProject.appendChild(option);\n  }\n\n  projectDiv.appendChild(pickProject);\n\n  rightSide.appendChild(dueDateDiv);\n  rightSide.appendChild(priDiv);\n  rightSide.appendChild(projectDiv);\n  form.appendChild(rightSide);\n\n  const button = document.createElement(\"div\");\n  button.className = \"submit-btn\";\n  button.innerHTML = `<button class=\"submit-task\" type=\"button\">Submit</button>`;\n  form.appendChild(button);\n  section.appendChild(form);\n  modalDialog.appendChild(section);\n\n  modal.appendChild(modalDialog); // Appends the newly created modal to modal tag in index.html\n  const closeTaskModal = document.querySelector(\"[data-close]\"); //Fetches the clsoe button from modal inenrHTML\n  (0,_handler__WEBPACK_IMPORTED_MODULE_4__.submitTask)(); // Submits task to project. NEEDS TO GET THE CORRECT PROJECT\n  closeModal(closeTaskModal); // Closes the modal\n}\n\n// Populates the list view with tasks from the selected project\nfunction populateList(project = \"home\") {\n  listBody.innerHTML = \"\";\n\n  for (let i = 0; i < project.tasks.length; i++) {\n    const listCard = document.createElement(\"div\");\n    listCard.className = \"list-card\";\n    const checkBoxContainer = document.createElement(\"div\");\n    const checkbox = document.createElement(\"input\");\n    checkbox.className = \"checkbox\";\n    checkbox.type = \"checkbox\";\n    checkbox.id = \"mark-task\";\n    checkbox.for = \"task-name\";\n\n    const checkboxLabel = document.createElement(\"label\");\n    checkboxLabel.className = \"checkbox-name\";\n    checkboxLabel.for = \"task-name\";\n    checkBoxContainer.appendChild(checkbox);\n\n    const listItem = document.createElement(\"div\");\n    listItem.className = \"list-items\";\n    const openTaskBtn = document.createElement(\"button\");\n    openTaskBtn.className = \"open-task\";\n    openTaskBtn.textContent = \"Open\";\n    const dueDate = document.createElement(\"div\");\n    dueDate.className = \"task-date\";\n    const editImg = document.createElement(\"img\");\n    editImg.id = \"edit-task\";\n    editImg.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_2__;\n    const deleteImg = document.createElement(\"img\");\n    deleteImg.id = \"delete-task\";\n    deleteImg.src = _img_delete_png__WEBPACK_IMPORTED_MODULE_3__;\n\n    priorityColor(project.tasks[i].priority, listCard);\n\n    checkboxLabel.textContent = project.tasks[i].title;\n    dueDate.textContent = project.tasks[i].dueDate;\n    checkBoxContainer.appendChild(checkboxLabel);\n\n    listItem.appendChild(openTaskBtn);\n    listItem.appendChild(dueDate);\n    listItem.appendChild(editImg);\n    listItem.appendChild(deleteImg);\n\n    listCard.appendChild(checkBoxContainer);\n    listCard.appendChild(listItem);\n\n    listBody.appendChild(listCard);\n  }\n}\n\nfunction populateProjectList() {\n  projectList.innerHTML = \"\";\n  const newProjectBtn = document.createElement(\"button\");\n  newProjectBtn.className = \"new-project\";\n  newProjectBtn.textContent = \"Add Project\";\n  newProjectBtn.onclick = projectModal;\n  const btnLi = document.createElement(\"li\");\n  btnLi.appendChild(newProjectBtn);\n\n  for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_5__.listOfProjects.length; i++) {\n    const projecTitle = document.createElement(\"li\");\n    projecTitle.textContent = _storage__WEBPACK_IMPORTED_MODULE_5__.listOfProjects[i].title;\n    projectList.appendChild(projecTitle);\n  }\n\n  projectList.appendChild(btnLi);\n}\n\n// Function for giving the tasks the correct priority color\nfunction priorityColor(priority, div) {\n  if (priority === \"low\") {\n    div.classList.add(\"low-pri\");\n  } else if (priority === \"medium\") {\n    div.classList.add(\"medium-pri\");\n  } else if (priority === \"high\") {\n    div.classList.add(\"high-pri\");\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/UI.js?");

/***/ }),

/***/ "./pages/handler.js":
/*!**************************!*\
  !*** ./pages/handler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initApp\": () => (/* binding */ initApp),\n/* harmony export */   \"submitProject\": () => (/* binding */ submitProject),\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./pages/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./pages/task.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./pages/UI.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./pages/storage.js\");\n\n\n\n\n\nconst project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"new\");\nconst isVisible = \"is-visible\";\nconst overlay = document.querySelector(\".overlay\");\n\n// Submits the task a Project. NEEDS TO GET THE SELECTED PROJECT\nfunction submitTask() {\n  const submitTaskBtn = document.querySelector(\".submit-task\");\n  submitTaskBtn.addEventListener(\"click\", function (e) {\n    // const inProject = pickproject.value.some((el) => (el.title = title.value)); // Checks if task is in chosen project\n\n    // Fields must have a value\n    if (title.value === \"\" || description.value === \"\" || duedate.value === \"\")\n      return;\n\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      title.value,\n      description.value,\n      duedate.value,\n      taskpriority.value\n    );\n    project.addTask(newTask);\n    console.log(newTask);\n    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)(project);\n    document.querySelector(\".modal.is-visible\").classList.remove(isVisible);\n    overlay.classList.remove(\"active\");\n  });\n}\n\n// Creates new project\nfunction submitProject() {\n  const submitProjectBtn = document.querySelector(\".submit-project\");\n  submitProjectBtn.addEventListener(\"click\", function (e) {\n    if (projectname.value === \"\") return;\n\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectname.value);\n    _storage__WEBPACK_IMPORTED_MODULE_3__.listOfProjects.push(newProject);\n    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateProjectList)();\n    document.querySelector(\".modal.is-visible\").classList.remove(isVisible);\n    overlay.classList.remove(\"active\");\n    console.log(_storage__WEBPACK_IMPORTED_MODULE_3__.listOfProjects);\n  });\n}\n\nconst task = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntask.setTitle(\"Yo\");\ntask.setDescription(\"desc\");\ntask.setDueDate(\"10-15-15\");\ntask.setPriority(\"high\");\n\nconst task2 = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntask2.setTitle(\"Y234o\");\ntask2.setDescription(\"desc\");\ntask2.setDueDate(\"10-15-15\");\ntask2.setPriority(\"low\");\nconst anotherProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"msdfasdf\");\n_storage__WEBPACK_IMPORTED_MODULE_3__.listOfProjects.push(project, anotherProject);\n\nproject.addTask(task);\nproject.addTask(task2);\n\n// Initializes the app\nfunction initApp() {\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.openTaskModal)();\n\n  console.log(project);\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)(project);\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateProjectList)();\n  console.log(_storage__WEBPACK_IMPORTED_MODULE_3__.listOfProjects);\n}\n\n\n//# sourceURL=webpack://todo/./pages/handler.js?");

/***/ }),

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.tasks = [];\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  findTask(taskName) {\n    return this.tasks.some((task) => task.title === taskName);\n  }\n\n  deleteTask(taskName) {\n    this.tasks = this.tasks.filter((task) => task.name != taskName);\n  }\n\n  addTask(newTask) {\n    if (this.tasks.some((task) => task.title === newTask.title)) {\n      return;\n    } else this.tasks.push(newTask);\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/project.js?");

/***/ }),

/***/ "./pages/storage.js":
/*!**************************!*\
  !*** ./pages/storage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listOfProjects\": () => (/* binding */ listOfProjects)\n/* harmony export */ });\nconst listOfProjects = [];\n\n\n//# sourceURL=webpack://todo/./pages/storage.js?");

/***/ }),

/***/ "./pages/task.js":
/*!***********************!*\
  !*** ./pages/task.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate = \"no due date\", priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getDescription() {\n    return this.description;\n  }\n\n  setDescription(newDescription) {\n    this.description = newDescription;\n  }\n\n  getDueDate() {\n    return this.dueDate();\n  }\n\n  setDueDate(date) {\n    this.dueDate = date;\n  }\n\n  getPriority() {\n    return this.priority;\n  }\n\n  setPriority(setPriority) {\n    this.priority = setPriority;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/handler */ \"./pages/handler.js\");\n\n\n(0,_pages_handler__WEBPACK_IMPORTED_MODULE_0__.initApp)();\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./img/delete.png":
/*!************************!*\
  !*** ./img/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adc38f9229d4e1221b10.png\";\n\n//# sourceURL=webpack://todo/./img/delete.png?");

/***/ }),

/***/ "./img/edit.png":
/*!**********************!*\
  !*** ./img/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c6e964117a4a77cbbd2.png\";\n\n//# sourceURL=webpack://todo/./img/edit.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;