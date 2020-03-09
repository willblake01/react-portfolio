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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/SocialMedia.js
var __jsx = external_react_default.a.createElement;


const SocialMedia = props => __jsx("div", {
  className: "social-media"
}, __jsx("a", {
  href: "https://www.facebook.com/william.blake.3348",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx("img", {
  src: "https://res.cloudinary.com/willblake01/image/upload/v1538510161/react-portfolio/facebook.svg",
  className: "social-icon",
  alt: "facebook"
})), __jsx("a", {
  href: "https://twitter.com/trill_will",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx("img", {
  src: "https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/twitter.svg",
  className: "social-icon",
  alt: "twitter"
})), __jsx("a", {
  href: "https://www.instagram.com/totes_gnar/",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx("img", {
  src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/instagram.svg",
  className: "social-icon",
  alt: "instagram"
})), __jsx("a", {
  href: "https://plus.google.com/u/0/104700050103420921019",
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx("img", {
  src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/google.svg",
  className: "social-icon",
  alt: "google"
})));

/* harmony default export */ var components_SocialMedia = (SocialMedia);
// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;



class Footer_Footer extends external_react_default.a.Component {
  render() {
    return Footer_jsx("footer", null, Footer_jsx("div", {
      className: "container"
    }, Footer_jsx(components_SocialMedia, null), "Copyright \xA9 2018 William Blake"));
  }

}

/* harmony default export */ var components_Footer = __webpack_exports__["a"] = (Footer_Footer);

/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/ReactHeader.js
var ReactHeader = __webpack_require__("sh0R");

// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__("zYID");

// EXTERNAL MODULE: ./components/Sidebar.js
var Sidebar = __webpack_require__("hAPS");

// EXTERNAL MODULE: ./components/Footer.js + 1 modules
var Footer = __webpack_require__("8lYe");

// CONCATENATED MODULE: ./components/Contact.js
var __jsx = external_react_default.a.createElement;






class Contact_Contact extends external_react_default.a.Component {
  render() {
    return __jsx("div", {
      className: "masthead"
    }, __jsx(ReactHeader["a" /* default */], null), __jsx(Navbar["a" /* default */], null), __jsx("div", {
      id: "main-container",
      className: "container"
    }, __jsx("section", {
      className: "main-section"
    }, __jsx("h1", null, "Contact"), __jsx("form", {
      id: "contact-form"
    }, __jsx("ul", null, __jsx("li", null, __jsx("label", {
      htmlFor: "name"
    }, "Name"), __jsx("input", {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "John Smith",
      required: "required"
    })), __jsx("li", null, __jsx("label", {
      htmlFor: "email"
    }, "Email"), __jsx("input", {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "example@gmail.com",
      required: "required"
    })), __jsx("li", null, __jsx("label", {
      htmlFor: "message"
    }, "Message"), __jsx("textarea", {
      id: "message",
      name: "message",
      required: "required"
    }))), __jsx("input", {
      type: "submit"
    }))), __jsx(Sidebar["a" /* default */], null)), __jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var components_Contact = (Contact_Contact);
// CONCATENATED MODULE: ./pages/contact.js

var contact_jsx = external_react_default.a.createElement;


const ContactPage = props => contact_jsx(external_react_default.a.Fragment, null, contact_jsx(components_Contact, null));

/* harmony default export */ var contact = __webpack_exports__["default"] = (ContactPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hAPS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "sidebar"
    }, __jsx("div", {
      id: "connect"
    }, __jsx("h2", null, "Connect with Me"), __jsx("a", {
      href: "https://github.com/willblake01",
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx("img", {
      src: "https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/github-128.png",
      className: "social",
      alt: "GitHub"
    })), __jsx("a", {
      href: "https://www.linkedin.com/in/william-blake/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx("img", {
      src: "https://res.cloudinary.com/willblake01/image/upload/v1538510163/react-portfolio/linkedin-128.png",
      className: "social",
      alt: "LinkedIn"
    })), __jsx("a", {
      href: "https://stackoverflow.com/users/8656082/william-blake?tab=profile",
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx("img", {
      src: "https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/stackoverflow-128.png",
      className: "social",
      alt: "Stack Overflow"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ "sh0R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class ReactHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "App"
    }, __jsx("header", {
      className: "App-header"
    }, __jsx("img", {
      src: "https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/logo.svg",
      className: "App-logo",
      alt: "logo"
    }), __jsx("h1", {
      className: "App-title"
    }, "Welcome to My React Portfolio")));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (ReactHeader);

/***/ }),

/***/ "zYID":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("header", {
      id: "masthead-navbar"
    }, __jsx("div", {
      className: "container"
    }, __jsx("a", {
      href: "index.html",
      id: "logo"
    }, "William Blake"), __jsx("nav", null, __jsx("a", {
      href: "/about"
    }, "About"), __jsx("a", {
      href: "/portfolio"
    }, "Portfolio"), __jsx("a", {
      href: "/contact"
    }, "Contact"))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ })

/******/ });