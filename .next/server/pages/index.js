module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-google-button/es/GoogleButton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-google-button/es/GoogleButton.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _icons = __webpack_require__(/*! ./icons */ "./node_modules/react-google-button/es/icons.js");

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-google-button/es/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(GoogleButton, _PureComponent);

  var _super = _createSuper(GoogleButton);

  function GoogleButton() {
    var _this;

    _classCallCheck(this, GoogleButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hovered: false
    });

    _defineProperty(_assertThisInitialized(_this), "getStyle", function (propStyles) {
      var baseStyle = _this.props.type === 'dark' ? _styles.darkStyle : _styles.lightStyle;

      if (_this.state.hovered) {
        return _objectSpread({}, baseStyle, {}, _styles.hoverStyle, {}, propStyles);
      }

      if (_this.props.disabled) {
        return _objectSpread({}, baseStyle, {}, _styles.disabledStyle, {}, propStyles);
      }

      return _objectSpread({}, baseStyle, {}, propStyles);
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOver", function () {
      if (!_this.props.disabled) {
        _this.setState({
          hovered: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOut", function () {
      if (!_this.props.disabled) {
        _this.setState({
          hovered: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "click", function (e) {
      if (!_this.props.disabled) {
        _this.props.onClick(e);
      }
    });

    return _this;
  }

  _createClass(GoogleButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["label", "style"]);

      return /*#__PURE__*/_react.default.createElement("div", _extends({}, otherProps, {
        role: "button",
        onClick: this.click,
        style: this.getStyle(style),
        onMouseOver: this.mouseOver,
        onMouseOut: this.mouseOut
      }), /*#__PURE__*/_react.default.createElement(_icons.GoogleIcon, this.props), /*#__PURE__*/_react.default.createElement("span", null, label));
    }
  }]);

  return GoogleButton;
}(_react.PureComponent);

exports.default = GoogleButton;

_defineProperty(GoogleButton, "propTypes", {
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  onClick: _propTypes.default.func,
  type: _propTypes.default.oneOf(['light', 'dark']),
  style: _propTypes.default.object
});

_defineProperty(GoogleButton, "defaultProps", {
  label: 'Sign in with Google',
  disabled: false,
  type: 'dark',
  tabIndex: 0,
  onClick: function onClick() {}
});

/***/ }),

/***/ "./node_modules/react-google-button/es/icons.js":
/*!******************************************************!*\
  !*** ./node_modules/react-google-button/es/icons.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleIcon = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-google-button/es/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var darkSvg = /*#__PURE__*/_react.default.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "46px",
  height: "46px",
  viewBox: "0 0 46 46",
  style: _styles.svgStyle
}, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
  x: "-50%",
  y: "-50%",
  width: "200%",
  height: "200%",
  filterUnits: "objectBoundingBox",
  id: "filter-1"
}, /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "1",
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter1",
  result: "shadowBlurOuter1"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",
  in: "shadowBlurOuter1",
  type: "matrix",
  result: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "0",
  in: "SourceAlpha",
  result: "shadowOffsetOuter2"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter2",
  result: "shadowBlurOuter2"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",
  in: "shadowBlurOuter2",
  type: "matrix",
  result: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMerge", null, /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "SourceGraphic"
}))), /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-2",
  x: "0",
  y: "0",
  width: "40",
  height: "40",
  rx: "2"
}), /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-3",
  x: "5",
  y: "5",
  width: "38",
  height: "38",
  rx: "1"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "Google-Button",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "9-PATCH",
  transform: "translate(-608.000000, -219.000000)"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "btn_google_dark_normal",
  transform: "translate(-1.000000, -1.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button",
  transform: "translate(4.000000, 4.000000)",
  filter: "url(#filter-1)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg"
}, /*#__PURE__*/_react.default.createElement("use", {
  fill: "#4285F4",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}))), /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg-copy"
}, /*#__PURE__*/_react.default.createElement("use", {
  fill: "#FFFFFF",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "logo_googleg_48dp",
  transform: "translate(15.000000, 15.000000)"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",
  id: "Shape",
  fill: "#4285F4"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",
  id: "Shape",
  fill: "#34A853"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",
  id: "Shape",
  fill: "#FBBC05"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",
  id: "Shape",
  fill: "#EA4335"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M0,0 L18,0 L18,18 L0,18 L0,0 Z",
  id: "Shape"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "handles_square"
}))));

var lightSvg = /*#__PURE__*/_react.default.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "46px",
  height: "46px",
  viewBox: "0 0 46 46",
  style: _styles.svgStyle
}, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
  x: "-50%",
  y: "-50%",
  width: "200%",
  height: "200%",
  filterUnits: "objectBoundingBox",
  id: "filter-1"
}, /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "1",
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter1",
  result: "shadowBlurOuter1"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0",
  in: "shadowBlurOuter1",
  type: "matrix",
  result: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feOffset", {
  dx: "0",
  dy: "0",
  in: "SourceAlpha",
  result: "shadowOffsetOuter2"
}), /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
  stdDeviation: "0.5",
  in: "shadowOffsetOuter2",
  result: "shadowBlurOuter2"
}), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
  values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0",
  in: "shadowBlurOuter2",
  type: "matrix",
  result: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMerge", null, /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter1"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "shadowMatrixOuter2"
}), /*#__PURE__*/_react.default.createElement("feMergeNode", {
  in: "SourceGraphic"
}))), /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-2",
  x: "0",
  y: "0",
  width: "40",
  height: "40",
  rx: "2"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "Google-Button",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "9-PATCH",
  transform: "translate(-608.000000, -160.000000)"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "btn_google_light_normal",
  transform: "translate(-1.000000, -1.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button",
  transform: "translate(4.000000, 4.000000)",
  filter: "url(#filter-1)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg"
}, /*#__PURE__*/_react.default.createElement("use", {
  fill: "#FFFFFF",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}))), /*#__PURE__*/_react.default.createElement("g", {
  id: "logo_googleg_48dp",
  transform: "translate(15.000000, 15.000000)"
}, /*#__PURE__*/_react.default.createElement("path", {
  d: "M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z",
  id: "Shape",
  fill: "#4285F4"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z",
  id: "Shape",
  fill: "#34A853"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z",
  id: "Shape",
  fill: "#FBBC05"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z",
  id: "Shape",
  fill: "#EA4335"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M0,0 L18,0 L18,18 L0,18 L0,0 Z",
  id: "Shape"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "handles_square"
}))));

