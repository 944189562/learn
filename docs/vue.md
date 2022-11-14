# Vue3

### Vu3带来的变化（性能）

- 使用Proxy进行数据劫持
  - Vue2.x使用Object.defineProperty 劫持数据的getter和setter方法，存在缺陷当给对象添加或者删除属性时，无法进行监听
  - Vue2.x 提供一些特殊的API，$set 或 $delete，都是一些hack方法
- 删除了一些不必要的API：
  - 移除了一些特性：filter、内联模板等；
  - 移除了实例上的$on, $off 和 $once
- 编译方面的优化：
  - 生成Block Tree、Slot编译优化、diff算法优化
- 由Options API 到 Composition API
- Hooks函数增加代码的复用性
  - vue2，通常通过mixin进行代码复用

### Vue的使用

- CDN引入
  - 内容分发网络（Content Delivery Network or Content Distribution Network）
  - 相互连接的网络系统，利用最靠近每个用户的服务器
  - 更快、更可靠的将静态资源发送给用户
  - 来提供高性能、可扩展及低成本的网络网络内容传递给用户
  - 常用的CDN服务器
    - 自己购买CDN服务器
    - 开源的CDN服务器：unpkg、JSDelivr、cdnjs
- 命令式编程与声明式编程
  - 传统的开发，例如jQuery属于命令式
  - vue、react、angular属于声明式
- MVC和MVVM都是一种软件的体系结构
  - MVC是Model - View -Controller，在前期被使用的架构模式
  - MVVM是Model - View - ViewModel，目前流行的架构模式

### Vue 源码

- 下载源码
- 安装依赖
- 调试源代码
  - `pnpm build`
  - 修改scripts脚本 `"dev": "node scripts/dev.js --sourcemap",`
  - `pnpm dev`
  - 在packages -> vue -> examples 添加测试代码，引入打包后的`<script src="../../dist/vue.global.js"></script>`
  - 浏览器断点调试

### 模板语法

- Mustche双大括号语法 `{{message}}`
  - 

