#!/usr/bin/env node

// Node CLI 应用入口文件必须要有这样的文件头
// 如果是 Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

// 脚手架的工作过程：
// 1. 通过命令行交互询问用户问题
// 2. 根据用户回答的结果生成文件
// console.log('cli working!')

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs = require('ejs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Project name?'
    }
]).then(answer => {
    // console.log(answer)
    // 根据用户输入生成文件

    // 模板路径
    const tmlDir = path.join(__dirname, 'templates')

    // 目标路径
    const outDir = process.cwd()

    // 将模板下的文件全部转换到目标路径
    fs.readdir(tmlDir, (err, files) => {
        if (err) throw err
        // console.log(file)
        // 通过模板引擎渲染文件
        files.forEach(file => {
            ejs.renderFile(path.join(tmlDir, file), answer, (err, result) => {
                if (err) throw err
                // console.log(result)
                fs.writeFileSync(path.join(outDir, file), result)
            })
        })
    })
})
