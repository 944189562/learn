(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.zypUtils = {}));
})(this, (function (exports) { 'use strict';

  function format(date) {
    return date
  }

  const foo = (message) => {
    console.log(message);
  };

  const message = "Hello rollup";

  foo(message);
  console.log(format('2022/07/01'));

  exports.foo = foo;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
