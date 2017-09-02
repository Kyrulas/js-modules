/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = displayResult;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(1);


function displayResult(data){
	__WEBPACK_IMPORTED_MODULE_0__view__["b" /* result */].innerHTML = data;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firstNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return secondNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return result; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compute__ = __webpack_require__(2);


//Inputs
var labelFirst = document.createElement("label");
labelFirst.setAttribute('for','firstNum');
labelFirst.innerHTML = "First Number";
document.body.appendChild(labelFirst);


var firstNum = document.createElement("input");
firstNum.setAttribute('type', 'text');
firstNum.setAttribute('id', 'firstNum');
document.body.appendChild(firstNum);
firstNum.setAttribute("style", "padding:10px;font-size: 16px; margin:20px;");


var labelSecond = document.createElement("label");
labelSecond.setAttribute('for','secondNum')
labelSecond.innerHTML = "Second Number";
document.body.appendChild(labelSecond);

var secondNum = document.createElement("input");
secondNum.setAttribute('type', 'text');
secondNum.setAttribute('id', 'fsecondNum');
document.body.appendChild(secondNum);
secondNum.setAttribute("style", "padding: 10px; font-size: 16px; margin:20px;");


//create div
var container = document.createElement("div");
container.setAttribute("style", "margin: 50px")
document.body.appendChild(container);

//Buttons
var addBtn = document.createElement("button");
addBtn.innerHTML = "+";
container.appendChild(addBtn);
addBtn.setAttribute("style", "background-color: red; width: 50px; height: 50px; font-size: 30px; margin:10px;");

var subBtn = document.createElement("button");
subBtn.innerHTML = "-";
container.appendChild(subBtn);
subBtn.setAttribute("style", "background-color: green; width: 50px; height: 50px; font-size: 30px; margin:10px;");

var mulBtn = document.createElement("button");
mulBtn.innerHTML = "*";
container.appendChild(mulBtn);
mulBtn.setAttribute("style", "background-color: blue; width: 50px; height: 50px; font-size: 30px; margin:10px;");

var divideBtn = document.createElement("button");
divideBtn.innerHTML = "/";
container.appendChild(divideBtn);
divideBtn.setAttribute("style", "background-color: purple; width: 50px; height: 50px; font-size: 30px; margin:10px;");

//Result
var result = document.createElement("div");
document.body.appendChild(result);
result.setAttribute("style", "width: 100px; padding: 50px; font-size: 50px; height: 100px; background-color: yellow; margin: 0 auto;");


addBtn.onclick = __WEBPACK_IMPORTED_MODULE_0__compute__["a" /* default */].add;

subBtn.onclick = __WEBPACK_IMPORTED_MODULE_0__compute__["a" /* default */].sub;

mulBtn.onclick = __WEBPACK_IMPORTED_MODULE_0__compute__["a" /* default */].mul;

divideBtn.onclick = __WEBPACK_IMPORTED_MODULE_0__compute__["a" /* default */].divide;






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);



function add(){
	Object(__WEBPACK_IMPORTED_MODULE_1__app__["default"])(Number(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* firstNum */].value) + Number(__WEBPACK_IMPORTED_MODULE_0__view__["c" /* secondNum */].value));
}
function sub(){
	Object(__WEBPACK_IMPORTED_MODULE_1__app__["default"])(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* firstNum */].value - __WEBPACK_IMPORTED_MODULE_0__view__["c" /* secondNum */].value);
}
function  mul(){
	Object(__WEBPACK_IMPORTED_MODULE_1__app__["default"])(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* firstNum */].value * __WEBPACK_IMPORTED_MODULE_0__view__["c" /* secondNum */].value);
}
function divide(){
	Object(__WEBPACK_IMPORTED_MODULE_1__app__["default"])(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* firstNum */].value / __WEBPACK_IMPORTED_MODULE_0__view__["c" /* secondNum */].value);
}

/* harmony default export */ __webpack_exports__["a"] = ({
	add : add,
	sub : sub,
	mul : mul,
	divide : divide
});


/***/ })
/******/ ]);