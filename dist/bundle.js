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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    background-color: #fdba74;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 15px;\n    font-size: 20px;\n}\n#header {\n    display: flex;\n    gap: 100px;\n    padding-bottom: 20px;\n    cursor: pointer;\n}\n.image {\n    display: flex;\n    align-items: flex-end;\n}\n#main {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\nbutton {\n    background-color: #e11d48;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    border-radius: 20px;\n}\n#tasks {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    flex-wrap: wrap;\n    width: 566px;\n}\n#tasks > * {\n    box-shadow: 0px 10px 1px -1px rgb(0 0 0 / 30%);\n}\n#search {\n    display: flex;\n    height: 39px;\n    gap: 5px;\n}\n#search button:last-child {\n    width: 65px;\n    display: flex;\nalign-items: center;\n    justify-content: center;\n}\n#dialog {\n    position: relative;\n    width: 546px;\n    margin-left: 708px;\n    margin-top: 152px;\n}\ninput[type=text] {\n    font-size: 20px;\n}\n.text {\n    font-size: 25px;\n}\nlabel {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ninput[class=form] {\n    padding: 12px 9px;\n}\ninput:focus {\n    background-color: #f7fee7;\n}\nform {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    justify-content: center;\n    flex-direction: column;\n    height: 663px;\n}\n#buttons {\n    display: flex;\n    flex-direction: row-reverse;\n}\n#buttons, #checklist {\n    padding-top: 20px;\n}\n#checklist {\n    display: flex;\n    gap: 20px;\n    \n}\noption {\n    font-size: 20px;\n    display: flex;\n    cursor: pointer;\n}\noption:after {\n    position: absolute;\n    content: \"\";\n    top: 14px;\n    right: 10px;\n    width: 0;\n    height: 0;\n    border: 6px solid transparent;\n    border-color: #fff transparent transparent transparent;\n}\nselect {\n    padding: 12px 9px;\n    background-color: #fff;\n    font-size: 20px;\n    color: #000;\n    cursor: pointer;\n}\noption#priority1 {\n    background: rgba(255, 0, 0, 0.527);\n}\noption#priority2 {\n    background: rgba(255, 145, 0, 0.527);\n}\noption#priority3 {\n    background: rgba(157, 255, 0, 0.527);\n}\noption#priority4 {\n    background: rgba(0, 102, 255, 0.527);\n}\n#confirmEdit {\n    display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/AppLogic/CreateToDo.js":
/*!************************************!*\
  !*** ./src/AppLogic/CreateToDo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: () => (/* binding */ createItem),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   createToDo: () => (/* binding */ createToDo),\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _DeleteToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteToDo.js */ \"./src/AppLogic/DeleteToDo.js\");\n\n\n\n\nfunction createToDo () {\n    class Item {\n        constructor(title, description, dueDate, priority, notes, checklist) {\n            this.title = title;\n            this.description = description;\n            this.dueDate = dueDate;\n            this.priority = priority;\n            this.notes = notes;\n            this.checklist = checklist;\n        }\n        date() {\n            const date = newDate();\n            return date.getFullYear() - this.year;\n        }\n    }\n    const item1 = new Item(\"Study\", \"Study 2 hours\", \"Infinite\", 2, \"\", \"\" );\n    //haven't used this code block yet *\n}\nfunction createTask() {\n    let task = document.createElement(\"div\");\n    return task\n}\nlet task = createTask();\n\nfunction createItem(num) {\n    let task = createTask();\n    const tasks = document.getElementById(\"tasks\");\n    tasks.appendChild(task);\n    task.setAttribute(\"id\", \"task\"+num);\n\n    task.appendChild(_DeleteToDo_js__WEBPACK_IMPORTED_MODULE_1__.deleteBtn);\n    _DeleteToDo_js__WEBPACK_IMPORTED_MODULE_1__.deleteBtn.setAttribute(\"id\", \"deleteBtn-\" +num);\n    document.getElementById(\"deleteBtn-\" +num).style.padding = \"6px 8px\";\n\n    let titleText = document.createElement(\"div\");\n    task.appendChild(titleText);\n    titleText.setAttribute(\"id\", \"titleText-\"+num);\n\n    let descriptionText = document.createElement(\"div\");\n    task.appendChild(descriptionText);\n    descriptionText.setAttribute(\"id\", \"descriptionText-\"+num);\n\n    let dueDateText = document.createElement(\"div\");\n    task.appendChild(dueDateText);\n    dueDateText.setAttribute(\"id\", \"dueDateText-\"+num);\n\n    let priorityText = document.createElement(\"div\");\n    task.appendChild(priorityText);\n    priorityText.setAttribute(\"id\", \"priorityText-\"+num);\n\n    let notesText = document.createElement(\"div\");\n    task.appendChild(notesText);\n    notesText.setAttribute(\"id\", \"notesText-\"+num);\n\n    let editItemBtn = document.createElement(\"button\");\n    task.appendChild(editItemBtn);\n    editItemBtn.setAttribute(\"id\", \"editItemBtn-\" +num);\n    editItemBtn.textContent = \"editItemBtn\";\n    document.getElementById(\"editItemBtn-\" +num).style.padding = \"6px 8px\";\n\n    let confirmEditBtn = document.createElement(\"button\");\n    const buttons = document.getElementById(\"buttons\");\n    buttons.appendChild(confirmEditBtn);\n    confirmEditBtn.setAttribute(\"id\", \"confirmEditBtn-\" +num);\n    confirmEditBtn.textContent = \"confirmEditBtn\";\n\n    document.getElementById(\"confirmEditBtn-\" +num).style.padding = \"6px 8px\";\n    document.getElementById(\"confirmEditBtn-\" +num).style.display = \"none\";\n    document.getElementById(\"confirmEditBtn-\" +num).style.alignItems = \"center\";\n    \n    editItemBtn.addEventListener(\"click\", () => {\n        dialog.showModal();\n        editItemBtn.querySelector(\"#editItemBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count);\n        const confirm = document.getElementById(\"confirm\");\n        confirm.style.display = \"none\";\n        document.querySelector(\"#confirmEditBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count).style.display = \"flex\";\n    });\n\n    confirmEditBtn.querySelector(\"#confirmEditBtn-\" + _index_js__WEBPACK_IMPORTED_MODULE_0__.count);\n    confirmEditBtn.addEventListener(\"click\", () => {\n        titleText.textContent = \"⁍Title: \" + title.value;\n        descriptionText.textContent = \"Description: \" + description.value;\n        dueDateText.textContent = \"dueDate: \" + dueDate.value;\n        priorityText.textContent = \"Priority: \" + priority.value;\n        notesText.textContent = \"Notes: \" + notes.value;\n        dialog.close();\n        document.getElementById(\"confirm-\").style.display = \"none\";\n    })\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/CreateToDo.js?");

