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
})({"src/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMain = void 0;

var _main = _interopRequireDefault(require("../main.html"));

var _popmotion = require("popmotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isButtonsOn = [false, false, false, false, false];
var buttonListener;

var setMain = function setMain() {
  var main = document.querySelector('.main-scene');
  main.style.display = 'flex';
  main.innerHTML = _main.default;
  var buttons = document.querySelector('.buttons');
  buttonListener = (0, _popmotion.listen)(buttons, 'click').start(buttonClickHandler);
  setHint();
};

exports.setMain = setMain;

function buttonClickHandler(e) {
  var id;

  try {
    id = e.target.closest('.button').id;
  } catch (_unused) {
    return;
  }

  switch (id) {
    case 'button1':
      isButtonsOn[1] = !isButtonsOn[1];
      isButtonsOn[2] = !isButtonsOn[2];
      break;

    case 'button2':
      isButtonsOn[1] = !isButtonsOn[1];
      isButtonsOn[4] = !isButtonsOn[4];
      break;

    case 'button3':
      isButtonsOn[0] = !isButtonsOn[0];
      isButtonsOn[2] = !isButtonsOn[2];
      isButtonsOn[4] = !isButtonsOn[4];
      break;

    case 'button4':
      isButtonsOn[1] = !isButtonsOn[1];
      isButtonsOn[3] = !isButtonsOn[3];
      isButtonsOn[4] = !isButtonsOn[4];
      break;

    case 'button5':
      isButtonsOn[0] = !isButtonsOn[0];
      isButtonsOn[4] = !isButtonsOn[4];
      isButtonsOn[3] = !isButtonsOn[3];
      break;

    default:
      return;
  }

  var bulbs = document.querySelectorAll('.bulb');
  isButtonsOn.forEach(function (on, index) {
    bulbs[index].style.opacity = on ? 1 : 0.1;
  });
  setLight();
}

function setLight() {
  var room = document.querySelector('.test');

  switch (isButtonsOn.filter(function (on) {
    return on;
  }).length) {
    case 5:
      room.style['-webkit-mask-image'] = 'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1) 100%)';
      var capoo = document.querySelector('.capoo');
      capoo.style['pointer-events'] = 'all';
      buttonListener.stop();

      capoo.querySelector('img').onclick = function () {
        return alert('恭喜你成功惹，請用截圖換獎品XD');
      };

      break;

    case 4:
      room.style['-webkit-mask-image'] = 'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.64) 0%, rgba(0,0,0,1) 36%)';
      break;

    case 3:
      room.style['-webkit-mask-image'] = 'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,1) 28%)';
      break;

    case 2:
      room.style['-webkit-mask-image'] = 'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 20%)';
      break;

    case 1:
      room.style['-webkit-mask-image'] = 'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,1) 12%)';
      break;

    default:
      room.style['-webkit-mask-image'] = 'radial-gradient(circle at 50% 10%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,1) 5%)';
  }
}

function setHint() {
  var hintStyler = (0, _popmotion.styler)(document.querySelector('.hint'));
  (0, _popmotion.timeline)(['600', [{
    track: 'skewX',
    from: '0deg',
    to: '-20deg',
    duration: 100
  }, {
    track: 'x',
    from: 0,
    to: -window.innerWidth,
    duration: 2000
  }], '-300', {
    track: 'skewX',
    from: '-20deg',
    to: '10deg',
    duration: 200
  }, {
    track: 'skewX',
    from: '10deg',
    to: '0deg',
    duration: 100
  }, '500', [{
    track: 'skewX',
    from: '0deg',
    to: '-20deg',
    duration: 500
  }, {
    track: 'x',
    from: -window.innerWidth,
    to: -window.innerWidth * 2,
    duration: 2000
  }]]).start(hintStyler.set);
}
},{"../main.html":"main.html","popmotion":"node_modules/popmotion/dist/popmotion.es.js"}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42863" + '/');

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
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/main.1e43358e.map