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
  }, isServer && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["StaticRouter"], {
    location: router.asPath,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/app/auth/profile",
    exact: true,
    component: _client_container_profiler__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/app",
    exact: true,
    component: _client_container_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }))), !isServer && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
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
    path: "/app/auth/profile",
    exact: true,
    component: _client_container_profiler__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/app",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwLmpzIl0sIm5hbWVzIjpbImlzU2VydmVyIiwiRmFybWVyQWNjb3VudHMiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsImdldEFjdGl2ZVNlc3Npb25Vc2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNlc3Npb24iLCJVc2VycyIsInBpY3R1cmUiLCJtYXJnaW5Ub3AiLCJhc1BhdGgiLCJQcm9maWxlciIsIkRhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLFFBQWQ7O0FBQ0EsU0FBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCTCxZQUFRLENBQUNNLDJFQUFvQixFQUFyQixDQUFSO0FBQ0QsR0FGRCxFQUVHLEVBRkg7O0FBSDZCLHFCQU9UQywrREFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUN6QyxXQUFPO0FBQ0xDLGFBQU8sRUFBR0QsS0FBSyxDQUFDRSxLQUFOLElBQWVGLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxPQUE1QixJQUF3QztBQUQ1QyxLQUFQO0FBR0QsR0FKOEIsQ0FQRjtBQUFBLE1BT3JCQSxPQVBxQixnQkFPckJBLE9BUHFCOztBQUFBLE1BWXJCRSxPQVpxQixHQVlURixPQVpTLENBWXJCRSxPQVpxQjtBQWM3QixTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sT0FBRyxFQUFFQSxPQUFPLElBQUkscUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixRQUFRLElBQ1AsTUFBQyw2REFBRDtBQUFjLFlBQVEsRUFBRUssTUFBTSxDQUFDVyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxtQkFBWjtBQUFnQyxTQUFLLE1BQXJDO0FBQXNDLGFBQVMsRUFBRUMsa0VBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLE1BQXhCO0FBQXlCLGFBQVMsRUFBRUMsbUVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBRkosRUFTRyxDQUFDbEIsUUFBRCxJQUNDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsbUJBQVo7QUFBZ0MsU0FBSyxNQUFyQztBQUFzQyxhQUFTLEVBQUVpQixrRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssTUFBeEI7QUFBeUIsYUFBUyxFQUFFQyxtRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FWSixDQUZGLENBREYsQ0FGRixDQURGO0FBNEJEOztHQTFDUWpCLGM7VUFDVUcsdUQsRUFDRkUscUQsRUFLS0ksdUQ7OztLQVBiVCxjO0FBNENNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHAuZGQxM2E1MDM4Y2Y3NGFkNTVmNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IEhOYXYgZnJvbSBcIi4vY2xpZW50L2NvbXBvbmVudHMvaG5hdlwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tIFwiLi9jbGllbnQvY29tcG9uZW50cy9zaWRlbmF2XCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vY2xpZW50L2NvbnRhaW5lci9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IFByb2ZpbGVyIGZyb20gXCIuL2NsaWVudC9jb250YWluZXIvcHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgZ2V0QWN0aXZlU2Vzc2lvblVzZXIgfSBmcm9tIFwiLi8uLi9zdG9yZS9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmZ1bmN0aW9uIEZhcm1lckFjY291bnRzKHByb3BzKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEFjdGl2ZVNlc3Npb25Vc2VyKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBzZXNzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlc3Npb246IChzdGF0ZS5Vc2VycyAmJiBzdGF0ZS5Vc2Vycy5zZXNzaW9uKSB8fCB7fSxcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgY29uc3QgeyBwaWN0dXJlIH0gPSBzZXNzaW9uO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8SE5hdiBwaWM9e3BpY3R1cmUgfHwgXCIvZW1wdHlfcHJvZmlsZS5qcGVnXCJ9IC8+XHJcbiAgICAgIDxtYWluIHN0eWxlPXt7IG1hcmdpblRvcDogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIHctMTAwXCI+XHJcbiAgICAgICAgICA8U2lkZU5hdiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtNFwiPlxyXG4gICAgICAgICAgICB7aXNTZXJ2ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JvdXRlci5hc1BhdGh9PlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2F1dGgvcHJvZmlsZVwiIGV4YWN0IGNvbXBvbmVudD17UHJvZmlsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcFwiIGV4YWN0IGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshaXNTZXJ2ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2F1dGgvcHJvZmlsZVwiIGV4YWN0IGNvbXBvbmVudD17UHJvZmlsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcFwiIGV4YWN0IGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFybWVyQWNjb3VudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=