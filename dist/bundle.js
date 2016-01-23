/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _dom = __webpack_require__(1);

	(0, _dom.$)(".test0").addClass("FirstCharCamelCaseTest");
	(0, _dom.$)(".test1").addClass("camelCaseTest");
	(0, _dom.$)(".test2").addClass("snake_case_test");
	(0, _dom.$)(".test3").addClass("kebab-case-test");
	(0, _dom.$)(".test4").addClass("snake_and-kebabAndCamelCaseTest");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // http://www.ericponto.com/blog/2014/10/05/es6-dom-library/

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$ = undefined;

	var _kebabCase = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DOM = function () {
	  function DOM(selector) {
	    _classCallCheck(this, DOM);

	    this.elements = Array.from(document.querySelectorAll(selector));
	    this.length = this.elements.length;

	    Object.assign(this, this.elements);
	  }

	  _createClass(DOM, [{
	    key: "each",
	    value: function each(callback) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = Array.from(this)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var el = _step.value;

	          callback.call(el);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "addClass",
	    value: function addClass(className) {
	      var kebabClassName = (0, _kebabCase.kebabCase)(className);
	      this.each(function () {
	        this.classList.add(kebabClassName);
	      });
	    }
	  }]);

	  return DOM;
	}();

	var $ = exports.$ = function $(selector) {
	  return new DOM(selector);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var kebabCase = exports.kebabCase = function kebabCase(string) {
	  function upperToHyphenLower(match) {
	    if (string.indexOf(match) === 0) {
	      return match.toLowerCase();
	    }
	    return "-" + match.toLowerCase();
	  }

	  return string.replace(/_/g, "-").replace(/[A-Z]+/g, upperToHyphenLower).toLowerCase();
	};

/***/ }
/******/ ]);