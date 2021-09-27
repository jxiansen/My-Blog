# React 学习

## JSX简介

### JSX属性

JSX元素也可以像HTML元素一样拥有属性,一个JSX属性使用类似HTMl语法编写,一个名称后面跟着一个等于号,接着是一个值,这个值应该用一对引号将其包裹,像这样:

``` rea
my-attribute-name = "my-attribute-value"
```

下面是一些带属性的JSX元素

```react
<a href='http://www.example.com'>Welcome to the Web</a>;

const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
```

一个单独的JSX元素可以像HTML一样有很多元素

```react
const panda = <img src = 'images/panda.jpg' alt = 'panda' width = '500px' height = '500px'>
```

JSX外部元素有个规则:一个JSX表达式只能有一个最外层元素.

以下代码可以解析:

``` js
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```

但是这个代码就无法解析了

``` js
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```

所以JSX表达式最外层最好用`<div></div>` 标签包裹

## 元素渲染

`ReactDOM`是一个`JavaScript` 库的名字,这个库中包含了几个`React`特有的方法,这些方法大部分都是用来处理`DOM`元素的.

`ReactDOM.render()` 是渲染JSX 最常用的方法,它接受一个JSX表达式,创建一个对应的DOM节点树,并且将该树添加到DOM中.

参数一: JSX表达式,它将被渲染到屏幕上

```js
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app')),
```



