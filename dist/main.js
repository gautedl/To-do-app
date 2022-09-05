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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openProjectModal\": () => (/* binding */ openProjectModal),\n/* harmony export */   \"openTaskModal\": () => (/* binding */ openTaskModal)\n/* harmony export */ });\nconst overlay = document.querySelector(\".overlay\");\nconst closeEls = document.querySelectorAll(\"[data-close]\");\nconst isVisible = \"is-visible\";\n\nfunction openTaskModal() {\n  const modal = document.querySelector(\".modal\");\n  const newTask = document.querySelector(\".add-task\");\n  newTask.addEventListener(\"click\", function () {\n    modal.classList.add(isVisible);\n    overlay.classList.add(\"active\");\n  });\n}\n\nfunction openProjectModal() {\n  const modal = document.querySelector(\".project-modal\");\n  const newProject = document.querySelector(\".new-project\");\n  newProject.addEventListener(\"click\", function () {\n    modal.classList.add(isVisible);\n    overlay.classList.add(\"active\");\n  });\n}\n\nfunction closeModal() {\n  for (const el of closeEls) {\n    el.addEventListener(\"click\", function () {\n      this.parentElement.parentElement.parentElement.classList.remove(\n        isVisible\n      );\n      overlay.classList.remove(\"active\");\n    });\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/UI.js?");

/***/ }),

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title, description) {\n    this.title = title;\n    this.description = description;\n    this.tasks = [];\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getDescription() {\n    return this.description;\n  }\n\n  setDescription(newDescription) {\n    this.description = newDescription;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  findTask(taskName) {\n    return this.tasks.some((task) => task.name === taskName);\n  }\n\n  deleteTask(taskName) {\n    this.tasks = this.tasks.filter((task) => task.name != taskName);\n  }\n\n  addTask(newTask) {\n    if (this.tasks.some((task) => task.name === taskName.name)) {\n      return;\n    } else this.tasks.push(newTask);\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/task */ \"./pages/task.js\");\n/* harmony import */ var _pages_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/project */ \"./pages/project.js\");\n/* harmony import */ var _pages_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/UI */ \"./pages/UI.js\");\n\n\n\n\n(0,_pages_UI__WEBPACK_IMPORTED_MODULE_2__.openTaskModal)();\n(0,_pages_UI__WEBPACK_IMPORTED_MODULE_2__.openProjectModal)();\n(0,_pages_UI__WEBPACK_IMPORTED_MODULE_2__.closeModal)();\nconst task = new _pages_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntask.setTitle(\"Yo\");\ntask.setDescription(\"desc\");\ntask.setDueDate(\"10-15-15\");\ntask.setPriority(\"high\");\n\nconst project = new _pages_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"new\", \"project\");\nproject.addTask(task);\n\nconsole.log(project);\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;