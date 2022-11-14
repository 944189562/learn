"use strict";

/**
 * Expose compositor.
 */

module.exports = compose;

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError("Middleware stack must be an array!");
  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions!");
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);

    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        // return new Promise(resolve => {
        //   const next = dispatch.bind(null, i + 1)
        //   const result = fn(context, next)
        //   resolve(result)
        // })
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

const getData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("得到数据"), 2000);
  });

const middleware1 = async (ctx, next) => {
  (ctx.body += "a+"), console.log(ctx.body);
  await getData();
  next();
  ctx.body += "a-";
  console.log(ctx.body);
};

const middleware2 = (ctx, next) => {
  ctx.body += "b+";
  next();
  ctx.body += "b-";
};

const middleware3 = (ctx, next) => {
  (ctx.body += "c+"), next();
  ctx.body += "c-";
};

const obj = {
  body: "",
};

// compose([middleware1, middleware2, middleware3])(obj);

Promise.resolve(middleware1(obj, () => {}));
