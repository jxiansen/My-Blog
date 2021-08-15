# 牛客网练习题

牛客网`JavaScript`基础练习挑战记录

## 移除数组中的元素

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

## 添加元素

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

## 删除数组最后一个元素

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

## 添加元素

![](http://i0.hdslb.com/bfs/album/9db79ddeeab19efc07ad97f20da6c82f3489ea2d.png)

```js
//方法一,拷贝出新数组,再去掉首位
function prepend(arr, item) {
  let tmp = arr.slice();
  tmp.unshift(item);
  return tmp;
}

//使用concat创建新数组并连接
function prepend(arr, item) {
  return [item].concat(arr);
}
```

## 删除数组的第一个元素

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

## 数组合并

![image-20210722155256824](http://i0.hdslb.com/bfs/album/0f22f1948c7eabdb548b53b4049d4b8d0ba4c228.png)

```js
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
//concat方法返回的是新数组
```

## 添加元素

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

## 计数

![image-20210722163449677](http://i0.hdslb.com/bfs/album/e80c0e9526b74fe111200f6a867de312ca82919e.png)

```js
function count(arr, item) {
  let count = 0;
  for (let i of arr) {
    if (i == item) {
      count++;
    }
  }
  return count;
}

function count(arr, item) {
  let count = 0;
  while (count < arr.length) {
    if (arr.pop() == item) {
      count++;
    }
  }
  return count;
}
```

## 查找重复元素

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

## 求二次方

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

## 查找数组元素

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

## 避免全局变量

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

## 正确的函数定义

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

## 正确的使用 `parseInt`

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

## 完全等同

![image-20210726143657770](http://i0.hdslb.com/bfs/album/ee2974b69b46d720d08f0dcb86ac6b8e09d8e6b7.png)

```js
function identity(val1, val2) {
  return val1 === val2;
}

//知识点: == 弱相等,不同类型的数据相比较的话,会进行自动数据类型转换,
//       === 严格相等,比较时不会做任何数据类型转换,值要相同,数据类型也要相同
```

## 计时器

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

## 流程控制

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

## 二进制转换

![image-20210728171600119](http://i0.hdslb.com/bfs/album/b74236b9bda7fb9606162afdfb2984908512aef8.png)

```js
function base10(str) {
  return parseInt(str);
}

//parseInt(str,radix):将字符串读取数字,并以指定基数(radix)返回
```

## 二进制转换

![image-20210728181338865](http://i0.hdslb.com/bfs/album/fa30dd116110f5c06a333b99c1a044314d09461a.png)

```js
function converToBinary(num) {
  let tmp = num.toString(2);
  let len = tmp.length;
  return len < 8 ? "0".repeat(8 - len) + tmp : tmp;
}
```

## 判断是否包含数字

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
  for(let item of str) {
    if(!isNaN(item)) {
      return true
    }
  }
  return false;
}
```

## 斐波那契数列第n项值

![image-20210812144325644](http://i0.hdslb.com/bfs/album/89cf0d462c9324c21dc4727c846d2b6591b31046.png)

``` js
// 方法一,新建初始数组,循环(n-1)次,每次将数组的倒数第一项与倒数第二项的和push进去,最后返回数组的pop
function fibonacci(n) {
  let arr = [0,1];
  let i = 1;
  while (i < n) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    //还可以使用es6语法的arr.at()反向索引访问数组的值
    //arr.push(arr.at(-2) + arr.at(-1));
    i++
  }
  return arr.pop();
}

//方法二,递归
function fibonacci(n) {
  return n < 3 ? 1 : fibonacci(n-1) + fibonacci(n-2);
}

//方法三,迭代
function fibonacci(n) {
  let start = 1, second = 1, end;
  for(let i = 3; i <= n; i++) {
    end = start + end;
    start = second;
    second = end;
  }
  return end;
}
```

## 或运算

![image-20210815124741282](http://i0.hdslb.com/bfs/album/6c9e14e4fc252d957f67ac9da5045917aac7ff4e.png)

```js
function or(a,b) {
  return a || b;
}
```

## 且运算

![image-20210815124857068](http://i0.hdslb.com/bfs/album/e56d10e41b4d0b87afc9d5e6f1b613426395357a.png)

``` js
	function add(a,b) {
    return a && b;
  }
//且运算规则:如果a的布尔值是true ===> 返回b的值
//				 如果a的布尔值是false===> 直接返回a的值,且不再对第二个运算子求值
```



# `FreeCodeCamp`基础算法

[官网链接](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)

## 摄氏度转换为华氏度

![image-20210814174446734](http://i0.hdslb.com/bfs/album/2888730d1262e7b10c79b43b0af2cb0cabd07123.png)

``` js
function convertToF(celsius) {
  return celsius * 9 /5 + 32;
}
//对于结果直接返回即可
```

## 反转字符串

![image-20210815011341225](http://i0.hdslb.com/bfs/album/206c6a2b330c0c989a518013e99592831c5885e0.png)

``` js
输入: 'hello'
输出: 'olleh'
```

``` js
// 思路一,split拆分成数组 ==> 数组倒置 ==> join拼接数组
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 思路二,for循环从尾到头遍历,每次拼接遍历到的字符串
function reverseString(str) {
  let res = ''
  for(let i = str.length - 1; i >= 0; i--) {
    res += str[i]
  }
  return res;
}

// 思路三,字符串拆分成数组 ==> 设置头指针i,尾指针j ==>  只要 i < j 循环互换数组指针处位置
function reverseString(str) {
	let arr = str.split('')
  let i = 0, j = str.length - 1, tmp = 0;
  while(i < j) {
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
  return arr.join('');
}

// ES6语法
function reverseString(str) {
  let arr = str.split('');
  let i = 0, j = arr.length - 1;
  while(i < j) {
    [arr[i],arr[j]] = [arr[j],arr[i]];
    i++;
    j--;
  }
  return arr.join('');
}
```

# 额外练习

## 数组去重

```js 
function fn(arr){
	let res = []
  for(let item of arr) {
    if( !res.includes(item) ) {
      res.push(item)
    }
  }
  return res;
}
// 声明新数组,每次遍历数组item时,判断新数组中是否有原数item,如果没有则添加 
```



