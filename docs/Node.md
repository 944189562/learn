# Node

### Node 介绍

![image-20220408104435479](Node.assets/image-20220408104435479.png)

#### Node.js架构

- Node.js的架构图： 
  - 我们编写的JavaScript代码会经过V8引擎，再通过Node.js的Bindings，将任务放到Libuv的事件循环中； 
  - libuv（Unicorn Velociraptor—独角伶盗龙）是使用C语言编写的库； 
  - libuv提供了事件循环、文件系统读写、网络IO、线程池等等内容； 
  - 具体内部代码的执行流程，我会在后续专门讲解事件和异步IO的原理中详细讲解；

![image-20220408104649709](Node.assets/image-20220408104649709.png)



#### 应用场景

- 目前前端开发的库都是以node包的形式进行管理； 
- npm、yarn工具成为前端开发使用最多的工具； 
- 越来越多的公司使用Node.js作为web服务器开发； 
- 大量项目需要借助Node.js完成前后端渲染的同构应用； 
- 资深前端工程师需要为项目编写脚本工具（前端工程师编写脚本通常会使用JavaScript，而不是Python或者shell）； 
- 很多企业在使用Electron来开发桌面应用程序；



#### Node的REPL

- REPL是Read-Eval-Print Loop的简称，翻译为 “读取-求值-输出” 循环； 
- REPL是一个简单的、交互式的编程环境；
- 浏览器的console就可以看成一个REPL；
- Node也给我们提供了一个REPL环境



#### Node程序传递参数

- 执行node，传递一些参数

  - node index.js env=development jz

- 获取传递到的参数

  - 获取参数其实是在process的内置对象中的； 
  - 如果我们直接打印这个内置对象，它里面包含特别的信息： 
    - 其他的一些信息，比如版本、操作系统等；

- process.argv属性，包含了我们需要的参数，argv 的由来：

  - C/C++程序中的main函数中，实际上可以获取到两个参数： 
    - argc：argument counter的缩写，传递参数的个数； 
    - argv：argument vector的缩写，传入的具体参数。
      - vector翻译过来是矢量的意思，在程序中表示的是一种数据结构。 
      - 在C++、Java中都有这种数据结构，是一种数组结构； 
      - 在JavaScript中也是一个数组，里面存储一些参数信息；

  ```js
  argv: [
    'C:\\Users\\Administrator\\AppData\\Roaming\\nodejs\\node.exe',
    'E:\\learn\\node\\node_base\\01_给node传递参数\\index.js',
    'env=development',
    'jz'
  ]
  ```



#### Node的输出

- console.log
  - 输出内容
- console.clear
  - 清空控制台
- console.trace
  - 打印函数的调用栈
- 还有一些其他console方法



#### 全局对象

- Node中给我们提供了一些全局对象

#### 特殊的全局对象

- 为什么称之为特殊的全局对象呢？ 

  - 这些全局对象**可以在模块中任意使用**，但是在**命令行交互中是不可以使用的**； 
  - 包括：__dirname、__filename、exports、module、require()

- __dirname：获取当前文件所在的路径：

  - __注意：不包括后面的文件名 __

- __filename：获取当前文件所在的路径和文件名称： 

  - 注意：包括后面的文件名称

  ```js
  console.log(__dirname)
  console.log(__filename)
  
  // E:\learn\node\node_base
  // E:\learn\node\node_base\02_Node中的全局对象.js
  ```

  

#### 常见的全局对象

- process对象：process提供了Node进程中相关的信息： 
  - 比如Node的运行环境、参数信息等； 
  - 后面在项目中，我也会讲解，如何将一些环境变量读取到 process 的 env 中； 
- console对象：提供了简单的调试控制台，在前面讲解输入内容时已经学习过了。 
  - 更加详细的查看官网文档：https://nodejs.org/api/console.html 
- 定时器函数：在Node中使用定时器有好几种方式： 
  - setTimeout(callback, delay[, ...args])：callback在delay毫秒后执行一次； 
  - setInterval(callback, delay[, ...args])：callback每delay毫秒重复执行一次； 
  - setImmediate(callback[, ...args])：callbackI / O事件后的回调的“立即”执行； 
    - 这里先不展开讨论它和setTimeout(callback, 0)之间的区别； 
    - 因为它涉及到事件循环的阶段问题，我会在后续详细讲解事件循环相关的知识； 
  - process.nextTick(callback[, ...args])：添加到下一次tick队列中； 
    - 具体的讲解，也放到事件循环中说明；



#### global对象

- global是一个全局对象，事实上前端我们提到的process、console、setTimeout等都有被放到global中

#### global和window的区别

