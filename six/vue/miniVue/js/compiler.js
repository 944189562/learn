class Compiler {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm

    this.compile(this.el)
  }

  // 编译模板，处理文本节点和元素节点
  compile(el) {
    // 遍历el中的所有节点
    let childNodes = el.childNodes // 伪数组
    Array.from(childNodes).forEach(node => {
      if (this.isTextNode(node)) {
        // 处理文本节点
        this.compileText(node)
      }
      if (this.isElementNode(node)) {
        // 处理元素节点
        this.compileElement(node)
      }

      // node 有子节点，递归调用compile
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  // 编译元素节点，处理指令
  compileElement(node) {
    // console.log(node.attributes)
    // 遍历所有属性节点
    Array.from(node.attributes).forEach(attr => {
      let attrName = attr.name
      // 判断是否为指令
      if (this.isDirective(attrName)) {
        // v-text => text
        attrName = attrName.substr(2)
        let key = attr.value
        this.update(node, key, attrName)
      }
    })
  }

  update(node, key, attrName) {
    const updateFn = this[attrName + 'Updater']
    updateFn && updateFn.call(this, node, this.vm[key], key)
  }

  // 处理 v-text 指令
  textUpdater(node, value, key) {
    node.textContent = value
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue
    })
  }

  // 处理 v-model 指令 表单元素
  modelUpdater(node, value, key) {
    node.value = value
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue
    })
    // 双向绑定
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }

  // 编译文本节点，处理差值表达式
  compileText(node) {
    // console.dir(node)
    // {{  msg }} 花括号包裹 中间值有空格
    const reg = /\{\{(.+?)\}\}/
    const value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
      new Watcher(this.vm, key, (newValue) => {
        node.textContent = value.replace(reg, newValue)
      })
    }
  }

  // 判断元素属性是否为指令
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }

  // 判断节点是否为文本节点
  isTextNode(node) {
    return node.nodeType === 3
  }

  // 判断节点是否为元素节点
  isElementNode(node) {
    return node.nodeType === 1
  }
}