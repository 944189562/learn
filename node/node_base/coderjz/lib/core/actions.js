const {promisify} = require('util')
const path = require('path')

// promisify 把 download 异步回调转成 promise
const download = promisify(require('download-git-repo'))
const open = require('open')

const {vueRepo} = require('../config/repo-config')
const {spawn} = require('../utils/terminal')
const {compile, writeFileSync, createDirSync} = require('../utils/utils')
const {hint, warning, error} = require('../utils/log')

// promise.then也有嵌套，async 转成同步
const createProjectAction = async project => {
  // 控制台输出颜色变化差价 chalk
  hint('coderjz helps you create you project~')
  // 1. clone temp
  await download(vueRepo, project, {clone: true})

  // 2. 执行 npm install
  // 在windows下npm的执行名不同，windows 执行 node.cmd
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await spawn(command, ['install'], {cwd: `./${project}`})

  // 3. 运行 npm run serve
  // 这里使用 await 子进程不会结束，胡阻塞后续 open 的执行
  spawn(command, ['run', 'serve'], {cwd: `./${project}`})

  // 4. 打开浏览器
  open('http://localhost:8080')
}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 2. 编译 ejs 模板 返回result
  const templatePath = 'vue-component.ejs'
  const data = {name, lowerName: name.toLowerCase()}
  const result = await compile(templatePath, data)

  // 3. result 写入 .vue 文件, 放到对应文件夹下
  // 判断当前路径是否存在，不存在，递归创建文件夹
  if (createDirSync(dest)) {
    const targetPath = path.resolve(dest, `${name}.vue`)
    await writeFileSync(targetPath, result)
  }
}

// 添加页面
const addPageAction = async (name, dest) => {
  const templatePageName = 'vue-component.ejs'
  const templateRouterName = 'vue-router.ejs'
  const data = {name, lowerName: name.toLowerCase()}

  const resultPage = await compile(templatePageName, data)
  const resultRouter = await compile(templateRouterName, data)

  const targetDest = path.resolve(dest, name.toLowerCase())
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.vue`)
    await writeFileSync(targetPagePath, resultPage)
    const targetRouterPath = path.resolve(targetDest, 'router.js')
    await writeFileSync(targetRouterPath, resultRouter)
  }
}

// 添加store
const addStoreAction = async (name, dest) => {
  const templateStoreName = 'vue-store.ejs'
  const templateTypesName = 'vue-types.ejs'

  const resultStore = await compile(templateStoreName, {})
  const resultTypes = await compile(templateTypesName, {})
  const targetDest = path.resolve(dest, name.toLowerCase())

  if (createDirSync(targetDest)) {
    const targetStorePath = path.resolve(targetDest, 'index.js')
    const targetTypesPath = path.resolve(targetDest, 'types.js')

    await writeFileSync(targetStorePath, resultStore)
    await writeFileSync(targetTypesPath, resultTypes)
  }
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAction,
  addStoreAction
}