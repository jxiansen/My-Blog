# 前端面试题

纪录自己学习中所遇到的面试题

## HTML



## CSS

### ::before 和 ::after的作用是什么？ CSS3中单冒号 ：和双冒号 :: 的区别是什么？ 

单冒号是伪类，表示被选中元素的某一种状态，例如 `:hover` ,

双冒号是伪元素的标识符,表示被选中元素的某个部分，这个部分看起来像独立的元素，但是这个元素是假元素并不存在，所以叫伪元素。例如：`:before`和 `:after`

### 如何居中下面代码中的  .middle 元素？ 水平居中？ 垂直居中？

``` css
.container {
  width: 600px;
  height: 600px;
  padding: 0;
  margin: 0;
  border: red 1px dashed;
}

<!-- html -->
<div class="container">
  <div class="middle"></div>
</div>
```

1. 水平居中

``` css
/* 给middle 块级元素设置长宽，并设置 margin */
.middle {
    margin: 0 auto;
    width: 10px;
    height: 10px;
}
```

<img src="http://i0.hdslb.com/bfs/album/868a8e039547cde63d51c6b0ea56b163d5d8a90a.png" alt="截图 2022-07-21 16.39.28" style="zoom:50%;" />

2. 垂直居中

``` css
/* 1.使用flex 布局 */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 2. 使用grid 布局 */
.container {
    display: grid;
    justify-content: center;
    align-items: center;
}

/* 3. 使用绝对定位 */
.container {
    position: relative;		// 子绝父相
}
.middle {
    position: absolute;
    top: 50%;			// 移动容器的一半
    left: 50%;
    translate: -50% -50%;	// 补偿的子元素一半
}
```



## 代码输出篇

### 代码执行的结果

``` js
var scope = "xiaomai";
function fn() {
  console.log(scope);
  scope = "xiaomai5";
  console.log(scope);
  var scope = "xiaomaiketang";
  console.log(scope);
}
console.log(scope);
fn();
```

``` js
// 执行结果
xiaomai
undefined
xiaomai5
xiaomaiketang
```

### setTimeout 代码执行结果

``` js
// 这里如果使用 var 和 let 结果是不一样的
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log(i);
```

* `var` 的情况