- 在浏览器中，全局变量都是在window上的，比如有document、setInterval、setTimeout、alert、console等等 
- 在Node中，我们也有一个global属性，并且看起来它里面有很多其他对象。 
- 但是在浏览器中执行的JavaScript代码，如果我们在顶级范围内通过var定义的一个属性，默认会被添加到window 对象上： 
- 但是在node中，我们通过var定义一个变量，它只是在当前模块中有一个变量，不会放到全局中；



### JavaScript模块化

#### 模块化

- 模块化开发
  - 事实上模块化开发最终的目的是将程序划分成一个个小的结构； 
  - 这个结构中编写属于自己的逻辑代码，有自己的作用域，不会影响到其他的结构； 
  - 这个结构可以将自己希望暴露的变量、函数、对象等导出给其结构使用； 
  - 也可以通过某种方式，导入另外结构中的变量、函数、对象等；
- 上面说提到的结构，就是模块；按照这种结构划分开发程序的过程，就是模块化开发的过程；
- 无论你多么喜欢JavaScript，以及它现在发展的有多好，我们都需要承认在Brendan Eich用了10天写出JavaScript的时候， 它都有很多的缺陷： 
  - 比如var定义的变量作用域问题； 
  - 比如JavaScript的面向对象并不能像常规面向对象语言一样使用class； 
  - 比如JavaScript没有模块化的问题；
- Brendan Eich本人也多次承认过JavaScript设计之初的缺陷，但是随着JavaScript的发展以及标准化，存在的缺陷问题基 本都得到了完善。无论是web、移动端、小程序端、服务器端、桌面应用都被广泛的使用；

#### 没有模块化带来的问题

- 早期没有模块化带来了很多的问题：比如命名冲突的问题 
- 当然，我们有办法可以解决上面的问题：立即函数调用表达式（IIFE） 
  - IIFE (Immediately Invoked Function Expression) 
- 但是，我们其实带来了新的问题： 
  - 第一，我必须记得每一个模块中返回对象的命名，才能在其他模块使用过程中正确的使用； 
  - 第二，代码写起来混乱不堪，每个文件中的代码都需要包裹在一个匿名函数中来编写； 
  - 第三，在没有合适的规范情况下，每个人、每个公司都可能会任意命名、甚至出现模块名称相同的情况； 
- 所以，我们会发现，虽然实现了模块化，但是我们的实现过于简单，并且是没有规范的。 
- 我们需要制定一定的规范来约束每个人都按照这个规范去编写模块化的代码； 
- 这个规范中应该包括核心功能：模块本身可以导出暴露的属性，模块又可以导入自己需要的属性； 
- JavaScript社区为了解决上面的问题，涌现出一系列好用的规范，接下来我们就学习具有代表性的一些规范。



#### CommonJS 和 Node

> Node.js中实现CommonJS规范的本质就是**对象的引用赋值** （浅拷贝）

- 我们需要知道CommonJS是一个规范，最初提出来是在浏览器以外的地方使用，并且当时被命名为ServerJS，后来为了 体现它的广泛性，修改为CommonJS，平时我们也会简称为CJS。 
  - Node是CommonJS在服务器端一个具有代表性的实现； 
  - Browserify是CommonJS在浏览器中的一种实现； 
  - webpack打包工具具备对CommonJS的支持和转换； 
- 所以，Node中对CommonJS进行了支持和实现，让我们在开发node的过程中可以方便的进行模块化开发： 
  - 在Node中每一个js文件都是一个单独的模块； 
  - 这个模块中包括CommonJS规范的核心变量：exports、module.exports、require； 
  - 我们可以使用这些变量来方便的进行模块化开发； 
- 模块化的核心是导出和导入，Node中对其进行了实现： 
  - exports和module.exports可以负责对模块中的内容进行导出； 
  - require函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；
  - `module.export = {}; exports = module.exports` 赋值的操作是在顶层执行的
    - exports.name = 'jz'
    - 如果改变export对象的引用，exports = { name: 'jz' } 相当于改变了引用地址，和module.export 指向的不是同一个对象，最终导出的是module.export 对象，这里改变exports的引用不会被导出
- 维基百科中对CommonJS规范的解析： 
  - CommonJS中是没有module.exports的概念的； 
  - 但是为了实现模块的导出，Node中使用的是Module类，每一个模块都是Module的一个实例，也就是 module； 
  - 所以在Node中真正用于导出的其实根本不是exports，而是module.exports； 
  - 因为module才是导出的真正实现者；



#### 理解对象的引用赋值

- 创建一个obj对象，会在堆内存中开辟空间保存值，返回引用
- info = obj ,是引用赋值，指向内存中同一块地址



#### require细节

- require是一个函数，可以帮助我们引入一个文件（模块）中导入的对象。 
- 那么，require的查找规则是怎么样的呢？ 
  - https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_all_together 
