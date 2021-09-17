## **牛客网练习题**

牛客网`JavaScript`基础练习挑战记录

### 移除数组中的元素

![](http://i0.hdslb.com/bfs/album/3f1272da0d48cc16b019c5f315bf07e7f5a07463.png)

```js
---方法一---
function removeWithoutCopy(arr,item){
  	for(let i = 0; i < arr.length; i++){
      if(arr[i] == item){
        arr.splice(i,1);
        i--;
        //由于每次去掉数组的头部,数组的长度都会减一,arr[i]的指向会后移,所以i--
      }
    }
  return arr
}

---方法二---
function removeWithoutCopy(arr,item){
  let n = arr.length;
  for(let j = 0; i < n; j++ ){
    if(arr[0] !== item){
			arr.push(arr[0]);
    }
    arr.splice(0,1);
    //每次判断数组第一项是不是item,不是的话加入到数组的末尾,是的话直接就删掉item
  }
	return arr;
}

```

### 添加元素

![](http://i0.hdslb.com/bfs/album/aedbbca91ad22f5445051b205053d17455a7b0b8.png)

```js
//方法一,声明空数组,遍历arr打入空数组,最后打入item
function append(arr,item){
  let tmp = []
  for(let i for arr){
    tmp.push(i);
  }
  tmp.push(item);
  return tmp;
}

//方法二,arr.slice()不带参数可以复制返回数组的副本
function append(arr,item){
	let tmp = arr.slice();
  tmp.push(item)
  return tmp;
}

//方法三,直接使用concat连接数组
function append(arr,item){
  return arr.concat([item]);
}
```

### 21.删除数组最后一个元素

![](http://i0.hdslb.com/bfs/album/a49683795c97586c7a5723e2f2c54eb867423de7.png)

```js
//方法一,复制出新数组,末尾添加新元素
function truncafe(arr) {
  let tmp = arr.slice();
  tmp.pop();
  return tmp;
}

//方法二,arr.slice方法,返回新数组,原数组从头数第一个到从尾数倒数第二个切片
function truncafe(arr) {
  return arr.slice(0, -1);
}
```

### 22.添加元素

![](http://i0.hdslb.com/bfs/album/9db79ddeeab19efc07ad97f20da6c82f3489ea2d.png)

```js
//方法一,拷贝出新数组,再添加元素到头部
function prepend(arr, item) {
  let tmp = arr.slice();
  tmp.unshift(item);
  return tmp;
}

//使用concat创建新数组并连接
function prepend(arr, item) {
  return [item].concat(arr);
}

// 展开运算符...
function prepend(arr, item) {
  return [item, ...arr];
}
```

### 23.删除数组的第一个元素

![](http://i0.hdslb.com/bfs/album/7e992a0cd9031a53666b65ffdf847e1d7e4be9d6.png)

```js
//方法一,使用slice()拷贝出新数组,在使用shift去除新数组的首位
function curtail(arr){
  let tmp = arr.slice();
  tmp.shift();
  return tmp;
}

//方法二,slice对数组切片
function curtail(arr) {
    return arr.slice(1);
}

//方法三,空数组concat连接后,相当于拷贝副本,在shift
fuction(arr){
  let tmp = arr.concat();
  tmp.shift();
  return tmp;
}
```

### 24.数组合并

![image-20210722155256824](http://i0.hdslb.com/bfs/album/0f22f1948c7eabdb548b53b4049d4b8d0ba4c228.png)

```js
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
//concat方法返回的是新数组
```

### 25.添加元素

![](http://i0.hdslb.com/bfs/album/4f83ad0f4c60e341d44fc2bba838bf249f142d16.png)

```js
//利用slice和concat
function insert(arr, item, index) {
  return arr.slice(0, index).concat([item], arr.slice(index));
}

//利用slice拷贝在使用splice拼接替换
function insert(arr, item, index) {
  let tmp = arr.slice();
  tmp.splice(index, 0, item);
  return tmp;
}
```

### 20.添加元素

![image-20210901181712463](http://i0.hdslb.com/bfs/album/952089721018a087f8ee161833b49aa4cf82cfd7.png)

```js
// 直接使用ES6的...spread展开操作符号
function append(arr, item) {
  return [...arr, item];
}

// 方法二 slice复制出一份,在push进去
function append(arr, item) {
  let res = arr.slice();
  res.push(item);
  return res;
}
```

### 26.计数

![image-20210722163449677](http://i0.hdslb.com/bfs/album/e80c0e9526b74fe111200f6a867de312ca82919e.png)

```js
// 数组遍历计数
function count(arr, item) {
  let count = 0;
  arr.forEach((i) => {
    if (i === item) {
      count++;
    }
  });
  return count;
}

// reduce遍历计数
function count(arr, item) {
  return arr.reduce((acc, val) => (val === item ? acc + 1 : acc), 0);
}

// filter过滤取长度
function count(arr, item) {
  return arr.filter((i) => i === item).length;
}
```

### 27.查找重复元素

![image-20210722180804955](http://i0.hdslb.com/bfs/album/da5653c81af76efd660b7d8da73a8e1daece6022.png)

```js
//关键是判断数组中间项和前项的位
function duplicates(arr) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1] && arr[i] !== arr[i - 1]) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
}
```

### 求二次方

![image-20210723155435049](http://i0.hdslb.com/bfs/album/6d1614fa1d424f5db2dbb6dfe2d7b35eed93e615.png)

```js
//方法一,复制出一个数组出来,遍历此数组元素,对每个元素的值push到新数组中
function square(arr) {
  let tmp = arr.slice();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(tmp[i] * tmp[i]);
  }
  return newArr;
}

//方法二,拷贝出新数组后,shift取得首位,push到末尾执行数组length次
function square(arr) {
  let tmp = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    let n = arr.shift();
    n *= n;
    tmp.push(n);
  }
  return tmp;
}

//方法三,使用数组的map方法,对数组的每一项回调返回平方
function square(arr) {
  return arr.map((item) => item * item);
}

// forEach():会修改原来的数组  ; map():得到一个新数组并返回
```

### 查找数组元素

![image-20210723182626339](http://i0.hdslb.com/bfs/album/94f9b57451720b0cee0beaffc52a0549f85bc2f7.png)

```js
//方法一,遍历数组,将遍历时索引给打入新数组
function findAllOccurrences(arr, target) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      tmp.push(i);
    }
  }
  return tmp;
}

//方法二,使用数组map方法,map方法最后返回的就是一个新数组
function findAllOccurrences(arr, target) {
  return arr.map((item, index) => {
    if (target == item) {
      return index;
    }
  });
}
```

### 避免全局变量

![image-20210723190410320](http://i0.hdslb.com/bfs/album/5e30894249a4c3da6a55282cf2ae5335ea4f94c6.png)

```js
//题目
function globals() {
  myObject = {
    name: "老王",
  };
  return myObject;
}

//函数内对象没有声明,直接变成全局变量,直接使用var或者let声明一下就好了
function globals() {
  let myObject = {
    name: "老王",
  };
  return myObject;
}

function golobals() {
  return { name: "老王" };
}
```

### 正确的函数定义

![image-20210726131718017](http://i0.hdslb.com/bfs/album/d76184ad27195b43c33cf0ed209c8f46113b1222.png)

```js
//题目
function functions(flag) {
  if (flag) {
    function getValue() {
      return "a";
    }
  } else {
    function getValue() {
      return "b";
    }
  }

  return getValue();
}

//方法一,考察function 函数名 (){} 和 var 函数名 = function () {} 之间的区别
//前者是在执行前,就会被解析,后者是在执行过程中被解析
function functions(flag) {
  let getValue = null;
  if (flag) {
    getValue = function () {
      return "a";
    };
  } else {
    getValue = function () {
      return "b";
    };
  }
  return getValue();
}

//方法二
function functions(flag) {
  return flag ? "a" : "b";
}
```

### 正确的使用 `parseInt`

![image-20210726142355840](http://i0.hdslb.com/bfs/album/f4cee1355f75607bdff8778a746cbf8d3d7b2223.png)

```js
//原题
function parse2Int(num) {
  return parseInt(num);
}

function parse2Int(num) {
  return parseInt(num, 10);
}

//parseInt(string, radix):string:需被解析的字符串,radix:要解析数字的基数,值在0~36之间
```

### 完全等同

![image-20210726143657770](http://i0.hdslb.com/bfs/album/ee2974b69b46d720d08f0dcb86ac6b8e09d8e6b7.png)

```js
function identity(val1, val2) {
  return val1 === val2;
}

//知识点: == 弱相等,不同类型的数据相比较的话,会进行自动数据类型转换,
//       === 严格相等,比较时不会做任何数据类型转换,值要相同,数据类型也要相同
```

### 计时器

![image-20210726152853196](http://i0.hdslb.com/bfs/album/930005f2059b64fa60763ecd5822f7fc26ce63fa.png)

```js
function count(start, end) {
  //立即输出第一个数
  console.log(start++);
  let timer = setIntval(() => {
    start <= end ? console.log(start++) : clearInterval(timer);
  }, 100);
  return { cancel: () => clearInterval(timer) };
}
//设置定时器后,计数器开始增加到结束后,清除定时器
```

---

**空值合并运算符 `??`**

`a ?? b` 结果:

- 如果 `a` 是已定义,则结果为 `a`
- 如果 `a` 未定义,则结果为 `b`

```js
let fruit;
console.log(fruit ?? "apple"); //apple
//变量声明后未赋值,返回 ?? 符号后面的参数

let fruit = "banana";
console.log(fruit ?? "apple"); //banana
//变量已经声明,返回原来的值
```

**三元运算符 `? `**

```js
let result = condition ? value1 : value2;
//如果condition条件为真则返回 值1,否则返回 值2;为了增加代码可读性,通常给判断语句加一层括号

let age = 20;
let info = age < 18 ? "未成年" : "成年人";
console.log(info);

//多重判断的运算符
let age = 34;
let message =
  age < 16
    ? "少年"
    : age < 18
    ? "未成年"
    : age < 25
    ? "青年"
    : age < 45
    ? "中年"
    : "老年";
console.log(message);
等价于;
if (age < 16) {
  message = "少年";
} else if (age < 18) {
  message = "未成年";
} else if (age < 25) {
  message = "青年";
} else {
  message = "老年";
}
```

---

### 流程控制

![image-20210726172502644](http://i0.hdslb.com/bfs/album/7fa930aedef3f6fa1cdb7bf697aaa517b8b49dca.png)

```js
function fizzBuzz(num) {
  return num % 3 === 0 && num % 5 === 0
    ? "fizzbuzz"
    : num % 3 === 0
    ? "fizz"
    : num % 5 === 0
    ? "buzz"
    : Object.prototype.toString.call(num) !== "[object Number]"
    ? false
    : num;
}
//使用Object.prototype.toString.call(num)来判断是否是number数据类型
```

**知识点**

`typeof`运算符返回参数的类型,两种使用方式

- 直接作为运算符: `typeof x`
- 函数形式: `typeof(x)`

有没有括号,两者结果差不多,使用 `typeof x`的调用会以**字符串**的形式返回数据类型;

```js
typeof 12; // "number"
typeof "apple"; //"string"
typeof false; //"boolean"
let a = typeof 12;
typeof a; //"string",因为返回是字符串格式
```

使用 `Object.prototype.toString.call()` 来检测对象类型, `typeof` 不能准确判断对象变量

```js
console.log(Object.prototype.toString.call("jerry")); //[object String]
console.log(Object.prototype.toString.call(12)); //[object Number]
console.log(Object.prototype.toString.call(true)); //[object Boolean]
console.log(Object.prototype.toString.call(undefined)); //[object Undefined]
console.log(Object.prototype.toString.call(null)); //[object Null]
console.log(Object.prototype.toString.call({ name: "jerry" })); //[object Object]
console.log(Object.prototype.toString.call(function () {})); //[object Function]
console.log(Object.prototype.toString.call([])); //[object Array]
console.log(Object.prototype.toString.call(new Date())); //[object Date]
console.log(Object.prototype.toString.call(/\d/)); //[object RegExp]
function Person() {}
console.log(Object.prototype.toString.call(new Person())); //[object Object]
```

---

### 二进制转换

![image-20210728171600119](http://i0.hdslb.com/bfs/album/b74236b9bda7fb9606162afdfb2984908512aef8.png)

```js
function base10(str) {
  return parseInt(str);
}

//parseInt(str,radix):将字符串读取数字,并以指定基数(radix)返回
```

### 二进制转换

![image-20210728181338865](http://i0.hdslb.com/bfs/album/fa30dd116110f5c06a333b99c1a044314d09461a.png)

```js
function converToBinary(num) {
  let tmp = num.toString(2);
  let len = tmp.length;
  return len < 8 ? "0".repeat(8 - len) + tmp : tmp;
}
```

### 二进制转换

![image-20210901142704660](http://i0.hdslb.com/bfs/album/fea26f31691d2ef1def2c9c7d8ff6d214d711b49.png)

```js
// 方法一 直接使用原生的方法,字符串转二进制 ==> 分割为数组 ==> 反转数组访问
function valueAtBit(num, bit) {
  return num.toString(2).split("").reverse()[bit - 1]; // 注意:最后返回值是string类型
}

// 方法二 模拟除法运算
function valueAtBit(num, bit) {
  let res = 0;
  for (let i = 0; i < bit; i++) {
    res = num % 2;
    num = parseInt(num / 2);
  }
  return res;
}
```

### 判断是否包含数字

![image-20210729091258496](http://i0.hdslb.com/bfs/album/61a6a4f308a6f1f8dcfd52228ffae69f7d12a684.png)

```js
//遍历字符串,并且对每个字符串判断ASCII码值
function containsNumber(str) {
  for (let char of str) {
    if (char.charCodeAt() < 58 && char.charCodeAt > 47) {
      return false;
      break;
    }
  }
  return true;
}

//遍历字符串,使用 !NaN 判断是否为数字
function containsNumber(str) {
  for (let item of str) {
    if (!isNaN(item)) {
      return true;
    }
  }
  return false;
}
```

### 斐波那契数列第 n 项值

![image-20210812144325644](http://i0.hdslb.com/bfs/album/89cf0d462c9324c21dc4727c846d2b6591b31046.png)

```js
// 方法一,新建初始数组,循环(n-1)次,每次将数组的倒数第一项与倒数第二项的和push进去,最后返回数组的pop
function fibonacci(n) {
  let arr = [0, 1];
  let i = 1;
  while (i < n) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    //还可以使用es6语法的arr.at()反向索引访问数组的值
    //arr.push(arr.at(-2) + arr.at(-1));
    i++;
  }
  return arr.pop();
}

//方法二,递归
function fibonacci(n) {
  return n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

//方法三,迭代
function fibonacci(n) {
  let start = 1,
    second = 1,
    end;
  for (let i = 3; i <= n; i++) {
    end = start + end;
    start = second;
    second = end;
  }
  return end;
}
```

### 或运算

![image-20210815124741282](http://i0.hdslb.com/bfs/album/6c9e14e4fc252d957f67ac9da5045917aac7ff4e.png)

```js
function or(a, b) {
  return a || b;
}
```

### 且运算

![image-20210815124857068](http://i0.hdslb.com/bfs/album/e56d10e41b4d0b87afc9d5e6f1b613426395357a.png)

```js
function add(a, b) {
  return a && b;
}
//且运算规则:如果a的布尔值是true ===> 返回b的值
//				 如果a的布尔值是false===> 直接返回a的值,且不再对第二个运算子求值
```

### 使用 arguments

![image-20210901140106457](http://i0.hdslb.com/bfs/album/9c43d0889c659ae963d86c0e36b9a2e3ac3a8790.png)

```js
function useArguments() {
  return Array.from(arguments).reduce((acc, item) => acc + item, 0);
}
```

### 柯里化

![image-20210901152200855](http://i0.hdslb.com/bfs/album/f97b0645bdcd0032b1c16c9917511d852340cc2d.png)

```js
// 函数柯里化: 把接受多个参数的函数变成接受多个单一参数的函数
function curryIt(fn) {
  return function(a) {
    return function(b) {
      return fucntion(c) {
        return a + b + c
      }
    }
  }
}

// 直接使用ES6的语法会更加简洁
let curryIt = fn => a => b => c => a + b + c
```

### 模块

![image-20210901154742901](http://i0.hdslb.com/bfs/album/b69f3ab80df5b5cb3f57599e6621242d7823928f.png)

```js
function createModule(str1, str2) {
  let obj = {
    greeting: str1,
    name: str2,
    sayIt: function () {
      return this.greeting + ", " + this.name;
    },
  };
  return obj;
}
```

### 数组去重

![image-20210901160808677](http://i0.hdslb.com/bfs/album/a03a3368a253688fd708315807929be2a2fb92d8.png)

```js
// 遍历迭代去重
Array.prototype.uniq = function () {
  let res = [];
  this.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
};

// 利用set集合中的值唯一特性去重
Array.prototype.uniq = function () {
  return [...new Set(this)];
};
```

### 获取字符串的长度

![image-20210901175430497](http://i0.hdslb.com/bfs/album/13f00c5229261b4cf800fbfc0dc318c49db8e94a.png)

```js
function strLength(s, bUnicode255For1) {
  if (bUnicode255For1) {
    return s.length;
  } else {
    return s
      .split("")
      .reduce((acc, item) => (item.charCodeAt() > 255 ? acc + 2 : acc + 1), 0);
  }
}
// reduce方法遍历到每个数组元素的时候,对累加器进行操作,最后返回累加器的值
```

## FreeCodeCamp 基础算法

自学`js` 总感觉很多地方知识掌握的不到位,希望通过系统的刷题提高自己的知识掌握能力,写文章强迫自己输出,形成系统的思维.

[FCC 官网链接](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)

[JS 基础算法课程\_B 站链接](https://www.bilibili.com/video/BV1iZ4y1p7kr)

### 摄氏度转换为华氏度

![image-20210814174446734](http://i0.hdslb.com/bfs/album/2888730d1262e7b10c79b43b0af2cb0cabd07123.png)

```js
function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}
//对于结果直接返回即可
```

### 反转字符串

![image-20210815011341225](http://i0.hdslb.com/bfs/album/206c6a2b330c0c989a518013e99592831c5885e0.png)

```js
输入: "hello";
输出: "olleh";
```

```js
// 思路一,split拆分成数组 ==> 数组倒置 ==> join拼接数组
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 思路二,for循环从尾到头遍历,每次拼接遍历到的字符串
function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

// 思路三,字符串拆分成数组 ==> 设置头指针i,尾指针j ==>  只要 i < j 循环互换数组指针处位置
function reverseString(str) {
  let arr = str.split("");
  let i = 0,
    j = str.length - 1,
    tmp = 0;
  while (i < j) {
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
  return arr.join("");
}

// ES6语法
function reverseString(str) {
  let arr = str.split("");
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr.join("");
}

// 思路四,使用递归 (hello) ==> o(ell)h ==> ol(l)eh ==> olleh
function reverseString(str) {
  if (!str) {
    // 如果字符不存在,返回空字符
    return "";
  }
  if (str.length === 1) {
    // 如果字符长度为一,返回字符
    return str;
  }
  let end = str.length - 1;
  return str[end] + reverseString(str.slice(1, end)) + str[0]; // 返回首尾互换并且上一次调用递归后的字符串
} // str.slice(start,end):获取子字符串返回[start,end),包括第一个参数,不包括第二个参数
```

### 计算整数的阶乘

![image-20210816163629896](http://i0.hdslb.com/bfs/album/1607f9367633c7947d1b5d08f73dce5aa1d5f298.png)

```js
// 方法一,迭代遍历累积
function factorialize(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}

// 方法二,递归法
function factorialize(num) {
  return num <= 1 ? 1 : factorialize(num - 1) * num;
}
```

### 找出字符串中的最长单词

![image-20210816175310251](http://i0.hdslb.com/bfs/album/497c5e877a4ad88887f087589c6f1651d7dbac6e.png)

```js
输入: "The quick brown fox jumped over the lazy dog";
输出: 6;
```

```js
// 遍历字符串分割的数组,累技每一项的字符串长度
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let len = 0;
  for (let item of arr) {
    if (len < item.length) {
      len = item.length;
    }
  }
  return len;
}

// 方法二: 字符串分割为数组 ==> 数组每一项map返回长度数组 ==> 长度数组升序排列 ==> 弹出最大数
function findLongestWordLength(str) {
  return str
    .split(" ")
    .map((item) => item)
    .sort((a, b) => a - b)
    .pop();
}
```

### 找出多个数组中的最大数字

![image-20210817114806289](http://i0.hdslb.com/bfs/album/b6c4b08ff58aa96139ec5dc97357d17372a50747.png)

```js
输入: [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
输出: [5, 27, 39, 1001];
```

```js
// 对数组map ==> 每一项子数组正序排序 ==> 排序的数组pop出最大值 ==> 最大值组成新数组
function largestOfFour(arr) {
  return arr.map((item) => item.sort((a, b) => a - b).pop());
}

// 遍历子数组,进行迭代比较
function largestOfFour(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity;
    for (let item of arr[i]) {
      max = Math.max(max, item);
    }
    res.push(max);
  }
  return res;
}

// 使用ES6中的map和...展开运算符,对每个子数组展开取最大值
function largestOfFour(arr) {
  return arr.map((item) => Math.max(...item));
}
```

### 确认结尾

.![image-20210820104611925](http://i0.hdslb.com/bfs/album/29a0353ef25bd88e6109b65b2a592abeb6f089d7.png)

```js
输入: "Walking on water and developing software from a specification are easy if both are frozen",
  "specification";
输出: false;

输入: "Bastian", "n";
输出: true;
```

```js
// 切掉str的target长度的字符串与target进行比较
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

// 从str，和target末尾开始遍历，每次遍历到的字符进行比较
function confirmEnding(str, target) {
  if (target.length > str.length) {
    return false;
  }
  let i = str.length - 1,
    j = target.length - 1; // 声明i和j为str与target的尾指针
  while (j >= 0) {
    if (str[i] !== target[j]) {
      // 对于每次遍历到的字符判断是否一样，不一样直接返回false
      return false;
    }
    i--;
    j--;
  }
  return true; // 只有当str都遍历完，没有发现有不一样的时候才能返回true
}
```

### 重复输出字符串

![image-20210820161707102](http://i0.hdslb.com/bfs/album/50145b9a6110bb8b8b5611c8c1e5f3a343f1c7ed.png)

```js
输入: "abc", 3;
输出: "abcabcabc";

输入: "abc", -2;
输出: "";
```

```js
// 声明空字符串,循环num次,每次连接字符串
function repeatStringNumTimes(str, num) {
  let res = "";
  for (let i = 0; i < num; i++) {
    res += str;
  } // 当num为负数的时候,直接进不去循环,res还是为空,能覆盖到循环这个条件;无需另外判断
  return res;
}

// 使用数组join方法,有num+1数目元素的空数组,在数组间隙之间插入str字符串
function repeatStringNumTimes(str, num) {
  return num <= 0 ? "" : Array(num + 1).join(str); // 声明一个有num+1个元素的空数组
}

// 使用递归
/*
	定义一个神奇的函数f()
	'ababab' ==> 'abab' ==> 'ab' ==> ''
	f(3) = f(2) + str
	f(2) = f(1) + str
	f(1) = f(0) + str			到f(0)时直接返回空字符
	规律：f(num) = f(num - 1) + str
*/
function repeatStringNumTimes(str, num) {
  return num <= 0 ? "" : repeatStringNumTimes(str, num - 1) + str;
}
```

### 截断字符串

![image-20210820171015070](http://i0.hdslb.com/bfs/album/af132e9a98913da99b0bb07bfefbef932283d447.png)

```js
输入： "A-tisket a-tasket A green and yellow basket", 8
输出:  "A-tisket..."

输入： "hello" 9
输出： "hello"
```

```js
// 如果str的长度比num大，使用slice切片拼接字符，否则直接返回str
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```

### 按参数过滤数组

![image-20210821011455945](http://i0.hdslb.com/bfs/album/29616598dc00a1ed1a0e8676a39dc4489797bda4.png)

```js
输入: findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
输出: 8;
```

```js
// 遍历这个数组的每一元素,如果元素满足func直接返回该元素,如果所有元素都不满足函数条件,默认返回undefinded
function findElement(arr, func) {
  for (let item of arr) {
    if (fun(item)) {
      return item;
    }
  }
}

// 使用ES6中的filter
function findElement(arr, func) {
  return arr.filter(fun)[0]; // filter传入参数func,返回的数组取第一项元素
}

// 使用ES6中的数组find方法
// arr.find(callback):返回满足特定条件的元素对象或者元素值， 不满足返回 undefined
function findElemet(arr, func) {
  return arr.find(func);
}
```

### 基本类型布尔值的检查

![image-20210822010441978](http://i0.hdslb.com/bfs/album/c14846868e17528baf049b35602c3f1556d5e3b0.png)

```js
输入: booWho(true);
输出: true;
```

```js
function boowho(bool) {
  return t(bool) === "boolean" ? true : false;
}
```

### 句中单词首字母大写

![image-20210823105433241](http://i0.hdslb.com/bfs/album/95a43536c922eed77e002653be94970596327699.png)

```js
输入: "sHoRt AnD sToUt";
输出: "Short And Stout";
```

```js
// 字符串split分割为数组 ==> 数组的每一项item转换大小写 ==> 空格拼接数组字符串
function titleCase(str) {
  return str
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

// 使用正则表达式,匹配空格和空格后面的第一个字母大写
function titleCase(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)[a-z]/g, (match) => match.toUpperCase());
}
```

### Slice 与 Splice

![image-20210823145106553](http://i0.hdslb.com/bfs/album/1329bcb8a9945168dc68372593a7ce3d54a6cbbc.png)

```js
输入: [1, 2, 3], [4, 5], 1;
返回: [4, 1, 2, 3, 5];
```

```js
// 使用splice方法在指定处切片插入,使用"..."展开运算符,可以打散数组
function frankenSplice(arr1, arr2, n) {
  return [...arr2.splice(0, n), ...arr1, ...arr2.splice(n)];
}

// 直接使用splice方法; arr.splice(index,[deleteCount],item)
function frankenSplice(arr1, arr2, n) {
  let resArr = arr2.slice(); // 对数组直接slice(),拷贝数组
  resArr.splice(n, 0, ...arr1);
  return resArr;
}
```

### 过滤数组中的假值

![image-20210823161810980](http://i0.hdslb.com/bfs/album/7badc1efd9a502202d17207081ceadce5c9d2f91.png)

```js
// 遍历数组元素,对每个元素使用Boolean()函数判断,将判断为真值的打入结果数组并返回
function bouncer(arr) {
  let res = [];
  for (let item of arr) {
    if (Boolean(item)) {
      // 或者使用双重非运算符 !!(item) ,对元素取反默认判断其布尔值,双重取反抵消操作
      res.push(item);
    }
  }
  return res;
}

// 使用filter过滤,回调函数中是返回满足条件的元素
function bouncer(arr) {
  return arr.filter((item) => Boolean(item)); // 回调函数中,返回item的boolean为true的元素
}
// 进一步简化版本
function bouncer(arr) {
  return arr.filter(Boolean); // filter中直接传入一个Boolean函数
}
```

### 找出元素在排序后数组中的索引

![image-20210824102322472](http://i0.hdslb.com/bfs/album/7e90a886203f2b54abef68f3ce58bfa20c45ce31.png)

```js
输入: [10, 20, 30, 40, 50], 35;
输出: 3;
输入: [5, 3, 20, 3], 5;
输出: 2;
```

```js
// 直接使用filter过滤出所有小于num的数组元素输出新数组长度
function getIndexToIns(arr, num) {
  return arr.filter((item) => item < num).length;
}

// 和filter思路一样,找出数组中比num小的数组
function getIndexToIns(arr, num) {
  let res = 0;
  for (let item of arr) {
    if (item < num) {
      res++;
    }
  }
  return res;
}

// 先将num打入到数组中,排序并输出num的第一次出现的位置
function getIndexToIns(arr, num) {
  return [...arr, num].sort((a, b) => a - b).indexOf(num);
}

// 直接遍历添加好元素的数组,访问num的index
function getIndexToIns(arr, num) {
  let sortedArr = [...arr, num].sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === num) {
      return i;
    }
  }
}
```

### 比较字符串

![image-20210824153228857](http://i0.hdslb.com/bfs/album/6b7d1785287e2fbde750c31df6c6201f76f1abd0.png)

```js
输入: ["hello", "hey"];
返回: false;
输入: ["voodoo", "no"];
返回: false;
```

```js
// 先将数组字符串都转小写 ==> 遍历第二个字符串 ==> 判断第一个字符中是否包含第二个字符串元素
function mutation(arr) {
  let strArr = arr.map((item) => item.toLowerCase());
  for (let i of strArr[1]) {
    if (!strArr[0].includes(i)) {
      return false;
    }
  }
  return true;
}

// every对第二个字符串内的每一个元素进行遍历比较
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((item) => arr[0].toLowerCase().includes(item));
}

// 使用set集合的.set.has()属性来判断是否存在第二个字符串中的元素
function mutation(arr) {
  let set = new Set(arr[0].toLowerCase());
  for (let item of arr[1].toLowerCase()) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
```

### 分割数组

![image-20210823181319433](http://i0.hdslb.com/bfs/album/efc44eb91ff005abd4583a3cb4007215259ae980.png)

```js
输入: [0, 1, 2, 3, 4, 5, 6, 7, 8], 4;
返回: [[0, 1, 2, 3], [4, 5, 6, 7], [8]];
```

```js
// 声明结果数组,循环分割数组,将分割好的数组push到res中
function chunkArrayInGroups(arr, size) {
  let res = [];
  while (arr.length > 0) {
    res.push(arr.splice(0, size));
  }
  return res;
}

// 使用双指针
function chunkArrayInGroups(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    let tmp = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      tmp.push(arr[j]);
    }
    res.push(tmp);
  }
  return res;
}
```

## FreeCodeCamp 中级算法

### 范围内的数字求和

![image-20210825174403077](http://i0.hdslb.com/bfs/album/867f3997393a89725d3d8122c103818b24b91141.png)

```js
输入: [1, 4];
返回: 10;
输入: [5, 10];
返回: 45;
```

```js
// 先对数组排序,找出大数和小数 ==> 大数的前n项和减去小数的前n-1项和就是数字范围的和
function sumAll(arr) {
  let sum = (num) => (num === 0 ? 0 : sum(num - 1) + num);
  let sortArr = arr.sort((a, b) => a - b);
  return sum(sortArr[1]) - sum(sortArr[0] - 1);
}

// 等差数列求和公式,(首项 + 尾项) * 项数 / 2
function sumAll(arr) {
  return ((arr[0] + arr[1]) * (Math.abs(arr[0] - arr[1]) + 1)) / 2;
}

// 双指针遍历求和
function sumAll(arr) {
  let start = Math.min(...arr);
  let end = Math.max(...arr);
  let res = 0;
  while (start <= end) {
    res += start;
    start++;
  }
  return res;
}
```

### 数组的对称差

![image-20210825190650209](http://i0.hdslb.com/bfs/album/89a183bb5f81024f49cbf359c7ea5bd4cbc839d6.png)

```js
输入: [1, 2, 3, 5], [1, 2, 3, 4, 5];
返回: [4];
输入: ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"];
返回: ["diorite", "pink wool"];
```

```js
// 方法一： 对称差 = 并集元素 - 交集元素
function diffArray(arr1, arr2) {
  let sum = arr1.concat(arr2); // 数组并集
  let cross = arr1.filter((item) => arr2.includes(item)); // 数组交集
  return sum.filter((value) => !cross.includes(value));
}

// 方法二： 声明结果数组 ==> 分别遍历两个数组，如果遍历到有另外一个数组中没有的元素push到结果中
function diffArray(arr1, arr2) {
  let res = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      res.push(item);
    }
  });
  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      res.push(item);
    }
  });
  return res;
}
/*
	第二种优化写法,函数中调用函数
*/
function diffArray(arr1, arr2) {
  return [...getDiffOf(arr1, arr2), ...getDiffOf(arr2, arr1)];
}

function getDiffOf(arr, target) {
  // 被调用的求差别函数
  let res = [];
  for (let item of arr) {
    if (!target.includes(item)) {
      res.push(item);
    }
  }
  return res;
}

// 方法三： 两个数组合并，并且过滤出数组一或者数组二中不包含的元素
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((val) => !arr1.includes(val) || !arr2.includes(val));
}
```

### 过滤数组元素

![image-20210827181134282](http://i0.hdslb.com/bfs/album/403ee9ea48cd10898ce860e4a551c3ce33412707.png)

```js
输入： [1, 2, 3, 1, 2, 3], 2, 3
返回:  [1,1]
输入:  ["tree", "hamburger", 53], "tree", 53
返回： ["hamburger"]
```

```js
// 使用arguments接收类数组对象变成数组
function destroyer(arr) {
  let toDelete = Array.from(arguments); // 数组后面的参数组成的数组
  return arr.filter((item) => {
    // arr就是默认数组参数
    if (!toDelete.includes(item)) {
      return item;
    }
  });
}

// 换一种map写法
function destroyer(arr) {
  let toDelete = new Set([...arguments].slice(1));
  return arr.filter((item) => {
    if (!toDelete.has(item)) {
      return item;
    }
  });
}
```

### 搜索与替换

![image-20210827110143546](http://i0.hdslb.com/bfs/album/17dfad513c9c6b4505d06c3449914d193c5ffda1.png)

```js
输入: "Let us go to the store", "store", "mall";
返回: "Let us go to the mall";
输入: "This has a spellngi error", "spellngi", "spelling";
返回: "This has a spelling error";
// 注意后after需要与before保持大小写一致
```

```js
// 先判断before的首字母大小写 ==> 匹配before与after大小写一致 ===> 遍历替换str的数组再拼接
function myReplace(str, before, after) {
  if (before.charCodeAt(0) > 96) {
    after = after[0].toLowerCase() + after.slice(1);
  } else {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str
    .split(" ")
    .map((item) => {
      if (item === before) {
        item = after;
      }
      return item;
    })
    .join(" ");
}

// 思路一样，更换reduce方法来累加返回字符串
function myReplace(str, before, after) {
  let target = "";
  if (before.charCodeAt(0) > 96) {
    target = after[0].toLowerCase() + after.slice(1);
  } else {
    target = after[0].toUpperCase() + after.slice(1);
  }
  // 更换大小写
  return str
    .split(" ")
    .reduce((acc, cur) => {
      if (cur === before) {
        return acc + " " + target; // 如果当前字符串匹配相同，则返回拼接新的字符串
      } else {
        return acc + " " + cur; // 匹配不到，返回的字符没有改变
      }
    }, "")
    .trimStart(); // str.trimStart()方法可以去除字符串的首位空格
}
```

### 寻找缺失的字母

![image-20210904183530343](http://i0.hdslb.com/bfs/album/4e67068f0ec41057b025081041fd6183d81ec7b4.png)

```js
输入: "abce";
返回: "d";
输入: "abcdefghjklmno";
返回: "i";
```

```js
// 方法一, 分割字符串 ==> 字符串转字符码数组 ==> 遍历数组遇到不连续的数就输出其对应的字
function fearNotLetter(str) {
  let arr = str.split("").map((item) => item.charCodeAt());
  let cur = arr[0];
  for (let i of arr) {
    if (i !== cur) {
      return String.fromCharCode(cur);
    }
    cur++;
  }
}

// 方法二, 遍历字符串 ==> 比较字符串当前值和下一个值得code码是否连续
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // i+1的指针需要扫到末尾,所以i的位置要提前
    let cur = str[i].charCodeAt(),
      next = str[i + 1].charCodeAt();
    if (cur + 1 !== next) {
      return String.fromCharCode(cur + 1);
    }
  }
}

// 方法三 在不缺失的字符串数组中过滤出没有出现过的数组元素
function fearNotLetter(str) {
  let start = str[0].charCodeAt(),
    end = str[str.length - 1].charCodeAt();
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr.filter((item) => !str.split("").includes(item))[0];
}
```

### 求斐波那契数列的奇数和

![image-20210830094728369](http://i0.hdslb.com/bfs/album/eab5a632685d98922db4e2bf510594ec920e0a59.png)

```js
输入: 1000;
返回: 1785;
输入: 4000000;
返回: 4613732;
```

```js
// 方法一: 先获得nums以内的斐波那契数列 ==> 对数列奇数元素求和
function sumFibs(nums) {
  let arr = [1, 1],
    res = 0;
  while (arr[arr.length - 1] + arr[arr.length - 2] <= nums) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  for (let i of arr) {
    if (i % 2 === 1) {
      res += i;
    }
  }
  return res;
}
```

### 短线连接格式

![image-20210831112323829](http://i0.hdslb.com/bfs/album/6af05f5c8e991670410e158f6c418439fa237e75.png)

```js
输入: "This Is Spinal Tap";
返回: "this-is-spinal-tap";
输入: "thisIsSpinalTap";
返回: "this-is-spinal-tap";
输入: "The_Andy_Griffith_Show";
返回: "the-andy-griffith-show";
```

```js
function spinalCase(str) {
  return str
    .split("")
    .map((i) => (i.charCodeAt() < 90 ? " " + i.toLowerCase() : i))
    .join("")
    .trim()
    .split(/ |-|_/)
    .filter((i) => i)
    .join("-");
}

// 讲字符串用几个条件分割开来,再用-拼接,最后转x
function spinalCase(str) {
  return str
    .split(/_| |-|(?<=[a-z])\B(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
```

### 集合排序

![image-20210831143512068](http://i0.hdslb.com/bfs/album/3fbae109764fddd190819f1d69f6b57943ac9be7.png)

```js
输入: [1, 3, 2], [5, 2, 1, 4], [2, 1];
返回: [1, 3, 2, 5, 4];
输入: [1, 2, 3], [5, 2, 1];
返回: [1, 2, 3, 5];
```

```js
// 接受数组参数 ==> 数组扁平化 ==> set去重
function uniteUnique(arr) {
  return [...new Set(Array.from(arguments).flat())];
}
```

### 质数求和

![image-20210918014831480](http://i0.hdslb.com/bfs/album/072dee20fe25f4510ba43f5515d8330ac44d4058.png)

```js
输入: sumPrimes(10);
返回: 17;
输入: sumPrimes(977);
返回: 73156;
// 数字1 既不算质数也不算合数
```

```js
// 方法一 求出数字范围内得所有数字组成得数组 ==> 判断数字是否为质数 ==> 对质数数组进行求和
function sumPrimes(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (isPrimeNum(i)) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, item) => acc + item, 0);
}

function isPrimeNum(number) {
  if (number === 1) {
    return false;
  }
  for (let j = 2; j < number; j++) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
}
```

### 找出数字范围内的最小公倍数

![image-20210909143445541](http://i0.hdslb.com/bfs/album/b11d9d54a1dbbe774c80641ff77e6cdb205e6ae7.png)

```js
输入：[1, 5]
返回: 60
输入: [5, 1]
返回: 60
输入: [1, 13]
返回: 360360
```

```js
// 获取范围内的数组 ==> 暴力穷举试探数组中的元素是否为所有元素公倍数
function smallestCommons(arr) {
  let min = Math.min(...arr),
    max = Math.max(...arr);
  let numArr = [],
    res = max;
  for (let i = min; i <= max; i++) {
    numArr.push(i);
  }
  while (!numArr.every((i) => res % i === 0)) {
    res += max;
  }
  return res;
}
```

### 根据参数删除数组元素

![image-20210902163043063](http://i0.hdslb.com/bfs/album/2b84d3cb43fc5cac161a62514798ab2de8e46cc7.png)

```js
输入: [1, 2, 3, 4],
  function (n) {
    return n >= 3;
  };
返回: [3, 4];
输入: [1, 2, 3, 7, 4],
  function (n) {
    return n > 3;
  };
返回: [7, 4];
```

```js
// 方法一 和数组filter有区别: filter过滤会对每一项元素进行访问,此题只需要返回第一次满足条件后面的元素
function dropElements(arr, func) {
  let res = [...arr];
  for (let i of arr) {
    if (func(i)) {
      break;
    } else {
      res.shift();
    }
  }
  return res;
}

// 方法二 使用while循环会更加简单点, 不停的判断数组的头部是否满足func,满足不操作,不满足切掉头部
function dropElements(arr, func) {
  while (!func(arr[0])) {
    arr.shift();
  }
}
```

### 数组扁平化

![image-20210910001636637](http://i0.hdslb.com/bfs/album/c1fbee94405174c7c201315c383df28a452789fe.png)

```js
输入: [[["a"]], [["b"]]];
返回: ["a", "b"];
输入: [1, {}, [3, [[4]]]];
返回: [1, {}, 3, 4];
```

```js
// 使用递归: 声明结果数组 ==> 遍历给定数组,每项元素不是数组直接push,是数组递归返回数组中的元素
function steamrollArray(arr) {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = [...res, ...steamrollArray(item)];
    } else {
      res.push(item);
    }
  }
  return res;
}

// 方法二: 如果数组中是纯数字数组的话,对数组先转成字符串,分割最后在map
function steamrollArray(arr) {
  return arr
    .toString()
    .split(",")
    .map((item) => parseInt(item));
}
```

### 翻译二进制字符串

![image-20210902145558858](http://i0.hdslb.com/bfs/album/6fd0465b6bc97e5d6e16e6b7a05b04719c75e497.png)

```js
输入: "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
返回: "Aren't bonfires fun!?";
输入: "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001";
返回: "I love FreeCodeCamp!";
```

```js
// 字符串split分割 ==> 每项字符转十进制数字 ==> string.formCharCode()转字符 ==> join拼接
function binaryAgent(str) {
  return str
    .split(" ")
    .map((item) => String.fromCharCode(parseInt(item, 2)))
    .join("");
}
```
