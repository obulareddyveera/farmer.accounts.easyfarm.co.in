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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-icons/simple-icons */ "./node_modules/@styled-icons/simple-icons/index.esm.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions */ "./store/actions/index.js");


var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\components\\hnav.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-decoration: none;\n  &:hover {\n    text-decoration: none !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

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






var PivotaltrackerLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_4__["Pivotaltracker"])(_templateObject());
_c = PivotaltrackerLogo;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject2());
_c2 = Title;
var ProfilePic = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());
_c3 = ProfilePic;
var FarmerAccountsLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject4());
_c4 = FarmerAccountsLink;
function HNav() {
  _s();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var getLocalStorageItem = _store_actions__WEBPACK_IMPORTED_MODULE_5__["default"].getLocalStorageItem;
  var session = getLocalStorageItem("activeSessionUser");
  var picture = session && session.picture || "/empty_profile.jpeg";
  return __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex justify-content-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })), __jsx(FarmerAccountsLink, {
    href: "#/",
    className: "d-flex justify-content-start mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(PivotaltrackerLogo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  })), __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, t("common.hnav.siteName")))), __jsx("div", {
    className: "d-flex justify-content-end mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "btn-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx(ProfilePic, {
    src: picture,
    className: "rounded-circle",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "dropdown-menu dropdown-menu-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#/auth/profile",
    className: "dropdown-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, t("common.hnav.profile")), __jsx("div", {
    className: "dropdown-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }), __jsx("a", {
    href: "https://mail.google.com/mail/u/0/?logout&hl=en",
    className: "dropdown-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, t("common.hnav.logout")))))))));
}

_s(HNav, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"]];
});

_c5 = HNav;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "PivotaltrackerLogo");
$RefreshReg$(_c2, "Title");
$RefreshReg$(_c3, "ProfilePic");
$RefreshReg$(_c4, "FarmerAccountsLink");
$RefreshReg$(_c5, "HNav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbXBvbmVudHMvaG5hdi5qcyJdLCJuYW1lcyI6WyJQaXZvdGFsdHJhY2tlckxvZ28iLCJzdHlsZWQiLCJQaXZvdGFsdHJhY2tlciIsIlRpdGxlIiwiaDEiLCJQcm9maWxlUGljIiwiaW1nIiwiRmFybWVyQWNjb3VudHNMaW5rIiwiYSIsIkhOYXYiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJnZXRMb2NhbFN0b3JhZ2VJdGVtIiwiYWN0aW9ucyIsInNlc3Npb24iLCJwaWN0dXJlIiwiYm9yZGVyQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGlFQUFNLENBQUNDLHlFQUFELENBQVQsbUJBQXhCO0tBQU1GLGtCO0FBU04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxFQUFWLG9CQUFYO01BQU1ELEs7QUFPTixJQUFNRSxVQUFVLEdBQUdKLHlEQUFNLENBQUNLLEdBQVYsb0JBQWhCO01BQU1ELFU7QUFLTixJQUFNRSxrQkFBa0IsR0FBR04seURBQU0sQ0FBQ08sQ0FBVixvQkFBeEI7TUFBTUQsa0I7QUFPUyxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBQ2ZDLG9FQUFjLEVBREM7QUFBQSxNQUNyQkMsQ0FEcUIsbUJBQ3JCQSxDQURxQjs7QUFBQSxNQUVyQkMsbUJBRnFCLEdBRUdDLHNEQUZILENBRXJCRCxtQkFGcUI7QUFHN0IsTUFBTUUsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQyxtQkFBRCxDQUFuQztBQUNBLE1BQU1HLE9BQU8sR0FBSUQsT0FBTyxJQUFJQSxPQUFPLENBQUNDLE9BQXBCLElBQWdDLHFCQUFoRDtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDRCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsbUJBQVksVUFIZDtBQUlFLG1CQUFZLGtCQUpkO0FBS0UscUJBQWMsaUJBTGhCO0FBTUUscUJBQWMsT0FOaEI7QUFPRSxrQkFBVyxtQkFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBWUUsTUFBQyxrQkFBRDtBQUNFLFFBQUksRUFBQyxJQURQO0FBRUUsYUFBUyxFQUFDLG1DQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFMLENBQUMsd0JBQVQsQ0FQRixDQVpGLENBREYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUNFLE9BQUcsRUFBRUksT0FEUDtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUdFLG1CQUFZLFVBSGQ7QUFJRSxxQkFBYyxNQUpoQjtBQUtFLHFCQUFjLE9BTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixDQUFDLHVCQURKLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUNFLFFBQUksRUFBQyxnREFEUDtBQUVFLGFBQVMsRUFBQyxlQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0EsQ0FBQyxzQkFKSixDQUxGLENBUkYsQ0FERixDQXZCRixDQUpGLENBREYsQ0FERixDQURGO0FBMEREOztHQWhFdUJGLEk7VUFDUkMsNEQ7OztNQURRRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC5kYTZhOGY3NmQ5NzY2YjhiYmQ0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IFBpdm90YWx0cmFja2VyIH0gZnJvbSBcIkBzdHlsZWQtaWNvbnMvc2ltcGxlLWljb25zXCI7XHJcblxyXG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgUGl2b3RhbHRyYWNrZXJMb2dvID0gc3R5bGVkKFBpdm90YWx0cmFja2VyKWBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5jb25zdCBQcm9maWxlUGljID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5jb25zdCBGYXJtZXJBY2NvdW50c0xpbmsgPSBzdHlsZWQuYWBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBITmF2KCkge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCB7IGdldExvY2FsU3RvcmFnZUl0ZW0gfSA9IGFjdGlvbnM7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGdldExvY2FsU3RvcmFnZUl0ZW0oXCJhY3RpdmVTZXNzaW9uVXNlclwiKTtcclxuICBjb25zdCBwaWN0dXJlID0gKHNlc3Npb24gJiYgc2Vzc2lvbi5waWN0dXJlKSB8fCBcIi9lbXB0eV9wcm9maWxlLmpwZWdcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtdG9wXCI+XHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmtcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNzaWRlTWVudUNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInNpZGVNZW51Q29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxGYXJtZXJBY2NvdW50c0xpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjL1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IG10LTJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8UGl2b3RhbHRyYWNrZXJMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e3QoYGNvbW1vbi5obmF2LnNpdGVOYW1lYCl9PC9UaXRsZT5cclxuICAgICAgICAgICAgICA8L0Zhcm1lckFjY291bnRzTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZVBpY1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIy9hdXRoL3Byb2ZpbGVcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoYGNvbW1vbi5obmF2LnByb2ZpbGVgKX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vbWFpbC91LzAvP2xvZ291dCZobD1lblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dChgY29tbW9uLmhuYXYubG9nb3V0YCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==