var __webpack_modules__ = ({
  "./src/js/formate.js": function (module) {
    const dateFormate = (date) => {
      return '2022-04-12'
    }

    module.exports = {
      dateFormate
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
    // no module.id needed
    // no module.loaded needed
    exports: {}
  };

  // Execute the module function
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // Return the exports of the module
  return module.exports;
}

var __webpack_exports__ = {};
// 立即执行函数
!function () {
  const {dateFormate} = __webpack_require__("./src/js/formate.js")
  console.log(dateFormate())
}();
