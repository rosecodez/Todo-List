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

/***/ "./src/AppLogic/CreateToDo.js":
/*!************************************!*\
  !*** ./src/AppLogic/CreateToDo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: () => (/* binding */ createItem),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\n/* harmony import */ var _DeleteToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteToDo.js */ \"./src/AppLogic/DeleteToDo.js\");\n/* harmony import */ var _EditToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditToDo.js */ \"./src/AppLogic/EditToDo.js\");\n/* harmony import */ var _ExpandToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandToDo.js */ \"./src/AppLogic/ExpandToDo.js\");\n/* harmony import */ var _SetComplete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetComplete.js */ \"./src/AppLogic/SetComplete.js\");\n\n\n\n\n\nfunction createTask() {\n  var task = document.createElement(\"div\");\n  return task;\n}\nvar task = createTask();\n\nfunction createItem(num) {\n  var tasks = document.getElementById(\"tasks\");\n  var task = createTask();\n  task.setAttribute(\"id\", \"task-\" + num);\n  task.setAttribute(\"class\", \"tasks\");\n  tasks.appendChild(task);\n  var deleteBtn = (0,_DeleteToDo_js__WEBPACK_IMPORTED_MODULE_0__.createDeleteBtn)();\n  task.appendChild(deleteBtn);\n  deleteBtn.style.width = \"60px\";\n  var setCompleteBtn = (0,_SetComplete_js__WEBPACK_IMPORTED_MODULE_3__.setComplete)();\n  task.appendChild(setCompleteBtn);\n  setCompleteBtn.style.width = \"34px\";\n  var editItemBtn = (0,_EditToDo_js__WEBPACK_IMPORTED_MODULE_1__.editToDo)();\n  task.appendChild(editItemBtn);\n  editItemBtn.style.width = \"60px\";\n  var bottom = document.createElement(\"div\");\n  bottom.setAttribute(\"id\", \"bottom-\" + num);\n  task.appendChild(bottom);\n  var top = document.createElement(\"div\");\n  top.setAttribute(\"id\", \"top-\" + num);\n  task.appendChild(top);\n  top.style.backgroundColor = \"#e11d4800\";\n  top.style.display = \"flex\";\n  top.style.flexDirection = \"column\";\n  top.style.alignItems = \"flex-start\";\n  bottom.style.backgroundColor = \"#e11d4800\";\n  var titleText = document.createElement(\"div\");\n  top.appendChild(titleText);\n  titleText.setAttribute(\"id\", \"titleText-\" + num);\n  var dueDateText = document.createElement(\"div\");\n  top.appendChild(dueDateText);\n  dueDateText.setAttribute(\"id\", \"dueDateText-\" + num);\n  var descriptionText = document.createElement(\"div\");\n  bottom.appendChild(descriptionText);\n  descriptionText.setAttribute(\"id\", \"descriptionText-\" + num);\n  var priorityText = document.createElement(\"div\");\n  bottom.appendChild(priorityText);\n  priorityText.setAttribute(\"id\", \"priorityText-\" + num);\n  var notesText = document.createElement(\"div\");\n  bottom.appendChild(notesText);\n  notesText.setAttribute(\"id\", \"notesText-\" + num);\n  var confirmEditBtn = (0,_EditToDo_js__WEBPACK_IMPORTED_MODULE_1__.confirmEditToDo)();\n  var buttons = document.getElementById(\"buttons\");\n  buttons.appendChild(confirmEditBtn);\n  var expandBtn = (0,_ExpandToDo_js__WEBPACK_IMPORTED_MODULE_2__.createExpandBtn)();\n  task.appendChild(expandBtn);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/CreateToDo.js?");

/***/ }),

