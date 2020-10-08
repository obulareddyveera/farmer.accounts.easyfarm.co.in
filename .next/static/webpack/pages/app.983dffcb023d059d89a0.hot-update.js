webpackHotUpdate_N_E("pages/app",{

/***/ "./store/actions/_metadata.js":
/*!************************************!*\
  !*** ./store/actions/_metadata.js ***!
  \************************************/
/*! exports provided: getSideMenuMetaData, onLiItemSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSideMenuMetaData", function() { return getSideMenuMetaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLiItemSelect", function() { return onLiItemSelect; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/_metadata */ "./store/types/_metadata.js");
/* harmony import */ var _metadata_sideMenuMetaInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metadata/sideMenuMetaInfo */ "./store/metadata/sideMenuMetaInfo.js");




var getSideMenuMetaData = function getSideMenuMetaData() {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                console.log('--==>> Action GET_SIDEMENU_DETAILS_SUCCESS  <<==--');
                dispatch({
                  type: _types_metadata__WEBPACK_IMPORTED_MODULE_2__["metaDataTypes"].GET_SIDEMENU_DETAILS_SUCCESS,
                  payload: _metadata_sideMenuMetaInfo__WEBPACK_IMPORTED_MODULE_3__["default"]
                });
              } catch (err) {
                console.log(err);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var onLiItemSelect = function onLiItemSelect(item) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                console.log('--==>> Action GET_SIDEMENU_DETAILS_SUCCESS  <<==--');
                _metadata_sideMenuMetaInfo__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(function (entity) {
                  if (entity.id === item.id) {
                    entity.className = "active";
                  } else {
                    entity.className = null;
                  }
                });
                dispatch({
                  type: _types_metadata__WEBPACK_IMPORTED_MODULE_2__["metaDataTypes"].SELECT_SIDEMENU_LIITEM_ON_CLICK,
                  payload: _metadata_sideMenuMetaInfo__WEBPACK_IMPORTED_MODULE_3__["default"]
                });
              } catch (err) {
                console.log(err);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

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

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: setBreakPoints, getActiveSessionUser, getSideMenuMetaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _breakPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_breakPoints */ "./store/actions/_breakPoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBreakPoints", function() { return _breakPoints__WEBPACK_IMPORTED_MODULE_0__["setBreakPoints"]; });

/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_users */ "./store/actions/_users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveSessionUser", function() { return _users__WEBPACK_IMPORTED_MODULE_1__["getActiveSessionUser"]; });

/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_metadata */ "./store/actions/_metadata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSideMenuMetaData", function() { return _metadata__WEBPACK_IMPORTED_MODULE_2__["getSideMenuMetaData"]; });






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9fbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2FjdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0U2lkZU1lbnVNZXRhRGF0YSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJtZXRhRGF0YVR5cGVzIiwiR0VUX1NJREVNRU5VX0RFVEFJTFNfU1VDQ0VTUyIsInBheWxvYWQiLCJTaWRlTWVudU1ldGFJbmZvIiwiZXJyIiwib25MaUl0ZW1TZWxlY3QiLCJpdGVtIiwiZm9yRWFjaCIsImVudGl0eSIsImlkIiwiY2xhc3NOYW1lIiwiU0VMRUNUX1NJREVNRU5VX0xJSVRFTV9PTl9DTElDSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBO0FBQUEsZ01BQU0saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QyxrQkFBSTtBQUNGQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7QUFDQUYsd0JBQVEsQ0FBQztBQUNQRyxzQkFBSSxFQUFFQyw2REFBYSxDQUFDQyw0QkFEYjtBQUVQQyx5QkFBTyxFQUFFQyxrRUFBZ0JBO0FBRmxCLGlCQUFELENBQVI7QUFJRCxlQU5ELENBTUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pQLHVCQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWjtBQUNEOztBQVRzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBNUI7QUFZQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQ7QUFBQTtBQUFBLGlNQUFVLGtCQUFPVixRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEMsa0JBQUk7QUFDRkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0FLLGtGQUFnQixDQUFDSSxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDbkMsc0JBQUlBLE1BQU0sQ0FBQ0MsRUFBUCxLQUFjSCxJQUFJLENBQUNHLEVBQXZCLEVBQTJCO0FBQ3pCRCwwQkFBTSxDQUFDRSxTQUFQLEdBQW1CLFFBQW5CO0FBQ0QsbUJBRkQsTUFFTztBQUNMRiwwQkFBTSxDQUFDRSxTQUFQLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRixpQkFORDtBQVFBZCx3QkFBUSxDQUFDO0FBQ1BHLHNCQUFJLEVBQUVDLDZEQUFhLENBQUNXLCtCQURiO0FBRVBULHlCQUFPLEVBQUVDLGtFQUFnQkE7QUFGbEIsaUJBQUQsQ0FBUjtBQUlELGVBZEQsQ0FjRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlAsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFaO0FBQ0Q7O0FBakJxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXBwLjk4M2RmZmNiMDIzZDA1OWQ4OWEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXRhRGF0YVR5cGVzIH0gZnJvbSBcIi4uL3R5cGVzL19tZXRhZGF0YVwiO1xyXG5pbXBvcnQgU2lkZU1lbnVNZXRhSW5mbyBmcm9tIFwiLi4vbWV0YWRhdGEvc2lkZU1lbnVNZXRhSW5mb1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpZGVNZW51TWV0YURhdGEgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJy0tPT0+PiBBY3Rpb24gR0VUX1NJREVNRU5VX0RFVEFJTFNfU1VDQ0VTUyAgPDw9PS0tJyk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IG1ldGFEYXRhVHlwZXMuR0VUX1NJREVNRU5VX0RFVEFJTFNfU1VDQ0VTUyxcclxuICAgICAgcGF5bG9hZDogU2lkZU1lbnVNZXRhSW5mbyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb25MaUl0ZW1TZWxlY3QgPSAoaXRlbSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKCctLT09Pj4gQWN0aW9uIEdFVF9TSURFTUVOVV9ERVRBSUxTX1NVQ0NFU1MgIDw8PT0tLScpO1xyXG4gICAgU2lkZU1lbnVNZXRhSW5mby5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgaWYgKGVudGl0eS5pZCA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgIGVudGl0eS5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudGl0eS5jbGFzc05hbWUgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IG1ldGFEYXRhVHlwZXMuU0VMRUNUX1NJREVNRU5VX0xJSVRFTV9PTl9DTElDSyxcclxuICAgICAgcGF5bG9hZDogU2lkZU1lbnVNZXRhSW5mbyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2V0QnJlYWtQb2ludHMgfSBmcm9tIFwiLi9fYnJlYWtQb2ludHNcIjtcclxuaW1wb3J0IHsgZ2V0QWN0aXZlU2Vzc2lvblVzZXIgfSBmcm9tIFwiLi9fdXNlcnNcIjtcclxuaW1wb3J0IHsgZ2V0U2lkZU1lbnVNZXRhRGF0YSB9IGZyb20gXCIuL19tZXRhZGF0YVwiO1xyXG5cclxuZXhwb3J0IHsgc2V0QnJlYWtQb2ludHMsIGdldEFjdGl2ZVNlc3Npb25Vc2VyLCBnZXRTaWRlTWVudU1ldGFEYXRhIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=