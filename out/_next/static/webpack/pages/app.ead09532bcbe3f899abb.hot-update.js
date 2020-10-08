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
                console.log("--==>> Action GET_SIDEMENU_DETAILS_SUCCESS  <<==--");
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
                console.log("--==>> Action GET_SIDEMENU_DETAILS_SUCCESS  <<==--");
                _metadata_sideMenuMetaInfo__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(function (entity) {
                  if (entity.subMenu && entity.subMenu.length > 0) {
                    entity.subMenu.forEach(function (subEntity) {
                      if (subEntity.id === item.id) {
                        subEntity.className = "active";
                        entity.className = "active";
                      } else {
                        subEntity.className = null;
                        entity.className = null;
                      }
                    });
                  } else {
                    if (entity.id === item.id) {
                      entity.className = "active";
                    } else {
                      entity.className = null;
                    }
                  }
                });
                dispatch({
                  type: _types_metadata__WEBPACK_IMPORTED_MODULE_2__["metaDataTypes"].GET_SIDEMENU_DETAILS_SUCCESS,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9fbWV0YWRhdGEuanMiXSwibmFtZXMiOlsiZ2V0U2lkZU1lbnVNZXRhRGF0YSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJtZXRhRGF0YVR5cGVzIiwiR0VUX1NJREVNRU5VX0RFVEFJTFNfU1VDQ0VTUyIsInBheWxvYWQiLCJTaWRlTWVudU1ldGFJbmZvIiwiZXJyIiwib25MaUl0ZW1TZWxlY3QiLCJpdGVtIiwiZm9yRWFjaCIsImVudGl0eSIsInN1Yk1lbnUiLCJsZW5ndGgiLCJzdWJFbnRpdHkiLCJpZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBO0FBQUEsZ01BQU0saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QyxrQkFBSTtBQUNGQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksb0RBQVo7QUFDQUYsd0JBQVEsQ0FBQztBQUNQRyxzQkFBSSxFQUFFQyw2REFBYSxDQUFDQyw0QkFEYjtBQUVQQyx5QkFBTyxFQUFFQyxrRUFBZ0JBO0FBRmxCLGlCQUFELENBQVI7QUFJRCxlQU5ELENBTUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pQLHVCQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWjtBQUNEOztBQVRzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBNUI7QUFZQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQ7QUFBQTtBQUFBLGlNQUFVLGtCQUFPVixRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEMsa0JBQUk7QUFDRkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0FLLGtGQUFnQixDQUFDSSxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDbkMsc0JBQUlBLE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQkQsTUFBTSxDQUFDQyxPQUFQLENBQWVDLE1BQWYsR0FBd0IsQ0FBOUMsRUFBaUQ7QUFDL0NGLDBCQUFNLENBQUNDLE9BQVAsQ0FBZUYsT0FBZixDQUF1QixVQUFDSSxTQUFELEVBQWU7QUFDcEMsMEJBQUlBLFNBQVMsQ0FBQ0MsRUFBVixLQUFpQk4sSUFBSSxDQUFDTSxFQUExQixFQUE4QjtBQUM1QkQsaUNBQVMsQ0FBQ0UsU0FBVixHQUFzQixRQUF0QjtBQUNBTCw4QkFBTSxDQUFDSyxTQUFQLEdBQW1CLFFBQW5CO0FBQ0QsdUJBSEQsTUFHTztBQUNMRixpQ0FBUyxDQUFDRSxTQUFWLEdBQXNCLElBQXRCO0FBQ0FMLDhCQUFNLENBQUNLLFNBQVAsR0FBbUIsSUFBbkI7QUFDRDtBQUNGLHFCQVJEO0FBU0QsbUJBVkQsTUFVTztBQUNMLHdCQUFJTCxNQUFNLENBQUNJLEVBQVAsS0FBY04sSUFBSSxDQUFDTSxFQUF2QixFQUEyQjtBQUN6QkosNEJBQU0sQ0FBQ0ssU0FBUCxHQUFtQixRQUFuQjtBQUNELHFCQUZELE1BRU87QUFDTEwsNEJBQU0sQ0FBQ0ssU0FBUCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7QUFDRixpQkFsQkQ7QUFvQkFqQix3QkFBUSxDQUFDO0FBQ1BHLHNCQUFJLEVBQUVDLDZEQUFhLENBQUNDLDRCQURiO0FBRVBDLHlCQUFPLEVBQUVDLGtFQUFnQkE7QUFGbEIsaUJBQUQsQ0FBUjtBQUlELGVBMUJELENBMEJFLE9BQU9DLEdBQVAsRUFBWTtBQUNaUCx1QkFBTyxDQUFDQyxHQUFSLENBQVlNLEdBQVo7QUFDRDs7QUE3QnFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcHAuZWFkMDk1MzJiY2JlM2Y4OTlhYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ldGFEYXRhVHlwZXMgfSBmcm9tIFwiLi4vdHlwZXMvX21ldGFkYXRhXCI7XHJcbmltcG9ydCBTaWRlTWVudU1ldGFJbmZvIGZyb20gXCIuLi9tZXRhZGF0YS9zaWRlTWVudU1ldGFJbmZvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2lkZU1lbnVNZXRhRGF0YSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi0tPT0+PiBBY3Rpb24gR0VUX1NJREVNRU5VX0RFVEFJTFNfU1VDQ0VTUyAgPDw9PS0tXCIpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBtZXRhRGF0YVR5cGVzLkdFVF9TSURFTUVOVV9ERVRBSUxTX1NVQ0NFU1MsXHJcbiAgICAgIHBheWxvYWQ6IFNpZGVNZW51TWV0YUluZm8sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uTGlJdGVtU2VsZWN0ID0gKGl0ZW0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi0tPT0+PiBBY3Rpb24gR0VUX1NJREVNRU5VX0RFVEFJTFNfU1VDQ0VTUyAgPDw9PS0tXCIpO1xyXG4gICAgU2lkZU1lbnVNZXRhSW5mby5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgaWYgKGVudGl0eS5zdWJNZW51ICYmIGVudGl0eS5zdWJNZW51Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlbnRpdHkuc3ViTWVudS5mb3JFYWNoKChzdWJFbnRpdHkpID0+IHtcclxuICAgICAgICAgIGlmIChzdWJFbnRpdHkuaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICAgICAgc3ViRW50aXR5LmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgICAgICAgIGVudGl0eS5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3ViRW50aXR5LmNsYXNzTmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGVudGl0eS5jbGFzc05hbWUgPSBudWxsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChlbnRpdHkuaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICAgIGVudGl0eS5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlbnRpdHkuY2xhc3NOYW1lID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogbWV0YURhdGFUeXBlcy5HRVRfU0lERU1FTlVfREVUQUlMU19TVUNDRVNTLFxyXG4gICAgICBwYXlsb2FkOiBTaWRlTWVudU1ldGFJbmZvLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==