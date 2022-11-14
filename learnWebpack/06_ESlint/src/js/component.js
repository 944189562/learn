import '../css/index.css'
import '../css/component.less'
import zznh from '../img/zznh.png'

function component() {
  const el = document.createElement('div')
  el.innerHTML = ['hello', 'world'].join(' ')
  el.className = 'content'

  const imgEl = new Image()
  // 通过require加载资源
  // imgEl.src = require('../img/zznh.png').default
  imgEl.src = zznh
  el.append(imgEl)

  // 设置背景
  const bgEl = document.createElement('div')
  bgEl.style.width = 200 + 'px'
  bgEl.style.height = 200 + 'px'
  bgEl.className = 'bg-img'
  bgEl.style.backgroundColor = 'red'
  el.append(bgEl)

  // 创建一个i元素，设置字体
  const iEl = document.createElement('i')
  iEl.className = 'iconfont icon-caps-lock'
  el.append(iEl)

  return el
}

document.body.append(component())