/***/ "./src/AppLogic/DeleteToDo.js":
/*!************************************!*\
  !*** ./src/AppLogic/DeleteToDo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDeleteBtn: () => (/* binding */ createDeleteBtn)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nfunction createDeleteBtn() {\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.textContent = \"Delete\";\n  deleteBtn.setAttribute(\"id\", \"deleteBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count);\n  deleteBtn.style.padding = \"6px 8px\";\n  deleteBtn.style.backgroundColor = \"white\";\n  deleteBtn.addEventListener(\"click\", function () {\n    deleteBtn.parentElement.remove();\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.savedItems.splice(index, 1);\n  });\n  return deleteBtn;\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/DeleteToDo.js?");

/***/ }),

/***/ "./src/AppLogic/EditToDo.js":
/*!**********************************!*\
  !*** ./src/AppLogic/EditToDo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   confirmEditToDo: () => (/* binding */ confirmEditToDo),\n/* harmony export */   editToDo: () => (/* binding */ editToDo)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _remainingTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remainingTime.js */ \"./src/AppLogic/remainingTime.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nfunction editToDo() {\n  var editItemBtn = document.createElement(\"button\");\n  editItemBtn.textContent = \"Edit\";\n  editItemBtn.setAttribute(\"id\", \"editItemBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  editItemBtn.style.padding = \"6px 8px\";\n  editItemBtn.style.backgroundColor = \"white\";\n  editItemBtn.querySelector(\"#editItemBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  editItemBtn.addEventListener(\"click\", function () {\n    dialog.showModal();\n    var confirm = document.getElementById(\"confirm\");\n    confirm.style.display = \"none\";\n    var confirmEditBtn = document.querySelector(\"#confirmEditBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n    confirmEditBtn.style.display = \"flex\";\n  });\n  return editItemBtn;\n}\nfunction confirmEditToDo() {\n  var confirmEditBtn = document.createElement(\"button\");\n  confirmEditBtn.setAttribute(\"id\", \"confirmEditBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  confirmEditBtn.textContent = \"confirmEditBtn\";\n  confirmEditBtn.style.padding = \"6px 8px\";\n  confirmEditBtn.style.display = \"none\";\n  confirmEditBtn.style.alignItems = \"center\";\n  var titleText = document.querySelector(\"#titleText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  var descriptionText = document.querySelector(\"#descriptionText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  var dueDateText = document.querySelector(\"#dueDateText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  var priorityText = document.querySelector(\"#priorityText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  var notesText = document.querySelector(\"#notesText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  confirmEditBtn.querySelector(\"#confirmEditBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  confirmEditBtn.addEventListener(\"click\", function () {\n    titleText.textContent = \"⁍Title: \" + title.value;\n    dueDateText.textContent = \"dueDate: \" + dueDate.value;\n    if (description.value === \"\") {\n      descriptionText.textContent = \"Description: none\";\n    } else {\n      descriptionText.textContent = \"Description: \" + description.value;\n    }\n    if (priority.value === \"\") {\n      priorityText.textContent = \"Description: none\";\n    } else {\n      priorityText.textContent = \"Description: \" + priority.value;\n    }\n    if (notes.value === \"\") {\n      notesText.textContent = \"Notes: none\";\n    } else {\n      notesText.textContent = \"Notes: \" + notes.value;\n    }\n    var Item = /*#__PURE__*/_createClass(function Item(title, description, dueDate, priority, notes) {\n      _classCallCheck(this, Item);\n      this.title = title;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority;\n      this.notes = notes;\n    });\n    var newItem = new Item(title.value, description.value, dueDate.value, priority.value, notes.value);\n    dialog.close();\n    var confirmBtn = document.getElementById(\"confirm\");\n    confirmBtn.style.display = \"none\";\n    (0,_remainingTime_js__WEBPACK_IMPORTED_MODULE_1__.remainingTime)();\n  });\n  var addTaskBtn = document.getElementById(\"add-task\");\n  addTaskBtn.addEventListener(\"click\", function () {\n    confirmEditBtn.style.display = \"none\";\n  });\n  return confirmEditBtn;\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/EditToDo.js?");

/***/ }),

