# HTML 知识大杂烩

`a` 标签的 `target=_"blank` 属性会导致文档在新窗口中打开

`Class` 选择器的优先级高于继承样式, 相同标签级别的选择器,后声明的优先级是比前声明的优先级高.

选择器等级:

import 导入的样式 > 内联样式 > id > class > 继承

`fixed` 定位是一种特殊的绝对定位(`absolute`),被定位的元素脱离了原本的文档流,其他元素也会忽略他的存在,占用他原本的底层空间,直接在相对于浏览器的窗口固定. `fixed` 与 `absoulte` 的最大区别在于: `fixed` 不会随着屏幕的滚动而移动.

`img` 标签中的 `alt` 属性可以在图片失效时候给予用户友好的提示,帮助理解图片内容,也可以帮助搜索引擎来理解图片内容.将其加入搜索结果中.

---

## CSS 尺寸单位

### 绝对长度单位

> 固定的值,反应的是真是的物理尺寸,绝对长度单位视力输出介质而定,不依赖环境

- `px` 像素,用的是最多的呢,其他的单位很少用到

### 相对长度单位

> 相对长度单位指定了一个长度相对于另一个长度的属性.

- `em` 最初是指字母 M 的宽度,现在是指相对于当前对象内文本的 `font-size`
- `rem` root em, 即 根 em,相对于 `html` 根元素的`font-size` ,通过只修改根元素的大小,就能成比例的调整所有字体大小
- `vw` `vh` `viewport width` ,视窗宽度,将视窗的宽度均分成一百份, `1vw` 就是其中一份
- `%` 尺寸大小相对于父元素而定

## 语义化标签

`main` 标签用来呈现网页的主要内容,并且每一个页面应该只有一个

`section` 标签用来表示文档中的"节"或者"段落"

`nav` 标签主要用于页面的导航链接区域

## BFC

> BFC : block formating context: 块级格式化上下文

简单来说: `BFC` 是一个完全独立的空间,类似于小黑屋.空间里的子元素不会影响到外面的布局.

### `BFC` 解决问题:

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

### 触发方式

- 根元素,即 `html` `body` 标签默认就是`BFC` 容器
- 浮动元素, `float` 设为 `left` `right`
- `overflow` 属性不为 `visible`
- `display` 为 `inline-block` `table-cell` `table-caption` ,`flex` ,`grid`
- `position` 为 非`relative`

---

## 行高相关概念

