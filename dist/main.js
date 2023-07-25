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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/restaurantBackgroundImg.jpeg */ \"./src/restaurantBackgroundImg.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/food.jpeg */ \"./src/food.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/wine.png */ \"./src/wine.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;padding: 0;\n}\nbody{\n    height: 100vh;\n    background-color: black;\n    background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.4)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size:cover;\n    color: white;\n    font-family: 'Heebo', sans-serif;\n}\n/* Body's darker background. */\n.darker-background{\n    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-attachment: fixed;\n    background-size:cover;\n}\n\n/* Main Container */\n.main-container{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n/* Content */\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex: 1;\n}\n.darker-background #content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.darker-background .header{\n    background-color: rgba(0,0,0,.1);\n    backdrop-filter: blur(4px);\n}\n\n\n/* Header */\n.header{\n    padding: 1rem;\n    background-color: rgba(255,255,255,.1);\n    backdrop-filter: blur(4px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.right-links > ul{\n    display: flex;\n    list-style-type: none;\n    gap: 1rem;\n}\n.right-links > ul > li{\n    padding: .25rem .8rem;\n}\n.right-links > ul > li:hover{\n    text-decoration: underline;\n    cursor: pointer;\n}\n.header-heading{\n    min-width: 117px;\n}\n/* Current-site Indicator */\n.current-site{\n    background-color: transparent;\n    border: 1px solid aliceblue;\n}\n\n.header-heading, .home-title{\n    font-family: 'Playfair Display', serif;\n}\n\n/* Home site */\n.home-container{\n    padding-left: 2rem;\n}\n.home-container > *{\n    margin: .5rem 0;\n}\n.home-title{\n    font-size: 6rem;\n}\n.home-tagline{\n    font-style: italic;\n    font-size: 1.2rem;\n}\n.menu-btn{\n    color: white;\n    text-transform: uppercase;\n    /* width: 200px; */\n    padding: .8rem 4rem;\n    background-color: transparent;\n    border: 1px solid #cdc8c2;\n}\n.menu-btn:hover{\n    color: black;\n    background-color: aliceblue;\n}\n\n/* Menu */\n.food-container , .wine-container{\n    display: flex;\n    flex-direction: column;\n    align-self:stretch;\n}\n\n/* Food Container */\n\n.food-header, .wine-header{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:white;\n    font-size: 4rem;\n}\n.food-header{\n    background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.2)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n    background-position: center top;\n}\n.wine-header{\n    background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.2)), url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-size: cover;\n    background-position: center;\n}\n.food-item-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    gap: 2rem;\n}\n.menu-header{\n    height: 250px;\n    opacity: .85;\n}\n.menus-menu{\n    /* flex-grow: 1; */\n    margin: 1rem 0;\n    padding: 1rem;\n}\n.menus-menu p{\n    margin: .5rem 0;\n}\n\n.food-item-container > div{\n    color: white;\n\n    /* From https://css.glass */\n    background: rgba(255, 255, 255, 0.12);\n    border-radius: 16px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(2.6px);\n    -webkit-backdrop-filter: blur(2.6px);\n    border: 1px solid rgba(255, 255, 255, 0.24);\n}\n.food-item-container > div:hover{\n    transform: scale(1.01);\n}\n.food-item-container > div > p::before{\n    content: '-';\n}\n.menus-menu .foodItem , .menus-menu .wineItem {\n    padding: 1rem;\n}\n.menus-menu h2{\n    text-decoration: underline;\n    margin-bottom: .5rem;\n}\n\n\n/* Contact */\n.contact-detail-container{\n    margin-top: 1rem;\n    padding: 1rem;\n}\n.contact-detail-container > div{\n    margin: 1rem 0;\n}\n.contact-detail-container  h2{\n    text-decoration: underline;\n}\n.contact-detail-container a{\n    color:white\n}\n.contact-detail-container , .aboutus-container{\n    /* From https://css.glass */\n    background: rgba(255, 255, 255, 0.12);\n    border-radius: 16px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(2.6px);\n    -webkit-backdrop-filter: blur(2.6px);\n    border: 1px solid rgba(255, 255, 255, 0.24);\n}\n\n/* About */\n.aboutus-container{\n    width: min(1000px,90%);\n    padding: 1rem;\n\n}\n.aboutus-heading{\n    font-family: 'Playfair Display', serif;\n    margin: 1rem 0;\n}\n.aboutus-container p{\n    text-align: justify;\n}\n\n\n/* Media Queries */\n@media only screen and (max-width:800px) {\n    .right-links > ul{\n        gap:0px\n    }\n\n}\n\n@media only screen and (max-width:450px) {\n    .menu{\n        display: none;\n    }\n    .menus-menu{\n        padding: .5rem;\n    }\n}\n\n/* footer section */\n.author{\n    width: 100%;\n    background-color: #081419;\n}\n.author{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 4%;\n}\n.author > a{\n    text-decoration: none;\n    color:white;\n    margin-left: .5%;\n }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nfunction aboutElementCreation(){\n    const content=document.getElementById('content')\n\n    const about=document.querySelector('.about');\n    (0,___WEBPACK_IMPORTED_MODULE_0__.indicateCurrentSite)(about);\n\n    const aboutUsHeading=document.createElement('h1');\n    aboutUsHeading.textContent='About Us'\n    content.appendChild(aboutUsHeading);\n\n    const aboutUsContainer=document.createElement('div');\n    aboutUsContainer.classList.add('aboutus-container')\n    const aboutUsHeader=document.createElement('h2');\n    aboutUsHeader.textContent=\"Dine and Wine\";\n    aboutUsHeader.classList.add('aboutus-heading')\n\n    const aboutUsDescription=document.createElement('p');\n    aboutUsDescription.textContent=\"-At Dine and Wine, our journey began with a simple yet passionate vision – to create a haven for gastronomes and wine enthusiasts alike. Founded in the heart of the city by a team of culinary aficionados, our restaurant stands as a testament to the love for excellent food and extraordinary wines. We pour our hearts into every dish, using the finest ingredients to craft culinary masterpieces that celebrate flavors from around the world. Complementing the delectable fare is an impressive wine collection, carefully curated to delight even the most discerning connoisseurs. As we continue to grow, our commitment to providing an enchanting dining experience remains unwavering. Come, be a part of our story, and let us create cherished moments together.\";\n\n    aboutUsContainer.appendChild(aboutUsHeader);\n    aboutUsContainer.appendChild(aboutUsDescription);\n    content.appendChild(aboutUsContainer)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutElementCreation);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\nfunction contactElementCreation(){\n    const content=document.getElementById('content')\n\n    const contact=document.querySelector('.contact');\n    (0,___WEBPACK_IMPORTED_MODULE_0__.indicateCurrentSite)(contact)\n\n    const contactDetailHeading=document.createElement('h1');\n    contactDetailHeading.textContent='Contact Us';\n    content.appendChild(contactDetailHeading)\n\n    const contactDetailContainer=document.createElement('div');\n    contactDetailContainer.classList.add('contact-detail-container')\n\n    const contactAddressContainer=document.createElement('div');\n    contactAddressContainer.classList.add('contact-address-container');\n    const contactAddressHeading=document.createElement('h2')\n    const contactAddressPara=document.createElement('p');\n    contactAddressHeading.textContent='Address'\n    contactAddressPara.innerHTML='123 Main Street,<br>City, State,<br> Zip Code';\n    contactAddressContainer.appendChild(contactAddressHeading)\n    contactAddressContainer.appendChild(contactAddressPara)\n    contactDetailContainer.appendChild(contactAddressContainer);\n\n\n    const contactPhoneContainer=document.createElement('div');\n    contactPhoneContainer.classList.add('contact-phone-container')\n    const contactPhoneHeading=document.createElement('h2');\n    const contactPhonePara=document.createElement('p')\n    contactPhoneHeading.textContent='Phone';\n    contactPhonePara.textContent='(555) 555-5555';\n    contactPhoneContainer.appendChild(contactPhoneHeading)\n    contactPhoneContainer.appendChild(contactPhonePara)\n    contactDetailContainer.appendChild(contactPhoneContainer);\n\n\n    const contactEmailContainer=document.createElement('div');\n    contactEmailContainer.classList.add('contact-email-container')\n    const contactEmailHeading=document.createElement('h2');\n    const contactEmailPara=document.createElement('a');\n    contactEmailHeading.textContent='Email';\n    contactEmailPara.textContent='contact@dineandwine.com'\n    contactEmailPara.setAttribute('href','mailto:contact@dineandwine.com');\n    contactEmailContainer.appendChild(contactEmailHeading);\n    contactEmailContainer.appendChild(contactEmailPara)\n    contactDetailContainer.appendChild(contactEmailContainer);\n    \n\n\n    const contactHoursContainer=document.createElement('div')\n    contactHoursContainer.classList.add('contact-hours-container')\n    const contactHoursHeading=document.createElement('h2')\n    const contactHoursPara=document.createElement('p')\n    contactHoursHeading.textContent='Opening Hours';\n    contactHoursPara.innerHTML='Monday - Friday: 11:00 AM to 10:00 PM <br> Saturday - Sunday: 12:00 PM to 11:00 PM';\n    contactHoursContainer.appendChild(contactHoursHeading);\n    contactHoursContainer.appendChild(contactHoursPara)\n    contactDetailContainer.appendChild(contactHoursContainer);\n\n\n    content.appendChild(contactDetailContainer);\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactElementCreation);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   indicateCurrentSite: () => (/* binding */ indicateCurrentSite)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nconst content=document.getElementById('content')\n\nfunction indexElementCreation(){\n    document.body.removeAttribute('class')\n\n    //for setting an indicator ie currently at home.\n    const home=document.querySelector('.home')\n    indicateCurrentSite(home)\n\n    const homeContainer=document.createElement('div');\n    homeContainer.classList.add('home-container');\n\n    const title=document.createElement('h1');\n    const tagline=document.createElement('p');\n    const menuBtn=document.createElement('button');\n\n    title.classList.add('home-title');\n    tagline.classList.add('home-tagline');\n    menuBtn.classList.add('menu-btn')\n\n    title.textContent='Dine & Wine';\n    tagline.textContent='-Indulge in Culinary Artistry, Sip the Elixir of Joy!';\n    menuBtn.textContent='Our Menu';\n\n    menuBtn.addEventListener('click',()=>{\n        wipingFunction()\n        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    });\n\n    homeContainer.appendChild(title)\n    homeContainer.appendChild(tagline)\n    homeContainer.append(menuBtn)\n\n    content.appendChild(homeContainer)\n\n\n}\nindexElementCreation()\n\nfunction wipingFunction(){\n    document.body.classList.add('darker-background');\n\n    [...content.childNodes].forEach(item=>{\n        content.removeChild(item)\n    })\n}\n\n\n\nfunction indicateCurrentSite(value){\n    const home=document.querySelector('.home')\n    const menu=document.querySelector('.menu')\n    const contact=document.querySelector('.contact')\n    const aboutus=document.querySelector('.about')\n    home.classList.remove('current-site');\n    menu.classList.remove('current-site');\n    contact.classList.remove('current-site');\n    aboutus.classList.remove('current-site');\n    value.classList.add('current-site')\n}\n\ndocument.querySelector('.home').addEventListener('click',()=>{\n    wipingFunction(); \n    indexElementCreation()\n})\ndocument.querySelector('.menu').addEventListener('click',()=>{\n    wipingFunction(); \n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\ndocument.querySelector('.contact').addEventListener('click',()=>{\n    wipingFunction();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n})\ndocument.querySelector('.about').addEventListener('click',()=>{\n    wipingFunction();\n    (0,_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wipingFunction);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction menuElementCreation(){\n    const content=document.getElementById('content')\n\n    const menu=document.querySelector('.menu')\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.indicateCurrentSite)(menu)\n\n\n\n    const foodContainer=document.createElement('div');\n    foodContainer.classList.add('food-container')\n    const wineContainer=document.createElement('div');\n    wineContainer.classList.add('wine-container')\n\n\n\n    const foodHeader=document.createElement('div');\n    foodHeader.classList.add('food-header')\n    foodHeader.classList.add('menu-header')\n\n    const wineHeader=document.createElement('div');\n    wineHeader.classList.add('wine-header')\n    wineHeader.classList.add('menu-header')\n\n\n    const foodMenu=document.createElement('div');\n    foodMenu.classList.add('food-menu')\n    foodMenu.classList.add('menus-menu')\n    const wineMenu=document.createElement('div');\n    wineMenu.classList.add('wine-menu')\n    wineMenu.classList.add('menus-menu')\n\n    foodHeader.textContent='Food';\n    wineHeader.textContent='Wine'\n\n    \n    foodContainer.appendChild(foodHeader)\n    foodContainer.appendChild(foodMenu)\n\n    wineContainer.appendChild(wineHeader)\n    wineContainer.appendChild(wineMenu)\n\n\n    content.appendChild(foodContainer)\n    content.appendChild(wineContainer)\n\n    // Creating food menu \n\n\n    const foodItemContainer=document.createElement('div');\n    foodItemContainer.classList.add('food-item-container')\n\n\n\n    for(let i=1;i<=6;i++){\n        const foodItem =document.createElement('div');\n        foodItem.classList.add(`foodItem${i}`)\n\n        foodItem.classList.add(`foodItem`)\n        foodItemContainer.appendChild(foodItem)\n    }\n   \n    foodMenu.appendChild(foodItemContainer);\n\n   \n    \n\n    const foodItem1=document.querySelector('.foodItem1');\n    const food1Heading=document.createElement('h2');\n    food1Heading.textContent='Appetizers';\n    const foodpara11=document.createElement('p')\n    const foodpara12=document.createElement('p')\n    const foodpara13=document.createElement('p')\n    foodpara11.textContent='Bruschetta with Tomato and Basil';\n    foodpara12.textContent='Grilled Shrimp Skewers with Garlic Butter'\n    foodpara13.textContent='Stuffed Mushrooms with Herb Cream Cheese'\n    foodItem1.appendChild(food1Heading);\n    foodItem1.appendChild(foodpara11)\n    foodItem1.appendChild(foodpara12)\n    foodItem1.appendChild(foodpara13)\n\n\n    const foodItem2=document.querySelector('.foodItem2');\n    const food2Heading=document.createElement('h2');\n    food2Heading.textContent='Soups and Salads';\n    const foodpara21=document.createElement('p')\n    const foodpara22=document.createElement('p')\n    const foodpara23=document.createElement('p')\n    foodpara21.textContent='Classic French Onion Soup';\n    foodpara22.textContent='Caesar Salad with Homemade Dressing';\n    foodpara23.textContent='Quinoa and Grilled Vegetable Salad';\n    foodItem2.appendChild(food2Heading);\n    foodItem2.appendChild(foodpara21);\n    foodItem2.appendChild(foodpara22)\n    foodItem2.appendChild(foodpara23)\n\n\n\n    const foodItem3=document.querySelector('.foodItem3');\n    const food3Heading=document.createElement('h2');\n    food3Heading.textContent='Meat';\n    foodItem3.appendChild(food3Heading);\n    const foodpara31=document.createElement('p')\n    const foodpara32=document.createElement('p')\n    const foodpara33=document.createElement('p')\n    foodpara31.textContent='Pan-Seared Filet Mignon with Red Wine Reduction'\n    foodpara32.textContent='Herb-Roasted Chicken with Lemon-Thyme Sauce'\n    foodpara33.textContent='Grilled Lamb Chops with Mint Pesto'\n    foodItem3.appendChild(foodpara31)\n    foodItem3.appendChild(foodpara32)\n    foodItem3.appendChild(foodpara33)\n\n\n\n\n    const foodItem4=document.querySelector('.foodItem4');\n    const food4Heading=document.createElement('h2');\n    food4Heading.textContent='Seafood';\n    foodItem4.appendChild(food4Heading);\n    const foodpara41=document.createElement('p')\n    const foodpara42=document.createElement('p')\n    const foodpara43=document.createElement('p')\n    foodpara41.textContent='Grilled Salmon with Dill Sauce'\n    foodpara42.textContent='Lobster Ravioli in a Creamy Tomato Sauce'\n    foodpara43.textContent='Seared Scallops with Citrus Beurre Blanc'\n    foodItem4.appendChild(foodpara41)\n    foodItem4.appendChild(foodpara42)\n    foodItem4.appendChild(foodpara43)\n\n\n\n    const foodItem5=document.querySelector('.foodItem5');\n    const food5Heading=document.createElement('h2');\n    food5Heading.textContent='Pasta and Risotto';\n    foodItem5.appendChild(food5Heading)\n    const foodpara51=document.createElement('p')\n    const foodpara52=document.createElement('p')\n    const foodpara53=document.createElement('p')\n    foodpara51.textContent='Spaghetti Carbonara with Pancetta and Egg'\n    foodpara52.textContent='Shrimp and Asparagus Risotto'\n    foodpara53.textContent='Penne with Vodka Sauce and Prosciutto'\n    foodItem5.appendChild(foodpara51)\n    foodItem5.appendChild(foodpara52)\n    foodItem5.appendChild(foodpara53)\n\n\n\n    const foodItem6=document.querySelector('.foodItem6');\n    const food6Heading=document.createElement('h2');\n    food6Heading.textContent='Desserts';\n    foodItem6.appendChild(food6Heading)\n    const foodpara61=document.createElement('p')\n    const foodpara62=document.createElement('p')\n    const foodpara63=document.createElement('p')\n    foodpara61.textContent='Decadent Chocolate Fondue with Fresh Fruit'\n    foodpara62.textContent='Crème Brûlée with a Hint of Vanilla'\n    foodpara63.textContent='Tiramisu with Espresso and Mascarpone'\n    foodItem6.appendChild(foodpara61)\n    foodItem6.appendChild(foodpara62)\n    foodItem6.appendChild(foodpara63)\n\n    // creating wine menu\n\n    const wineItemContainer=document.createElement('div');\n    wineItemContainer.classList.add('food-item-container')\n\n\n    for(let i=1;i<=6;i++){\n        const wineItem =document.createElement('div');\n        wineItem.classList.add(`wineItem${i}`)\n\n        wineItem.classList.add(`wineItem`)\n        wineItemContainer.appendChild(wineItem)\n    }\n   \n    wineMenu.appendChild(wineItemContainer);\n\n    const wineItem1=document.querySelector('.wineItem1');\n    const wine1Heading=document.createElement('h2');\n    wine1Heading.textContent='Red Wines';\n    const winepara11=document.createElement('p')\n    const winepara12=document.createElement('p')\n    const winepara13=document.createElement('p')\n    winepara11.textContent='Cabernet Sauvignon';\n    winepara12.textContent='Merlot'\n    winepara13.textContent='Pinot Noir'\n    wineItem1.appendChild(wine1Heading);\n    wineItem1.appendChild(winepara11)\n    wineItem1.appendChild(winepara12)\n    wineItem1.appendChild(winepara13)\n\n    const wineItem2=document.querySelector('.wineItem2');\n    const wine2Heading=document.createElement('h2');\n    wine2Heading.textContent='White Wines';\n    const winepara21=document.createElement('p')\n    const winepara22=document.createElement('p')\n    const winepara23=document.createElement('p')\n    winepara21.textContent='Chardonnay';\n    winepara22.textContent='Sauvignon Blanc'\n    winepara23.textContent='Pinot Grigio'\n    wineItem2.appendChild(wine2Heading);\n    wineItem2.appendChild(winepara21)\n    wineItem2.appendChild(winepara22)\n    wineItem2.appendChild(winepara23)\n\n    const wineItem3=document.querySelector('.wineItem3');\n    const wine3Heading=document.createElement('h2');\n    wine3Heading.textContent='Rosé Wines:';\n    const winepara31=document.createElement('p')\n    const winepara32=document.createElement('p')\n    const winepara33=document.createElement('p')\n    winepara31.textContent='Provence Rosé';\n    winepara32.textContent='White Zinfandel'\n    winepara33.textContent='Syrah Rosé'\n    wineItem3.appendChild(wine3Heading);\n    wineItem3.appendChild(winepara31)\n    wineItem3.appendChild(winepara32)\n    wineItem3.appendChild(winepara33)\n\n    const wineItem4=document.querySelector('.wineItem4');\n    const wine4Heading=document.createElement('h2');\n    wine4Heading.textContent='Sparkling Wines';\n    const winepara41=document.createElement('p')\n    const winepara42=document.createElement('p')\n    const winepara43=document.createElement('p')\n    winepara41.textContent='Champagne';\n    winepara42.textContent='Prosecco'\n    winepara43.textContent='Cava'\n    wineItem4.appendChild(wine4Heading);\n    wineItem4.appendChild(winepara41)\n    wineItem4.appendChild(winepara42)\n    wineItem4.appendChild(winepara43)\n\n    const wineItem5=document.querySelector('.wineItem5');\n    const wine5Heading=document.createElement('h2');\n    wine5Heading.textContent='Dessert Wines';\n    const winepara51=document.createElement('p')\n    const winepara52=document.createElement('p')\n    const winepara53=document.createElement('p')\n    winepara51.textContent='Port';\n    winepara52.textContent='Sauternes'\n    winepara53.textContent='Moscato d\\'Asti'\n    wineItem5.appendChild(wine5Heading);\n    wineItem5.appendChild(winepara51)\n    wineItem5.appendChild(winepara52)\n    wineItem5.appendChild(winepara53)\n\n    const wineItem6=document.querySelector('.wineItem6');\n    const wine6Heading=document.createElement('h2');\n    wine6Heading.textContent='Wine Flights';\n    const winepara61=document.createElement('p')\n    winepara61.textContent='Customizable wine flights featuring a selection of wines from different regions or grape varieties.';\n    wineItem6.appendChild(wine6Heading);\n    wineItem6.appendChild(winepara61)\n\n\n\n    \n    \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuElementCreation);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/food.jpeg":
/*!***********************!*\
  !*** ./src/food.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65a0e94704e02ece0056.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/food.jpeg?");

/***/ }),

/***/ "./src/restaurantBackgroundImg.jpeg":
/*!******************************************!*\
  !*** ./src/restaurantBackgroundImg.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bf745969693dba1fb5c.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurantBackgroundImg.jpeg?");

/***/ }),

/***/ "./src/wine.png":
/*!**********************!*\
  !*** ./src/wine.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bef334697b021d0a949a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/wine.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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