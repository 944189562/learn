define(['exports'], (function (exports) { 'use strict';

  const foo = (message) => {
    console.log(message);
  };

  const message = "Hello rollup";

  foo(message);

  exports.foo = foo;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