- 这里我总结比较常见的查找规则：导入格式如下：require(X) 
- 情况一：X是一个核心模块，比如path、http p 直接返回核心模块，并且停止查找
- 情况二：X是以 ./ 或 ../ 或 /（根目录）开头的 
  - 第一步：将X当做一个文件在对应的目录下查找； 
    1. 如果有后缀名，按照后缀名的格式查找对应的文件 
    2. 如果没有后缀名，会按照如下顺序： 
       1. 直接查找文件X 
       2. 查找X.js文件 
       3. 查找X.json文件 
       4. 查找X.node文件
  -  第二步：没有找到对应的文件，将X作为一个目录，查找目录下面的index文件 
    1. 查找X/index.js文件 
    2. 查找X/index.json文件 
    3. 查找X/index.node文件
    4. 如果没有找到，那么报错：not found
- 情况三：直接是一个X（没有路径），并且X不是一个核心模块
  - 回去当前路径中查找node_modules/下的第三方模块，如果没有找到，逐层向上查找node_modules/下的第三方模块
  - `module.paths`每一个模块都是一个Module实例，可以拿到paths的所有路径，然后node通过paths路径查找
  - 如果上面的路径中都没有找到，那么报错：not found



#### 模块的加载过程

> 模块的加载过程是同步的，先执行require('X')，然后执行后面的代码

- 结论一：模块在被第一次引入时，模块中的js代码会被运行一次
- 结论二：模块被多次引入时，会缓存，最终只加载（运行）一次 
  - 每个模块对象module都有一个属性：loaded。 
  - 为false表示还没有加载，为true表示已经加载；
- 结论三：如果有循环引入，Node采用的是深度优先算法，深度优先搜索



#### Node.js源码loader.js解读

> lib > internal > modules > cjs > loader.js



#### Node.js中使用ESM模块

- 方式一：文件名使用 mjs
- 方式二：package.json 配置 type：module



#### CJS与ESM交互

- 结论一：通常情况下，cjs不支持esm
  - cjs是同步，esm需要静态解析，异步加载，原理上有冲突
  - Node当中不支持
- 结论二：多数情况下，esm可以加载cjs
  - esm在加载cjs时，会将cjs的exports当做default导出
  - Node中支持



### Node常用内置模块

#### 内置模块path

- path模块用于对路径和文件进行处理，提供了很多好用的方法。 
- 并且我们知道在Mac OS、Linux和window上的路径时不一样的 
  - window上会使用 \或者 \\ \来作为文件路径的分隔符，当然目前也支持 /； 
  - 在Mac OS、Linux的Unix操作系统上使用 / 来作为文件路径的分隔符； 
- 那么如果我们在window上使用 \ 来作为分隔符开发了一个应用程序，要部署到Linux上面应该怎么办呢？ 
  - 显示路径会出现一些问题； 
  - 所以为了屏蔽他们之间的差异，在开发中对于路径的操作我们可以使用 path 模块； 
- 可移植操作系统接口（英语：Portable Operating System Interface，缩写为POSIX） 
  - Linux和Mac OS都实现了POSIX接口； 
  - Window部分电脑实现了POSIX接口；

```js
const path = require('path')

const basePath = '/User/Jz'
const filename = 'abc.txt'

const filepath = path.resolve(basePath, filename)

console.log(filepath)
```



#### path常见的API

- 从路径中获取信息 

  - dirname：获取文件的父文件夹； 
  - basename：获取文件名； 
  - extname：获取文件扩展名；

- 路径的拼接 

  - 如果我们希望将多个路径进行拼接，但是不同的操作系统可能使用的是不同的分隔符； 
  - 这个时候我们可以使用path.join函数；

- 将文件和某个文件夹拼接 

  - 如果我们希望将某个文件和文件夹拼接，可以使用 path.resolve; 
  - resolve函数会判断我们拼接的路径前面是否有 /或../或./； 
  - 如果有表示是一个绝对路径，会返回对应的拼接路径； 
  - 如果没有，那么会和当前执行文件所在的文件夹进行路径的拼接

  ```js
  const path = require('path')
  
  const basePath = './User/Jz'
  const filename = 'abc.txt'
  
  const filepath = path.resolve(basePath, filename)
  // console.log(filepath)
  
  // 1. 获取路径信息
  // console.log(path.dirname(filepath))
  // console.log(path.basename(filepath))
  // console.log(path.extname(filepath))
  
  // 2. join 路径拼接
  const filepath1 = path.join(basePath, filename)
  console.log(filepath1)
  
  // 3. resolve 路径拼接
  const filepath3 = path.resolve(basePath, filename)
  console.log(filepath3)
  ```

  



