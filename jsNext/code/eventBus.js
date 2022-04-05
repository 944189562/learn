class JZEventBus {
  constructor() {
    this.eventBus = {}
  }

  on(eventName, eventCb, thisArg) {
    let handles = this.eventBus[eventName]
    if (!handles) {
      handles = []
      this.eventBus[eventName] = handles
    }
    handles.push({
      eventCb,
      thisArg
    })
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => handler.eventCb.apply(handler.thisArg, payload))
  }

  off(eventName, eventCb) {
    let handlers = this.eventBus[eventName]
    const newHandlers = [...handlers]
    for (const handler of newHandlers) {
      if (handler.eventCb === eventCb) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }
  }
}

const eventBus = new JZEventBus()

// index.js
eventBus.on("abc", function () {
  console.log("监听abc1", this)
}, {name: "jz"})

const handleCallback = function () {
  console.log("监听abc2", this)
}
eventBus.on("abc", handleCallback, {name: "jz"})

// utils.js
eventBus.emit("abc", 123)

// 移除监听
eventBus.off("abc", handleCallback)
eventBus.emit("abc", 123)