/***/ "./src/AppLogic/ExpandToDo.js":
/*!************************************!*\
  !*** ./src/AppLogic/ExpandToDo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createExpandBtn: () => (/* binding */ createExpandBtn)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\nfunction createExpandBtn() {\n  var expandBtn = document.createElement(\"button\");\n  expandBtn.setAttribute(\"id\", \"expandBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  expandBtn.style.padding = \"6px 8px\";\n  expandBtn.style.backgroundColor = \"white\";\n  expandBtn.style.alignSelf = \"flex-end\";\n  expandBtn.textContent = \"↑\";\n  var expandCount = 0;\n  var descriptionText = document.querySelector(\"#descriptionText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  var priorityText = document.querySelector(\"#priorityText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  var notesText = document.querySelector(\"#notesText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  expandBtn.addEventListener(\"click\", function () {\n    expandCount++;\n    if (expandCount % 2 == 0) {\n      expandBtn.textContent = \"↑\";\n      descriptionText.style.display = \"none\";\n      priorityText.style.display = \"none\";\n      notesText.style.display = \"none\";\n    } else {\n      expandBtn.textContent = \"↓\";\n      descriptionText.style.display = \"flex\";\n      priorityText.style.display = \"flex\";\n      notesText.style.display = \"flex\";\n    }\n  });\n  return expandBtn;\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/ExpandToDo.js?");

/***/ }),

/***/ "./src/AppLogic/SetComplete.js":
/*!*************************************!*\
  !*** ./src/AppLogic/SetComplete.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setComplete: () => (/* binding */ setComplete)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _Icons_check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/check.png */ \"./src/Icons/check.png\");\n\n\nfunction setComplete() {\n  var setCompleteBtn = new Image();\n  setCompleteBtn.src = _Icons_check_png__WEBPACK_IMPORTED_MODULE_1__;\n  setCompleteBtn.setAttribute(\"id\", \"setComplete-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  setCompleteBtn.style.padding = \"6px 8px\";\n  var task = document.querySelector(\"#task-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n  var setCompleteCount = 2;\n  setCompleteBtn.addEventListener(\"click\", function () {\n    var titleText = document.querySelector(\"#titleText-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count.value);\n    setCompleteCount++;\n    if (setCompleteCount % 2 == 0) {\n      task.style.backgroundColor = \"#e11d487a\";\n      titleText.textContent = \"⁍Title: \" + title.value + \"(incomplete)\";\n    } else {\n      task.style.backgroundColor = \"#1de16d7a\";\n      titleText.textContent = \"⁍Title: \" + title.value + \"(complete)\";\n    }\n  });\n  return setCompleteBtn;\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/SetComplete.js?");

/***/ }),

/***/ "./src/AppLogic/currentDate.js":
/*!*************************************!*\
  !*** ./src/AppLogic/currentDate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate)\n/* harmony export */ });\nfunction getCurrentDate() {\n  var date = new Date();\n  var current_date = date.getFullYear() + \"-\" + (date.getMonth() + 1) + \"-\" + date.getDate();\n  document.getElementById(\"p1\").innerHTML = current_date;\n  return current_date;\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/currentDate.js?");

/***/ }),

/***/ "./src/AppLogic/disablePreviousDate.js":
/*!*********************************************!*\
  !*** ./src/AppLogic/disablePreviousDate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disablePreviousDate: () => (/* binding */ disablePreviousDate)\n/* harmony export */ });\nfunction disablePreviousDate() {\n  dueDate.min = new Date().toISOString().split(\"T\")[0];\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/disablePreviousDate.js?");

/***/ }),

