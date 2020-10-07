webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_components_hnav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/components/hnav */ "./pages/client/components/hnav.js");
/* harmony import */ var _client_components_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/components/sidenav */ "./pages/client/components/sidenav.js");
/* harmony import */ var _client_container_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/container/dashboard */ "./pages/client/container/dashboard.js");
/* harmony import */ var _client_container_profiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/container/profiler */ "./pages/client/container/profiler.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../store/actions */ "./store/actions/index.js");
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var isServer = false;

function FarmerAccounts(props) {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_8__["getActiveSessionUser"])());
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      session: state.Users && state.Users.session || {}
    };
  }),
      session = _useSelector.session;

  var picture = session.picture;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_client_components_hnav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pic: picture || "/empty_profile.jpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("main", {
    style: {
      marginTop: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex flex-wrap w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_client_components_sidenav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "mt-4 p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, isServer && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "I am a StaticRouter "), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], {
    location: router.asPath,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/app/auth/profile",
    exact: true,
    component: _client_container_profiler__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/app",
    exact: true,
    component: _client_container_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })))), !isServer && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "I am a BrowserRouter "), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/app/auth/profile",
    exact: true,
    component: _client_container_profiler__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/app",
    exact: true,
    component: _client_container_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }))))))));
}

_s(FarmerAccounts, "RWBe9EXVOro7xUC+qrSkNDtRAm4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = FarmerAccounts;
/* harmony default export */ __webpack_exports__["default"] = (FarmerAccounts);

var _c;

$RefreshReg$(_c, "FarmerAccounts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwLmpzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwiRmFybWVyQWNjb3VudHMiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsImdldEFjdGl2ZVNlc3Npb25Vc2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNlc3Npb24iLCJVc2VycyIsInBpY3R1cmUiLCJtYXJnaW5Ub3AiLCJhc1BhdGgiLCJQcm9maWxlciIsIkRhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLFFBQWQ7O0FBQ0EsU0FBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCTCxZQUFRLENBQUNNLDJFQUFvQixFQUFyQixDQUFSO0FBQ0QsR0FGRCxFQUVHLEVBRkg7O0FBSDZCLHFCQU9UQywrREFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUN6QyxXQUFPO0FBQ0xDLGFBQU8sRUFBR0QsS0FBSyxDQUFDRSxLQUFOLElBQWVGLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxPQUE1QixJQUF3QztBQUQ1QyxLQUFQO0FBR0QsR0FKOEIsQ0FQRjtBQUFBLE1BT3JCQSxPQVBxQixnQkFPckJBLE9BUHFCOztBQUFBLE1BWXJCRSxPQVpxQixHQVlURixPQVpTLENBWXJCRSxPQVpxQjtBQWM3QixTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sT0FBRyxFQUFFQSxPQUFPLElBQUkscUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixRQUFRLElBQ1AsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRSxNQUFDLDZEQUFEO0FBQWMsWUFBUSxFQUFFSyxNQUFNLENBQUNXLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsUUFBSSxFQUFDLG1CQURQO0FBRUUsU0FBSyxNQUZQO0FBR0UsYUFBUyxFQUFFQyxrRUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxNQUF4QjtBQUF5QixhQUFTLEVBQUVDLG1FQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQUZGLENBRkosRUFnQkcsQ0FBQ2xCLFFBQUQsSUFDQyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUMsbUJBRFA7QUFFRSxTQUFLLE1BRlA7QUFHRSxhQUFTLEVBQUVpQixrRUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxNQUF4QjtBQUF5QixhQUFTLEVBQUVDLG1FQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQUZGLENBakJKLENBRkYsQ0FERixDQUZGLENBREY7QUEwQ0Q7O0dBeERRakIsYztVQUNVRyx1RCxFQUNGRSxxRCxFQUtLSSx1RDs7O0tBUGJULGM7QUEwRE1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC42MGMyNzJlODJhZTM2NDI1NDI5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgSE5hdiBmcm9tIFwiLi9jbGllbnQvY29tcG9uZW50cy9obmF2XCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuL2NsaWVudC9jb21wb25lbnRzL3NpZGVuYXZcIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9jbGllbnQvY29udGFpbmVyL2Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvZmlsZXIgZnJvbSBcIi4vY2xpZW50L2NvbnRhaW5lci9wcm9maWxlclwiO1xyXG5pbXBvcnQgeyBnZXRBY3RpdmVTZXNzaW9uVXNlciB9IGZyb20gXCIuLy4uL3N0b3JlL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuZnVuY3Rpb24gRmFybWVyQWNjb3VudHMocHJvcHMpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEFjdGl2ZVNlc3Npb25Vc2VyKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBzZXNzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlc3Npb246IChzdGF0ZS5Vc2VycyAmJiBzdGF0ZS5Vc2Vycy5zZXNzaW9uKSB8fCB7fSxcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgY29uc3QgeyBwaWN0dXJlIH0gPSBzZXNzaW9uO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8SE5hdiBwaWM9e3BpY3R1cmUgfHwgXCIvZW1wdHlfcHJvZmlsZS5qcGVnXCJ9IC8+XHJcbiAgICAgIDxtYWluIHN0eWxlPXt7IG1hcmdpblRvcDogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIHctMTAwXCI+XHJcbiAgICAgICAgICA8U2lkZU5hdiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtNFwiPlxyXG4gICAgICAgICAgICB7aXNTZXJ2ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxoMz5JIGFtIGEgU3RhdGljUm91dGVyIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyb3V0ZXIuYXNQYXRofT5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvYXBwL2F1dGgvcHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtQcm9maWxlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcFwiIGV4YWN0IGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshaXNTZXJ2ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxoMz5JIGFtIGEgQnJvd3NlclJvdXRlciA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2FwcC9hdXRoL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UHJvZmlsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHBcIiBleGFjdCBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcm1lckFjY291bnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9