#### 在webpack中的使用

- 在webpack中获取路径或者起 别名的地方也可以使用

![image-20220408151115325](Node.assets/image-20220408151115325.png)



#### 内置模块fs

- fs是File System的缩写，表示文件系统。 
- 对于任何一个为服务器端服务的语言或者框架通常都会有自己的文件系统： 
  - 因为服务器需要将各种数据、文件等放置到不同的地方； 
  - 比如用户数据可能大多数是放到数据库中的； 
  - 比如某些配置文件或者用户资源（图片、音视频）都是以文件的形式存在于操作系统上的； 
- Node也有自己的文件系统操作模块，就是fs： 
  - 借助于Node帮我们封装的文件系统，我们可以在任何的操作系统（window、Mac OS、Linux）上面直接去操作文件； 
  - 这也是Node可以开发服务器的一大原因，也是它可以成为前端自动化脚本等热门工具的原因；



#### fs的API介绍

- Node文件系统的API非常的多： 

  - https://nodejs.org/dist/latest-v14.x/docs/api/fs.html 
  - 我们不可能，也没必要一个个去学习； 
  - 这个更多的应该是作为一个API查询的手册，等用到的时候查询即可；
  - 学习阶段我们只需要学习最常用的即可；

- 但是这些API大多数都提供三种操作方式： 

  - 方式一：同步操作文件：代码会被阻塞，不会继续执行； 
  - 方式二：异步回调函数操作文件：代码不会被阻塞，需要传入回调函数，当获取到结果时，回调函数被执行； 
  - 方式三：异步Promise操作文件：代码不会被阻塞，通过 fs.promises 调用方法操作，会返回一个Promise， 可以通过then、catch进行处理；

  ```js
  const fs = require('fs')
  
  // 获取 abc.txt 的文件信息
  const filepath = './abc.txt'
  
  // 1. 同步方式，阻塞后续代码执行
  const info = fs.statSync(filepath)
  console.log('后续代码执行')
  console.log(info)
  
  // 2. 异步IO回调
  fs.stat(filepath, (err, info) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(info)
  })
  console.log('后续代码执行')
  
  // 3. Promise
  fs.promises.stat(filepath).then(console.log).catch(console.log)
  console.log('后续代码执行')
  ```



#### 文件描述符

- 文件描述符（File descriptors）是什么呢？ 
  - 在 POSIX 系统上，对于每个进程，内核都维护着一张当前打开着的文件和资源的表格。 
  - 每个打开的文件都分配了一个称为文件描述符的简单的数字标识符。 
  - 在系统层，所有文件系统操作都使用这些文件描述符来标识和跟踪每个特定的文件。 
  - Windows 系统使用了一个虽然不同但概念上类似的机制来跟踪资源。 
- 为了简化用户的工作，Node.js 抽象出操作系统之间的特定差异，并为所有打开的文件分配一个数字型的文件描述符。 
- fs.open() 方法用于分配新的文件描述符。 
  - 一旦被分配，则文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息。

```js
const fs = require('fs')

const filepath = './abc.txt'

fs.open(filepath, (err, fd) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(fd)
  fs.fstat(fd, (err, info) => {
    console.log(info)
  })
})
```



#### 文件的读写

- 如果我们希望对文件的内容进行操作，这个时候可以使用文件的读写： 
  - fs.readFile(path[, options], callback)：读取文件的内容； 
  - fs.writeFile(file, data[, options], callback)：在文件中写入内容；
- 在上面的代码中，你会发现有一个大括号没有填写任何的内容，这个是写入时填写的option参数： 
  - flag：写入的方式。 
  - encoding：字符的编码；

```js
const fs = require('fs')

const filepath = './abc.txt'

// 1. 文件的写入
const data = '你好，justin'
fs.writeFile(filepath, data, {flag: 'a', encoding: 'utf8'}, (err) => {
  console.log(err)
})

// 2. 文件的读取
fs.readFile(filepath, {encoding: 'utf-8'}, (err, info) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(info)
})
```

#### 文件夹操作

- 新建一个文件夹 
  - 使用fs.mkdir()或fs.mkdirSync()创建一个新文件夹： 
- 获取文件夹的内容 
- 文件重命名

```JS
const fs = require('fs')
const path = require('path')

const dirPath = './jz'

// 1. 创建文件夹
if (!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath, err => console.log(err))
}

// 2. 读取文件夹
// fs.readdir(dirPath, (err, files) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(files)
//   files.forEach(file => {
//     const filePath = path.resolve(dirPath, file)
//     fs.stat(filePath, (err, info) => {
//       if(err) {
//         console.log(err)
//         return
//       }
//       console.log(info.isDirectory())
//     })
//   })
// })

function readFiles(dirPath) {
  fs.readdir(dirPath, {withFileTypes: true}, (err, files) => {
    if (err) {
      console.log(err)
      return
    }
    for (const file of files) {
      const filePath = path.resolve(dirPath, file.name)
      if (file.isDirectory()) {
        readFiles(filePath)
        return
      }
      console.log(file.name)
    }
  })
}

readFiles(dirPath)

// 重命名
fs.rename(dirPath, './kobe', err => console.log(err))
```