![image-20220720223000299](http://i0.hdslb.com/bfs/album/cff1a451cf19bdc200ea24e70255d00a3b88663b.png)

先打印出5 一秒钟之后连续输出5 个 5

* `let` 的情况

![image-20220720223100572](http://i0.hdslb.com/bfs/album/43a2d294f7f40c269f538fd24fd1f2b530a41435.png)

先报错，一秒之后打印出 1，2，3，4

### 说一说 const var 和 let 区别，并写出以下代码输出的结果。

* var 用来声明全局变量
* let 声明块级作用域变量
* const 声明块级不可改变的变量

``` js
const user = { name: "jack", age: 12 };
user.age++;
user.name = "mike";

// 结果1 : {name: "mike", age: 13}
console.log(user);

user = { name: "jack", age: 12 };
// 结果2 :  Uncaught TypeError: Assignment to constant variable.
console.log(user);
```

const 声明的变量不可以被重新赋值

### 代码执行结果

``` js
setTimeout(() => {
  console.log("aaa");
}, 0);

new Promise((resolve) => {
  console.log("bbb");	// 此处都没有调用 resolve 
}).then(() => {
  console.log("ccc");
});

console.log("ddd");

// bbb
// ddd
// aaa
```



## JavaScript

### 基本数据类型和引用数据类型的区别？ 堆内存和栈内存？

JavaScript中的数据类型分为两种，基本数据类型和引用数据类型，也可以叫做可变数据类型和不可变数据类型。

基本数据类型主要包括：Number，string, boolean,null,undefined,symbol,bigInt

引用数据类型：Object

**区别**

* 基本数据类型不可变，引用数据类型数据可变
* 基本数据类型存放在栈内存中，引用数据类型存放在堆内存中

两种内存存储方式区别： 

* 栈内存： 一种特殊的线性表，具有后进先出的特性，存放基本类型，数据简单大小确定
* 堆内存： 存放引用数据类型，在栈内存中存一个基本类型值（指针就是这个变量名）保存对象在堆内存中的地址，用于引用这个对象，数据类型复杂大小不固定
* ![image-20220721221619522](http://i0.hdslb.com/bfs/album/270418daddaeabfcdc501eb4505391b23871b534.png)

### null 和undefined 的区别？

js是弱类型的语言，变量本身是没有类型的，只有变量内存储的数据才有类型，所有未定义，未赋值的变量都是 `undefined` .简而言之就是 **没有值**

### 统计数组元素出现的次数

``` js
有一个数组arr,统计出数组中每个元素的出现次数
arr = ['dog','cat','tiger','cat','duck','dog','cat']
```

``` js
// 每次遍历item的时候,初始对象中如果没有该元素则添加,元素已存在就对值加一
function count(arr) {
  return arr.reduce((acc,item) => {
  	acc[item] = acc[item] ? acc[item] + 1 : 1;
  	return acc
	} ,{})
}
```

## 手写源码系列

### Call

call: 改变当前函数执行时候内部的this,实现过程就相当于在 context 中添加了一个函数,然后在这个 context 中调用这个函数

``` js
Function.prototype.customCall = function (context, ...args) {
  context = context || window; // 如果没有传值或者传值为空,将context指向 window
  context.func = this; // 在这个context中添加新方法,此处的this就是值这个函数
  context.func(args); //  调用方法
  delete context.func; // 删除该方法
};
```

![image-20220724120508283](http://i0.hdslb.com/bfs/album/a2421b9cbc27eac4c905b0e750ad067ab9c55678.png)

### apply

作用和call差不多就是第二个参数是数组

``` js
Function.prototype.customApply = function (context, arr) {
  context = context || window;
  arr = arr ? arr : [];
  const funcKey = Symbol();
  context.funcKey = this;
  const result = context.funcKey(arr);
  delete context.funcKey;
  return result;
};
```

### bind

返回一个绑定好this的函数,bind调用的时候可以传参，掉后之后返回的新函数也可以传参，效果一样所以也需要处理

``` js
Function.prototype.customBind = function (context, ...args) {
  const fn = this; // 接收原函数
  args = args ? args : []; // 判断接收的剩余参数存在与否
  return function (...newFnArgs) {
    return fn.apply(context, [...args, ...newFnArgs]);
  };
};
```

### Array.forEach

对数组的每一项执行回调函数

``` js
Array.prototype.customForEach = function (callback) {
  // 此处的this就是这个数组,回调函数中包含三个参数
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
```

### Array.map

返回经过处理的数组

``` js
Array.prototype.customMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = callback(this[i], i, this);
  }
  return res;
};
```

### Array.Every

数组每一项都符合处理条件就返回 true,否则返回 false

``` js
Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
```

### Array.some

数组中只要有一项不返回条件就返回 true ,否则就返回 false

``` js
Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
```

### Array.Filter

过滤出处理条件为 true 的数组项目

``` js
Array.prototype.customFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
```

### Array.reduce

reduce 数组累计结果

``` js
Array.prototype.customReduce = function (callback, initVal) {
  // 上一次调用的结果,函数第一次调用的时候就是初始值
  let preVal = initVal ? initVal : this[0];
  for (let i = 0; i < this.length; i++) {
    preVal = callback(preVal, this[i], i, this);
  }
  return preVal;
};
```

### debounce防抖函数

函数的防抖，这个函数能够取消调用一大堆的调用操作，只调用最后一次操作并延迟操作

**要点**

* 每次调用取消抖动函数之前先清除上次的挂起的超时定时器，然后再创建新的 bounce 函数
* 使用 apply 将 this 提供给调用的函数
* 使用默认参数，将延迟值设为 0

``` js
const debounce = function(fn,ms=0) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        setTimeout(() => {fn.apply(this,args)},ms)
    }
}
```



### 手写  `Promise.all`

``` js
// 手写 promise.all 方法
function PromiseAll(arr) {
  // 1. 首先这个函数需要返回一个 promise
  return new Promise((resolve, reject) => {
    // 判断入参是否为数组
    if (!Array.isArray(arr)) {
      return reject(new Error("传入的参数必须为数组"));
    }

    const res = [];
    // 2. 累计有没有 resolve 掉所有的 promise
    let counter = 0;
    arr.forEach((val, idx, arr) => {
      Promise.resolve(val)
        .then((result) => {
          counter++;
          res[idx] = result;
          if (counter === arr.length) {
            // 3. 全部都resolve 掉后, resolve出所有结果
            resolve(res);
          }
        })
        .catch((err) => reject(err)); // 处理错误结果
    });
  });
}
```

### 数组扁平化

``` js
// 1. 方法一,如果数组中全是数字的话要转成数字
function flatten(arr) {
  return `${arr}`.split(",").map((i) => +i);
}

// 2. 方法二, 递归
function flatten(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flatten(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

// 3. ES6实现
function flatten(arr) {
  debugger;
  while (arr.some((i) => Array.isArray(i))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```

### 数组去重

```js
// 方法一 声明新数组,forEach遍历数组,判断目标数组中是否有原数item,如果没有则添加
function fn(arr) {
  let res = [];
  arr.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}

// 方法二 新建Set集合(集合中的值只能出现一次),对集合进行展开
function fn(arr) {
  return [...new Set(arr)];
}

// 方法三 使用filter过滤
function fn(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

// 方法四 使用reduce, 第二个参数为空数组,每次遍历迭代时,判断空数组中是否有item,
// 如果有的话直接返回累加器,没有的话返回新数组
function fn(arr) {
  return arr.reduce((pre, item) => {
    return pre.includes(item) ? pre : [...pre, item];
  }, []);
}
```

### 数据类型判断实现

typeof 可以正确判断： undefined 、Boolean、Number、String、Symbol、Function等类型的数据

但是其他的数据都会认为是 object,比如：Null ,Date等，所以原生的typeof函数判断数据类型并不准确

``` js
function typeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
}
```





## 浏览器

### 请描述下 cookie, session 和 localStorage 的区别？

1. **生命周期**
   * `cookie` : 可以设置失效时间，expires或者 max-age 不设置的话页面关闭就失效
   * `localStorage` : 除非手动删除，否则永久保存
   * `sessionStorage` : 仅在当前网页会话下有效，关闭页面或者浏览器后就会被清除
2. **存放数据大小**
   * `cookie` : 94年就被发明出来的，由于网络带宽小所以只有4kB左右的大小
   * `localStorage` 和 `SessionStorage` : 可以保存5MB大小的信息
3. **http请求**
   * `cookie` : 每次都会携带在 http 头部中，如果 cookie 保存过多的数据会带来性能问题
   * `localStorage和sessionStorage` : 仅在浏览器中保存，不参与和服务端的通信

## React

### 声明组件的方式，有什么不同和优缺点？

### setState 是同步还是异步？



## 其他

### 从键盘输入 URL 开始到浏览器页面加载完成的过程中都发生了什么事情？

* DNS解析： 将输入的域名解析成主机对应的 ip 地址
* TCP 连接： TCP 三次握手
* 发送 HTTP 请求
* 服务器处理请求返回 HTTP 报文
* 浏览器解析请求的数据并加载 dom 树渲染页面
* 断开连接： TCP 四次挥手

## HR面试相关

### 做个简单的自我介绍

### 为什么要干前端？

### 平时是怎么学习前端的？

### 你觉得你的优势和不足是什么？

**优势**

*  对于感兴趣的技术学习的动力非常强，愿意和周围的朋友分享
* 关心最新的行业动态，时刻保持好奇心

**不足**

不感兴趣的内容学习不下去，比如数据库

### 你还有什么想问我的？

* 公司的产品主要技术栈，开发流程是怎样的
* 前后端的配比情况
* 如果我入职了，具体的开发职责

### 对未来的职业规划？

* 继续打牢前端最基础的三大件
* 短期任务学好 `ts` ,长期任务学习 `node` 相关
* 提高自己的表达能力和沟通能力

