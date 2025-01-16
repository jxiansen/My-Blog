## 工作用到的一些代码片段

- 列表元素设置分割线，最后一个元素不显示分割线

```css
<style>
  .list-item {
    padding: 10px;
    position: relative;
  }

  .list-item:not(:last-child):after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
</style>

<div class="list">
  <div class="list-item">Item 1</div>
  <div class="list-item">Item 2</div>
  <div class="list-item">Item 3</div>
</div>
```

* 两个列表元素取交集

```js
/**
 * 取两个对象数组的交集，根据指定属性
 * @param {Array} array1 - 第一个数组
 * @param {Array} array2 - 第二个数组
 * @param {string} key - 用于比较的属性名
 * @returns {Array} - 对象数组交集
 */
function getIntersectionByProperty(array1, array2, key) {
  const array2Keys = array2.map(item => item[key]);
  return array1.filter(item => array2Keys.includes(item[key]));
}

// 示例用法
const arr1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const arr2 = [
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 2, name: 'Bob' }
];

const intersection = getIntersectionByProperty(arr1, arr2, 'id');
console.log(intersection); // 输出: [ { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]
```

