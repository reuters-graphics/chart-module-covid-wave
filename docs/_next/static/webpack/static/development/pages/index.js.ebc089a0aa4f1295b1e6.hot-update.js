webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/random */ \"./node_modules/lodash/random.js\");\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar CovidWave = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CovidWave, _ChartComponent);\n\n  var _super = _createSuper(CovidWave);\n\n  function CovidWave() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CovidWave);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultProps\", {\n      locale: 'en',\n      height: 200,\n      thresholdDomain: [0.5, 0.75],\n      thresholdRange: {\n        color: ['#ccc', '#f68e26', '#de2d26'],\n        opacity: [0.1, 0.2, 0.4]\n      },\n      thresholdText: '{{ &number }} countries are still at the peak of their infection curve.',\n      peakText: '{{ &percent }} of peak'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultData\", {});\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CovidWave, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = props.height;\n      var svg = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('svg').attr('width', width).attr('height', height).appendSelect('g').attr('transform', 'translate(0, 10)');\n      var t = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].transition().duration(250);\n      var linesData = Object.keys(data).map(function (c) {\n        var lineData = [{\n          x: 0,\n          y: 0,\n          c: c\n        }];\n        lineData.push({\n          x: 0.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 1,\n          y: +data[c],\n          c: c\n        });\n        lineData.push({\n          x: 1.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 2,\n          y: 0,\n          c: c\n        });\n        return lineData;\n      }); // sort least to most for mouse handler\n\n      linesData.sort(function (a, b) {\n        return a[2].y - b[2].y;\n      });\n      var x = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 2]).range([0, width]);\n      var y = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 1]).range([height - 20, 0]);\n      var color = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.color);\n      var opacity = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.opacity);\n      var line = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y);\n      });\n      var thresholdLine = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y) - 4;\n      });\n      svg.selectAll('path.countries').data(linesData).join('path').attr('class', function (d) {\n        return \"countries iso-\".concat(d[0].c);\n      }).style('opacity', function (d) {\n        return opacity(data[d[0].c]);\n      }).attr('stroke', function (d) {\n        return color(data[d[0].c]);\n      }).transition(t).attr('d', line);\n      var raisedY = 1;\n      svg.appendSelect('path.limit.max').datum([{\n        x: 0,\n        y: 0\n      }, {\n        x: 0.5,\n        y: raisedY / 4\n      }, {\n        x: 1,\n        y: raisedY\n      }, {\n        x: 1.5,\n        y: raisedY / 4\n      }, {\n        x: 2,\n        y: 0\n      }]).attr('stroke', function (d) {\n        return color(raisedY);\n      }).transition(t).attr('d', thresholdLine);\n      svg.appendSelect('line.top-countries').attr('x1', x(1.28)).attr('x2', x(2)).attr('y1', y(0.70)).attr('y2', y(0.70)).attr('stroke', function (d) {\n        return color(raisedY);\n      });\n      var countriesAboveThreshold = Object.keys(data).filter(function (c) {\n        return data[c] > lodash_last__WEBPACK_IMPORTED_MODULE_11___default()(props.thresholdDomain);\n      }).length;\n      _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.right').style('bottom', \"\".concat(height - y(0.70), \"px\")).style('right', '0px').style('width', \"\".concat(x(0.7), \"px\")).html(mustache__WEBPACK_IMPORTED_MODULE_12___default.a.render(props.thresholdText, {\n        number: \"<span>\".concat(countriesAboveThreshold, \"</span>\")\n      })).select('span').style('color', lodash_last__WEBPACK_IMPORTED_MODULE_11___default()(props.thresholdRange.color));\n      var highlightLab = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.left').style('top', '0px').style('left', '0px').style('width', \"\".concat(x(0.7), \"px\")).html('');\n      var mouseRect = svg.appendSelect('rect').attr('width', width).attr('height', height).attr('x', 0).attr('y', 0).style('fill', 'transparent');\n\n      var highlightCountry = function highlightCountry(yCoord) {\n        var dataCoord = y.invert(yCoord);\n        var dataPoint = linesData.find(function (d) {\n          return d[2].y > dataCoord;\n        });\n        if (!dataPoint) dataPoint = lodash_last__WEBPACK_IMPORTED_MODULE_11___default()(linesData);\n        var dataPoints = Object.keys(data).filter(function (c) {\n          return +data[c] === dataPoint[2].y;\n        });\n        var isoAlpha2 = dataPoints[lodash_random__WEBPACK_IMPORTED_MODULE_13___default()(0, dataPoints.length - 1)];\n        var country = atlas.getCountry(isoAlpha2);\n        highlightLab.appendSelect('div.country-name').text(country.translations[props.locale]);\n        highlightLab.appendSelect('div.country-data').html(mustache__WEBPACK_IMPORTED_MODULE_12___default.a.render(props.peakText, {\n          percent: \"<span>\".concat(Math.round(data[isoAlpha2] * 100), \"%</span>\")\n        })).select('span').style('color', color(data[isoAlpha2]));\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return d[0].c === isoAlpha2 ? 1 : 0;\n        });\n      };\n\n      var removeHighlight = function removeHighlight() {\n        highlightLab.html('');\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return opacity(data[d[0].c]);\n        });\n      };\n\n      mouseRect.on('mouseenter.wave mousemove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_14___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n        var coordinates = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].mouse(svg.node());\n        highlightCountry(coordinates[1]);\n      }, 50));\n      mouseRect.on('touchstart.wave touchmove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_14___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n\n        var _d3$touches = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].touches(svg.node()),\n            _d3$touches2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_d3$touches, 1),\n            coordinates = _d3$touches2[0];\n\n        highlightCountry(coordinates[1]);\n      }, 50), true);\n      mouseRect.on('mouseleave.wave', removeHighlight);\n      mouseRect.on('touchend.wave touchcancel.wave', removeHighlight);\n      return this;\n    }\n  }]);\n\n  return CovidWave;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidWave);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiYXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiQ292aWRXYXZlIiwibG9jYWxlIiwiaGVpZ2h0IiwidGhyZXNob2xkRG9tYWluIiwidGhyZXNob2xkUmFuZ2UiLCJjb2xvciIsIm9wYWNpdHkiLCJ0aHJlc2hvbGRUZXh0IiwicGVha1RleHQiLCJkYXRhIiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibGluZXNEYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImMiLCJsaW5lRGF0YSIsIngiLCJ5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJzY2FsZVRocmVzaG9sZCIsImxpbmUiLCJjdXJ2ZSIsImN1cnZlTW9ub3RvbmVYIiwiZCIsInRocmVzaG9sZExpbmUiLCJzZWxlY3RBbGwiLCJqb2luIiwic3R5bGUiLCJyYWlzZWRZIiwiZGF0dW0iLCJjb3VudHJpZXNBYm92ZVRocmVzaG9sZCIsImZpbHRlciIsImxhc3QiLCJsZW5ndGgiLCJodG1sIiwibXVzdGFjaGUiLCJyZW5kZXIiLCJudW1iZXIiLCJoaWdobGlnaHRMYWIiLCJtb3VzZVJlY3QiLCJoaWdobGlnaHRDb3VudHJ5IiwieUNvb3JkIiwiZGF0YUNvb3JkIiwiaW52ZXJ0IiwiZGF0YVBvaW50IiwiZmluZCIsImRhdGFQb2ludHMiLCJpc29BbHBoYTIiLCJyYW5kb20iLCJjb3VudHJ5IiwiZ2V0Q291bnRyeSIsInRleHQiLCJ0cmFuc2xhdGlvbnMiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlSGlnaGxpZ2h0Iiwib24iLCJ0aHJvdHRsZSIsImV2ZW50Iiwi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ZUFBUyxDQUFDa0IsRUFBVixDQUFhLGlCQUFiLEVBQWdDRCxlQUFoQztBQUNBakIsZUFBUyxDQUFDa0IsRUFBVixDQUFhLGdDQUFiLEVBQStDRCxlQUEvQztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBbExxQk8sNEQ7O0FBcUxUbEYsd0VBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IGxhc3QgZnJvbSAnbG9kYXNoL2xhc3QnO1xuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbmltcG9ydCByYW5kb20gZnJvbSAnbG9kYXNoL3JhbmRvbSc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuY29uc3QgYXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBDb3ZpZFdhdmUgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgaGVpZ2h0OiAyMDAsXG4gICAgdGhyZXNob2xkRG9tYWluOiBbMC41LCAwLjc1XSxcbiAgICB0aHJlc2hvbGRSYW5nZToge1xuICAgICAgY29sb3I6IFsnI2NjYycsICcjZjY4ZTI2JywgJyNkZTJkMjYnXSxcbiAgICAgIG9wYWNpdHk6IFswLjEsIDAuMiwgMC40XSxcbiAgICB9LFxuICAgIHRocmVzaG9sZFRleHQ6ICd7eyAmbnVtYmVyIH19IGNvdW50cmllcyBhcmUgc3RpbGwgYXQgdGhlIHBlYWsgb2YgdGhlaXIgaW5mZWN0aW9uIGN1cnZlLicsXG4gICAgcGVha1RleHQ6ICd7eyAmcGVyY2VudCB9fSBvZiBwZWFrJyxcbiAgfTtcblxuICBkZWZhdWx0RGF0YSA9IHt9O1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcblxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHByb3BzO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KG5vZGUpLmFwcGVuZFNlbGVjdCgnc3ZnJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgIC5hcHBlbmRTZWxlY3QoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMTApJyk7XG5cbiAgICBjb25zdCB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDI1MCk7XG5cbiAgICBjb25zdCBsaW5lc0RhdGEgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGMpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVEYXRhID0gW3sgeDogMCwgeTogMCwgYyB9XTtcbiAgICAgIGxpbmVEYXRhLnB1c2goe1xuICAgICAgICB4OiAwLjUsXG4gICAgICAgIHk6ICtkYXRhW2NdIC8gNCxcbiAgICAgICAgYyxcbiAgICAgIH0pO1xuICAgICAgbGluZURhdGEucHVzaCh7XG4gICAgICAgIHg6IDEsXG4gICAgICAgIHk6ICtkYXRhW2NdLFxuICAgICAgICBjLFxuICAgICAgfSk7XG4gICAgICBsaW5lRGF0YS5wdXNoKHtcbiAgICAgICAgeDogMS41LFxuICAgICAgICB5OiArZGF0YVtjXSAvIDQsXG4gICAgICAgIGMsXG4gICAgICB9KTtcbiAgICAgIGxpbmVEYXRhLnB1c2goeyB4OiAyLCB5OiAwLCBjIH0pO1xuICAgICAgcmV0dXJuIGxpbmVEYXRhO1xuICAgIH0pO1xuXG4gICAgLy8gc29ydCBsZWFzdCB0byBtb3N0IGZvciBtb3VzZSBoYW5kbGVyXG4gICAgbGluZXNEYXRhLnNvcnQoKGEsIGIpID0+IGFbMl0ueSAtIGJbMl0ueSk7XG5cbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMl0pXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMV0pXG4gICAgICAucmFuZ2UoW2hlaWdodCAtIDIwLCAwXSk7XG5cbiAgICBjb25zdCBjb2xvciA9IGQzLnNjYWxlVGhyZXNob2xkKClcbiAgICAgIC5kb21haW4ocHJvcHMudGhyZXNob2xkRG9tYWluKVxuICAgICAgLnJhbmdlKHByb3BzLnRocmVzaG9sZFJhbmdlLmNvbG9yKTtcblxuICAgIGNvbnN0IG9wYWNpdHkgPSBkMy5zY2FsZVRocmVzaG9sZCgpXG4gICAgICAuZG9tYWluKHByb3BzLnRocmVzaG9sZERvbWFpbilcbiAgICAgIC5yYW5nZShwcm9wcy50aHJlc2hvbGRSYW5nZS5vcGFjaXR5KTtcblxuICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWClcbiAgICAgIC54KGQgPT4geChkLngpKVxuICAgICAgLnkoZCA9PiB5KGQueSkpO1xuICAgIGNvbnN0IHRocmVzaG9sZExpbmUgPSBkMy5saW5lKClcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZU1vbm90b25lWClcbiAgICAgIC54KGQgPT4geChkLngpKVxuICAgICAgLnkoZCA9PiB5KGQueSkgLSA0KTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoJ3BhdGguY291bnRyaWVzJylcbiAgICAgIC5kYXRhKGxpbmVzRGF0YSlcbiAgICAgIC5qb2luKCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGNvdW50cmllcyBpc28tJHtkWzBdLmN9YClcbiAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGQgPT4gb3BhY2l0eShkYXRhW2RbMF0uY10pKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGQgPT4gY29sb3IoZGF0YVtkWzBdLmNdKSlcbiAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAuYXR0cignZCcsIGxpbmUpO1xuXG4gICAgY29uc3QgcmFpc2VkWSA9IDE7XG5cbiAgICBzdmcuYXBwZW5kU2VsZWN0KCdwYXRoLmxpbWl0Lm1heCcpXG4gICAgICAuZGF0dW0oW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLjUsIHk6IHJhaXNlZFkgLyA0IH0sXG4gICAgICAgIHsgeDogMSwgeTogcmFpc2VkWSB9LFxuICAgICAgICB7IHg6IDEuNSwgeTogcmFpc2VkWSAvIDQgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICBdKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGQgPT4gY29sb3IocmFpc2VkWSkpXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoJ2QnLCB0aHJlc2hvbGRMaW5lKTtcblxuICAgIHN2Zy5hcHBlbmRTZWxlY3QoJ2xpbmUudG9wLWNvdW50cmllcycpXG4gICAgICAuYXR0cigneDEnLCB4KDEuMjgpKVxuICAgICAgLmF0dHIoJ3gyJywgeCgyKSlcbiAgICAgIC5hdHRyKCd5MScsIHkoMC43MCkpXG4gICAgICAuYXR0cigneTInLCB5KDAuNzApKVxuICAgICAgLmF0dHIoJ3N0cm9rZScsIGQgPT4gY29sb3IocmFpc2VkWSkpO1xuXG4gICAgY29uc3QgY291bnRyaWVzQWJvdmVUaHJlc2hvbGQgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoYyA9PiBkYXRhW2NdID4gbGFzdChwcm9wcy50aHJlc2hvbGREb21haW4pKS5sZW5ndGg7XG5cbiAgICBkMy5zZWxlY3Qobm9kZSkuYXBwZW5kU2VsZWN0KCdkaXYubGFiZWwucmlnaHQnKVxuICAgICAgLnN0eWxlKCdib3R0b20nLCBgJHtoZWlnaHQgLSB5KDAuNzApfXB4YClcbiAgICAgIC5zdHlsZSgncmlnaHQnLCAnMHB4JylcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHt4KDAuNyl9cHhgKVxuICAgICAgLmh0bWwobXVzdGFjaGUucmVuZGVyKHByb3BzLnRocmVzaG9sZFRleHQsIHtcbiAgICAgICAgbnVtYmVyOiBgPHNwYW4+JHtjb3VudHJpZXNBYm92ZVRocmVzaG9sZH08L3NwYW4+YCxcbiAgICAgIH0pKVxuICAgICAgLnNlbGVjdCgnc3BhbicpXG4gICAgICAuc3R5bGUoJ2NvbG9yJywgbGFzdChwcm9wcy50aHJlc2hvbGRSYW5nZS5jb2xvcikpO1xuXG4gICAgY29uc3QgaGlnaGxpZ2h0TGFiID0gZDMuc2VsZWN0KG5vZGUpLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLmxlZnQnKVxuICAgICAgLnN0eWxlKCd0b3AnLCAnMHB4JylcbiAgICAgIC5zdHlsZSgnbGVmdCcsICcwcHgnKVxuICAgICAgLnN0eWxlKCd3aWR0aCcsIGAke3goMC43KX1weGApXG4gICAgICAuaHRtbCgnJyk7XG5cbiAgICBjb25zdCBtb3VzZVJlY3QgPSBzdmcuYXBwZW5kU2VsZWN0KCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgIC5hdHRyKCd5JywgMClcbiAgICAgIC5zdHlsZSgnZmlsbCcsICd0cmFuc3BhcmVudCcpO1xuXG4gICAgY29uc3QgaGlnaGxpZ2h0Q291bnRyeSA9ICh5Q29vcmQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFDb29yZCA9IHkuaW52ZXJ0KHlDb29yZCk7XG4gICAgICBsZXQgZGF0YVBvaW50ID0gbGluZXNEYXRhLmZpbmQoZCA9PiBkWzJdLnkgPiBkYXRhQ29vcmQpO1xuICAgICAgaWYgKCFkYXRhUG9pbnQpIGRhdGFQb2ludCA9IGxhc3QobGluZXNEYXRhKTtcbiAgICAgIGNvbnN0IGRhdGFQb2ludHMgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoYyA9PiArZGF0YVtjXSA9PT0gZGF0YVBvaW50WzJdLnkpO1xuICAgICAgY29uc3QgaXNvQWxwaGEyID0gZGF0YVBvaW50c1tyYW5kb20oMCwgZGF0YVBvaW50cy5sZW5ndGggLSAxKV07XG4gICAgICBjb25zdCBjb3VudHJ5ID0gYXRsYXMuZ2V0Q291bnRyeShpc29BbHBoYTIpO1xuICAgICAgaGlnaGxpZ2h0TGFiXG4gICAgICAgIC5hcHBlbmRTZWxlY3QoJ2Rpdi5jb3VudHJ5LW5hbWUnKVxuICAgICAgICAudGV4dChjb3VudHJ5LnRyYW5zbGF0aW9uc1twcm9wcy5sb2NhbGVdKTtcbiAgICAgIGhpZ2hsaWdodExhYlxuICAgICAgICAuYXBwZW5kU2VsZWN0KCdkaXYuY291bnRyeS1kYXRhJylcbiAgICAgICAgLmh0bWwobXVzdGFjaGUucmVuZGVyKHByb3BzLnBlYWtUZXh0LCB7XG4gICAgICAgICAgcGVyY2VudDogYDxzcGFuPiR7TWF0aC5yb3VuZChkYXRhW2lzb0FscGhhMl0gKiAxMDApfSU8L3NwYW4+YCxcbiAgICAgICAgfSkpXG4gICAgICAgIC5zZWxlY3QoJ3NwYW4nKVxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgY29sb3IoZGF0YVtpc29BbHBoYTJdKSk7XG4gICAgICBzdmcuc2VsZWN0QWxsKCdwYXRoLmNvdW50cmllcycpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGQgPT4gZFswXS5jID09PSBpc29BbHBoYTIgPyAxIDogMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUhpZ2hsaWdodCA9ICgpID0+IHtcbiAgICAgIGhpZ2hsaWdodExhYi5odG1sKCcnKTtcbiAgICAgIHN2Zy5zZWxlY3RBbGwoJ3BhdGguY291bnRyaWVzJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgZCA9PiBvcGFjaXR5KGRhdGFbZFswXS5jXSkpO1xuICAgIH07XG5cbiAgICBtb3VzZVJlY3Qub24oJ21vdXNlZW50ZXIud2F2ZSBtb3VzZW1vdmUud2F2ZScsIHRocm90dGxlKCgpID0+IHtcbiAgICAgIGlmICghZDMuZXZlbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZDMubW91c2Uoc3ZnLm5vZGUoKSk7XG4gICAgICBoaWdobGlnaHRDb3VudHJ5KGNvb3JkaW5hdGVzWzFdKTtcbiAgICB9LCA1MCkpO1xuXG4gICAgbW91c2VSZWN0Lm9uKCd0b3VjaHN0YXJ0LndhdmUgdG91Y2htb3ZlLndhdmUnLCB0aHJvdHRsZSgoKSA9PiB7XG4gICAgICBpZiAoIWQzLmV2ZW50KSByZXR1cm47XG4gICAgICBjb25zdCBbY29vcmRpbmF0ZXNdID0gZDMudG91Y2hlcyhzdmcubm9kZSgpKTtcbiAgICAgIGhpZ2hsaWdodENvdW50cnkoY29vcmRpbmF0ZXNbMV0pO1xuICAgIH0sIDUwKSwgdHJ1ZSk7XG5cbiAgICBtb3VzZVJlY3Qub24oJ21vdXNlbGVhdmUud2F2ZScsIHJlbW92ZUhpZ2hsaWdodCk7XG4gICAgbW91c2VSZWN0Lm9uKCd0b3VjaGVuZC53YXZlIHRvdWNoY2FuY2VsLndhdmUnLCByZW1vdmVIaWdobGlnaHQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ292aWRXYXZlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ }),

/***/ "./src/lib/defaultData.json":
false

})