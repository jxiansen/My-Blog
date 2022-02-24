# JavaScript 知识点

### JS 数据类型

七种基本数据类型:

- `Undefined`
- `Null`
- `Boolean`
- `Number`
- `String`
- `Symbol` (es6 新增)
- `BigInt` (es10 新增)

1 种引用数据类型 `object`

- 普通对象`object`
- 数组对象 `Array`
- 正则对象 `RegExp`
- 日期对象 `Date`
- 数学对象 `Math`
- 函数对象 `Function`

快速记忆法: **那你是真的牛逼 (u s N B)**

基础数据类型存储在栈内存中,引用数据类型存储在堆内存中.

### if...else...简写

- if()语句

```js
if (3 > 2) console.log(23);
```

- 三目运算符: 条件 ? 条件成立的执行语句 : null

```js
2 + 3 === 5 ? alert("true") : null;
```

- `&&` 条件为真走`&&` 后面的语句

```js
9 % 3 !== 0 && alert("成立");
```

- `||` 条件不管成不成立都走 `||`后面的语句

```js
 9%3！=0 || alert('成立')
```

## DOM

- DOM(document model model)文档对象模型

js 语言最初是为了 web 浏览器创造的，其主要作用就是为了操作 dom 元素，提供一种控制网页的方法。