#### 文件夹的复制

```js
const fs = require('fs')
const path = require('path')
const resolve = (dir, filename) => path.resolve(dir, filename)

// 1. 接收导出的目录和导入的目录
srcPath = process.argv[2]
destPath = process.argv[3]

function copyFiles(srcPath, destPath) {
  if (!fs.existsSync(destPath)) {
    fs.mkdir(destPath, err => {
      if (!err) console.log('文件开始拷贝')
      const srcFiles = fs.readdirSync(srcPath, {withFileTypes: true})
      for (const file of srcFiles) {
        const srcFile = resolve(srcPath, file.name)
        const destFile = resolve(destPath, file.name)
        if (file.isFile() && file.name.endsWith('.js')) {
          fs.copyFileSync(srcFile, destFile)
          console.log('拷贝成功')
        } else if (file.isDirectory()) {
          copyFiles(srcFile, destFile)
        }
      }
    })
  }
}

copyFiles(srcPath, destPath)
```



#### events模块

- Node中的核心API都是基于异步事件驱动的： 
  - 这个体系中，某些对象（发射器（Emitters））发出某一个事件； 
  - 我们可以监听这个事件（监听器 Listeners），并且传入的回调函数，这个回调函数会在监听到事件时调用； 
- 发出事件和监听事件都是通过EventEmitter类来完成的，它们都属于events对象。 
  - emitter.on(eventName, listener)：监听事件，也可以使用 addListener； 
  - emitter.off(eventName, listener)：移除事件监听，也可以使 用removeListener； 
  - emitter.emit(eventName[, ...args])：发出事件，可以携带一 些参数；

#### 常见的属性

- EventEmitter的实例有一些属性，可以记录一些信息： 
  - emitter.eventNames()：返回当前 EventEmitter对象注册的事件字符串数组； 
  - emitter.getMaxListeners()：返回当前 EventEmitter对象的最大监听器数量，可以通过setMaxListeners() 来修改，默认是10； 
  - emitter.listenerCount(事件名称)：返回当前 EventEmitter对象某一个事件名称，监听器的个数；
  - emitter.listeners(事件名称)：返回当前 EventEmitter对象某个事件监听器上所有的监听器数组；

#### 方法的补充

- emitter.once(eventName, listener)：事件监听一次 
- emitter.prependListener()：将监听事件添加到最前面 
- emitter.prependOnceListener()：将监听事件添加到最前面，但是只监听一次 
- emitter.removeAllListeners([eventName])：移除所有的监听器



### 包管理工具

### 开发脚手架工具



#### 1. 自定义终端指令

1. 入口文件 `index.js` 配置 node 可执行文件，Shebang 是一项操作系统特性，可用于运行任何解释语言：Python、Perl 等。对于 Node.js，配置如下

   ```js
   #!/usr/bin/env node
   
   ```

2. package.json 中添加bin：

   ```json
   "bin": {
       "coderjz": "index.js"
     },
   ```

3. 执行 npm link，会将bin中的coderjz指令添加到环境变量中，然后index.js就可以执行

   ```she
   coderjz
   ```



#### 2. 创建指令

> 使用第三方库 commander，查看文档进行配置
>
> chalk

```js
// index.js
#!/usr/bin/env node

const {program} = require('commander');

const helpOptions = require('./lib/core/help')

// 查看版本号
program.version(require('./package.json').version)

// 自定义help和可选信息
helpOptions()

program.parse()
// 获取传入的参数
console.log(program.opts().dest)

// lib/core/help.js
const {program} = require("commander");

const helpOptions = () => {
  // 增加自己的options
  program.option('-c --coderjz', 'a coderjz cli')
  program.option('-t --test', 'test option commander')
  program.option('-d --dest <dest>', 'a destination folder, example -d /src/components')

  // 自动解析传入的参数，目前版本不用传递 process.argv
  // program.parse(process.argv)
  program.on('--help', () => {
    console.log('')
    console.log('Other:')
    console.log('  other options~')
  })
}

module.exports = helpOptions
```

