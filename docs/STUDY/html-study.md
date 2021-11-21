## HTML 知识大杂烩

`a` 标签的 `target=_"blank` 属性会导致文档在新窗口中打开

`Class` 选择器的优先级高于继承样式, 相同标签级别的选择器,后声明的优先级是比前声明的优先级高.

选择器等级:

import导入的样式 > 内联样式 > id > class > 继承 

`fixed` 定位是一种特殊的绝对定位(`absolute`),被定位的元素脱离了原本的文档流,其他元素也会忽略他的存在,占用他原本的底层空间,直接在相对于浏览器的窗口固定. `fixed` 与 `absoulte` 的最大区别在于: `fixed` 不会随着屏幕的滚动而移动.

`img` 标签中的 `alt` 属性可以在图片失效时候给予用户友好的提示,帮助理解图片内容,也可以帮助搜索引擎来理解图片内容.将其加入搜索结果中.

***




### 语义化标签

`main` 标签用来呈现网页的主要内容,并且每一个页面应该只有一个

`section` 标签用来表示文档中的"节"或者"段落"

`nav` 标签主要用于页面的导航链接区域



### BFC

`BFC` 解决问题: 

* 外边距重叠

``` html
<div class="container">
  <div class="box"></div>
</div>
<div class="container">
  <div class="box"></div>
</div>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 20px;
  }
</style>
```

<img src="http://i0.hdslb.com/bfs/album/cd349c08bdee0ce168222d3f4d3b29ae7b4742b3.png" alt="image-20211118094504773" style="zoom:67%;" />

两个盒子的外边距都是20px,按照理解中间边距应为40px.实际边距确是两个盒子中较大的元素.通过`overflow:hidden` 来触发元素的BFC现象,使得盒子中的元素完全的与外界隔离开.此时两个块边距为预先预测的40px.

<img src="http://i0.hdslb.com/bfs/album/985e0cbf1cef50a9cf1633c1a6ddea57a0524c19.png" alt="截图 2021-11-18 09.52.24" style="zoom: 33%;" />

* 高度塌陷

``` html
<div class="container">
    <div class="content"></div>
  </div>

<style>
	.container {
  border: 10px green solid;
}

	.content {
  width: 200px;
  height: 200px;
  background-color: red;
  float: left;
}
</style>
```

容器内部元素,由于设置了子级元素 左浮动,导致其脱离文档流,父级元素脱离了文档流,内部没有内容导致其高度塌陷,内部元素跑到外界来

<img src="http://i0.hdslb.com/bfs/album/495f8a1b082f5dbdf1d1bf75db772afdb8081050.png" alt="截图 2021-11-18 10.52.07" style="zoom: 33%;" />

可以通过使用`overflow:hidden` 来触发BFC 来达到清除浮动的效果.

<img src="http://i0.hdslb.com/bfs/album/5e019e85deb0d178867dcb6cf45bd2d7ba7cd3db.png" alt="image-20211118105458106" style="zoom:50%;" />

* 清除浮动

``` html
<div class="floatBox">浮动元素</div>
<div class="normal">正常元素</div>

<style>
  .floatBox {
    width: 100px;
    height: 100px;
    background-color: blue;
    float: left;
  }

  .normal {
    width: 200px;
    height: 200px;
    background-color: pink;
  }
</style>
```

<img src="http://i0.hdslb.com/bfs/album/d6a0e4af3e6301b071d22a31951485875d73d47e.png" alt="image-20211118110218234" style="zoom: 67%;" />

此时设置了左浮动的元素覆盖了正常元素的上方,想要避免覆盖就需要触发正常元素的BFC属性. `overflow:hidden`这样两个元素就不会互相干扰.

<img src="http://i0.hdslb.com/bfs/album/e79a73d2235811b451016c68ec60f0d35cd58ddb.png" alt="image-20211118110420029" style="zoom: 67%;" />

------


 ### 行高相关概念

![image-20211118114244553](http://i0.hdslb.com/bfs/album/75fe36087f9daf94df3097f8ad8b814ce17327cb.png)

### 关于行内元素和行内块元素之间出现间隙

<img src="http://i0.hdslb.com/bfs/album/bdfa59a0f2e57a6baff405899b12dfea3f8b1111.png" alt="image-20211121215554034" style="zoom:80%;" />

行内块元素,之间默认会出现一个小空缺,在开发者工具中发现每个元素之间默认出现了空白,查了一圈发现是vscode中插件默认的格式化功能导致的.**将元素之间的换行符删除掉就可以消除间隙** ,行内元素也有这个现象.

![image-20211121220155742](http://i0.hdslb.com/bfs/album/150bb48c155f6c526786e0ee27615e945f5f1a99.png)

> **解决方法**

* 负边距

给元素一个负的`margin` 属性

* `font-size = 0` 

设置父元素的字体大小为零,将空白符压缩为空,但是这会造成子元素内的字体消失,所以还需要在子元素内恢复原来的字体大小

``` css
<style>
body {
  font-size: 0;
}

.content {
  display: inline-block;
  width: 100px;
  height: 100px;
  font-size: 16px;
  background-color: aquamarine;
}
 </style>

<body>
  <div class="content">行内块元素</div>
  <div class="content">行内块元素</div>
  <div class="content">行内块元素</div>
</body>
```

其他的方法,都不如这两个方法好用
