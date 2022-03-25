import { h, init } from 'snabbdom'

// 1. hello world
// 返回值：patch函数，作用对比两个vnode的差异更新到真实DOM
let patch = init([])

// 第一个参数：标签+选择器
// 第二个参数：如果是字符串就是内容
let vnode = h('div#container.cls', 'Hello World')

let app = document.querySelector('#app')
// 第一个参数：可以使DOM元素，内部会把DOM元素转化成VNODE
// 第二个参数：VNode
// 返回值VNode
let oldVnode = patch(app, vnode)

// 新旧差异
vnode = h('div', 'Hello Vnode')

patch(oldVnode, vnode)