1. 配置 `create <demo>` 指令

   ```js
   const {program} = require('commander');
   const {createProjectAction, addComponentAction, addPageAction, addStoreAction} = require('./actions')
   
   const createCommands = () => {
     program
       .command('create <project> [others...]')
       .description('clone repository into a folder')
       .action(createProjectAction)
   
     program
       .command('addCpn <name>')
       .description('add vue component, example: coderjz addCpn Name [-d /src/xxx]')
       .action((name) => {
         const dest = program.opts().dest || 'src/components'
         addComponentAction(name, dest)
       })
   
     program
       .command('addPage <name>')
       .description('add vue page, , example: coderjz addPage Name [-d /src/xxx]')
       .action(name => {
         const dest = program.opts().dest || 'src/pages'
         addPageAction(name, dest)
       })
   
     program
       .command('addStore <name>')
       .description('add vue store, example: coderjz addStore Name [-d /src/xxx]')
       .action(name => {
         const dest = program.opts().dest || 'src/store/modules'
         addStoreAction(name, dest)
       })
   }
   
   module.exports = createCommands
   ```

2. `createProjectAction` 执行动作进行模块拆解

3. `createProjectAction` 中需要做的任务

   1. 下载模板
   2. 创建子进程，执行 `npm install`，下载项目依赖
   3. 创建子进程，执行`npm run serve`，启动项目

   ```js
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
   ```

4. 配置创建组件指令 `addCpn <name>`

   1. 通过ejs编译模板，返回编译后的结果
   2. 然后把结果写入对应文件夹

#### 3. 封装指令，创建lib文件夹

- --|lib
- -----|core
- -------| help.js
- --|utils

#### 查看指令的目录

`where node`

#### 命令行选择

`inquirer`



#### 发布项目 

- 注册npm账号： https://www.npmjs.com/ 
- 选择sign up 
- 在命令行登录： npm login
- 修改package.json 
  - homepage
  - repository
    - type: git
    - url: 'git url'
  - license
  - author
- 发布到npm registry上 npm publish
- 更新仓库：
  - 1.修改版本号(最好符合semver规范)
- 删除发布的包： npm unpublish
- 让发布的包过期：  npm deprecate



### Buffer的使用

#### 数据的二进制

- 计算机中所有的内容：文字、数字、图片、音频、视频最终都会使用二进制来表示。 
- JavaScript可以直接去处理非常直观的数据：比如字符串，我们通常展示给用户的也是这些内容。 
- 不对啊，JavaScript不是也可以处理图片吗？ 
  - 事实上在网页端，图片我们一直是交给浏览器来处理的； 
  - JavaScript或者HTML，只是负责告诉浏览器一个图片的地址； 
  - 浏览器负责获取这个图片，并且最终讲这个图片渲染出来； 
- 但是对于服务器来说是不一样的： 
  - 服务器要处理的本地文件类型相对较多; 
  - 比如某一个保存文本的文件并不是使用 utf-8进行编码的，而是用 GBK，那么我们必须读取到他们的二进制数据，再通过GKB转换 成对应的文字； 
  - 比如我们需要读取的是一张图片数据（二进制），再通过某些手段对图片数据进行二次的处理（裁剪、格式转换、旋转、添加滤 镜），Node中有一个Sharp的库，就是读取图片或者传入图片的Buffer对其再进行处理； 
  - 比如在Node中通过TCP建立长连接，TCP传输的是字节流，我们需要将数据转成字节再进行传入，并且需要知道传输字节的大小 （客服端需要根据大小来判断读取多少内容）；



#### Buffer和二进制

- 我们会发现，对于前端开发来说，通常很少会和二进制打交道，但是对于服务器端为了做很多的功能，我们必须直接去操 作其二进制的数据； n 所以Node为了可以方便开发者完成更多功能，提供给了我们一个类Buffer，并且它是全局的。 n 我们前面说过，Buffer中存储的是二进制数据，那么到底是如何存储呢？ p 我们可以将Buffer看成是一个存储二进制的数组； p 这个数组中的每一项，可以保存8位二进制： 00000000 n 为什么是8位呢？ p 在计算机中，很少的情况我们会直接操作一位二进制，因为一位二进制存储的数据是非常有限的； p 所以通常会将8位合在一起作为一个单元，这个单元称之为一个字节（byte）； p 也就是说 1byte = 8bit，1kb=1024byte，1M=1024kb; p 比如很多编程语言中的int类型是4个字节，long类型时8个字节； p 比如TCP传输的是字节流，在写入和读取时都需要说明字节的个数； p 比如RGB的值分别都是255，所以本质上在计算机中都是用一个字节存储的；



#### Buffer和字符串

- Buffer相当于是一个字节的数组，数组中的每一项对于一个字节的大小：

- 如果我们希望将一个字符串放入到Buffer中，是怎么样的过程呢？

  ![image-20220409210320490](Node.assets/image-20220409210320490.png)

#### 如果是中文呢？