/***/ }),

/***/ "./src/AppLogic/DeleteToDo.js":
/*!************************************!*\
  !*** ./src/AppLogic/DeleteToDo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDeleteBtn: () => (/* binding */ createDeleteBtn)\n/* harmony export */ });\n/* harmony import */ var _CreateToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateToDo.js */ \"./src/AppLogic/CreateToDo.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\nfunction createDeleteBtn() {\n    let deleteBtn = document.createElement(\"button\");\n    deleteBtn.textContent = \"Delete\";\n    deleteBtn.setAttribute(\"id\", \"deleteBtn-\" +_index_js__WEBPACK_IMPORTED_MODULE_1__.count);\n    deleteBtn.style.padding = \"6px 8px\";\n    deleteBtn.addEventListener(\"click\", function () {\n        _CreateToDo_js__WEBPACK_IMPORTED_MODULE_0__.task.remove();\n    })\n    return deleteBtn\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/DeleteToDo.js?");

/***/ }),

/***/ "./src/AppLogic/currentDate.js":
/*!*************************************!*\
  !*** ./src/AppLogic/currentDate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate)\n/* harmony export */ });\nfunction getCurrentDate() {\n    let date = new Date();\n\tlet current_date = date.getFullYear()+\"-\"+(date.getMonth()+1)+\"-\"+ date.getDate();\n\tdocument.getElementById(\"p1\").innerHTML = current_date;\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/currentDate.js?");

