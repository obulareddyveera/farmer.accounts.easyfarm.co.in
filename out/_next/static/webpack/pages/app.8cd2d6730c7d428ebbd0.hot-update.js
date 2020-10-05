webpackHotUpdate_N_E("pages/app",{

/***/ "./hooks/useBreakPoints.js":
/*!*********************************!*\
  !*** ./hooks/useBreakPoints.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();





var getDeviceConfig = function getDeviceConfig(width) {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 720) {
    return "sm";
  } else if (width >= 720 && width < 1024) {
    return "md";
  } else if (width >= 1024) {
    return "lg";
  }
};

var useBreakpoint = function useBreakpoint() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    if (true) {
      getDeviceConfig(window.innerWidth);
    }
  }),
      brkPnt = _useState[0],
      setBrkPnt = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var calcInnerWidth = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return function () {
      return window.removeEventListener("resize", calcInnerWidth);
    };
  }, []);
  return brkPnt;
};

_s(useBreakpoint, "wf6725SeEnS18d0hBNaHs+Y2J5s=");

/* harmony default export */ __webpack_exports__["default"] = (useBreakpoint);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQnJlYWtQb2ludHMuanMiXSwibmFtZXMiOlsiZ2V0RGV2aWNlQ29uZmlnIiwid2lkdGgiLCJ1c2VCcmVha3BvaW50IiwidXNlU3RhdGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYnJrUG50Iiwic2V0QnJrUG50IiwidXNlRWZmZWN0IiwiY2FsY0lubmVyV2lkdGgiLCJ0aHJvdHRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJQSxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUNmLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxHQUFHLEdBQTVCLEVBQWlDO0FBQ3RDLFdBQU8sSUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxLQUFLLElBQUksR0FBVCxJQUFnQkEsS0FBSyxHQUFHLElBQTVCLEVBQWtDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxLQUFLLElBQUksSUFBYixFQUFtQjtBQUN4QixXQUFPLElBQVA7QUFDRDtBQUNGLENBVkQ7O0FBWUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsWUFBTTtBQUN6QyxjQUFxQjtBQUNuQkgscUJBQWUsQ0FBQ0ksTUFBTSxDQUFDQyxVQUFSLENBQWY7QUFDRDtBQUNGLEdBSm1DLENBRFY7QUFBQSxNQUNuQkMsTUFEbUI7QUFBQSxNQUNYQyxTQURXOztBQU8xQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsY0FBYyxHQUFHQyxzREFBUSxDQUFDLFlBQVk7QUFDMUNILGVBQVMsQ0FBQ1AsZUFBZSxDQUFDSSxNQUFNLENBQUNDLFVBQVIsQ0FBaEIsQ0FBVDtBQUNELEtBRjhCLEVBRTVCLEdBRjRCLENBQS9CO0FBR0FELFVBQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NGLGNBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1MLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILGNBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQU9ILE1BQVA7QUFDRCxDQWhCRDs7R0FBTUosYTs7QUFpQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcC44Y2QyZDY3MzBjN2Q0MjhlYmJkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwibG9kYXNoLnRocm90dGxlXCI7XHJcblxyXG5jb25zdCBnZXREZXZpY2VDb25maWcgPSAod2lkdGgpID0+IHtcclxuICBpZiAod2lkdGggPCAzMjApIHtcclxuICAgIHJldHVybiBcInhzXCI7XHJcbiAgfSBlbHNlIGlmICh3aWR0aCA+PSAzMjAgJiYgd2lkdGggPCA3MjApIHtcclxuICAgIHJldHVybiBcInNtXCI7XHJcbiAgfSBlbHNlIGlmICh3aWR0aCA+PSA3MjAgJiYgd2lkdGggPCAxMDI0KSB7XHJcbiAgICByZXR1cm4gXCJtZFwiO1xyXG4gIH0gZWxzZSBpZiAod2lkdGggPj0gMTAyNCkge1xyXG4gICAgcmV0dXJuIFwibGdcIjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB1c2VCcmVha3BvaW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFticmtQbnQsIHNldEJya1BudF0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgIGdldERldmljZUNvbmZpZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYWxjSW5uZXJXaWR0aCA9IHRocm90dGxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0QnJrUG50KGdldERldmljZUNvbmZpZyh3aW5kb3cuaW5uZXJXaWR0aCkpO1xyXG4gICAgfSwgMjAwKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNhbGNJbm5lcldpZHRoKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjYWxjSW5uZXJXaWR0aCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gYnJrUG50O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB1c2VCcmVha3BvaW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9