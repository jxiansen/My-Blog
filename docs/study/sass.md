## Sass 快速入门

****

### 安装

安装前需要设备有`node` 环境,打开终端使用命令行安装.

``` shell
pnpm i sass -g
```

安装完成输出 `sass`

![image-20211208222244313](http://i0.hdslb.com/bfs/album/646128412cd9bc30c9f9d08b555af492611b4f4b.png)

出现提示文本表示安装成功

### 使用

1. 直接在文件夹中新建一个 `index.scss` 文件,输入以下命令会在此文件夹下生成一个新的 `css` 文件

``` shell
sass index.scss index.css
```

![image-20211208223310591](http://i0.hdslb.com/bfs/album/4d7f984b0fff5a04f67e73dca4d9eb02021736d1.png)

2. 第一种方法需要写好了 `sass` 文件之后才能编译为` css`文件,在开发的过程中不方便调试,为了方便开发可以使用自动转换,我一下好 `sass` 就帮我生成对应的 `css` 文件

``` shell
sass --watch index.scss:index.css
```

![image-20211208223748659](http://i0.hdslb.com/bfs/album/6573c3fffbca09f8540b410cbe7cc969676ff5af.png)

## 语法

### 变量

`Sass` 和 `css` 不同的一个点就是允许使用变量，可以在 `sass` 中声明变量，并未它赋值。使用 `$` 来进行声明

``` SAS
// 声明变量
$textColor: red;
$imgWidth: 200px;

// 使用变量
p {
	color: $textColor;
}

img {
	width: $imgWidth;
}
```

### 嵌套

多层 `css` 直接嵌套使用

``` css
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

### for 循环

`@for` 循环有两种结束，一个是 `through` 结束 ，一个是 `to` 结束。

`through` 结束会包括结束数字，`to` 不包括

``` css
<style type='text/scss'>
@for $j from 1 through 5 {
  .text-#{$j} {
    font-size: 15px * $j;
  }
}
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

![image-20220829211346965](https://i0.hdslb.com/bfs/album/04bf143eb05e22589a15bbb60e877bdfc76853da.png)
