## HTML 知识大杂烩

`a` 标签的 `target=_"blank` 属性会导致文档在新窗口中打开

`Class` 选择器的优先级高于继承样式, 相同标签级别的选择器,后声明的优先级是比前声明的优先级高.

选择器等级:

import 导入的样式 > 内联样式 > id > class > 继承

`fixed` 定位是一种特殊的绝对定位(`absolute`),被定位的元素脱离了原本的文档流,其他元素也会忽略他的存在,占用他原本的底层空间,直接在相对于浏览器的窗口固定. `fixed` 与 `absoulte` 的最大区别在于: `fixed` 不会随着屏幕的滚动而移动.

`img` 标签中的 `alt` 属性可以在图片失效时候给予用户友好的提示,帮助理解图片内容,也可以帮助搜索引擎来理解图片内容.将其加入搜索结果中.

---

### 语义化标签

`main` 标签用来呈现网页的主要内容,并且每一个页面应该只有一个

`section` 标签用来表示文档中的"节"或者"段落"

`nav` 标签主要用于页面的导航链接区域

### BFC

> BFC : block formating context: 块级格式化上下文

简单来说: `BFC` 是一个完全独立的空间,类似于小黑屋.空间里的子元素不会影响到外面的布局.

#### `BFC` 解决问题:

- 外边距重叠

```html
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

两个盒子的外边距都是 20px,按照理解中间边距应为 40px.实际边距确是两个盒子中较大的元素.通过`overflow:hidden` 来触发元素的 BFC 现象,使得盒子中的元素完全的与外界隔离开.此时两个块边距为预先预测的 40px.

<img src="http://i0.hdslb.com/bfs/album/985e0cbf1cef50a9cf1633c1a6ddea57a0524c19.png" alt="截图 2021-11-18 09.52.24" style="zoom: 33%;" />

- 高度塌陷

```html
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

可以通过使用`overflow:hidden` 来触发 BFC 来达到清除浮动的效果.

<img src="http://i0.hdslb.com/bfs/album/5e019e85deb0d178867dcb6cf45bd2d7ba7cd3db.png" alt="image-20211118105458106" style="zoom:50%;" />

- 清除浮动

```html
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

此时设置了左浮动的元素覆盖了正常元素的上方,想要避免覆盖就需要触发正常元素的 BFC 属性. `overflow:hidden`这样两个元素就不会互相干扰.

<img src="http://i0.hdslb.com/bfs/album/e79a73d2235811b451016c68ec60f0d35cd58ddb.png" alt="image-20211118110420029" style="zoom: 67%;" />

#### 触发方式

- 根元素,即 `html` `body` 标签默认就是`BFC` 容器
- 浮动元素, `float` 设为 `left` `right`
- `overflow` 属性不为 `visible`
- `display` 为 `inline-block` `table-cell` `table-caption` ,`flex` ,`grid`
- `position` 为 非`relative`

---

### 行高相关概念

![image-20211118114244553](http://i0.hdslb.com/bfs/album/75fe36087f9daf94df3097f8ad8b814ce17327cb.png)

### 关于行内元素和行内块元素之间出现间隙

<img src="http://i0.hdslb.com/bfs/album/bdfa59a0f2e57a6baff405899b12dfea3f8b1111.png" alt="image-20211121215554034" style="zoom:80%;" />

行内块元素,之间默认会出现一个小空缺,在开发者工具中发现每个元素之间默认出现了空白,查了一圈发现是 vscode 中插件默认的格式化功能导致的.**将元素之间的换行符删除掉就可以消除间隙** ,行内元素也有这个现象.

![image-20211121220155742](http://i0.hdslb.com/bfs/album/150bb48c155f6c526786e0ee27615e945f5f1a99.png)

> **解决方法**

- 负边距

给元素一个负的`margin` 属性

- `font-size = 0`

设置父元素的字体大小为零,将空白符压缩为空,但是这会造成子元素内的字体消失,所以还需要在子元素内恢复原来的字体大小

```css
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

### 定位

> `position : static`

所有元素默认的定位就是静态定位,自然的保留在页面的文档流中,因此对各种上下左右定位属性不生效

> `postion : relative`

元素设置了相对定位后,其位置可以相对于其初始位置发生偏移,但是其原本的位置并没有被挤占掉

> `position: fixed`

元素一但设置了固定定位,会脱离文档流,会根据浏览器窗口定位自己,原本他周围的元素会占据他原本的空间.

如果没有给偏移量,其位置就是固定在原来的位置.

> `position: absoulte`

元素设置了绝对定位后,也会脱离文档流,并不会为元素预留空间,他的定位会相对于最近的非 `static` 定位祖先的`padding box` 元素来进行偏移.

> `position: sticky`

元素根据正常文档流进行定位,相对于他的最近滚动祖先和包含块进行定位

> `z-index`

