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

	'use strict';

	var _dom = __webpack_require__(1);

	var _plugin = __webpack_require__(3);

	var _plugin2 = __webpack_require__(5);

	// test $ (as custom DOM module)
	// and in the DOM module the kebab-case module here.
	(0, _dom.$)(".test1", {
	  plugins: {
	    plugin1: {
	      message: "first plugin message."
	    }
	  }
	}).addClass("camelCaseTest");

	(0, _dom.$)(".test2", {
	  plugins: {
	    plugin2: {
	      message: "second plugin message."
	    }
	  }
	}).addClass("MyCamelCaseTest_123");

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
	  function DOM(selector, options) {
	    var _this = this;

	    _classCallCheck(this, DOM);

	    this.elements = Array.from(document.querySelectorAll(selector));
	    this.length = this.elements.length;
	    this.options = options || {};

	    Object.assign(this, this.elements);

	    // call a plugin
	    if (this.options.plugins) {
	      (function () {
	        var plugins = _this.options.plugins;

	        Object.getOwnPropertyNames(plugins).forEach(function (name) {
	          if (typeof this[name] === "function") {
	            this[name](plugins[name]);
	          } else {
	            console.log("unable to find plugin: " + name);
	          }
	        }, _this);
	      })();
	    }
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

	exports.default = DOM;
	var $ = exports.$ = function $(selector, options) {
	  return new DOM(selector, options);
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.plugin1 = plugin1;

	var _pluginRegister = __webpack_require__(4);

	var _pluginRegister2 = _interopRequireDefault(_pluginRegister);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function plugin1(options) {
	  console.log(this);
	  console.log(options.message || "no msg provided");
	}

	(0, _pluginRegister2.default)("plugin1", plugin1);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(1);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pluginRegister = function pluginRegister(name, init) {
	  _dom2.default.prototype[name] = init;
	};

	exports.default = pluginRegister;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.plugin2 = plugin2;

	var _pluginRegister = __webpack_require__(4);

	var _pluginRegister2 = _interopRequireDefault(_pluginRegister);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function plugin2(options) {
	  console.log(options.message || "no msg provided");
	}

	(0, _pluginRegister2.default)("plugin2", plugin2);

/***/ }
/******/ ]);