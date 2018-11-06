// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"node_modules/style-value-types/dist/style-value-types.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complex = exports.color = exports.hsla = exports.hex = exports.rgbUnit = exports.rgba = exports.vh = exports.vw = exports.px = exports.percent = exports.degrees = exports.alpha = exports.scale = exports.number = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var clamp = function (min, max) {
  return function (v) {
    return Math.max(Math.min(v, max), min);
  };
};

var isFirstChars = function (term) {
  return function (v) {
    return typeof v === 'string' && v.indexOf(term) === 0;
  };
};

var getValueFromFunctionString = function (value) {
  return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};

var splitCommaDelimited = function (value) {
  return typeof value === 'string' ? value.split(/,\s*/) : [value];
};

var sanitize = function (v) {
  return v % 1 ? Number(v.toFixed(5)) : v;
};

var number = {
  test: function (v) {
    return typeof v === 'number';
  },
  parse: parseFloat,
  transform: function (v) {
    return v;
  }
};
exports.number = number;

var alpha = __assign({}, number, {
  transform: clamp(0, 1)
});

exports.alpha = alpha;

var scale = __assign({}, number, {
  default: 1
});

exports.scale = scale;

var createUnitType = function (unit) {
  return {
    test: function (v) {
      return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) {
      return "" + v + unit;
    }
  };
};

var degrees = createUnitType('deg');
exports.degrees = degrees;
var percent = createUnitType('%');
exports.percent = percent;
var px = createUnitType('px');
exports.px = px;
var vh = createUnitType('vh');
exports.vh = vh;
var vw = createUnitType('vw');
exports.vw = vw;
var clampRgbUnit = clamp(0, 255);
var onlyColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;

var isRgba = function (v) {
  return v.red !== undefined;
};

var isHsla = function (v) {
  return v.hue !== undefined;
};

var splitColorValues = function (terms) {
  var numTerms = terms.length;
  return function (v) {
    if (typeof v !== 'string') return v;
    var values = {};
    var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));

    for (var i = 0; i < numTerms; i++) {
      values[terms[i]] = valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
    }

    return values;
  };
};

var rgbaTemplate = function (_a) {
  var red = _a.red,
      green = _a.green,
      blue = _a.blue,
      _b = _a.alpha,
      alpha$$1 = _b === void 0 ? 1 : _b;
  return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")";
};

var hslaTemplate = function (_a) {
  var hue = _a.hue,
      saturation = _a.saturation,
      lightness = _a.lightness,
      _b = _a.alpha,
      alpha$$1 = _b === void 0 ? 1 : _b;
  return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha$$1 + ")";
};

var rgbUnit = __assign({}, number, {
  transform: function (v) {
    return Math.round(clampRgbUnit(v));
  }
});

exports.rgbUnit = rgbUnit;
var testRgbaString = isFirstChars('rgb');
var rgba = {
  test: function (v) {
    return typeof v === 'string' ? testRgbaString(v) : isRgba(v);
  },
  parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
  transform: function (_a) {
    var red = _a.red,
        green = _a.green,
        blue = _a.blue,
        alpha$$1 = _a.alpha;
    return rgbaTemplate({
      red: rgbUnit.transform(red),
      green: rgbUnit.transform(green),
      blue: rgbUnit.transform(blue),
      alpha: sanitize(alpha$$1)
    });
  }
};
exports.rgba = rgba;
var testHslaString = isFirstChars('hsl');
var hsla = {
  test: function (v) {
    return typeof v === 'string' ? testHslaString(v) : isHsla(v);
  },
  parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
  transform: function (_a) {
    var hue = _a.hue,
        saturation = _a.saturation,
        lightness = _a.lightness,
        alpha$$1 = _a.alpha;
    return hslaTemplate({
      hue: Math.round(hue),
      saturation: percent.transform(sanitize(saturation)),
      lightness: percent.transform(sanitize(lightness)),
      alpha: sanitize(alpha$$1)
    });
  }
};
exports.hsla = hsla;

var hex = __assign({}, rgba, {
  test: isFirstChars('#'),
  parse: function (v) {
    var r = '';
    var g = '';
    var b = '';

    if (v.length > 4) {
      r = v.substr(1, 2);
      g = v.substr(3, 2);
      b = v.substr(5, 2);
    } else {
      r = v.substr(1, 1);
      g = v.substr(2, 1);
      b = v.substr(3, 1);
      r += r;
      g += g;
      b += b;
    }

    return {
      red: parseInt(r, 16),
      green: parseInt(g, 16),
      blue: parseInt(b, 16),
      alpha: 1
    };
  }
});

exports.hex = hex;
var color = {
  test: function (v) {
    return typeof v === 'string' && onlyColorRegex.test(v) || rgba.test(v) || hsla.test(v) || hex.test(v);
  },
  parse: function (v) {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else if (hex.test(v)) {
      return hex.parse(v);
    }

    return v;
  },
  transform: function (v) {
    if (isRgba(v)) {
      return rgba.transform(v);
    } else if (isHsla(v)) {
      return hsla.transform(v);
    }

    return v;
  }
};
exports.color = color;
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var complex = {
  test: function (v) {
    if (typeof v !== 'string' || !isNaN(v)) return false;
    var numValues = 0;
    var foundNumbers = v.match(floatRegex);
    var foundColors = v.match(colorRegex);
    if (foundNumbers) numValues += foundNumbers.length;
    if (foundColors) numValues += foundColors.length;
    return numValues > 0;
  },
  parse: function (v) {
    var input = v;
    var parsed = [];
    var foundColors = input.match(colorRegex);

    if (foundColors) {
      input = input.replace(colorRegex, COLOR_TOKEN);
      parsed.push.apply(parsed, foundColors.map(color.parse));
    }

    var foundNumbers = input.match(floatRegex);

    if (foundNumbers) {
      parsed.push.apply(parsed, foundNumbers.map(number.parse));
    }

    return parsed;
  },
  createTransformer: function (prop) {
    var template = prop;
    var token = 0;
    var foundColors = prop.match(colorRegex);
    var numColors = foundColors ? foundColors.length : 0;

    if (foundColors) {
      for (var i = 0; i < numColors; i++) {
        template = template.replace(foundColors[i], COLOR_TOKEN);
        token++;
      }
    }

    var foundNumbers = template.match(floatRegex);
    var numNumbers = foundNumbers ? foundNumbers.length : 0;

    if (foundNumbers) {
      for (var i = 0; i < numNumbers; i++) {
        template = template.replace(foundNumbers[i], NUMBER_TOKEN);
        token++;
      }
    }

    return function (v) {
      var output = template;

      for (var i = 0; i < token; i++) {
        output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
      }

      return output;
    };
  }
};
exports.complex = complex;
},{}],"node_modules/hey-listen/dist/hey-listen.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invariant = exports.warning = void 0;
var HEY_LISTEN = 'Hey, listen! ';

var warning = function () {};

exports.warning = warning;

var invariant = function () {};

exports.invariant = invariant;

if ("development" !== 'production') {
  exports.warning = warning = function (check, message) {
    if (!check && typeof console !== 'undefined') {
      console.warn(HEY_LISTEN + message);
    }
  };

  exports.invariant = invariant = function (check, message) {
    if (!check) {
      throw new Error(HEY_LISTEN.toUpperCase() + message);
    }
  };
}
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/framesync/dist/framesync.es.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFrameData = exports.cancelSync = exports.default = void 0;

var _heyListen = require("hey-listen");

var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined ? function (callback) {
  return window.requestAnimationFrame(callback);
} : function (callback) {
  var timestamp = Date.now();
  var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
  prevTime = timestamp + timeToCall;
  setTimeout(function () {
    return callback(prevTime);
  }, timeToCall);
};

var createStep = function (setRunNextFrame) {
  var processToRun = [];
  var processToRunNextFrame = [];
  var numThisFrame = 0;
  var isProcessing = false;
  var i = 0;
  var cancelled = new WeakSet();
  var toKeepAlive = new WeakSet();
  var renderStep = {
    cancel: function (process) {
      var indexOfCallback = processToRunNextFrame.indexOf(process);
      cancelled.add(process);

      if (indexOfCallback !== -1) {
        processToRunNextFrame.splice(indexOfCallback, 1);
      }
    },
    process: function (frame) {
      var _a;

      isProcessing = true;
      _a = [processToRunNextFrame, processToRun], processToRun = _a[0], processToRunNextFrame = _a[1];
      processToRunNextFrame.length = 0;
      numThisFrame = processToRun.length;

      if (numThisFrame) {
        var process_1;

        for (i = 0; i < numThisFrame; i++) {
          process_1 = processToRun[i];
          process_1(frame);

          if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
            renderStep.schedule(process_1);
            setRunNextFrame(true);
          }
        }
      }

      isProcessing = false;
    },
    schedule: function (process, keepAlive, immediate) {
      (0, _heyListen.invariant)(typeof process === 'function', 'Argument must be a function');
      var addToCurrentBuffer = immediate && isProcessing;
      var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
      if (keepAlive) toKeepAlive.add(process);

      if (buffer.indexOf(process) === -1) {
        buffer.push(process);
        if (addToCurrentBuffer) numThisFrame = processToRun.length;
      }
    }
  };
  return renderStep;
};

var StepId;

(function (StepId) {
  StepId["Read"] = "read";
  StepId["Update"] = "update";
  StepId["Render"] = "render";
  StepId["PostRender"] = "postRender";
  StepId["FixedUpdate"] = "fixedUpdate";
})(StepId || (StepId = {}));

var maxElapsed = 40;
var defaultElapsed = 1 / 60 * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [StepId.Read, StepId.Update, StepId.Render, StepId.PostRender];

var setWillRunNextFrame = function (willRun) {
  return willRunNextFrame = willRun;
};

var _a = stepsOrder.reduce(function (acc, key) {
  var step = createStep(setWillRunNextFrame);

  acc.sync[key] = function (process, keepAlive, immediate) {
    if (keepAlive === void 0) {
      keepAlive = false;
    }

    if (immediate === void 0) {
      immediate = false;
    }

    if (!willRunNextFrame) startLoop();
    step.schedule(process, keepAlive, immediate);
    return process;
  };

  acc.cancelSync[key] = function (process) {
    return step.cancel(process);
  };

  acc.steps[key] = step;
  return acc;
}, {
  steps: {},
  sync: {},
  cancelSync: {}
}),
    steps = _a.steps,
    sync = _a.sync,
    cancelSync = _a.cancelSync;

exports.cancelSync = cancelSync;

var processStep = function (stepId) {
  return steps[stepId].process(frame);
};