` z-index` 属性只针对定位元素有效,当父元素定位时,子元素无法通过 z-index 跑到父元素的下方.

定位元素不再是行内元素，即给行内元素定位后不再需要声明其 display 属性为 block 或 inline-block 等

### 文档流以及脱离文档流

#### 什么是文档流?

将当前浏览器窗口分成一行一行的,每一行从左到右依次排满后换行排放元素.称为文档流(又称普通流)

#### 脱离文档流?

脱离文档流,也就是元素从普通布局排版中拿走它,其他盒子定位时,会当作已经脱离文档流的元素不存在来进行定位.

**使用 float 脱离文档流时,其他盒子无视这个元素,但其他盒子内的文本依然会为这个元素让出位置,环绕在它周围**,类似 word 文字环绕效果.

使用绝对定位来脱离文档流的元素,其他盒子还有盒子内部的文本就直接无视他们的存在了.

#### 如何脱离文档流?

1. 浮动

浮动元素会脱离文档流,一个元素浮动后,其他内容会"环绕"该元素

2. `position: absolute`

元素设置了绝对定位后,会相对于该元素直系父亲第一个的非`static` 元素来定位的,如果父元素的`position` 全是 `static`时候, `absolute`是相对于`html` 来定位

3. `position: fixed`

固定定位后,元素完全脱离文档流,直接相对于浏览器窗口定位.

## flexbox 布局

以往的布局诸如: `float` `table` 等这些布局方式发明出来的时候就不是为了做网页排版布局的.而 `flexbox` 就是第一套专门用来做网页布局的 `CSS` 方法.

### 基本概念

直接对容器设定`display: flex` 可以将容器变成 `flex` 容器,所有子元素自动成为容器成员,称为 `flex `项目(`flex item`)

容器默认有两个轴,一个是主轴(`main-axis`),一个是交叉轴(`cross-axis`)

### 容器属性

#### flex-direction

> 决定主轴的排列方向

- `row` (默认值) 主轴为水平方向,从左往右
- `row-reverse` 主轴为水平方向,从右往左
- `column` 主轴为竖直方向,从上往下
- `column-reverse` 主轴为竖直方向,从下往上

#### flex-wrap

> 该属性用来定义一条轴线放不下,如何换行

- `no-wrap` 默认值,不换行
- `wrap` 超出部分换行
- `wrap-reverse` 换行,第一行在下方

#### flex-flow

> 是 `flex-direction` 和 `flex-wrap` 属性合在一起的简写形式

- `row` `no-wrap` 默认值

#### justify-content

> 定义了在主轴上面的排列方式

- `flex-start` (默认值) 左对齐
- `flex-end` 右对齐
- `center` 居中对齐
- `space-between` 两端对齐,项目之间的空间间隔都相等
- `space-around` 每个项目两个的间隔都相等,空间包围着项目.
- `space-evenly` 每个项目都沿着主轴均匀分布在指定容器中,项目之间的空间和到首尾的距离都是一样的.

#### align-items

> 定义在交叉轴上面项目如何对齐

- `flex-start` 交叉轴起点对齐
- `flex-end` 交叉轴终点对齐
- `center` 交叉轴居中对齐
- `baseline` 项目中第一行文字的基线对齐
- `stretch` (默认值)如果项目子元素中未设置高度或设为 `auto` 时,将占满整个容器的高度.

#### align-content

> 这个属性只有当容器里面的项目换行多余一行以后才会生效,用于设置多余一行的项目时候,**行与行之间的对齐方式,基本单位是子项构成的行**

### 项目属性

#### order

> 定义项目的排列顺序,按照从小往大排,数值越小越靠前,默认为 0

#### align-self

> 用来覆盖 flex 容器的 `align-items`的设定的,对项目设置该属性后会改变原来的默认对齐方式

属性同 `align-items`

#### flex-grow

> 用来定义项目的放大比例,如果所有的项目的 `flex-grow` 都是 1 ,则每个项目都将均匀分割剩余空间.

- 0 (默认值)

#### flex-shrink

> 刚好与`flex-grow` 相反,定义项目的缩小比例,当容器的主轴空间已经无法容纳项目时,项目沿主轴方向如何缩小

- 1 (默认值),如果空间不够,项目将会等比例缩小
- 0 不做任何缩小,保持原来尺寸
- <number> 如果其他数字为 1,则该项目的宽度即为总宽度,乘以他所占比例

#### flex-basis

> 在没有布局前,沿着主轴方向,设置子项目的基本宽度,设置该属性后原本的高度或者宽度都会失效.

- <length> 直接写长度,
- `auto` (默认值) 为项目本来大小

#### flex

> 是 `flex-grow` `flex-shrink` `flex-basis` 一起指定的缩写

### flex总结导图

![flexbox](http://i0.hdslb.com/bfs/album/689a0566c15edb9b23edfb687de02cbc5c275d3b.png)
