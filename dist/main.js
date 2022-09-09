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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDefaultOptions\": () => (/* binding */ getDefaultOptions),\n/* harmony export */   \"setDefaultOptions\": () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\n\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./pages/UI.js":
/*!*********************!*\
  !*** ./pages/UI.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openTaskModal\": () => (/* binding */ openTaskModal),\n/* harmony export */   \"populateList\": () => (/* binding */ populateList),\n/* harmony export */   \"populateProjectList\": () => (/* binding */ populateProjectList)\n/* harmony export */ });\n/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/edit.png */ \"./img/edit.png\");\n/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/delete.png */ \"./img/delete.png\");\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler */ \"./pages/handler.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./pages/storage.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ \"./pages/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ \"./pages/project.js\");\n\n\n\n\n\n\n\nconst newProject = new _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst listOfProjects = newProject.getProjects();\nconst overlay = document.querySelector(\".overlay\");\nconst isVisible = \"is-visible\";\nconst listBody = document.querySelector(\".list-body\");\nconst modal = document.querySelector(\".modal\");\nconst projectList = document.querySelector(\".project-list\");\nconst sideBarButtons = document.querySelectorAll(\".timeframe\");\n\nconst totalTasks = document.getElementById(\"total-count\");\nconst todayTasks = document.getElementById(\"today-count\");\nconst weekTasks = document.getElementById(\"week-count\");\nconst listTitle = document.getElementById(\"list-title\");\n\nlet curProject = listOfProjects[2]; //Stores the current project selected. Defaults at home\n\n// Test data\nconst project = new _project__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"new\");\nconst task = new _task__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\ntask.setTitle(\"Yo\");\ntask.setDescription(\"desc\");\ntask.setDueDate(\"2022-09-08\");\ntask.setPriority(\"high\");\n\nconst task2 = new _task__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\ntask2.setTitle(\"Y234o\");\ntask2.setDescription(\"desc\");\ntask2.setDueDate(\"2022-09-07\");\ntask2.setPriority(\"low\");\nconst anotherProject = new _project__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"msdfasdf\");\n\nanotherProject.addTask(task);\nproject.addTask(task2);\nnewProject.addProject(project);\nnewProject.addProject(anotherProject);\n// End test data\n\n// Opens the modal for creating a new task\nfunction openTaskModal() {\n  const newTask = document.querySelector(\".add-task\");\n  newTask.addEventListener(\"click\", function () {\n    newTaskModal();\n    modal.classList.add(isVisible);\n    overlay.classList.add(\"active\");\n  });\n}\n\n// Function for closing modal. Takes the close button of current modal as input\nfunction closeModal(el) {\n  el.addEventListener(\"click\", function () {\n    this.parentElement.parentElement.parentElement.classList.remove(isVisible);\n    overlay.classList.remove(\"active\");\n  });\n}\n\n// Function for opening the project modal\nfunction projectModal() {\n  modal.innerHTML = \"\";\n\n  const modalDialog = document.createElement(\"div\");\n  // modalDialog.className = \"modal\";\n  modalDialog.className = \"project-modal-dialog\";\n  modalDialog.innerHTML = `\n        <header class=\"modal-header\">\n          <p>New Project</p>\n          <button class=\"close-modal\" aria-label=\"close modal\" data-close>\n            X\n          </button>\n        </header>\n        <section>\n          <form class=\"modal-form\">\n            <div class=\"project-inputs\">\n              <input\n                type=\"text\"\n                placeholder=\"Project name\"\n                id=\"projectname\"\n                name=\"projectname\"\n                required\n              />\n            </div>\n            <div class=\"submit-btn\">\n              <button class=\"submit-project\" type=\"button\">Submit</button>\n            </div>\n          </form>\n        </section>\n      `;\n  modal.appendChild(modalDialog);\n  const closeProjectModal = document.querySelector(\"[data-close]\");\n  modal.classList.add(isVisible);\n  overlay.classList.add(\"active\");\n  (0,_handler__WEBPACK_IMPORTED_MODULE_2__.submitProject)(newProject);\n  closeModal(closeProjectModal);\n}\n\n// Function for creating and populating the task modal\nfunction newTaskModal() {\n  modal.innerHTML = \"\"; // Cleans up modal for every time it's called\n\n  const modalDialog = document.createElement(\"div\");\n  modalDialog.className = \"modal-dialog\";\n  const header = document.createElement(\"header\");\n  header.className = \"modal-header\";\n  header.innerHTML = `\n          <p>New Task</p>\n          <button class=\"close-modal\" aria-label=\"close modal\" data-close>\n            X\n          </button>`;\n  modalDialog.appendChild(header);\n\n  const section = document.createElement(\"section\");\n  section.className = \"modal-content\";\n  const form = document.createElement(\"form\");\n  form.className = \"task-form\";\n  const leftSide = document.createElement(\"div\");\n  leftSide.className = \"left-side\";\n  leftSide.innerHTML = `\n              <input\n                class=\"inputs\"\n                placeholder=\"Task name\"\n                type=\"text\"\n                id=\"title\"\n                name=\"title\"\n                required\n              />\n              <textarea\n                type=\"text\"\n                placeholder=\"Description\"\n                id=\"description\"\n                name=\"description\"\n                cols=\"30\"\n                rows=\"4\"\n                required\n              ></textarea>`;\n\n  form.appendChild(leftSide);\n  const rightSide = document.createElement(\"div\");\n  rightSide.className = \"right-side\";\n\n  const dueDateDiv = document.createElement(\"div\");\n  dueDateDiv.className = \"form-div\";\n  dueDateDiv.innerHTML = `\n                <label for=\"duedate\">Due Date</label>\n                <input type=\"date\" class=\"inputs\" name=\"duedate\" id=\"duedate\" />`;\n\n  const priDiv = document.createElement(\"div\");\n  priDiv.className = \"form-div\";\n  priDiv.innerHTML = `<label for=\"taskpriority\">Priority</label>\n                <select name=\"taskpriority\" id=\"taskpriority\">\n                  <option class=\"lowPri\" value=\"low\">Low</option>\n                  <option value=\"medium\" class=\"mediumPri\">Medium</option>\n                  <option value=\"high\" class=\"highPri\">High</option>\n                </select>`;\n\n  const projectDiv = document.createElement(\"div\");\n  projectDiv.className = \"form-div\";\n  projectDiv.innerHTML = `<label for=\"pickproject\">Project</label>`;\n\n  const pickProject = document.createElement(\"select\");\n  pickProject.name = \"pickproject\";\n  pickProject.id = \"pickproject\";\n  for (let i = 2; i < listOfProjects.length; i++) {\n    const option = document.createElement(\"option\");\n    option.value = listOfProjects[i].title;\n    option.textContent = listOfProjects[i].title;\n    pickProject.appendChild(option);\n  }\n\n  projectDiv.appendChild(pickProject);\n\n  rightSide.appendChild(dueDateDiv);\n  rightSide.appendChild(priDiv);\n  rightSide.appendChild(projectDiv);\n  form.appendChild(rightSide);\n\n  const button = document.createElement(\"div\");\n  button.className = \"submit-btn\";\n  button.innerHTML = `<button class=\"submit-task\" type=\"button\">Submit</button>`;\n  form.appendChild(button);\n  section.appendChild(form);\n  modalDialog.appendChild(section);\n\n  modal.appendChild(modalDialog); // Appends the newly created modal to modal tag in index.html\n  const closeTaskModal = document.querySelector(\"[data-close]\"); //Fetches the clsoe button from modal inenrHTML\n  (0,_handler__WEBPACK_IMPORTED_MODULE_2__.submitTask)(listOfProjects, pickProject); // Submits task to project.\n  closeModal(closeTaskModal); // Closes the modal\n}\n\n// Populates the list view with tasks from the selected project\nfunction populateList(project = curProject) {\n  listBody.innerHTML = \"\";\n  updateDefaultTasks();\n  numberOfTasksSideBar();\n\n  if (project.tasks.length === 0) return;\n\n  for (let i = 0; i < project.tasks.length; i++) {\n    const listCard = document.createElement(\"div\");\n    listCard.className = \"list-card\";\n    const checkBoxContainer = document.createElement(\"div\");\n    const checkbox = document.createElement(\"input\");\n    checkbox.className = \"checkbox\";\n    checkbox.type = \"checkbox\";\n    checkbox.id = \"mark-task\";\n    checkbox.for = \"task-name\";\n\n    const checkboxLabel = document.createElement(\"label\");\n    checkboxLabel.className = \"checkbox-name\";\n    checkboxLabel.for = \"task-name\";\n    checkBoxContainer.appendChild(checkbox);\n\n    const listItem = document.createElement(\"div\");\n    listItem.className = \"list-items\";\n    const openTaskBtn = document.createElement(\"button\");\n    openTaskBtn.className = \"open-task\";\n    openTaskBtn.textContent = \"Open\";\n    const dueDate = document.createElement(\"div\");\n    dueDate.className = \"task-date\";\n    const editImg = document.createElement(\"img\");\n    editImg.id = \"edit-task\";\n    editImg.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_0__;\n    const deleteImg = document.createElement(\"img\");\n    deleteImg.id = \"delete-task\";\n    deleteImg.src = _img_delete_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    priorityColor(project.tasks[i].priority, listCard);\n\n    checkboxLabel.textContent = project.tasks[i].title;\n    dueDate.textContent = project.tasks[i].getFormattedDate();\n    checkBoxContainer.appendChild(checkboxLabel);\n\n    listItem.appendChild(openTaskBtn);\n    listItem.appendChild(dueDate);\n    listItem.appendChild(editImg);\n    listItem.appendChild(deleteImg);\n\n    listCard.appendChild(checkBoxContainer);\n    listCard.appendChild(listItem);\n\n    listBody.appendChild(listCard);\n    editTaskModal(editImg, project.tasks[i]);\n    (0,_handler__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(deleteImg, listOfProjects, project.tasks[i]);\n  }\n}\n\n// Edits the task\nfunction editTaskModal(editImg, task) {\n  editImg.addEventListener(\"click\", () => {\n    modal.innerHTML = \"\"; // Cleans up modal for every time it's called\n\n    const modalDialog = document.createElement(\"div\");\n    modalDialog.className = \"modal-dialog\";\n    const header = document.createElement(\"header\");\n    header.className = \"modal-header\";\n    header.innerHTML = `\n          <p>${task.title}</p>\n          <button class=\"close-modal\" aria-label=\"close modal\" data-close>\n            X\n          </button>`;\n    modalDialog.appendChild(header);\n\n    const section = document.createElement(\"section\");\n    section.className = \"modal-content\";\n    const form = document.createElement(\"form\");\n    form.className = \"task-form\";\n    const leftSide = document.createElement(\"div\");\n    leftSide.className = \"left-side\";\n    leftSide.innerHTML = `\n              <input\n                class=\"inputs\"\n                value=\"${task.title}\"\n                type=\"text\"\n                id=\"title\"\n                name=\"title\"\n                required\n              />\n              <textarea\n                type=\"text\"\n                id=\"description\"\n                name=\"description\"\n                cols=\"30\"\n                rows=\"4\"\n                required\n              >${task.description}</textarea>`;\n\n    form.appendChild(leftSide);\n    const rightSide = document.createElement(\"div\");\n    rightSide.className = \"right-side\";\n\n    const dueDateDiv = document.createElement(\"div\");\n    dueDateDiv.className = \"form-div\";\n    dueDateDiv.innerHTML = `\n                <label for=\"duedate\">Due Date</label>\n                <input type=\"date\" class=\"inputs\" name=\"duedate\" id=\"duedate\" value=\"${task.dueDate}\"/>`;\n\n    const priDiv = document.createElement(\"div\");\n    priDiv.className = \"form-div\";\n\n    priDiv.innerHTML = `<label for=\"taskpriority\">Priority</label>\n                <select name=\"taskpriority\" id=\"taskpriority\">\n                  <option class=\"lowPri\" value=\"low\" ${\n                    task.priority === \"low\" ? \"selected\" : \"\"\n                  }>Low</option>\n                  <option value=\"medium\" class=\"mediumPri ${\n                    task.priority === \"medium\" ? \"selected\" : \"\"\n                  }\">Medium</option>\n                  <option value=\"high\" class=\"highPri\" ${\n                    task.priority === \"high\" ? \"selected\" : \"\"\n                  }>High</option>\n                </select>`;\n\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.className = \"form-div\";\n    projectDiv.innerHTML = `<label for=\"pickproject\">Project</label>`;\n\n    const pickProject = document.createElement(\"select\");\n    pickProject.name = \"pickproject\";\n    pickProject.id = \"pickproject\";\n    for (let i = 2; i < listOfProjects.length; i++) {\n      const option = document.createElement(\"option\");\n      option.value = listOfProjects[i].title;\n      option.textContent = listOfProjects[i].title;\n\n      if (\n        listOfProjects[i].findTask(task.title) &&\n        listOfProjects[i].title != \"Undefined\"\n      ) {\n        option.selected = \"true\";\n      }\n\n      pickProject.appendChild(option);\n    }\n\n    projectDiv.appendChild(pickProject);\n\n    rightSide.appendChild(dueDateDiv);\n    rightSide.appendChild(priDiv);\n    rightSide.appendChild(projectDiv);\n    form.appendChild(rightSide);\n\n    const button = document.createElement(\"div\");\n    button.innerHTML = `<button class=\"update-task\" type=\"button\">Update task</button>`;\n    form.appendChild(button);\n    section.appendChild(form);\n    modalDialog.appendChild(section);\n\n    modal.appendChild(modalDialog); // Appends the newly created modal to modal tag in index.html\n    const closeTaskModal = document.querySelector(\"[data-close]\"); //Fetches the clsoe button from modal inenrHTMLmodal.classList.add(isVisible);\n    modal.classList.add(isVisible);\n    overlay.classList.add(\"active\");\n    (0,_handler__WEBPACK_IMPORTED_MODULE_2__.editTask)(pickProject, task, listOfProjects);\n\n    closeModal(closeTaskModal); // Closes the modal\n  });\n}\n\n// Lists the projects created\nfunction populateProjectList() {\n  projectList.innerHTML = \"\";\n  const newProjectBtn = document.createElement(\"button\");\n  newProjectBtn.className = \"new-project\";\n  newProjectBtn.textContent = \"Add Project\";\n  newProjectBtn.onclick = projectModal;\n  const btnLi = document.createElement(\"li\");\n  btnLi.appendChild(newProjectBtn);\n\n  for (let i = 3; i < listOfProjects.length; i++) {\n    const projecTitle = document.createElement(\"li\");\n    projecTitle.className = \"project-title\";\n    projecTitle.textContent = listOfProjects[i].title;\n    projectList.appendChild(projecTitle);\n  }\n\n  projectList.appendChild(btnLi);\n  selectProjectSideBar();\n}\n\nfunction selectProjectSideBar() {\n  const projectButtons = document.querySelectorAll(\".project-title\");\n\n  projectButtons.forEach((btn) => {\n    btn.addEventListener(\"click\", function (e) {\n      for (let i = 3; i < listOfProjects.length; i++) {\n        if (listOfProjects[i].title === e.target.textContent) {\n          populateList(listOfProjects[i]);\n          listTitle.textContent = listOfProjects[i].title;\n          curProject = listOfProjects[i];\n        }\n      }\n    });\n  });\n}\n\n// Function for giving the tasks the correct priority color\nfunction priorityColor(priority, div) {\n  if (priority === \"low\") {\n    div.classList.add(\"low-pri\");\n  } else if (priority === \"medium\") {\n    div.classList.add(\"medium-pri\");\n  } else if (priority === \"high\") {\n    div.classList.add(\"high-pri\");\n  }\n}\n\n// Shows a number after Home, Today, This week with number of tasks\nfunction numberOfTasksSideBar() {\n  totalTasks.textContent = listOfProjects[2].tasks.length;\n  todayTasks.textContent = listOfProjects[2].getTasksToday().length;\n  weekTasks.textContent = listOfProjects[2].getTasksWeek().length;\n}\n\nfunction updateDefaultTasks() {\n  // Adds all the tasks to the \"home\" default project\n  function addAllTasksToHome() {\n    for (let i = 3; i < listOfProjects.length; i++) {\n      for (let j = 0; j < listOfProjects[i].tasks.length; j++) {\n        listOfProjects[2].addTask(listOfProjects[i].tasks[j]);\n      }\n    }\n  }\n\n  // Populates the today object with todays tasks\n  function tasksToday() {\n    for (let i = 0; i < listOfProjects[2].getTasksToday().length; i++) {\n      listOfProjects[0].addTask(listOfProjects[2].getTasksToday()[i]);\n    }\n  }\n\n  // Populates the week object with this weeks tasks\n  function tasksWeek() {\n    for (let i = 0; i < listOfProjects[2].getTasksWeek().length; i++) {\n      listOfProjects[1].addTask(listOfProjects[2].getTasksWeek()[i]);\n    }\n  }\n  addAllTasksToHome();\n  tasksToday();\n  tasksWeek();\n}\n\n// buttons for selecting Home, Today or This week\nsideBarButtons.forEach((btn) => {\n  btn.addEventListener(\"click\", function (e) {\n    if (e.target.textContent === \"Today\") {\n      curProject = listOfProjects[0];\n      listTitle.textContent = \"Today\";\n      populateList(curProject);\n    }\n\n    if (e.target.textContent === \"Home\") {\n      curProject = listOfProjects[2];\n      listTitle.textContent = \"Home\";\n      populateList(curProject);\n    }\n\n    if (e.target.textContent === \"This Week\") {\n      curProject = listOfProjects[1];\n      listTitle.textContent = \"This Week\";\n      populateList(curProject);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://todo/./pages/UI.js?");

