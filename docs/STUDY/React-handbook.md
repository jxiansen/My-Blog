## 前言

> 本书大部分内容是根据原作者 Fiavio 所写的《React-beginners-handbook》所翻译而来,有一些内容概念发生了改变,加入了自己的学习认知和看法.希望自己通过翻译对所学知识进行总结并进行输出以提高自己的掌握程度,也希望能给您提供一些价值.
>
> 本人能力水平有限,如果遇到错误请谅解😀
> 原作者网址: https://flaviocopes.com/ 你可以阅读原版书籍
> 译者: 就叫阿J

《React初学者手册》这本书遵循"二八定律": 使用20%的时间,学习80%的知识.

我发现这种方法提供了一个很好的概述.

这本书并不是要教授所有关于React的大而全的知识,它只关注与语言的核心,尽量简化复杂的内容.

我希望本书的内容将会帮助你获得你想要的: "学会React的技术知识"

本书的作者是 Fiavio, **我每天会在我的个人网站 https://flaviocopes.com/ 上分享推送我的网页开发教程.

你可以在推特@flaviocopes上找到我

享受吧!

## React 简介

本书的总是是提供一个React入门学习指南

在本书的结尾,你将会对以下内容有一个基础的认知

* React是什么? 为什么如此流行?
* 如何安装React
* React概念: 组件
* React概念: 状态
* React概念: Props
* 处理React中的用户事件
* React组件中的生命周期事件

以上内容将会是你在其他高级React课程中的前置基础,本书主要面向刚开始基础React的前端开发人员.React是一个JavaScript库,旨在简化图形界面的开发.它由Facebook开发,2013年发布,被包括Facebook和Instagram以及其它无数应用产品广泛使用.

React的主要宗旨是,将应用界面拆分成一系列的组件,便于理解界面及其应用状态.

你刚开始学习React可能感觉有点难,但只要你坚持下去,我保证你将会有最好的体验之一.因为React比以往大大简化了前端开发的难度,并且其周边生态中有很多好用的库和轮子.

React自身仅有很小的API,你刚开始只需要理解4个基本概念:

* 组件
* JSX
* State
* Props

在本书中我们将会探讨以上几个问题,关于其他高级概念去其他学习资料中寻找.

## 使用React前你需要知道的JS知识? 

在直接学习React之前,你需要了解一些JavaScript核心概念

