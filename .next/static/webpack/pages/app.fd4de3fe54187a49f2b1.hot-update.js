webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/client/components/sidenav.js":
/*!********************************************!*\
  !*** ./pages/client/components/sidenav.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideNav; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useBreakPoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../hooks/useBreakPoints */ "./hooks/useBreakPoints.js");


var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\components\\sidenav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative !important;\n  width: 30%;\n  height: 100vh;\n  @media (max-width: 720px) {\n    position: absolute !important;\n    z-index: 1;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var SideMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c = SideMenu;
function SideNav() {
  _s();

  var point = Object(_hooks_useBreakPoints__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return __jsx(SideMenu, {
    className: "".concat(['xs', 'sm'].indexOf(point) > -1 ? "collapse" : "expand"),
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

_s(SideNav, "uKUyUvzmmmUqUxvdBF8Yxw1ZkV8=", false, function () {
  return [_hooks_useBreakPoints__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c2 = SideNav;

var _c, _c2;

$RefreshReg$(_c, "SideMenu");
$RefreshReg$(_c2, "SideNav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbXBvbmVudHMvc2lkZW5hdi5qcyJdLCJuYW1lcyI6WyJTaWRlTWVudSIsInN0eWxlZCIsImRpdiIsIlNpZGVOYXYiLCJwb2ludCIsInVzZUJyZWFrcG9pbnRzIiwiaW5kZXhPZiIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZDtLQUFNRixRO0FBVVMsU0FBU0csT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxNQUFNQyxLQUFLLEdBQUdDLHFFQUFjLEVBQTVCO0FBRUEsU0FDRSxNQUFDLFFBQUQ7QUFBVSxhQUFTLFlBQUssQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFZQyxPQUFaLENBQW9CRixLQUFwQixJQUE2QixDQUFDLENBQTlCLEdBQWtDLFVBQWxDLEdBQThDLFFBQW5ELENBQW5CO0FBQWtGLE1BQUUsRUFBQyxpQkFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBNkIsU0FBSyxFQUFFO0FBQUVHLFlBQU0sRUFBRTtBQUFWLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUZGLENBREYsQ0FERixDQURGO0FBVUQ7O0dBYnVCSixPO1VBQ1JFLDZEOzs7TUFEUUYsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHAuZmQ0ZGUzZmU1NDE4N2E0OWYyYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB1c2VCcmVha3BvaW50cyBmcm9tIFwiLi8uLi8uLi8uLi9ob29rcy91c2VCcmVha1BvaW50c1wiO1xyXG5cclxuY29uc3QgU2lkZU1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZU5hdigpIHtcclxuICBjb25zdCBwb2ludCA9IHVzZUJyZWFrcG9pbnRzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZU1lbnUgY2xhc3NOYW1lPXtgJHtbJ3hzJywnc20nXS5pbmRleE9mKHBvaW50KSA+IC0xID8gXCJjb2xsYXBzZVwiOiBcImV4cGFuZFwifWB9IGlkPVwic2lkZU1lbnVDb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFyayBwLTRcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGg0XCI+Q29sbGFwc2VkIGNvbnRlbnQ8L2g1PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlRvZ2dsZWFibGUgdmlhIHRoZSBuYXZiYXIgYnJhbmQuPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU2lkZU1lbnU+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9