var disabledSvg = /*#__PURE__*/_react.default.createElement("svg", {
  width: "46px",
  height: "46px",
  viewBox: "0 0 46 46",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  style: _styles.svgStyle
}, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("rect", {
  id: "path-1",
  x: "0",
  y: "0",
  width: "40",
  height: "40",
  rx: "2"
})), /*#__PURE__*/_react.default.createElement("g", {
  id: "Google-Button",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "9-PATCH",
  transform: "translate(-788.000000, -219.000000)"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "btn_google_dark_disabled",
  transform: "translate(-1.000000, -1.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button",
  transform: "translate(4.000000, 4.000000)"
}, /*#__PURE__*/_react.default.createElement("g", {
  id: "button-bg"
}, /*#__PURE__*/_react.default.createElement("use", {
  fillOpacity: "0.08",
  fill: "#000000",
  fillRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("use", {
  fill: "none"
}))), /*#__PURE__*/_react.default.createElement("path", {
  d: "M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z",
  id: "Shape-Copy",
  fillOpacity: "0.4",
  fill: "#000000"
}), /*#__PURE__*/_react.default.createElement("g", {
  id: "handles_square"
}))));

var GoogleIcon = function GoogleIcon(_ref) {
  var disabled = _ref.disabled,
      type = _ref.type;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: !disabled ? _styles.iconStyle : _objectSpread({}, _styles.iconStyle, {}, _styles.disabledIconStyle)
  }, !disabled ? type === 'dark' ? darkSvg : lightSvg : disabledSvg);
};

exports.GoogleIcon = GoogleIcon;
GoogleIcon.propTypes = {
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['light', 'dark'])
};
GoogleIcon.defaultProps = {
  type: 'dark'
};

/***/ }),

/***/ "./node_modules/react-google-button/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-google-button/es/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GoogleButton", {
  enumerable: true,
  get: function get() {
    return _GoogleButton2.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _GoogleButton2.default;
  }
});

var _GoogleButton2 = _interopRequireDefault(__webpack_require__(/*! ./GoogleButton */ "./node_modules/react-google-button/es/GoogleButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-google-button/es/styles.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-google-button/es/styles.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabledIconStyle = exports.disabledStyle = exports.hoverStyle = exports.svgStyle = exports.iconStyle = exports.lightStyle = exports.darkStyle = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseStyle = {
  height: '50px',
  width: '240px',
  border: 'none',
  textAlign: 'center',
  verticalAlign: 'center',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
  fontSize: '16px',
  lineHeight: '48px',
  display: 'block',
  borderRadius: '1px',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s',
  fontFamily: 'Roboto,arial,sans-serif',
  cursor: 'pointer',
  userSelect: 'none'
};

var darkStyle = _objectSpread({
  backgroundColor: '#4285f4',
  color: '#fff'
}, baseStyle);

exports.darkStyle = darkStyle;

var lightStyle = _objectSpread({
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.54)'
}, baseStyle);

exports.lightStyle = lightStyle;
var iconStyle = {
  width: '48px',
  height: '48px',
  textAlign: 'center',
  verticalAlign: 'center',
  display: 'block',
  marginTop: '1px',
  marginLeft: '1px',
  float: 'left',
  backgroundColor: '#fff',
  borderRadius: '1px',
  whiteSpace: 'nowrap'
};
exports.iconStyle = iconStyle;
var svgStyle = {
  width: '48px',
  height: '48px',
  display: 'block'
};
exports.svgStyle = svgStyle;
var hoverStyle = {
  boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s'
}; // export const pressedStyle = {
//   backgroundColor: '#3367D6'
// }

