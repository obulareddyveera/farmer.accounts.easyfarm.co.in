webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/client/container/general/profiler.js":
/*!****************************************************!*\
  !*** ./pages/client/container/general/profiler.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profiler; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/actions */ "./store/actions/index.js");

var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\container\\general\\profiler.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: 6rem 1fr;\n  grid-column-gap: 1rem;\n  grid-row-gap: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GridDisplayTable = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c = GridDisplayTable;
function profiler() {
  var getLocalStorageItem = _store_actions__WEBPACK_IMPORTED_MODULE_3__["default"].getLocalStorageItem;
  var session = getLocalStorageItem("activeSessionUser");
  return __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, session && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-sm-12 col-md-4 d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: session.picture || "./empty_profile.jpeg",
    "class": "img-thumbnail",
    alt: "profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col-sm-12 col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(GridDisplayTable, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Name"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, session.name), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Family Name"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, session.family_name), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Given Name"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, session.given_name), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Email"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, session.email))))));
}

var _c;

$RefreshReg$(_c, "GridDisplayTable");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbnRhaW5lci9nZW5lcmFsL3Byb2ZpbGVyLmpzIl0sIm5hbWVzIjpbIkdyaWREaXNwbGF5VGFibGUiLCJzdHlsZWQiLCJkaXYiLCJwcm9maWxlciIsImdldExvY2FsU3RvcmFnZUl0ZW0iLCJhY3Rpb25zIiwic2Vzc2lvbiIsInBpY3R1cmUiLCJuYW1lIiwiZmFtaWx5X25hbWUiLCJnaXZlbl9uYW1lIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBdEI7S0FBTUYsZ0I7QUFPUyxTQUFTRyxRQUFULEdBQW9CO0FBQUEsTUFDekJDLG1CQUR5QixHQUNEQyxzREFEQyxDQUN6QkQsbUJBRHlCO0FBRWpDLE1BQU1FLE9BQU8sR0FBR0YsbUJBQW1CLENBQUMsbUJBQUQsQ0FBbkM7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxPQUFPLElBQ04sTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRUEsT0FBTyxDQUFDQyxPQUFSLElBQW1CLHNCQUQxQjtBQUVFLGFBQU0sZUFGUjtBQUdFLE9BQUcsRUFBQyxTQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1ELE9BQU8sQ0FBQ0UsSUFBZCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUYsT0FBTyxDQUFDRyxXQUFkLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNSCxPQUFPLENBQUNJLFVBQWQsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUosT0FBTyxDQUFDSyxLQUFkLENBUkYsQ0FERixDQURGLENBUkYsQ0FGSixDQURGO0FBNkJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC4yYTU3Y2FhOTVlMzM4YTU1MDA4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IEdyaWREaXNwbGF5VGFibGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2cmVtIDFmcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZmlsZXIoKSB7XHJcbiAgY29uc3QgeyBnZXRMb2NhbFN0b3JhZ2VJdGVtIH0gPSBhY3Rpb25zO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBnZXRMb2NhbFN0b3JhZ2VJdGVtKFwiYWN0aXZlU2Vzc2lvblVzZXJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICB7c2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17c2Vzc2lvbi5waWN0dXJlIHx8IFwiLi9lbXB0eV9wcm9maWxlLmpwZWdcIn1cclxuICAgICAgICAgICAgICBjbGFzcz1cImltZy10aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxHcmlkRGlzcGxheVRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5OYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntzZXNzaW9uLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkZhbWlseSBOYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntzZXNzaW9uLmZhbWlseV9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5HaXZlbiBOYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntzZXNzaW9uLmdpdmVuX25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkVtYWlsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntzZXNzaW9uLmVtYWlsfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZERpc3BsYXlUYWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9