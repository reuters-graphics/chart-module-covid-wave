webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/random */ \"./node_modules/lodash/random.js\");\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar CovidWave = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CovidWave, _ChartComponent);\n\n  var _super = _createSuper(CovidWave);\n\n  function CovidWave() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CovidWave);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultProps\", {\n      height: 200,\n      thresholdScale: _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain([0.5, 0.75]).range([0.1, 0.2, 0.4]),\n      thresholdText: '<span>{{ number }}</span> countries are still at the peak of their infection curve.',\n      locale: 'en',\n      peakText: '{{ percent }}% of peak'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_11__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CovidWave, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = props.height;\n      var svg = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('svg').attr('width', width).attr('height', height).appendSelect('g').attr('transform', 'translate(0, 10)');\n      var t = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].transition().duration(250);\n      var linesData = Object.keys(data).map(function (c) {\n        var lineData = [{\n          x: 0,\n          y: 0,\n          c: c\n        }];\n        lineData.push({\n          x: 0.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 1,\n          y: +data[c],\n          c: c\n        });\n        lineData.push({\n          x: 1.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 2,\n          y: 0,\n          c: c\n        });\n        return lineData;\n      }); // sort least to most for mouse handler\n\n      linesData.sort(function (a, b) {\n        return a[2].y - b[2].y;\n      });\n      var x = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 2]).range([0, width]);\n      var y = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 1]).range([height, 0]);\n      var color = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain([0.5, 0.75]).range(['#ccc', '#f68e26', '#de2d26']);\n      var opacity = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain([0.5, 0.75]).range([0.1, 0.2, 0.4]);\n      var line = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y);\n      });\n      var thresholdLine = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y) - 4;\n      });\n      svg.selectAll('path.countries').data(linesData).join('path').attr('class', function (d) {\n        return \"countries iso-\".concat(d[0].c);\n      }).style('opacity', function (d) {\n        return opacity(data[d[0].c]);\n      }).attr('stroke', function (d) {\n        return color(data[d[0].c]);\n      }).transition(t).attr('d', line);\n      var raisedY = 1;\n      svg.appendSelect('path.limit.max').datum([{\n        x: 0,\n        y: 0\n      }, {\n        x: 0.5,\n        y: raisedY / 4\n      }, {\n        x: 1,\n        y: raisedY\n      }, {\n        x: 1.5,\n        y: raisedY / 4\n      }, {\n        x: 2,\n        y: 0\n      }]).attr('stroke', function (d) {\n        return color(raisedY);\n      }).transition(t).attr('d', thresholdLine);\n      svg.appendSelect('line.top-countries').attr('x1', x(1.28)).attr('x2', x(2)).attr('y1', y(0.70)).attr('y2', y(0.70)).attr('stroke', function (d) {\n        return color(raisedY);\n      });\n      _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.right').style('bottom', \"\".concat(height - y(0.70), \"px\")).style('right', '0px').style('width', \"\".concat(x(0.7), \"px\")).html(mustache__WEBPACK_IMPORTED_MODULE_13___default.a.render(props.thresholdText, {\n        number: 33\n      }));\n      var highlightLab = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.left').style('bottom', \"\".concat(height - y(0.70), \"px\")).style('left', '0px').style('width', \"\".concat(x(0.7), \"px\")).html('');\n      var mouseRect = svg.appendSelect('rect').attr('width', width).attr('height', height).attr('x', 0).attr('y', 0).style('fill', 'transparent');\n\n      var highlightCountry = function highlightCountry(yCoord) {\n        var dataCoord = y.invert(yCoord);\n        var dataPoint = linesData.find(function (d) {\n          return d[2].y > dataCoord;\n        });\n        if (!dataPoint) dataPoint = lodash_last__WEBPACK_IMPORTED_MODULE_12___default()(linesData);\n        var dataPoints = Object.keys(data).filter(function (c) {\n          return +data[c] === dataPoint[2].y;\n        });\n        var isoAlpha2 = dataPoints[lodash_random__WEBPACK_IMPORTED_MODULE_14___default()(0, dataPoints.length - 1)];\n        var country = atlas.getCountry(isoAlpha2);\n        highlightLab.appendSelect('div.country-name').text(country.translations[props.locale]);\n        highlightLab.appendSelect('div.country-data').html(mustache__WEBPACK_IMPORTED_MODULE_13___default.a.render(props.peakText, {\n          percent: Math.round(data[isoAlpha2] * 100)\n        }));\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return d[0].c === isoAlpha2 ? 1 : 0;\n        });\n      };\n\n      var removeHighlight = function removeHighlight() {\n        highlightLab.html('');\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return opacity(data[d[0].c]);\n        });\n      };\n\n      mouseRect.on('mouseenter.wave mousemove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_15___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n        var coordinates = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].mouse(svg.node());\n        highlightCountry(coordinates[1]);\n      }, 50));\n      mouseRect.on('touchstart.wave touchmove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_15___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n\n        var _d3$touches = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].touches(svg.node()),\n            _d3$touches2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_d3$touches, 1),\n            coordinates = _d3$touches2[0];\n\n        highlightCountry(coordinates[1]);\n      }, 50), true);\n      mouseRect.on('mouseleave.wave', removeHighlight);\n      mouseRect.on('touchend.wave touchcancel.wave', removeHighlight);\n      return this;\n    }\n  }]);\n\n  return CovidWave;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidWave);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiYXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiQ292aWRXYXZlIiwiaGVpZ2h0IiwidGhyZXNob2xkU2NhbGUiLCJkMyIsInNjYWxlVGhyZXNob2xkIiwiZG9tYWluIiwicmFuZ2UiLCJ0aHJlc2hvbGRUZXh0IiwibG9jYWxlIiwicGVha1RleHQiLCJkZWZhdWx0RGF0YSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibGluZXNEYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImMiLCJsaW5lRGF0YSIsIngiLCJ5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInNjYWxlTGluZWFyIiwiY29sb3IiLCJvcGFjaXR5IiwibGluZSIsImN1cnZlIiwiY3VydmVNb25vdG9uZVgiLCJkIiwidGhyZXNob2xkTGluZSIsInNlbGVjdEFsbCIsImpvaW4iLCJzdHlsZSIsInJhaXNlZFkiLCJkYXR1bSIsImh0bWwiLCJtdXN0YWNoZSIsInJlbmRlciIsIm51bWJlciIsImhpZ2hsaWdodExhYiIsIm1vdXNlUmVjdCIsImhpZ2hsaWdodENvdW50cnkiLCJ5Q29vcmQiLCJkYXRhQ29vcmQiLCJpbnZlcnQiLCJkYXRhUG9pbnQiLCJmaW5kIiwibGFzdCIsImRhdGFQb2ludHMiLCJmaWx0ZXIiLCJpc29BbHBoYTIiLCJyYW5kb20iLCJsZW5ndGgiLCJjb3VudHJ5IiwiZ2V0Q291bnRyeSIsInRleHQiLCJ0cmFuc2xhdGlvbnMiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlSGlnaGxpZ2h0Iiwib24iLCJ0aHJvdHRsZSIsImV2ZW50IiwiY29vcmRpbmF0ZXMiLCJtb3VzZSIsInRvdWNoZXMi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USxDQUFDLFlBQU07QUFDNUQsWUFBSSxDQUFDekUsa0RBQUUsQ0FBQzBFLEtBQVIsRUFBZTtBQUNmLFlBQU1DLFdBQVcsR0FBRzNFLGtEQUFFLENBQUM0RSxLQUFILENBQVM5RCxHQUFHLENBQUNKLElBQUosRUFBVCxDQUFwQjtBQUNBMEMsd0JBQWdCLENBQUN1QixXQUFXLENBQUMsQ0FBRCxDQUFaLENBQWhCO0FBQ0QsT0FKc0QsRUFJcEQsRUFKb0QsQ0FBdkQ7QUFNQXhCLGVBQVMsQ0FBQ3FCLEVBQVYsQ0FBYSxnQ0FBYixFQUErQ0MsdURBQVEsQ0FBQyxZQUFNO0FBQzVELFlBQUksQ0FBQ3pFLGtEQUFFLENBQUMwRSxLQUFSLEVBQWU7O0FBRDZDLDBCQUV0QzFFLGtEQUFFLENBQUM2RSxPQUFILENBQVcvRCxHQUFHLENBQUNKLElBQUosRUFBWCxDQUZzQztBQUFBO0FBQUEsWUFFckRpRSxXQUZxRDs7QUFHNUR2Qix3QkFBZ0IsQ0FBQ3VCLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBaEI7QUFDRCxPQUpzRCxFQUlwRCxFQUpvRCxDQUF2RCxFQUlRLElBSlI7QUFNQXhCLGVBQVMsQ0FBQ3FCLEVBQVYsQ0FBYSxpQkFBYixFQUFnQ0QsZUFBaEM7QUFDQXBCLGVBQVMsQ0FBQ3FCLEVBQVYsQ0FBYSxnQ0FBYixFQUErQ0QsZUFBL0M7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQXhLcUJPLDREOztBQTJLVGpGLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCBkZWZhdWx0RGF0YSBmcm9tICcuL2RlZmF1bHREYXRhLmpzb24nO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbmltcG9ydCByYW5kb20gZnJvbSAnbG9kYXNoL3JhbmRvbSc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuY29uc3QgYXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBDb3ZpZFdhdmUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICB0aHJlc2hvbGRTY2FsZTogZDMuc2NhbGVUaHJlc2hvbGQoKVxuICAgICAgLmRvbWFpbihbMC41LCAwLjc1XSlcbiAgICAgIC5yYW5nZShbMC4xLCAwLjIsIDAuNF0pLFxuICAgIHRocmVzaG9sZFRleHQ6ICc8c3Bhbj57eyBudW1iZXIgfX08L3NwYW4+IGNvdW50cmllcyBhcmUgc3RpbGwgYXQgdGhlIHBlYWsgb2YgdGhlaXIgaW5mZWN0aW9uIGN1cnZlLicsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIHBlYWtUZXh0OiAne3sgcGVyY2VudCB9fSUgb2YgcGVhaycsXG4gIH07XG5cbiAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG5cbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBwcm9wcztcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChub2RlKS5hcHBlbmRTZWxlY3QoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDEwKScpO1xuXG4gICAgY29uc3QgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTApO1xuXG4gICAgY29uc3QgbGluZXNEYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChjKSA9PiB7XG4gICAgICBjb25zdCBsaW5lRGF0YSA9IFt7IHg6IDAsIHk6IDAsIGMgfV07XG4gICAgICBsaW5lRGF0YS5wdXNoKHtcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiArZGF0YVtjXSAvIDQsXG4gICAgICAgIGMsXG4gICAgICB9KTtcbiAgICAgIGxpbmVEYXRhLnB1c2goe1xuICAgICAgICB4OiAxLFxuICAgICAgICB5OiArZGF0YVtjXSxcbiAgICAgICAgYyxcbiAgICAgIH0pO1xuICAgICAgbGluZURhdGEucHVzaCh7XG4gICAgICAgIHg6IDEuNSxcbiAgICAgICAgeTogK2RhdGFbY10gLyA0LFxuICAgICAgICBjLFxuICAgICAgfSk7XG4gICAgICBsaW5lRGF0YS5wdXNoKHsgeDogMiwgeTogMCwgYyB9KTtcbiAgICAgIHJldHVybiBsaW5lRGF0YTtcbiAgICB9KTtcblxuICAgIC8vIHNvcnQgbGVhc3QgdG8gbW9zdCBmb3IgbW91c2UgaGFuZGxlclxuICAgIGxpbmVzRGF0YS5zb3J0KChhLCBiKSA9PiBhWzJdLnkgLSBiWzJdLnkpO1xuXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDJdKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxuICAgIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVUaHJlc2hvbGQoKVxuICAgICAgLmRvbWFpbihbMC41LCAwLjc1XSlcbiAgICAgIC5yYW5nZShbJyNjY2MnLCAnI2Y2OGUyNicsICcjZGUyZDI2J10pO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IGQzLnNjYWxlVGhyZXNob2xkKClcbiAgICAgIC5kb21haW4oWzAuNSwgMC43NV0pXG4gICAgICAucmFuZ2UoWzAuMSwgMC4yLCAwLjRdKTtcblxuICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWClcbiAgICAgIC54KGQgPT4geChkLngpKVxuICAgICAgLnkoZCA9PiB5KGQueSkpO1xuICAgIGNvbnN0IHRocmVzaG9sZExpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWClcbiAgICAgIC54KGQgPT4geChkLngpKVxuICAgICAgLnkoZCA9PiB5KGQueSkgLSA0KTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoJ3BhdGguY291bnRyaWVzJylcbiAgICAgIC5kYXRhKGxpbmVzRGF0YSlcbiAgICAgIC5qb2luKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGNvdW50cmllcyBpc28tJHtkWzBdLmN9YClcbiAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGQgPT4gb3BhY2l0eShkYXRhW2RbMF0uY10pKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGQgPT4gY29sb3IoZGF0YVtkWzBdLmNdKSlcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cignZCcsIGxpbmUpO1xuXG4gICAgY29uc3QgcmFpc2VkWSA9IDE7XG5cbiAgICBzdmcuYXBwZW5kU2VsZWN0KCdwYXRoLmxpbWl0Lm1heCcpXG4gICAgICAuZGF0dW0oW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLjUsIHk6IHJhaXNlZFkgLyA0IH0sXG4gICAgICAgIHsgeDogMSwgeTogcmFpc2VkWSB9LFxuICAgICAgICB7IHg6IDEuNSwgeTogcmFpc2VkWSAvIDQgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICBdKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGQgPT4gY29sb3IocmFpc2VkWSkpXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoJ2QnLCB0aHJlc2hvbGRMaW5lKTtcblxuICAgIHN2Zy5hcHBlbmRTZWxlY3QoJ2xpbmUudG9wLWNvdW50cmllcycpXG4gICAgICAuYXR0cigneDEnLCB4KDEuMjgpKVxuICAgICAgLmF0dHIoJ3gyJywgeCgyKSlcbiAgICAgIC5hdHRyKCd5MScsIHkoMC43MCkpXG4gICAgICAuYXR0cigneTInLCB5KDAuNzApKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGQgPT4gY29sb3IocmFpc2VkWSkpO1xuXG4gICAgZDMuc2VsZWN0KG5vZGUpLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLnJpZ2h0JylcbiAgICAgIC5zdHlsZSgnYm90dG9tJywgYCR7aGVpZ2h0IC0geSgwLjcwKX1weGApXG4gICAgICAuc3R5bGUoJ3JpZ2h0JywgJzBweCcpXG4gICAgICAuc3R5bGUoJ3dpZHRoJywgYCR7eCgwLjcpfXB4YClcbiAgICAgIC5odG1sKG11c3RhY2hlLnJlbmRlcihwcm9wcy50aHJlc2hvbGRUZXh0LCB7IG51bWJlcjogMzMgfSkpO1xuXG4gICAgY29uc3QgaGlnaGxpZ2h0TGFiID0gZDMuc2VsZWN0KG5vZGUpLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLmxlZnQnKVxuICAgICAgLnN0eWxlKCdib3R0b20nLCBgJHtoZWlnaHQgLSB5KDAuNzApfXB4YClcbiAgICAgIC5zdHlsZSgnbGVmdCcsICcwcHgnKVxuICAgICAgLnN0eWxlKCd3aWR0aCcsIGAke3goMC43KX1weGApXG4gICAgICAuaHRtbCgnJyk7XG5cbiAgICBjb25zdCBtb3VzZVJlY3QgPSBzdmcuYXBwZW5kU2VsZWN0KCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5zdHlsZSgnZmlsbCcsICd0cmFuc3BhcmVudCcpO1xuXG4gICAgY29uc3QgaGlnaGxpZ2h0Q291bnRyeSA9ICh5Q29vcmQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFDb29yZCA9IHkuaW52ZXJ0KHlDb29yZCk7XG4gICAgICBsZXQgZGF0YVBvaW50ID0gbGluZXNEYXRhLmZpbmQoZCA9PiBkWzJdLnkgPiBkYXRhQ29vcmQpO1xuICAgICAgaWYgKCFkYXRhUG9pbnQpIGRhdGFQb2ludCA9IGxhc3QobGluZXNEYXRhKTtcbiAgICAgIGNvbnN0IGRhdGFQb2ludHMgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoYyA9PiArZGF0YVtjXSA9PT0gZGF0YVBvaW50WzJdLnkpO1xuICAgICAgY29uc3QgaXNvQWxwaGEyID0gZGF0YVBvaW50c1tyYW5kb20oMCwgZGF0YVBvaW50cy5sZW5ndGggLSAxKV07XG4gICAgICBjb25zdCBjb3VudHJ5ID0gYXRsYXMuZ2V0Q291bnRyeShpc29BbHBoYTIpO1xuICAgICAgaGlnaGxpZ2h0TGFiXG4gICAgICAgIC5hcHBlbmRTZWxlY3QoJ2Rpdi5jb3VudHJ5LW5hbWUnKVxuICAgICAgICAudGV4dChjb3VudHJ5LnRyYW5zbGF0aW9uc1twcm9wcy5sb2NhbGVdKTtcbiAgICAgIGhpZ2hsaWdodExhYlxuICAgICAgICAuYXBwZW5kU2VsZWN0KCdkaXYuY291bnRyeS1kYXRhJylcbiAgICAgICAgLmh0bWwobXVzdGFjaGUucmVuZGVyKHByb3BzLnBlYWtUZXh0LCB7XG4gICAgICAgICAgcGVyY2VudDogTWF0aC5yb3VuZChkYXRhW2lzb0FscGhhMl0gKiAxMDApLFxuICAgICAgICB9KSk7XG4gICAgICBzdmcuc2VsZWN0QWxsKCdwYXRoLmNvdW50cmllcycpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGQgPT4gZFswXS5jID09PSBpc29BbHBoYTIgPyAxIDogMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUhpZ2hsaWdodCA9ICgpID0+IHtcbiAgICAgIGhpZ2hsaWdodExhYi5odG1sKCcnKTtcbiAgICAgIHN2Zy5zZWxlY3RBbGwoJ3BhdGguY291bnRyaWVzJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgZCA9PiBvcGFjaXR5KGRhdGFbZFswXS5jXSkpO1xuICAgIH07XG5cbiAgICBtb3VzZVJlY3Qub24oJ21vdXNlZW50ZXIud2F2ZSBtb3VzZW1vdmUud2F2ZScsIHRocm90dGxlKCgpID0+IHtcbiAgICAgIGlmICghZDMuZXZlbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZDMubW91c2Uoc3ZnLm5vZGUoKSk7XG4gICAgICBoaWdobGlnaHRDb3VudHJ5KGNvb3JkaW5hdGVzWzFdKTtcbiAgICB9LCA1MCkpO1xuXG4gICAgbW91c2VSZWN0Lm9uKCd0b3VjaHN0YXJ0LndhdmUgdG91Y2htb3ZlLndhdmUnLCB0aHJvdHRsZSgoKSA9PiB7XG4gICAgICBpZiAoIWQzLmV2ZW50KSByZXR1cm47XG4gICAgICBjb25zdCBbY29vcmRpbmF0ZXNdID0gZDMudG91Y2hlcyhzdmcubm9kZSgpKTtcbiAgICAgIGhpZ2hsaWdodENvdW50cnkoY29vcmRpbmF0ZXNbMV0pO1xuICAgIH0sIDUwKSwgdHJ1ZSk7XG5cbiAgICBtb3VzZVJlY3Qub24oJ21vdXNlbGVhdmUud2F2ZScsIHJlbW92ZUhpZ2hsaWdodCk7XG4gICAgbW91c2VSZWN0Lm9uKCd0b3VjaGVuZC53YXZlIHRvdWNoY2FuY2VsLndhdmUnLCByZW1vdmVIaWdobGlnaHQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ292aWRXYXZlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})