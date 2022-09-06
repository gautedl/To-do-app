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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openProjectModal\": () => (/* binding */ openProjectModal),\n/* harmony export */   \"openTaskModal\": () => (/* binding */ openTaskModal),\n/* harmony export */   \"populateList\": () => (/* binding */ populateList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./pages/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./pages/task.js\");\n/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/edit.png */ \"./img/edit.png\");\n/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/delete.png */ \"./img/delete.png\");\n\n\n\n\n\nconst overlay = document.querySelector(\".overlay\");\nconst closeEls = document.querySelectorAll(\"[data-close]\");\nconst isVisible = \"is-visible\";\nconst listBody = document.querySelector(\".list-body\");\n\nfunction openTaskModal() {\n  const modal = document.querySelector(\".modal\");\n  const newTask = document.querySelector(\".add-task\");\n  newTask.addEventListener(\"click\", function () {\n    modal.classList.add(isVisible);\n    overlay.classList.add(\"active\");\n  });\n}\n\nfunction openProjectModal() {\n  const modal = document.querySelector(\".project-modal\");\n  const newProject = document.querySelector(\".new-project\");\n  newProject.addEventListener(\"click\", function () {\n    modal.classList.add(isVisible);\n    overlay.classList.add(\"active\");\n  });\n}\n\nfunction closeModal() {\n  for (const el of closeEls) {\n    el.addEventListener(\"click\", function () {\n      this.parentElement.parentElement.parentElement.classList.remove(\n        isVisible\n      );\n      overlay.classList.remove(\"active\");\n    });\n  }\n}\n\nfunction populateList(project) {\n  listBody.innerHTML = \"\";\n\n  for (let i = 0; i < project.tasks.length; i++) {\n    const listCard = document.createElement(\"div\");\n    listCard.className = \"list-card\";\n    const checkBoxContainer = document.createElement(\"div\");\n    const checkbox = document.createElement(\"input\");\n    checkbox.className = \"checkbox\";\n    checkbox.type = \"checkbox\";\n    checkbox.id = \"mark-task\";\n    checkbox.for = \"task-name\";\n\n    const checkboxLabel = document.createElement(\"label\");\n    checkboxLabel.className = \"checkbox-name\";\n    checkboxLabel.for = \"task-name\";\n    checkBoxContainer.appendChild(checkbox);\n\n    const listItem = document.createElement(\"div\");\n    listItem.className = \"list-items\";\n    const openTaskBtn = document.createElement(\"button\");\n    openTaskBtn.className = \"open-task\";\n    openTaskBtn.textContent = \"Open\";\n    const dueDate = document.createElement(\"div\");\n    dueDate.className = \"task-date\";\n    const editImg = document.createElement(\"img\");\n    editImg.id = \"edit-task\";\n    editImg.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_2__;\n    const deleteImg = document.createElement(\"img\");\n    deleteImg.id = \"delete-task\";\n    deleteImg.src = _img_delete_png__WEBPACK_IMPORTED_MODULE_3__;\n\n    priorityColor(project.tasks[i].priority, listCard);\n\n    checkboxLabel.textContent = project.tasks[i].title;\n    dueDate.textContent = project.tasks[i].dueDate;\n    checkBoxContainer.appendChild(checkboxLabel);\n\n    listItem.appendChild(openTaskBtn);\n    listItem.appendChild(dueDate);\n    listItem.appendChild(editImg);\n    listItem.appendChild(deleteImg);\n\n    listCard.appendChild(checkBoxContainer);\n    listCard.appendChild(listItem);\n\n    listBody.appendChild(listCard);\n\n    console.log(listCard);\n  }\n\n  function priorityColor(priority, div) {\n    if (priority === \"low\") {\n      div.classList.add(\"low-pri\");\n    } else if (priority === \"medium\") {\n      div.classList.add(\"medium-pri\");\n    } else if (priority === \"high\") {\n      div.classList.add(\"high-pri\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/UI.js?");

/***/ }),

/***/ "./pages/handler.js":
/*!**************************!*\
  !*** ./pages/handler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitProject\": () => (/* binding */ submitProject),\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./pages/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./pages/task.js\");\n\n\n\nfunction submitTask() {\n  const submitTaskBtn = document.querySelector(\".submit-task\");\n  submitTaskBtn.addEventListener(\"click\", function (e) {\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      title.value,\n      description.value,\n      duedate.value,\n      taskpriority.value\n    );\n    console.log(newTask);\n  });\n}\n\nfunction submitProject() {\n  const submitProjectBtn = document.querySelector(\".submit-project\");\n  submitProjectBtn.addEventListener(\"click\", function (e) {\n    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectname.value);\n    console.log(newProject);\n  });\n}\n\n\n//# sourceURL=webpack://todo/./pages/handler.js?");

/***/ }),

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.tasks = [];\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  findTask(taskName) {\n    return this.tasks.some((task) => task.title === taskName);\n  }\n\n  deleteTask(taskName) {\n    this.tasks = this.tasks.filter((task) => task.name != taskName);\n  }\n\n  addTask(newTask) {\n    if (this.tasks.some((task) => task.title === newTask.title)) {\n      return;\n    } else this.tasks.push(newTask);\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/task */ \"./pages/task.js\");\n/* harmony import */ var _pages_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/project */ \"./pages/project.js\");\n/* harmony import */ var _pages_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/UI */ \"./pages/UI.js\");\n/* harmony import */ var _pages_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/handler */ \"./pages/handler.js\");\n\n\n\n\n\n(0,_pages_UI__WEBPACK_IMPORTED_MODULE_2__.openTaskModal)();\n(0,_pages_UI__WEBPACK_IMPORTED_MODULE_2__.openProjectModal)();\n(0,_pages_UI__WEBPACK_IMPORTED_MODULE_2__.closeModal)();\n// submitTask();\nconst task = new _pages_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntask.setTitle(\"Yo\");\ntask.setDescription(\"desc\");\ntask.setDueDate(\"10-15-15\");\ntask.setPriority(\"high\");\n\nconst task2 = new _pages_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntask2.setTitle(\"Y234o\");\ntask2.setDescription(\"desc\");\ntask2.setDueDate(\"10-15-15\");\ntask2.setPriority(\"low\");\n\nconst project = new _pages_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"new\");\nproject.addTask(task);\nproject.addTask(task2);\n\nconsole.log(project);\n\n(0,_pages_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)(project);\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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