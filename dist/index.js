'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var AtlasMetadataClient = _interopDefault(require('@reuters-graphics/graphics-atlas-client'));
var d3 = require('d3');
var merge = _interopDefault(require('lodash/merge'));
var last = _interopDefault(require('lodash/last'));
var mustache = _interopDefault(require('mustache'));
var random = _interopDefault(require('lodash/random'));
var throttle = _interopDefault(require('lodash/throttle'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ChartError = /*#__PURE__*/function (_Error) {
  _inherits(ChartError, _Error);

  var _super = _createSuper(ChartError);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _super.call(this, constructorName);
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined = /*#__PURE__*/function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  var _super2 = _createSuper(ErrorDrawMethodUndefined);

  function ErrorDrawMethodUndefined() {
    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType = /*#__PURE__*/function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  var _super3 = _createSuper(ErrorSelectorType);

  function ErrorSelectorType() {
    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorPropsType = /*#__PURE__*/function (_ChartError3) {
  _inherits(ErrorPropsType, _ChartError3);

  var _super4 = _createSuper(ErrorPropsType);

  function ErrorPropsType() {
    var _this4;

    _classCallCheck(this, ErrorPropsType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " props should be an Object"));

    return _this4;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorDataType = /*#__PURE__*/function (_ChartError4) {
  _inherits(ErrorDataType, _ChartError4);

  var _super5 = _createSuper(ErrorDataType);

  function ErrorDataType() {
    var _this5;

    _classCallCheck(this, ErrorDataType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " data should be an Array"));

    return _this5;
  }

  return ErrorDataType;
}(ChartError);

d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<query selector>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} querySelector  String representation of element to be
 *                                 appended/selected, e.g., div.myClass, svg,
 *                                 button.myClass.anotherClass.
 * @return {object}     d3 selection of child element
 */


d3.selection.prototype.appendSelect = function (querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error("Invalid query selector passed to appendSelect. Must be an element with zero or more classes: \"div.myClass.another\". Got \"".concat(querySelector, "\"."));
    }
  }

  var element = querySelector.split('.')[0];
  var classes = querySelector.split('.').slice(1);
  var selection = this.select(querySelector);
  if (!selection.empty()) return selection;
  selection = this.append(element);
  classes.forEach(function (cls) {
    return selection.classed(cls, true);
  });
  return selection;
};

var ChartComponent = /*#__PURE__*/function () {
  function ChartComponent(selector, props, data) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", {});

    this.selection(selector);
    this.props(props);
    this.data(data);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "data",

    /**
     * Getter/setter for chart data
     * @param  {Array} arr data
     */
    value: function data(obj) {
      if (!obj) return this._data || this.defaultData;

      if (!(obj instanceof Object)) {
        throw new ErrorDataType(this.constructor.name);
      }

      this._data = obj;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

var atlas = new AtlasMetadataClient();

var CovidWave = /*#__PURE__*/function (_ChartComponent) {
  _inherits(CovidWave, _ChartComponent);

  var _super = _createSuper(CovidWave);

  function CovidWave() {
    var _this;

    _classCallCheck(this, CovidWave);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      locale: 'en',
      height: 200,
      thresholdDomain: [0.5, 0.75],
      thresholdRange: {
        color: ['#ccc', '#f68e26', '#de2d26'],
        opacity: [0.1, 0.2, 0.4]
      },
      thresholdText: '{{ &number }} countries are still at the peak of their infection curve.',
      peakText: '{{ &percent }} of peak'
    });

    _defineProperty(_assertThisInitialized(_this), "defaultData", {});

    return _this;
  }

  _createClass(CovidWave, [{
    key: "draw",
    value: function draw() {
      var data = this.data();
      var props = this.props();
      var node = this.selection().node();

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var height = props.height;
      var svg = d3.select(node).appendSelect('svg').attr('width', width).attr('height', height).appendSelect('g').attr('transform', 'translate(0, 10)');
      var t = d3.transition().duration(250);
      var linesData = Object.keys(data).map(function (c) {
        var lineData = [{
          x: 0,
          y: 0,
          c: c
        }];
        lineData.push({
          x: 0.5,
          y: +data[c] / 4,
          c: c
        });
        lineData.push({
          x: 1,
          y: +data[c],
          c: c
        });
        lineData.push({
          x: 1.5,
          y: +data[c] / 4,
          c: c
        });
        lineData.push({
          x: 2,
          y: 0,
          c: c
        });
        return lineData;
      }); // sort least to most for mouse handler

      linesData.sort(function (a, b) {
        return a[2].y - b[2].y;
      });
      var x = d3.scaleLinear().domain([0, 2]).range([0, width]);
      var y = d3.scaleLinear().domain([0, 1]).range([height - 20, 0]);
      var color = d3.scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.color);
      var opacity = d3.scaleThreshold().domain(props.thresholdDomain).range(props.thresholdRange.opacity);
      var line = d3.line().curve(d3.curveMonotoneX).x(function (d) {
        return x(d.x);
      }).y(function (d) {
        return y(d.y);
      });
      var thresholdLine = d3.line().curve(d3.curveMonotoneX).x(function (d) {
        return x(d.x);
      }).y(function (d) {
        return y(d.y) - 4;
      });
      svg.selectAll('path.countries').data(linesData).join('path').attr('class', function (d) {
        return "countries iso-".concat(d[0].c);
      }).style('opacity', function (d) {
        return opacity(data[d[0].c]);
      }).attr('stroke', function (d) {
        return color(data[d[0].c]);
      }).transition(t).attr('d', line);
      var raisedY = 1;
      svg.appendSelect('path.limit.max').datum([{
        x: 0,
        y: 0
      }, {
        x: 0.5,
        y: raisedY / 4
      }, {
        x: 1,
        y: raisedY
      }, {
        x: 1.5,
        y: raisedY / 4
      }, {
        x: 2,
        y: 0
      }]).attr('stroke', function (d) {
        return color(raisedY);
      }).transition(t).attr('d', thresholdLine);
      svg.appendSelect('line.top-countries').attr('x1', x(1.28)).attr('x2', x(2)).attr('y1', y(0.70)).attr('y2', y(0.70)).attr('stroke', function (d) {
        return color(raisedY);
      });
      var countriesAboveThreshold = Object.keys(data).filter(function (c) {
        return data[c] > last(props.thresholdDomain);
      }).length;
      d3.select(node).appendSelect('div.label.right').style('bottom', "".concat(height - y(0.70), "px")).style('right', '0px').style('width', "".concat(x(0.7), "px")).html(mustache.render(props.thresholdText, {
        number: "<span>".concat(countriesAboveThreshold, "</span>")
      })).select('span').style('color', last(props.thresholdRange.color));
      var highlightLab = d3.select(node).appendSelect('div.label.left').style('top', '0px').style('left', '0px').style('width', "".concat(x(0.7), "px")).html('');
      var mouseRect = svg.appendSelect('rect').attr('width', width).attr('height', height).attr('x', 0).attr('y', 0).style('fill', 'transparent');

      var highlightCountry = function highlightCountry(yCoord) {
        var dataCoord = y.invert(yCoord);
        var dataPoint = linesData.find(function (d) {
          return d[2].y > dataCoord;
        });
        if (!dataPoint) dataPoint = last(linesData);
        var dataPoints = Object.keys(data).filter(function (c) {
          return +data[c] === dataPoint[2].y;
        });
        var isoAlpha2 = dataPoints[random(0, dataPoints.length - 1)];
        var country = atlas.getCountry(isoAlpha2);
        var percent = data[isoAlpha2] * 100;
        highlightLab.appendSelect('div.country-name').text(country.translations[props.locale]);
        highlightLab.appendSelect('div.country-data').html(mustache.render(props.peakText, {
          percent: percent < 1 ? '<span>&lt; 1%</span>' : "<span>".concat(Math.round(percent), "%</span>")
        })).select('span').style('color', color(data[isoAlpha2]));
        svg.selectAll('path.countries').style('opacity', function (d) {
          return d[0].c === isoAlpha2 ? 1 : 0;
        });
      };

      var removeHighlight = function removeHighlight() {
        highlightLab.html('');
        svg.selectAll('path.countries').style('opacity', function (d) {
          return opacity(data[d[0].c]);
        });
      };

      mouseRect.on('mouseenter.wave mousemove.wave', throttle(function () {
        if (!d3.event) return;
        var coordinates = d3.mouse(svg.node());
        highlightCountry(coordinates[1]);
      }, 50));
      mouseRect.on('touchstart.wave touchmove.wave', throttle(function () {
        if (!d3.event) return;

        var _d3$touches = d3.touches(svg.node()),
            _d3$touches2 = _slicedToArray(_d3$touches, 1),
            coordinates = _d3$touches2[0];

        highlightCountry(coordinates[1]);
      }, 50), true);
      mouseRect.on('mouseleave.wave', removeHighlight);
      mouseRect.on('touchend.wave touchcancel.wave', removeHighlight);
      return this;
    }
  }]);

  return CovidWave;
}(ChartComponent);

module.exports = CovidWave;
