"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类型
// 类型声明
let str = 'Hello TypeScript!';
let age = 18; // 类型
let isBoolean = true;
let _null = null;
let _undefined = undefined;
age = '18';
// never 类型表示那些永远不存在的值类型
// any 该属性可以是任意类型
let arg = 'abc';
arg = false;
arg = null;
arg = undefined;
arg = [1, 2, 3];
// 默认类型为设置的值的类型
let arg1 = true;
// arg1 = 1
exports.default = {}; // 闭包
