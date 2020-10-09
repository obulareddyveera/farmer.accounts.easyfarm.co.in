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

  var userActions = _store_actions__WEBPACK_IMPORTED_MODULE_5__["default"].userActions;
  var session = userActions.getLocalStorageItem("activeSessionUser");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbXBvbmVudHMvaG5hdi5qcyJdLCJuYW1lcyI6WyJQaXZvdGFsdHJhY2tlckxvZ28iLCJzdHlsZWQiLCJQaXZvdGFsdHJhY2tlciIsIlRpdGxlIiwiaDEiLCJQcm9maWxlUGljIiwiaW1nIiwiRmFybWVyQWNjb3VudHNMaW5rIiwiYSIsIkhOYXYiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VyQWN0aW9ucyIsImFjdGlvbnMiLCJzZXNzaW9uIiwiZ2V0TG9jYWxTdG9yYWdlSXRlbSIsInBpY3R1cmUiLCJib3JkZXJCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsaUVBQU0sQ0FBQ0MseUVBQUQsQ0FBVCxtQkFBeEI7S0FBTUYsa0I7QUFTTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQVg7TUFBTUQsSztBQU9OLElBQU1FLFVBQVUsR0FBR0oseURBQU0sQ0FBQ0ssR0FBVixvQkFBaEI7TUFBTUQsVTtBQUtOLElBQU1FLGtCQUFrQixHQUFHTix5REFBTSxDQUFDTyxDQUFWLG9CQUF4QjtNQUFNRCxrQjtBQU9TLFNBQVNFLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSx3QkFDZkMsb0VBQWMsRUFEQztBQUFBLE1BQ3JCQyxDQURxQixtQkFDckJBLENBRHFCOztBQUFBLE1BRXJCQyxXQUZxQixHQUVMQyxzREFGSyxDQUVyQkQsV0FGcUI7QUFHN0IsTUFBTUUsT0FBTyxHQUFHRixXQUFXLENBQUNHLG1CQUFaLENBQWdDLG1CQUFoQyxDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBSUYsT0FBTyxJQUFJQSxPQUFPLENBQUNFLE9BQXBCLElBQWdDLHFCQUFoRDtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLDRCQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsbUJBQVksVUFIZDtBQUlFLG1CQUFZLGtCQUpkO0FBS0UscUJBQWMsaUJBTGhCO0FBTUUscUJBQWMsT0FOaEI7QUFPRSxrQkFBVyxtQkFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBWUUsTUFBQyxrQkFBRDtBQUNFLFFBQUksRUFBQyxJQURQO0FBRUUsYUFBUyxFQUFDLG1DQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFOLENBQUMsd0JBQVQsQ0FQRixDQVpGLENBREYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUNFLE9BQUcsRUFBRUssT0FEUDtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUdFLG1CQUFZLFVBSGQ7QUFJRSxxQkFBYyxNQUpoQjtBQUtFLHFCQUFjLE9BTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxDQUFDLHVCQURKLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUNFLFFBQUksRUFBQyxnREFEUDtBQUVFLGFBQVMsRUFBQyxlQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0EsQ0FBQyxzQkFKSixDQUxGLENBUkYsQ0FERixDQXZCRixDQUpGLENBREYsQ0FERixDQURGO0FBMEREOztHQWhFdUJGLEk7VUFDUkMsNEQ7OztNQURRRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC4xYmY4OGQxNmM1OGYzNjNjMTY1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IFBpdm90YWx0cmFja2VyIH0gZnJvbSBcIkBzdHlsZWQtaWNvbnMvc2ltcGxlLWljb25zXCI7XHJcblxyXG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgUGl2b3RhbHRyYWNrZXJMb2dvID0gc3R5bGVkKFBpdm90YWx0cmFja2VyKWBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xyXG5gO1xyXG5jb25zdCBQcm9maWxlUGljID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5jb25zdCBGYXJtZXJBY2NvdW50c0xpbmsgPSBzdHlsZWQuYWBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBITmF2KCkge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCB7IHVzZXJBY3Rpb25zIH0gPSBhY3Rpb25zO1xyXG4gIGNvbnN0IHNlc3Npb24gPSB1c2VyQWN0aW9ucy5nZXRMb2NhbFN0b3JhZ2VJdGVtKFwiYWN0aXZlU2Vzc2lvblVzZXJcIik7XHJcbiAgY29uc3QgcGljdHVyZSA9IChzZXNzaW9uICYmIHNlc3Npb24ucGljdHVyZSkgfHwgXCIvZW1wdHlfcHJvZmlsZS5qcGVnXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLXRvcFwiPlxyXG4gICAgICAgIDxuYXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGFyayBiZy1kYXJrXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc2lkZU1lbnVDb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJzaWRlTWVudUNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8RmFybWVyQWNjb3VudHNMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiIy9cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBtdC0yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFBpdm90YWx0cmFja2VyTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPnt0KGBjb21tb24uaG5hdi5zaXRlTmFtZWApfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9GYXJtZXJBY2NvdW50c0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG10LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVQaWNcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMvYXV0aC9wcm9maWxlXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KGBjb21tb24uaG5hdi5wcm9maWxlYCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWFpbC5nb29nbGUuY29tL21haWwvdS8wLz9sb2dvdXQmaGw9ZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoYGNvbW1vbi5obmF2LmxvZ291dGApfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=