/***/ }),

/***/ "./pages/handler.js":
/*!**************************!*\
  !*** ./pages/handler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"initApp\": () => (/* binding */ initApp),\n/* harmony export */   \"submitProject\": () => (/* binding */ submitProject),\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./pages/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./pages/task.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./pages/UI.js\");\n\n\n\n\nconst isVisible = \"is-visible\";\nconst overlay = document.querySelector(\".overlay\");\n\nfunction submitTask(listOfProjects, project) {\n  const submitTaskBtn = document.querySelector(\".submit-task\");\n  submitTaskBtn.addEventListener(\"click\", function (e) {\n    // const inProject = pickproject.value.some((el) => (el.title = title.value)); // Checks if task is in chosen project\n\n    // Fields must have a value\n    if (title.value === \"\" || description.value === \"\" || duedate.value === \"\")\n      return;\n\n    const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      title.value,\n      description.value,\n      duedate.value,\n      taskpriority.value\n    );\n    // project.addTask(newTask);\n    const chosenProj = project.value; //The name value of the chosen project\n\n    getProjectFromName(listOfProjects, chosenProj).addTask(newTask); // Adds the task to the correct project\n    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)(getProjectFromName(listOfProjects, chosenProj));\n    document.querySelector(\".modal.is-visible\").classList.remove(isVisible);\n    overlay.classList.remove(\"active\");\n  });\n}\n\n// Gets a project from project name\nfunction getProjectFromName(project, title) {\n  for (let i = 0; i < project.length; i++) {\n    if (project[i].title === title) {\n      return project[i];\n    }\n  }\n}\n\n// Creates new project\nfunction submitProject(listOfProjects) {\n  const submitProjectBtn = document.querySelector(\".submit-project\");\n  submitProjectBtn.addEventListener(\"click\", function (e) {\n    if (projectname.value === \"\") return;\n\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectname.value);\n    listOfProjects.addProject(newProject);\n    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateProjectList)();\n    document.querySelector(\".modal.is-visible\").classList.remove(isVisible);\n    overlay.classList.remove(\"active\");\n  });\n}\n\n// Deletes a task when the trash can is clicked\nfunction deleteTask(div, project, task) {\n  div.addEventListener(\"click\", function (e) {\n    for (let i = 0; i < project.length; i++) {\n      for (let j = 0; j < project[i].tasks.length; j++) {\n        if (project[i].tasks[j].title === task.title) {\n          project[i].deleteTask(task);\n        }\n      }\n    }\n\n    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)();\n  });\n}\n\n// Edits the task\nfunction editTask(project, task, listOfProjects) {\n  const button = document.querySelector(\".update-task\");\n  button.addEventListener(\"click\", () => {\n    task.setTitle(title.value);\n    task.setDescription(description.value);\n    task.setDueDate(duedate.value);\n    task.setPriority(taskpriority.value);\n\n    const chosenProj = getProjectFromName(listOfProjects, project.value);\n\n    swapProjects(chosenProj, task, listOfProjects);\n\n    document.querySelector(\".modal.is-visible\").classList.remove(isVisible);\n    overlay.classList.remove(\"active\");\n  });\n}\n\n// Function for moving a task to another project when edited.\nfunction swapProjects(project, task, listOfProjects) {\n  if (project.findTask(task.title) === false) {\n    for (let i = 0; i < listOfProjects.length; i++) {\n      for (let j = 0; j < listOfProjects[i].tasks.length; j++) {\n        if (listOfProjects[i].tasks[j].title === task.title) {\n          listOfProjects[i].deleteTask(task);\n          project.addTask(task);\n        }\n      }\n    }\n    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)();\n  } else {\n    (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)();\n  }\n}\n\n// Initializes the app\nfunction initApp() {\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.openTaskModal)();\n\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateList)();\n  (0,_UI__WEBPACK_IMPORTED_MODULE_2__.populateProjectList)();\n}\n\n\n//# sourceURL=webpack://todo/./pages/handler.js?");

