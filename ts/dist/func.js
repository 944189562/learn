'use strict'
// 函数没有返回数据的类型 void
function test() {
  console.log('test')
}
test()
// 返回 never 的函数必须存在无法达到的终点
function error(message) {
  throw new Error(message)
}
function test1(name) {}
function test2(name, age) {
  return `${name} age => ${age}`
}

let myAdd: (x: number, y: number) => number = function (
  x: Number,
  y: number
): number {
  return x + y
}

let myAdd1: (baseValue: Number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y
}
