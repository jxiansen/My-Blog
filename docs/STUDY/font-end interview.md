## javaScript

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