var processFrame = function (timestamp) {
  willRunNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  if (!useDefaultElapsed) defaultElapsed = frame.delta;
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;

  if (willRunNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};

var startLoop = function () {
  willRunNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing) onNextFrame(processFrame);
};

var getFrameData = function () {
  return frame;
};

exports.getFrameData = getFrameData;
var _default = sync;
exports.default = _default;
},{"hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","process":"../../../AppData/Local/Yarn/Data/global/node_modules/process/browser.js"}],"node_modules/@popmotion/easing/dist/easing.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicBezier = cubicBezier;
exports.anticipate = exports.backInOut = exports.backOut = exports.backIn = exports.circInOut = exports.circOut = exports.circIn = exports.easeInOut = exports.easeOut = exports.easeIn = exports.linear = exports.createAnticipateEasing = exports.createBackIn = exports.createExpoIn = exports.createMirroredEasing = exports.createReversedEasing = exports.mirrored = exports.reversed = void 0;
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;

var reversed = function (easing) {
  return function (p) {
    return 1 - easing(1 - p);
  };
};

exports.reversed = reversed;

var mirrored = function (easing) {
  return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};

exports.mirrored = mirrored;
var createReversedEasing = reversed;
exports.createReversedEasing = createReversedEasing;
var createMirroredEasing = mirrored;
exports.createMirroredEasing = createMirroredEasing;

var createExpoIn = function (power) {
  return function (p) {
    return Math.pow(p, power);
  };
};

exports.createExpoIn = createExpoIn;

var createBackIn = function (power) {
  return function (p) {
    return p * p * ((power + 1) * p - power);
  };
};

exports.createBackIn = createBackIn;

var createAnticipateEasing = function (power) {
  var backEasing = createBackIn(power);
  return function (p) {
    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };
};

exports.createAnticipateEasing = createAnticipateEasing;

var linear = function (p) {
  return p;
};

exports.linear = linear;
var easeIn =
/*#__PURE__*/
createExpoIn(2);
exports.easeIn = easeIn;
var easeOut =
/*#__PURE__*/
reversed(easeIn);
exports.easeOut = easeOut;
var easeInOut =
/*#__PURE__*/
mirrored(easeIn);
exports.easeInOut = easeInOut;

var circIn = function (p) {
  return 1 - Math.sin(Math.acos(p));
};

exports.circIn = circIn;
var circOut =
/*#__PURE__*/
reversed(circIn);
exports.circOut = circOut;
var circInOut =
/*#__PURE__*/
mirrored(circOut);
exports.circInOut = circInOut;
var backIn =
/*#__PURE__*/
createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
exports.backIn = backIn;
var backOut =
/*#__PURE__*/
reversed(backIn);
exports.backOut = backOut;
var backInOut =
/*#__PURE__*/
mirrored(backIn);
exports.backInOut = backInOut;
var anticipate =
/*#__PURE__*/
createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
exports.anticipate = anticipate;
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';

var a = function (a1, a2) {
  return 1.0 - 3.0 * a2 + 3.0 * a1;
};

var b = function (a1, a2) {
  return 3.0 * a2 - 6.0 * a1;
};

var c = function (a1) {
  return 3.0 * a1;
};

var getSlope = function (t, a1, a2) {
  return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};

var calcBezier = function (t, a1, a2) {
  return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};

function cubicBezier(mX1, mY1, mX2, mY2) {
  var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);

  var binarySubdivide = function (aX, aA, aB) {
    var i = 0;
    var currentX;
    var currentT;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

    return currentT;
  };

  var newtonRaphsonIterate = function (aX, aGuessT) {
    var i = 0;
    var currentSlope = 0;
    var currentX;

    for (; i < NEWTON_ITERATIONS; ++i) {
      currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  };

  var calcSampleValues = function () {
    for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
      sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
    }
  };

  var getTForX = function (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = K_SPLINE_TABLE_SIZE - 1;
    var dist = 0.0;
    var guessForT = 0.0;
    var initialSlope = 0.0;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += K_SAMPLE_STEP_SIZE;
    }

    --currentSample;
    dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
    initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
    }
  };

  calcSampleValues();

  var resolver = function (aX) {
    var returnValue;

    if (mX1 === mY1 && mX2 === mY2) {
      returnValue = aX;
    } else if (aX === 0) {
      returnValue = 0;
    } else if (aX === 1) {
      returnValue = 1;
    } else {
      returnValue = calcBezier(getTForX(aX), mY1, mY2);
    }

    return returnValue;
  };

  return resolver;
}
},{}],"node_modules/@popmotion/popcorn/dist/popcorn.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createAnticipateEasing", {
  enumerable: true,
  get: function () {
    return _easing.createAnticipateEasing;
  }
});
Object.defineProperty(exports, "createBackIn", {
  enumerable: true,
  get: function () {
    return _easing.createBackIn;
  }
});
Object.defineProperty(exports, "createExpoIn", {
  enumerable: true,
  get: function () {
    return _easing.createExpoIn;
  }
});
Object.defineProperty(exports, "cubicBezier", {
  enumerable: true,
  get: function () {
    return _easing.cubicBezier;
  }
});
Object.defineProperty(exports, "linear", {
  enumerable: true,
  get: function () {
    return _easing.linear;
  }
});
Object.defineProperty(exports, "easeIn", {
  enumerable: true,
  get: function () {
    return _easing.easeIn;
  }
});
Object.defineProperty(exports, "easeOut", {
  enumerable: true,
  get: function () {
    return _easing.easeOut;
  }
});
Object.defineProperty(exports, "easeInOut", {
  enumerable: true,
  get: function () {
    return _easing.easeInOut;
  }
});
Object.defineProperty(exports, "circIn", {
  enumerable: true,
  get: function () {
    return _easing.circIn;
  }
});
Object.defineProperty(exports, "circOut", {
  enumerable: true,
  get: function () {
    return _easing.circOut;
  }
});
Object.defineProperty(exports, "circInOut", {
  enumerable: true,
  get: function () {
    return _easing.circInOut;
  }
});
Object.defineProperty(exports, "backIn", {
  enumerable: true,
  get: function () {
    return _easing.backIn;
  }
});
Object.defineProperty(exports, "backOut", {
  enumerable: true,
  get: function () {
    return _easing.backOut;
  }
});
Object.defineProperty(exports, "backInOut", {
  enumerable: true,
  get: function () {
    return _easing.backInOut;
  }
});
Object.defineProperty(exports, "anticipate", {
  enumerable: true,
  get: function () {
    return _easing.anticipate;
  }
});
Object.defineProperty(exports, "reversed", {
  enumerable: true,
  get: function () {
    return _easing.reversed;
  }
});
Object.defineProperty(exports, "mirrored", {
  enumerable: true,
  get: function () {
    return _easing.mirrored;
  }
});
exports.wrap = exports.velocityPerSecond = exports.velocityPerFrame = exports.toDecimal = exports.steps = exports.springForceLinear = exports.springForceExpo = exports.springForce = exports.snap = exports.smoothFrame = exports.smooth = exports.radiansToDegrees = exports.progress = exports.pointFromVector = exports.pipe = exports.mixComplex = exports.mixColor = exports.mixArray = exports.mix = exports.isPoint3D = exports.isPoint = exports.interpolate = exports.distance = exports.dilate = exports.degreesToRadians = exports.conditional = exports.clamp = exports.applyOffset = exports.angle = void 0;

var _styleValueTypes = require("style-value-types");

var _heyListen = require("hey-listen");

var _framesync = require("framesync");

var _easing = require("@popmotion/easing");

var zeroPoint = {
  x: 0,
  y: 0,
  z: 0
};

var isNum = function (v) {
  return typeof v === 'number';
};

var radiansToDegrees = function (radians) {
  return radians * 180 / Math.PI;
};

exports.radiansToDegrees = radiansToDegrees;

var angle = function (a, b) {
  if (b === void 0) {
    b = zeroPoint;
  }

  return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};

exports.angle = angle;

var applyOffset = function (from, to) {
  var hasReceivedFrom = true;

  if (to === undefined) {
    to = from;
    hasReceivedFrom = false;
  }

  return function (v) {
    if (hasReceivedFrom) {
      return v - from + to;
    } else {
      from = v;
      hasReceivedFrom = true;
      return to;
    }
  };
};

exports.applyOffset = applyOffset;

var curryRange = function (func) {
  return function (min, max, v) {
    return v !== undefined ? func(min, max, v) : function (cv) {
      return func(min, max, cv);
    };
  };
};

var clamp = function (min, max, v) {
  return Math.min(Math.max(v, min), max);
};

var clamp$1 = curryRange(clamp);
exports.clamp = clamp$1;

var conditional = function (check, apply) {
  return function (v) {
    return check(v) ? apply(v) : v;
  };
};

exports.conditional = conditional;

var degreesToRadians = function (degrees) {
  return degrees * Math.PI / 180;
};

exports.degreesToRadians = degreesToRadians;

var dilate = function (a, b, dilation) {
  return a + (b - a) * dilation;
};

exports.dilate = dilate;

var isPoint = function (point) {
  return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};

exports.isPoint = isPoint;

var isPoint3D = function (point) {
  return isPoint(point) && point.hasOwnProperty('z');
};

exports.isPoint3D = isPoint3D;

var distance1D = function (a, b) {
  return Math.abs(a - b);
};

var distance = function (a, b) {
  if (b === void 0) {
    b = zeroPoint;
  }

  if (isNum(a) && isNum(b)) {
    return distance1D(a, b);
  } else if (isPoint(a) && isPoint(b)) {
    var xDelta = distance1D(a.x, b.x);
    var yDelta = distance1D(a.y, b.y);
    var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }

  return 0;
};

exports.distance = distance;

