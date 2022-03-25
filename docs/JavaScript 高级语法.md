# 邂逅 JavaScript 开发

### 编程语言发展史

1. 机器语言 10000011110，机器指令
2. 汇编语言 mov、ax
3. 高级语言 编译型 C、C++、Java，解释型 JavaScript、Python

> 高级语言最终会转成机器指令
>
> 10进制整数转二进制是除2取余
>
> ```
> 43（十进制） 转 2 进制
> 43 / 2 商 21 余数 1
> 21 / 2 商 10 余数 1
> 10 / 2 商 5  余数 0
>  5 / 2 商 2  余数 1
>  2 / 2 商 1  余数 0
>  1 / 2 商 0  余数 1
>  从后往前读取 43 => 101011
> ```
>
> 10进制小数转2进制是乘2取1
>
> ```
> 0.1 （十进制）转 2 进制
> 0.1*2=0.2......0 -- 整数部分0。整数部分 0，清零后为 0，用0.2接着运算
> 0.2*2=0.4......0
> 0.4*2=0.8......0
> 0.8*2=1.6......1
> 0.6*2=1.2......1
> 0.2*2=0.4......0
> 0.4*2=0.8......0
> 0.8*2=1.6......1
> 0.6*2=1.2......1
> ......
> 得到整数依次是 0,0,0,1,1,0,0,1,1......
> 十进制数0.1转2进制对应的二进制数是 0.000110011001...... 无限循环小数
> 0.1+0.2 !== 0.3
> ```
>
> ```js
> 1 => number -> 8byte
> 8byte => 2**64
> js引擎 V8 中 kSmiMinValue => 0 ~ 2**32 -1, 小的数字在V8 中成为Sim，小数字 2**32
> ```
>
> 

### 浏览器工作原理

![image-20220324111311054](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220324111311054.png)

浏览器内核解析文件

### 浏览器内核

1. Geoko：早期被Netscape和Mozilla Firfox 使用
2. Trident：微软开发，IE4~IE11，Edge转向Blink
3. Webkit：苹果基于KHTML开发，用于Safari，Chrome之前也用过
4. Blink：Webkit的分支，Google开发，目前用于Google Chrome、Edge、Opera等

浏览器内核指的是浏览器的排版引擎：

1. 排版引擎（layout engine），也称浏览器引擎（browser engine）
2. 页面渲染引擎（rendering engine）或样版引擎



### 浏览器渲染过程 

![image-20220324112425397](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220324112425397.png)



### JavaScript 引擎

> 高级语言需要被转换成机器指令，才能被CPU所执行，js 引擎将 js 代码翻译成 CPU指令来执行

##### 常见的js 引擎

1. V8：google 开发
2. JavaScriptCore：Apple开发，
3. Chakra：微软开发，
4. SpiderMonkey：第一款 js 引擎，js作者开发

### 浏览器内核和 JS 引擎的关系

![image-20220324113405970](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220324113405970.png)



### V8 引擎

1. C++ 编写的Google开源高性能的JavaScript和WebAssembly引擎，用于Chrome和Node.js
2. 可以在多环境运行，Windows、macOS、Linux
3. V8 可以独立运行，也可以嵌入到任何 C++ 应用程序中

> astexplore.net

![image-20220324115252193](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220324115252193.png)

javascript => Parse => AST 抽象语法树 => ignition => byteCode 字节码 => 转成不同环境的CPU指令

![image-20220324121002443](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220324121002443.png)

![image-20220324121048755](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220324121048755.png)

### 执行上下文栈（调用栈）

Execution context stack 上下文执行栈 ECS

Global execution context 全局执行上下文 GEC

Function execution context 函数执行上下文 FEC

variable object VO 变量对象

Global Object

Action Object

- js引擎内部有一个执行上下文栈（Execution Context Stack，简称ECS），它是用于执行代码的调用栈。 
- 那么现在它要执行谁呢？执行的是全局的代码块： 
  - 全局的代码块为了执行会构建一个 Global Execution Context（GEC）； 
  - GEC会 被放入到ECS中 执行； 
