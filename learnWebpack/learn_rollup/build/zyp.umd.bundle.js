(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.zypUtils = {}));
})(this, (function (exports) { 'use strict';

  const foo = (message) => {
    console.log(message);
  };

  const message = "Hello rollup";

  foo(message);

  exports.foo = foo;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