var progress = function (from, to, value) {
  var toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

exports.progress = progress;

var mix = function (from, to, progress) {
  return -progress * from + progress * to + from;
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


exports.mix = mix;

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var mixLinearColor = function (from, to, v) {
  var fromExpo = from * from;
  var toExpo = to * to;
  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};

var colorTypes = [_styleValueTypes.hex, _styleValueTypes.rgba, _styleValueTypes.hsla];

var getColorType = function (v) {
  return colorTypes.find(function (type) {
    return type.test(v);
  });
};

var mixColor = function (from, to) {
  var fromColorType = getColorType(from);
  var toColorType = getColorType(to);
  (0, _heyListen.invariant)(fromColorType.transform === toColorType.transform, 'Both colors must be Hex and/or RGBA, or both must be HSLA');
  var fromColor = fromColorType.parse(from);
  var toColor = toColorType.parse(to);

  var blended = __assign({}, fromColor);

  var mixFunc = fromColorType === _styleValueTypes.hsla ? mix : mixLinearColor;
  return function (v) {
    for (var key in blended) {
      if (key !== 'alpha') {
        blended[key] = mixFunc(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

exports.mixColor = mixColor;

var combineFunctions = function (a, b) {
  return function (v) {
    return b(a(v));
  };
};

var pipe = function () {
  var transformers = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    transformers[_i] = arguments[_i];
  }

  return transformers.reduce(combineFunctions);
};

exports.pipe = pipe;

var mixArray = function (from, to) {
  var output = from.slice();
  var numValues = output.length;
  var blendValue = from.map(function (fromThis, i) {
    var toThis = to[i];

    if (isNum(fromThis)) {
      return function (v) {
        return mix(fromThis, toThis, v);
      };
    } else if (_styleValueTypes.color.test(fromThis)) {
      return mixColor(fromThis, toThis);
    } else {
      return mixComplex(fromThis, toThis);
    }
  });
  return function (v) {
    for (var i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }

    return output;
  };
};

exports.mixArray = mixArray;

var mixComplex = function (from, to) {
  var valueTemplate = _styleValueTypes.complex.createTransformer(from);

  (0, _heyListen.invariant)(valueTemplate(from) === _styleValueTypes.complex.createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
  return pipe(mixArray(_styleValueTypes.complex.parse(from), _styleValueTypes.complex.parse(to)), valueTemplate);
};

exports.mixComplex = mixComplex;
var mixNumber = curryRange(mix);

var getMixer = function (v) {
  return typeof v === 'number' ? mixNumber : _styleValueTypes.color.test(v) ? mixColor : mixComplex;
};

var slowInterpolate = function (input, output, rangeLength, rangeEasing) {
  var finalIndex = rangeLength - 1;

  if (input[0] > input[finalIndex]) {
    input.reverse();
    output.reverse();
  }

  var mixerFactories = Array(finalIndex).fill(getMixer(output[0]));
  var mixers = mixerFactories.map(function (factory, i) {
    return factory(output[i], output[i + 1]);
  });
  return function (v) {
    if (v <= input[0]) {
      return output[0];
    }

    if (v >= input[finalIndex]) {
      return output[finalIndex];
    }

    var i = 1;

    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalIndex) {
        break;
      }
    }

    var progressInRange = progress(input[i - 1], input[i], v);
    var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
    return mixers[i - 1](easedProgress);
  };
};

var fastInterpolate = function (minA, maxA, minB, maxB) {
  return function (v) {
    return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
  };
};

var interpolate = function (input, output, rangeEasing) {
  var rangeLength = input.length;
  return rangeLength === 2 && typeof output[0] === 'number' ? fastInterpolate(input[0], input[1], output[0], output[1]) : slowInterpolate(input, output, rangeLength, rangeEasing);
};

exports.interpolate = interpolate;

var pointFromVector = function (origin, angle, distance) {
  angle = degreesToRadians(angle);
  return {
    x: distance * Math.cos(angle) + origin.x,
    y: distance * Math.sin(angle) + origin.y
  };
};

exports.pointFromVector = pointFromVector;

var toDecimal = function (num, precision) {
  if (precision === void 0) {
    precision = 2;
  }

  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
};

exports.toDecimal = toDecimal;

var smoothFrame = function (prevValue, nextValue, duration, smoothing) {
  if (smoothing === void 0) {
    smoothing = 0;
  }

  return toDecimal(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
};

exports.smoothFrame = smoothFrame;

var smooth = function (strength) {
  if (strength === void 0) {
    strength = 50;
  }

  var previousValue = 0;
  var lastUpdated = 0;
  return function (v) {
    var currentFramestamp = (0, _framesync.getFrameData)().timestamp;
    var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
    var newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};

exports.smooth = smooth;

var snap = function (points) {
  if (typeof points === 'number') {
    return function (v) {
      return Math.round(v / points) * points;
    };
  } else {
    var i_1 = 0;
    var numPoints_1 = points.length;
    return function (v) {
      var lastDistance = Math.abs(points[0] - v);

      for (i_1 = 1; i_1 < numPoints_1; i_1++) {
        var point = points[i_1];
        var distance = Math.abs(point - v);
        if (distance === 0) return point;
        if (distance > lastDistance) return points[i_1 - 1];
        if (i_1 === numPoints_1 - 1) return point;
        lastDistance = distance;
      }
    };
  }
};

exports.snap = snap;

var identity = function (v) {
  return v;
};

var springForce = function (alterDisplacement) {
  if (alterDisplacement === void 0) {
    alterDisplacement = identity;
  }

  return curryRange(function (constant, origin, v) {
    var displacement = origin - v;
    var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
    return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
  });
};

exports.springForce = springForce;
var springForceLinear = springForce();
exports.springForceLinear = springForceLinear;
var springForceExpo = springForce(Math.sqrt);
exports.springForceExpo = springForceExpo;

var velocityPerFrame = function (xps, frameDuration) {
  return isNum(xps) ? xps / (1000 / frameDuration) : 0;
};

exports.velocityPerFrame = velocityPerFrame;

var velocityPerSecond = function (velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
};

exports.velocityPerSecond = velocityPerSecond;

var wrap = function (min, max, v) {
  var rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

var wrap$1 = curryRange(wrap);
exports.wrap = wrap$1;
var clampProgress = clamp$1(0, 1);

var steps = function (steps, direction) {
  if (direction === void 0) {
    direction = 'end';
  }

  return function (progress) {
    progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
    var expanded = progress * steps;
    var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
    return clampProgress(rounded / steps);
  };
};

exports.steps = steps;
},{"style-value-types":"node_modules/style-value-types/dist/style-value-types.es.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","framesync":"node_modules/framesync/dist/framesync.es.js","@popmotion/easing":"node_modules/@popmotion/easing/dist/easing.es.js"}],"node_modules/stylefire/dist/stylefire.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildStyles = buildStylePropertyString;
exports.createStylerFactory = exports.default = void 0;

var _framesync = _interopRequireDefault(require("framesync"));

var _styleValueTypes = require("style-value-types");

var _tslib = require("tslib");

var _heyListen = require("hey-listen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyler = function (_a) {
  var onRead = _a.onRead,
      onRender = _a.onRender,
      _b = _a.aliasMap,
      aliasMap = _b === void 0 ? {} : _b,
      _c = _a.useCache,
      useCache = _c === void 0 ? true : _c;
  return function (props) {
    var state = {};
    var changedValues = [];
    var hasChanged = false;

    var setValue = function (unmappedKey, value) {
      var key = aliasMap[unmappedKey] || unmappedKey;
      var currentValue = state[key];
      state[key] = value;

      if (state[key] !== currentValue) {
        if (changedValues.indexOf(key) === -1) {
          changedValues.push(key);
        }

        if (!hasChanged) {
          hasChanged = true;

          _framesync.default.render(render);
        }
      }
    };

    function render(forceRender) {
      if (forceRender === void 0) {
        forceRender = false;
      }

      if (forceRender === true || hasChanged) {
        onRender(state, props, changedValues);
        hasChanged = false;
        changedValues.length = 0;
      }

      return this;
    }

    return {
      get: function (unmappedKey) {
        var key = aliasMap[unmappedKey] || unmappedKey;
        return key ? useCache && state[key] !== undefined ? state[key] : onRead(key, props) : state;
      },
      set: function (values, value) {
        if (typeof values === 'string') {
          if (value !== undefined) {
            setValue(values, value);
          } else {
            return function (v) {
              return setValue(values, v);
            };
          }
        } else {
          for (var key in values) {
            if (values.hasOwnProperty(key)) {
              setValue(key, values[key]);
            }
          }
        }

        return this;
      },
      render: render
    };
  };
};

exports.createStylerFactory = createStyler;
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';

var camelToDash = function (str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

var setDomAttrs = function (element, attrs) {
  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      element.setAttribute(key, attrs[key]);
    }
  }
};

var camelCache =
/*#__PURE__*/
new Map();
var dashCache =
/*#__PURE__*/
new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement;

var testPrefix = function (key) {
  if (typeof document === 'undefined') return;
  testElement = testElement || document.createElement('div');

  for (var i = 0; i < numPrefixes; i++) {
    var prefix = prefixes[i];
    var noPrefix = prefix === '';
    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

    if (prefixedPropertyName in testElement.style) {
      camelCache.set(key, prefixedPropertyName);
      dashCache.set(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
    }
  }
};

var prefixer = function (key, asDashCase) {
  if (asDashCase === void 0) {
    asDashCase = false;
  }

  var cache = asDashCase ? dashCache : camelCache;
  if (!cache.has(key)) testPrefix(key);
  return cache.get(key) || key;
};

var axes = ['', 'X', 'Y', 'Z'];
var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
var TRANSFORM_ORIGIN_X = 'transformOriginX';
var TRANSFORM_ORIGIN_Y = 'transformOriginY';
var transformProps =
/*#__PURE__*/
order.reduce(function (acc, key) {
  return axes.reduce(function (axesAcc, axesKey) {
    axesAcc.push(key + axesKey);
    return axesAcc;
  }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary =
/*#__PURE__*/
transformProps.reduce(function (dict, key) {
  dict[key] = true;
  return dict;
}, {});

var isTransformProp = function (key) {
  return transformPropDictionary[key] === true;
};

var sortTransformProps = function (a, b) {
  return transformProps.indexOf(a) - transformProps.indexOf(b);
};

var isTransformOriginProp = function (key) {
  return key === TRANSFORM_ORIGIN_X || key === TRANSFORM_ORIGIN_Y;
};

var valueTypes = {
  color: _styleValueTypes.color,
  backgroundColor: _styleValueTypes.color,
  outlineColor: _styleValueTypes.color,
  fill: _styleValueTypes.color,
  stroke: _styleValueTypes.color,
  borderColor: _styleValueTypes.color,
  borderTopColor: _styleValueTypes.color,
  borderRightColor: _styleValueTypes.color,
  borderBottomColor: _styleValueTypes.color,
  borderLeftColor: _styleValueTypes.color,
  borderRadius: _styleValueTypes.px,
  width: _styleValueTypes.px,
  maxWidth: _styleValueTypes.px,
  height: _styleValueTypes.px,
  maxHeight: _styleValueTypes.px,
  top: _styleValueTypes.px,
  left: _styleValueTypes.px,
  bottom: _styleValueTypes.px,
  right: _styleValueTypes.px,
  rotate: _styleValueTypes.degrees,
  rotateX: _styleValueTypes.degrees,
  rotateY: _styleValueTypes.degrees,
  rotateZ: _styleValueTypes.degrees,
  scale: _styleValueTypes.scale,
  scaleX: _styleValueTypes.scale,
  scaleY: _styleValueTypes.scale,
  scaleZ: _styleValueTypes.scale,
  skew: _styleValueTypes.degrees,
  skewX: _styleValueTypes.degrees,
  skewY: _styleValueTypes.degrees,
  distance: _styleValueTypes.px,
  translateX: _styleValueTypes.px,
  translateY: _styleValueTypes.px,
  translateZ: _styleValueTypes.px,
  perspective: _styleValueTypes.px,
  opacity: _styleValueTypes.alpha,
  transformOriginX: _styleValueTypes.percent,
  transformOriginY: _styleValueTypes.percent,
  transformOriginZ: _styleValueTypes.px
};

var getValueType = function (key) {
  return valueTypes[key];
};

var aliasMap = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ',
  originX: 'transformOriginX',
  originY: 'transformOriginY',
  originZ: 'transformOriginZ'
};
var NUMBER = 'number';
var OBJECT = 'object';
var COLON = ':';
var SEMI_COLON = ';';
var TRANSFORM_ORIGIN = 'transform-origin';
var TRANSFORM = 'transform';
var TRANSLATE_Z = 'translateZ';
var TRANSFORM_NONE = ';transform: none';

var styleRule = function (key, value) {
  return "" + SEMI_COLON + key + COLON + value;
};

function buildStylePropertyString(state, changedValues, enableHardwareAcceleration, blacklist) {
  if (changedValues === void 0) {
    changedValues = true;
  }

  if (enableHardwareAcceleration === void 0) {
    enableHardwareAcceleration = true;
  }

  var valuesToChange = changedValues === true ? Object.keys(state) : changedValues;
  var propertyString = '';
  var transformString = '';
  var hasTransformOrigin = false;
  var transformIsDefault = true;
  var hasTransform = false;
  var transformHasZ = false;
  var numChangedValues = valuesToChange.length;

  for (var i = 0; i < numChangedValues; i++) {
    var key = valuesToChange[i];

    if (isTransformProp(key)) {
      hasTransform = true;

      for (var stateKey in state) {
        if (isTransformProp(stateKey) && valuesToChange.indexOf(stateKey) === -1) {
          valuesToChange.push(stateKey);
        }
      }

      break;
    }
  }

  valuesToChange.sort(sortTransformProps);
  var totalNumChangedValues = valuesToChange.length;

  for (var i = 0; i < totalNumChangedValues; i++) {
    var key = valuesToChange[i];
    if (blacklist.has(key)) continue;
    var isTransformKey = isTransformProp(key);
    var value = state[key];
    var valueType = getValueType(key);

    if (isTransformKey) {
      if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
        transformIsDefault = false;
      }
    }

    if (valueType && (typeof value === NUMBER || typeof value === OBJECT) && valueType.transform) {
      value = valueType.transform(value);
    }

    if (isTransformKey) {
      transformString += key + '(' + value + ') ';
      transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
    } else if (isTransformOriginProp(key)) {
      state[key] = value;
      hasTransformOrigin = true;
    } else {
      propertyString += styleRule(prefixer(key, true), value);
    }
  }

  if (hasTransformOrigin) {
    propertyString += styleRule(TRANSFORM_ORIGIN, (state.transformOriginX || 0) + " " + (state.transformOriginY || 0) + " " + (state.transformOriginZ || 0));
  }

  if (hasTransform) {
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += TRANSLATE_Z + "(0)";
    }

    propertyString += styleRule(TRANSFORM, transformIsDefault ? TRANSFORM_NONE : transformString);
  }

  return propertyString;
}

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollValues =
/*#__PURE__*/
new Set([SCROLL_LEFT, SCROLL_TOP]);
var cssStyler =
/*#__PURE__*/
createStyler({
  onRead: function (key, _a) {
    var element = _a.element,
        preparseOutput = _a.preparseOutput;
    var valueType = getValueType(key);

    if (isTransformProp(key)) {
      return valueType ? valueType.default || 0 : 0;
    } else if (scrollValues.has(key)) {
      return element[key];
    } else {
      var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
      return preparseOutput && valueType && valueType.parse ? valueType.parse(domValue) : domValue;
    }
  },
  onRender: function (state, _a, changedValues) {
    var element = _a.element,
        enableHardwareAcceleration = _a.enableHardwareAcceleration;
    element.style.cssText += buildStylePropertyString(state, changedValues, enableHardwareAcceleration, scrollValues);
    if (changedValues.indexOf(SCROLL_LEFT) !== -1) element.scrollLeft = state.scrollLeft;
    if (changedValues.indexOf(SCROLL_TOP) !== -1) element.scrollTop = state.scrollTop;
  },
  aliasMap: aliasMap,
  uncachedValues: scrollValues
});

var css = function (element, props) {
  return cssStyler((0, _tslib.__assign)({
    element: element,
    enableHardwareAcceleration: true,
    preparseOutput: true
  }, props));
};

var ZERO_NOT_ZERO = 0.0000001;

var percentToPixels = function (percent$$1, length) {
  return percent$$1 / 100 * length + 'px';
};

var build = function (state, dimensions, isPath, pathLength) {
  var hasTransform = false;
  var hasDashArray = false;
  var props = {};
  var dashArrayStyles = isPath ? {
    pathLength: '0',
    pathSpacing: "" + pathLength
  } : undefined;
  var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
  var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
  var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
  var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
  var scaleTransformX = -transformOriginX * (scale$$1 * 1);
  var scaleTransformY = -transformOriginY * (scaleY * 1);
  var scaleReplaceX = transformOriginX / scale$$1;
  var scaleReplaceY = transformOriginY / scaleY;
  var transform = {
    translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
    scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
    rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
    skewX: "skewX(" + state.skewX + ") ",
    skewY: "skewY(" + state.skewY + ") "
  };

  for (var key in state) {
    if (state.hasOwnProperty(key)) {
      var value = state[key];

      if (isTransformProp(key)) {
        hasTransform = true;
      } else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
        hasDashArray = true;
        dashArrayStyles[key] = percentToPixels(value, pathLength);
      } else if (isPath && key === 'pathOffset') {
        props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
      } else {
        props[camelToDash(key)] = value;
      }
    }
  }

  if (hasDashArray) {
    props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
  }

  if (hasTransform) {
    props.transform = '';

    for (var key in transform) {
      if (transform.hasOwnProperty(key)) {
        var defaultValue = key === 'scale' ? '1' : '0';
        props.transform += transform[key].replace(/undefined/g, defaultValue);
      }
    }
  }

  return props;
};

var valueTypes$1 = {
  fill: _styleValueTypes.color,
  stroke: _styleValueTypes.color,
  scale: _styleValueTypes.scale,
  scaleX: _styleValueTypes.scale,
  scaleY: _styleValueTypes.scale,
  opacity: _styleValueTypes.alpha,
  fillOpacity: _styleValueTypes.alpha,
  strokeOpacity: _styleValueTypes.alpha
};

var getValueType$1 = function (key) {
  return valueTypes$1[key];
};

var svgStyler =
/*#__PURE__*/
createStyler({
  onRead: function (key, _a) {
    var element = _a.element;

    if (!isTransformProp(key)) {
      return element.getAttribute(key);
    } else {
      var valueType = getValueType$1(key);
      return valueType ? valueType.default : 0;
    }
  },
  onRender: function (state, _a, changedValues) {
    var dimensions = _a.dimensions,
        element = _a.element,
        isPath = _a.isPath,
        pathLength = _a.pathLength;
    setDomAttrs(element, build(state, dimensions, isPath, pathLength));
  },
  aliasMap: {
    x: 'translateX',
    y: 'translateY',
    background: 'fill'
  }
});

var svg = function (element) {
  var _a = element.getBBox(),
      x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height;

  var props = {
    element: element,
    dimensions: {
      x: x,
      y: y,
      width: width,
      height: height
    },
    isPath: false
  };

  if (element.tagName === 'path') {
    props.isPath = true;
    props.pathLength = element.getTotalLength();
  }

  return svgStyler(props);
};

var viewport =
/*#__PURE__*/
createStyler({
  useCache: false,
  onRead: function (key) {
    return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
  },
  onRender: function (_a) {
    var _b = _a.scrollTop,
        scrollTop = _b === void 0 ? 0 : _b,
        _c = _a.scrollLeft,
        scrollLeft = _c === void 0 ? 0 : _c;
    return window.scrollTo(scrollLeft, scrollTop);
  }
});
var cache =
/*#__PURE__*/
new WeakMap();

var createDOMStyler = function (node, props) {
  var styler;

  if (node instanceof HTMLElement) {
    styler = css(node, props);
  } else if (node instanceof SVGElement) {
    styler = svg(node);
  } else if (typeof window !== 'undefined' && node === window) {
    styler = viewport(node);
  }

  (0, _heyListen.invariant)(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
  cache.set(node, styler);
  return styler;
};

var getStyler = function (node, props) {
  return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};

function index(nodeOrSelector, props) {
  var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
  return getStyler(node, props);
}

var _default = index;
exports.default = _default;
},{"framesync":"node_modules/framesync/dist/framesync.es.js","style-value-types":"node_modules/style-value-types/dist/style-value-types.es.js","tslib":"node_modules/tslib/tslib.es6.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js"}],"node_modules/popmotion/dist/popmotion.es.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "styler", {
  enumerable: true,
  get: function () {
    return _stylefire.default;
  }
});
exports.easing = exports.valueTypes = exports.ValueReaction = exports.Action = exports.svg = exports.css = exports.transform = exports.calc = exports.stagger = exports.schedule = exports.parallel = exports.merge = exports.delay = exports.crossfade = exports.composite = exports.chain = exports.multitouch = exports.mouse = exports.pointer = exports.listen = exports.tween = exports.timeline = exports.spring = exports.physics = exports.everyFrame = exports.keyframes = exports.decay = exports.value = exports.multicast = exports.action = void 0;

var _tslib = require("tslib");

var _popcorn = require("@popmotion/popcorn");

var _framesync = _interopRequireWildcard(require("framesync"));

var styleValueTypes = _interopRequireWildcard(require("style-value-types"));

exports.valueTypes = styleValueTypes;

var _heyListen = require("hey-listen");

var easing = _interopRequireWildcard(require("@popmotion/easing"));

exports.easing = easing;

var _stylefire = _interopRequireDefault(require("stylefire"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Chainable =
/*#__PURE__*/
function () {
  function Chainable(props) {
    if (props === void 0) {
      props = {};
    }

    this.props = props;
  }

  Chainable.prototype.applyMiddleware = function (middleware) {
    return this.create((0, _tslib.__assign)({}, this.props, {
      middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware]
    }));
  };

  Chainable.prototype.pipe = function () {
    var funcs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      funcs[_i] = arguments[_i];
    }

    var pipedUpdate = funcs.length === 1 ? funcs[0] : _popcorn.pipe.apply(void 0, funcs);
    return this.applyMiddleware(function (update) {
      return function (v) {
        return update(pipedUpdate(v));
      };
    });
  };

  Chainable.prototype.while = function (predicate) {
    return this.applyMiddleware(function (update, complete) {
      return function (v) {
        return predicate(v) ? update(v) : complete();
      };
    });
  };

  Chainable.prototype.filter = function (predicate) {
    return this.applyMiddleware(function (update) {
      return function (v) {
        return predicate(v) && update(v);
      };
    });
  };

  return Chainable;
}();

var Observer =
/*#__PURE__*/
function () {
  function Observer(_a, observer) {
    var middleware = _a.middleware,
        onComplete = _a.onComplete;

    var _this = this;

    this.isActive = true;

    this.update = function (v) {
      if (_this.observer.update) _this.updateObserver(v);
    };

    this.complete = function () {
      if (_this.observer.complete && _this.isActive) _this.observer.complete();
      if (_this.onComplete) _this.onComplete();
      _this.isActive = false;
    };

    this.error = function (err) {
      if (_this.observer.error && _this.isActive) _this.observer.error(err);
      _this.isActive = false;
    };

    this.observer = observer;

    this.updateObserver = function (v) {
      return observer.update(v);
    };

    this.onComplete = onComplete;

    if (observer.update && middleware && middleware.length) {
      middleware.forEach(function (m) {
        return _this.updateObserver = m(_this.updateObserver, _this.complete);
      });
    }
  }

  return Observer;
}();

var createObserver = function (observerCandidate, _a, onComplete) {
  var middleware = _a.middleware;

  if (typeof observerCandidate === 'function') {
    return new Observer({
      middleware: middleware,
      onComplete: onComplete
    }, {
      update: observerCandidate
    });
  } else {
    return new Observer({
      middleware: middleware,
      onComplete: onComplete
    }, observerCandidate);
  }
};

var Action =
/*#__PURE__*/
function (_super) {
  (0, _tslib.__extends)(Action, _super);

  function Action() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Action.prototype.create = function (props) {
    return new Action(props);
  };

  Action.prototype.start = function (observerCandidate) {
    if (observerCandidate === void 0) {
      observerCandidate = {};
    }

    var isComplete = false;
    var subscription = {
      stop: function () {
        return undefined;
      }
    };
    var _a = this.props,
        init = _a.init,
        observerProps = (0, _tslib.__rest)(_a, ["init"]);
    var observer = createObserver(observerCandidate, observerProps, function () {
      isComplete = true;
      subscription.stop();
    });
    var api = init(observer);
    subscription = api ? (0, _tslib.__assign)({}, subscription, api) : subscription;

    if (observerCandidate.registerParent) {
      observerCandidate.registerParent(subscription);
    }

    if (isComplete) subscription.stop();
    return subscription;
  };

  return Action;
}(Chainable);

exports.Action = Action;

var action = function (init) {
  return new Action({
    init: init
  });
};

exports.action = action;

var BaseMulticast =
/*#__PURE__*/
function (_super) {
  (0, _tslib.__extends)(BaseMulticast, _super);

  function BaseMulticast() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.subscribers = [];
    return _this;
  }

  BaseMulticast.prototype.complete = function () {
    this.subscribers.forEach(function (subscriber) {
      return subscriber.complete();
    });
  };

  BaseMulticast.prototype.error = function (err) {
    this.subscribers.forEach(function (subscriber) {
      return subscriber.error(err);
    });
  };

  BaseMulticast.prototype.update = function (v) {
    for (var i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].update(v);
    }
  };

  BaseMulticast.prototype.subscribe = function (observerCandidate) {
    var _this = this;

    var observer = createObserver(observerCandidate, this.props);
    this.subscribers.push(observer);
    var subscription = {
      unsubscribe: function () {
        var index = _this.subscribers.indexOf(observer);

        if (index !== -1) _this.subscribers.splice(index, 1);
      }
    };
    return subscription;
  };

  BaseMulticast.prototype.stop = function () {
    if (this.parent) this.parent.stop();
  };

  BaseMulticast.prototype.registerParent = function (subscription) {
    this.stop();
    this.parent = subscription;
  };

  return BaseMulticast;
}(Chainable);

