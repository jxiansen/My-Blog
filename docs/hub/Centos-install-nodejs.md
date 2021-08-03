# Centos7 安装 nodejs 并配置 NPM

#### final shell ssh 连接 Centos

![](http://i0.hdslb.com/bfs/album/84852beaad0f834d6579f3ce5d220c8195b3dba9.png)

## 第一步,在 centos 中找到安装路径并下载

```sh
cd /usr/local/bin
```

![](http://i0.hdslb.com/bfs/album/f4019781bd4886f876a1f1e6db06eae3144c67ba.png)

**去 node 中国官网,找到自己要下载的版本**

[Node.js 中文网](http://nodejs.cn/download/)

点击这个阿里云镜像,因为是国内的节点,速度会快很多

![](http://i0.hdslb.com/bfs/album/bd03ce0533e00b68bf4d13d26ce1af0d6de60fed.png)

进入阿里镜像站,下载这个 64 位 linux 版本,复制这个链接地址
![](http://i0.hdslb.com/bfs/album/8cb9787b0f6e834a24eb41b0c02a29132714c045.png)

进入 final shell 中使用 `wget`命令下载该文件

```sh
yum install -y wget
# 前提需要先安装wget命令
wget https://npm.taobao.org/mirrors/node/v16.4.0/node-v16.4.0-linux-x64.tar.gz

```

![](http://i0.hdslb.com/bfs/album/81329770552fdce51a96016332559688a640b8e5.png)

该命令会在此路径下载要安装的压缩包
![](http://i0.hdslb.com/bfs/album/ae1a4dbb58347069cee7320d88351b0a5a0e3700.png)

## 解压缩安装包

输入以下命令开始解压

```sh
tar -xvf node-v16.4.0-linux-x64.tar.gz
```

![](http://i0.hdslb.com/bfs/album/923c50d2721e2de914e6b5c2a0ee94d908c23ad3.png)

进入解压好的目录,执行命令安装 node 依赖组件

```sh
cd node-v16.4.0-linux-x64.tar.gz
yum install gcc gcc-c++
```

![](http://i0.hdslb.com/bfs/album/0d81159d2734c34ad1cfcd8db916790ca210d2ea.png)

回到上一级重命名文件夹为 **node.js**

```sh
cd ..
mv node-v16.4.0-linux-x64.tar.gz Node.js
```

![](http://i0.hdslb.com/bfs/album/4f816d23f3c01a437247b7e185a332da6b0ce6fc.png)

## 配置 bin 文件中的软连接以便全局访问

```sh
cd Node.js/bin
```

进入 nodejs 中 bin 文件夹,有以下三个文件

![](http://i0.hdslb.com/bfs/album/dc6446fbc653d9e581a125c2d9b5eefbad07b91b.png)

执行命令配置关联

```sh
ln -s /usr/local/bin/Node.js/bin/node /usr/bin/node
ln -s /usr/local/bin/Node.js/bin/npm /usr/bin/npm
ln -s /usr/local/bin/Node.js/bin/npx /usr/bin/npx
```

配置好后进入根目录,输入 **npm**,**node** 等命令测试一下

![](http://i0.hdslb.com/bfs/album/a5f4b1d78fa692a51c4f1a1100a8cc7f86b3ca68.png)

> 此时 node 已经安装成功!!!

## 配置 NPM

**设置全局安装位置**

```sh
# 进入node安装位置
cd /usr/local/bin/Node.js
# 新建全局安装文件夹和缓存文件夹
mkdir node_global
mkdir node_cache
# 设置下全局安装路径和缓存位置
npm config set prefix "node_global"
npm config set cache "node_cache"
# 最后查看下自己配置是否成功
npm config ls
```

node 安装路径下的文件夹格式

![](http://i0.hdslb.com/bfs/album/e28b9210016d618dca1286fb675769ea61051de1.png)

![](http://i0.hdslb.com/bfs/album/efabd9960986f0b694e2f1ac6bab56add637eaee.png)

**更换国内的淘宝镜像源**提高下载速度

```sh
# 设置镜像源
npm config set registry=http://registry.npm.taobao.org
# 查看更改后的镜像源
npm config get registry
```

![](http://i0.hdslb.com/bfs/album/ef2f891fff085b1107d24fa4e652d5b3abd5231d.png)
