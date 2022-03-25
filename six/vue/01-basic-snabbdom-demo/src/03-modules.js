import { h, init, styleModule, eventListenersModule  } from 'snabbdom'
// 1. 导入模块
// 2. 注册模块
let patch = init([
  styleModule,
  eventListenersModule
])
// 3. 使用 h() 函数的第二个参数对象
let vnode = h('div', {
  style: {
    backgroundColor: 'red'
  },
  on: {
    click: handler
  }
}, [
  h('h1', 'hello h1'),
  h('p', 'hello p')
])

function handler() {
  console.log('hello world')
}

let app = document.querySelector('#app')

patch(app, vnode)