* [变量](https://flaviocopes.com/javascript-variables/)
* [箭头函数](https://flaviocopes.com/javascript-arrow-functions/)
* [使用Rest运算符和Spread运算符来处理对象和数组](https://flaviocopes.com/javascript-rest-spread/)
* [对象和数组的结构](https://flaviocopes.com/javascript-destructuring/)
* [模板字符串](https://flaviocopes.com/javascript-template-literals/)
* [类](https://flaviocopes.com/javascript-classes/)
* [回调函数](https://flaviocopes.com/javascript-callbacks/)
* [Promise](https://flaviocopes.com/javascript-promises/)
* [Async/Await](https://flaviocopes.com/javascript-async-await/)
* [ES6模块化](https://flaviocopes.com/es-modules/)

如果你还不太了解以上概念,我给你提供了一些链接来找到更多以上主题的信息

## 为什么你要学习React? 

我强烈建议所有前端开发人员对React有一个基本认知:

有以下几个原因:

1. React非常流行,作为一个开发者,你工作上会有很大概率遇到React项目,或者你的团队想要基于React技术栈开发新项目
2. 如今很多的工具库都是以React为核心构建的,流行的框架和工具比如: Next.js,Gatsby和许多其他工具都是基于React
3. 做为前端工程师,React在工作面试的时候很可能会被问到

这些都是原因,但是我想让你学习React的原因之一是: React很棒,开发理念和体验很好,包括代码可复用性,组件化开发,速度相应快,轻量级并且由于是数据驱动,完美的适应许多常见的场景.

## React 安装

有几种不同的方法来安装React,首先强烈推荐一种方法,那就是使用官方推荐工具: `create-react-app` ,这是一个命令行应用,可以让你短时间内上手React.

首先使用`npx` ,这是一个简单的方法可以让你下载和执行Node.js命令并且无需安装,

>  可以看我的`NPX` 教程https://flaviocopes.com/npx/)  

`npx`是和`npm`(从5.2版本开始)一起绑定的,如果你现在还没有安装`npm` 你可以现在就从 https://nodejs.org,官网开始下载,(`npm`是`Node`自带的包管理工具),如果你不知道你安装的`npm`版本,可以使用`npm - v` 命令查看版本号来检查是否是需要更新.

> 注意: 如果你还不熟悉终端命令行的使用,可以来我的网站查看`osx` 教程,适用与`Mac` 和`Linux` 网址: https://flaviocopes.com/macos-terminal/

当你运行`npx create-react-app <app-name>` 的时候,`npx` 会下载并运行最新的`creat-react-app` 版本,并且删除掉旧版本.这点很好因为你不会想在你每次跑程序的时候,电脑里还装着旧版本.

你可以使用最新最棒的代码

那我们开始了:

> `npx create-react-app todoList`

<img src="http://i0.hdslb.com/bfs/album/5460db5c4188f63235f902c9eac200f1ebcbc783.png" alt="image-20210927110637178" style="zoom:67%;" />

此时已经完成了运行:

<img src="http://i0.hdslb.com/bfs/album/d75b3e959d5416a79e811319366c32e7358eb490.png" alt="image-20210927110748433" style="zoom: 67%;" />

`create-react-app` 命令在你创建的文件夹中生成了一个一些文件,并且初始化了一个`GIt` 仓库,它还在软件包中添加了一些命令文件

<img src="http://i0.hdslb.com/bfs/album/1aa2dbc5f92828c40eef9aa91eb459cc7f250d2f.png" alt="image-20210927111049870" style="zoom:67%;" />

现在你就可以进入你新建的应用程序文件夹中,运行`npm start`命令立即启动该应用程序

<img src="http://i0.hdslb.com/bfs/album/e7e8f982d370b7bee6c8c942e34fba4e5d4652b0.png" alt="image-20210927111417647" style="zoom:67%;" />

默认情况下,这个命令会在本地3000端口运行,在你的浏览器打开这个地址将会显示欢迎界面.

<img src="http://i0.hdslb.com/bfs/album/cfccd3909645c873f87fa03ad1238bb9787386f1.png" alt="image-20210927111631544" style="zoom:67%;" />

现在你已经可以在这个应用程序里工作了!

现在介绍第二种方法: 使用`pnpm`和`vite2` 来安装`React` ,是译者本人自己常用的方法,速度更快体验更好

> `pnpm` 就是和`npm` `yarn` 一样的包管理工具,其最大的优点就是速度及其快,依赖安装对于磁盘空间利用率也比较高,正常使用比`npm` 快至少两倍,`pnpm` 的所有命令和`npm` 一样,只需要开头加一个`p` 
>
> 安装: `npm i pnpm -g` 

> `vite` 是`vue`作者尤雨溪开发的前端构建工具,能够大幅度提高前端开发体验,服务启动,依赖安装速度飞快

现在开始:

> `pnpm init vite@latest`,并输入项目名称

![image-20210927113047699](http://i0.hdslb.com/bfs/album/5a26351fad6982cb85174a991a2b7ed0da2a1ba8.png)

选择React项目

![](http://i0.hdslb.com/bfs/album/0ab9e8a4b1dbae5c129d06160662c8961eb5d3b3.png)

![image-20210927113223619](http://i0.hdslb.com/bfs/album/a2c5c6a9a51494ed80defbe79f2deb332cc4e9fa.png)

初始化完成后,按照提示,输入对应的命令,安装依赖文件

<img src="C:/Users/30328/AppData/Roaming/Typora/typora-user-images/image-20210927113523967.png" alt="image-20210927113523967" style="zoom:50%;" />

在这里可以看到不到一秒钟,所有的依赖文件都已经安装完毕,可以说速度很快了

> `pnpm dev`  启动服务器
>
> 在浏览器中打开给定的本地端口地址

<img src="http://i0.hdslb.com/bfs/album/e941644d99766d42c115ea2164efce38a9ed0383.png" alt="image-20210927113725818" style="zoom: 80%;" />

<img src="http://i0.hdslb.com/bfs/album/32ed231ef43bbfebb33f9d27fdb05467547ae7bb.png" alt="image-20210927113916800" style="zoom:67%;" />

React 应用已经开始运行了

## React 组件

刚才你已经看到了如何创建你的第一个React 应用了,这个应用中包含一系列的文件,可以做各种各样的事情,取决于你自己如何配置,其中有一个文件很重要:`App.jsx` 

`App.jsx` 是你遇到的第一个React 组件

代码如下:

``` React 
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
```
