# JavaScript数据结构

## 创建堆栈类

``` js
/* 
	一个栈应该有如下方法：
	压栈方法：push(), 出栈方法pop(),返回栈顶元素peek(), 判断栈空方法：isEmpty(),清空栈：clear()
*/
function stack() {
  var collection = []
  this.push = function(item) {
    collection.push(item)
  }
  this.pop = function() {
    return collection.pop()
  }
  this.peek = function() {
    return collection[collection.length - 1]
  }
  this.isEmpty = function() {
    return collection.length === 0
  }
  this.clear = function() {
    collection.length = 0
  }
}
```

## ES5中创建Map类

`Map` 映射:是用来存储键值对的数据结构,就像一个对象一样,不过 `Map` 允许任何类型的键(key)

``` js
var Map = function() {
  this.collection = {};

  // 接受key,判断Map中是否存在相应得值
  this.has = (key) => {
    return this.collection.hasOwnProperty(key);
  };

  // add(key,value)添加一对新的键值对进Map中,这个方法也可以用来更新一个值
  this.add = (key,value) => {
    this.collection[key] = value;
  };

  // remove(key),从map中删除与key对应的值
  this.remove = (key) => {
    if(this.has(key)) {
      delete this.collection[key]
    }
  };

  // get(key),根据key返回value值
  this.get = (key) => {
    if(this.has(key)) {
      return this.collection[key];
    } else {
      return '该键值对还未被定义'
    }
  }

  // values, 返回map中所有值得数组
  this.values = () => {
    return [...Object.values(this.collection)];
  }

  // size, 返回map中元素的数目
  this.size = () => {
    return [...Object.values(this.collection)].length;
  }

  // clear()方法: 清空map中的所有元素
  this.clear = () => {
    this.collection = {};
  }
};
```

## ES6

``` js
// new Map() : 创建 map
let map = new Map()

// map.set(key,value) : map中添加键值对
map.set('name','Jack')

// map.get(key): 根据键来返回值,如果map中没有对应的key,则返回undefined
map.get('name')

// map.has(key): 根据 key来查询map中是否存在对应的值,返回true或者false 
map.has('name') // true

// map.delete(key): 删除指定键的值
map.delete('name')

// map.clear(): 清空map
map.clear()

// map.size(): 返回map中元素的个数
map.size()
```

## 哈希表(散列表)

哈希表也叫散列表,它提供了一种键值之间的映射关系,只要给出一个 `key` 就可以高效的查找到与它匹配的 `value` ,时间复杂度接近于`O1` ,

散列表可以通过使用数组来实现,因为数组根据索引查询值可以进行随机访问.将 `key` 转换为 `value` 得一个中转站就叫做: 哈希函数

如果哈希函数对不同得键产生相同得值,这种情况叫做哈希碰撞,解决哈希碰撞得一个方法是: 将两个键值对都存储在这个索引上,查找其中一个时,在这个索引中进行迭代,来查找要寻找得键.

## 链表中的节点

链表是数据元素的线性集合,称为节点,每个节点指向下一个节点.每个节点包括两个元素: 一个自身的`element` ,一个是对下一个节点的引用

``` js
// 声明一个构造器函数,挂载一个自身元素,一个对下一个节点的引用
var Node = function(element) {
  this.element = element;
  this.next = null;
}

// 分别声明两个节点,每个节点都有自身元素,和引用
const Dog = new Node('Dog');
const Cat = new Node('Cat');

// 对Dog的下一个引用挂载给Cat
Dog.next = Cat

console.log(Dog)		// { element: 'Dog', next: { element: 'Cat', next: null } }
```

## 创建链表类

一个链表有几个基本属性: 表头: `head` ,表长: `length` ,添加节点方法: `add(element)` ,每次添加新节点到链表中时都需要判断链表是否有`head` ,如果已经有了就一直根据节点的`next` 查询到最后一个指向为 `null` 的节点,此节点即为 :链表尾

``` js
// 声明一个链表构造函数
function LinkedList() {
  let length = 0;
  let head = null;
  
  // 声明一个构造节点的构造器,由于this的指向问题,不能使用箭头函数
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  
  // 添加head和length方法
  this.head = () => head;
  this.size = () => length;
  
  // add(element)方法: 用来向链表中添加节点
  this.add = (element) => {
    const node = new Node(element)
    let current;		// 声明一个位置指针
    if(head === null) {			 // 如果链表头为空
      head = node;
    } else {
     	// 链表头不为空,在链表尾部添加节点
      current = head;			// 指针先指向头部,从头部开始后移
      while(current.next !== null) {		// 只要位置指针的next还不时null,就一直后移
        current = current.next;
      }
      current.next = node;		// 此时位置指针为链表尾,在链表尾添加节点
    }
    length++;
  }
}
```

``` js
/*
	举例: 声明一个fruit链表,给fruit链表中添加几种水果节点
*/
const fruit = new LinkedList();

fruit.add('apple')
console.log(fruit.head())
// { element: 'apple', next: null }
fruit.add('banna')
fruit.add('cherry')
console.log(fruit.size())
// 3
```

