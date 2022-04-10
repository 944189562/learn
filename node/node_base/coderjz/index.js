#!/usr/bin/env node

const {program} = require('commander');

const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

// 查看版本号
program.version(require('./package.json').version)

// 自定义help和可选信息
helpOptions()
createCommands()

program.parse()