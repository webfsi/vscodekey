/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./common.js\");\n\nwindow.addEventListener('load', function () {\n  (0,_common__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5qcz9kMTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21tb25TY3JpcHRzIGZyb20gJy4vY29tbW9uJztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICBjb21tb25TY3JpcHRzKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./common.js":
/*!*******************!*\
  !*** ./common.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_setFullHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/setFullHeight */ \"./helpers/setFullHeight.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  (0,_helpers_setFullHeight__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); //Set VH variable for mobile safari 100VH, use scss mixin fullheight()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbW1vbi5qcz82N2Q1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXRGdWxsSGVpZ2h0IGZyb20gJy4vaGVscGVycy9zZXRGdWxsSGVpZ2h0JztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHNldEZ1bGxIZWlnaHQoKTsgLy9TZXQgVkggdmFyaWFibGUgZm9yIG1vYmlsZSBzYWZhcmkgMTAwVkgsIHVzZSBzY3NzIG1peGluIGZ1bGxoZWlnaHQoKVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common.js\n");

/***/ }),

/***/ "./helpers/setFullHeight.js":
/*!**********************************!*\
  !*** ./helpers/setFullHeight.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\n* Set VH variable for mobile safari 100VH. Use scss mixin fullheight().\n* @see https://wiki.bsgdigital.com/ru/onboarding/developer/front-end/template/setFullHeight-js\n*/\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var getWindowHeight = function getWindowHeight() {\n    if (document) {\n      var windowHeight = document.documentElement.clientHeight;\n      var vh = windowHeight * 0.01;\n      document.documentElement.style.setProperty('--vh', \"\".concat(vh, \"px\"));\n    }\n  };\n\n  getWindowHeight();\n  window.addEventListener('resize', function () {\n    return getWindowHeight();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL3NldEZ1bGxIZWlnaHQuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2hlbHBlcnMvc2V0RnVsbEhlaWdodC5qcz83MWM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBTZXQgVkggdmFyaWFibGUgZm9yIG1vYmlsZSBzYWZhcmkgMTAwVkguIFVzZSBzY3NzIG1peGluIGZ1bGxoZWlnaHQoKS5cbiogQHNlZSBodHRwczovL3dpa2kuYnNnZGlnaXRhbC5jb20vcnUvb25ib2FyZGluZy9kZXZlbG9wZXIvZnJvbnQtZW5kL3RlbXBsYXRlL3NldEZ1bGxIZWlnaHQtanNcbiovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICB2YXIgZ2V0V2luZG93SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0V2luZG93SGVpZ2h0KCkge1xuICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICB2YXIgdmggPSB3aW5kb3dIZWlnaHQgKiAwLjAxO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgXCJcIi5jb25jYXQodmgsIFwicHhcIikpO1xuICAgIH1cbiAgfTtcblxuICBnZXRXaW5kb3dIZWlnaHQoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93SGVpZ2h0KCk7XG4gIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/setFullHeight.js\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;