var Multicast =
/*#__PURE__*/
function (_super) {
  (0, _tslib.__extends)(Multicast, _super);

  function Multicast() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Multicast.prototype.create = function (props) {
    return new Multicast(props);
  };

  return Multicast;
}(BaseMulticast);

var multicast = function () {
  return new Multicast();
};

exports.multicast = multicast;

var stepProgress = function (steps, progress$$1) {
  var segment = 1 / (steps - 1);
  var subsegment = 1 / (2 * (steps - 1));
  var percentProgressOfTarget = Math.min(progress$$1, 1);
  var subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
  var segmentProgressOfTarget = Math.floor((subsegmentProgressOfTarget + 1) / 2);
  return segmentProgressOfTarget * segment;
};

var calc =
/*#__PURE__*/
Object.freeze({
  angle: _popcorn.angle,
  degreesToRadians: _popcorn.degreesToRadians,
  dilate: _popcorn.dilate,
  distance: _popcorn.distance,
  isPoint3D: _popcorn.isPoint3D,
  isPoint: _popcorn.isPoint,
  getValueFromProgress: _popcorn.mix,
  pointFromAngleAndDistance: _popcorn.pointFromVector,
  getProgressFromValue: _popcorn.progress,
  radiansToDegrees: _popcorn.radiansToDegrees,
  smooth: _popcorn.smoothFrame,
  speedPerFrame: _popcorn.velocityPerFrame,
  speedPerSecond: _popcorn.velocityPerSecond,
  stepProgress: stepProgress
});
exports.calc = calc;