- GEC被放入到ECS中里面包含两部分内容： 
  - 第一部分：在代码执行前，在parser转成AST的过程中，会将全局定义的变量、函数等加入到GlobalObject中， 变量并不会赋值，函数会在堆中开辟一块内存保存函数体以及parentscope：父级GO/AO地址，返回函数内存地址给值变量；如果变量与函数重名，将共享函数内存地址
    - 这个过程也称之为变量的作用域提升（hoisting） 
  - 第二部分：在代码执行中，对变量赋值，或者执行其他的函数；如果变量名与函数重名，若变量被赋值，变量地址被修改，此时函数声明无效，无法访问函数，被变量覆盖
- 在执行的过程中执行到一个函数时，会根据函数体创建一个函数执行上下文（Functional Execution Context， 简称FEC），并且压入到EC Stack中。 
- FEC中包含三部分内容： 
  - 第一部分：在解析函数成为AST树结构时，会创建一个Activation Object（AO）： 
    - AO中包含形参、arguments、函数定义和指向函数对象、定义的变量； 
  - 第二部分：作用域链：由VO（在函数中就是AO对象）和父级VO组成，查找时会一层层查找； 
  - 第三部分：this绑定的值：这个我们后续会详细解析

![image-20220325002700423](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220325002700423.png)

### 内存管理

在代码执行过程中都是需要分配内存，执行在内存中进行

内存声明周期：

1. 分配申请需要的内存
2. 使用分配的内存
3. 不需要使用，对其进行释放

不同的编程语言对第一步和第三步有不同的实现

1. 手动管理内存：C、C++，需要手动（malloc和free）管理内存
2. 自动管理内存：Java、JavaScript、Python等，一般不需要手动管理内存释放

### JS 内存管理

1. js 会在定义变量时分配内存

2. 对不同类型的变量分配方式不一样

   1. 基本数据类型会在执行时直接在站空间进行分配

   2. 复杂数据类型内存分配会在堆内存中开辟一块空间，并且将这块空间的指针返回值变量引用

      ```js
      var a = 1 // 栈
      var obj = { a : 1 } // 堆 0xa00
      ```

### JS 的垃圾回收

1. 内存大小有限，不需要使用，对其释放，腾出更多的内存空间
2. 在手动管理内存的语言中，
   1. 低效
   2. 很容易内存泄漏
3. 现代编程语言有自己的垃圾回收机制
   1. Garbage Collection，GC
4. GC的算法，计算不需要使用

### GC算法 - 引用计数

1.  计数器 记录引用，被引用 + 1，否则 -1，变为0，被清除
2. 弊端：循环引用的对象不会被清除

### GC算法 - 标记清除

1. 设置一个根对象（root object），从根开始找有引用的对象，没有引用的对象，不可达
2. 解决循环引用的问题

JS 引擎比较广泛采用的就是标记清除算法

### 闭包（Closure）

是在支持 头等函数 的编程语言中，实现词法绑定的一种技术； 

闭包在实现上是一个结构体，它存储了一个函数和一个关联的环境（相当于一个符号查找表）；

闭包跟函数最大的区别在于，当捕捉闭包的时候，它的 **自由变量** 会在补充时被确定，这样即使脱离了捕捉时的上下文，它也能照常运行

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）；

闭包两部分组成：一个函数和一个关联的环境，这样组合被称为闭包 函数访问外部作用域的变量

### 闭包的内存泄漏

函数引用外部作用域没有释放，导致外部AO对象没有释放，js引擎优化，会释放外部AO没有引用的变量

#### 函数式一等公民

1. 函数可以作为参数
2. 函数作为返回值返回

```js
Array.prototype.myFilter = function(fn) {
    const _this = this
    const length = _this.length
    const arr = []
    for(let i=0;i < length;i++) {
        fn(_this[i], i, _this) && arr.push(_this[i])
    }
    return arr
}
```

### JS 函数的this指向 

> js module -> 加载 -> 编译 -> 放到一个函数 -> 执行这个函数.apply({})

**函数 this** 指向与函数**定义**的的**位置**无关，与**调用方式**有关

