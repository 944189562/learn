# 组件封装

## 1. 处理边界值
1. $root 小型项目，方便维护
2. $parent 嵌套层级深，难以维护
3. $children 获取数组，对应组件
4. $refs 访问组件实例获取或子元素
5. provide inject 依赖注入，避免修改值，不是响应式的，耦合度高

## 2. 原型快速开发 npm install -g @vue/cli-service-global
1. vue serve 不指定参数默认会在当前目录找一下入口文件
>1.1 main.js, index.js, App.vue, app.vue

>1.2 可以指定要加载的组件 vue serve xxx.vue

2. 基于ElementUI 开发
>1. 初始化package.json
>2. 安装elementUI vue add element
>3. 加载ElementUI，使用Vue.use() 安装插件

## 组件分类
1. 第三方组件
2. 基础组件 通用组件
3. 业务组件

## 表单组件
1. Form
2. FormItem
3. Input
4. Button

> 表单验证 async-validator

### Input 组件验证
1. Input组件中触发自定义事件validate
2. FormItem 渲染完毕注册自定义validate

## Monorepo
1. Multirepo(Multiple Repository) 每一个包对应一个项目
2. Monorepo(Monolithic Repository) 一个项目仓库中管理多个模块/包，例如 Vue3、React

> packages 所有的包

## Storybook
> 可视化的组件展示平台
> 在隔离的开发环境中，以交互式的方式展示组件
1. 自动安装
```
npx -p @storybook/cli sb init --type
yarn add vue
yarn add vue-loader vue-template-complier --dev
```
> 安装nvm 控制 node 版本 安装目录不能有空格、中文之类，之前的node卸载，文件夹清空
> npm ERR! Unexpected en of JSON input while parsing near 执行 npm cache clean --force

## yarn workspaces 配合monorepo 管理依赖
1. 开启yarn 工作区
```jacascript
// package.json

"private": true, // 禁止把当前根目录内容提交
"workspaces": [
  "packages/*"
]
```
2. 使用
> 给工作区安装开发依赖
> 给指定工作区安装依赖
> 给所有工作区安装依赖
>
> # 依赖提升

## Lerna 
1. 是一个优化使用git和npm管理多包仓库的工作流工具
2. 用于管理具有多个包的js项目
3. 可以一键把代码提交到git和npm仓库

### 使用
1. 全局安装 yarn golbal add lerna
2. lerna init
3. lerna publish

> 本地命令行登录npm 查看镜像源 npm config get registry
> 本地先提交git，然后进行publish

## 单元测试 jest

## Rollup 
```


```
> cross-env 依赖 设置环境变量
> rimraf dist 依赖 删除文件

## 基于模板生成组件结构 Plop
