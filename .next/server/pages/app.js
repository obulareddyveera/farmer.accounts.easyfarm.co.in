module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hooks/useBreakPoints.js":
/*!*********************************!*\
  !*** ./hooks/useBreakPoints.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "lodash.throttle");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);




const getDeviceConfig = width => {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 720) {
    return "sm";
  } else if (width >= 720 && width < 1024) {
    return "md";
  } else if (width >= 1024) {
    return "lg";
  }
};

const useBreakpoint = () => {
  const {
    0: brkPnt,
    1: setBrkPnt
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    if (false) {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const calcInnerWidth = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);
  return brkPnt;
};

/* harmony default export */ __webpack_exports__["default"] = (useBreakpoint);

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_components_hnav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/components/hnav */ "./pages/client/components/hnav.js");
/* harmony import */ var _client_components_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/components/sidenav */ "./pages/client/components/sidenav.js");
/* harmony import */ var _client_container_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/container/dashboard */ "./pages/client/container/dashboard.js");
/* harmony import */ var _client_container_profiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/container/profiler */ "./pages/client/container/profiler.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../store/actions */ "./store/actions/index.js");
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const ContentSpace = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  position: relative !important;
  width: 100%;
  height: 100vh;
  margin-top: 2rem !important;
  padding: 2rem;
  @media (max-width: 720px) {
    padding: 0rem;
  }
`;

function FarmerAccounts(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_8__["getActiveSessionUser"])());
  }, []);
  const {
    session
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    return {
      session: state.Users && state.Users.session || {}
    };
  });
  const {
    picture
  } = session;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_client_components_hnav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pic: picture || "/empty_profile.jpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "mt-4",
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex",
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_client_components_sidenav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx(ContentSpace, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, process && false && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/auth/profile",
    exact: true,
    component: _client_container_profiler__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _client_container_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (FarmerAccounts);

/***/ }),

/***/ "./pages/client/components/hnav.js":
/*!*****************************************!*\
  !*** ./pages/client/components/hnav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/simple-icons */ "@styled-icons/simple-icons");
/* harmony import */ var _styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\components\\hnav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PivotaltrackerLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_2__["Pivotaltracker"])`
  color: white;
  width: 2rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
  @media (max-width: 720px) {
    margin-left: 0.5rem;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  margin-bottom: 0px !important;
  margin-top: 2px !important;
`;
const ProfilePic = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
function HNav({
  pic
}) {
  return __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "navbar navbar-dark bg-dark",
    style: {
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex justify-content-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#sideMenuContent",
    "aria-controls": "sideMenuContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "d-flex justify-content-start mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(PivotaltrackerLogo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  })), __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Farmer Accounts"))), __jsx("div", {
    className: "d-flex justify-content-end mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "btn-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx(ProfilePic, {
    src: pic,
    className: "rounded-circle",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "dropdown-menu dropdown-menu-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#/auth/profile",
    className: "dropdown-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Profile"), __jsx("div", {
    class: "dropdown-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }), __jsx("button", {
    className: "dropdown-item",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "Logout"))))))));
}

/***/ }),

/***/ "./pages/client/components/sidenav.js":
/*!********************************************!*\
  !*** ./pages/client/components/sidenav.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useBreakPoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../hooks/useBreakPoints */ "./hooks/useBreakPoints.js");
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\components\\sidenav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SideMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative !important;
  width: 30%;
  height: 100vh;
  @media (max-width: 720px) {
    position: absolute !important;
    z-index: 1;
    width: 100%;
  }
`;
function SideNav() {
  const point = Object(_hooks_useBreakPoints__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx(SideMenu, {
    className: `${['xs', 'sm'].indexOf(point) > -1 ? "collapse" : "expand"}`,
    id: "sideMenuContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bg-dark p-4",
    style: {
      height: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "text-white h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Collapsed content"), __jsx("span", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Toggleable via the navbar brand."))));
}

/***/ }),

/***/ "./pages/client/container/dashboard.js":
/*!*********************************************!*\
  !*** ./pages/client/container/dashboard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\container\\dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Dashboard() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "I have been served from React Router"));
}

/***/ }),

/***/ "./pages/client/container/profiler.js":
/*!********************************************!*\
  !*** ./pages/client/container/profiler.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profiler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\container\\profiler.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function profiler() {
  const {
    users
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => {
    return {
      users: state.Users
    };
  });
  console.log("--== Users ", users);
  const {
    session
  } = users;
  return __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-sm-12 col-md-6 d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: session.picture || "./empty_profile.jpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "col-sm-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("table", {
    className: "table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Name"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, session.name)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Family Name"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, session.family_name)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Full Name"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, session.given_name)), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Email"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, session.email)))));
}

/***/ }),