![](http://i0.hdslb.com/bfs/album/729e41cb8f508a45b84ea9c0dcf4bcb440b59e62.png)

`window`为根对象

### 获取 dom 元素

- 通过 js 获取到页面的元素进行操作

通常有两类标签

1. 非常规标签

> 日常这样使用很少

```js
# html 标签
var html = document.documentElement
console.log(html)

# head 标签
var body = document.head
console.log(body)

# body 标签
var body = document.head
console.log(body)
```

2.  常规标签

- `getElementById()`

语法：查找范围.getElementById('id 名称')

在 document 中查找一个元素

返回值：

    有与此 id 匹配的元素，返回相应元素

    无与此 id 匹配的元素，返回null

- `getElementsByTagName()`

语法：查找范围.getElementsByTagName('标签名')

返回值：伪数组(常用的数组方法无法使用)

    遇到相匹配的标签元素，返回所有的元素

    如果没有相匹配的元素，返回空伪数组

- `getElementsByClassName()`

语法：查找范围.getElementsByClassName('类名')

返回值：伪数组(常用的数组方法无法使用)

    遇到相匹配的类元素，返回所有的元素

    如果没有相匹配的类名，返回空伪数组

- `getElementsByName()`

语法：查找范围.getElementsByName('元素 name 属性的值')

返回值：是一个伪数组

遇到匹配元素，返回所有相匹配的元素

没有匹配元素，返回空的伪数组

---

- `querySelector()`

语法：查看范围.querySelector('选择器')

选择器：所有在 css 中可以使用的选择器，这里都可使用

返回值：找到选择器匹配的元素，返回第一个找到的内容

如果没有找到选择器匹配的元素，返回 null

- `querySelectorAll()`

语法：查看范围.querySelectorAll('选择器')

返回值：找到所有选择器匹配的元素，返回所有内容

    未找到，返回null

**最后这两个选择器都不兼容低版本的 IE**

---

### 模块化(module)

前端应用原来越复杂，导致项目难以维护，需要引入模块化开发的思想解决问题，项目按需加载相应模块

### 对象

##### 对象的四种创建方式:

- 字面量创建

```js
let user = {};

let user = {
  name: "jack",
  age: 24,
  sex: "man",
  hobby: "music",
};
```

- 内置构造函数创建

```js
let user = new object();
user.name = "jack";
user.age = 24;
user.sex = "man";
user.hobby = "music";
```

- 工厂函数创建对象
  > 1. 先封装一个工厂函数
  > 2. 使用工厂函数来创建对象

```js
function createObj(name, age, sex, hobby) {
  //手动创建对象
  let user = {};

  // 手动添加成员
  user.name = name;
  user.age = age;
  user.sex = sex;
  user.hobby = hobby;

  //返回这个对象
  return user;
}
createObj("小王", 23, "男", "music");
// { name: '小王', age: 23, sex: '男', hobby: 'music' }
```

- 使用构造函数和`new`创建

构造函数本质上就是一个用来创造对象的常规函数,不过有两个注意点

1. 构造函数的命名用大写字母开头
2. 只能由`new` 操作符来执行

函数被`new` 操作符执的过程:

1. 创建一个空对象并分配给`this`
2. 为空对象添加属性
3. 隐式返回`this`

构造函数最后返回一个对象

```js
function User(name) {
  // this = {};(隐式创建)

  //添加属性到 this
  this.name = name;
  this.age = 23;

  //return this;(隐式返回)
}

let obj = new User("老王"); // User {name: '老王',age: 23}
```

构造器的主要作用:**实现可重用的对象代码**

##### 构造器的`return`

通常构造器不需要`return` ,他们主要的任务就是将必要的东西写入`this`,如果有`return`的话

- `return` 返回的是一个对象,则返回这个对象,而不是`this`
- `return ` 返回的是一个原始数据类型,则无效

```js
function User(){
  this.name = 'mike';
  return { name : 'jack'}		//返回的是这个对象,而不是mike
}
console.log(new.User().name);		//jack
```

```js
function User(){
  this.name = '老王';
  return 23;		//数字是基本数据类型,不会影响返回值
}
console.log(new.User().name);		//老王
```

构造函数如果没有参数,可以省略`new`后的括号;

```js
let user = new User(); //没有参数
let user = new User(); //等同
```

##### 构造器中的方法

```js
function User(name) {
  this.name = name;
  this.sayHi = () => console.log("我叫" + ":" + this.name);
}
// 普通函数
let tmp = new User("老王"); //使用new将函数变成构造函数,并传递给tmp
tmp.sayHi(); //我叫:老王
//构造出的对象,并调用对象的方法
```

使用构造函数创建出来的对象,这个对象都叫做这个构造函数的 `instance` (实列),`javaScript`提供了一种简单的方法来验证对象是否是由构造函数所创建的.返回`true` 或者 `false`

```js
let Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
};

let bird = new Bird("jack", "yellow");
bird instanceof Bird; // true;			bird是由构造函数创建的实例,所以返回true

let obj = { name: "Jack", color: "yellow", numLegs: 4 };
obj instanceof Bird; // false;			obj不是构造函数创建的实例,返回false
```

`prototype` 是一个可以在所有实例之间共享的对象,由于所有的实例都可以继承 `prototype` 看作是创建对象的配方. 在 `JavaScript` 中所有的对象都有几个 `prototype` 属性,这个属性是属于它所在的构造函数.

**对象两种属性**

- 自身属性: 直接在对象上定义的.
- `prototype`: 原型属性在`prototype` 上定义.

```js
function Bird(name) {
  this.name = name; // 自有属性
}

Bird.prototype.numLegs = 2; // 原型属性

let duck = new Bird("Jack");

let ownProps = []; // 自身属性数组
let prototypeProps = []; // 原型属性数组

for (let property in duck) {
  // for...in主要是用来遍历对象的所有属性,包括自有属性和原型属性
  if (duck.hasOwnProperty(property)) {
    // 遍历到的自有属性
    ownProps.push(property);
  } else {
    prototypeProps.push(property); // 遍历到原型属性
  }
}
console.log(ownProps); // [ 'name' ]
console.log(prototypeProps); // [ 'numLegs' ]
```

**`constructor` 属性**

每个实例对象都从原型中继承了一个`constructor` 属性,这个属性指向了用于构造此实例对象的构造函数.

```js
function Dog(name) {
  this.name = name;
}

// 检查创建这个实例是否是由这个Dog 创建的
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

**将原型用对象修改**

单独给`prototype` 添加属性,

```js
Bird.prototype.numLegs = 2;
```

如果需要添加多个原型属性,这样写就太拖沓了

```js
Bird.prototype.eat = function () {
  console.log("nom nom nom");
};

Bird.prototype.describe = function () {
  console.log("My name is " + this.name);
};
```

最有效的方式就是直接给对象的 `prototype` 设置一个已经包含了属性的新对象,直接将这个对象挂在到这个原型属性上.一次性添加进来.

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: () => console.log("nom nom nom"),
  describe: function () {
    console.log(`My name is ${this.name}`); // 箭头函数的this问题,只能用普通函数写法
  },
};
let dog = new Dog("jack");

console.log(dog); // { name: 'jack' }
console.log(dog.name); // jack
dog.eat(); // nom nom nom
dog.describe(); // My name is jack
```

**更改原型时，记得设置构造函数属性**

手动设置一个新对象的原型有个副作用: 会清除原本的 `constructor` 属性,这个属性可以用来检查是那个构造函数创建了实例,但是现在该属性已经被覆盖了.需要手动给原型对象中定义个 `constructor` 属性:

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog, // 手动的给原型对象添加 constructor 属性
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let dog = new Dog("Jack");
console.log(dog.constructor === Dog); // true
```

**对象的原型从哪里来**

对象可以直接从创建它的构造函数哪里继承其 `prototype`

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Jack");

// 检查 duck 对象是否继承自 Bird 的构造函数
console.log(Bird.prototype.isPrototypeOf(duck)); // true;
```

**原型链**

`JavaScript` 中基本所有的对象都有自己的 `prototype` .并且对象的 `prototype` 自身也是一个对象.所有他自己也有自己的 `prototype`

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(beagle.hasOwnProperty); // [Function: hasOwnProperty]
// beagle的原型是从 Dog 构造函数所继承的
console.log(Dog.prototype.isPrototypeOf(beagle)); // true

// Dog的原型是从 Object对象的构造函数所继承的.
console.log(Object.prototype.isPrototypeOf(Dog.prototype));
```

`hasOwnProperty` 是定义在 `Object.prototype` 上的一个方法,虽然在 `Dog` 的原型上面没有定义该方法,但是依然可以在这个对象上面访问到,这就是通过 `prototype` 链条访问的一个例子,因为 `Object` 是 `JavaScript` 中所有对象的 `supertype` ,因此所有的对象都可以访问 `hasOwnProperty` 方法.

#### Array

#### Math

- Math 对象不是一个构造函数,所以不需要`new`来调用,而是直接使用里面的属性和方法即可.

|     方法名      |                         描述                          |                       注意点                       |
| :-------------: | :---------------------------------------------------: | :------------------------------------------------: |
| `Math.random()` |           返回介于 `[0,1)` 之间的一个随机数           |
| `Math.round(x)` |             对 `x` 进行四舍五入为一个整数             |
| `Math.sign(x)`  |                  判断 `x` 的值的符号                  | 返回值:`1`正数,`-1`负数,`0`正零,`-0`负零,`NaN` NaN |
| `Math.max(...)` |                 返回括号中数字最大值                  |
| `Math.min(...)` |                 返回括号中数字最小值                  |
| `Math.floor(x)` |              返回小于等于 `x` 的最大整数              |
| `Math.ceil(x)`  |            返回大于或等于 `x` 的最接近整数            |
|  `Math.abs(x)`  |                   返回 `x` 的绝对值                   |
| `Math.acos(x)`  |                  返回 `x` 的反余弦值                  |
| `Math.asin(x)`  |                  返回 `x` 的反正弦值                  |
| `Math.atan(x)`  | 以介于-PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值 |

## ES6 相关知识

> **ECMA**：(Europen Computer Manufactures Association) 欧洲计算机制造联合会

- ECMAScript 和 javascript 的区别？

  ES 是标准规范,js 是实现,`ECMAScript` ≈ `JS`

#### var let 和 const

`var` 的缺点

- 没有块级作用域

  `var`声明的变量都是全局变量，在代码代码外部都是可以访问的，必须通过闭包的方式实现块级作用域

- 允许重复声明

  `var`可以重复声明一个变量，之前声明过的变量会被忽略

- `var`声明的变量，在声明语句前就已经被使用过

  声明的变量，会被自动提升到函数的顶部，成为函数的升格

<img src="http://i0.hdslb.com/bfs/album/e5dab58e4ec5fedc925b06b4d6cf56a5b232e56a.png" alt="image-20211221101416142" style="zoom:50%;" />

当使用 `let` 时候,同名的变量只能声明一次,否则会报错,如果使用 `var` 则会覆盖.

#### let 和 const 的区别

- `let`和`const`相类似，都含有块级作用域，都不允许变量提升,不允许重复声明
- `const` 声明的变量是一个只读的常量，一但声明其值不能重新赋值修改，想要修改就必须立即初始化

`const` 声明的关键字通常用大写字母作为常量标识符

```js
const NUM = 12;
const HUMAN_NAME = "jack";
```

**注：`const` 声明并不能保证变量的值不得改动，而是指向变量内存地址的指针不能改动是固定的，对于复合数据类型的数据（对象和数组），指向的数据依旧是可以变动的。**

```js
const ARR = [1，2，3，4]；
ARR = [5,6,7,8];	//错误
ARR[3] = 5;		//输出[1,2,3,5]
```

#### 彻底冻结对象

`const` 声明的对象并不是真正的不可改，可以使用`Object.freeze(对象)`来彻底冻结保护对象数据不被改写

```js
let user = {
  name: "jack",
  age: 10,
  hobby: "game",
};
Object.freeze(user); //冻结了这个对象
user.age = 20; //普通模式下不会报错，但是数据无法改写,严格模式下会报错
console.log(user); //{ name: 'jack', age: 10, hobby: 'game' }
```

#### 箭头函数和 this 的指向问题

> 语法简洁,方便作为回调函数使用

`let` `函数名` = `(参数)` => `函数体`

```js{7}
//  原函数
let sum = function(a,b) {
  return a + b;
};

// 箭头写法
let sum = (a,b) => a + b;
```

**注意点:**

- 函数体只有单行时,无需写 `return` 关键字
- 多行的函数体,需要使用花括号 `{}` 包裹,并使用 `return` 返回相应的值
- 参数只有一个时,可以直接省略括号
- 没有参数,括号也需要保留空置

在 JavaScript 中, `this` 是自由的,他的值是在调用的时候根据上下文**计算**出来的,并不取决于方法声明的位置,而是取决与在"点符号"前的是什么对象.

箭头函数没有自己的 `this` ,箭头函数内部访问到的 `this` 都是外部获取的,默认指向在定义它时所处的宿主对象

#### 设置函数的默认参数

ES6 语法允许参数传入默认的参数，来更加的灵活的运用函数

```js
let sum = (num = 10) => num + 2;
sum(); //12
sum(5); //7
```

#### rest 展开运算符

使用`...` 展开运算符，可以创建一个变量来接受多个参数的的函数，这些参数以数组的形式存储在函数内部读取的数组中，在此函数内部，各种数组的方法也都可以使用。

```js
const sum = (...args) => {
  let tmp = 0;
  for (let i of args) {
    tmp += i;
  }
  console.log(args.length);
  return tmp;
};
sum(1, 2, 3, 4); //4, 10		函数内部，y
```

#### Map 和 set(集合与映射)

ES6 之前的语法，处理"键值对"形式的存储时，都是使用*对象*来进行的。Map 是新的集合类型，真正使用了键值存储机制。

方法和属性：

- `new Map()`:创建集合
- `map.set(key,value)` :增加存储值
- `map.delete(key)` :删除指定键的值
- `map.get(key)` :查询访问指定键，返回相应值，没有该`key`则返回 `underfined`
- `map.has(key)` :判断`key`是否存在，存在返回`true`,否则返回`false`
- `map.clear()` :清空`map`
- `map.size` :返回`map`中实体的个数

Map 迭代

- `map.keys()` :遍历并返回所有的键
- `map.values()` :遍历并返回所有的值
- `map.entries()` :遍历并返回所有的实体

```js {7,17,27}
let map = new Map([
  ["白菜", 12],
  ["糖醋里脊", 32],
  ["红烧肉", 45],
]);
// 遍历集合键
for (let son of map.keys()) {
  console.log(son);
}
/*
 白菜
糖醋里脊
红烧肉
*/

// 遍历集合值
for (let son of map.values()) {
  console.log(son);
}
/* 
12
32
45
*/

// 遍历集合实体
for (let son of map.entries()) {
  console.log(son);
}
/* 
[ '白菜', 12 ]
[ '糖醋里脊', 32 ]
[ '红烧肉', 45 ]
*/
```

​
