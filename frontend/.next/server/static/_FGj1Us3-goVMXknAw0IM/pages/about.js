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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


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

/***/ "Juyh":
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

// CONCATENATED MODULE: ./components/ProfilePic.js
var __jsx = external_react_default.a.createElement;


const ProfilePic = props => __jsx("img", {
  className: `profile-image ${props.unique}`,
  src: "https://res.cloudinary.com/willblake01/image/upload/v1538510165/react-portfolio/profile.png",
  alt: "Profile Pic"
});

/* harmony default export */ var components_ProfilePic = (ProfilePic);
// CONCATENATED MODULE: ./components/About.js
var About_jsx = external_react_default.a.createElement;







class About_About extends external_react_default.a.Component {
  render() {
    return About_jsx("div", {
      className: "masthead"
    }, About_jsx(ReactHeader["a" /* default */], null), About_jsx(Navbar["a" /* default */], null), About_jsx("div", {
      id: "main-container",
      className: "container"
    }, About_jsx("section", {
      className: "main-section"
    }, About_jsx("h1", null, "About Me"), About_jsx(components_ProfilePic, null), About_jsx("p", {
      className: "bio"
    }, " William Blake is a Web Developer with 12 years of experience in Business Administration. He was born and raised in Austin, TX but enjoys traveling and the great diversity of the United States. He holds a Full-Stack Web Developer certification from The University of Texas and received a BBA in Finance from Texas State University in 2006. He most enjoyed his time working for an Entrepreneur running two web stores, which furthered his passion for technology and design. He was able to marry skills in coding, graphics editing, Management, Finance, and Business Administration. The demand to approach issues from different perspectives and wear many hats at a small business quenched his thirst as an ENTP, which rarely pass up the opportunity to learn something new. It was during his time there he decided to take the necessary steps to switch careers to a more fulfilling and dynamic field."), About_jsx("br", null), About_jsx("p", {
      className: "bio"
    }, "When he isn\u2019t making computers dance, he spends time playing guitar, learning Spanish, running marathons, and trying not to fall down on the soccer field. He is currently working on coding a website to showcase his many hobbies. You can reach him at willblakebooking@gmail.com or on Twitter at @trill_will."), About_jsx(Footer["a" /* default */], null)), About_jsx(Sidebar["a" /* default */], null)));
  }

}

/* harmony default export */ var components_About = (About_About);
// CONCATENATED MODULE: ./pages/about.js

var about_jsx = external_react_default.a.createElement;


const AboutPage = props => about_jsx(external_react_default.a.Fragment, null, about_jsx(components_About, null));

/* harmony default export */ var about = __webpack_exports__["default"] = (AboutPage);

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