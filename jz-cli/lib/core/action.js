const {promisify} = require('util')
const path = require('path')

const download = promisify(require('download-git-repo'))

const {vueGitRepo} = require('../config/repo-config')
const {spawn} = require('../utils/terminal')
const {
  compiler,
  writeToFile,
  createDirSync,
  compilerAndWriteToFile
} = require('../utils/file')
const {resolveDir} = require('../utils/utils')

const createProjectAction = async name => {
  // 1. 下载模板
  console.log('jz-cli helps you create you project~')
  await download(vueGitRepo, name, {clone: true})
  // 2. 安装依赖
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await spawn(npmCmd, ['install'], {cwd: `./${name}`})
  // 3. 启动项目
  await spawn(npmCmd, ['run', 'serve'], {cwd: `./${name}`})
}

const addComponentAction = async (name, dest) => {
  // 1. 编译模板
  // const templatePath = path.resolve(__dirname, '../templates/vue-component.ejs')
  // const data = {name, lowerName: name.toLowerCase()}
  // const result = await compiler(templatePath, data)
  // // 2. 输出文件
  // if (createDirSync(dest)) {
  //   const targetDest = path.resolve(dest, `${name}.vue`)
  //   await writeToFile(targetDest, result)
  // }

  // 模板编译和写入文件进行封装
  const templatePath = path.resolve(__dirname, '../templates/vue-component.ejs')
  const data = {name, lowerName: name.toLowerCase()}
  await compilerAndWriteToFile(templatePath, `${name}.vue`, data, dest)
}

const addPageAction = async (name, dest) => {
  const templatePath = path.resolve(__dirname, '../templates/vue-component.ejs')
  const templateRouterPath = resolveDir(__dirname, '../templates/vue-router.ejs')
  const data = {name, lowerName: name.toLowerCase()}

  await compilerAndWriteToFile(templatePath, `${name}.vue`, data, dest)
  await compilerAndWriteToFile(templateRouterPath, 'route.js', data, dest)
}

const addStoreAction = async (name, dest) => {
  const templatePath = path.resolve(__dirname, '../templates/vue-store.ejs')
  const templateRouterPath = resolveDir(__dirname, '../templates/vue-types.ejs')
  const data = {name, lowerName: name.toLowerCase()}

  await compilerAndWriteToFile(templatePath, 'index.js', data, dest)
  await compilerAndWriteToFile(templateRouterPath, 'types.js', data, dest)
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAction,
  addStoreAction
}