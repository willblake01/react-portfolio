module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReactHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactHeader, _React$Component);

  function ReactHeader() {
    _classCallCheck(this, ReactHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactHeader).apply(this, arguments));
  }

  _createClass(ReactHeader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "App-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/logo.svg",
        className: "App-logo",
        alt: "logo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "App-title"
      }, "Welcome to My React Portfolio")));
    }
  }]);

  return ReactHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ReactHeader);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        id: "masthead-navbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "index.html",
        id: "logo"
      }, "William Blake"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/about"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/portfolio"
      }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/contact"
      }, "Contact"))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "sidebar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "connect"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Connect with Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/willblake01",
        target: "_blank",
        rel: "noopener noreferrer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/github-128.png",
        className: "social",
        alt: "GitHub"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/william-blake/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510163/react-portfolio/linkedin-128.png",
        className: "social",
        alt: "LinkedIn"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://stackoverflow.com/users/8656082/william-blake?tab=profile",
        target: "_blank",
        rel: "noopener noreferrer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/stackoverflow-128.png",
        className: "social",
        alt: "Stack Overflow"
      }))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/ReactHeader.js
var ReactHeader = __webpack_require__(1);

// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Sidebar.js
var Sidebar = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Portfolio.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Portfolio_Portfolio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Portfolio).apply(this, arguments));
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "masthead"
      }, external_react_default.a.createElement(ReactHeader["a" /* default */], null), external_react_default.a.createElement(Navbar["a" /* default */], null), external_react_default.a.createElement("div", {
        id: "main-container",
        className: "container"
      }, external_react_default.a.createElement("section", {
        className: "main-section"
      }, external_react_default.a.createElement("h1", null, "Portfolio"), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://range-front.herokuapp.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510166/react-portfolio/range-front.png",
        alt: "Range Front"
      })), external_react_default.a.createElement("h3", null, "Range Front")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://hotspotr.herokuapp.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/hotspotr.png",
        alt: "Hot Spotr"
      })), external_react_default.a.createElement("h3", null, "Hot Spotr")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://bit-bay-group.github.io/BitBay/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/bitbay.png",
        alt: "Bit Bay"
      })), external_react_default.a.createElement("h3", null, "BitBay")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://memory-client.herokuapp.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1560441472/react-portfolio/memory.png",
        alt: "Memory"
      })), external_react_default.a.createElement("h3", null, "Memory")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://news-scraper-fullstack.herokuapp.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/news-scraper.png",
        alt: "News Scraper"
      })), external_react_default.a.createElement("h3", null, "News Scraper")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://burger-time-fullstack.herokuapp.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/burger-time.png",
        alt: "Burger Time"
      })), external_react_default.a.createElement("h3", null, "Burger Time")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://friend-finder-full-stack.herokuapp.com/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/friend-finder.png",
        alt: "Friend Finder"
      })), external_react_default.a.createElement("h3", null, "Friend Finder")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://github.com/willblake01/Bamazon",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/bamazon.png",
        alt: "Bamazon"
      })), external_react_default.a.createElement("h3", null, "Bamazon")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://github.com/willblake01/liri-bot",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/liri-bot.png",
        alt: "Liribot"
      })), external_react_default.a.createElement("h3", null, "LiriBot")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://willblake01.github.io/train-time/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/train-time.png",
        alt: "Train Time"
      })), external_react_default.a.createElement("h3", null, "Train Time")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://willblake01.github.io/trivia/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/trivia.png",
        alt: "Trivia"
      })), external_react_default.a.createElement("h3", null, "Trivia")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://willblake01.github.io/crystal-collector/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510161/react-portfolio/crystal-collector.png",
        alt: "Crystal Collector"
      })), external_react_default.a.createElement("h3", null, "Crystal Collector")), external_react_default.a.createElement("div", {
        className: "work"
      }, external_react_default.a.createElement("a", {
        href: "https://willblake01.github.io/hangman/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/hangman.png",
        alt: "Hangman"
      })), external_react_default.a.createElement("h3", null, "Hangman"))), external_react_default.a.createElement(Sidebar["a" /* default */], null)), external_react_default.a.createElement(Footer["a" /* default */], null));
    }
  }]);

  return Portfolio;
}(external_react_default.a.Component);

/* harmony default export */ var components_Portfolio = (Portfolio_Portfolio);
// CONCATENATED MODULE: ./pages/portfolio.js



var portfolio_PortfolioPage = function PortfolioPage(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_Portfolio, null));
};

/* harmony default export */ var portfolio = __webpack_exports__["default"] = (portfolio_PortfolioPage);

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/SocialMedia.js


var SocialMedia_SocialMedia = function SocialMedia(props) {
  return external_react_default.a.createElement("div", {
    className: "social-media"
  }, external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/william.blake.3348",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    src: "https://res.cloudinary.com/willblake01/image/upload/v1538510161/react-portfolio/facebook.svg",
    className: "social-icon",
    alt: "facebook"
  })), external_react_default.a.createElement("a", {
    href: "https://twitter.com/trill_will",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    src: "https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/twitter.svg",
    className: "social-icon",
    alt: "twitter"
  })), external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/totes_gnar/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/instagram.svg",
    className: "social-icon",
    alt: "instagram"
  })), external_react_default.a.createElement("a", {
    href: "https://plus.google.com/u/0/104700050103420921019",
    target: "_blank",
    rel: "noopener noreferrer"
  }, external_react_default.a.createElement("img", {
    src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/google.svg",
    className: "social-icon",
    alt: "google"
  })));
};

/* harmony default export */ var components_SocialMedia = (SocialMedia_SocialMedia);
// CONCATENATED MODULE: ./components/Footer.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", null, external_react_default.a.createElement("div", {
        className: "container"
      }, "Copyright \xA9 2018 William Blake"), external_react_default.a.createElement(components_SocialMedia, null));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = __webpack_exports__["a"] = (Footer_Footer);

/***/ })

/******/ });