##### this 绑定规则：

1. 默认绑定
2. 隐式绑定
3. 显示绑定
4. new 绑定

### 规则一：默认绑定

独立函数调用，函数没有绑定this，直接调用

```javascript
// 默认绑定：独立函数调用
function foo() {
	console.log(this)
}

foo()
// 案例
function foo1() {
	console.log(this)
}

function foo2() {
	console.log(this)
    foo1()
}

function foo3() {
	console.log(this)
    foo2()
}

foo3()
// 案例
var obj = {
    name: 'why',
    foo: function() {
        console.log(this)
    }
}

var bar = obj.foo
bar() // window

// 案例
function foo() {
    return function() {
        console.log(this)
    }
}

var fn = foo()
fn() // this

var obj = {
    name: 'jz',
    eating: fn
}

obj.eating() // obj 隐式绑定
```

### 规则二：隐式绑定

- 通过对象进行调用 



### 规则三：显示调用

通过call、apply 绑定 this 直接运行，bind绑定 this 返回一个新函数 

1. call 直接运行
2. apply 直接运行

```javascript
function foo() {
    console.log(this)
}
// foo 直接调用执行全局对象
foo()
// call、apply 可以指定 this 绑定对象
var obj = {
    name: 'zs'
}
foo.call(obj)
foo.apply(obj)
```

3. bind 返回一个新函数

```javascript
function foo() {
    console.log(this)
}
// 默认绑定与显示绑定bind冲突，优先级（显示绑定）
var bar = foo.bind('aaa')
bar()
```



### 规则四：new 绑定

- JavaScript中的函数可以当做一个类的构造函数来使用，也就是new关键字
- 使用new 关键字来调用函数，执行如下操作：
  1. 创建一个新对象 obj
  2. obj的原型对象[[Prototype]] 指向 构造函数的原型对象 prototype
  3. 使用指定参数调用构造函数，并将 this 绑定到新创建的对象
  4. 判断result ，result 是对象返回result，否则返回 obj

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
}

var p1 = new Person('jz', 18)
console.log(p1)
// new 的实现
function createNew(fn, ...args) {
    const obj = {}
    obj.__proto__ = fn.prototype
    const result = fn.prototype.contructor.apply(obj, args)
    return typeof result === 'object' ? result : obj
}
```

### this 补充

思考 js 原生方法的内部函数调用如何实现，例如setTimeout中 fn 的为独立函数调用，onclick 内部绑定 dom对象

```javascript
// 1. setTimeout，内部直接调用fn，独立调用函数，fn 的this 执行window
setTimeout(fn, 2000)

```

### 规则优先级

1. 默认绑定优先级最低

2. 显示绑定优先级高于隐式绑定

   1. ```
      // 隐式绑定
      var obj = {
      	name: 'obj',
      	foo() {
      		console.log(this)
      	}
      }
      
      obj.foo()
      obj.foo.call('abc')
      
      // bind
      function foo() {
      	console.log(this)
      }
      
      var obj = {
      	name: 'jz',
      	foo: foo.bind('aaa')
      }
      
      obj.foo() // String {'aaa'}
      ```

3. new 优先级高于隐式绑定

4. new 优先级高于显示绑定

```
function foo() {
	console.log(this)
}

var bar = foo.bind('aaa')

var obj = new bar()
obj // foo {}
```



> 优先级：默认 < 隐式 < 显示 < new

结论：new 关键字不能和call、apply 一是使用

### this 规则之外 - 忽略显示绑定

> apply/call/bind：当传入null/undefined 时，自动将this 绑定为全局对象

```
function foo() {
	console.log(this)
}

