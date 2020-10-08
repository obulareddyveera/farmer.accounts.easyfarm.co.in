webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/client/components/appNavigationMenu.js":
/*!******************************************************!*\
  !*** ./pages/client/components/appNavigationMenu.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppNavigationMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styled_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/material */ "./node_modules/@styled-icons/material/index.esm.js");
/* harmony import */ var _styled_icons_fa_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-icons/fa-solid */ "./node_modules/@styled-icons/fa-solid/index.esm.js");
/* harmony import */ var _styled_icons_simple_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/simple-icons */ "./node_modules/@styled-icons/simple-icons/index.esm.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../store/actions */ "./store/actions/index.js");
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\client\\components\\appNavigationMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function AppNavigationMenu() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    console.log("--==>> GET_SIDEMENU_DETAILS_SUCCESS  <<==--");
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__["getSideMenuMetaData"])());
  }, []);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      metaData: state.MetaData
    };
  }),
      metaData = _useSelector.metaData;

  var sideMenuMetaInfo = metaData.sideMenuMetaInfo;
  console.log("--== metaData: sideMenuMetaInfo ", metaData, sideMenuMetaInfo);

  var onLiClick = function onLiClick(event, item) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__["onLiItemSelect"])(item));
  };

  var onToggleSubmenu = function onToggleSubmenu(event, item, ulId) {
    event.preventDefault();
    event.stopPropagation();
    console.log("--== onToggleSubmenu ", event);
    var currentState = $("#".concat(ulId)).css("display");

    if (currentState === "none") {
      $(event.target).text("-");
      $("#".concat(ulId)).css("display", "block");
    } else {
      $(event.target).text("+");
      $("#".concat(ulId)).css("display", "none");
    }
  };

  var getLinkTag = function getLinkTag(item) {
    var randomUniqueId = "submenuId".concat(new Date().getTime(), "_").concat(item.id);
    return __jsx("li", {
      className: item.className,
      key: item.id,
      onClick: function onClick(event) {
        return onLiClick(event, item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, item.type === "link" && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, item.iconComponent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.iconComponent, {
      size: "20",
      color: "#fff"
    }), __jsx("span", {
      className: "ml-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, item.displayName), item.subMenu && __jsx("span", {
      onClick: function onClick(event) {
        return onToggleSubmenu(event, item, randomUniqueId);
      },
      className: "submenu-indicator",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, "+"))), item.type === "info" && __jsx("a", {
      href: "#",
      onClick: function onClick(event) {
        return event.preventDefault();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, item.displayName), item.subMenu && __jsx("ul", {
      className: "submenu",
      key: randomUniqueId,
      id: randomUniqueId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, item.subMenu.map(function (entity) {
      return getLinkTag(entity);
    }))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, sideMenuMetaInfo && sideMenuMetaInfo.length > 0 && __jsx("div", {
    id: "jquery-accordion-menu",
    className: "jquery-accordion-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, sideMenuMetaInfo.map(function (item) {
    return getLinkTag(item);
  }))));
}

_s(AppNavigationMenu, "4S9AgkNRHgbkbTfMuY6zy5ZaxHg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = AppNavigationMenu;

var _c;

$RefreshReg$(_c, "AppNavigationMenu");

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

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: setBreakPoints, getActiveSessionUser, getSideMenuMetaData, onLiItemSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _breakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_breakPoints */ "./store/actions/_breakPoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBreakPoints", function() { return _breakPoints__WEBPACK_IMPORTED_MODULE_0__["setBreakPoints"]; });

/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_users */ "./store/actions/_users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveSessionUser", function() { return _users__WEBPACK_IMPORTED_MODULE_1__["getActiveSessionUser"]; });

/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_metadata */ "./store/actions/_metadata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSideMenuMetaData", function() { return _metadata__WEBPACK_IMPORTED_MODULE_2__["getSideMenuMetaData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLiItemSelect", function() { return _metadata__WEBPACK_IMPORTED_MODULE_2__["onLiItemSelect"]; });






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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50L2NvbXBvbmVudHMvYXBwTmF2aWdhdGlvbk1lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2FjdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwTmF2aWdhdGlvbk1lbnUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2lkZU1lbnVNZXRhRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJtZXRhRGF0YSIsIk1ldGFEYXRhIiwic2lkZU1lbnVNZXRhSW5mbyIsIm9uTGlDbGljayIsImV2ZW50IiwiaXRlbSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25MaUl0ZW1TZWxlY3QiLCJvblRvZ2dsZVN1Ym1lbnUiLCJ1bElkIiwiY3VycmVudFN0YXRlIiwiJCIsImNzcyIsInRhcmdldCIsInRleHQiLCJnZXRMaW5rVGFnIiwicmFuZG9tVW5pcXVlSWQiLCJEYXRlIiwiZ2V0VGltZSIsImlkIiwiY2xhc3NOYW1lIiwidHlwZSIsImljb25Db21wb25lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2l6ZSIsImNvbG9yIiwiZGlzcGxheU5hbWUiLCJzdWJNZW51IiwibWFwIiwiZW50aXR5IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULEdBQTZCO0FBQUE7O0FBQUE7O0FBQzFDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSw2Q0FBWjtBQUNBTCxZQUFRLENBQUNNLDBFQUFtQixFQUFwQixDQUFSO0FBQ0QsR0FIRCxFQUdHLEVBSEg7O0FBRjBDLHFCQU9yQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFELEVBQVc7QUFDMUMsV0FBTztBQUNMQyxjQUFRLEVBQUVELEtBQUssQ0FBQ0U7QUFEWCxLQUFQO0FBR0QsR0FKK0IsQ0FQVTtBQUFBLE1BT2xDRCxRQVBrQyxnQkFPbENBLFFBUGtDOztBQUFBLE1BWWxDRSxnQkFaa0MsR0FZYkYsUUFaYSxDQVlsQ0UsZ0JBWmtDO0FBYTFDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWixFQUFnREksUUFBaEQsRUFBMERFLGdCQUExRDs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDakNELFNBQUssQ0FBQ0UsY0FBTjtBQUNBRixTQUFLLENBQUNHLGVBQU47QUFDQWhCLFlBQVEsQ0FBQ2lCLHFFQUFjLENBQUNILElBQUQsQ0FBZixDQUFSO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNMLEtBQUQsRUFBUUMsSUFBUixFQUFjSyxJQUFkLEVBQXVCO0FBQzdDTixTQUFLLENBQUNFLGNBQU47QUFDQUYsU0FBSyxDQUFDRyxlQUFOO0FBQ0FaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDUSxLQUFyQztBQUNBLFFBQU1PLFlBQVksR0FBR0MsQ0FBQyxZQUFLRixJQUFMLEVBQUQsQ0FBY0csR0FBZCxDQUFrQixTQUFsQixDQUFyQjs7QUFDQSxRQUFJRixZQUFZLEtBQUssTUFBckIsRUFBNkI7QUFDM0JDLE9BQUMsQ0FBQ1IsS0FBSyxDQUFDVSxNQUFQLENBQUQsQ0FBZ0JDLElBQWhCLENBQXFCLEdBQXJCO0FBQ0FILE9BQUMsWUFBS0YsSUFBTCxFQUFELENBQWNHLEdBQWQsQ0FBa0IsU0FBbEIsRUFBNkIsT0FBN0I7QUFDRCxLQUhELE1BR087QUFDTEQsT0FBQyxDQUFDUixLQUFLLENBQUNVLE1BQVAsQ0FBRCxDQUFnQkMsSUFBaEIsQ0FBcUIsR0FBckI7QUFDQUgsT0FBQyxZQUFLRixJQUFMLEVBQUQsQ0FBY0csR0FBZCxDQUFrQixTQUFsQixFQUE2QixNQUE3QjtBQUNEO0FBQ0YsR0FaRDs7QUFjQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDWCxJQUFELEVBQVU7QUFDM0IsUUFBTVksY0FBYyxzQkFBZSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBZixjQUF1Q2QsSUFBSSxDQUFDZSxFQUE1QyxDQUFwQjtBQUVBLFdBQ0U7QUFDRSxlQUFTLEVBQUVmLElBQUksQ0FBQ2dCLFNBRGxCO0FBRUUsU0FBRyxFQUFFaEIsSUFBSSxDQUFDZSxFQUZaO0FBR0UsYUFBTyxFQUFFLGlCQUFDaEIsS0FBRDtBQUFBLGVBQVdELFNBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLENBQXBCO0FBQUEsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxJQUFJLENBQUNpQixJQUFMLEtBQWMsTUFBZCxJQUNDLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2pCLElBQUksQ0FBQ2tCLGFBQUwsaUJBQ0M5Qiw0Q0FBSyxDQUFDK0IsYUFBTixDQUFvQm5CLElBQUksQ0FBQ2tCLGFBQXpCLEVBQXdDO0FBQ3RDRSxVQUFJLEVBQUUsSUFEZ0M7QUFFdENDLFdBQUssRUFBRTtBQUYrQixLQUF4QyxDQUZKLEVBTUU7QUFBTSxlQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3QnJCLElBQUksQ0FBQ3NCLFdBQTdCLENBTkYsRUFPR3RCLElBQUksQ0FBQ3VCLE9BQUwsSUFDQztBQUNFLGFBQU8sRUFBRSxpQkFBQ3hCLEtBQUQ7QUFBQSxlQUNQSyxlQUFlLENBQUNMLEtBQUQsRUFBUUMsSUFBUixFQUFjWSxjQUFkLENBRFI7QUFBQSxPQURYO0FBSUUsZUFBUyxFQUFDLG1CQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FSSixDQURGLENBRkosRUF1QkdaLElBQUksQ0FBQ2lCLElBQUwsS0FBYyxNQUFkLElBQ0M7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGFBQU8sRUFBRSxpQkFBQ2xCLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNFLGNBQU4sRUFBWDtBQUFBLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsSUFBSSxDQUFDc0IsV0FEUixDQXhCSixFQTRCR3RCLElBQUksQ0FBQ3VCLE9BQUwsSUFDQztBQUFJLGVBQVMsRUFBQyxTQUFkO0FBQXdCLFNBQUcsRUFBRVgsY0FBN0I7QUFBNkMsUUFBRSxFQUFFQSxjQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0daLElBQUksQ0FBQ3VCLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxNQUFELEVBQVk7QUFDNUIsYUFBT2QsVUFBVSxDQUFDYyxNQUFELENBQWpCO0FBQ0QsS0FGQSxDQURILENBN0JKLENBTEYsQ0FERjtBQTRDRCxHQS9DRDs7QUFpREEsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1QixnQkFBZ0IsSUFBSUEsZ0JBQWdCLENBQUM2QixNQUFqQixHQUEwQixDQUE5QyxJQUNDO0FBQUssTUFBRSxFQUFDLHVCQUFSO0FBQWdDLGFBQVMsRUFBQyx1QkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzdCLGdCQUFnQixDQUFDMkIsR0FBakIsQ0FBcUIsVUFBQ3hCLElBQUQsRUFBVTtBQUM5QixXQUFPVyxVQUFVLENBQUNYLElBQUQsQ0FBakI7QUFDRCxHQUZBLENBREgsQ0FERixDQUZKLENBREY7QUFhRDs7R0FqR3VCZixpQjtVQUNMRSx1RCxFQU1JTSx1RDs7O0tBUENSLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC45MzYxMjM5YTk2OTcyZWRjNjk1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBEYXNoYm9hcmQsXHJcbiAgVmlkZW9nYW1lQXNzZXQsXHJcbiAgQ2FsZW5kYXJUb2RheSxcclxuICBDb250YWN0UGFnZSxcclxuICBIZWxwQ2VudGVyLFxyXG59IGZyb20gXCJAc3R5bGVkLWljb25zL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IENhbGVuZGFyQWx0LCBDYWxlbmRhckNoZWNrLCBXYWxsZXQgfSBmcm9tIFwiQHN0eWxlZC1pY29ucy9mYS1zb2xpZFwiO1xyXG5pbXBvcnQgeyBTY2lraXRMZWFybiwgWW91dHViZSwgQmxvZ2dlciB9IGZyb20gXCJAc3R5bGVkLWljb25zL3NpbXBsZS1pY29uc1wiO1xyXG5pbXBvcnQgeyBnZXRTaWRlTWVudU1ldGFEYXRhLCBvbkxpSXRlbVNlbGVjdCB9IGZyb20gXCIuLy4uLy4uLy4uL3N0b3JlL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcE5hdmlnYXRpb25NZW51KCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCItLT09Pj4gR0VUX1NJREVNRU5VX0RFVEFJTFNfU1VDQ0VTUyAgPDw9PS0tXCIpO1xyXG4gICAgZGlzcGF0Y2goZ2V0U2lkZU1lbnVNZXRhRGF0YSgpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgbWV0YURhdGEgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWV0YURhdGE6IHN0YXRlLk1ldGFEYXRhLFxyXG4gICAgfTtcclxuICB9KTtcclxuICBjb25zdCB7IHNpZGVNZW51TWV0YUluZm8gfSA9IG1ldGFEYXRhO1xyXG4gIGNvbnNvbGUubG9nKFwiLS09PSBtZXRhRGF0YTogc2lkZU1lbnVNZXRhSW5mbyBcIiwgbWV0YURhdGEsIHNpZGVNZW51TWV0YUluZm8pO1xyXG5cclxuICBjb25zdCBvbkxpQ2xpY2sgPSAoZXZlbnQsIGl0ZW0pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRpc3BhdGNoKG9uTGlJdGVtU2VsZWN0KGl0ZW0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblRvZ2dsZVN1Ym1lbnUgPSAoZXZlbnQsIGl0ZW0sIHVsSWQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKFwiLS09PSBvblRvZ2dsZVN1Ym1lbnUgXCIsIGV2ZW50KTtcclxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9ICQoYCMke3VsSWR9YCkuY3NzKFwiZGlzcGxheVwiKTtcclxuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICQoZXZlbnQudGFyZ2V0KS50ZXh0KFwiLVwiKTtcclxuICAgICAgJChgIyR7dWxJZH1gKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGV2ZW50LnRhcmdldCkudGV4dChcIitcIik7XHJcbiAgICAgICQoYCMke3VsSWR9YCkuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TGlua1RhZyA9IChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21VbmlxdWVJZCA9IGBzdWJtZW51SWQke25ldyBEYXRlKCkuZ2V0VGltZSgpfV8ke2l0ZW0uaWR9YDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGlcclxuICAgICAgICBjbGFzc05hbWU9e2l0ZW0uY2xhc3NOYW1lfVxyXG4gICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IG9uTGlDbGljayhldmVudCwgaXRlbSl9XHJcbiAgICAgID5cclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICB7aXRlbS50eXBlID09PSBcImxpbmtcIiAmJiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uaWNvbkNvbXBvbmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGl0ZW0uaWNvbkNvbXBvbmVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMjBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPntpdGVtLmRpc3BsYXlOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnN1Yk1lbnUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlU3VibWVudShldmVudCwgaXRlbSwgcmFuZG9tVW5pcXVlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1lbnUtaW5kaWNhdG9yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2l0ZW0udHlwZSA9PT0gXCJpbmZvXCIgJiYgKFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAge2l0ZW0uZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7aXRlbS5zdWJNZW51ICYmIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Ym1lbnVcIiBrZXk9e3JhbmRvbVVuaXF1ZUlkfSBpZD17cmFuZG9tVW5pcXVlSWR9PlxyXG4gICAgICAgICAgICAgIHtpdGVtLnN1Yk1lbnUubWFwKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRMaW5rVGFnKGVudGl0eSk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtzaWRlTWVudU1ldGFJbmZvICYmIHNpZGVNZW51TWV0YUluZm8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImpxdWVyeS1hY2NvcmRpb24tbWVudVwiIGNsYXNzTmFtZT1cImpxdWVyeS1hY2NvcmRpb24tbWVudVwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7c2lkZU1lbnVNZXRhSW5mby5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gZ2V0TGlua1RhZyhpdGVtKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHNldEJyZWFrUG9pbnRzIH0gZnJvbSBcIi4vX2JyZWFrUG9pbnRzXCI7XHJcbmltcG9ydCB7IGdldEFjdGl2ZVNlc3Npb25Vc2VyIH0gZnJvbSBcIi4vX3VzZXJzXCI7XHJcbmltcG9ydCB7IGdldFNpZGVNZW51TWV0YURhdGEsIG9uTGlJdGVtU2VsZWN0IH0gZnJvbSBcIi4vX21ldGFkYXRhXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIHNldEJyZWFrUG9pbnRzLFxyXG4gIGdldEFjdGl2ZVNlc3Npb25Vc2VyLFxyXG4gIGdldFNpZGVNZW51TWV0YURhdGEsXHJcbiAgb25MaUl0ZW1TZWxlY3QsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=