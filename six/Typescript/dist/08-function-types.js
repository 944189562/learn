"use strict";
// 函数类型
Object.defineProperty(exports, "__esModule", { value: true });
// 函数声明
function func1(a, b, c) {
    if (b === void 0) { b = 10; }
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    return 'func1';
}
func1(100);
// 函数表达式
var func2 = function (a, b) {
    return 'func2';
};
//# sourceMappingURL=08-function-types.js.map