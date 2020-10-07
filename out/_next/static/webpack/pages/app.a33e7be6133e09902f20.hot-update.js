webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/client/components/hnav.js":
/*!*****************************************!*\
  !*** ./pages/client/components/hnav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HNav; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/simple-icons */ "./node_modules/@styled-icons/simple-icons/index.esm.js");

var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\components\\hnav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.5em;\n  text-align: center;\n  color: white;\n  margin-bottom: 0px !important;\n  margin-top: 2px !important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n  width: 2rem;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n  @media (max-width: 720px) {\n    margin-left: 0.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var PivotaltrackerLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_3__["Pivotaltracker"])(_templateObject());
_c = PivotaltrackerLogo;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject2());
_c2 = Title;
var ProfilePic = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());
_c3 = ProfilePic;
function HNav(_ref) {
  var pic = _ref.pic;
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
    className: "dropdown-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }), __jsx("a", {
    href: "https://mail.google.com/mail/u/0/?logout&hl=en",
    className: "dropdown-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "Logout"))))))));
}
_c4 = HNav;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "PivotaltrackerLogo");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "ProfilePic");
$RefreshReg$(_c4, "HNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbXBvbmVudHMvaG5hdi5qcyJdLCJuYW1lcyI6WyJQaXZvdGFsdHJhY2tlckxvZ28iLCJzdHlsZWQiLCJQaXZvdGFsdHJhY2tlciIsIlRpdGxlIiwiaDEiLCJQcm9maWxlUGljIiwiaW1nIiwiSE5hdiIsInBpYyIsImJvcmRlckJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGlFQUFNLENBQUNDLHlFQUFELENBQVQsbUJBQXhCO0tBQU1GLGtCO0FBU04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxFQUFWLG9CQUFYO01BQU1ELEs7QUFPTixJQUFNRSxVQUFVLEdBQUdKLHlEQUFNLENBQUNLLEdBQVYsb0JBQWhCO01BQU1ELFU7QUFNUyxTQUFTRSxJQUFULE9BQXVCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3BDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDRCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsbUJBQVksVUFIZDtBQUlFLG1CQUFZLGtCQUpkO0FBS0UscUJBQWMsaUJBTGhCO0FBTUUscUJBQWMsT0FOaEI7QUFPRSxrQkFBVyxtQkFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBWUU7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsQ0FaRixDQURGLEVBb0JFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFDRSxPQUFHLEVBQUVELEdBRFA7QUFFRSxhQUFTLEVBQUMsZ0JBRlo7QUFHRSxtQkFBWSxVQUhkO0FBSUUscUJBQWMsTUFKaEI7QUFLRSxxQkFBYyxPQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFDLGVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQ0UsUUFBSSxFQUFDLGdEQURQO0FBRUUsYUFBUyxFQUFDLGVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLENBUkYsQ0FERixDQXBCRixDQUpGLENBREYsQ0FERixDQURGO0FBdUREO01BeER1QkQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHAuYTMzZTdiZTYxMzNlMDk5MDJmMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUGl2b3RhbHRyYWNrZXIgfSBmcm9tIFwiQHN0eWxlZC1pY29ucy9zaW1wbGUtaWNvbnNcIjtcclxuXHJcbmNvbnN0IFBpdm90YWx0cmFja2VyTG9nbyA9IHN0eWxlZChQaXZvdGFsdHJhY2tlcilgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcclxuYDtcclxuY29uc3QgUHJvZmlsZVBpYyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhOYXYoeyBwaWMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLXRvcFwiPlxyXG4gICAgICAgIDxuYXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc2lkZU1lbnVDb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJzaWRlTWVudUNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxQaXZvdGFsdHJhY2tlckxvZ28gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT5GYXJtZXIgQWNjb3VudHM8L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlUGljXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cGljfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMvYXV0aC9wcm9maWxlXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vbWFpbC91LzAvP2xvZ291dCZobD1lblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9