webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _client_components_hnav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/components/hnav */ "./pages/client/components/hnav.js");
/* harmony import */ var _client_components_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/components/sidenav */ "./pages/client/components/sidenav.js");
/* harmony import */ var _client_container_dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/container/dashboard */ "./pages/client/container/dashboard.js");
/* harmony import */ var _client_container_profiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/container/profiler */ "./pages/client/container/profiler.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../store/actions */ "./store/actions/index.js");


var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  width: 100vw !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var AppContent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c = AppContent;

function FarmerAccounts(props) {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_9__["getActiveSessionUser"])());
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return {
      session: state.Users && state.Users.session || {}
    };
  }),
      session = _useSelector.session;

  var picture = session.picture;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_client_components_hnav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pic: picture || "/empty_profile.jpeg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("main", {
    style: {
      marginTop: "2rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(AppContent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_client_components_sidenav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, process && true && __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/auth/profile",
    exact: true,
    component: _client_container_profiler__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/",
    exact: true,
    component: _client_container_dashboard__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  })))))));
}

_s(FarmerAccounts, "1dqpTrrbbKLRg6vQTKH266p4Jjo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c2 = FarmerAccounts;
/* harmony default export */ __webpack_exports__["default"] = (FarmerAccounts);

var _c, _c2;

$RefreshReg$(_c, "AppContent");
$RefreshReg$(_c2, "FarmerAccounts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJGYXJtZXJBY2NvdW50cyIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZ2V0QWN0aXZlU2Vzc2lvblVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2Vzc2lvbiIsIlVzZXJzIiwicGljdHVyZSIsIm1hcmdpblRvcCIsInByb2Nlc3MiLCJQcm9maWxlciIsIkRhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFoQjtLQUFNRixVOztBQUtOLFNBQVNHLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCSCxZQUFRLENBQUNJLDJFQUFvQixFQUFyQixDQUFSO0FBQ0QsR0FGRCxFQUVHLEVBRkg7O0FBRjZCLHFCQU1UQywrREFBVyxDQUFDLFVBQUNDLEtBQUQsRUFBVztBQUN6QyxXQUFPO0FBQ0xDLGFBQU8sRUFBR0QsS0FBSyxDQUFDRSxLQUFOLElBQWVGLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxPQUE1QixJQUF3QztBQUQ1QyxLQUFQO0FBR0QsR0FKOEIsQ0FORjtBQUFBLE1BTXJCQSxPQU5xQixnQkFNckJBLE9BTnFCOztBQUFBLE1BV3JCRSxPQVhxQixHQVdURixPQVhTLENBV3JCRSxPQVhxQjtBQWE3QixTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sT0FBRyxFQUFFQSxPQUFPLElBQUkscUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE9BQU8sUUFBUCxJQUNDLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsZUFBWjtBQUE0QixTQUFLLE1BQWpDO0FBQWtDLGFBQVMsRUFBRUMsa0VBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFnQixTQUFLLE1BQXJCO0FBQXNCLGFBQVMsRUFBRUMsbUVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBRkosQ0FGRixDQURGLENBRkYsQ0FERjtBQW9CRDs7R0FqQ1FmLGM7VUFDVUcsdUQsRUFLR0ksdUQ7OztNQU5iUCxjO0FBbUNNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHAuYzAwZTA3ZTBkOTJhMjZhZDhjYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGFzaFJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IEhOYXYgZnJvbSBcIi4vY2xpZW50L2NvbXBvbmVudHMvaG5hdlwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tIFwiLi9jbGllbnQvY29tcG9uZW50cy9zaWRlbmF2XCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vY2xpZW50L2NvbnRhaW5lci9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IFByb2ZpbGVyIGZyb20gXCIuL2NsaWVudC9jb250YWluZXIvcHJvZmlsZXJcIjtcclxuaW1wb3J0IHsgZ2V0QWN0aXZlU2Vzc2lvblVzZXIgfSBmcm9tIFwiLi8uLi9zdG9yZS9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBBcHBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBGYXJtZXJBY2NvdW50cyhwcm9wcykge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0QWN0aXZlU2Vzc2lvblVzZXIoKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2Vzc2lvbjogKHN0YXRlLlVzZXJzICYmIHN0YXRlLlVzZXJzLnNlc3Npb24pIHx8IHt9LFxyXG4gICAgfTtcclxuICB9KTtcclxuICBjb25zdCB7IHBpY3R1cmUgfSA9IHNlc3Npb247XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxITmF2IHBpYz17cGljdHVyZSB8fCBcIi9lbXB0eV9wcm9maWxlLmpwZWdcIn0gLz5cclxuICAgICAgPG1haW4gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjJyZW1cIiB9fT5cclxuICAgICAgICA8QXBwQ29udGVudD5cclxuICAgICAgICAgIDxTaWRlTmF2IC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cHJvY2VzcyAmJiBwcm9jZXNzLmJyb3dzZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXV0aC9wcm9maWxlXCIgZXhhY3QgY29tcG9uZW50PXtQcm9maWxlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtEYXNoYm9hcmR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FwcENvbnRlbnQ+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFybWVyQWNjb3VudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=