/***/ "./store/actions/_breakPoints.js":
/*!***************************************!*\
  !*** ./store/actions/_breakPoints.js ***!
  \***************************************/
/*! exports provided: setBreakPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBreakPoints", function() { return setBreakPoints; });
/* harmony import */ var _types_breakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/_breakPoints */ "./store/types/_breakPoints.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const setBreakPoints = params => async dispatch => {
  try {
    const _view = _objectSpread({
      type: "large"
    }, params);

    if (innerWidth > 1007) {
      _view.type = "large";
    } else if (innerWidth > 640 && innerWidth < 1008) {
      _view.type = "medium";
    } else if (innerWidth < 641) {
      _view.type = "small";
    }

    dispatch({
      type: _types_breakPoints__WEBPACK_IMPORTED_MODULE_0__["breakPointTypes"].ON_BROWSER_RESIZE_DONE,
      payload: {
        view: _view
      }
    });
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ "./store/actions/_users.js":
/*!*********************************!*\
  !*** ./store/actions/_users.js ***!
  \*********************************/
/*! exports provided: getActiveSessionUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveSessionUser", function() { return getActiveSessionUser; });
/* harmony import */ var _types_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/_users */ "./store/types/_users.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api_service */ "./store/api_service.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getActiveSessionUser = params => async dispatch => {
  try {
    const response = await _api_service__WEBPACK_IMPORTED_MODULE_1__["apiService"].postData(_api_service__WEBPACK_IMPORTED_MODULE_1__["api"].activeSessionUser);
    dispatch({
      type: _types_users__WEBPACK_IMPORTED_MODULE_0__["usersTypes"].POST_USERS_SESSION_ACTIVE_SUCCESS,
      payload: _objectSpread({}, response)
    });
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: setBreakPoints, getActiveSessionUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_breakPoints */ "./store/actions/_breakPoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBreakPoints", function() { return _breakPoints__WEBPACK_IMPORTED_MODULE_0__["setBreakPoints"]; });

/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_users */ "./store/actions/_users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveSessionUser", function() { return _users__WEBPACK_IMPORTED_MODULE_1__["getActiveSessionUser"]; });





/***/ }),

/***/ "./store/api_service.js":
/*!******************************!*\
  !*** ./store/api_service.js ***!
  \******************************/
/*! exports provided: api, apiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiService", function() { return apiService; });
const api = {
  activeSessionUser: {
    url: "auth/users/session/active",
    method: "post"
  },
  googleLoginLink: {
    url: "api.farmer.accounts.easyfarm.co.in/",
    method: "get"
  },
  baseUrl: "api.farmer.accounts.easyfarm.co.in/",
  getProtocol: () => {
    return `${window.location.protocol}//`;
  }
};
const apiService = {
  getGoogleLoginLink: async () => {
    const url = `${api.getProtocol()}${api.googleLoginLink.url}`;
    const response = await fetch(url, {
      method: api.googleLoginLink.method,
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.json();
  },
  postData: async (apiEntity, data) => {
    try {
      const url = `${api.getProtocol()}${api.baseUrl}${apiEntity.url}`;
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("jwt")
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
      };

      if (data) {
        request.body = JSON.stringify(data);
      }

      const response = await fetch(url, request);
      return response.json();
    } catch (error) {
      return error;
    }
  }
};

/***/ }),

/***/ "./store/types/_breakPoints.js":
/*!*************************************!*\
  !*** ./store/types/_breakPoints.js ***!
  \*************************************/
/*! exports provided: breakPointTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakPointTypes", function() { return breakPointTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const breakPointTypes = {
  ON_BROWSER_RESIZE_DONE: "ON_BROWSER_RESIZE_DONE"
};

/***/ }),

/***/ "./store/types/_users.js":
/*!*******************************!*\
  !*** ./store/types/_users.js ***!
  \*******************************/
/*! exports provided: usersTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersTypes", function() { return usersTypes; });
const usersTypes = {
  POST_USERS_SESSION_ACTIVE_SUCCESS: "POST_USERS_SESSION_ACTIVE_SUCCESS"
};

/***/ }),

/***/ "@styled-icons/simple-icons":
/*!*********************************************!*\
  !*** external "@styled-icons/simple-icons" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-icons/simple-icons");

/***/ }),

