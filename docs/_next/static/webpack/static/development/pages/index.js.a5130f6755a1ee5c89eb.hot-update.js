webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _demoData_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demoData.json */ \"./src/demo/demoData.json\");\nvar _demoData_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./demoData.json */ \"./src/demo/demoData.json\", 1);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jmac/Scripts/chart-module-covid-wave/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar cases = _demoData_json__WEBPACK_IMPORTED_MODULE_12__.distributionRanks.cases;\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: ''\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // Use our chart module.\n      fetch('http://graphics.thomsonreuters.com/data/2020/coronavirus/global-tracker/statistics.json').then(function (r) {\n        return r.json();\n      }).then(function (data) {\n        var cases = data.distributionRanks.cases;\n\n        _this2.chart.selection(_this2.chartContainer.current).data(cases).props({\n          fill: _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__[\"base\"].blue.hex\n        }).draw();\n      }); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var width = this.state.width;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this3.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbImNhc2VzIiwiZ2xvYmFsU3RhdGlzdGljcyIsImRpc3RyaWJ1dGlvblJhbmtzIiwiQ2hhcnRDb21wb25lbnQiLCJ3aWR0aCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiQ2hhcnQiLCJkZWJvdW5jZSIsImNoYXJ0IiwiZHJhdyIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiZGF0YSIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsInByb3BzIiwiZmlsbCIsImJhc2UiLCJibHVlIiwiaGV4Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLEssR0FBVUMsNENBQWdCLENBQUNDLGlCLENBQTNCRixLOztJQUVGRyxjOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQUVDLFdBQUssRUFBRTtBQUFULEs7O3lOQUNTQyw0Q0FBSyxDQUFDQyxTQUFOLEU7O2dOQUdULElBQUlDLHFEQUFKLEU7O2lOQUdDQyx1REFBUSxDQUFDLFlBQU07QUFBRSxZQUFLQyxLQUFMLENBQVdDLElBQVg7QUFBb0IsS0FBN0IsRUFBK0IsR0FBL0IsQzs7Ozs7Ozt3Q0FFRztBQUFBOztBQUNsQjtBQUNBQyxXQUFLLENBQUMseUZBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQUFKO0FBQUEsT0FEVCxFQUVHRixJQUZILENBRVEsVUFBQUcsSUFBSSxFQUFJO0FBQUEsWUFDSmYsS0FESSxHQUNNZSxJQUFJLENBQUNiLGlCQURYLENBQ0pGLEtBREk7O0FBRVosY0FBSSxDQUFDUyxLQUFMLENBQ0dPLFNBREgsQ0FDYSxNQUFJLENBQUNDLGNBQUwsQ0FBb0JDLE9BRGpDLEVBRUdILElBRkgsQ0FFUWYsS0FGUixFQUdHbUIsS0FISCxDQUdTO0FBQUVDLGNBQUksRUFBRUMsb0ZBQUksQ0FBQ0MsSUFBTCxDQUFVQztBQUFsQixTQUhULEVBSUdiLElBSkg7QUFLRCxPQVRILEVBRmtCLENBYWxCOztBQUNBYyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLE1BQXZDO0FBQ0Q7OzsyQ0FFc0I7QUFDckI7QUFDQUYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLRCxNQUExQztBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0E7QUFDQSxXQUFLakIsS0FBTCxDQUFXQyxJQUFYO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0NOLEtBREQsR0FDVyxLQUFLd0IsS0FEaEIsQ0FDQ3hCLEtBREQ7QUFFUCxhQUNFLG1FQUNFLE1BQUMsaUVBQUQ7QUFBZ0IsYUFBSyxFQUFFQSxLQUF2QjtBQUE4QixnQkFBUSxFQUFFLGtCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDeUIsUUFBTCxDQUFjO0FBQUV6QixpQkFBSyxFQUFMQTtBQUFGLFdBQWQsQ0FBWDtBQUFBLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQWdCLFdBQUcsRUFBRSxLQUFLYSxjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixDQURGO0FBUUQ7Ozs7RUFoRDBCWiw0Q0FBSyxDQUFDeUIsUzs7QUFtRHBCM0IsNkVBQWYiLCJmaWxlIjoiLi9zcmMvZGVtby9DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydCBmcm9tICcuLi9saWIvY2hhcnQuanMnO1xuaW1wb3J0IENoYXJ0Q29udGFpbmVyIGZyb20gJy4vZnVybml0dXJlL0NoYXJ0Q29udGFpbmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3Mvc3R5bGUtY29sb3IvZGlzdC9jYXRlZ29yaWNhbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCBnbG9iYWxTdGF0aXN0aWNzIGZyb20gJy4vZGVtb0RhdGEuanNvbic7XG5cbmNvbnN0IHsgY2FzZXMgfSA9IGdsb2JhbFN0YXRpc3RpY3MuZGlzdHJpYnV0aW9uUmFua3M7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IHdpZHRoOiAnJyB9O1xuICBjaGFydENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIC8vIEluc3RhbnRpYXRlIGFuZCBhZGQgb3VyIGNoYXJ0IGNsYXNzIHRvIHRoaXMgY29tcG9uZW50LlxuICBjaGFydCA9IG5ldyBDaGFydCgpO1xuXG4gIC8vIEEgcmVzaXplIGZ1bmN0aW9uIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gIHJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHsgdGhpcy5jaGFydC5kcmF3KCk7IH0sIDI1MCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gVXNlIG91ciBjaGFydCBtb2R1bGUuXG4gICAgZmV0Y2goJ2h0dHA6Ly9ncmFwaGljcy50aG9tc29ucmV1dGVycy5jb20vZGF0YS8yMDIwL2Nvcm9uYXZpcnVzL2dsb2JhbC10cmFja2VyL3N0YXRpc3RpY3MuanNvbicpXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2FzZXMgfSA9IGRhdGEuZGlzdHJpYnV0aW9uUmFua3M7XG4gICAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgICAgICAuZGF0YShjYXNlcylcbiAgICAgICAgICAucHJvcHMoeyBmaWxsOiBiYXNlLmJsdWUuaGV4IH0pXG4gICAgICAgICAgLmRyYXcoKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gcmVzaXplIGNoYXJ0IHdpdGggdGhlIHdpbmRvdy5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIGxpc3RlbmVyIGlmIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCwgdG9vLlxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gVXBkYXRlIHRoZSBjaGFydCB3aXRoIHRoZSBjb21wb25lbnQuXG4gICAgLy8gQ2FuIGNoYW5nZSBkYXRhIG9yIHByb3BzIGhlcmUsIHdoYXRldmVyLi4uXG4gICAgdGhpcy5jaGFydC5kcmF3KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENoYXJ0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0gc2V0V2lkdGg9eyh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pfT5cbiAgICAgICAgICB7LyogVGhpcyBpcyBvdXIgY2hhcnQgY29udGFpbmVyIPCfkYcgKi99XG4gICAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})