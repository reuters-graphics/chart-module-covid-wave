webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _defaultData_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaultData.json */ \"./src/lib/defaultData.json\");\nvar _defaultData_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultData.json */ \"./src/lib/defaultData.json\", 1);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/random */ \"./node_modules/lodash/random.js\");\n/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar CovidWave = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CovidWave, _ChartComponent);\n\n  var _super = _createSuper(CovidWave);\n\n  function CovidWave() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CovidWave);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultProps\", {\n      height: 200,\n      thresholdDomain: [0.5, 0.75],\n      thresholdRange: {\n        color: ['#ccc', '#f68e26', '#de2d26'],\n        opacity: [0.1, 0.2, 0.4]\n      },\n      thresholdText: '<span>{{ number }}</span> countries are still at the peak of their infection curve.',\n      locale: 'en',\n      peakText: '{{ percent }}% of peak'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"defaultData\", _defaultData_json__WEBPACK_IMPORTED_MODULE_11__);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CovidWave, [{\n    key: \"draw\",\n    value: function draw() {\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var height = props.height;\n      var svg = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('svg').attr('width', width).attr('height', height).appendSelect('g').attr('transform', 'translate(0, 10)');\n      var t = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].transition().duration(250);\n      var linesData = Object.keys(data).map(function (c) {\n        var lineData = [{\n          x: 0,\n          y: 0,\n          c: c\n        }];\n        lineData.push({\n          x: 0.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 1,\n          y: +data[c],\n          c: c\n        });\n        lineData.push({\n          x: 1.5,\n          y: +data[c] / 4,\n          c: c\n        });\n        lineData.push({\n          x: 2,\n          y: 0,\n          c: c\n        });\n        return lineData;\n      }); // sort least to most for mouse handler\n\n      linesData.sort(function (a, b) {\n        return a[2].y - b[2].y;\n      });\n      var x = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 2]).range([0, width]);\n      var y = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleLinear().domain([0, 1]).range([height - 20, 0]);\n      var color = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.color);\n      var opacity = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.opacity);\n      var line = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y);\n      });\n      var thresholdLine = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].line().curve(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].curveMonotoneX).x(function (d) {\n        return x(d.x);\n      }).y(function (d) {\n        return y(d.y) - 4;\n      });\n      svg.selectAll('path.countries').data(linesData).join('path').attr('class', function (d) {\n        return \"countries iso-\".concat(d[0].c);\n      }).style('opacity', function (d) {\n        return opacity(data[d[0].c]);\n      }).attr('stroke', function (d) {\n        return color(data[d[0].c]);\n      }).transition(t).attr('d', line);\n      var raisedY = 1;\n      svg.appendSelect('path.limit.max').datum([{\n        x: 0,\n        y: 0\n      }, {\n        x: 0.5,\n        y: raisedY / 4\n      }, {\n        x: 1,\n        y: raisedY\n      }, {\n        x: 1.5,\n        y: raisedY / 4\n      }, {\n        x: 2,\n        y: 0\n      }]).attr('stroke', function (d) {\n        return color(raisedY);\n      }).transition(t).attr('d', thresholdLine);\n      svg.appendSelect('line.top-countries').attr('x1', x(1.28)).attr('x2', x(2)).attr('y1', y(0.70)).attr('y2', y(0.70)).attr('stroke', function (d) {\n        return color(raisedY);\n      });\n      _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.right').style('bottom', \"\".concat(height - y(0.70), \"px\")).style('right', '0px').style('width', \"\".concat(x(0.7), \"px\")).html(mustache__WEBPACK_IMPORTED_MODULE_13___default.a.render(props.thresholdText, {\n        number: 33\n      }));\n      var highlightLab = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].select(node).appendSelect('div.label.left').style('bottom', \"\".concat(height - y(0.70), \"px\")).style('left', '0px').style('width', \"\".concat(x(0.7), \"px\")).html('');\n      var mouseRect = svg.appendSelect('rect').attr('width', width).attr('height', height).attr('x', 0).attr('y', 0).style('fill', 'transparent');\n\n      var highlightCountry = function highlightCountry(yCoord) {\n        var dataCoord = y.invert(yCoord);\n        var dataPoint = linesData.find(function (d) {\n          return d[2].y > dataCoord;\n        });\n        if (!dataPoint) dataPoint = lodash_last__WEBPACK_IMPORTED_MODULE_12___default()(linesData);\n        var dataPoints = Object.keys(data).filter(function (c) {\n          return +data[c] === dataPoint[2].y;\n        });\n        var isoAlpha2 = dataPoints[lodash_random__WEBPACK_IMPORTED_MODULE_14___default()(0, dataPoints.length - 1)];\n        var country = atlas.getCountry(isoAlpha2);\n        highlightLab.appendSelect('div.country-name').text(country.translations[props.locale]);\n        highlightLab.appendSelect('div.country-data').html(mustache__WEBPACK_IMPORTED_MODULE_13___default.a.render(props.peakText, {\n          percent: Math.round(data[isoAlpha2] * 100)\n        }));\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return d[0].c === isoAlpha2 ? 1 : 0;\n        });\n      };\n\n      var removeHighlight = function removeHighlight() {\n        highlightLab.html('');\n        svg.selectAll('path.countries').style('opacity', function (d) {\n          return opacity(data[d[0].c]);\n        });\n      };\n\n      mouseRect.on('mouseenter.wave mousemove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_15___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n        var coordinates = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].mouse(svg.node());\n        highlightCountry(coordinates[1]);\n      }, 50));\n      mouseRect.on('touchstart.wave touchmove.wave', lodash_throttle__WEBPACK_IMPORTED_MODULE_15___default()(function () {\n        if (!_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].event) return;\n\n        var _d3$touches = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].touches(svg.node()),\n            _d3$touches2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_d3$touches, 1),\n            coordinates = _d3$touches2[0];\n\n        highlightCountry(coordinates[1]);\n      }, 50), true);\n      mouseRect.on('mouseleave.wave', removeHighlight);\n      mouseRect.on('touchend.wave touchcancel.wave', removeHighlight);\n      return this;\n    }\n  }]);\n\n  return CovidWave;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CovidWave);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiYXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiQ292aWRXYXZlIiwiaGVpZ2h0IiwidGhyZXNob2xkRG9tYWluIiwidGhyZXNob2xkUmFuZ2UiLCJjb2xvciIsIm9wYWNpdHkiLCJ0aHJlc2hvbGRUZXh0IiwibG9jYWxlIiwicGVha1RleHQiLCJkZWZhdWx0RGF0YSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsInQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJsaW5lc0RhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiYyIsImxpbmVEYXRhIiwieCIsInkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInNjYWxlVGhyZXNob2xkIiwibGluZSIsImN1cnZlIiwiY3VydmVNb25vdG9uZVgiLCJkIiwidGhyZXNob2xkTGluZSIsInNlbGVjdEFsbCIsImpvaW4iLCJzdHlsZSIsInJhaXNlZFkiLCJkYXR1bSIsImh0bWwiLCJtdXN0YWNoZSIsInJlbmRlciIsIm51bWJlciIsImhpZ2hsaWdodExhYiIsIm1vdXNlUmVjdCIsImhpZ2hsaWdodENvdW50cnkiLCJ5Q29vcmQiLCJkYXRhQ29vcmQiLCJpbnZlcnQiLCJkYXRhUG9pbnQiLCJmaW5kIiwibGFzdCIsImRhdGFQb2ludHMiLCJmaWx0ZXIiLCJpc29BbHBoYTIiLCJyYW5kb20iLCJsZW5ndGgiLCJjb3VudHJ5IiwiZ2V0Q291bnRyeSIsInRleHQiLCJ0cmFuc2xhdGlvbnMiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlSGlnaGxpZ2h0Iiwib24iLCJ0aHJvdHRsZSIsImV2ZW50IiwiY29vcmRpbmF0ZXMi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QTJCLGVBQVMsQ0FBQ3FCLEVBQVYsQ0FBYSxnQ0FBYixFQUErQ0MsdURBQVEsQ0FBQyxZQUFNO0FBQzVELFlBQUksQ0FBQzVELGtEQUFFLENBQUM2RCxLQUFSLEVBQWU7QUFDZixZQUFNQyxXQUFXLEdBQUc5RCxrREFBRSxDQUFDK0QsS0FBSCxDQUFTaEUsR0FBRyxDQUFDSixJQUFKLEVBQVQsQ0FBcEI7QUFDQTRDLHdCQUFnQixDQUFDdUIsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFoQjtBQUNELE9BSnNELEVBSXBELEVBSm9ELENBQXZEO0FBTUF4QixlQUFTLENBQUNxQixFQUFWLENBQWEsZ0NBQWIsRUFBK0NDLHVEQUFRLENBQUMsWUFBTTtBQUM1RCxZQUFJLENBQUM1RCxrREFBRSxDQUFDNkQsS0FBUixFQUFlOztBQUQ2QywwQkFFdEM3RCxrREFBRSxDQUFDZ0UsT0FBSCxDQUFXakUsR0FBRyxDQUFDSixJQUFKLEVBQVgsQ0FGc0M7QUFBQTtBQUFBLFlBRXJEbUUsV0FGcUQ7O0FBRzVEdkIsd0JBQWdCLENBQUN1QixXQUFXLENBQUMsQ0FBRCxDQUFaLENBQWhCO0FBQ0QsT0FKc0QsRUFJcEQsRUFKb0QsQ0FBdkQsRUFJUSxJQUpSO0FBTUF4QixlQUFTLENBQUNxQixFQUFWLENBQWEsaUJBQWIsRUFBZ0NELGVBQWhDO0FBQ0FwQixlQUFTLENBQUNxQixFQUFWLENBQWEsZ0NBQWIsRUFBK0NELGVBQS9DO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUExS3FCTyw0RDs7QUE2S1RsRix3RUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgZGVmYXVsdERhdGEgZnJvbSAnLi9kZWZhdWx0RGF0YS5qc29uJztcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0JztcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJ2xvZGFzaC9yYW5kb20nO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5cbmNvbnN0IGF0bGFzID0gbmV3IEF0bGFzTWV0YWRhdGFDbGllbnQoKTtcblxuY2xhc3MgQ292aWRXYXZlIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAyMDAsXG4gICAgdGhyZXNob2xkRG9tYWluOiBbMC41LCAwLjc1XSxcbiAgICB0aHJlc2hvbGRSYW5nZToge1xuICAgICAgY29sb3I6IFsnI2NjYycsICcjZjY4ZTI2JywgJyNkZTJkMjYnXSxcbiAgICAgIG9wYWNpdHk6IFswLjEsIDAuMiwgMC40XSxcbiAgICB9LFxuICAgIHRocmVzaG9sZFRleHQ6ICc8c3Bhbj57eyBudW1iZXIgfX08L3NwYW4+IGNvdW50cmllcyBhcmUgc3RpbGwgYXQgdGhlIHBlYWsgb2YgdGhlaXIgaW5mZWN0aW9uIGN1cnZlLicsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIHBlYWtUZXh0OiAne3sgcGVyY2VudCB9fSUgb2YgcGVhaycsXG4gIH07XG5cbiAgZGVmYXVsdERhdGEgPSBkZWZhdWx0RGF0YTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG5cbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBwcm9wcztcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChub2RlKS5hcHBlbmRTZWxlY3QoJ3N2ZycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDEwKScpO1xuXG4gICAgY29uc3QgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTApO1xuXG4gICAgY29uc3QgbGluZXNEYXRhID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKChjKSA9PiB7XG4gICAgICBjb25zdCBsaW5lRGF0YSA9IFt7IHg6IDAsIHk6IDAsIGMgfV07XG4gICAgICBsaW5lRGF0YS5wdXNoKHtcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiArZGF0YVtjXSAvIDQsXG4gICAgICAgIGMsXG4gICAgICB9KTtcbiAgICAgIGxpbmVEYXRhLnB1c2goe1xuICAgICAgICB4OiAxLFxuICAgICAgICB5OiArZGF0YVtjXSxcbiAgICAgICAgYyxcbiAgICAgIH0pO1xuICAgICAgbGluZURhdGEucHVzaCh7XG4gICAgICAgIHg6IDEuNSxcbiAgICAgICAgeTogK2RhdGFbY10gLyA0LFxuICAgICAgICBjLFxuICAgICAgfSk7XG4gICAgICBsaW5lRGF0YS5wdXNoKHsgeDogMiwgeTogMCwgYyB9KTtcbiAgICAgIHJldHVybiBsaW5lRGF0YTtcbiAgICB9KTtcblxuICAgIC8vIHNvcnQgbGVhc3QgdG8gbW9zdCBmb3IgbW91c2UgaGFuZGxlclxuICAgIGxpbmVzRGF0YS5zb3J0KChhLCBiKSA9PiBhWzJdLnkgLSBiWzJdLnkpO1xuXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDJdKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDFdKVxuICAgICAgLnJhbmdlKFtoZWlnaHQgLSAyMCwgMF0pO1xuXG4gICAgY29uc3QgY29sb3IgPSBkMy5zY2FsZVRocmVzaG9sZCgpXG4gICAgICAuZG9tYWluKHByb3BzLnRocmVzaG9sZERvbWFpbilcbiAgICAgIC5yYW5nZShwcm9wcy50aHJlc2hvbGRSYW5nZS5jb2xvcik7XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gZDMuc2NhbGVUaHJlc2hvbGQoKVxuICAgICAgLmRvbWFpbihwcm9wcy50aHJlc2hvbGREb21haW4pXG4gICAgICAucmFuZ2UocHJvcHMudGhyZXNob2xkUmFuZ2Uub3BhY2l0eSk7XG5cbiAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpXG4gICAgICAueChkID0+IHgoZC54KSlcbiAgICAgIC55KGQgPT4geShkLnkpKTtcbiAgICBjb25zdCB0aHJlc2hvbGRMaW5lID0gZDMubGluZSgpXG4gICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpXG4gICAgICAueChkID0+IHgoZC54KSlcbiAgICAgIC55KGQgPT4geShkLnkpIC0gNCk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKCdwYXRoLmNvdW50cmllcycpXG4gICAgICAuZGF0YShsaW5lc0RhdGEpXG4gICAgICAuam9pbigncGF0aCcpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBjb3VudHJpZXMgaXNvLSR7ZFswXS5jfWApXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCBkID0+IG9wYWNpdHkoZGF0YVtkWzBdLmNdKSlcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGNvbG9yKGRhdGFbZFswXS5jXSkpXG4gICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgLmF0dHIoJ2QnLCBsaW5lKTtcblxuICAgIGNvbnN0IHJhaXNlZFkgPSAxO1xuXG4gICAgc3ZnLmFwcGVuZFNlbGVjdCgncGF0aC5saW1pdC5tYXgnKVxuICAgICAgLmRhdHVtKFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMC41LCB5OiByYWlzZWRZIC8gNCB9LFxuICAgICAgICB7IHg6IDEsIHk6IHJhaXNlZFkgfSxcbiAgICAgICAgeyB4OiAxLjUsIHk6IHJhaXNlZFkgLyA0IH0sXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgXSlcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGNvbG9yKHJhaXNlZFkpKVxuICAgICAgLnRyYW5zaXRpb24odClcbiAgICAgIC5hdHRyKCdkJywgdGhyZXNob2xkTGluZSk7XG5cbiAgICBzdmcuYXBwZW5kU2VsZWN0KCdsaW5lLnRvcC1jb3VudHJpZXMnKVxuICAgICAgLmF0dHIoJ3gxJywgeCgxLjI4KSlcbiAgICAgIC5hdHRyKCd4MicsIHgoMikpXG4gICAgICAuYXR0cigneTEnLCB5KDAuNzApKVxuICAgICAgLmF0dHIoJ3kyJywgeSgwLjcwKSlcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBkID0+IGNvbG9yKHJhaXNlZFkpKTtcblxuICAgIGQzLnNlbGVjdChub2RlKS5hcHBlbmRTZWxlY3QoJ2Rpdi5sYWJlbC5yaWdodCcpXG4gICAgICAuc3R5bGUoJ2JvdHRvbScsIGAke2hlaWdodCAtIHkoMC43MCl9cHhgKVxuICAgICAgLnN0eWxlKCdyaWdodCcsICcwcHgnKVxuICAgICAgLnN0eWxlKCd3aWR0aCcsIGAke3goMC43KX1weGApXG4gICAgICAuaHRtbChtdXN0YWNoZS5yZW5kZXIocHJvcHMudGhyZXNob2xkVGV4dCwgeyBudW1iZXI6IDMzIH0pKTtcblxuICAgIGNvbnN0IGhpZ2hsaWdodExhYiA9IGQzLnNlbGVjdChub2RlKS5hcHBlbmRTZWxlY3QoJ2Rpdi5sYWJlbC5sZWZ0JylcbiAgICAgIC5zdHlsZSgnYm90dG9tJywgYCR7aGVpZ2h0IC0geSgwLjcwKX1weGApXG4gICAgICAuc3R5bGUoJ2xlZnQnLCAnMHB4JylcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHt4KDAuNyl9cHhgKVxuICAgICAgLmh0bWwoJycpO1xuXG4gICAgY29uc3QgbW91c2VSZWN0ID0gc3ZnLmFwcGVuZFNlbGVjdCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAuYXR0cigneCcsIDApXG4gICAgICAuYXR0cigneScsIDApXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKTtcblxuICAgIGNvbnN0IGhpZ2hsaWdodENvdW50cnkgPSAoeUNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBkYXRhQ29vcmQgPSB5LmludmVydCh5Q29vcmQpO1xuICAgICAgbGV0IGRhdGFQb2ludCA9IGxpbmVzRGF0YS5maW5kKGQgPT4gZFsyXS55ID4gZGF0YUNvb3JkKTtcbiAgICAgIGlmICghZGF0YVBvaW50KSBkYXRhUG9pbnQgPSBsYXN0KGxpbmVzRGF0YSk7XG4gICAgICBjb25zdCBkYXRhUG9pbnRzID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGMgPT4gK2RhdGFbY10gPT09IGRhdGFQb2ludFsyXS55KTtcbiAgICAgIGNvbnN0IGlzb0FscGhhMiA9IGRhdGFQb2ludHNbcmFuZG9tKDAsIGRhdGFQb2ludHMubGVuZ3RoIC0gMSldO1xuICAgICAgY29uc3QgY291bnRyeSA9IGF0bGFzLmdldENvdW50cnkoaXNvQWxwaGEyKTtcbiAgICAgIGhpZ2hsaWdodExhYlxuICAgICAgICAuYXBwZW5kU2VsZWN0KCdkaXYuY291bnRyeS1uYW1lJylcbiAgICAgICAgLnRleHQoY291bnRyeS50cmFuc2xhdGlvbnNbcHJvcHMubG9jYWxlXSk7XG4gICAgICBoaWdobGlnaHRMYWJcbiAgICAgICAgLmFwcGVuZFNlbGVjdCgnZGl2LmNvdW50cnktZGF0YScpXG4gICAgICAgIC5odG1sKG11c3RhY2hlLnJlbmRlcihwcm9wcy5wZWFrVGV4dCwge1xuICAgICAgICAgIHBlcmNlbnQ6IE1hdGgucm91bmQoZGF0YVtpc29BbHBoYTJdICogMTAwKSxcbiAgICAgICAgfSkpO1xuICAgICAgc3ZnLnNlbGVjdEFsbCgncGF0aC5jb3VudHJpZXMnKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBkID0+IGRbMF0uYyA9PT0gaXNvQWxwaGEyID8gMSA6IDApO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVIaWdobGlnaHQgPSAoKSA9PiB7XG4gICAgICBoaWdobGlnaHRMYWIuaHRtbCgnJyk7XG4gICAgICBzdmcuc2VsZWN0QWxsKCdwYXRoLmNvdW50cmllcycpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGQgPT4gb3BhY2l0eShkYXRhW2RbMF0uY10pKTtcbiAgICB9O1xuXG4gICAgbW91c2VSZWN0Lm9uKCdtb3VzZWVudGVyLndhdmUgbW91c2Vtb3ZlLndhdmUnLCB0aHJvdHRsZSgoKSA9PiB7XG4gICAgICBpZiAoIWQzLmV2ZW50KSByZXR1cm47XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGQzLm1vdXNlKHN2Zy5ub2RlKCkpO1xuICAgICAgaGlnaGxpZ2h0Q291bnRyeShjb29yZGluYXRlc1sxXSk7XG4gICAgfSwgNTApKTtcblxuICAgIG1vdXNlUmVjdC5vbigndG91Y2hzdGFydC53YXZlIHRvdWNobW92ZS53YXZlJywgdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgaWYgKCFkMy5ldmVudCkgcmV0dXJuO1xuICAgICAgY29uc3QgW2Nvb3JkaW5hdGVzXSA9IGQzLnRvdWNoZXMoc3ZnLm5vZGUoKSk7XG4gICAgICBoaWdobGlnaHRDb3VudHJ5KGNvb3JkaW5hdGVzWzFdKTtcbiAgICB9LCA1MCksIHRydWUpO1xuXG4gICAgbW91c2VSZWN0Lm9uKCdtb3VzZWxlYXZlLndhdmUnLCByZW1vdmVIaWdobGlnaHQpO1xuICAgIG1vdXNlUmVjdC5vbigndG91Y2hlbmQud2F2ZSB0b3VjaGNhbmNlbC53YXZlJywgcmVtb3ZlSGlnaGxpZ2h0KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdmlkV2F2ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})