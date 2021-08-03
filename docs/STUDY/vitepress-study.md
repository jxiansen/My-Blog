# vitepress学习

## 表格

* 源代码
``` sh
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

* 效果展示

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 图片
图片通常放置在公共资源public下的，images路径内
alt属性用于在图片显示出错时给于用户提示

``` sh
<img :src="('http://i0.hdslb.com/bfs/album/e6c53dc180e8e1a5dcd819cc161ee0fdc911128d.png')" alt="这是一张图片">
```

* **效果展示**
<img :src="('http://i0.hdslb.com/bfs/album/e6c53dc180e8e1a5dcd819cc161ee0fdc911128d.png')">

``` md
::: tip
提示
:::

::: warning
注意
:::

::: danger
危险
:::
```

::: tip
提示
:::

::: warning
注意
:::

::: danger
危险
:::