exports.hoverStyle = hoverStyle;
var disabledStyle = {
  backgroundColor: 'rgba(37, 5, 5, .08)',
  color: 'rgba(0, 0, 0, .40)',
  cursor: 'not-allowed'
};
exports.disabledStyle = disabledStyle;
var disabledIconStyle = {
  backgroundColor: 'transparent'
};
exports.disabledIconStyle = disabledIconStyle;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../store/api_service */ "./store/api_service.js");
var _jsxFileName = "C:\\Users\\obulareddy.reddy\\workspace\\projects\\easyfarm\\farmer.accounts.easyfarm.co.in\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
function Home() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const fetchOAuth2LoginLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    try {
      _store_api_service__WEBPACK_IMPORTED_MODULE_4__["apiService"].getGoogleLoginLink().then(data => {
        router.push(data.loginLink);
      });
    } catch (err) {
      console.log(err);
    }
  });
  return __jsx("div", {
    className: "container-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "offset-4 col-4 d-flex flex-column align-items-center justify-content-center",
    style: {
      height: "100vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "card-body p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(Title, {
    className: "d-flex justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Farmer Accounts"), __jsx("h6", {
    className: "d-flex justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Accounting for the way you run your farm"), __jsx("p", {
    className: "d-flex justify-content-around mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "www.easyfarm.co.in",
    className: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "www.easyfarm.co.in")), __jsx("p", {
    className: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Farming is unique. There are few other types of business that rely on living produce, whether it's crops or livestock. That makes farm accounting more complex than other businesses when it comes to assets, liabilities, costs and revenue.")), __jsx("div", {
    className: "card-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(react_google_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: () => fetchOAuth2LoginLink(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })))))));
}

/***/ }),

/***/ "./store/api_service.js":
/*!******************************!*\
  !*** ./store/api_service.js ***!
  \******************************/
/*! exports provided: api, apiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiService", function() { return apiService; });
const api = {
  activeSessionUser: {
    url: "auth/users/session/active",
    method: "post"
  },
  googleLoginLink: {
    url: "api.farmer.accounts.easyfarm.co.in/",
    method: "get"
  },
  baseUrl: "api.farmer.accounts.easyfarm.co.in/",
  getProtocol: () => {
    return `${window.location.protocol}//`;
  }
};
const apiService = {
  getGoogleLoginLink: async () => {
    const url = `${api.getProtocol()}${api.googleLoginLink.url}`;
    const response = await fetch(url, {
      method: api.googleLoginLink.method,
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.json();
  },
  postData: async (apiEntity, data) => {
    try {
      const url = `${api.getProtocol()}${api.baseUrl}${apiEntity.url}`;
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("jwt")
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
      };

      if (data) {
        request.body = JSON.stringify(data);
      }

      const response = await fetch(url, request);
      return response.json();
    } catch (error) {
      return error;
    }
  }
};

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1idXR0b24vZXMvR29vZ2xlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtYnV0dG9uL2VzL2ljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtYnV0dG9uL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtYnV0dG9uL2VzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hcGlfc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVGl0bGUiLCJzdHlsZWQiLCJoMSIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaE9BdXRoMkxvZ2luTGluayIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJhcGlTZXJ2aWNlIiwiZ2V0R29vZ2xlTG9naW5MaW5rIiwidGhlbiIsImRhdGEiLCJwdXNoIiwibG9naW5MaW5rIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImFwaSIsImFjdGl2ZVNlc3Npb25Vc2VyIiwidXJsIiwibWV0aG9kIiwiZ29vZ2xlTG9naW5MaW5rIiwiYmFzZVVybCIsImdldFByb3RvY29sIiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwianNvbiIsInBvc3REYXRhIiwiYXBpRW50aXR5IiwicmVxdWVzdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLHFDQUFxQyxtQkFBTyxDQUFDLG9CQUFPOztBQUVwRCx3Q0FBd0MsbUJBQU8sQ0FBQyw4QkFBWTs7QUFFNUQsYUFBYSxtQkFBTyxDQUFDLCtEQUFTOztBQUU5QixjQUFjLG1CQUFPLENBQUMsaUVBQVU7O0FBRWhDLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixxQ0FBcUMsZ0RBQWdELDJCQUEyQixpRUFBaUUsY0FBYyxHQUFHLGNBQWM7O0FBRWhOLHVDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLDhFQUE4RSxT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QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNB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QUNiLEdBQUksRUFBL0Q7QUFFQSxZQUFNYyxPQUFPLEdBQUc7QUFDZGIsY0FBTSxFQUFFLE1BRE07QUFFZFMsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCLGtCQURUO0FBRVAsNEJBQWtCSyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckI7QUFGWCxTQUZLO0FBTWRDLGdCQUFRLEVBQUUsUUFOSTtBQU9kQyxzQkFBYyxFQUFFO0FBUEYsT0FBaEI7O0FBU0EsVUFBSTNCLElBQUosRUFBVTtBQUNSdUIsZUFBTyxDQUFDSyxJQUFSLEdBQWVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlOUIsSUFBZixDQUFmO0FBQ0Q7O0FBQ0QsWUFBTWlCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNULEdBQUQsRUFBTWMsT0FBTixDQUE1QjtBQUVBLGFBQU9OLFFBQVEsQ0FBQ0csSUFBVCxFQUFQO0FBQ0QsS0FsQkQsQ0FrQkUsT0FBT1csS0FBUCxFQUFjO0FBQ2QsYUFBT0EsS0FBUDtBQUNEO0FBQ0Y7QUFsQ3VCLENBQW5CLEM7Ozs7Ozs7Ozs7O0FDZlAsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2ljb25zID0gcmVxdWlyZShcIi4vaWNvbnNcIik7XG5cbnZhciBfc3R5bGVzID0gcmVxdWlyZShcIi4vc3R5bGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBHb29nbGVCdXR0b24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhHb29nbGVCdXR0b24sIF9QdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEdvb2dsZUJ1dHRvbik7XG5cbiAgZnVuY3Rpb24gR29vZ2xlQnV0dG9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHb29nbGVCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCB7XG4gICAgICBob3ZlcmVkOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFN0eWxlXCIsIGZ1bmN0aW9uIChwcm9wU3R5bGVzKSB7XG4gICAgICB2YXIgYmFzZVN0eWxlID0gX3RoaXMucHJvcHMudHlwZSA9PT0gJ2RhcmsnID8gX3N0eWxlcy5kYXJrU3R5bGUgOiBfc3R5bGVzLmxpZ2h0U3R5bGU7XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5ob3ZlcmVkKSB7XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlU3R5bGUsIHt9LCBfc3R5bGVzLmhvdmVyU3R5bGUsIHt9LCBwcm9wU3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBiYXNlU3R5bGUsIHt9LCBfc3R5bGVzLmRpc2FibGVkU3R5bGUsIHt9LCBwcm9wU3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGJhc2VTdHlsZSwge30sIHByb3BTdHlsZXMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1vdXNlT3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlcmVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1vdXNlT3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR29vZ2xlQnV0dG9uLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBsYWJlbCA9IF90aGlzJHByb3BzLmxhYmVsLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wcywgW1wibGFiZWxcIiwgXCJzdHlsZVwiXSk7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmNsaWNrLFxuICAgICAgICBzdHlsZTogdGhpcy5nZXRTdHlsZShzdHlsZSksXG4gICAgICAgIG9uTW91c2VPdmVyOiB0aGlzLm1vdXNlT3ZlcixcbiAgICAgICAgb25Nb3VzZU91dDogdGhpcy5tb3VzZU91dFxuICAgICAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9pY29ucy5Hb29nbGVJY29uLCB0aGlzLnByb3BzKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGxhYmVsKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEdvb2dsZUJ1dHRvbjtcbn0oX3JlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBHb29nbGVCdXR0b247XG5cbl9kZWZpbmVQcm9wZXJ0eShHb29nbGVCdXR0b24sIFwicHJvcFR5cGVzXCIsIHtcbiAgbGFiZWw6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgdGFiSW5kZXg6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuICB0eXBlOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICBzdHlsZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdFxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShHb29nbGVCdXR0b24sIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgbGFiZWw6ICdTaWduIGluIHdpdGggR29vZ2xlJyxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICB0eXBlOiAnZGFyaycsXG4gIHRhYkluZGV4OiAwLFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge31cbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Hb29nbGVJY29uID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3N0eWxlcyA9IHJlcXVpcmUoXCIuL3N0eWxlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBkYXJrU3ZnID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICB2ZXJzaW9uOiBcIjEuMVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogXCI0NnB4XCIsXG4gIGhlaWdodDogXCI0NnB4XCIsXG4gIHZpZXdCb3g6IFwiMCAwIDQ2IDQ2XCIsXG4gIHN0eWxlOiBfc3R5bGVzLnN2Z1N0eWxlXG59LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmaWx0ZXJcIiwge1xuICB4OiBcIi01MCVcIixcbiAgeTogXCItNTAlXCIsXG4gIHdpZHRoOiBcIjIwMCVcIixcbiAgaGVpZ2h0OiBcIjIwMCVcIixcbiAgZmlsdGVyVW5pdHM6IFwib2JqZWN0Qm91bmRpbmdCb3hcIixcbiAgaWQ6IFwiZmlsdGVyLTFcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmZU9mZnNldFwiLCB7XG4gIGR4OiBcIjBcIixcbiAgZHk6IFwiMVwiLFxuICBpbjogXCJTb3VyY2VBbHBoYVwiLFxuICByZXN1bHQ6IFwic2hhZG93T2Zmc2V0T3V0ZXIxXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlR2F1c3NpYW5CbHVyXCIsIHtcbiAgc3RkRGV2aWF0aW9uOiBcIjAuNVwiLFxuICBpbjogXCJzaGFkb3dPZmZzZXRPdXRlcjFcIixcbiAgcmVzdWx0OiBcInNoYWRvd0JsdXJPdXRlcjFcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZmVDb2xvck1hdHJpeFwiLCB7XG4gIHZhbHVlczogXCIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMTY4IDBcIixcbiAgaW46IFwic2hhZG93Qmx1ck91dGVyMVwiLFxuICB0eXBlOiBcIm1hdHJpeFwiLFxuICByZXN1bHQ6IFwic2hhZG93TWF0cml4T3V0ZXIxXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlT2Zmc2V0XCIsIHtcbiAgZHg6IFwiMFwiLFxuICBkeTogXCIwXCIsXG4gIGluOiBcIlNvdXJjZUFscGhhXCIsXG4gIHJlc3VsdDogXCJzaGFkb3dPZmZzZXRPdXRlcjJcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZmVHYXVzc2lhbkJsdXJcIiwge1xuICBzdGREZXZpYXRpb246IFwiMC41XCIsXG4gIGluOiBcInNoYWRvd09mZnNldE91dGVyMlwiLFxuICByZXN1bHQ6IFwic2hhZG93Qmx1ck91dGVyMlwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmZUNvbG9yTWF0cml4XCIsIHtcbiAgdmFsdWVzOiBcIjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4wODQgMFwiLFxuICBpbjogXCJzaGFkb3dCbHVyT3V0ZXIyXCIsXG4gIHR5cGU6IFwibWF0cml4XCIsXG4gIHJlc3VsdDogXCJzaGFkb3dNYXRyaXhPdXRlcjJcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZmVNZXJnZVwiLCBudWxsLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlTWVyZ2VOb2RlXCIsIHtcbiAgaW46IFwic2hhZG93TWF0cml4T3V0ZXIxXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlTWVyZ2VOb2RlXCIsIHtcbiAgaW46IFwic2hhZG93TWF0cml4T3V0ZXIyXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlTWVyZ2VOb2RlXCIsIHtcbiAgaW46IFwiU291cmNlR3JhcGhpY1wiXG59KSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJwYXRoLTJcIixcbiAgeDogXCIwXCIsXG4gIHk6IFwiMFwiLFxuICB3aWR0aDogXCI0MFwiLFxuICBoZWlnaHQ6IFwiNDBcIixcbiAgcng6IFwiMlwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHtcbiAgaWQ6IFwicGF0aC0zXCIsXG4gIHg6IFwiNVwiLFxuICB5OiBcIjVcIixcbiAgd2lkdGg6IFwiMzhcIixcbiAgaGVpZ2h0OiBcIjM4XCIsXG4gIHJ4OiBcIjFcIlxufSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCJHb29nbGUtQnV0dG9uXCIsXG4gIHN0cm9rZTogXCJub25lXCIsXG4gIHN0cm9rZVdpZHRoOiBcIjFcIixcbiAgZmlsbDogXCJub25lXCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiOS1QQVRDSFwiLFxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC02MDguMDAwMDAwLCAtMjE5LjAwMDAwMClcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcImJ0bl9nb29nbGVfZGFya19ub3JtYWxcIixcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMClcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnV0dG9uXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoNC4wMDAwMDAsIDQuMDAwMDAwKVwiLFxuICBmaWx0ZXI6IFwidXJsKCNmaWx0ZXItMSlcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnV0dG9uLWJnXCJcbn0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgZmlsbDogXCIjNDI4NUY0XCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgZmlsbDogXCJub25lXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVzZVwiLCB7XG4gIGZpbGw6IFwibm9uZVwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIiwge1xuICBmaWxsOiBcIm5vbmVcIlxufSkpKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnV0dG9uLWJnLWNvcHlcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIiwge1xuICBmaWxsOiBcIiNGRkZGRkZcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIiwge1xuICBmaWxsOiBcIm5vbmVcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgZmlsbDogXCJub25lXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVzZVwiLCB7XG4gIGZpbGw6IFwibm9uZVwiXG59KSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcImxvZ29fZ29vZ2xlZ180OGRwXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMTUuMDAwMDAwLCAxNS4wMDAwMDApXCJcbn0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE3LjY0LDkuMjA0NTQ1NDUgQzE3LjY0LDguNTY2MzYzNjQgMTcuNTgyNzI3Myw3Ljk1MjcyNzI3IDE3LjQ3NjM2MzYsNy4zNjM2MzYzNiBMOSw3LjM2MzYzNjM2IEw5LDEwLjg0NSBMMTMuODQzNjM2NCwxMC44NDUgQzEzLjYzNSwxMS45NyAxMy4wMDA5MDkxLDEyLjkyMzE4MTggMTIuMDQ3NzI3MywxMy41NjEzNjM2IEwxMi4wNDc3MjczLDE1LjgxOTU0NTUgTDE0Ljk1NjM2MzYsMTUuODE5NTQ1NSBDMTYuNjU4MTgxOCwxNC4yNTI3MjczIDE3LjY0LDExLjk0NTQ1NDUgMTcuNjQsOS4yMDQ1NDU0NSBMMTcuNjQsOS4yMDQ1NDU0NSBaXCIsXG4gIGlkOiBcIlNoYXBlXCIsXG4gIGZpbGw6IFwiIzQyODVGNFwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNOSwxOCBDMTEuNDMsMTggMTMuNDY3MjcyNywxNy4xOTQwOTA5IDE0Ljk1NjM2MzYsMTUuODE5NTQ1NSBMMTIuMDQ3NzI3MywxMy41NjEzNjM2IEMxMS4yNDE4MTgyLDE0LjEwMTM2MzYgMTAuMjEwOTA5MSwxNC40MjA0NTQ1IDksMTQuNDIwNDU0NSBDNi42NTU5MDkwOSwxNC40MjA0NTQ1IDQuNjcxODE4MTgsMTIuODM3MjcyNyAzLjk2NDA5MDkxLDEwLjcxIEwwLjk1NzI3MjcyNywxMC43MSBMMC45NTcyNzI3MjcsMTMuMDQxODE4MiBDMi40MzgxODE4MiwxNS45ODMxODE4IDUuNDgxODE4MTgsMTggOSwxOCBMOSwxOCBaXCIsXG4gIGlkOiBcIlNoYXBlXCIsXG4gIGZpbGw6IFwiIzM0QTg1M1wiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMy45NjQwOTA5MSwxMC43MSBDMy43ODQwOTA5MSwxMC4xNyAzLjY4MTgxODE4LDkuNTkzMTgxODIgMy42ODE4MTgxOCw5IEMzLjY4MTgxODE4LDguNDA2ODE4MTggMy43ODQwOTA5MSw3LjgzIDMuOTY0MDkwOTEsNy4yOSBMMy45NjQwOTA5MSw0Ljk1ODE4MTgyIEwwLjk1NzI3MjcyNyw0Ljk1ODE4MTgyIEMwLjM0NzcyNzI3Myw2LjE3MzE4MTgyIDAsNy41NDc3MjcyNyAwLDkgQzAsMTAuNDUyMjcyNyAwLjM0NzcyNzI3MywxMS44MjY4MTgyIDAuOTU3MjcyNzI3LDEzLjA0MTgxODIgTDMuOTY0MDkwOTEsMTAuNzEgTDMuOTY0MDkwOTEsMTAuNzEgWlwiLFxuICBpZDogXCJTaGFwZVwiLFxuICBmaWxsOiBcIiNGQkJDMDVcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTksMy41Nzk1NDU0NSBDMTAuMzIxMzYzNiwzLjU3OTU0NTQ1IDExLjUwNzcyNzMsNC4wMzM2MzYzNiAxMi40NDA0NTQ1LDQuOTI1NDU0NTUgTDE1LjAyMTgxODIsMi4zNDQwOTA5MSBDMTMuNDYzMTgxOCwwLjg5MTgxODE4MiAxMS40MjU5MDkxLDAgOSwwIEM1LjQ4MTgxODE4LDAgMi40MzgxODE4MiwyLjAxNjgxODE4IDAuOTU3MjcyNzI3LDQuOTU4MTgxODIgTDMuOTY0MDkwOTEsNy4yOSBDNC42NzE4MTgxOCw1LjE2MjcyNzI3IDYuNjU1OTA5MDksMy41Nzk1NDU0NSA5LDMuNTc5NTQ1NDUgTDksMy41Nzk1NDU0NSBaXCIsXG4gIGlkOiBcIlNoYXBlXCIsXG4gIGZpbGw6IFwiI0VBNDMzNVwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMCwwIEwxOCwwIEwxOCwxOCBMMCwxOCBMMCwwIFpcIixcbiAgaWQ6IFwiU2hhcGVcIlxufSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCJoYW5kbGVzX3NxdWFyZVwiXG59KSkpKTtcblxudmFyIGxpZ2h0U3ZnID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICB2ZXJzaW9uOiBcIjEuMVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogXCI0NnB4XCIsXG4gIGhlaWdodDogXCI0NnB4XCIsXG4gIHZpZXdCb3g6IFwiMCAwIDQ2IDQ2XCIsXG4gIHN0eWxlOiBfc3R5bGVzLnN2Z1N0eWxlXG59LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmaWx0ZXJcIiwge1xuICB4OiBcIi01MCVcIixcbiAgeTogXCItNTAlXCIsXG4gIHdpZHRoOiBcIjIwMCVcIixcbiAgaGVpZ2h0OiBcIjIwMCVcIixcbiAgZmlsdGVyVW5pdHM6IFwib2JqZWN0Qm91bmRpbmdCb3hcIixcbiAgaWQ6IFwiZmlsdGVyLTFcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmZU9mZnNldFwiLCB7XG4gIGR4OiBcIjBcIixcbiAgZHk6IFwiMVwiLFxuICBpbjogXCJTb3VyY2VBbHBoYVwiLFxuICByZXN1bHQ6IFwic2hhZG93T2Zmc2V0T3V0ZXIxXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlR2F1c3NpYW5CbHVyXCIsIHtcbiAgc3RkRGV2aWF0aW9uOiBcIjAuNVwiLFxuICBpbjogXCJzaGFkb3dPZmZzZXRPdXRlcjFcIixcbiAgcmVzdWx0OiBcInNoYWRvd0JsdXJPdXRlcjFcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZmVDb2xvck1hdHJpeFwiLCB7XG4gIHZhbHVlczogXCIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMTY4IDBcIixcbiAgaW46IFwic2hhZG93Qmx1ck91dGVyMVwiLFxuICB0eXBlOiBcIm1hdHJpeFwiLFxuICByZXN1bHQ6IFwic2hhZG93TWF0cml4T3V0ZXIxXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlT2Zmc2V0XCIsIHtcbiAgZHg6IFwiMFwiLFxuICBkeTogXCIwXCIsXG4gIGluOiBcIlNvdXJjZUFscGhhXCIsXG4gIHJlc3VsdDogXCJzaGFkb3dPZmZzZXRPdXRlcjJcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZmVHYXVzc2lhbkJsdXJcIiwge1xuICBzdGREZXZpYXRpb246IFwiMC41XCIsXG4gIGluOiBcInNoYWRvd09mZnNldE91dGVyMlwiLFxuICByZXN1bHQ6IFwic2hhZG93Qmx1ck91dGVyMlwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmZUNvbG9yTWF0cml4XCIsIHtcbiAgdmFsdWVzOiBcIjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4wODQgMFwiLFxuICBpbjogXCJzaGFkb3dCbHVyT3V0ZXIyXCIsXG4gIHR5cGU6IFwibWF0cml4XCIsXG4gIHJlc3VsdDogXCJzaGFkb3dNYXRyaXhPdXRlcjJcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZmVNZXJnZVwiLCBudWxsLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlTWVyZ2VOb2RlXCIsIHtcbiAgaW46IFwic2hhZG93TWF0cml4T3V0ZXIxXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlTWVyZ2VOb2RlXCIsIHtcbiAgaW46IFwic2hhZG93TWF0cml4T3V0ZXIyXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlTWVyZ2VOb2RlXCIsIHtcbiAgaW46IFwiU291cmNlR3JhcGhpY1wiXG59KSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJwYXRoLTJcIixcbiAgeDogXCIwXCIsXG4gIHk6IFwiMFwiLFxuICB3aWR0aDogXCI0MFwiLFxuICBoZWlnaHQ6IFwiNDBcIixcbiAgcng6IFwiMlwiXG59KSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcIkdvb2dsZS1CdXR0b25cIixcbiAgc3Ryb2tlOiBcIm5vbmVcIixcbiAgc3Ryb2tlV2lkdGg6IFwiMVwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG59LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCI5LVBBVENIXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTYwOC4wMDAwMDAsIC0xNjAuMDAwMDAwKVwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnRuX2dvb2dsZV9saWdodF9ub3JtYWxcIixcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMClcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnV0dG9uXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoNC4wMDAwMDAsIDQuMDAwMDAwKVwiLFxuICBmaWx0ZXI6IFwidXJsKCNmaWx0ZXItMSlcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnV0dG9uLWJnXCJcbn0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgZmlsbDogXCIjRkZGRkZGXCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgZmlsbDogXCJub25lXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVzZVwiLCB7XG4gIGZpbGw6IFwibm9uZVwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIiwge1xuICBmaWxsOiBcIm5vbmVcIlxufSkpKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwibG9nb19nb29nbGVnXzQ4ZHBcIixcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxNS4wMDAwMDAsIDE1LjAwMDAwMClcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTcuNjQsOS4yMDQ1NDU0NSBDMTcuNjQsOC41NjYzNjM2NCAxNy41ODI3MjczLDcuOTUyNzI3MjcgMTcuNDc2MzYzNiw3LjM2MzYzNjM2IEw5LDcuMzYzNjM2MzYgTDksMTAuODQ1IEwxMy44NDM2MzY0LDEwLjg0NSBDMTMuNjM1LDExLjk3IDEzLjAwMDkwOTEsMTIuOTIzMTgxOCAxMi4wNDc3MjczLDEzLjU2MTM2MzYgTDEyLjA0NzcyNzMsMTUuODE5NTQ1NSBMMTQuOTU2MzYzNiwxNS44MTk1NDU1IEMxNi42NTgxODE4LDE0LjI1MjcyNzMgMTcuNjQsMTEuOTQ1NDU0NSAxNy42NCw5LjIwNDU0NTQ1IEwxNy42NCw5LjIwNDU0NTQ1IFpcIixcbiAgaWQ6IFwiU2hhcGVcIixcbiAgZmlsbDogXCIjNDI4NUY0XCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk05LDE4IEMxMS40MywxOCAxMy40NjcyNzI3LDE3LjE5NDA5MDkgMTQuOTU2MzYzNiwxNS44MTk1NDU1IEwxMi4wNDc3MjczLDEzLjU2MTM2MzYgQzExLjI0MTgxODIsMTQuMTAxMzYzNiAxMC4yMTA5MDkxLDE0LjQyMDQ1NDUgOSwxNC40MjA0NTQ1IEM2LjY1NTkwOTA5LDE0LjQyMDQ1NDUgNC42NzE4MTgxOCwxMi44MzcyNzI3IDMuOTY0MDkwOTEsMTAuNzEgTDAuOTU3MjcyNzI3LDEwLjcxIEwwLjk1NzI3MjcyNywxMy4wNDE4MTgyIEMyLjQzODE4MTgyLDE1Ljk4MzE4MTggNS40ODE4MTgxOCwxOCA5LDE4IEw5LDE4IFpcIixcbiAgaWQ6IFwiU2hhcGVcIixcbiAgZmlsbDogXCIjMzRBODUzXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0zLjk2NDA5MDkxLDEwLjcxIEMzLjc4NDA5MDkxLDEwLjE3IDMuNjgxODE4MTgsOS41OTMxODE4MiAzLjY4MTgxODE4LDkgQzMuNjgxODE4MTgsOC40MDY4MTgxOCAzLjc4NDA5MDkxLDcuODMgMy45NjQwOTA5MSw3LjI5IEwzLjk2NDA5MDkxLDQuOTU4MTgxODIgTDAuOTU3MjcyNzI3LDQuOTU4MTgxODIgQzAuMzQ3NzI3MjczLDYuMTczMTgxODIgMCw3LjU0NzcyNzI3IDAsOSBDMCwxMC40NTIyNzI3IDAuMzQ3NzI3MjczLDExLjgyNjgxODIgMC45NTcyNzI3MjcsMTMuMDQxODE4MiBMMy45NjQwOTA5MSwxMC43MSBMMy45NjQwOTA5MSwxMC43MSBaXCIsXG4gIGlkOiBcIlNoYXBlXCIsXG4gIGZpbGw6IFwiI0ZCQkMwNVwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNOSwzLjU3OTU0NTQ1IEMxMC4zMjEzNjM2LDMuNTc5NTQ1NDUgMTEuNTA3NzI3Myw0LjAzMzYzNjM2IDEyLjQ0MDQ1NDUsNC45MjU0NTQ1NSBMMTUuMDIxODE4MiwyLjM0NDA5MDkxIEMxMy40NjMxODE4LDAuODkxODE4MTgyIDExLjQyNTkwOTEsMCA5LDAgQzUuNDgxODE4MTgsMCAyLjQzODE4MTgyLDIuMDE2ODE4MTggMC45NTcyNzI3MjcsNC45NTgxODE4MiBMMy45NjQwOTA5MSw3LjI5IEM0LjY3MTgxODE4LDUuMTYyNzI3MjcgNi42NTU5MDkwOSwzLjU3OTU0NTQ1IDksMy41Nzk1NDU0NSBMOSwzLjU3OTU0NTQ1IFpcIixcbiAgaWQ6IFwiU2hhcGVcIixcbiAgZmlsbDogXCIjRUE0MzM1XCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0wLDAgTDE4LDAgTDE4LDE4IEwwLDE4IEwwLDAgWlwiLFxuICBpZDogXCJTaGFwZVwiXG59KSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcImhhbmRsZXNfc3F1YXJlXCJcbn0pKSkpO1xuXG52YXIgZGlzYWJsZWRTdmcgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gIHdpZHRoOiBcIjQ2cHhcIixcbiAgaGVpZ2h0OiBcIjQ2cHhcIixcbiAgdmlld0JveDogXCIwIDAgNDYgNDZcIixcbiAgdmVyc2lvbjogXCIxLjFcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgc3R5bGU6IF9zdHlsZXMuc3ZnU3R5bGVcbn0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGVmc1wiLCBudWxsLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInJlY3RcIiwge1xuICBpZDogXCJwYXRoLTFcIixcbiAgeDogXCIwXCIsXG4gIHk6IFwiMFwiLFxuICB3aWR0aDogXCI0MFwiLFxuICBoZWlnaHQ6IFwiNDBcIixcbiAgcng6IFwiMlwiXG59KSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcIkdvb2dsZS1CdXR0b25cIixcbiAgc3Ryb2tlOiBcIm5vbmVcIixcbiAgc3Ryb2tlV2lkdGg6IFwiMVwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG59LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICBpZDogXCI5LVBBVENIXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTc4OC4wMDAwMDAsIC0yMTkuMDAwMDAwKVwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnRuX2dvb2dsZV9kYXJrX2Rpc2FibGVkXCIsXG4gIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTEuMDAwMDAwLCAtMS4wMDAwMDApXCJcbn0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcImJ1dHRvblwiLFxuICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDQuMDAwMDAwLCA0LjAwMDAwMClcIlxufSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgaWQ6IFwiYnV0dG9uLWJnXCJcbn0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgZmlsbE9wYWNpdHk6IFwiMC4wOFwiLFxuICBmaWxsOiBcIiMwMDAwMDBcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG59KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1c2VcIiwge1xuICBmaWxsOiBcIm5vbmVcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgZmlsbDogXCJub25lXCJcbn0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVzZVwiLCB7XG4gIGZpbGw6IFwibm9uZVwiXG59KSkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0yNC4wMDEsMjUuNzEgTDI0LjAwMSwyMi4zNjIgTDMyLjQyNSwyMi4zNjIgQzMyLjU1MSwyMi45MjkgMzIuNjUsMjMuNDYgMzIuNjUsMjQuMjA3IEMzMi42NSwyOS4zNDYgMjkuMjAzLDMzIDI0LjAxLDMzIEMxOS4wNDIsMzMgMTUuMDEsMjguOTY4IDE1LjAxLDI0IEMxNS4wMSwxOS4wMzIgMTkuMDQyLDE1IDI0LjAxLDE1IEMyNi40NCwxNSAyOC40NzQsMTUuODkxIDMwLjAzMSwxNy4zNDkgTDI3LjQ3NSwxOS44MzMgQzI2LjgyNywxOS4yMjEgMjUuNjkzLDE4LjUwMSAyNC4wMSwxOC41MDEgQzIxLjAzMSwxOC41MDEgMTguNjAxLDIwLjk3NiAxOC42MDEsMjQuMDA5IEMxOC42MDEsMjcuMDQyIDIxLjAzMSwyOS41MTcgMjQuMDEsMjkuNTE3IEMyNy40NTcsMjkuNTE3IDI4LjcyNiwyNy4xMzIgMjguOTYsMjUuNzE5IEwyNC4wMDEsMjUuNzE5IEwyNC4wMDEsMjUuNzEgWlwiLFxuICBpZDogXCJTaGFwZS1Db3B5XCIsXG4gIGZpbGxPcGFjaXR5OiBcIjAuNFwiLFxuICBmaWxsOiBcIiMwMDAwMDBcIlxufSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gIGlkOiBcImhhbmRsZXNfc3F1YXJlXCJcbn0pKSkpO1xuXG52YXIgR29vZ2xlSWNvbiA9IGZ1bmN0aW9uIEdvb2dsZUljb24oX3JlZikge1xuICB2YXIgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgdHlwZSA9IF9yZWYudHlwZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogIWRpc2FibGVkID8gX3N0eWxlcy5pY29uU3R5bGUgOiBfb2JqZWN0U3ByZWFkKHt9LCBfc3R5bGVzLmljb25TdHlsZSwge30sIF9zdHlsZXMuZGlzYWJsZWRJY29uU3R5bGUpXG4gIH0sICFkaXNhYmxlZCA/IHR5cGUgPT09ICdkYXJrJyA/IGRhcmtTdmcgOiBsaWdodFN2ZyA6IGRpc2FibGVkU3ZnKTtcbn07XG5cbmV4cG9ydHMuR29vZ2xlSWNvbiA9IEdvb2dsZUljb247XG5Hb29nbGVJY29uLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuICB0eXBlOiBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydsaWdodCcsICdkYXJrJ10pXG59O1xuR29vZ2xlSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdkYXJrJ1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdvb2dsZUJ1dHRvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfR29vZ2xlQnV0dG9uMi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0dvb2dsZUJ1dHRvbjIuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfR29vZ2xlQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vR29vZ2xlQnV0dG9uXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGlzYWJsZWRJY29uU3R5bGUgPSBleHBvcnRzLmRpc2FibGVkU3R5bGUgPSBleHBvcnRzLmhvdmVyU3R5bGUgPSBleHBvcnRzLnN2Z1N0eWxlID0gZXhwb3J0cy5pY29uU3R5bGUgPSBleHBvcnRzLmxpZ2h0U3R5bGUgPSBleHBvcnRzLmRhcmtTdHlsZSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBiYXNlU3R5bGUgPSB7XG4gIGhlaWdodDogJzUwcHgnLFxuICB3aWR0aDogJzI0MHB4JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdjZW50ZXInLFxuICBib3hTaGFkb3c6ICcwIDJweCA0cHggMCByZ2JhKDAsMCwwLC4yNSknLFxuICBmb250U2l6ZTogJzE2cHgnLFxuICBsaW5lSGVpZ2h0OiAnNDhweCcsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGJvcmRlclJhZGl1czogJzFweCcsXG4gIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIC4yMThzLCBib3JkZXItY29sb3IgLjIxOHMsIGJveC1zaGFkb3cgLjIxOHMnLFxuICBmb250RmFtaWx5OiAnUm9ib3RvLGFyaWFsLHNhbnMtc2VyaWYnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59O1xuXG52YXIgZGFya1N0eWxlID0gX29iamVjdFNwcmVhZCh7XG4gIGJhY2tncm91bmRDb2xvcjogJyM0Mjg1ZjQnLFxuICBjb2xvcjogJyNmZmYnXG59LCBiYXNlU3R5bGUpO1xuXG5leHBvcnRzLmRhcmtTdHlsZSA9IGRhcmtTdHlsZTtcblxudmFyIGxpZ2h0U3R5bGUgPSBfb2JqZWN0U3ByZWFkKHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGNvbG9yOiAncmdiYSgwLDAsMCwuNTQpJ1xufSwgYmFzZVN0eWxlKTtcblxuZXhwb3J0cy5saWdodFN0eWxlID0gbGlnaHRTdHlsZTtcbnZhciBpY29uU3R5bGUgPSB7XG4gIHdpZHRoOiAnNDhweCcsXG4gIGhlaWdodDogJzQ4cHgnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnY2VudGVyJyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgbWFyZ2luVG9wOiAnMXB4JyxcbiAgbWFyZ2luTGVmdDogJzFweCcsXG4gIGZsb2F0OiAnbGVmdCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXJSYWRpdXM6ICcxcHgnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xufTtcbmV4cG9ydHMuaWNvblN0eWxlID0gaWNvblN0eWxlO1xudmFyIHN2Z1N0eWxlID0ge1xuICB3aWR0aDogJzQ4cHgnLFxuICBoZWlnaHQ6ICc0OHB4JyxcbiAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcbmV4cG9ydHMuc3ZnU3R5bGUgPSBzdmdTdHlsZTtcbnZhciBob3ZlclN0eWxlID0ge1xuICBib3hTaGFkb3c6ICcwIDAgM3B4IDNweCByZ2JhKDY2LDEzMywyNDQsLjMpJyxcbiAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgLjIxOHMsIGJvcmRlci1jb2xvciAuMjE4cywgYm94LXNoYWRvdyAuMjE4cydcbn07IC8vIGV4cG9ydCBjb25zdCBwcmVzc2VkU3R5bGUgPSB7XG4vLyAgIGJhY2tncm91bmRDb2xvcjogJyMzMzY3RDYnXG4vLyB9XG5cbmV4cG9ydHMuaG92ZXJTdHlsZSA9IGhvdmVyU3R5bGU7XG52YXIgZGlzYWJsZWRTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgzNywgNSwgNSwgLjA4KScsXG4gIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAuNDApJyxcbiAgY3Vyc29yOiAnbm90LWFsbG93ZWQnXG59O1xuZXhwb3J0cy5kaXNhYmxlZFN0eWxlID0gZGlzYWJsZWRTdHlsZTtcbnZhciBkaXNhYmxlZEljb25TdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG59O1xuZXhwb3J0cy5kaXNhYmxlZEljb25TdHlsZSA9IGRpc2FibGVkSWNvblN0eWxlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHb29nbGVCdXR0b24gZnJvbSBcInJlYWN0LWdvb2dsZS1idXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgYXBpLCBhcGlTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc3RvcmUvYXBpX3NlcnZpY2VcIjtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZmV0Y2hPQXV0aDJMb2dpbkxpbmsgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGFwaVNlcnZpY2UuZ2V0R29vZ2xlTG9naW5MaW5rKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChkYXRhLmxvZ2luTGluayk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwib2Zmc2V0LTQgY29sLTQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTJcIj5cbiAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgRmFybWVyIEFjY291bnRzXG4gICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgIEFjY291bnRpbmcgZm9yIHRoZSB3YXkgeW91IHJ1biB5b3VyIGZhcm1cbiAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmQgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ3d3cuZWFzeWZhcm0uY28uaW5cIiBjbGFzc05hbWU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgd3d3LmVhc3lmYXJtLmNvLmluXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgRmFybWluZyBpcyB1bmlxdWUuIFRoZXJlIGFyZSBmZXcgb3RoZXIgdHlwZXMgb2YgYnVzaW5lc3MgdGhhdFxuICAgICAgICAgICAgICAgIHJlbHkgb24gbGl2aW5nIHByb2R1Y2UsIHdoZXRoZXIgaXQncyBjcm9wcyBvciBsaXZlc3RvY2suIFRoYXRcbiAgICAgICAgICAgICAgICBtYWtlcyBmYXJtIGFjY291bnRpbmcgbW9yZSBjb21wbGV4IHRoYW4gb3RoZXIgYnVzaW5lc3NlcyB3aGVuIGl0XG4gICAgICAgICAgICAgICAgY29tZXMgdG8gYXNzZXRzLCBsaWFiaWxpdGllcywgY29zdHMgYW5kIHJldmVudWUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XG4gICAgICAgICAgICAgICAgPEdvb2dsZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmZXRjaE9BdXRoMkxvZ2luTGluaygpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFwaSA9IHtcclxuICBhY3RpdmVTZXNzaW9uVXNlcjoge1xyXG4gICAgdXJsOiBcImF1dGgvdXNlcnMvc2Vzc2lvbi9hY3RpdmVcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgfSxcclxuICBnb29nbGVMb2dpbkxpbms6IHtcclxuICAgIHVybDogXCJhcGkuZmFybWVyLmFjY291bnRzLmVhc3lmYXJtLmNvLmluL1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0sXHJcbiAgYmFzZVVybDogXCJhcGkuZmFybWVyLmFjY291bnRzLmVhc3lmYXJtLmNvLmluL1wiLFxyXG4gIGdldFByb3RvY29sOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vYDtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaVNlcnZpY2UgPSB7XHJcbiAgZ2V0R29vZ2xlTG9naW5MaW5rOiBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHthcGkuZ2V0UHJvdG9jb2woKX0ke2FwaS5nb29nbGVMb2dpbkxpbmsudXJsfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6IGFwaS5nb29nbGVMb2dpbkxpbmsubWV0aG9kLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH0sXHJcbiAgcG9zdERhdGE6IGFzeW5jIChhcGlFbnRpdHksIGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IGAke2FwaS5nZXRQcm90b2NvbCgpfSR7YXBpLmJhc2VVcmx9JHthcGlFbnRpdHkudXJsfWA7XHJcblxyXG4gICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgICAgICAgcmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXJcIixcclxuICAgICAgfTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICByZXF1ZXN0LmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdCk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==