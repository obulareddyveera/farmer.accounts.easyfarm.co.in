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
  var userActions = _store_actions__WEBPACK_IMPORTED_MODULE_3__["default"].userActions;
  var session = userActions.getLocalStorageItem("activeSessionUser");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbnRhaW5lci9nZW5lcmFsL3Byb2ZpbGVyLmpzIl0sIm5hbWVzIjpbIkdyaWREaXNwbGF5VGFibGUiLCJzdHlsZWQiLCJkaXYiLCJwcm9maWxlciIsInVzZXJBY3Rpb25zIiwiYWN0aW9ucyIsInNlc3Npb24iLCJnZXRMb2NhbFN0b3JhZ2VJdGVtIiwicGljdHVyZSIsIm5hbWUiLCJmYW1pbHlfbmFtZSIsImdpdmVuX25hbWUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUF0QjtLQUFNRixnQjtBQU9TLFNBQVNHLFFBQVQsR0FBb0I7QUFBQSxNQUN6QkMsV0FEeUIsR0FDVEMsc0RBRFMsQ0FDekJELFdBRHlCO0FBRWpDLE1BQU1FLE9BQU8sR0FBR0YsV0FBVyxDQUFDRyxtQkFBWixDQUFnQyxtQkFBaEMsQ0FBaEI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxPQUFPLElBQ04sTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRUEsT0FBTyxDQUFDRSxPQUFSLElBQW1CLHNCQUQxQjtBQUVFLGFBQU0sZUFGUjtBQUdFLE9BQUcsRUFBQyxTQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1GLE9BQU8sQ0FBQ0csSUFBZCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsT0FBTyxDQUFDSSxXQUFkLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNSixPQUFPLENBQUNLLFVBQWQsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUwsT0FBTyxDQUFDTSxLQUFkLENBUkYsQ0FERixDQURGLENBUkYsQ0FGSixDQURGO0FBNkJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC4yOTVkZjkxZWU4ZWU5NTI0NTk4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IEdyaWREaXNwbGF5VGFibGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2cmVtIDFmcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZmlsZXIoKSB7XHJcbiAgY29uc3QgeyB1c2VyQWN0aW9ucyB9ID0gYWN0aW9ucztcclxuICBjb25zdCBzZXNzaW9uID0gdXNlckFjdGlvbnMuZ2V0TG9jYWxTdG9yYWdlSXRlbShcImFjdGl2ZVNlc3Npb25Vc2VyXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24ucGljdHVyZSB8fCBcIi4vZW1wdHlfcHJvZmlsZS5qcGVnXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8R3JpZERpc3BsYXlUYWJsZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+TmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57c2Vzc2lvbi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5GYW1pbHkgTmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57c2Vzc2lvbi5mYW1pbHlfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+R2l2ZW4gTmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57c2Vzc2lvbi5naXZlbl9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5FbWFpbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57c2Vzc2lvbi5lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWREaXNwbGF5VGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==