var isValueList = function (v) {
  return Array.isArray(v);
};

var isSingleValue = function (v) {
  var typeOfV = typeof v;
  return typeOfV === 'string' || typeOfV === 'number';
};

var ValueReaction =
/*#__PURE__*/
function (_super) {
  (0, _tslib.__extends)(ValueReaction, _super);

  function ValueReaction(props) {
    var _this = _super.call(this, props) || this;

    _this.scheduleVelocityCheck = function () {
      return _framesync.default.postRender(_this.velocityCheck);
    };

    _this.velocityCheck = function (_a) {
      var timestamp = _a.timestamp;

      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
      }
    };

    _this.prev = _this.current = props.value || 0;

    if (isSingleValue(_this.current)) {
      _this.updateCurrent = function (v) {
        return _this.current = v;
      };

      _this.getVelocityOfCurrent = function () {
        return _this.getSingleVelocity(_this.current, _this.prev);
      };
    } else if (isValueList(_this.current)) {
      _this.updateCurrent = function (v) {
        return _this.current = v.slice();
      };

      _this.getVelocityOfCurrent = function () {
        return _this.getListVelocity();
      };
    } else {
      _this.updateCurrent = function (v) {
        _this.current = {};

        for (var key in v) {
          if (v.hasOwnProperty(key)) {
            _this.current[key] = v[key];
          }
        }
      };

      _this.getVelocityOfCurrent = function () {
        return _this.getMapVelocity();
      };
    }

    if (props.initialSubscription) _this.subscribe(props.initialSubscription);
    return _this;
  }

  ValueReaction.prototype.create = function (props) {
    return new ValueReaction(props);
  };

  ValueReaction.prototype.get = function () {
    return this.current;
  };

  ValueReaction.prototype.getVelocity = function () {
    return this.getVelocityOfCurrent();
  };

  ValueReaction.prototype.update = function (v) {
    _super.prototype.update.call(this, v);

    this.prev = this.current;
    this.updateCurrent(v);

    var _a = (0, _framesync.getFrameData)(),
        delta = _a.delta,
        timestamp = _a.timestamp;

    this.timeDelta = delta;
    this.lastUpdated = timestamp;

    _framesync.default.postRender(this.scheduleVelocityCheck);
  };

  ValueReaction.prototype.subscribe = function (observerCandidate) {
    var sub = _super.prototype.subscribe.call(this, observerCandidate);

    this.update(this.current);
    return sub;
  };

  ValueReaction.prototype.getSingleVelocity = function (current, prev) {
    return typeof current === 'number' && typeof prev === 'number' ? (0, _popcorn.velocityPerSecond)(current - prev, this.timeDelta) : (0, _popcorn.velocityPerSecond)(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
  };

  ValueReaction.prototype.getListVelocity = function () {
    var _this = this;

    return this.current.map(function (c, i) {
      return _this.getSingleVelocity(c, _this.prev[i]);
    });
  };

  ValueReaction.prototype.getMapVelocity = function () {
    var velocity = {};

    for (var key in this.current) {
      if (this.current.hasOwnProperty(key)) {
        velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
      }
    }

    return velocity;
  };

  return ValueReaction;
}(BaseMulticast);

exports.ValueReaction = ValueReaction;

var value = function (value, initialSubscription) {
  return new ValueReaction({
    value: value,
    initialSubscription: initialSubscription
  });
};

exports.value = value;

var multi = function (_a) {
  var getCount = _a.getCount,
      getFirst = _a.getFirst,
      getOutput = _a.getOutput,
      mapApi = _a.mapApi,
      setProp = _a.setProp,
      startActions = _a.startActions;
  return function (actions) {
    return action(function (_a) {
      var update = _a.update,
          complete = _a.complete,
          error = _a.error;
      var numActions = getCount(actions);
      var output = getOutput();

      var updateOutput = function () {
        return update(output);
      };

      var numCompletedActions = 0;
      var subs = startActions(actions, function (a, name) {
        var hasCompleted = false;
        return a.start({
          complete: function () {
            if (!hasCompleted) {
              hasCompleted = true;
              numCompletedActions++;
              if (numCompletedActions === numActions) _framesync.default.update(complete);
            }
          },
          error: error,
          update: function (v) {
            setProp(output, name, v);

            _framesync.default.update(updateOutput, false, true);
          }
        });
      });
      return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
        api[methodName] = mapApi(subs, methodName);
        return api;
      }, {});
    });
  };
};