![image-20211118114244553](http://i0.hdslb.com/bfs/album/75fe36087f9daf94df3097f8ad8b814ce17327cb.png)

## 行内元素和行内块元素间隙问题

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

## 定位

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

## 文档流以及脱离文档流

### 什么是文档流?

将当前浏览器窗口分成一行一行的,每一行从左到右依次排满后换行排放元素.称为文档流(又称普通流)

### 脱离文档流?

脱离文档流,也就是元素从普通布局排版中拿走它,其他盒子定位时,会当作已经脱离文档流的元素不存在来进行定位.

**使用 float 脱离文档流时,其他盒子无视这个元素,但其他盒子内的文本依然会为这个元素让出位置,环绕在它周围**,类似 word 文字环绕效果.

使用绝对定位来脱离文档流的元素,其他盒子还有盒子内部的文本就直接无视他们的存在了.

### 如何脱离文档流?

1. 浮动

浮动元素会脱离文档流,一个元素浮动后,其他内容会"环绕"该元素

2. `position: absolute`

元素设置了绝对定位后,会相对于该元素直系父亲第一个的非`static` 元素来定位的,如果父元素的`position` 全是 `static`时候, `absolute`是相对于`html` 来定位

3. `position: fixed`

固定定位后,元素完全脱离文档流,直接相对于浏览器窗口定位.

## 选择器注意点

- `:first-child` 选中第一个元素

![image-20211214103034683](http://i0.hdslb.com/bfs/album/cf665ae751430a5ff8d8436577c94c50f7c142e7.png)

- `:nth-child(-n + 5) ` 负方向选择,前五个元素

![image-20211214103228446](http://i0.hdslb.com/bfs/album/be12ece4c35a26e9fe57bf2fcac3cd05f89c7b09.png)

- `:nth-child(n + 3)` 正方向选择,从第三个开始到后面

![image-20211214105112290](http://i0.hdslb.com/bfs/album/6bb4cdd1650f316e8126bb44608dd8ae1db7fb24.png)

- 结合使用,可以限制选择在某一个范围内

`:nth-child( n + 6):nth-child( -n + 9)`: 选择从第六个到第九个,取两个范围的交集

![image-20211214112047021](http://i0.hdslb.com/bfs/album/3d0cf2fce1f985ce95446a09c3046003847e069e.png)

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
> 属性同 `align-items`

#### flex-grow

> 用来定义项目的放大比例,如果所有的项目的 `flex-grow` 都是 1 ,则每个项目都将均匀分割剩余空间.

- 0 (默认值)

#### flex-shrink

> 刚好与`flex-grow` 相反,定义项目的缩小比例,当容器的主轴空间已经无法容纳项目时,项目沿主轴方向如何缩小

- 1 (默认值),如果空间不够,项目将会等比例缩小
- 0 不做任何缩小,保持原来尺寸
- 如果其他数字为 1,则该项目的宽度即为总宽度,乘以他所占比例

#### flex-basis

> 在没有布局前,沿着主轴方向,设置子项目的基本宽度,设置该属性后原本的高度或者宽度都会失效.

- 直接写长度,
- `auto` (默认值) 为项目本来大小

#### flex

> 是 `flex-grow` `flex-shrink` `flex-basis` 一起指定的缩写

### flex 总结导图

![flexbox](http://i0.hdslb.com/bfs/album/689a0566c15edb9b23edfb687de02cbc5c275d3b.png)

## grid 布局

### 基础概念

网格布局沿着主轴和交叉轴分布,通过各种网格属性,来操作这些项目来创建各种布局.

![网格架构](http://i0.hdslb.com/bfs/album/103aead8f2acb02d10a60e9598a0f8a1beed3fe2.png)

网格属性分为两种

- 父容器属性 `container`
- 子项目属性: `item`

以下是**速查表**:

![替换文字](http://i0.hdslb.com/bfs/album/43802cf1c29619d259fcfe0a2ccd273c5b69bf19.png)

![替换文字](http://i0.hdslb.com/bfs/album/979e553f745f77927658c1335a67dd7a18d23e67.png)

### 网格父属性

#### grid-template-columns 属性

通过此属性来定义列的数量和宽度,也可以单独设置每列的宽度,也可以使用` repeat()` 重复函数来为所有列设置同意宽度.

![替换文字](http://i0.hdslb.com/bfs/album/39e392147aa6eab8ed96003a3b7d2c664973779d.png)

从左到右: 固定宽度, 自适应, 固定宽度

![替换文字](http://i0.hdslb.com/bfs/album/d47a83ea700485a73b069e479284b7bda684be4d.png)

水平方向空间均匀分成三份

```css
.container {
  display: grid;
  gap: 20px;
  grid-template-columns: 200px auto 100px;
}
```

**注意:**

- 像素是固定宽度, `auto` 关键字将覆盖可用空间.
- 如果使用 `fr` 为单位,那么所有框的大小将相同.

#### grid-template-rows 属性

可以用此属性来定义行数和行高,也可以单独设置每一行的高度,或者使用`repeat()`重复函数功能来为所有行设置一样的高度.

![替换文字](http://i0.hdslb.com/bfs/album/1cf9912e3a31a3a11a33b7971f3946e00ece2f1e.png)

![替换文字](http://i0.hdslb.com/bfs/album/98be2dbf56385351a84956561ace16b424d7356c.png)

```css
.container {
  display: grid;
  gap: 20px;
  height: 100vh;
  gird-template-rows: 200px auto 100px;
}
```

#### grid-template-areas 属性

通过这个属性来指定网格中单元格的特定命名,可以直观的看到我们对网格区域的划分.

![替换文字](http://i0.hdslb.com/bfs/album/d329ee1b2af39a4d77f707b8cd38c257839ef809.png)

**标准的 `12 X 12 ` 布局**

我们称为布局的模板 👇![替换文字](http://i0.hdslb.com/bfs/album/492c63998c94053c1d8e1f70ecc7ed9dc7fe7bea.png)

这个属性包含以下

- `grid-template-areas` : 用于划分区域
- `grid-area` 对每个划分好的区域进行指定分配

**在父容器中创建模板区域**

```css
.container {
  display: grid;
  gap: 20px;
  height: 100vh;
  grid-template-areas:
    "A A A A   A A A A   A A A A"
    "B B B B   B B B B   B B C C"
    "B B B B   B B B B   B B C C";
}
```

**分配区域**

对于子容器进行设置:

```css
.box-1 {
  gird-area: A;
}
.box-2 {
  grid-area: B;
}
.box-3 {
  grid-area: C;
}
```

#### 列间隙属性

设置每一列之间的间隙空间 👇

![替换文字](http://i0.hdslb.com/bfs/album/50973b4fea1405b394454e09ecf9b2ed06fb7a80.png)

```css
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 100px 100px;
  column-gap: 50px;
}
```

#### 行间隙属性

通过此属性来设置网格内行与行之间的间隙 👇

![替换文字](http://i0.hdslb.com/bfs/album/a76e1db1f7438f847937ce9a04fb10e9bf5e6c4a.png)

代码如下:

```css
.container {
  display: grid;
  height: 100vh;
  grid-template-rows: 100px 100px 100px;
  row-gap: 50px;
}
```

#### justify-items 属性

通过此属性来定义沿着 `X` 轴(主轴) 定位网格容器内的网格项(子项),分别有四个取值: `start` `end` `center` `stretch`

![替换文字](http://i0.hdslb.com/bfs/album/9de48757d0c851961fd9325915275b37ec67d128.png)

![替换文字](http://i0.hdslb.com/bfs/album/30f4c52f7ee739dc8fcf11364d5c4e9bd351f1f5.png)

`justify-content` 属性是整个内容区域在容器里面的水平位置(左中右,撑满)

```css
.contaniner {
  justify-content: start | end | center | stretch;
}
```

#### align-items 属性

`align-items` 属性设置单元格内容的垂直位置(上中下,撑满)

![替换文字](http://i0.hdslb.com/bfs/album/010398460ab4107c7ead062dd1684eaf62d0c3c4.png)

```css
.container {
  align-items: start | end | center | stretch;
}
```

- `start`：对齐单元格的起始边缘。
- `end`：对齐单元格的结束边缘。
- `center`：单元格内部居中。
- `stretch`：拉伸，占满单元格的整个宽度（默认值）。

合并写法: **`place-items`**

```css
place-items: <align-items> <justify-items>; // 水平对齐 竖直对齐
```

如果省略第二个值,则浏览器认为两个属性取值相同.

#### justify-content 属性

定义整个内容区域在容器里面的水平位置(左中右),有七个取值:👇

![替换文字](http://i0.hdslb.com/bfs/album/4bdd373e840096d7d52b08cdf9e08a1fabff6c75.png)

![替换文字](http://i0.hdslb.com/bfs/album/51f4f1b24afe91997af0adc5e83397fb69bbb999.png)

```css
.container {
  justify-content: start | end | stretch | space-around | space-between |
    space-evenly;
}
```

- `start` 对齐容器的起始位置
- `end` 对齐容器的结束位置
- `center` 对齐容器内部居中
- `stretch` 不指定项目大小的时候,拉伸占据整个网格容器
- `space-between` 两端对齐,项目和项目之间的间隔相等,项目于容器之间没有间距
- `space-around` 每个项目两侧的间隔相等,所以项目之间的间隔比项目容器的边框之间的间隔大一倍
- `space-evenly` 项目与项目,项目与容器边框之间的长度间隔都是一样的.

#### align-content 属性

定义整个内容区域的垂直位置(上中下),和 `justify-content` 一样有七个属性 👇

![替换文字](http://i0.hdslb.com/bfs/album/c8635d8885880a98b1b3b8467a14dd8987350193.png)

![替换文字](http://i0.hdslb.com/bfs/album/455344bbc047f7d33c850db08cdf8cbb43a3990a.png)

```css
align-content: start | end | center | stretch | space-around | space-between |
  space-evenly;
```

属性和 `justify-content`完全一样,只不过将水平方向换成了垂直方向;

**合并写法 `place-content` **

```css
place-content: <align-content> <justify-content>
  // 水平方向内容对齐  垂直方向内容对齐;; ;
```

举个例子:

```css
place-content: space-around space-evenly;
```

如果省略第二个值,浏览器会直接假定第二个值等于第一个值

### 网格子属性

#### grid-column-start | end 属性

指定每个项目的起始位置和终点位置.

- `grid-column-start`: 左边框所在的垂直网格线
- `grid-column-end` : 右边框所在的垂直网格线

![image-20211205170101056](http://i0.hdslb.com/bfs/album/30519b3b563b126c0fcff8f05c59f5558e8bd71f.png)

```css
.item {
  background-color: pink;
  grid-column-start: 3;
  grid-column-end: 5;
}
```

或者还可以使用 `span` 关键字, 表示跨越, 即左右边框跨越多少个网格,结果也是一样

```css
.item {
  background-color: pink;
  grid-column-start: span 2; // 跨越两列
  grid-column-end: 5; // 以第五列为结束
}
```

#### grid-row-start | end 属性

- `grid-row-start` 上边框所在的水平网格线

- `grid-row-end` 下边框所在的水平网格线

  ![image-20211205170815659](http://i0.hdslb.com/bfs/album/95cb74921cd3f7544987c9bb4a98dbd9a24df2ef.png)

```css
.item {
  grid-row-start: 2;
  grid-row-end: 5;
}
```

也可以同水平方向上一样使用 `span` 跨越属性

#### grid-column | row 属性

`grid-column` 属性是 `grid-column-start` 和 `grid-column-end` 的合并简写形式,

`grid-row` 属性是 `grid-row-start` 和 `grid-row-end` 的合并简写形式.

![image-20211205171355794](http://i0.hdslb.com/bfs/album/a45ebc0b2d7649378c932a2eb26c8c8b1978d215.png)

```css
.item {
  grid-column: 3/8; // 开始列/结束列
  grid-row: 2/5; // 开始行/结束行
}
```

#### grid-area 属性

`grid-area` 属性指定项目放在哪一个区域.之前使用`grid-template-areas` 划分好区域后,使用`grid-area` 来指定分配区域

![替换文字](http://i0.hdslb.com/bfs/album/8c35598ee7e2b895bf669f09ab28101d3a036360.png)

标准 12 x 12 布局

然后在父容器中指定`grid-template-areas`

![替换文字](http://i0.hdslb.com/bfs/album/44b32e89005271dc6e345e63910231897d6a401b.png)

像这样在父类中:

```css
.container {
  display: grid;
  grid-template-areas:
    "A A A A   A A A A   A A A A"
    "B B B B   B B B B   B B C C"
    "B B B B   B B B B   B B C C";
}
```

然后使用 `grid-areas` 来指定子类的父容器中使用的名称.

![替换文字](http://i0.hdslb.com/bfs/album/c5058201326753fe00498e24d7ceb8299857e8e1.png)

```css
.box-1 {
  grid-area: A;
}
.box-2 {
  grid-area: B;
}
.box-3 {
  grid-area: C;
}
```

`grid-area` 属性还可以用作`grid-row-start` ,`grid-column-start` ,`grid-row-end` ,`grid-column-end` 的合并简写形式.直接指定项目的位置.

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

![image-20211205172640165](http://i0.hdslb.com/bfs/album/eb6d757ca4c1d3ead73358d3482c946f687cc172.png)

```css
.item {
  grid-area: 2/3/5/8; // 位置逆时针书写, 上左下右!
}
```

#### justify-self

使用这个属性单独设置单元格内容的水平位置(左中右),和 `justify-items` 属性用法一致,但只作用于单个项目.

![替换文字](http://i0.hdslb.com/bfs/album/b8b23dc07d301a0f362011edb378f7c36d437703.png)

- `start` 对齐单元格的起始边缘
- `end` 对齐单元格的结束边缘
- `center` 单元格内部居中
- `stretch` 拉伸,占满单元格整个宽度(默认值)

```css
.item {
  justify-self: start | end | center | stretch;
}
```

#### align-self

该属性用于设置单元格内容的垂直位置(上中下),跟 `align-items` 属性的用法完全一致,也是只作用于单个项目.

![替换文字](http://i0.hdslb.com/bfs/album/95eac68d1e21ac372d64232174d758168424594e.png)

```css
.item {
  align-self: start | end | center | stretch;
}
```

### grid 总结导图

![grid](http://i0.hdslb.com/bfs/album/1552d4777fe33a60034490ce015298584a6f1b2b.png)

## CSS 变量

### 变量声明

> 声明变量可以把它理解成 `css` 自定义属性,和 `color` `font-size` 没有什么不同, 通过 `--` 两道横线来声明变量.注意区分大小写

```css
// 局部申明
body {
  --size: 40px;
  --bg-color: red;
}

// 全局声明
:root {
  --font-size: 20px;
  --box-bgc: pink;
}
```

- 变量名不能包含奇奇怪怪的符号: `$` `[` `^` `(`等,可以使用数字和字母,下划线 `_` 横线`-` ,甚至可以是中文,日文.

### 变量读取

> 使用 `var()` 函数来读取变量

![image-20211202163322748](http://i0.hdslb.com/bfs/album/655841963e9aa6b0e0638f6b26f30bbfa90c3763.png)

## 颜色相关知识

色相: 色彩的基本属性,就是平常所说的颜色基本名称,如红色,黄色,

饱和度: 色彩的纯度,同一种颜色里灰色的占比,占比越少色彩也就越纯,反之则完全是灰色的.

亮度: 颜色的明暗程度,也就是颜色里白色或者黑色的占比,100%的亮度表示纯白色,0%表示纯黑色,50%的亮度就是表示色相中选取的颜色.