/***/ }),

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n\n\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.tasks = [];\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  findTask(taskName) {\n    return this.tasks.some((task) => task.title === taskName);\n  }\n\n  deleteTask(taskName) {\n    this.tasks = this.tasks.filter((task) => task != taskName);\n  }\n\n  addTask(newTask) {\n    if (this.tasks.some((task) => task.title === newTask.title)) {\n      return;\n    } else this.tasks.push(newTask);\n  }\n\n  getTasksToday() {\n    return this.tasks.filter((task) => {\n      const date = new Date(task.getFormattedDate());\n      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date);\n    });\n  }\n\n  getTasksWeek() {\n    return this.tasks.filter((task) => {\n      const date = new Date(task.getFormattedDate());\n      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(date);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/project.js?");

/***/ }),

/***/ "./pages/storage.js":
/*!**************************!*\
  !*** ./pages/storage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ListOfProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./pages/project.js\");\n\n\n// Stores the projects in a list\nclass ListOfProjects {\n  constructor() {\n    this.projects = [];\n    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Today\"));\n    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Week\"));\n    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Undefined\"));\n  }\n\n  getProjects() {\n    return this.projects;\n  }\n\n  addProject(newProject) {\n    this.projects.push(newProject);\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/storage.js?");

/***/ }),

/***/ "./pages/task.js":
/*!***********************!*\
  !*** ./pages/task.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate = \"no due date\", priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  getTitle() {\n    return this.title;\n  }\n\n  setTitle(newTitle) {\n    this.title = newTitle;\n  }\n\n  getDescription() {\n    return this.description;\n  }\n\n  setDescription(newDescription) {\n    this.description = newDescription;\n  }\n\n  getDueDate() {\n    return this.dueDate();\n  }\n\n  setDueDate(date) {\n    this.dueDate = date;\n  }\n\n  getPriority() {\n    return this.priority;\n  }\n\n  setPriority(setPriority) {\n    this.priority = setPriority;\n  }\n\n  getFormattedDate() {\n    const day = this.dueDate.split(\"-\")[2];\n    const month = this.dueDate.split(\"-\")[1];\n    const year = this.dueDate.split(\"-\")[0];\n\n    return `${month}/${day}/${year}`;\n  }\n}\n\n\n//# sourceURL=webpack://todo/./pages/task.js?");

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