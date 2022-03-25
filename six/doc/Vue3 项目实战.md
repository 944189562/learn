## Vue3 项目总结

## 项目搭建

> 参考vite官方进行项目搭建

#### 代码规范和ESLint

1. 安装ESLint 

   > yarn add eslint --dev

2. 初始化ESLint

   > yarn run eslint --init

3. 验证项目中的eslint规范，在npm scripts 中添加验证脚本

   ```json
   "lint": "eslint ./src/**/*.{js,jsx,vue,ts,tsx} --fix"
   ```

4. vue-eslint-plugin

   https://eslint.vuejs.org/

5. 编译器宏和defineProps、defineEmits、no-undef 规则警告

   需要定义全局变量，在ESLint 配置文件中

   如果不想定义全局变量，请使用 `import { definePorps, defineEmits } from 'vue'`

6. vscode 编辑器集成

7. 配置 git commit hook 代码提交自动 lint 验证

   https://github.com/okonet/lint-staged

   安装依赖 `npx mrm@2 lint-staged` 帮我们下载两个包 husky 挂载git钩子 lint-staged 暂存代码文件lint验证

   ```json
   // package.json
   "lint-staged": {
   	"*.{js,jsx,vue,ts,tsx}": [
   		"npm run lint",
   		"git add"
   	]
   }
   ```

8. 在开发和构建中进行代码规范验证

   [https://github.com/gxmari007/vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)

### git commit 规范 

阮一峰老师的git commit message

行业流行遵循 Angular 规范

使用 cmmitlint 插件 [https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)

生成 change log 使用工具



### Vite 中的 TS 环境配置

参考官方文档

> 第三方包 添加类型补充，停止报错



### Vue3 中的 语法

1. 组合式 API  `setup()`
2. `<script setup>` 组合式 API 语法糖，项目采用这种语法



### 渲染函数和 JSX/TSX

1. 渲染函数的定义
2. 在渲染函数中使用 JSX
3. 在Vite中提供 jsx、tsx 支持，参考文档
4. Vue 中的 jsx 的用法



### 初始化 Vue Router

```
```

### Vuex 官方没有很好的解决TS类型问题

> 参考官方进行配置



### Vite 中路径模块别名配置 参考官方

在html、js、css中都可以使用别名，

```js
path 需要导入 @types/node 对应的TS类型
import * as path from 'path'

// vite.config.ts
resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  
// tsconfig.json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
        "@/*": [
            "src/*"
        ]
    }
}
```

### CSS 样式配置 参考官方

>  @import Sass 和 Less 也支持@别名导入

样式目录结构 src/styles

```shell
variables.scss  # 全局 Sass 变量
mixin.scss      # 全局 mixin
common.scss     # 全局公共样式
transition.scss # 全局过渡动画样式
index.scss      # 组织统一导出
```

利用构建工具注入sass 全局变量样式

```
css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
```

### 和服务端交互

- 基于 axios 的二次封装
- 关于接口的类型问题
- 多环境的 baseURL
- 跨域处理
- 数据 mock



#### 基于 axios 的二次封装

安装 axios 



###  全屏 H5 API

```
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

### 进度条 NPropress



### 组件二次封装 思路
