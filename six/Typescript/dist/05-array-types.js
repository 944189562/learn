"use strict";
// 数组类型
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, cur) { return prev + cur; }, 0);
}
sum.apply(void 0, arr1);
//# sourceMappingURL=05-array-types.js.map