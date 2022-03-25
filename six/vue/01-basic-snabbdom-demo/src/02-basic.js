import { h, init } from 'snabbdom'

let patch = init([])

let vnode = h('div#container', [
  h('h1', 'Hello Snabbdom'),
  h('p', 'p标签')
])

let app = document.querySelector('#app')

let oldVnode = patch(app, vnode)

setTimeout(() => {
  vnode = h('div#container', [
    h('h1', 'Hello World'),
    h('p', 'the p标签')
  ])

  patch(oldVnode, vnode)

  // 清空页面内容 生成注释节点
  patch(oldVnode, h('!'))
}, 2000)