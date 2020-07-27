webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/random */ \"./node_modules/lodash/random.js\");\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar CovidWave = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CovidWave, _ChartComponent);\n\n  var _super = _createSuper(CovidWave);\n\n  function CovidWave() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CovidWave);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      height: 200,\n      thresholdDomain: [0.5, 0.75],\n      thresholdRange: {\n        color: ['#ccc', '#f68e26', '#de2d26'],\n        opacity: [0.1, 0.2, 0.4]\n      },\n      thresholdText: '{{ &number }} countries are still at the peak of their infection curve.',\n      peakText: '{{ &percent }} of peak'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultData\", {});\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CovidWave, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = props.height;\n      var legend = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.legend');\n      var chart = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.chart');\n      var svg = chart.appendSelect('svg').attr('width', width).attr('height', height).appendSelect('g').attr('transform', 'translate(0, 10)');\n      var t = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].transition().duration(250);\n      var linesData = Object.keys(data).map(function (c) {\n        var lineData = [{\n          x: 0,\n          y: 0,\n          c: c\n        }];\n        lineData.push({\n          x: 0.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 1,\n          y: +data[c],\n          c: c\n        });\n        lineData.push({\n          x: 1.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 2,\n          y: 0,\n          c: c\n        });\n        return lineData;\n      }); // sort least to most for mouse handler\n\n      linesData.sort(function (a, b) {\n        return a[2].y - b[2].y;\n      });\n      var x = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 2]).range([0, width]);\n      var y = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 1]).range([height - 20, 0]);\n      var color = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.color);\n      var opacity = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.opacity);\n      var line = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y);\n      });\n      var thresholdLine = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y) - 4;\n      });\n      svg.selectAll('path.countries').data(linesData).join('path').attr('class', function (d) {\n        return \"countries iso-\".concat(d[0].c);\n      }).style('opacity', function (d) {\n        return opacity(data[d[0].c]);\n      }).attr('stroke', function (d) {\n        return color(data[d[0].c]);\n      }).transition(t).attr('d', line);\n      var raisedY = 1;\n      svg.appendSelect('path.limit.max').datum([{\n        x: 0,\n        y: 0\n      }, {\n        x: 0.5,\n        y: raisedY / 4\n      }, {\n        x: 1,\n        y: raisedY\n      }, {\n        x: 1.5,\n        y: raisedY / 4\n      }, {\n        x: 2,\n        y: 0\n      }]).attr('stroke', function (d) {\n        return color(raisedY);\n      }).transition(t).attr('d', thresholdLine);\n      svg.appendSelect('line.top-countries').attr('x1', x(1.28)).attr('x2', x(2)).attr('y1', y(0.70)).attr('y2', y(0.70)).attr('stroke', function (d) {\n        return color(raisedY);\n      });\n      var countriesAboveThreshold = Object.keys(data).filter(function (c) {\n        return data[c] > lodash_last__WEBPACK_IMPORTED_MODULE_11___default()(props.thresholdDomain);\n      }).length;\n      _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.right').style('bottom', \"\".concat(height - y(0.70), \"px\")).style('right', '0px').style('width', \"\".concat(x(0.7), \"px\")).html(mustache__WEBPACK_IMPORTED_MODULE_12___default.a.render(props.thresholdText, {\n        number: \"<span>\".concat(countriesAboveThreshold, \"</span>\")\n      })).select('span').style('color', lodash_last__WEBPACK_IMPORTED_MODULE_11___default()(props.thresholdRange.color));\n      var highlightLab = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.left').style('top', '0px').style('left', '0px').style('width', \"\".concat(x(0.7), \"px\")).html('');\n      var mouseRect = svg.appendSelect('rect').attr('width', width).attr('height', height).attr('x', 0).attr('y', 0).style('fill', 'transparent');\n\n      var highlightCountry = function highlightCountry(yCoord) {\n        var dataCoord = y.invert(yCoord);\n        var dataPoint = linesData.find(function (d) {\n          return d[2].y > dataCoord;\n        });\n        if (!dataPoint) dataPoint = lodash_last__WEBPACK_IMPORTED_MODULE_11___default()(linesData);\n        var dataPoints = Object.keys(data).filter(function (c) {\n          return +data[c] === dataPoint[2].y;\n        });\n        var isoAlpha2 = dataPoints[lodash_random__WEBPACK_IMPORTED_MODULE_13___default()(0, dataPoints.length - 1)];\n        var country = atlas.getCountry(isoAlpha2);\n        var percent = data[isoAlpha2] * 100;\n        highlightLab.appendSelect('div.country-name').text(country.translations[props.locale]);\n        highlightLab.appendSelect('div.country-data').html(mustache__WEBPACK_IMPORTED_MODULE_12___default.a.render(props.peakText, {\n          percent: percent < 1 ? '<span>&lt; 1%</span>' : \"<span>\".concat(Math.round(percent), \"%</span>\")\n        })).select('span').style('color', color(data[isoAlpha2]));\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return d[0].c === isoAlpha2 ? 1 : 0;\n        });\n      };\n\n      var removeHighlight = function removeHighlight() {\n        highlightLab.html('');\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return opacity(data[d[0].c]);\n        });\n      };\n\n      mouseRect.on('mouseenter.wave mousemove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_14___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n        var coordinates = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].mouse(svg.node());\n        highlightCountry(coordinates[1]);\n      }, 50));\n      mouseRect.on('touchstart.wave touchmove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_14___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n\n        var _d3$touches = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].touches(svg.node()),\n            _d3$touches2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_d3$touches, 1),\n            coordinates = _d3$touches2[0];\n\n        highlightCountry(coordinates[1]);\n      }, 50), true);\n      mouseRect.on('mouseleave.wave', removeHighlight);\n      mouseRect.on('touchend.wave touchcancel.wave', removeHighlight);\n      legend.appendSelect('p').text('How to read this chart');\n      return this;\n    }\n  }]);\n\n  return CovidWave;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidWave);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiYXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiQ292aWRXYXZlIiwibG9jYWxlIiwiaGVpZ2h0IiwidGhyZXNob2xkRG9tYWluIiwidGhyZXNob2xkUmFuZ2UiLCJjb2xvciIsIm9wYWNpdHkiLCJ0aHJlc2hvbGRUZXh0IiwicGVha1RleHQiLCJkYXRhIiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJsZWdlbmQiLCJkMyIsInNlbGVjdCIsImFwcGVuZFNlbGVjdCIsImNoYXJ0Iiwic3ZnIiwiYXR0ciIsInQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJsaW5lc0RhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiYyIsImxpbmVEYXRhIiwieCIsInkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInNjYWxlVGhyZXNob2xkIiwibGluZSIsImN1cnZlIiwiY3VydmVNb25vdG9uZVgiLCJkIiwidGhyZXNob2xkTGluZSIsInNlbGVjdEFsbCIsImpvaW4iLCJzdHlsZSIsInJhaXNlZFkiLCJkYXR1bSIsImNvdW50cmllc0Fib3ZlVGhyZXNob2xkIiwiZmlsdGVyIiwibGFzdCIsImxlbmd0aCIsImh0bWwiLCJtdXN0YWNoZSIsInJlbmRlciIsIm51bWJlciIsImhpZ2hsaWdodExhYiIsIm1vdXNlUmVjdCIsImhpZ2hsaWdodENvdW50cnkiLCJ5Q29vcmQiLCJkYXRhQ29vcmQiLCJpbnZlcnQiLCJkYXRhUG9pbnQiLCJmaW5kIiwiZGF0YVBvaW50cyIsImlzb0FscGhhMiIsInJhbmRvbSIsImNvdW50cnkiLCJnZXRDb3VudHJ5IiwicGVyY2VudCIsInRleHQiLCJ0cmFuc2xhdGlvbnMiLCJNYXRoIiwicm91bmQiLCJyZW1vdmVIaWdobGlnaHQiLCJvbiIsInRocm90dGxlIiwiZXZlbnQiLCJjb29yZGluYXRlcyIsIm1vdXNlIiwidG91Y2hlcyIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsOEVBQUosRUFBZDs7SUFFTUMsUzs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxZQUFNLEVBQUUsSUFESztBQUViQyxZQUFNLEVBQUUsR0FGSztBQUdiQyxxQkFBZSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sQ0FISjtBQUliQyxvQkFBYyxFQUFFO0FBQ2RDLGFBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLENBRE87QUFFZEMsZUFBTyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYO0FBRkssT0FKSDtBQVFiQyxtQkFBYSxFQUFFLHlFQVJGO0FBU2JDLGNBQVEsRUFBRTtBQVRHLEs7O3NOQVlELEU7Ozs7Ozs7MkJBRVA7QUFDTCxVQUFNQyxJQUFJLEdBQUcsS0FBS0EsSUFBTCxFQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDtBQUNBLFVBQU1DLElBQUksR0FBRyxLQUFLQyxTQUFMLEdBQWlCRCxJQUFqQixFQUFiOztBQUhLLGtDQUthQSxJQUFJLENBQUNFLHFCQUFMLEVBTGI7QUFBQSxVQUtHQyxLQUxILHlCQUtHQSxLQUxIOztBQUFBLFVBTUdaLE1BTkgsR0FNY1EsS0FOZCxDQU1HUixNQU5IO0FBUUwsVUFBTWEsTUFBTSxHQUFHQyxrREFBRSxDQUFDQyxNQUFILENBQVVOLElBQVYsRUFBZ0JPLFlBQWhCLENBQTZCLFlBQTdCLENBQWY7QUFFQSxVQUFNQyxLQUFLLEdBQUdILGtEQUFFLENBQUNDLE1BQUgsQ0FBVU4sSUFBVixFQUFnQk8sWUFBaEIsQ0FBNkIsV0FBN0IsQ0FBZDtBQUVBLFVBQU1FLEdBQUcsR0FBR0Qs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L0Qsa0RBQUUsQ0FBQ2dFLEtBQVIsRUFBZTs7QUFENkMsMEJBRXRDaEUsa0RBQUUsQ0FBQ21FLE9BQUgsQ0FBVy9ELEdBQUcsQ0FBQ1QsSUFBSixFQUFYLENBRnNDO0FBQUE7QUFBQSxZQUVyRHNFLFdBRnFEOztBQUc1RHBCLHdCQUFnQixDQUFDb0IsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFoQjtBQUNELE9BSnNELEVBSXBELEVBSm9ELENBQXZELEVBSVEsSUFKUjtBQU1BckIsZUFBUyxDQUFDa0IsRUFBVixDQUFhLGlCQUFiLEVBQWdDRCxlQUFoQztBQUNBakIsZUFBUyxDQUFDa0IsRUFBVixDQUFhLGdDQUFiLEVBQStDRCxlQUEvQztBQUVBOUQsWUFBTSxDQUFDRyxZQUFQLENBQW9CLEdBQXBCLEVBQ0d1RCxJQURILENBQ1Esd0JBRFI7QUFHQSxhQUFPLElBQVA7QUFDRDs7OztFQTVMcUJXLDREOztBQStMVHBGLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0JztcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJ2xvZGFzaC9yYW5kb20nO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbmNvbnN0IGF0bGFzID0gbmV3IEF0bGFzTWV0YWRhdGFDbGllbnQoKTtcblxuY2xhc3MgQ292aWRXYXZlIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGhlaWdodDogMjAwLFxuICAgIHRocmVzaG9sZERvbWFpbjogWzAuNSwgMC43NV0sXG4gICAgdGhyZXNob2xkUmFuZ2U6IHtcbiAgICAgIGNvbG9yOiBbJyNjY2MnLCAnI2Y2OGUyNicsICcjZGUyZDI2J10sXG4gICAgICBvcGFjaXR5OiBbMC4xLCAwLjIsIDAuNF0sXG4gICAgfSxcbiAgICB0aHJlc2hvbGRUZXh0OiAne3sgJm51bWJlciB9fSBjb3VudHJpZXMgYXJlIHN0aWxsIGF0IHRoZSBwZWFrIG9mIHRoZWlyIGluZmVjdGlvbiBjdXJ2ZS4nLFxuICAgIHBlYWtUZXh0OiAne3sgJnBlcmNlbnQgfX0gb2YgcGVhaycsXG4gIH07XG5cbiAgZGVmYXVsdERhdGEgPSB7fTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG5cbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGxlZ2VuZCA9IGQzLnNlbGVjdChub2RlKS5hcHBlbmRTZWxlY3QoJ2Rpdi5sZWdlbmQnKTtcblxuICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KG5vZGUpLmFwcGVuZFNlbGVjdCgnZGl2LmNoYXJ0Jyk7XG5cbiAgICBjb25zdCBzdmcgPSBjaGFydC5hcHBlbmRTZWxlY3QoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDEwKScpO1xuXG4gICAgY29uc3QgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTApO1xuXG4gICAgY29uc3QgbGluZXNEYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChjKSA9PiB7XG4gICAgICBjb25zdCBsaW5lRGF0YSA9IFt7IHg6IDAsIHk6IDAsIGMgfV07XG4gICAgICBsaW5lRGF0YS5wdXNoKHtcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiArZGF0YVtjXSAvIDQsXG4gICAgICAgIGMsXG4gICAgICB9KTtcbiAgICAgIGxpbmVEYXRhLnB1c2goe1xuICAgICAgICB4OiAxLFxuICAgICAgICB5OiArZGF0YVtjXSxcbiAgICAgICAgYyxcbiAgICAgIH0pO1xuICAgICAgbGluZURhdGEucHVzaCh7XG4gICAgICAgIHg6IDEuNSxcbiAgICAgICAgeTogK2RhdGFbY10gLyA0LFxuICAgICAgICBjLFxuICAgICAgfSk7XG4gICAgICBsaW5lRGF0YS5wdXNoKHsgeDogMiwgeTogMCwgYyB9KTtcbiAgICAgIHJldHVybiBsaW5lRGF0YTtcbiAgICB9KTtcblxuICAgIC8vIHNvcnQgbGVhc3QgdG8gbW9zdCBmb3IgbW91c2UgaGFuZGxlclxuICAgIGxpbmVzRGF0YS5zb3J0KChhLCBiKSA9PiBhWzJdLnkgLSBiWzJdLnkpO1xuXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDJdKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKFtoZWlnaHQgLSAyMCwgMF0pO1xuXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZVRocmVzaG9sZCgpXG4gICAgICAuZG9tYWluKHByb3BzLnRocmVzaG9sZERvbWFpbilcbiAgICAgIC5yYW5nZShwcm9wcy50aHJlc2hvbGRSYW5nZS5jb2xvcik7XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gZDMuc2NhbGVUaHJlc2hvbGQoKVxuICAgICAgLmRvbWFpbihwcm9wcy50aHJlc2hvbGREb21haW4pXG4gICAgICAucmFuZ2UocHJvcHMudGhyZXNob2xkUmFuZ2Uub3BhY2l0eSk7XG5cbiAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpXG4gICAgICAueChkID0+IHgoZC54KSlcbiAgICAgIC55KGQgPT4geShkLnkpKTtcbiAgICBjb25zdCB0aHJlc2hvbGRMaW5lID0gZDMubGluZSgpXG4gICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpXG4gICAgICAueChkID0+IHgoZC54KSlcbiAgICAgIC55KGQgPT4geShkLnkpIC0gNCk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKCdwYXRoLmNvdW50cmllcycpXG4gICAgICAuZGF0YShsaW5lc0RhdGEpXG4gICAgICAuam9pbigncGF0aCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBjb3VudHJpZXMgaXNvLSR7ZFswXS5jfWApXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCBkID0+IG9wYWNpdHkoZGF0YVtkWzBdLmNdKSlcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGNvbG9yKGRhdGFbZFswXS5jXSkpXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoJ2QnLCBsaW5lKTtcblxuICAgIGNvbnN0IHJhaXNlZFkgPSAxO1xuXG4gICAgc3ZnLmFwcGVuZFNlbGVjdCgncGF0aC5saW1pdC5tYXgnKVxuICAgICAgLmRhdHVtKFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMC41LCB5OiByYWlzZWRZIC8gNCB9LFxuICAgICAgICB7IHg6IDEsIHk6IHJhaXNlZFkgfSxcbiAgICAgICAgeyB4OiAxLjUsIHk6IHJhaXNlZFkgLyA0IH0sXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgXSlcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGNvbG9yKHJhaXNlZFkpKVxuICAgICAgLnRyYW5zaXRpb24odClcbiAgICAgIC5hdHRyKCdkJywgdGhyZXNob2xkTGluZSk7XG5cbiAgICBzdmcuYXBwZW5kU2VsZWN0KCdsaW5lLnRvcC1jb3VudHJpZXMnKVxuICAgICAgLmF0dHIoJ3gxJywgeCgxLjI4KSlcbiAgICAgIC5hdHRyKCd4MicsIHgoMikpXG4gICAgICAuYXR0cigneTEnLCB5KDAuNzApKVxuICAgICAgLmF0dHIoJ3kyJywgeSgwLjcwKSlcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGNvbG9yKHJhaXNlZFkpKTtcblxuICAgIGNvbnN0IGNvdW50cmllc0Fib3ZlVGhyZXNob2xkID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGMgPT4gZGF0YVtjXSA+IGxhc3QocHJvcHMudGhyZXNob2xkRG9tYWluKSkubGVuZ3RoO1xuXG4gICAgZDMuc2VsZWN0KG5vZGUpLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLnJpZ2h0JylcbiAgICAgIC5zdHlsZSgnYm90dG9tJywgYCR7aGVpZ2h0IC0geSgwLjcwKX1weGApXG4gICAgICAuc3R5bGUoJ3JpZ2h0JywgJzBweCcpXG4gICAgICAuc3R5bGUoJ3dpZHRoJywgYCR7eCgwLjcpfXB4YClcbiAgICAgIC5odG1sKG11c3RhY2hlLnJlbmRlcihwcm9wcy50aHJlc2hvbGRUZXh0LCB7XG4gICAgICAgIG51bWJlcjogYDxzcGFuPiR7Y291bnRyaWVzQWJvdmVUaHJlc2hvbGR9PC9zcGFuPmAsXG4gICAgICB9KSlcbiAgICAgIC5zZWxlY3QoJ3NwYW4nKVxuICAgICAgLnN0eWxlKCdjb2xvcicsIGxhc3QocHJvcHMudGhyZXNob2xkUmFuZ2UuY29sb3IpKTtcblxuICAgIGNvbnN0IGhpZ2hsaWdodExhYiA9IGQzLnNlbGVjdChub2RlKS5hcHBlbmRTZWxlY3QoJ2Rpdi5sYWJlbC5sZWZ0JylcbiAgICAgIC5zdHlsZSgndG9wJywgJzBweCcpXG4gICAgICAuc3R5bGUoJ2xlZnQnLCAnMHB4JylcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHt4KDAuNyl9cHhgKVxuICAgICAgLmh0bWwoJycpO1xuXG4gICAgY29uc3QgbW91c2VSZWN0ID0gc3ZnLmFwcGVuZFNlbGVjdCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKTtcblxuICAgIGNvbnN0IGhpZ2hsaWdodENvdW50cnkgPSAoeUNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBkYXRhQ29vcmQgPSB5LmludmVydCh5Q29vcmQpO1xuICAgICAgbGV0IGRhdGFQb2ludCA9IGxpbmVzRGF0YS5maW5kKGQgPT4gZFsyXS55ID4gZGF0YUNvb3JkKTtcbiAgICAgIGlmICghZGF0YVBvaW50KSBkYXRhUG9pbnQgPSBsYXN0KGxpbmVzRGF0YSk7XG4gICAgICBjb25zdCBkYXRhUG9pbnRzID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGMgPT4gK2RhdGFbY10gPT09IGRhdGFQb2ludFsyXS55KTtcbiAgICAgIGNvbnN0IGlzb0FscGhhMiA9IGRhdGFQb2ludHNbcmFuZG9tKDAsIGRhdGFQb2ludHMubGVuZ3RoIC0gMSldO1xuICAgICAgY29uc3QgY291bnRyeSA9IGF0bGFzLmdldENvdW50cnkoaXNvQWxwaGEyKTtcbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBkYXRhW2lzb0FscGhhMl0gKiAxMDA7XG4gICAgICBoaWdobGlnaHRMYWJcbiAgICAgICAgLmFwcGVuZFNlbGVjdCgnZGl2LmNvdW50cnktbmFtZScpXG4gICAgICAgIC50ZXh0KGNvdW50cnkudHJhbnNsYXRpb25zW3Byb3BzLmxvY2FsZV0pO1xuICAgICAgaGlnaGxpZ2h0TGFiXG4gICAgICAgIC5hcHBlbmRTZWxlY3QoJ2Rpdi5jb3VudHJ5LWRhdGEnKVxuICAgICAgICAuaHRtbChtdXN0YWNoZS5yZW5kZXIocHJvcHMucGVha1RleHQsIHtcbiAgICAgICAgICBwZXJjZW50OiBwZXJjZW50IDwgMSA/XG4gICAgICAgICAgICAnPHNwYW4+Jmx0OyAxJTwvc3Bhbj4nIDpcbiAgICAgICAgICAgIGA8c3Bhbj4ke01hdGgucm91bmQocGVyY2VudCl9JTwvc3Bhbj5gLFxuICAgICAgICB9KSlcbiAgICAgICAgLnNlbGVjdCgnc3BhbicpXG4gICAgICAgIC5zdHlsZSgnY29sb3InLCBjb2xvcihkYXRhW2lzb0FscGhhMl0pKTtcbiAgICAgIHN2Zy5zZWxlY3RBbGwoJ3BhdGguY291bnRyaWVzJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgZCA9PiBkWzBdLmMgPT09IGlzb0FscGhhMiA/IDEgOiAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAgICAgaGlnaGxpZ2h0TGFiLmh0bWwoJycpO1xuICAgICAgc3ZnLnNlbGVjdEFsbCgncGF0aC5jb3VudHJpZXMnKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBkID0+IG9wYWNpdHkoZGF0YVtkWzBdLmNdKSk7XG4gICAgfTtcblxuICAgIG1vdXNlUmVjdC5vbignbW91c2VlbnRlci53YXZlIG1vdXNlbW92ZS53YXZlJywgdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgaWYgKCFkMy5ldmVudCkgcmV0dXJuO1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBkMy5tb3VzZShzdmcubm9kZSgpKTtcbiAgICAgIGhpZ2hsaWdodENvdW50cnkoY29vcmRpbmF0ZXNbMV0pO1xuICAgIH0sIDUwKSk7XG5cbiAgICBtb3VzZVJlY3Qub24oJ3RvdWNoc3RhcnQud2F2ZSB0b3VjaG1vdmUud2F2ZScsIHRocm90dGxlKCgpID0+IHtcbiAgICAgIGlmICghZDMuZXZlbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IFtjb29yZGluYXRlc10gPSBkMy50b3VjaGVzKHN2Zy5ub2RlKCkpO1xuICAgICAgaGlnaGxpZ2h0Q291bnRyeShjb29yZGluYXRlc1sxXSk7XG4gICAgfSwgNTApLCB0cnVlKTtcblxuICAgIG1vdXNlUmVjdC5vbignbW91c2VsZWF2ZS53YXZlJywgcmVtb3ZlSGlnaGxpZ2h0KTtcbiAgICBtb3VzZVJlY3Qub24oJ3RvdWNoZW5kLndhdmUgdG91Y2hjYW5jZWwud2F2ZScsIHJlbW92ZUhpZ2hsaWdodCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kU2VsZWN0KCdwJylcbiAgICAgIC50ZXh0KCdIb3cgdG8gcmVhZCB0aGlzIGNoYXJ0Jyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3ZpZFdhdmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})