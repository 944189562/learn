var __webpack_modules__ = ({
  "./src/js/formate.js": function (module) {
    const dateFormate = (date) => {
      return '2022-04-12'
    }

    module.exports = {
      dateFormate
    }
  },
  "./src/js/math.js": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    "use strict";
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
});

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

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  return module.exports;
}

/* webpack/runtime/compat get default export */
// 判断module是否为esm模块
__webpack_require__.n = function (module) {
  var getter = module && module.__esModule ?
    function () {
      return module['default'];
    } :
    function () {
      return module;
    };
  __webpack_require__.d(getter, {a: getter});
  return getter;
};

/* webpack/runtime/define property getters */
// define getter functions for harmony exports
__webpack_require__.d = function (exports, definition) {
  for (var key in definition) {
    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
      Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
    }
  }
};

/* webpack/runtime/hasOwnProperty shorthand */
__webpack_require__.o = function (obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* webpack/runtime/make namespace object */
// define __esModule on exports
__webpack_require__.r = function (exports) {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
  }
  Object.defineProperty(exports, '__esModule', {value: true});
};

/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function () {
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  var _js_formate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/formate.js");
  var _js_formate__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_js_formate__WEBPACK_IMPORTED_MODULE_0__);
// es module 导出内容，cjs 导入
  const math = __webpack_require__("./src/js/math.js")

// cjs 导出，esm 导入

  console.log(math.sum(1, 2))
  console.log(_js_formate__WEBPACK_IMPORTED_MODULE_0___default().dateFormate())
}();