/***/ "./src/AppLogic/remainingTime.js":
/*!***************************************!*\
  !*** ./src/AppLogic/remainingTime.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   remainingTime: () => (/* binding */ remainingTime)\n/* harmony export */ });\n/* harmony import */ var _currentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentDate */ \"./src/AppLogic/currentDate.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\nfunction remainingTime() {\n  var dueDate = document.getElementById('dueDate').value;\n  var current_date = new Date((0,_currentDate__WEBPACK_IMPORTED_MODULE_0__.getCurrentDate)());\n  var chosen_date = new Date(dueDate);\n  var remainingDays = current_date.getTime() - chosen_date.getTime();\n  var days = Math.ceil(remainingDays / (1000 * 3600 * 24));\n  var dueDateText = document.querySelector(\"#dueDateText-\".concat(___WEBPACK_IMPORTED_MODULE_1__.count.value));\n  dueDateText.textContent = \"dueDate: \".concat(dueDate, \"(Remaining days: \").concat(Math.abs(days), \")\");\n  if (dueDate.length == 0) {\n    dueDateText.textContent = 'dueDate: ';\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/remainingTime.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   count: () => (/* binding */ count),\n/* harmony export */   createNewItem: () => (/* binding */ createNewItem),\n/* harmony export */   items: () => (/* binding */ items),\n/* harmony export */   savedItems: () => (/* binding */ savedItems)\n/* harmony export */ });\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _AppLogic_currentDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogic/currentDate.js */ \"./src/AppLogic/currentDate.js\");\n/* harmony import */ var _AppLogic_CreateToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppLogic/CreateToDo.js */ \"./src/AppLogic/CreateToDo.js\");\n/* harmony import */ var _AppLogic_disablePreviousDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppLogic/disablePreviousDate.js */ \"./src/AppLogic/disablePreviousDate.js\");\n/* harmony import */ var _AppLogic_remainingTime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppLogic/remainingTime.js */ \"./src/AppLogic/remainingTime.js\");\n/* harmony import */ var _localStorage_searchTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage/searchTasks */ \"./src/localStorage/searchTasks.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\n\nvar count = function () {\n  var countVal = 0;\n  return {\n    get value() {\n      return countVal;\n    },\n    set value(val) {\n      countVal = val;\n    },\n    increment: function increment() {\n      return ++countVal;\n    },\n    decrement: function decrement() {\n      return --countVal;\n    }\n  };\n}();\nvar savedItems = JSON.parse(localStorage.getItem(\"items\"));\nvar items = [];\nvar addTaskBtn = document.getElementById(\"add-task\");\nvar dialog = document.querySelector(\"dialog\");\nvar confirmBtn = document.getElementById(\"confirm\");\nvar cancelBtn = document.getElementById(\"cancel\");\nvar title = document.getElementById(\"title\");\nvar description = document.getElementById(\"description\");\nvar dueDate = document.getElementById(\"dueDate\");\nvar priority = document.getElementById(\"priority\");\nvar priority1 = document.getElementById(\"priority1\");\nvar priority2 = document.getElementById(\"priority2\");\nvar priority3 = document.getElementById(\"priority3\");\nvar priority4 = document.getElementById(\"priority4\");\nvar notes = document.getElementById(\"notes\");\nvar form = document.querySelector(\"form\");\nform.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n});\n(0,_AppLogic_currentDate_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentDate)();\naddTaskBtn.addEventListener(\"click\", function () {\n  dialog.showModal();\n  (0,_AppLogic_disablePreviousDate_js__WEBPACK_IMPORTED_MODULE_3__.disablePreviousDate)();\n  confirmBtn.style.display = \"flex\";\n  _AppLogic_CreateToDo_js__WEBPACK_IMPORTED_MODULE_2__.task.style.backgroundColor = \"#1de1407a\";\n  title.value = \"\";\n  description.value = \"\";\n  dueDate.value = \"\";\n  priority.value = false;\n  notes.value = \"\";\n  count.increment();\n});\ncancelBtn.addEventListener(\"click\", function () {\n  dialog.close();\n  count.decrement();\n});\nvar Item = /*#__PURE__*/_createClass(function Item(title, description, dueDate, priority, notes) {\n  _classCallCheck(this, Item);\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.notes = notes;\n});\nfunction createNewItem() {\n  var newItem = new Item(title.value, description.value, dueDate.value, priority.value, notes.value);\n  return newItem;\n}\nconfirmBtn.addEventListener(\"click\", function () {\n  (0,_AppLogic_CreateToDo_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(count.value);\n  dialog.close();\n  var titleText = document.querySelector(\"#titleText-\" + count.value);\n  var descriptionText = document.querySelector(\"#descriptionText-\" + count.value);\n  var dueDateText = document.querySelector(\"#dueDateText-\" + count.value);\n  var priorityText = document.querySelector(\"#priorityText-\" + count.value);\n  var notesText = document.querySelector(\"#notesText-\" + count.value);\n  titleText.textContent = \"⁍Title: \" + title.value;\n  dueDateText.textContent = \"dueDate: \" + dueDate.value;\n  if (description.value === \"\") {\n    descriptionText.textContent = \"Description: none\";\n  } else {\n    descriptionText.textContent = \"Description: \" + description.value;\n  }\n  if (priority.value === \"\") {\n    priorityText.textContent = \"Description: none\";\n  } else {\n    priorityText.textContent = \"Description: \" + priority.value;\n  }\n  if (notes.value === \"\") {\n    notesText.textContent = \"Notes: none\";\n  } else {\n    notesText.textContent = \"Notes: \" + notes.value;\n  }\n  if (priority1.checked) {\n    priorityText.textContent = priority1.value;\n    priorityText.style.background;\n  } else if (priority2.checked) {\n    priorityText.textContent = priority2.value;\n  } else if (priority3.checked) {\n    priorityText.textContent = priority3.value;\n  } else if (priority4.checked) {\n    priorityText.textContent = priority4.value;\n  }\n  descriptionText.style.display = \"none\";\n  priorityText.style.display = \"none\";\n  notesText.style.display = \"none\";\n  (0,_AppLogic_remainingTime_js__WEBPACK_IMPORTED_MODULE_4__.remainingTime)();\n  var newItem = createNewItem();\n  items.push(newItem);\n  localStorage.setItem(\"items\", JSON.stringify(items));\n  console.log(items);\n});\n(0,_localStorage_searchTasks__WEBPACK_IMPORTED_MODULE_5__.searchTasks)();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/localStorage/searchTasks.js":