foo.apply('aaa')
// apply/call/bind：当传入null/undefined 时，自动将this 绑定为全局对象
foo.apply(null)
foo.apply(undefined)
var bar = foo.bind(null)
bar()
```

1. apply/call/bind：当传入null/undefined 时，自动将this 绑定为全局对象

2. 间接函数引用

   ```js
   var obj1 = {
   	name: 'obj1',
   	foo() {
   		console.log(this)
   	}
   }
   
   
   // 间接引用
   // 第一种情况
   var obj2 = {
   	name: 'obj2'
   }
   obj2.bar = obj1.foo
   obj2.bar() // {name: 'obj2', bar: ƒ}
   
   // 第二种情况，这种写法会报错，js在解析时会解析成如下格式，导致报错，正确的写法是在对象定义结束后加分号
   // 所以分号很重要，有些写法会导致解析错误
   /**
   var obj2 = {
   	name: 'obj2'
   }(obj2.bar = obj1.foo)()
   */
   // 错误写法
   var obj2 = {
   	name: 'obj2'
   }
   
   (obj2.bar = obj1.foo)()
   
   // 正确写法
   var obj2 = {
   	name: 'obj2'
   };
   // 这种写法(...)() 是独立函数调用，this 指向window
   (obj2.bar = obj1.foo)() 
   ```

3. 箭头函数(arrow function)

   1. 箭头函数不绑定 this、arguments属性
   2. 箭头函数不能作为构造函数来使用（和 new 一起使用，会抛出错误）
   3. 箭头函数的 this，是上层作用域的this
   4. 显示绑定不能改变箭头函数的 this

   ```javascript
   () => {}
   
   var nums = [1,2,3,4,5]
   nums.forEach((item, index, array)=>{})
   
   // 简写
   // 1. 函数只要一个参数 () 可以省略
   nums.forEach(item => {
       item % 2
   })
   // 2. 函数只返回一行代码 {} 可以省略
   // 强调：并且它会默认将这行代码的执行结果作为返回值
   nums.forEach(item => item % 2)
   // 3. 箭头函数返回一个对象
   var bar = () => ({name: 'jz'})
   ```

   ### 箭头函数 面试题

   ```js
   var name = "window";
   
   var person = {
     name: "person",
     sayName: function () {
       console.log(this.name);
     }
   };
   
   function sayName() {
     var sss = person.sayName;
     sss(); // window 独立函数调用
     person.sayName(); // person 隐式绑定
     (person.sayName)(); // person 隐式绑定
     (b = person.sayName)(); // window
   }
   
   sayName();
   ```

   ```js
   var name = 'window'
   var person1 = {
     name: 'person1',
     foo1: function () {
       console.log(this.name)
     },
     foo2: () => console.log(this.name),
     foo3: function () {
       return function () {
         console.log(this.name)
       }
     },
     foo4: function () {
       return () => {
         console.log(this.name)
       }
     }
   }
   
   var person2 = { name: 'person2' }
   
   person1.foo1(); // person1 隐式绑定
   person1.foo1.call(person2); // person2 显示绑定
   
   person1.foo2(); // window
   person1.foo2.call(person2); // window
   
   person1.foo3()(); // window 独立函数调用
   person1.foo3.call(person2)(); // window 独立函数调用
   person1.foo3().call(person2); // person2 显示绑定
   
   person1.foo4()(); // person1
   person1.foo4.call(person2)(); // person2
   person1.foo4().call(person2); // person 1
   ```

   ```js
   var name = 'window'
   function Person (name) {
     this.name = name
     this.foo1 = function () {
       console.log(this.name)
     },
     this.foo2 = () => console.log(this.name),
     this.foo3 = function () {
       return function () {
         console.log(this.name)
       }
     },
     this.foo4 = function () {
       return () => {
         console.log(this.name)
       }
     }
   }
   var person1 = new Person('person1')
   var person2 = new Person('person2')
   
   person1.foo1() // person1 隐式绑定
   person1.foo1.call(person2) // person2 显示绑定
   
   person1.foo2() // person1
   person1.foo2.call(person2) // person1
   
   person1.foo3()() // window 独立函数调用
   person1.foo3.call(person2)() // window 独立函数调用
   person1.foo3().call(person2) // person2 显示绑定
   
   person1.foo4()() // person1
   person1.foo4.call(person2)() // person2
   person1.foo4().call(person2) // person1
   ```

   ```js
   var name = 'window'
   function Person (name) {
     this.name = name
     this.obj = {
       name: 'obj',
       foo1: function () {
         return function () {
           console.log(this.name)
         }
       },
       foo2: function () {
         return () => {
           console.log(this.name)
         }
       }
     }
   }
   var person1 = new Person('person1')
   var person2 = new Person('person2')
   
   person1.obj.foo1()() // window 独立函数调用
   person1.obj.foo1.call(person2)() // window 独立函数调用
   person1.obj.foo1().call(person2) // person2 显式绑定
   
   person1.obj.foo2()() // obj
   person1.obj.foo2.call(person2)() // person2
   person1.obj.foo2().call(person2) // obj
   ```

   

## 函数式编程

### 实现apply、call、bind

> **`Object` 构造函数将给定的值包装为一个新对象。**
>
> - 如果给定的值是 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) 或 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined), 它会创建并返回一个空对象。
> - 否则，它将返回一个和给定的值相对应的类型的对象。
> - 如果给定值是一个已经存在的对象，则会返回这个已经存在的值（相同地址）。
>
> apply/call/bind：当传入null/undefined 时，自动将this 绑定为全局对象

```
// apply 考虑边界值
// window node 都有golbalThis全局对象
// fn.apply(obj, [1, 2, 3])
Function.prototype.myApply = function(thisArg, argArray = []) {
	// 1. 获取需要被执行的函数
	const fn = this
	// 2. 处理绑定的thisArg，基本数据类型绑定this
	const ctx = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : golbalThis
	// const args = Array.from(arguments).slice(1)
	// 3. ctx 添加 fn 属性，执行 隐式绑定 this
	const key = Symbol('key')
	ctx[key] = fn
	const res = ctx[key](...argArray)
	delete ctx[key]
	// 4. 返回 res
	return res
}