- 默认编码：utf-8
- 如果编码和解码不同：



#### Buffer的其他创建

- Buffer.from()
- Buffer.alloc()



### 事件循环和异步IO



#### 事件循环

- 事件循环是什么？ 
  - 事实上我把事件循环理解成我们编写的JavaScript和浏览器或者Node之间的一个桥梁。
- 浏览器的事件循环是一个我们编写的JavaScript代码和浏览器API调用(setTimeout/AJAX/监听事件等)的一个桥梁, 桥梁之间他们通过回调函数进行沟通。 
- Node的事件循环是一个我们编写的JavaScript代码和系统调用（file system、network等）之间的一个桥梁, 桥梁 之间他们通过回调函数进行沟通的.

![image-20220409225034941](Node.assets/image-20220409225034941.png)



#### 进程和线程

- 线程和进程是操作系统中的两个概念： 
  - 进程（process）：计算机已经运行的程序； 
  - 线程（thread）：操作系统能够运行运算调度的最小单位； 
- 听起来很抽象，我们直观一点解释： 
  - 进程：我们可以认为，启动一个应用程序，就会默认启动一个进程（也可能是多个进程）； 
  - 线程：每一个进程中，都会启动一个线程用来执行程序中的代码，这个线程被称之为主线程； 
  - 所以我们也可以说进程是线程的容器； 
- 再用一个形象的例子解释： 
  - 操作系统类似于一个工厂； 
  - 工厂中里有很多车间，这个车间就是进程；
  - 每个车间可能有一个以上的工人在工厂，这个工人就是线程；

#### 多进程多线程开发

- 操作系统是如何做到同时让多个进程（边听歌、边写代码、边查阅资料）同时工作呢？ 
  - 这是因为CPU的运算速度非常快，它可以快速的在多个进程之间迅速的切换； 
  - 当我们的进程中的线程获取获取到时间片时，就可以快速执行我们编写的代码；
  - 对于用于来说是感受不到这种快速的切换的；



#### Node的架构分析

- 浏览器中的EventLoop是根据HTML5定义的规范来实现的，不同的浏览器可能会有不同的实现，而Node中是由 libuv实现的。 
- 我们来看在很早就给大家展示的Node架构图：
  - libuv中主要维护了一个EventLoop和worker threads（线程池）； 
  - EventLoop负责调用系统的一些其他操作：文件的IO、Network、child-processes等 
- libuv是一个多平台的专注于异步IO的库，它最初是为Node开发的，但是现在也被使用到Luvit、Julia、pyuv等其 他地方；
  - application 对应的js代码
  - V8引擎解析js代码

![image-20220409232118988](Node.assets/image-20220409232118988.png)



#### 阻塞IO和非阻塞IO

- 如果我们希望在程序中对一个文件进行操作，那么我们就需要打开这个文件：通过文件描述符。 
  - 我们思考：JavaScript可以直接对一个文件进行操作吗？ 
  - 看起来是可以的，但是事实上我们任何程序中的文件操作都是需要进行系统调用（操作系统的文件系统）； 
  - 事实上对文件的操作，是一个操作系统的IO操作（输入、输出）；
- 操作系统为我们提供了阻塞式调用和非阻塞式调用： 
  - 阻塞式调用： 调用结果返回之前，当前线程处于阻塞态（阻塞态CPU是不会分配时间片的），调用线程只有在得到调用结果之后才会继续执行。 
  - 非阻塞式调用： 调用执行之后，当前线程不会停止执行，只需要过一段时间来检查一下有没有结果返回即可。
- 所以我们开发中的很多耗时操作，都可以基于这样的 非阻塞式调用： 
  - 比如网络请求本身使用了Socket通信，而Socket本身提供了select模型，可以进行非阻塞方式的工作； 
  - 比如文件读写的IO操作，我们可以使用操作系统提供的基于事件的回调机制



#### 非阻塞IO的问题

- 但是非阻塞IO也会存在一定的问题：我们并没有获取到需要读取（我们以读取为例）的结果 
  - 那么就意味着为了可以知道是否读取到了完整的数据，我们需要频繁的去确定读取到的数据是否是完整的； 
  - 这个过程我们称之为轮询操作；
- 那么这个轮询的工作由谁来完成呢？ 
  - 如果我们的主线程频繁的去进行轮询的工作，那么必然会大大降低性能； 
  - 并且开发中我们可能不只是一个文件的读写，可能是多个文件； 
  - 而且可能是多个功能：网络的IO、数据库的IO、子进程调用；
- libuv提供了一个线程池（Thread Pool）： 
  - 线程池会负责所有相关的操作，并且会通过轮询等方式等待结果； 
  - 当获取到结果时，就可以将对应的回调放到事件循环（某一个事件队列）中； 
  - 事件循环就可以负责接管后续的回调工作，告知JavaScript应用程序执行对应的回调函数；

