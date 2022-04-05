class JZCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage

  }

  setItem(key, value) {
    // 判断value类型,
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    if (value) {
      value = JSON.stringify(value)
      return value
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}

const localCache = new JZCache()
const sessionCache = new JZCache(false)

export {
  localCache,
  sessionCache
}

