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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Audiowide&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Serif+Dives+Akuru&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\n    --text: #0d1b09;\n    --background: #f4fbf4;\n    --primary: #6ac24c;\n    --secondary: #92d1d9;\n    --accent: #76a0d0;\n}\n\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Noto Serif Dives Akuru', sans-serif;\n    background-color: var(--background);\n    scroll-behavior: smooth;\n}\n\nimg{\n    width: 100px;\n}\n\n.header{\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--background);\n    padding: 20px;\n    border-bottom: solid 3px var(--primary);\n}\n\n.title{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 70%;\n}\n\n.title>a{\n    font-size: 2rem;\n    font-weight: 500;\n    color: var(--text);\n    text-decoration: none;\n    \n}\n\n.title>a>strong{\n    color: var(--primary);\n    font-weight: 9000;\n}\n\n.header-nav{\n    display: flex;\n    gap: 20px;\n    width: 30%;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.header-nav > ul{\n    display: flex;\n    width: 75%;\n    justify-content: space-around;\n    list-style: none;\n}\n\n.header-nav > ul > li>a{\n    font-size: 1.2rem;\n    font-weight: 500;\n    text-decoration: none;\n    color: var(--text);\n}\n\n.navContact{\n    display: flex;\n    width: auto;\n    min-width: fit-content;\n    font-size: 1.2rem;\n    border-radius: 10px;\n    background-color: var(--secondary);\n    cursor: pointer;\n    overflow: hidden;\n}\n\n.navContact>a{\n    text-decoration: none;\n    color: var(--background);\n    font-weight: 500;\n    background-color: var(--secondary);\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    padding: 12px 22px 8px 18px;\n    min-height: 45px;\n}\n\n.main{\n    display: flex;\n    flex-direction: column;\n    gap: 100px;\n    padding: 50px 20px;\n    margin-top: 50px;\n}\n\n.home{\n    display: flex;\n    gap: 50px;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n.homeInfo{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    width: 30%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    text-align: left;\n}\n\n.hero-subtitle{\n    font-size: 1.2rem;\n    color: var(--text);\n    font-weight: 100;\n}\n\n.hero-img{\n    width: 275px;\n    height: 275px;\n    border-radius: 50%;\n    object-fit: cover;\n}\n\n.about-container{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 300px);\n    grid-template-rows: repeat(5, minmax(50px, 100px));\n    grid-template-areas: \n        \"intro intro intro\"\n        \"title title details\"\n        \"content content details\"\n        \"content content details\"\n        \"content content details\"\n    ;\n    justify-content: center;\n}\n\n.section-intro{\n    color: var(--primary);\n    padding: 10px 20px;\n    font-size: 1.2rem;\n    grid-area: intro;\n}\n\n.section-title{\n    color: var(--text);\n    font-size: 2rem;\n    font-weight: 500;\n    grid-area: title;\n    padding: 10px 20px;\n}\n\n.about-content{\n    color: var(--text);\n    font-size: 1.2rem;\n    grid-area: content;\n    padding: 10px 20px; \n}\n\n.about-details-grid{\n    display: flex;\n    flex-direction: column;\n    grid-area: details;\n    padding: 10px 20px;\n    justify-content: center;\n    align-items: center;\n    grid-column: 3/4;\n}\n\n.label-green{\n    color: var(--primary);\n    font-weight: 500;\n    font-size: 1.2rem;\n}\n\n.about-details-grid>div{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    font-size: 1.2rem;\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.project-intro{\n    display: flex;\n    flex-direction: column;\n    font-size: 1.2rem;\n    padding: 10px 20px;\n    gap: 20px;\n}\n\n.p-intro{\n    color: var(--primary);\n    font-weight: 500;\n}\n\n.projects-container{\n    display: grid;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: repeat(2, 450px);\n    grid-template-rows: repeat(4, 225px);\n}\n.project-img{\n    width: 300px;\n    height: 150px;\n    object-fit: cover;\n    border-radius: 15px;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n    transition: box-shadow 0.3s ease, transform 0.3s ease;\n}\n\n.project-img:hover{\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n    transform: translateY(-5px);\n}\n.project-card:nth-child(1){\n    grid-column: 1/3;\n    grid-row: 1/2;\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 50px;\n\n}\n.project-card:nth-child(2){\n    grid-column: 1/3;\n    grid-row: 2/3;\n    display: flex;\n    gap: 50px;\n}\n.project-card:nth-child(3){\n    grid-column: 1/3;\n    grid-row: 3/4;\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 50px;\n}\n.project-card:nth-child(4){\n    grid-column: 1/3;\n    grid-row: 4/5;\n    display: flex;\n    gap: 50px;\n}\n\n.project-links{\n    display: flex;\n    gap: 20px;\n}\n\n.btn-live{\n    text-decoration: none;\n    color: var(--text);\n    font-weight: 700;\n    cursor: pointer;\n    background-color: var(--accent);\n    padding: 12px 22px 8px 18px;\n    border-radius: 10px;\n}\n\n.btn-code{\n    text-decoration: none;\n    color: var(--text);\n    font-weight: 700;\n    cursor: pointer;\n    background-color: var(--accent);\n    padding: 12px 22px 8px 18px;\n    border-radius: 10px;\n}\n\n.btn-code>img{\n    width: 20px;\n    height: 20px;\n    object-fit: cover;\n    margin-right: 8px;\n    background-color: transparent;\n}\n\n.contact-container{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-container>p{\n    width: 50%;\n    text-align: center;\n    font-size: 1rem;\n    color: var(--text);\n}\n\n.contact-links{\n    display: flex;\n    gap: 20px;\n}\n\n.contact-links>a>img{\n    width: 30px;\n    height: 30px;\n    object-fit: cover;\n    cursor: pointer;\n    transition: transform 0.3s ease;\n}\n\n.contact-links>a>img:hover{\n    transform: scale(1.1);\n}\n\n.footer{\n    width: 100%;\n    text-align: center;\n    padding: 20px;\n    background-color: var(--secondary);\n    color: var(--text);\n    font-size: 0.9rem;\n}\n\n.footer-container{\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--secondary);\n}\n.footer-container>p{\n    color: var(--text);\n    font-size: 0.9rem;\n    background-color: transparent;\n     padding: 12px 22px 8px 18px;\n}\n.footer-container>a{\n    text-decoration: none;\n    color: var(--text);\n    font-weight: 500;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 12px 22px 8px 18px;\n    border-radius: 10px;\n\n}\n\n.footer-container>a>img{\n    width: 30px;\n    height: 30px;\n    object-fit: cover;\n    margin-right: 8px;\n    background-color: transparent;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-starter-template/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-starter-template/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-starter-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction renderHeader(){\n    const headerSection = document.querySelector(\".header\");\n    headerSection.innerHTML = `\n        <div class=\"title\">\n            <a href=\"#home\" class=\"logo\">&lt;<strong>G</strong>PA/&gt;</a>\n        </div>\n        <nav class=\"header-nav\">\n            <ul>\n                <li class=\"navHome\"><a href=\"#home\">Home</a></li>\n                <li class=\"navAbout\"><a href=\"#about\">About</a></li>\n                <li class=\"navProjects\"><a href=\"#projects\">Projects</a></li>\n            </ul>\n            <div class=\"navContact\"><a href=\"#contact\" class=\"contactLink\">Contact</a></div>\n        </nav>\n    `\n}\n\nconst homeDetails = {\n    intro : \"Hi there, I'm\",\n    name : \"Guillermo Parejo Alonso\",\n    description : \"A web developer passionate about transforming ideas into end-to-end digital experiences.\",\n}\n\nfunction renderHome(){\n    const homeSection = document.querySelector(\".home\");\n    homeSection.innerHTML = `\n        <div class=\"homeInfo\">\n            <p class=\"intro-text\">${homeDetails.intro}</p>\n            <h1 class=\"hero-name\">${homeDetails.name}</h1>\n            <h2 class=\"hero-subtitle\">${homeDetails.description}</h2>\n        </div>\n        <img src=\"./assets/Linkedin-Img.jpg\" alt=\"My photo\" class=\"hero-img\">\n    `;\n}\n\nconst aboutInfo = {\n    title : \"Who I am\",\n    description : \"I'm a web developer who loves turning complex problems into simple, functional designs. I consider myself a naturally curious and self-taught person. I've found the perfect balance between logic and creativity in Front-End development, but my vision goes beyond that: I'm continuously learning to master the complete development cycle as a Full-Stack developer. I strongly believe in clean code and lifelong learning.\",\n    skills : [\"JavaScript\", \"HTML\", \"CSS\", \"Git\"],\n    specialty: \"Application Logic & Interactive Web Apps\",\n    education: \"Self-taught\",\n    learning: \"Full-Stack Path (Node.js) at The Odin Project\"\n}\n\nfunction renderAbout(){\n    const aboutSection = document.querySelector(\".about\");\n    \n    let skillsHTML = ``;\n    \n    aboutInfo.skills.forEach((skill) => {\n        skillsHTML += `<span class=\"skill-tag\">${skill} </span>`\n    });\n\n    aboutSection.innerHTML = `\n        <div class=\"about-container\">\n            <p class=\"section-intro\">About me</p>\n            <h2 class=\"section-title\">${aboutInfo.title}</h2>\n            <div class=\"about-content\">\n                <p class=\"section-content\">${aboutInfo.description}</p>\n            </div>\n            <div class=\"about-details-grid\">\n                <div class=\"tech-stack-section\">\n                    <p class=\"label-green\">Tech Stack</p>\n                    <h3 class=\"tech-title\">What I'm good at 💻</h3>\n                    \n                    <div class=\"skills-pill\">\n                        ${skillsHTML}\n                    </div>\n                </div>\n                <div class=\"detail-item\">\n                    <p class=\"label-green\">Specialty</p>\n                    <p class=\"detail-text\">${aboutInfo.specialty}</p>\n                </div>\n                \n                <div class=\"detail-item\">\n                    <p class=\"label-green\">Education</p>\n                    <p class=\"detail-text\">🎓 ${aboutInfo.education}</p>\n                </div>\n                <div class=\"detail-item\">\n                    <p class=\"label-green\">Currently Learning</p>\n                    <p class=\"detail-text\">📚 ${aboutInfo.learning}</p>\n                </div>\n            </div>\n        </div>\n    `\n}\n\nconst projects = [\n    {\n        name: \"Lysto\",\n        description: \"Lysto is a modern and responsive task management web application built with HTML, CSS, and JavaScript.\",\n        techs: [\"HTML\", \"CSS\", \"JavaScript\"],\n        linkGit: \"https://github.com/GParej0/Lysto\",\n        linkLive: \"https://gparej0.github.io/Lysto/\",\n        preview: \"./assets/Lysto.png\", \n    },\n    {\n        name: \"Weather app\",\n        description: \"A modern and responsive Weather App built with HTML, CSS, and JavaScript.\",\n        techs: [\"HTML\", \"CSS\", \"JavaScript\"],\n        linkGit: \"https://github.com/GParej0/WeatherApp\",\n        linkLive: \"https://gparej0.github.io/WeatherApp/\",\n        preview: \"./assets/Weather-app.png\", \n    },\n    {\n        name: \"Mercedes-Benz Landing Page\",\n        description: \"A modern, elegant, and fully responsive landing page inspired by the Mercedes-Benz brand. \",\n        techs: [\"HTML\", \"CSS\"],\n        linkGit: \"https://github.com/GParej0/Merecedes-Benz-Landing-Page\",\n        linkLive: \"https://gparej0.github.io/Merecedes-Benz-Landing-Page/\",\n        preview: \"./assets/Mercedes-Benz.png\", \n    },\n    {\n        name: \"Restaurant Page\",\n        description: \"A modern restaurant website built with JavaScript and bundled using Webpack.\",\n        techs: [\"HTML\", \"CSS\", \"JavaScript\"],\n        linkGit: \"https://github.com/GParej0/Restaurant-Page\",\n        linkLive: \"https://gparej0.github.io/Restaurant-Page/\",\n        preview: \"./assets/Restaurant-page.png\", \n    }\n]\n\nfunction renderProjects(){\n    const projectSection = document.querySelector(\".projects\")\n\n    let projectHTML = \"\";\n\n    projects.forEach((project) =>{\n        let techsHTML = ``;\n        project.techs.forEach((tech) =>{\n            techsHTML += `<span class=\"tech-tag\">${tech} </span>`\n        })\n\n        projectHTML += `\n            <div class=\"project-card\">\n                <div class=\"project-img-container\">\n                    <a href=\"${project.linkLive}\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"${project.preview}\" alt=\"Preview ${project.name}\" class=\"project-img\"></a>\n                </div>\n                <div class=\"project-info\">\n                    <h3 class=\"project-title\">${project.name}</h3>\n                    <p class=\"project-desc\">${project.description}</p>\n                    <div class=\"project-techs\">${techsHTML}</div>\n                    \n                    <div class=\"project-links\">\n                        <a href=\"${project.linkLive}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn-live\">Live Demo 🔗</a>\n                        <a href=\"${project.linkGit}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn-code\">GitHub <img src=\"./assets/github-svg.svg\" class=\"contactBtn\"></a>\n                    </div>\n                </div>\n            </div>\n        `\n    })\n\n    projectSection.innerHTML = `\n        <div class=\"project-intro\">\n            <p class=\"p-intro\">Portfolio</p>\n            <h2 class=\"project-title\">Projects</h2>\n            <h3>This is some of my work!</h3>\n        </div>\n        <div class=\"projects-container\">\n            ${projectHTML}\n        </div>\n    `\n\n}\n\nconst contactInfo = {\n    title: \"Get in touch\",\n    message: \"I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!\",\n    github: \"https://github.com/GParej0\",\n    linkedin: \"https://www.linkedin.com/in/guillermoparejo/\",\n    mail: \"guillermoparejo06@gmail.com\",\n    resume: \"./assets/Guillermo_English_CV.pdf\",\n}\n\nfunction renderContact (){\n    const contactSection = document.querySelector(\".contact\");\n\n    contactSection.innerHTML = `\n        <div class=\"contact-container\">\n            <h2 class=\"section-title\">${contactInfo.title}</h2>\n            <p class=\"contact-message\">${contactInfo.message}</p>\n            \n            <div class=\"contact-links\">\n                <a href=\"mailto:${contactInfo.mail}\" class=\"btn-primary\" title=\"Send me an email\"><img src=\"./assets/email-svg.svg\" class=\"contactBtn\"></a>\n                \n                <a href=\"${contactInfo.resume}\" target=\"_blank\" class=\"btn-resume\" title=\"Download my CV\"><img src=\"./assets/curriculum-svg.svg\" class=\"contactBtn\"></a>\n                \n                <a href=\"${contactInfo.linkedin}\" target=\"_blank\" class=\"btn-social\" title=\"Access to my Linkedin\"><img src=\"./assets/linkedin-svg.svg\" class=\"contactBtn\"></a>\n                <a href=\"${contactInfo.github}\" target=\"_blank\" class=\"btn-social\" title=\"Access to my Github\"><img src=\"./assets/github-svg.svg\" class=\"contactBtn\"></a>\n            </div>\n        </div>`\n\n}\n\nfunction renderFooter (){\n    const footerSection = document.querySelector(\".footer\");\n\n    const currentYear = new Date().getFullYear();\n\n    footerSection.innerHTML =`\n        <div class=\"footer-container\">\n            <p class=\"copyright\">Designed & Built by Guillermo Parejo &copy; ${currentYear}</p>\n\n            <a href=\"#\" class=\"back-to-top\"><img src=\"./assets/up-arrow.svg\"> Back to top</a>\n        </div>\n    `\n}\n\nfunction renderPage(){\n    renderHeader();\n    renderHome();\n    renderAbout();\n    renderProjects();\n    renderContact();\n    renderFooter();\n}\n\n\ndocument.addEventListener(\"DOMContentLoaded\", renderPage);\n\n//# sourceURL=webpack://webpack-starter-template/./src/index.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;