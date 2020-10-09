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
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../store/actions */ "./store/actions/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbXBvbmVudHMvaG5hdi5qcyJdLCJuYW1lcyI6WyJQaXZvdGFsdHJhY2tlckxvZ28iLCJzdHlsZWQiLCJQaXZvdGFsdHJhY2tlciIsIlRpdGxlIiwiaDEiLCJQcm9maWxlUGljIiwiaW1nIiwiRmFybWVyQWNjb3VudHNMaW5rIiwiYSIsIkhOYXYiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJnZXRMb2NhbFN0b3JhZ2VJdGVtIiwiYWN0aW9ucyIsInNlc3Npb24iLCJwaWN0dXJlIiwiYm9yZGVyQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGlFQUFNLENBQUNDLHlFQUFELENBQVQsbUJBQXhCO0tBQU1GLGtCO0FBU04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxFQUFWLG9CQUFYO01BQU1ELEs7QUFPTixJQUFNRSxVQUFVLEdBQUdKLHlEQUFNLENBQUNLLEdBQVYsb0JBQWhCO01BQU1ELFU7QUFLTixJQUFNRSxrQkFBa0IsR0FBR04seURBQU0sQ0FBQ08sQ0FBVixvQkFBeEI7TUFBTUQsa0I7QUFPUyxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsd0JBQ2ZDLG9FQUFjLEVBREM7QUFBQSxNQUNyQkMsQ0FEcUIsbUJBQ3JCQSxDQURxQjs7QUFBQSxNQUVyQkMsbUJBRnFCLEdBRUdDLHNEQUZILENBRXJCRCxtQkFGcUI7QUFHN0IsTUFBTUUsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQyxtQkFBRCxDQUFuQztBQUNBLE1BQU1HLE9BQU8sR0FBSUQsT0FBTyxJQUFJQSxPQUFPLENBQUNDLE9BQXBCLElBQWdDLHFCQUFoRDtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDRCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsbUJBQVksVUFIZDtBQUlFLG1CQUFZLGtCQUpkO0FBS0UscUJBQWMsaUJBTGhCO0FBTUUscUJBQWMsT0FOaEI7QUFPRSxrQkFBVyxtQkFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBWUUsTUFBQyxrQkFBRDtBQUNFLFFBQUksRUFBQyxJQURQO0FBRUUsYUFBUyxFQUFDLG1DQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFMLENBQUMsd0JBQVQsQ0FQRixDQVpGLENBREYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUNFLE9BQUcsRUFBRUksT0FEUDtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUdFLG1CQUFZLFVBSGQ7QUFJRSxxQkFBYyxNQUpoQjtBQUtFLHFCQUFjLE9BTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixDQUFDLHVCQURKLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUNFLFFBQUksRUFBQyxnREFEUDtBQUVFLGFBQVMsRUFBQyxlQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0EsQ0FBQyxzQkFKSixDQUxGLENBUkYsQ0FERixDQXZCRixDQUpGLENBREYsQ0FERixDQURGO0FBMEREOztHQWhFdUJGLEk7VUFDUkMsNEQ7OztNQURRRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC5jYzlmZTk1MGM4NWVkYTI0MzYzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IFBpdm90YWx0cmFja2VyIH0gZnJvbSBcIkBzdHlsZWQtaWNvbnMvc2ltcGxlLWljb25zXCI7XHJcblxyXG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiLi8uLi8uLi8uLi9zdG9yZS9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCBQaXZvdGFsdHJhY2tlckxvZ28gPSBzdHlsZWQoUGl2b3RhbHRyYWNrZXIpYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMnJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMnB4ICFpbXBvcnRhbnQ7XHJcbmA7XHJcbmNvbnN0IFByb2ZpbGVQaWMgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbmNvbnN0IEZhcm1lckFjY291bnRzTGluayA9IHN0eWxlZC5hYFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhOYXYoKSB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IHsgZ2V0TG9jYWxTdG9yYWdlSXRlbSB9ID0gYWN0aW9ucztcclxuICBjb25zdCBzZXNzaW9uID0gZ2V0TG9jYWxTdG9yYWdlSXRlbShcImFjdGl2ZVNlc3Npb25Vc2VyXCIpO1xyXG4gIGNvbnN0IHBpY3R1cmUgPSAoc2Vzc2lvbiAmJiBzZXNzaW9uLnBpY3R1cmUpIHx8IFwiL2VtcHR5X3Byb2ZpbGUuanBlZ1wiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC10b3BcIj5cclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgYmctZGFya1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3NpZGVNZW51Q29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwic2lkZU1lbnVDb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPEZhcm1lckFjY291bnRzTGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiMvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgbXQtMlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxQaXZvdGFsdHJhY2tlckxvZ28gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT57dChgY29tbW9uLmhuYXYuc2l0ZU5hbWVgKX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgIDwvRmFybWVyQWNjb3VudHNMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlUGljXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjL2F1dGgvcHJvZmlsZVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dChgY29tbW9uLmhuYXYucHJvZmlsZWApfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21haWwuZ29vZ2xlLmNvbS9tYWlsL3UvMC8/bG9nb3V0JmhsPWVuXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KGBjb21tb24uaG5hdi5sb2dvdXRgKX1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9