#### 阻塞和非阻塞，同步和异步的区别？

- 阻塞和非阻塞是对于被调用者来说的； 
  - 在我们这里就是系统调用，操作系统为我们提供了阻塞调用和非阻塞调用；
- 同步和异步是对于调用者来说的； 
  - 在我们这里就是自己的程序； 
  - 如果我们在发起调用之后，不会进行其他任何的操作，只是等待结果，这个过程就称之为同步调用； 
  - 如果我们再发起调用之后，并不会等待结果，继续完成其他的工作，等到有回调时再去执行，这个过程就是 异步调用；
- Libuv采用的就是非阻塞异步IO的调用方式；



#### Node事件循环的阶段

- 我们最前面就强调过，事件循环像是一个桥梁，是连接着应用程序的JavaScript和系统调用之间的通道： 
  - 无论是我们的文件IO、数据库、网络IO、定时器、子进程，在完成对应的操作后，都会将对应的结果和回调 函数放到事件循环（任务队列）中； 
  - 事件循环会不断的从任务队列中取出对应的事件（回调函数）来执行；
- 但是一次完整的事件循环Tick分成很多个阶段： 
  - 定时器（Timers）：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。 
  - 待定回调（Pending Callback）：对某些系统操作（如TCP错误类型）执行回调，比如TCP连接时接收到 ECONNREFUSED。 
  - idle, prepare：仅系统内部使用。 
  - 轮询（Poll）：检索新的 I/O 事件；执行与 I/O 相关的回调； 轮询阶段会尽可能停留，如果一直轮询很消耗性能，所以tick在这里会阻塞，等待IO回调，这里希望IO回调在当前tick尽快的执行
  - 检测：setImmediate() 回调函数在这里执行。 p 关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)。
- ![image-20220409235533892](Node.assets/image-20220409235533892.png)



#### Node的微任务和宏任务

- 我们会发现从一次事件循环的Tick来说，Node的事件循环更复杂，它也分为微任务和宏任务： 
  - 宏任务（macrotask）：setTimeout、setInterval、IO事件、setImmediate、close事件； 
  - 微任务（microtask）：Promise的then回调、process.nextTick、queueMicrotask；
- 但是，Node中的事件循环不只是 微任务队列和 宏任务队列： 
- 微任务队列： 
  - next tick queue：process.nextTick； 
  - other queue：Promise的then回调、queueMicrotask； 
- 宏任务队列： 
  - timer queue：setTimeout、setInterval； 
  - poll queue：IO事件； 
  - check queue：setImmediate；
  - close queue：close事件；



#### 面试题分析

```js
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout0')
}, 0)

setTimeout(function () {
  console.log('setTimeout2')
}, 300)

setImmediate(() => console.log('setImmediate'));

process.nextTick(() => console.log('nextTick1'));

async1();

process.nextTick(() => console.log('nextTick2'));

new Promise(function (resolve) {
  console.log('promise1')
  resolve();
  console.log('promise2')
}).then(function () {
  console.log('promise3')
})

console.log('script end')


// script start
// async1 start
// async2
// promise1
// promise2
// script end
// nextTick1
// nextTick2
// async1 end
//  promise3
// setTimeout0
// setImmediate
// setTimeout2
```



##### setTimeout setImmediate

- 这里的执行的顺序每次不一样：
- 为什么会出现不同的情况呢？ 
  - 在Node源码的deps/uv/src/timer.c中141行，有一个 uv__next_timeout 的函数； 
  - 这个函数决定了，poll阶段要不要阻塞在这里； 
  - 阻塞在这里的目的是当有异步IO被处理时，尽可能快的让代码被执行； 
  - ![image-20220410112608299](Node.assets/image-20220410112608299.png)
- 和上面有什么关系呢？ 
  - 开始执行顶层代码，初始化事件循环
  - 情况一：如果事件循环开启的时间(ms)是小于 setTimeout函数的执行时间的； 
  - 也就意味着先开启了event-loop，但是这个时候执行到timer阶段，并没有定时器的回调被放到入 timer queue中； 
  - 所以没有被执行，后续开启定时器和检测到有setImmediate时，就会跳过 poll阶段，向后继续执行； 
  - 这个时候是先检测 setImmediate，第二次的tick中执行了timer中的 setTimeout； 
- 情况二：如果事件循环开启的时间(ms)是大于 setTimeout函数的执行时间的； 
  - 这就意味着在第一次 tick中，已经准备好了timer queue； 
  - 所以会直接按照顺序执行即可；

```js
setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

// 问题: setTimeout setImmediate
```



### Stream

#### 认识Stream