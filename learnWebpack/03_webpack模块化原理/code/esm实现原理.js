// 依赖模块
var __webpack_modules__ = ({
  "./src/js/math.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
      "sum": function () {
        return sum;
      }
    });

    function sum(a, b) {
      return a + b;
    }
  }
})

// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {
  // Check if module is in cache
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  // Create a new module (and put it into the cache)
  var module = __webpack_module_cache__[moduleId] = {
    exports: {}
  };

  // Execute the module function
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // Return the exports of the module
  return module.exports;
}

// exports 对象设置新属性key
__webpack_require__.d = function (exports, definition) {
  for (var key in definition) {
    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
      Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
    }
  }
};

// 判断prop属性是否属于obj
__webpack_require__.o = function (obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// 标记exports.__esModule = true
__webpack_require__.r = function (exports) {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
  }
  Object.defineProperty(exports, '__esModule', {value: true});
};

var __webpack_exports__ = {};

__webpack_require__.r(__webpack_exports__);
var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");
console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(1, 2))