var composite =
/*#__PURE__*/
multi({
  getOutput: function () {
    return {};
  },
  getCount: function (subs) {
    return Object.keys(subs).length;
  },
  getFirst: function (subs) {
    return subs[Object.keys(subs)[0]];
  },
  mapApi: function (subs, methodName) {
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return Object.keys(subs).reduce(function (output, propKey) {
        var _a;

        if (subs[propKey][methodName]) {
          args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
        }

        return output;
      }, {});
    };
  },
  setProp: function (output, name, v) {
    return output[name] = v;
  },
  startActions: function (actions, starter) {
    return Object.keys(actions).reduce(function (subs, key) {
      subs[key] = starter(actions[key], key);
      return subs;
    }, {});
  }
});
exports.composite = composite;
var parallel =
/*#__PURE__*/
multi({
  getOutput: function () {
    return [];
  },
  getCount: function (subs) {
    return subs.length;
  },
  getFirst: function (subs) {
    return subs[0];
  },
  mapApi: function (subs, methodName) {
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return subs.map(function (sub, i) {
        if (sub[methodName]) {
          return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
        }
      });
    };
  },
  setProp: function (output, name, v) {
    return output[name] = v;
  },
  startActions: function (actions, starter) {
    return actions.map(function (action, i) {
      return starter(action, i);
    });
  }
});

var parallel$1 = function () {
  var actions = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    actions[_i] = arguments[_i];
  }

  return parallel(actions);
};

exports.parallel = parallel$1;

var createVectorTests = function (typeTests) {
  var testNames = Object.keys(typeTests);

  var isVectorProp = function (prop, key) {
    return prop !== undefined && !typeTests[key](prop);
  };

  var getVectorKeys = function (props) {
    return testNames.reduce(function (vectorKeys, key) {
      if (isVectorProp(props[key], key)) vectorKeys.push(key);
      return vectorKeys;
    }, []);
  };

  var testVectorProps = function (props) {
    return props && testNames.some(function (key) {
      return isVectorProp(props[key], key);
    });
  };

  return {
    getVectorKeys: getVectorKeys,
    testVectorProps: testVectorProps
  };
};

var unitTypes = [styleValueTypes.px, styleValueTypes.percent, styleValueTypes.degrees, styleValueTypes.vh, styleValueTypes.vw];

var findUnitType = function (prop) {
  return unitTypes.find(function (type) {
    return type.test(prop);
  });
};

var isUnitProp = function (prop) {
  return Boolean(findUnitType(prop));
};

var createAction = function (action, props) {
  return action(props);
};

var reduceArrayValue = function (i) {
  return function (props, key) {
    props[key] = props[key][i];
    return props;
  };
};

var createArrayAction = function (action, props, vectorKeys) {
  var firstVectorKey = vectorKeys[0];
  var actionList = props[firstVectorKey].map(function (v, i) {
    var childActionProps = vectorKeys.reduce(reduceArrayValue(i), (0, _tslib.__assign)({}, props));
    return getActionCreator(v)(action, childActionProps);
  });
  return parallel$1.apply(void 0, actionList);
};

var reduceObjectValue = function (key) {
  return function (props, propKey) {
    props[propKey] = props[propKey][key];
    return props;
  };
};

var createObjectAction = function (action, props, vectorKeys) {
  var firstVectorKey = vectorKeys[0];
  var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
    var childActionProps = vectorKeys.reduce(reduceObjectValue(key), (0, _tslib.__assign)({}, props));
    map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
    return map;
  }, {});
  return composite(actionMap);
};

var createUnitAction = function (action, _a) {
  var from = _a.from,
      to = _a.to,
      props = (0, _tslib.__rest)(_a, ["from", "to"]);
  var unitType = findUnitType(from) || findUnitType(to);
  var transform = unitType.transform,
      parse = unitType.parse;
  return action((0, _tslib.__assign)({}, props, {
    from: typeof from === 'string' ? parse(from) : from,
    to: typeof to === 'string' ? parse(to) : to
  })).pipe(transform);
};

var createColorAction = function (action, _a) {
  var from = _a.from,
      to = _a.to,
      props = (0, _tslib.__rest)(_a, ["from", "to"]);
  return action((0, _tslib.__assign)({}, props, {
    from: 0,
    to: 1
  })).pipe((0, _popcorn.mixColor)(from, to), styleValueTypes.color.transform);
};

var createComplexAction = function (action, _a) {
  var from = _a.from,
      to = _a.to,
      props = (0, _tslib.__rest)(_a, ["from", "to"]);
  var valueTemplate = styleValueTypes.complex.createTransformer(from);
  (0, _heyListen.invariant)(valueTemplate(from) === styleValueTypes.complex.createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
  return action((0, _tslib.__assign)({}, props, {
    from: 0,
    to: 1
  })).pipe((0, _popcorn.mixArray)(styleValueTypes.complex.parse(from), styleValueTypes.complex.parse(to)), valueTemplate);
};

var createVectorAction = function (action, typeTests) {
  var _a = createVectorTests(typeTests),
      testVectorProps = _a.testVectorProps,
      getVectorKeys = _a.getVectorKeys;

  var vectorAction = function (props) {
    var isVector = testVectorProps(props);
    if (!isVector) return action(props);
    var vectorKeys = getVectorKeys(props);
    var testKey = vectorKeys[0];
    var testProp = props[testKey];
    return getActionCreator(testProp)(action, props, vectorKeys);
  };

  return vectorAction;
};

var getActionCreator = function (prop) {
  var actionCreator = createAction;

  if (typeof prop === 'number') {
    actionCreator = createAction;
  } else if (Array.isArray(prop)) {
    actionCreator = createArrayAction;
  } else if (isUnitProp(prop)) {
    actionCreator = createUnitAction;
  } else if (styleValueTypes.color.test(prop)) {
    actionCreator = createColorAction;
  } else if (styleValueTypes.complex.test(prop)) {
    actionCreator = createComplexAction;
  } else if (typeof prop === 'object') {
    actionCreator = createObjectAction;
  }

  return actionCreator;
};

var decay = function (props) {
  if (props === void 0) {
    props = {};
  }

  return action(function (_a) {
    var complete = _a.complete,
        update = _a.update;
    var _b = props.velocity,
        velocity = _b === void 0 ? 0 : _b,
        _c = props.from,
        from = _c === void 0 ? 0 : _c,
        _d = props.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = props.timeConstant,
        timeConstant = _e === void 0 ? 350 : _e,
        _f = props.restDelta,
        restDelta = _f === void 0 ? 0.5 : _f,
        modifyTarget = props.modifyTarget;
    var elapsed = 0;
    var amplitude = power * velocity;
    var idealTarget = Math.round(from + amplitude);
    var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);

    var process = _framesync.default.update(function (_a) {
      var frameDelta = _a.delta;
      elapsed += frameDelta;
      var delta = -amplitude * Math.exp(-elapsed / timeConstant);
      var isMoving = delta > restDelta || delta < -restDelta;
      var current = isMoving ? target + delta : target;
      update(current);

      if (!isMoving) {
        _framesync.cancelSync.update(process);

        complete();
      }
    }, true);

    return {
      stop: function () {
        return _framesync.cancelSync.update(process);
      }
    };
  });
};

var vectorDecay =
/*#__PURE__*/
createVectorAction(decay, {
  from: styleValueTypes.number.test,
  modifyTarget: function (func) {
    return typeof func === 'function';
  },
  velocity: styleValueTypes.number.test
});
exports.decay = vectorDecay;

var frame = function () {
  return action(function (_a) {
    var update = _a.update;
    var initialTime = 0;

    var process = _framesync.default.update(function (_a) {
      var timestamp = _a.timestamp;
      if (!initialTime) initialTime = timestamp;
      update(timestamp - initialTime);
    }, true, true);

    return {
      stop: function () {
        return _framesync.cancelSync.update(process);
      }
    };
  });
};

exports.everyFrame = frame;

var scrubber = function (_a) {
  var _b = _a.from,
      from = _b === void 0 ? 0 : _b,
      _c = _a.to,
      to = _c === void 0 ? 1 : _c,
      _d = _a.ease,
      ease = _d === void 0 ? easing.linear : _d;
  return action(function (_a) {
    var update = _a.update;
    return {
      seek: function (progress$$1) {
        return update(progress$$1);
      }
    };
  }).pipe(ease, function (v) {
    return (0, _popcorn.mix)(from, to, v);
  });
};

var vectorScrubber =
/*#__PURE__*/
createVectorAction(scrubber, {
  ease: function (func) {
    return typeof func === 'function';
  },
  from: styleValueTypes.number.test,
  to: styleValueTypes.number.test
});
var clampProgress =
/*#__PURE__*/
(0, _popcorn.clamp)(0, 1);

var tween = function (props) {
  if (props === void 0) {
    props = {};
  }

  return action(function (_a) {
    var update = _a.update,
        complete = _a.complete;
    var _b = props.duration,
        duration = _b === void 0 ? 300 : _b,
        _c = props.ease,
        ease = _c === void 0 ? easing.easeOut : _c,
        _d = props.flip,
        flip = _d === void 0 ? 0 : _d,
        _e = props.loop,
        loop = _e === void 0 ? 0 : _e,
        _f = props.yoyo,
        yoyo = _f === void 0 ? 0 : _f;
    var _g = props.from,
        from = _g === void 0 ? 0 : _g,
        _h = props.to,
        to = _h === void 0 ? 1 : _h,
        _j = props.elapsed,
        elapsed = _j === void 0 ? 0 : _j,
        _k = props.playDirection,
        playDirection = _k === void 0 ? 1 : _k,
        _l = props.flipCount,
        flipCount = _l === void 0 ? 0 : _l,
        _m = props.yoyoCount,
        yoyoCount = _m === void 0 ? 0 : _m,
        _o = props.loopCount,
        loopCount = _o === void 0 ? 0 : _o;
    var playhead = vectorScrubber({
      from: from,
      to: to,
      ease: ease
    }).start(update);
    var currentProgress = 0;
    var process;
    var isActive = false;

    var reverseTween = function () {
      return playDirection *= -1;
    };

    var isTweenComplete = function () {
      var _a;

      var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
      if (!isComplete) return false;
      if (isComplete && !loop && !flip && !yoyo) return true;
      var isStepTaken = false;

      if (loop && loopCount < loop) {
        elapsed = 0;
        loopCount++;
        isStepTaken = true;
      } else if (flip && flipCount < flip) {
        elapsed = duration - elapsed;
        _a = [to, from], from = _a[0], to = _a[1];
        playhead = vectorScrubber({
          from: from,
          to: to,
          ease: ease
        }).start(update);
        flipCount++;
        isStepTaken = true;
      } else if (yoyo && yoyoCount < yoyo) {
        reverseTween();
        yoyoCount++;
        isStepTaken = true;
      }

      return !isStepTaken;
    };

    var updateTween = function () {
      currentProgress = clampProgress((0, _popcorn.progress)(0, duration, elapsed));
      playhead.seek(currentProgress);
    };

    var startTimer = function () {
      isActive = true;
      process = _framesync.default.update(function (_a) {
        var delta = _a.delta;
        elapsed += delta * playDirection;
        updateTween();

        if (isTweenComplete() && complete) {
          _framesync.cancelSync.update(process);

          _framesync.default.update(complete, false, true);
        }
      }, true);
    };

    var stopTimer = function () {
      isActive = false;
      if (process) _framesync.cancelSync.update(process);
    };

    startTimer();
    return {
      isActive: function () {
        return isActive;
      },
      getElapsed: function () {
        return (0, _popcorn.clamp)(0, duration, elapsed);
      },
      getProgress: function () {
        return currentProgress;
      },
      stop: function () {
        stopTimer();
      },
      pause: function () {
        stopTimer();
        return this;
      },
      resume: function () {
        if (!isActive) startTimer();
        return this;
      },
      seek: function (newProgress) {
        elapsed = (0, _popcorn.mix)(0, duration, newProgress);

        _framesync.default.update(updateTween, false, true);

        return this;
      },
      reverse: function () {
        reverseTween();
        return this;
      }
    };
  });
};