/***/ }),

/***/ "./src/AppLogic/disablePreviousDate.js":
/*!*********************************************!*\
  !*** ./src/AppLogic/disablePreviousDate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disablePreviousDate: () => (/* binding */ disablePreviousDate)\n/* harmony export */ });\nfunction disablePreviousDate() {\n    dueDate.min = new Date().toISOString().split(\"T\")[0];\n}\n\n//# sourceURL=webpack://webpack-demo/./src/AppLogic/disablePreviousDate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   count: () => (/* binding */ count)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _AppLogic_currentDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogic/currentDate.js */ \"./src/AppLogic/currentDate.js\");\n/* harmony import */ var _AppLogic_CreateToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppLogic/CreateToDo.js */ \"./src/AppLogic/CreateToDo.js\");\n/* harmony import */ var _AppLogic_disablePreviousDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppLogic/disablePreviousDate.js */ \"./src/AppLogic/disablePreviousDate.js\");\n/* harmony import */ var _AppLogic_DeleteToDo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppLogic/DeleteToDo.js */ \"./src/AppLogic/DeleteToDo.js\");\n\n\n\n\n\nlet count = 0;\n\nconst addTaskBtn = document.getElementById(\"add-task\");\nconst dialog = document.querySelector(\"dialog\");\nconst confirmBtn = document.getElementById(\"confirm\");\nconst cancelBtn = document.getElementById(\"cancel\");\nconst title = document.getElementById(\"title\");\nconst description = document.getElementById(\"description\");\nconst dueDate = document.getElementById(\"dueDate\");\nconst priority = document.getElementById(\"priority\");\nconst priority1 = document.getElementById(\"priority1\");\nconst priority2 = document.getElementById(\"priority2\");\nconst priority3 = document.getElementById(\"priority3\");\nconst priority4 = document.getElementById(\"priority4\");\nconst notes = document.getElementById(\"notes\");\nconst searchBtn = document.getElementById(\"searchBtn\");\nconst form = document.querySelector(\"form\");\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const formData = new FormData(e.currentTarget);\n  console.log(Object.fromEntries(formData));\n});\n\ncancelBtn.addEventListener(\"click\", () => {\n    dialog.close();\n})\n;(0,_AppLogic_currentDate_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentDate)();\naddTaskBtn.addEventListener(\"click\", () => {\n    dialog.showModal();\n    (0,_AppLogic_disablePreviousDate_js__WEBPACK_IMPORTED_MODULE_3__.disablePreviousDate)();\n    confirmBtn.style.display = \"flex\";\n    title.value = \"\";\n    description.value = \"\";\n    dueDate.value = \"\";\n    priority.value = false;\n    notes.value = \"\";\n\n    count++;\n    console.log(count);\n});\n\nconfirmBtn.addEventListener(\"click\", function () {\n    (0,_AppLogic_CreateToDo_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(count);\n    const titleText = document.querySelector(\"#titleText-\" + count);\n    const descriptionText = document.querySelector(\"#descriptionText-\" + count);\n    const dueDateText = document.querySelector(\"#dueDateText-\" + count);\n    const priorityText = document.querySelector(\"#priorityText-\" + count);\n    const notesText = document.querySelector(\"#notesText-\" + count);\n    const deleteBtn = document.querySelector(\"#deleteBtn-\" + count);\n    dialog.close();\n    \n    titleText.textContent = \"⁍Title: \" + title.value;\n    descriptionText.textContent = \"Description: \" + description.value;\n    dueDateText.textContent = \"dueDate: \" + dueDate.value;\n    priorityText.textContent = \"Priority: \" + priority.value;\n    notesText.textContent = \"Notes: \" + notes.value;\n\n    if(priority1.checked) {\n        priorityText.textContent = priority1.value;\n    } else if (priority2.checked) {\n        priorityText.textContent = priority2.value;\n    } else if (priority3.checked) {\n        priorityText.textContent = priority3.value;\n    } else if (priority4.checked) {\n        priorityText.textContent = priority4.value;\n    }\n});\n(0,_AppLogic_DeleteToDo_js__WEBPACK_IMPORTED_MODULE_4__.createDeleteBtn)();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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