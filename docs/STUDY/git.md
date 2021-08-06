# git入门

> git和 github是不同的概念
>
> git:(version control system)一个开源的版本控制系统
>
> github:世界上最大的在线代码托管平台,由Linux之父林纳斯创建,由于核心部分版本控制是用 `git` 处理的所以叫 `github` 

![](http://i0.hdslb.com/bfs/album/0896242aa82ff35d92e96e95be723662f564377a.jpg)

## 基础命令

### 本地操作

* `git init`: 本地初始化新建仓库
* `git status`: 查看本地仓库状态,显示是否有变更的文件
* `git add` : 添加文件到本地仓库
* `git commit` : 将暂存区的文件添加到仓库中
* `git branch` 查看本地分支
* `git branch -m 旧分支名 新分支名` 在本地修改分支名
* `git diff` :查看的是`add`前和`add`后的差异

### 远程操作

为了便于远程管理,每一个远程主机都要有一个指定的主机名

* `git remote` 列出所有远程主机
* `git remote -v` : 查看远程主机信息
* `git remote add 主机名 远程仓库地址` : 添加远程主机
* `git remote rm 主机名` 删除远程主机
* `git remote rename 原主机名 新主机名`  修改远程主机名字
* `git remote show 主机名` 查看该主机详细信息
* `git branch` : 查看自己当前所在分支
* `git remote rm origin` :远程仓库移除起点

`git`中,`origin`和`master` 分支的理解?

git的远程服务器有多个repository,每一个远程仓库都有多个分支,origin就是远程仓库的指针或者本体名称,说白了就是这个远程仓库叫啥名

master就是本地分支的一个名字,通常情况下是指主分支,这个名字也可以修改成其他名字.



###  实践:提交本地文件到远程仓库

1. 本地新建一个仓库 `git init` 

![](http://i0.hdslb.com/bfs/album/7045c4622559e9efec4a2e653006a6472d657181.png)

查看下仓库的状态 `git status` 

![](http://i0.hdslb.com/bfs/album/70ed198dff82b62ad9525036c8ab0d590d5e64c9.png)

红色的文件表示此文件未做任何的保存,还处在工作区状态,需要提交到本地仓库

2. 将本地新建的 `hello.txt` 文件添加到本地暂存区:  `git add hello.txt` 

![](http://i0.hdslb.com/bfs/album/15e009df426ccfff522bbdc89dff8ef5968937f6.png)

再次查看仓库状态

![](http://i0.hdslb.com/bfs/album/8169f8315953d2804f7c2613a52a4aba52e852fa.png)

3. 将文件提交到本地仓库: `git commit` ![](http://i0.hdslb.com/bfs/album/a4ee09785e0f2f2f51efbfe38aa185099c6d08c1.png)
4. 将本地仓库的文件推送到远程仓库: `git push origin main` 

![](http://i0.hdslb.com/bfs/album/ddf677bea4ebe77737337b2959a13bab48ca3d43.png)

`origin main` 远程的主分支,如果第一次提交会要求绑定远程仓库地址,`git remote add origin 仓库地址` ,使用 `git remote -v` 查看连接状态

5. 去远程仓库查看

![](http://i0.hdslb.com/bfs/album/c822eda163c56b49070767937a452d00cabbc5e1.png)

### 对于`git`配置邮箱和用户名的理解

#### 前提

`git` 远程仓库支持两种协议: `SSH`和`HTTPS` ,

* `SSH` 协议只认机器,也即为：如果使用`SSH`操作远程仓库的话，我们需要使用公钥和私钥对来做权限的认证，
* `HTTPS`协议只认账号,`HTTPS`操作远程仓库，则需要使用账号密码来做权限的认证

无论是公钥私钥对，还是账号密码，仅仅是用来对权限进行认证；但是远程仓库里需要记录这些提交记录是由谁来完成的；所以我们需要给本地的git设置用户名和邮箱，用于从本地仓库向远程仓库提交记录时，在远程仓库会记录下这些操作是由谁来完成的,以及他的联系方式

#### 具体命令

```bash
git config --globa user.name "你的名字"
git config --global user.email "邮箱地址"
```

#### 疑问 

1. **为什么要配置用户名和邮箱？**

因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址（名字和邮箱都不会进行验证），这样远程仓库才知道哪次提交是由谁完成的。你也许会担心，如果有人故意冒充别人怎么办？这个不必担心，首先我们相信大家都是善良无知的群众，其次，真的有冒充的也是有办法可查的。

2. **配置的用户名和邮箱对push代码到远程仓库有什么影响？**

首先，配置的用户名和邮箱对push代码到远程仓库时的身份验证没有作用，即不用他们进行身份验证；他们仅仅会出现在远程仓库的commits里。

其次，按正常操作来说，你应该配置你的真实用户名和邮箱，这样一来在远程仓库的commits里可以看到哪个操作是你所为。

最后，这个用户名和邮箱是可以随便配置的（不提倡），如果你配置的邮箱是github里真实存在的邮箱，则commits里显示的是这个邮箱对应的账号；如果配置的邮箱是一个在github里不存在的邮箱，则commits里显示的是你配置的用户名。

### 常用`git`命令

![](http://i0.hdslb.com/bfs/album/484201019fa90a20006838c06da18b19d34ca0f0.jpg)

### `git`命令思维导图

![git命令](http://i0.hdslb.com/bfs/album/ced18de825e756bf0e60e92b4b7b18f0a50550ad.png)

* [阮一峰git教程](https://www.ruanyifeng.com/blog/2014/06/git_remote.html)
* [掘金git教程](https://juejin.cn/post/6869519303864123399)
* [知乎教程](https://zhuanlan.zhihu.com/p/135183491)