/***/ "lodash.throttle":
/*!**********************************!*\
  !*** external "lodash.throttle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.throttle");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQnJlYWtQb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NsaWVudC9jb21wb25lbnRzL2huYXYuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2xpZW50L2NvbXBvbmVudHMvc2lkZW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQvY29udGFpbmVyL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jbGllbnQvY29udGFpbmVyL3Byb2ZpbGVyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvX2JyZWFrUG9pbnRzLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvX3VzZXJzLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXBpX3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvX2JyZWFrUG9pbnRzLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzL191c2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLWljb25zL3NpbXBsZS1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC50aHJvdHRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJnZXREZXZpY2VDb25maWciLCJ3aWR0aCIsInVzZUJyZWFrcG9pbnQiLCJicmtQbnQiLCJzZXRCcmtQbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhbGNJbm5lcldpZHRoIiwidGhyb3R0bGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb250ZW50U3BhY2UiLCJzdHlsZWQiLCJkaXYiLCJGYXJtZXJBY2NvdW50cyIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIlJlYWN0IiwiZ2V0QWN0aXZlU2Vzc2lvblVzZXIiLCJzZXNzaW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIlVzZXJzIiwicGljdHVyZSIsInBvc2l0aW9uIiwicHJvY2VzcyIsIlByb2ZpbGVyIiwiRGFzaGJvYXJkIiwiUGl2b3RhbHRyYWNrZXJMb2dvIiwiUGl2b3RhbHRyYWNrZXIiLCJUaXRsZSIsImgxIiwiUHJvZmlsZVBpYyIsImltZyIsIkhOYXYiLCJwaWMiLCJib3JkZXJCb3R0b20iLCJTaWRlTWVudSIsIlNpZGVOYXYiLCJwb2ludCIsInVzZUJyZWFrcG9pbnRzIiwiaW5kZXhPZiIsImhlaWdodCIsInByb2ZpbGVyIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImZhbWlseV9uYW1lIiwiZ2l2ZW5fbmFtZSIsImVtYWlsIiwic2V0QnJlYWtQb2ludHMiLCJwYXJhbXMiLCJfdmlldyIsInR5cGUiLCJicmVha1BvaW50VHlwZXMiLCJPTl9CUk9XU0VSX1JFU0laRV9ET05FIiwicGF5bG9hZCIsInZpZXciLCJlcnIiLCJyZXNwb25zZSIsImFwaVNlcnZpY2UiLCJwb3N0RGF0YSIsImFwaSIsImFjdGl2ZVNlc3Npb25Vc2VyIiwidXNlcnNUeXBlcyIsIlBPU1RfVVNFUlNfU0VTU0lPTl9BQ1RJVkVfU1VDQ0VTUyIsInVybCIsIm1ldGhvZCIsImdvb2dsZUxvZ2luTGluayIsImJhc2VVcmwiLCJnZXRQcm90b2NvbCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJnZXRHb29nbGVMb2dpbkxpbmsiLCJmZXRjaCIsImhlYWRlcnMiLCJqc29uIiwiYXBpRW50aXR5IiwiZGF0YSIsInJlcXVlc3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVkaXJlY3QiLCJyZWZlcnJlclBvbGljeSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUNqQyxNQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNmLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxHQUFHLEdBQTVCLEVBQWlDO0FBQ3RDLFdBQU8sSUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxHQUFHLElBQTVC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Z2VzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwibG9kYXNoLnRocm90dGxlXCI7XHJcblxyXG5jb25zdCBnZXREZXZpY2VDb25maWcgPSAod2lkdGgpID0+IHtcclxuICBpZiAod2lkdGggPCAzMjApIHtcclxuICAgIHJldHVybiBcInhzXCI7XHJcbiAgfSBlbHNlIGlmICh3aWR0aCA+PSAzMjAgJiYgd2lkdGggPCA3MjApIHtcclxuICAgIHJldHVybiBcInNtXCI7XHJcbiAgfSBlbHNlIGlmICh3aWR0aCA+PSA3MjAgJiYgd2lkdGggPCAxMDI0KSB7XHJcbiAgICByZXR1cm4gXCJtZFwiO1xyXG4gIH0gZWxzZSBpZiAod2lkdGggPj0gMTAyNCkge1xyXG4gICAgcmV0dXJuIFwibGdcIjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB1c2VCcmVha3BvaW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFticmtQbnQsIHNldEJya1BudF0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgIGdldERldmljZUNvbmZpZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYWxjSW5uZXJXaWR0aCA9IHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0QnJrUG50KGdldERldmljZUNvbmZpZyh3aW5kb3cuaW5uZXJXaWR0aCkpO1xyXG4gICAgfSwgMjAwKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNhbGNJbm5lcldpZHRoKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYWxjSW5uZXJXaWR0aCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gYnJrUG50O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB1c2VCcmVha3BvaW50O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBITmF2IGZyb20gXCIuL2NsaWVudC9jb21wb25lbnRzL2huYXZcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4vY2xpZW50L2NvbXBvbmVudHMvc2lkZW5hdlwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL2NsaWVudC9jb250YWluZXIvZGFzaGJvYXJkXCI7XHJcbmltcG9ydCBQcm9maWxlciBmcm9tIFwiLi9jbGllbnQvY29udGFpbmVyL3Byb2ZpbGVyXCI7XHJcbmltcG9ydCB7IGdldEFjdGl2ZVNlc3Npb25Vc2VyIH0gZnJvbSBcIi4vLi4vc3RvcmUvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgQ29udGVudFNwYWNlID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgcGFkZGluZzogMHJlbTtcclxuICB9XHJcbmA7XHJcbmZ1bmN0aW9uIEZhcm1lckFjY291bnRzKHByb3BzKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRBY3RpdmVTZXNzaW9uVXNlcigpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZXNzaW9uOiAoc3RhdGUuVXNlcnMgJiYgc3RhdGUuVXNlcnMuc2Vzc2lvbikgfHwge30sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHsgcGljdHVyZSB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhOYXYgcGljPXtwaWN0dXJlIHx8IFwiL2VtcHR5X3Byb2ZpbGUuanBlZ1wifSAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC00XCIgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICA8U2lkZU5hdiAvPlxyXG4gICAgICAgICAgPENvbnRlbnRTcGFjZT5cclxuICAgICAgICAgICAge3Byb2Nlc3MgJiYgcHJvY2Vzcy5icm93c2VyICYmIChcclxuICAgICAgICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2F1dGgvcHJvZmlsZVwiIGV4YWN0IGNvbXBvbmVudD17UHJvZmlsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db250ZW50U3BhY2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFybWVyQWNjb3VudHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUGl2b3RhbHRyYWNrZXIgfSBmcm9tIFwiQHN0eWxlZC1pY29ucy9zaW1wbGUtaWNvbnNcIjtcclxuXHJcbmNvbnN0IFBpdm90YWx0cmFja2VyTG9nbyA9IHN0eWxlZChQaXZvdGFsdHJhY2tlcilgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcclxuYDtcclxuY29uc3QgUHJvZmlsZVBpYyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhOYXYoe3BpY30pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC10b3BcIj5cclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgYmctZGFya1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3NpZGVNZW51Q29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwic2lkZU1lbnVDb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IG10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8UGl2b3RhbHRyYWNrZXJMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+RmFybWVyIEFjY291bnRzPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZVBpY1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3BpY31cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjL2F1dGgvcHJvZmlsZVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHVzZUJyZWFrcG9pbnRzIGZyb20gXCIuLy4uLy4uLy4uL2hvb2tzL3VzZUJyZWFrUG9pbnRzXCI7XHJcblxyXG5jb25zdCBTaWRlTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlTmF2KCkge1xyXG4gIGNvbnN0IHBvaW50ID0gdXNlQnJlYWtwb2ludHMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlTWVudSBjbGFzc05hbWU9e2Ake1sneHMnLCdzbSddLmluZGV4T2YocG9pbnQpID4gLTEgPyBcImNvbGxhcHNlXCI6IFwiZXhwYW5kXCJ9YH0gaWQ9XCJzaWRlTWVudUNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrIHAtNFwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaDRcIj5Db2xsYXBzZWQgY29udGVudDwvaDU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+VG9nZ2xlYWJsZSB2aWEgdGhlIG5hdmJhciBicmFuZC48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TaWRlTWVudT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PkkgaGF2ZSBiZWVuIHNlcnZlZCBmcm9tIFJlYWN0IFJvdXRlcjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZmlsZXIoKSB7XHJcbiAgY29uc3QgeyB1c2VycyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2Vyczogc3RhdGUuVXNlcnMsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiLS09PSBVc2VycyBcIiwgdXNlcnMpO1xyXG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlcnM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtzZXNzaW9uLnBpY3R1cmUgfHwgXCIuL2VtcHR5X3Byb2ZpbGUuanBlZ1wifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+e3Nlc3Npb24ubmFtZX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkZhbWlseSBOYW1lPC90aD5cclxuICAgICAgICAgICAgPHRkPntzZXNzaW9uLmZhbWlseV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+RnVsbCBOYW1lPC90aD5cclxuICAgICAgICAgICAgPHRkPntzZXNzaW9uLmdpdmVuX25hbWV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD57c2Vzc2lvbi5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYnJlYWtQb2ludFR5cGVzIH0gZnJvbSBcIi4uL3R5cGVzL19icmVha1BvaW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEJyZWFrUG9pbnRzID0gKHBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IF92aWV3ID0ge1xyXG4gICAgICB0eXBlOiBcImxhcmdlXCIsXHJcbiAgICAgIC4uLnBhcmFtcyxcclxuICAgIH07XHJcbiAgICBpZiAoaW5uZXJXaWR0aCA+IDEwMDcpIHtcclxuICAgICAgX3ZpZXcudHlwZSA9IFwibGFyZ2VcIjtcclxuICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA+IDY0MCAmJiBpbm5lcldpZHRoIDwgMTAwOCkge1xyXG4gICAgICBfdmlldy50eXBlID0gXCJtZWRpdW1cIjtcclxuICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA8IDY0MSkge1xyXG4gICAgICBfdmlldy50eXBlID0gXCJzbWFsbFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYnJlYWtQb2ludFR5cGVzLk9OX0JST1dTRVJfUkVTSVpFX0RPTkUsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICB2aWV3OiBfdmlldyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZXJzVHlwZXMgfSBmcm9tIFwiLi4vdHlwZXMvX3VzZXJzXCI7XHJcbmltcG9ydCB7IGFwaSwgYXBpU2VydmljZSB9IGZyb20gXCIuLi9hcGlfc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGl2ZVNlc3Npb25Vc2VyID0gKHBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpU2VydmljZS5wb3N0RGF0YShhcGkuYWN0aXZlU2Vzc2lvblVzZXIpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiB1c2Vyc1R5cGVzLlBPU1RfVVNFUlNfU0VTU0lPTl9BQ1RJVkVfU1VDQ0VTUyxcclxuICAgICAgcGF5bG9hZDogeyAuLi5yZXNwb25zZSB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgc2V0QnJlYWtQb2ludHMgfSBmcm9tIFwiLi9fYnJlYWtQb2ludHNcIjtcclxuaW1wb3J0IHsgZ2V0QWN0aXZlU2Vzc2lvblVzZXIgfSBmcm9tIFwiLi9fdXNlcnNcIjtcclxuXHJcbmV4cG9ydCB7IHNldEJyZWFrUG9pbnRzLCBnZXRBY3RpdmVTZXNzaW9uVXNlciB9O1xyXG4iLCJleHBvcnQgY29uc3QgYXBpID0ge1xyXG4gIGFjdGl2ZVNlc3Npb25Vc2VyOiB7XHJcbiAgICB1cmw6IFwiYXV0aC91c2Vycy9zZXNzaW9uL2FjdGl2ZVwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICB9LFxyXG4gIGdvb2dsZUxvZ2luTGluazoge1xyXG4gICAgdXJsOiBcImFwaS5mYXJtZXIuYWNjb3VudHMuZWFzeWZhcm0uY28uaW4vXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSxcclxuICBiYXNlVXJsOiBcImFwaS5mYXJtZXIuYWNjb3VudHMuZWFzeWZhcm0uY28uaW4vXCIsXHJcbiAgZ2V0UHJvdG9jb2w6ICgpID0+IHtcclxuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly9gO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBpU2VydmljZSA9IHtcclxuICBnZXRHb29nbGVMb2dpbkxpbms6IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAke2FwaS5nZXRQcm90b2NvbCgpfSR7YXBpLmdvb2dsZUxvZ2luTGluay51cmx9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogYXBpLmdvb2dsZUxvZ2luTGluay5tZXRob2QsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSxcclxuICBwb3N0RGF0YTogYXN5bmMgKGFwaUVudGl0eSwgZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXJsID0gYCR7YXBpLmdldFByb3RvY29sKCl9JHthcGkuYmFzZVVybH0ke2FwaUVudGl0eS51cmx9YDtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcclxuICAgICAgICByZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlclwiLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHJlcXVlc3QuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0KTtcclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBicmVha1BvaW50VHlwZXMgPSB7XHJcbiAgICBPTl9CUk9XU0VSX1JFU0laRV9ET05FOiBcIk9OX0JST1dTRVJfUkVTSVpFX0RPTkVcIixcclxufSIsImV4cG9ydCBjb25zdCB1c2Vyc1R5cGVzID0ge1xyXG4gICAgUE9TVF9VU0VSU19TRVNTSU9OX0FDVElWRV9TVUNDRVNTOiBcIlBPU1RfVVNFUlNfU0VTU0lPTl9BQ1RJVkVfU1VDQ0VTU1wiLFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtaWNvbnMvc2ltcGxlLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC50aHJvdHRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=