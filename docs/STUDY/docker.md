# Docker 入门

## 基础命令

`docker ps`: 查看正在运行的容器, 参数`-a` :过去曾经运行过的容器

`docker stop 容器id`: 停止运行此容器

`docker start 容器id` 启动已经创建好的容器

`docker search 镜像名` 在远程仓库中搜索所有可用的镜像

![image-20210808173929994](http://i0.hdslb.com/bfs/album/234c360c8ff0c19984b3c615e75f06f2fc330508.png)

`name` :镜像名	`description` 描述	`stars` 星	`official` 是否是官方	`automated` 自动构建

`docker run` 以镜像创建一个新的容器并运行

`-d` 后台运行容器，并返回容器 ID

`i` 以交互模式运行容器，通常与 `-t` 同时使用；

`--name 名字` 自定义容器名字

`p 端口号:端口号` 镜像映射

`nginx` 镜像名称

`docker rm 容器id`:移除容器

`docker inspect 容器id` 查看容器信息

`docker rmi 镜像id` 移除镜像

`docker rename 原容器名 新容器名` 重命名容器

![image-20210801183244053](http://i0.hdslb.com/bfs/album/4c3edd85ca533cea2d330934c72469b3919d193d.png)

`docker image ls` : 查看已经下载到本地的镜像

`docker diff '容器的id'`: 列出容器内文件变动情况

![image-20210801143934667](http://i0.hdslb.com/bfs/album/d67843beff63e0785b6ab20d8c2df09963ed4d7a.png)

`A`: add 代表新增的文件

`C`: 更新的文件

`D`: 删除的文件

`docker commit '容器id'`: 更换容器名字

`docker attach '容器id'`: 进入到正在运行中的容器,(不推荐,`exit` 退出容器会暂停容器)

`docker exec -it 容器id /bin/bash` 进入到容器命令行中

## Docker 安装 Mysql

1. 拉取`Mysql`镜像

```bash
docker pull mysql
```

`docker ps`

2. 创建`mysql` 容器

```bash
docker run -d --name 数据库名 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=数据库密码  mysql
```

`-p`:代表端口映射,格式为:宿主机端口---> 容器端口

`-e`: 代表添加环境变量 MYSQL_ROOT_PASSWORD 是 root 用户的登录密码

3. 进入`mysql`容器,登录`MySQL`

```bash
docker exec -it mysql_name  /bin/bash
```

如果没有`vim`,先安装 vim,

```bash
apt-get install vim
如果报错,Vim:command not found则需要安装vim
apt-get update:更新源中的索引,获得最新的软件包
更新完成后在安装一遍就好了
```

4. 登录`mysql`

`mysql -u root -p`

## Dockers 安装 nginx

1. 从云端拉取`nginx`镜像

![image-20210801182336668](http://i0.hdslb.com/bfs/album/e8e8e20bbf1f85b351ad7067a4dd4a5a9c76bd07.png)

2. 查看本地`nginx`镜像的状态

`docker images nginx`

![image-20210801182536249](http://i0.hdslb.com/bfs/album/8a3f30dba6928e4790a53fd7c04baf2007f43548.png)

3. 创建`nginx`容器

`docker run -d --name web-server -p 80:80 0815`

- `-d` 容器以后台模式运行,并且放回容器 ID
- `--name` 重命名容器
- `-p` 指定端口映射,格式为:`宿主端口`---> `容器端口`
- `0815` 指定`IMAGE ID`的前四位

![image-20210801184318797](http://i0.hdslb.com/bfs/album/c54bd49682041f69152541f5f0416bf00d5d107b.png)

容器已经成功创建了,`nginx`的端口映射到自己宿主服务器的端口上,访问服务器`ip`的`80`端口,可以看到`nginx`的欢迎界面,服务器要放开端口.

此时使用`docker ps` 确认了`nginx`服务确实在运行

![image-20210801184729956](http://i0.hdslb.com/bfs/album/1ca2406393162fc85f6ded4f192b4b6b66ed6064.png)

#### 配置 Nginx

> 方法一:进入到`nginx`容器内部修改

这种方法适合改动较少,简单的使用情况

1. 命令行中运行`docker exec -it 5a /bin/bash`

- `exec` 在运行的容器中执行命令
- `-i` `-t` 两个参数合并的写法,表示为指定的容器,`i` 表示和这个容器互动,`t`表示为这个容器创造一个伪终端
- `5a` 是要进入的容器`id` 不写全也没关系,只要唯一指定就行
- `bin/bash` 用来指定执行命令的`shell`解释器

![image-20210801204933502](http://i0.hdslb.com/bfs/album/13282dc061f835e5a25eec172abceb4a0b9849d9.png)

`nginx`有三个主要配置的地方

1. `cd`到`nginx`的内部,`cd/etc/nginx` ,配置文件主要就在这个文件夹中

![image-20210801205247302](http://i0.hdslb.com/bfs/album/390f0090dff41983e24b7c34f5acd91404749a7d.png)

2. `nginx` 的默认`index` 文件目录在`/usr/share/nginx/html`

![image-20210801205438373](http://i0.hdslb.com/bfs/album/ff018870ebca15f10cbb9c5d3343d594ca6e59c9.png)

3. 日志文件在`/var/log/nginx`中

![image-20210801210055855](http://i0.hdslb.com/bfs/album/5522b27760c5df3b32a3a88d6de4def89ed50771.png)

> 方法二,将`nginx`容器内部的配置文件挂载到主机内部,对主机的目录进行修改,适合经常修改操作的情况

[nginx配置](https://www.cnblogs.com/qiqiloved/p/13470064.html)

## Docker 部署 Jenkins 及初始配置

1. 下载`jenkins` 镜像

```bash
[root@localhost ~]$docker pull jenkinsci/blueocean
Using default tag: latest
latest: Pulling from jenkinsci/blueocean
ff3a5c916c92: Pull complete
5de5f69f42d7: Pull complete
fd869c8b9b59: Pull complete
09b77ebbb585: Pull complete
edaab8c638eb: Pull complete
74718d164167: Pull complete
6d6dab0396d5: Pull complete
f6a4487e3af7: Pull complete
4b44a66deffd: Pull complete
925e68272890: Pull complete
428de9991230: Pull complete
f4b1af398075: Pull complete
425d68489478: Pull complete
e2f8bb400606: Pull complete
251d043c8226: Pull complete
9a6a8fe90c4f: Downloading [==============================================>    ]  62.19MB/66.73MB
9a6a8fe90c4f: Pull complete
Digest: sha256:df6669eab61f76cba7b51847ef24623f65902499925b4d5a2516d155dc95c0c5
Status: Downloaded newer image for jenkinsci/blueocean:latest

```

2. 查看镜像状态

```bash
[root@localhost ~]# docker images
REPOSITORY            TAG       IMAGE ID       CREATED        SIZE
jenkinsci/blueocean   latest    090919d971fc   17 hours ago   716MB
```

3. 以此镜像文件启动成容器

```bash
docker run -d  \
--name jenkins -u root \
-p 9090:8080  \
-v /var/jenkins_home:/var/jenkins_home  \
jenkinsci/blueocean
```

> 参数解释:
>
> - `--name` 生成指定容器名
> - `-u root` 以`root` 权限启动避免权限问题导致启动失败
> - `-p` 进行端口映射,宿主机端口---> 容器端口
> - `-v` 将`jenkins`容器的`jenkins_home`目录映射到宿主机的目录中,方便后续配置修改

此时`jenkins`服务已经部署好,浏览器访问`服务器ip:9090`使用服务

![image-20210802112741179](http://i0.hdslb.com/bfs/album/dd26ab59e40adedb0060bd8c833ee357643ffef3.png)

查看`jenkins`密码

```bash
cat /var/jenkins_home/secrets/initialAdminPassword
```

![image-20210802135853545](http://i0.hdslb.com/bfs/album/023eac3342a2307714a618c1ca3bf03e70ced63a.png)

## docker 部署 gogs

### 简介

`Gitlab` 搭建`git`服务对于服务器的配置要求相对较高,启动和访问速度较慢,

`Gogs` 一款开源的自助`Git` 服务搭建系统,使用`Go` 语言开发,多平台支持,对系统硬件要求极低,甚至树莓派都可以搭建

```bash
# 拉取gogs镜像
docker pull gogs/gogs
# 启动容器
docker run --name gogs -p 10022:22 -p 10050:3000 \
-v /home/apps/gogs/data:/data \
-d gogs/gogs
```

参数:

- `gogs`需要用到两个端口服务:`SSH` :22 端口 ,`网页服务端口`: 3000
- `-v` 挂载`gogs` 文件目录到容器外部
- `-d`后台运行,并返回容器`ID`

![image-20210802154932458](http://i0.hdslb.com/bfs/album/3fe4b81508cb7db995675f14e103bf16260555de.png)

![image-20210802155204057](http://i0.hdslb.com/bfs/album/850a171da8b7cc6d128e42ab8e0fac5547c48b71.png)

此时访问 ip+10050 端口就可以访问 gogs 服务了

![image-20210802160140804](http://i0.hdslb.com/bfs/album/0b69eca5bbef95558ce9a4cea9d47228569ff696.png)

[知乎gogs部署](https://zhuanlan.zhihu.com/p/253217380)

## Docker 部署 nginx

```bash
docker pull nginx
#拉取nginx镜像
docker run -di --name=nginx -p 80:80 -v /var/jenkins_home/workspace/html:/usr/share/nginx/html nginx
#启动容器
```

网页静态文件`index.html` 路径: `/var/jenkins_home/workspace/html`

默认 `conf` 路径容器内 `/etc/nginx/nginx.conf`

访问服务:

`192.168.50.17`

#### `nginx`配置文件

```bash
server {
    # 默认监听 80 端口
    listen   80;
    # localhost 为外部访问该地址的域名   域名解析指向---> NGINX 配置文件所在服务器
    server_name  localhost;

    # 这里为本地代理，当外部访问 server_name 域名的时候 就会转到以下代理地址
    #1ocation / {
    #     proxy_pass http://192.168.0.243：8778;
	#}

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    # nginx 的默认访问文件夹为 root  /usr/share/nginx/html
    # nginx 的默认访问页面为  index  index.html  index.htm
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
```

`nginx`容器内部的配置文件目录:

- 配置文件`conf` 目录: `/etc/nginx`
- 日志`log`目录 `/var/log/nginx`
- 网页文件`html` 目录 `/usr/share/nginx/html`

```bash
docker run -d -p 80:80 --name nginx -v /home/nginx/html:/usr/share/nginx/html nginx
```

## `dockers`概念区分,`Images`,`Containers` `Volumes` 区别

![3524_1](http://i0.hdslb.com/bfs/album/a74a14baabac144c4224bf3fcc2e6b530546f184.png)

- `Image` 镜像就是一堆只读层,是多层静态的文件的堆叠
- `container` 容器和镜像差不多,也是一堆层的堆叠,唯一的区别是容器的顶层是可读写的,容器=镜像+读写层,通常是动态的

![](http://i0.hdslb.com/bfs/album/a7be97ed925ff163ef344a2c1ee7e4b644eb30b6.png)

[10 张图带你深入理解 Docker 容器和镜像](http://dockone.io/article/783)