exports.tween = tween;
var clampProgress$1 =
/*#__PURE__*/
(0, _popcorn.clamp)(0, 1);

var defaultEasings = function (values, easing$$1) {
  return values.map(function () {
    return easing$$1 || easing.easeOut;
  }).splice(0, values.length - 1);
};

var defaultTimings = function (values) {
  var numValues = values.length;
  return values.map(function (value, i) {
    return i !== 0 ? i / (numValues - 1) : 0;
  });
};

var interpolateScrubbers = function (input, scrubbers, update) {
  var rangeLength = input.length;
  var finalInputIndex = rangeLength - 1;
  var finalScrubberIndex = finalInputIndex - 1;
  var subs = scrubbers.map(function (scrub) {
    return scrub.start(update);
  });
  return function (v) {
    if (v <= input[0]) {
      subs[0].seek(0);
    }

    if (v >= input[finalInputIndex]) {
      subs[finalScrubberIndex].seek(1);
    }

    var i = 1;

    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalInputIndex) break;
    }

    var progressInRange = (0, _popcorn.progress)(input[i - 1], input[i], v);
    subs[i - 1].seek(clampProgress$1(progressInRange));
  };
};

var keyframes = function (_a) {
  var easings = _a.easings,
      _b = _a.ease,
      ease = _b === void 0 ? easing.linear : _b,
      times = _a.times,
      values = _a.values,
      tweenProps = (0, _tslib.__rest)(_a, ["easings", "ease", "times", "values"]);
  easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
  times = times || defaultTimings(values);
  var scrubbers = easings.map(function (easing$$1, i) {
    return vectorScrubber({
      from: values[i],
      to: values[i + 1],
      ease: easing$$1
    });
  });
  return tween((0, _tslib.__assign)({}, tweenProps, {
    ease: ease
  })).applyMiddleware(function (update) {
    return interpolateScrubbers(times, scrubbers, update);
  });
};

exports.keyframes = keyframes;

var physics = function (props) {
  if (props === void 0) {
    props = {};
  }

  return action(function (_a) {
    var complete = _a.complete,
        update = _a.update;
    var _b = props.acceleration,
        acceleration = _b === void 0 ? 0 : _b,
        _c = props.friction,
        friction = _c === void 0 ? 0 : _c,
        _d = props.velocity,
        velocity = _d === void 0 ? 0 : _d,
        springStrength = props.springStrength,
        to = props.to;
    var _e = props.restSpeed,
        restSpeed = _e === void 0 ? 0.001 : _e,
        _f = props.from,
        from = _f === void 0 ? 0 : _f;
    var current = from;

    var process = _framesync.default.update(function (_a) {
      var delta = _a.delta;
      var elapsed = Math.max(delta, 16);
      if (acceleration) velocity += (0, _popcorn.velocityPerFrame)(acceleration, elapsed);
      if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);

      if (springStrength !== undefined && to !== undefined) {
        var distanceToTarget = to - current;
        velocity += distanceToTarget * (0, _popcorn.velocityPerFrame)(springStrength, elapsed);
      }

      current += (0, _popcorn.velocityPerFrame)(velocity, elapsed);
      update(current);
      var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);

      if (isComplete) {
        _framesync.cancelSync.update(process);

        complete();
      }
    }, true);

    return {
      set: function (v) {
        current = v;
        return this;
      },
      setAcceleration: function (v) {
        acceleration = v;
        return this;
      },
      setFriction: function (v) {
        friction = v;
        return this;
      },
      setSpringStrength: function (v) {
        springStrength = v;
        return this;
      },
      setSpringTarget: function (v) {
        to = v;
        return this;
      },
      setVelocity: function (v) {
        velocity = v;
        return this;
      },
      stop: function () {
        return _framesync.cancelSync.update(process);
      }
    };
  });
};

var vectorPhysics =
/*#__PURE__*/
createVectorAction(physics, {
  acceleration: styleValueTypes.number.test,
  friction: styleValueTypes.number.test,
  velocity: styleValueTypes.number.test,
  from: styleValueTypes.number.test,
  to: styleValueTypes.number.test,
  springStrength: styleValueTypes.number.test
});
exports.physics = vectorPhysics;

var spring = function (props) {
  if (props === void 0) {
    props = {};
  }

  return action(function (_a) {
    var update = _a.update,
        complete = _a.complete;
    var _b = props.velocity,
        velocity = _b === void 0 ? 0.0 : _b;
    var _c = props.from,
        from = _c === void 0 ? 0.0 : _c,
        _d = props.to,
        to = _d === void 0 ? 0.0 : _d,
        _e = props.stiffness,
        stiffness = _e === void 0 ? 100 : _e,
        _f = props.damping,
        damping = _f === void 0 ? 10 : _f,
        _g = props.mass,
        mass = _g === void 0 ? 1.0 : _g,
        _h = props.restSpeed,
        restSpeed = _h === void 0 ? 0.01 : _h,
        _j = props.restDelta,
        restDelta = _j === void 0 ? 0.01 : _j;
    var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
    var t = 0;
    var delta = to - from;
    var position = from;
    var prevPosition = position;

    var process = _framesync.default.update(function (_a) {
      var timeDelta = _a.delta;
      t += timeDelta;
      var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
      var angularFreq = Math.sqrt(stiffness / mass) / 1000;
      prevPosition = position;

      if (dampingRatio < 1) {
        var envelope = Math.exp(-dampingRatio * angularFreq * t);
        var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
        position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
      } else {
        var envelope = Math.exp(-angularFreq * t);
        position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
      }

      velocity = (0, _popcorn.velocityPerSecond)(position - prevPosition, timeDelta);
      var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
      var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;

      if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
        position = to;
        update(position);

        _framesync.cancelSync.update(process);

        complete();
      } else {
        update(position);
      }
    }, true);

    return {
      stop: function () {
        return _framesync.cancelSync.update(process);
      }
    };
  });
};

var vectorSpring =
/*#__PURE__*/
createVectorAction(spring, {
  from: styleValueTypes.number.test,
  to: styleValueTypes.number.test,
  stiffness: styleValueTypes.number.test,
  damping: styleValueTypes.number.test,
  mass: styleValueTypes.number.test,
  velocity: styleValueTypes.number.test
});
exports.spring = vectorSpring;
var DEFAULT_DURATION = 300;

var flattenTimings = function (instructions) {
  var flatInstructions = [];
  var lastArg = instructions[instructions.length - 1];
  var isStaggered = typeof lastArg === 'number';
  var staggerDelay = isStaggered ? lastArg : 0;
  var segments = isStaggered ? instructions.slice(0, -1) : instructions;
  var numSegments = segments.length;
  var offset = 0;
  segments.forEach(function (item, i) {
    flatInstructions.push(item);

    if (i !== numSegments - 1) {
      var duration = item.duration || DEFAULT_DURATION;
      offset += staggerDelay;
      flatInstructions.push("-" + (duration - offset));
    }
  });
  return flatInstructions;
};

var flattenArrayInstructions = function (instructions, instruction) {
  Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
  return instructions;
};

var convertDefToProps = function (props, def, i) {
  var duration = props.duration,
      easings = props.easings,
      times = props.times,
      values = props.values;
  var numValues = values.length;
  var prevTimeTo = times[numValues - 1];
  var timeFrom = def.at === 0 ? 0 : def.at / duration;
  var timeTo = (def.at + def.duration) / duration;

  if (i === 0) {
    values.push(def.from);
    times.push(timeFrom);
  } else {
    if (prevTimeTo !== timeFrom) {
      if (def.from !== undefined) {
        values.push(values[numValues - 1]);
        times.push(timeFrom);
        easings.push(easing.linear);
      }

      var from = def.from !== undefined ? def.from : values[numValues - 1];
      values.push(from);
      times.push(timeFrom);
      easings.push(easing.linear);
    } else if (def.from !== undefined) {
      values.push(def.from);
      times.push(timeFrom);
      easings.push(easing.linear);
    }
  }

  values.push(def.to);
  times.push(timeTo);
  easings.push(def.ease || easing.easeInOut);
  return props;
};

var timeline = function (instructions, _a) {
  var _b = _a === void 0 ? {} : _a,
      duration = _b.duration,
      elapsed = _b.elapsed,
      ease = _b.ease,
      loop = _b.loop,
      flip = _b.flip,
      yoyo = _b.yoyo;

  var playhead = 0;
  var calculatedDuration = 0;
  var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
  var animationDefs = [];
  flatInstructions.forEach(function (instruction) {
    if (typeof instruction === 'string') {
      playhead += parseFloat(instruction);
    } else if (typeof instruction === 'number') {
      playhead = instruction;
    } else {
      var def = (0, _tslib.__assign)({}, instruction, {
        at: playhead
      });
      def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
      animationDefs.push(def);
      playhead += def.duration;
      calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
    }
  });
  var tracks = {};
  var numDefs = animationDefs.length;

  for (var i = 0; i < numDefs; i++) {
    var def = animationDefs[i];
    var track = def.track;

    if (track === undefined) {
      throw new Error('No track defined');
    }

    if (!tracks.hasOwnProperty(track)) tracks[track] = [];
    tracks[track].push(def);
  }

  var trackKeyframes = {};

  for (var key in tracks) {
    if (tracks.hasOwnProperty(key)) {
      var keyframeProps = tracks[key].reduce(convertDefToProps, {
        duration: calculatedDuration,
        easings: [],
        times: [],
        values: []
      });
      trackKeyframes[key] = keyframes((0, _tslib.__assign)({}, keyframeProps, {
        duration: duration || calculatedDuration,
        ease: ease,
        elapsed: elapsed,
        loop: loop,
        yoyo: yoyo,
        flip: flip
      }));
    }
  }

  return composite(trackKeyframes);
};

