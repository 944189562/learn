// 打开数据库建立连接
const dbRequest = indexedDB.open('jz')
let db = null
dbRequest.onsuccess = function (event) {
  console.log('success')
  db = event.target.result
}

dbRequest.onerror = function (err) {
  console.log('数据库连接失败')
}

// 第一次打开或版本发生更新
dbRequest.onupgradeneeded = function (event) {
  // 创建一些存储对象
  db.createObjectStore('users', {
    // 主键
    keyPath: 'id'
  })
}

class User {
  constructor(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
  }
}

const users = [
  new User(100, 'jz', 18),
  new User(101, 'kobe', 40),
  new User(102, 'james', 30)
]

const btns = document.querySelectorAll('button')
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    const transaction = db.transaction('users', 'readwrite')
    const store = transaction.objectStore('users')
    switch (i) {
      case 0:
        // 新增
        for (let user of users) {
          const request = store.add(user)
          request.onsuccess = function () {
            console.log(`${user.name} 插入成功`)
          }
        }
        break
      case 1:
        // search
        // 1. 查询方式一
        // const request = store.get(100)
        // request.onsuccess = function (evt) {
        //   console.log(evt.target.result)
        // }
        // 2. 查询方式二
        const request = store.openCursor()
        request.onsuccess = function (evt) {
          const cursor = evt.target.result
          if (cursor) {
            if (cursor.key === 102) {
              console.log(cursor.key, cursor.value)
            } else {
              cursor.continue()
            }
          } else {
            console.log('查询完成')
          }
        }
        break
      case 2:
        // delete
        const deleteRequest = store.openCursor()
        deleteRequest.onsuccess = function (evt) {
          const cursor = evt.target.result
          if (cursor) {
            if (cursor.key === 101) {
              cursor.delete()
            } else {
              cursor.continue()
            }
          } else {
            console.log("查询完成")
          }
        }
        break
      case 3:
        // update
        const updateRequest = store.openCursor()
        updateRequest.onsuccess = function (evt) {
          const cursor = evt.target.result
          if (cursor) {
            if (cursor.key === 102) {
              const value = cursor.value
              value.name = 'curry'
              cursor.update(value)
            } else {
              cursor.continue()
            }
          } else {
            console.log('查询完成')
          }
        }
        break
    }
  }
}