// call
// fn.call(obj, 1, 2, 3)
Function.prototype.myCall = function(thisArg, ...args) {
	// 获取需要被执行的函数
	const fn = this
	// 处理绑定的thisArg
	const ctx = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : golbalThis
	// const args = Array.from(arguments).slice(1)
	const key = Symbol('key')
	ctx[key] = fn
	const res = ctx[key](...args)
	delete ctx[key]
	return res
}

function foo(num) {
	console.log(num, this)
}

var obj = {
	name: 'jz'
}

foo.myApply(obj)

// bind
// fn.bind(obj, ...args) 返回一个新函数，可以 new
Function.prototype.myBind = function(thisArg, ...args) {
	// 1. 获取到需要调用函数
	const fn = this
	const ctx = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : globalThis
	const key = Symbol('key')
	ctx[key] = fn
	function proxyFn(...args1) {
		// 判断当前的 this.__proto__ 是否指向 Fn.prototype
		// this instanceof Fn 为true，说明new Fn(...args)
		if(this instanceof Fn) {
			this[key] = fn
            const res = this[key](...args, ...args1)
            delete this[key]
            return res
		} else {
            const res = ctx[key](...args, ...args1)
            delete ctx[key]
            return res
		}
		
	}
	proxyFn.prototype = fn.prototype
	return proxyFn
}

function foo(name, age) {
	this.name = name
	this.age = age
	console.log(this)
}

```



### arguments

- arguments 是一个 对应于传递给 函数的参数 的 类数组（array like）对象
- 箭头函数没有 arguments

#### 常见的arguments的操作：

1. 获取参数的长度 arguments.length
2. 根据索引值获取参数 arguments[0]
3. 获取到当前函数 arguments.callee

#### 类数组转数组

```js
// 1. 使用 for
var newArr = []
for(var i =0;i<arguments.length;i++){
	newArr.push(arguments[i])
}

// 2.
var newArr2 = Array.prototype.slice.call(arguments)
// 模拟 slice 的实现
Array.prototype.slice = function(start = 0, end = this.length){
	let arr = this
	let newArr = []
	for(let i = start ; i< end; i++) {
		newArr.push(arr[i])
	}
	return newArr
}
// 3.
var newArr3 = Array.from(arguments)
// 4
var newArr4 = [...arguments]
```