exports.timeline = timeline;

var listen = function (element, events, options) {
  return action(function (_a) {
    var update = _a.update;
    var eventNames = events.split(' ').map(function (eventName) {
      element.addEventListener(eventName, update, options);
      return eventName;
    });
    return {
      stop: function () {
        return eventNames.forEach(function (eventName) {
          return element.removeEventListener(eventName, update, options);
        });
      }
    };
  });
};

exports.listen = listen;

var defaultPointerPos = function () {
  return {
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    x: 0,
    y: 0
  };
};

var eventToPoint = function (e, point) {
  if (point === void 0) {
    point = defaultPointerPos();
  }

  point.clientX = point.x = e.clientX;
  point.clientY = point.y = e.clientY;
  point.pageX = e.pageX;
  point.pageY = e.pageY;
  return point;
};

var points = [
/*#__PURE__*/
defaultPointerPos()];
var isTouchDevice = false;

if (typeof document !== 'undefined') {
  var updatePointsLocation = function (_a) {
    var touches = _a.touches;
    isTouchDevice = true;
    var numTouches = touches.length;
    points.length = 0;

    for (var i = 0; i < numTouches; i++) {
      var thisTouch = touches[i];
      points.push(eventToPoint(thisTouch));
    }
  };

  listen(document, 'touchstart touchmove', {
    passive: true,
    capture: true
  }).start(updatePointsLocation);
}

var multitouch = function (_a) {
  var _b = _a === void 0 ? {} : _a,
      _c = _b.preventDefault,
      preventDefault = _c === void 0 ? true : _c,
      _d = _b.scale,
      scale = _d === void 0 ? 1.0 : _d,
      _e = _b.rotate,
      rotate = _e === void 0 ? 0.0 : _e;

  return action(function (_a) {
    var update = _a.update;
    var output = {
      touches: points,
      scale: scale,
      rotate: rotate
    };
    var initialDistance = 0.0;
    var initialRotation = 0.0;
    var isGesture = points.length > 1;

    if (isGesture) {
      var firstTouch = points[0],
          secondTouch = points[1];
      initialDistance = (0, _popcorn.distance)(firstTouch, secondTouch);
      initialRotation = (0, _popcorn.angle)(firstTouch, secondTouch);
    }

    var updatePoint = function () {
      if (isGesture) {
        var firstTouch = points[0],
            secondTouch = points[1];
        var newDistance = (0, _popcorn.distance)(firstTouch, secondTouch);
        var newRotation = (0, _popcorn.angle)(firstTouch, secondTouch);
        output.scale = scale * (newDistance / initialDistance);
        output.rotate = rotate + (newRotation - initialRotation);
      }

      update(output);
    };

    var onMove = function (e) {
      if (preventDefault || e.touches.length > 1) e.preventDefault();

      _framesync.default.update(updatePoint);
    };

    var updateOnMove = listen(document, 'touchmove', {
      passive: !preventDefault
    }).start(onMove);
    if (isTouchDevice) _framesync.default.update(updatePoint);
    return {
      stop: function () {
        _framesync.cancelSync.update(updatePoint);

        updateOnMove.stop();
      }
    };
  });
};

exports.multitouch = multitouch;

var getIsTouchDevice = function () {
  return isTouchDevice;
};

var point =
/*#__PURE__*/
defaultPointerPos();
var isMouseDevice = false;

if (typeof document !== 'undefined') {
  var updatePointLocation = function (e) {
    isMouseDevice = true;
    eventToPoint(e, point);
  };

  listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}

var mouse = function (_a) {
  var _b = (_a === void 0 ? {} : _a).preventDefault,
      preventDefault = _b === void 0 ? true : _b;
  return action(function (_a) {
    var update = _a.update;

    var updatePoint = function () {
      return update(point);
    };

    var onMove = function (e) {
      if (preventDefault) e.preventDefault();

      _framesync.default.update(updatePoint);
    };

    var updateOnMove = listen(document, 'mousemove').start(onMove);
    if (isMouseDevice) _framesync.default.update(updatePoint);
    return {
      stop: function () {
        _framesync.cancelSync.update(updatePoint);

        updateOnMove.stop();
      }
    };
  });
};

exports.mouse = mouse;

var getFirstTouch = function (_a) {
  var firstTouch = _a[0];
  return firstTouch;
};

var pointer = function (props) {
  if (props === void 0) {
    props = {};
  }

  return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
    var touches = _a.touches;
    return touches;
  }, getFirstTouch) : mouse(props);
};

var index = function (_a) {
  if (_a === void 0) {
    _a = {};
  }

  var x = _a.x,
      y = _a.y,
      props = (0, _tslib.__rest)(_a, ["x", "y"]);

  if (x !== undefined || y !== undefined) {
    var applyXOffset_1 = (0, _popcorn.applyOffset)(x || 0);
    var applyYOffset_1 = (0, _popcorn.applyOffset)(y || 0);
    var delta_1 = {
      x: 0,
      y: 0
    };
    return pointer(props).pipe(function (point) {
      delta_1.x = applyXOffset_1(point.x);
      delta_1.y = applyYOffset_1(point.y);
      return delta_1;
    });
  } else {
    return pointer(props);
  }
};

exports.pointer = index;

var chain = function () {
  var actions = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    actions[_i] = arguments[_i];
  }

  return action(function (_a) {
    var update = _a.update,
        complete = _a.complete;
    var i = 0;
    var current;

    var playCurrent = function () {
      current = actions[i].start({
        complete: function () {
          i++;
          i >= actions.length ? complete() : playCurrent();
        },
        update: update
      });
    };

    playCurrent();
    return {
      stop: function () {
        return current && current.stop();
      }
    };
  });
};

exports.chain = chain;

var crossfade = function (a, b) {
  return action(function (observer) {
    var balance = 0;
    var fadable = parallel$1(a, b).start((0, _tslib.__assign)({}, observer, {
      update: function (_a) {
        var va = _a[0],
            vb = _a[1];
        observer.update((0, _popcorn.mix)(va, vb, balance));
      }
    }));
    return {
      setBalance: function (v) {
        return balance = v;
      },
      stop: function () {
        return fadable.stop();
      }
    };
  });
};

exports.crossfade = crossfade;

var delay = function (timeToDelay) {
  return action(function (_a) {
    var complete = _a.complete;
    var timeout = setTimeout(complete, timeToDelay);
    return {
      stop: function () {
        return clearTimeout(timeout);
      }
    };
  });
};

exports.delay = delay;

var merge = function () {
  var actions = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    actions[_i] = arguments[_i];
  }

  return action(function (observer) {
    var subs = actions.map(function (thisAction) {
      return thisAction.start(observer);
    });
    return {
      stop: function () {
        return subs.forEach(function (sub) {
          return sub.stop();
        });
      }
    };
  });
};

exports.merge = merge;

var schedule = function (scheduler, schedulee) {
  return action(function (_a) {
    var update = _a.update,
        complete = _a.complete;
    var latest;
    var schedulerSub = scheduler.start({
      update: function () {
        return latest !== undefined && update(latest);
      },
      complete: complete
    });
    var scheduleeSub = schedulee.start({
      update: function (v) {
        return latest = v;
      },
      complete: complete
    });
    return {
      stop: function () {
        schedulerSub.stop();
        scheduleeSub.stop();
      }
    };
  });
};

exports.schedule = schedule;

var stagger = function (actions, interval) {
  var intervalIsNumber = typeof interval === 'number';
  var actionsWithDelay = actions.map(function (a, i) {
    var timeToDelay = intervalIsNumber ? interval * i : interval(i);
    return chain(delay(timeToDelay), a);
  });
  return parallel$1.apply(void 0, actionsWithDelay);
};

exports.stagger = stagger;

var appendUnit = function (unit) {
  return function (v) {
    return "" + v + unit;
  };
};

var steps = function (st, min, max) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 1;
  }

  return function (v) {
    var current = (0, _popcorn.progress)(min, max, v);
    return (0, _popcorn.mix)(min, max, stepProgress(st, current));
  };
};

var transformMap = function (childTransformers) {
  return function (v) {
    var output = (0, _tslib.__assign)({}, v);

    for (var key in childTransformers) {
      if (childTransformers.hasOwnProperty(key)) {
        var childTransformer = childTransformers[key];
        output[key] = childTransformer(v[key]);
      }
    }

    return output;
  };
};

var transformers =
/*#__PURE__*/
Object.freeze({
  applyOffset: _popcorn.applyOffset,
  clamp: _popcorn.clamp,
  conditional: _popcorn.conditional,
  interpolate: _popcorn.interpolate,
  blendArray: _popcorn.mixArray,
  blendColor: _popcorn.mixColor,
  pipe: _popcorn.pipe,
  smooth: _popcorn.smooth,
  snap: _popcorn.snap,
  generateStaticSpring: _popcorn.springForce,
  nonlinearSpring: _popcorn.springForceExpo,
  linearSpring: _popcorn.springForceLinear,
  wrap: _popcorn.wrap,
  appendUnit: appendUnit,
  steps: steps,
  transformMap: transformMap
});
exports.transform = transformers;

var css = function (element, props) {
  (0, _heyListen.warning)(false, 'css() is deprecated, use styler instead');
  return (0, _stylefire.default)(element, props);
};

exports.css = css;

var svg = function (element, props) {
  (0, _heyListen.warning)(false, 'svg() is deprecated, use styler instead');
  return (0, _stylefire.default)(element, props);
};

exports.svg = svg;
},{"tslib":"node_modules/tslib/tslib.es6.js","@popmotion/popcorn":"node_modules/@popmotion/popcorn/dist/popcorn.es.js","framesync":"node_modules/framesync/dist/framesync.es.js","style-value-types":"node_modules/style-value-types/dist/style-value-types.es.js","hey-listen":"node_modules/hey-listen/dist/hey-listen.es.js","@popmotion/easing":"node_modules/@popmotion/easing/dist/easing.es.js","stylefire":"node_modules/stylefire/dist/stylefire.es.js","process":"../../../AppData/Local/Yarn/Data/global/node_modules/process/browser.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _popmotion = require("popmotion");

console.log(_popmotion.tween);
},{"popmotion":"node_modules/popmotion/dist/popmotion.es.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55220" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/one-zero.e31bb0bc.map