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