/*!*****************************************!*\
  !*** ./src/localStorage/searchTasks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchTasks: () => (/* binding */ searchTasks)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _AppLogic_CreateToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppLogic/CreateToDo */ \"./src/AppLogic/CreateToDo.js\");\n/* harmony import */ var _AppLogic_currentDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppLogic/currentDate */ \"./src/AppLogic/currentDate.js\");\n\n\n\n\n\nfunction searchTasks() {\n  if (!___WEBPACK_IMPORTED_MODULE_0__.savedItems || !___WEBPACK_IMPORTED_MODULE_0__.savedItems.length) {\n    console.log(\"local storage is empty\");\n  } else {\n    console.log(\"local storage is not empty\");\n    ___WEBPACK_IMPORTED_MODULE_0__.savedItems.forEach(function (element, index) {\n      ___WEBPACK_IMPORTED_MODULE_0__.count.value = index;\n      (0,_AppLogic_CreateToDo__WEBPACK_IMPORTED_MODULE_1__.createItem)(___WEBPACK_IMPORTED_MODULE_0__.count.value);\n      var titleText = document.querySelector(\"#titleText-\" + ___WEBPACK_IMPORTED_MODULE_0__.count.value);\n      var descriptionText = document.querySelector(\"#descriptionText-\" + ___WEBPACK_IMPORTED_MODULE_0__.count.value);\n      var dueDateText = document.querySelector(\"#dueDateText-\" + ___WEBPACK_IMPORTED_MODULE_0__.count.value);\n      var priorityText = document.querySelector(\"#priorityText-\" + ___WEBPACK_IMPORTED_MODULE_0__.count.value);\n      var notesText = document.querySelector(\"#notesText-\" + ___WEBPACK_IMPORTED_MODULE_0__.count.value);\n      titleText.textContent = \"⁍Title: \" + \"\".concat(element.title);\n      descriptionText.textContent = \"Description: \" + \"\".concat(element.description);\n      priorityText.textContent = \"Priority: \" + \"\".concat(element.priority);\n      notesText.textContent = \"Notes: \" + \"\".concat(element.notes);\n      descriptionText.style.display = \"none\";\n      priorityText.style.display = \"none\";\n      notesText.style.display = \"none\";\n      var dueDate = document.getElementById(\"dueDate\").value;\n      var current_date = new Date((0,_AppLogic_currentDate__WEBPACK_IMPORTED_MODULE_2__.getCurrentDate)());\n      console.log(\"current date: \" + current_date);\n      var chosen_date = new Date(\"\".concat(element.dueDate));\n      console.log(\"chosen date: \" + chosen_date);\n      var remainingDays = current_date.getTime() - chosen_date.getTime();\n      var days = Math.ceil(remainingDays / (1000 * 3600 * 24));\n      dueDateText.textContent = \"dueDate: \" + \"\".concat(element.dueDate) + \"(Remaining days: \" + Math.abs(days) + \")\";\n      if (\"\".concat(element.dueDate).length == 0) {\n        dueDateText.textContent = \"dueDate: \";\n      }\n      ___WEBPACK_IMPORTED_MODULE_0__.items.push(element);\n    });\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/localStorage/searchTasks.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\nbody {\n  background-color: #fdba74;\n}\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 15px;\n  font-size: 20px;\n}\n#header {\n  display: flex;\n  gap: 100px;\n  padding-bottom: 20px;\n  cursor: pointer;\n}\n.image {\n  display: flex;\n  align-items: flex-end;\n}\n#main {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\nbutton {\n  background-color: #e11d487a;\n  border: none;\n  padding: 15px 32px;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 20px;\n}\n#tasks {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex-wrap: wrap;\n  width: 566px;\n}\n#tasks > * {\n  box-shadow: 0px 10px 1px -1px rgb(0 0 0 / 30%);\n  background-color: #e11d487a;\n  display: flex;\n  padding: 27px 22px;\n  border-radius: 27px;\n  font-size: 20px;\n  flex-direction: column-reverse;\n}\n#search {\n  display: flex;\n  height: 39px;\n  gap: 5px;\n}\n#search button:last-child {\n  width: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#dialog {\n  position: relative;\n  width: 546px;\n  margin-left: 708px;\n  margin-top: 152px;\n}\ninput[type=\"text\"] {\n  font-size: 20px;\n}\n.text {\n  font-size: 25px;\n}\nlabel {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ninput[class=\"form\"] {\n  padding: 12px 9px;\n}\ninput:focus {\n  background-color: #f7fee7;\n}\nform {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 663px;\n}\n#buttons {\n  display: flex;\n  flex-direction: row-reverse;\n}\n#buttons,\n#checklist {\n  padding-top: 20px;\n}\n#checklist {\n  display: flex;\n  gap: 20px;\n}\noption {\n  font-size: 20px;\n  display: flex;\n  cursor: pointer;\n}\noption:after {\n  position: absolute;\n  content: \"\";\n  top: 14px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-color: #fff transparent transparent transparent;\n}\nselect {\n  padding: 12px 9px;\n  background-color: #fff;\n  font-size: 20px;\n  color: #000;\n  cursor: pointer;\n}\noption#priority1 {\n  background: rgba(255, 0, 0, 0.527);\n}\noption#priority2 {\n  background: rgba(255, 145, 0, 0.527);\n}\noption#priority3 {\n  background: rgba(157, 255, 0, 0.527);\n}\noption#priority4 {\n  background: rgba(0, 102, 255, 0.527);\n}\n#confirmEdit {\n  display: none;\n}\n#taskBtns {\n  display: flex;\n  gap: 15px;\n  background-color: #e11d4800;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Icons/check.png":
/*!*****************************!*\
  !*** ./src/Icons/check.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91973364aa757dbfa533.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/Icons/check.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;