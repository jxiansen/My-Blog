# webpack快速入门

## 初始化项目

``` js
mkdir webpack-demo && cd webpack-demo
pnpm init
```

添加配置文件 `webpack.config.js`

``` js
touch webpack.config.js
```



作为开发依赖安装,因为webpack只有在开发的时候才会使用到，最后打包的时候不需要使用

``` js
pnpm i webpack webpack-cli -D
```

在项目中打包当前的文件

``` js
pnpm webpack
```

在 `package.json` 中更改打包命令

``` js
"scripts": {
  "build": "webpack --config webpack.config.js"
},
```

之后直接执行, `pnpm build` 就可以使用指定的配置文件进行打包 

## loader

* 使用 babel 来转义 js 代码，将高版本的 js 代码转换成兼容低版本浏览器使用的代码，但是对新的 api 并不会转换例如（promise,Generator,Set,Maps,Proxy等），需要使用 babel-polyfill来帮助转换

``` js
pnpm i babel-loader @babel/core @babel/preset-env -D
```

![image-20220825163929046](https://i0.hdslb.com/bfs/album/2f403e781e442d69d4df37e4790d0835603b8909.png)

源代码中是 ES6的箭头函数转换成普通的函数以供低版本浏览器运行

![image-20220825164007682](https://i0.hdslb.com/bfs/album/7f30127322699c90b58e8c07effe62313845f6ef.png)

## 插件（plugin）

* 引用CSS，在入口文件js中使用 css文件

``` js
pnpm i css-loader style-loader -D
```

如果使用 `less` 来构建样式还需要多安装两个

``` js
pnpm i less less-loader -D
```

**配置文件**

``` js
// webpack.config.js
module.exports = {
    // ...省略其他配置
    module:{
      rules:[
        {
          test:/\.css$/,
          use:['style-loader','css-loader'] // 从右向左解析原则
        },
        {
          test:/\.less$/,
          use:['style-loader','css-loader','less-loader'] // 从右向左解析原则
        }
      ]
    }
} 
```





* 配置 html 模板

每次打包好文件，都会生成一个新的js文件，为了不让每次都重新手动在 html 中引入打包好的 js 文件，需要安装插件，来自动生成引入打包好的js文件。

``` js
pnpm i html-webpack-plugin -D
```

* 压缩代码来减少打包好后文件的体积

``` js
pnpm i terser-webpack-plugin -D
```

* 清除上次打包残留

> 每次打包后，dist文件夹中都会残留上一次打包剩下的文件，如果输出的名字是固定的例如： `dist.js` node 会自动覆盖上次的文件，如果文件命名是 Contenthash，每次都是不同的名字，打包的文件会越来越多，所有需要有插件清空上次的文件夹

``` js
// 安装
pnpm i clean-webpack-plugin -D

// webpack.config.js中
module.exports = {
    // ...省略其他配置
    plugins:[new CleanWebpackPlugin()]
}
```

* treeShaking (摇树)

在 webpack 中把没有用到的代码给摇掉，以优化代码打包结果，webpack5中已经自带这个功能，当打包环境为 `production` 时候，默认开启 `tree-shaking` 功能

**未摇树的情况**，并没有使用到这个函数但打包出来的代码中包含很多根本没有使用到的函数

![image-20220825165450192](https://i0.hdslb.com/bfs/album/11dade100554118bc9e6617956fa4cb2334586ff.png)

<img src="https://i0.hdslb.com/bfs/album/fae16156f898a240fa0fb7ca7e28c99dad8f6c93.png" alt="image-20220825165738545" style="zoom:67%;" />

开启摇树后的代码大小比对

``` sh
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        2022/8/25     16:33          22247   13bb15d66760a03a2cd9.png
-a----        2022/8/25     16:55         587719   dist.js
-a----        2022/8/25     16:51           3911   dist.js.LICENSE.txt
-a----        2022/8/25     16:33            235   index.html
=============================== tree shaking 后===========================
Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        2022/8/25     16:33          22247   13bb15d66760a03a2cd9.png
-a----        2022/8/25     16:58          75575   dist.js
-a----        2022/8/25     16:58            336   dist.js.LICENSE.txt
-a----        2022/8/25     16:58            218   index.html
```

> 开始 treeshaking 后，会把 未使用的函数，不可能执行的代码，定义未用的变量都剔除了

### 配置 dev-server 来实现热更新

``` js
pnpm i webpack-dev-server -D
```

## 优化

### 对打包文件进行可视化查看

> `webpack-bundle-analyzer` 可以将打包后的内容展示为方便交互的直观树状图，便于分析文件大小进一步优化

``` js
// 安装
pnpm i webpack-bundle-analyzer -D

// webpack.config.js
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;	// 导出这个构造函数

// 使用
module.exports = {
  plugins: [new BundleAnalyzerPlugin()],
};
```



### 打包事件优化

#### thread-loader

多进程打包，可以充分利用cpu的多核心资源， 使用方法: 将 `thread-loader` 放在比较费事件的 `loader` 之前，比如 `babel-loader` 

[webpack优化手段](https://juejin.cn/post/7083519723484708878)