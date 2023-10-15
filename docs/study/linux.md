## Linux初学者指南

udemy 课程 `Linux Operating System: A complete Linux guide for Beginners` 学习笔记

## 介绍

### Linux是什么?

就像 windows 和 MacOS 或者 ios ,安卓智能手机一样，作为一个操作系统，Linux 是一个软件位于计算机的所有硬件上。管理硬件资源，分配这些资源到软件应用管理所有的线程 , Linux 看似离我们很遥远但是实际上与我们息息相关，安卓就是基于Linux操作系统的，Chromebooks，数字存储设备，可穿戴设备，相机都是运行在 linux 上的。 现在的很多智能汽车运行的都是 linux

### 为什么是Linux?

为什么一定要学习或者使用linux了？

* 开源：随意对系统更改，定制使用
* 安全，弹性的
* 用户基数大，使用的社区成员多遇到问题好解决

### Linux 的家谱

linux有着庞大的家族分支，不同的发行版没有什么太大的区别，他们核心都运行着 Linux Kernel (内核)，主要区别在使用不同的包管理工具。

![image-20220915133612506](https://i0.hdslb.com/bfs/album/7ac9e570263858f780e1e9c94d0f07eb05b4d437.png)



1. `debian家族` 包管理工具使用（apt) : Advanced Packaging Tool 

```sh
sudo apt update
```

2. `RHEL`家族，红帽家族 使用 RPM(Red Hat Package Manager) 红帽包管理工具 或者 `yum` (yellowdog Updater Modified)

```sh
yum update
```

### 图形界面对比命令行

| 图形化界面                         | 命令行                               |
| ---------------------------------- | ------------------------------------ |
| 带有图标和形状的用户界面，方便理解 | 使用命令导航，需要命令行的知识去使用 |
| 需要更多的内存和图形资源           | 只需要很少的内存                     |

输出自己的公网ip

```sh
curl ifconfig.me
```

输出当前的登录用户

```sh
whoami
```



















## 文件系统和终端介绍

![image-20220915223537379](https://i0.hdslb.com/bfs/album/06e30c2b9c1f049f790641d815b7e448c8b3828c.png)

* `/` 根目录

> 根目录就是所有目录所在的目录，是Linux中所有目录的根，其他的目录都是以 `/` 开头的

* `/bin` 存放重要的用户二进制文件目录

>bin 是 `binary` 的缩写，/bin目录中存放了非常重要的用户二进制文件，其实就是各种程序，/bin 中存放的都是在单用户维护模式下还能被操作的命令，这些命令可以被 root 和普通用户使用，在 /bin 中我们可以看到经常被我们使用的命令程序。

* `/boot` 存放系统启动时需要文件的目录

> /boot 中存放的主要是系统启动时需要用到的文件，比如 `EFI` ,`GRUB` 以及 `linux` 的内核

* `/sbin` 系统管理员用户的二进制文件目录

> `/sbin` 目录和 `/bin` 目录有些类似，都是存放二进制文件的地方。比较特殊的是， `/sbin` 目录中存放的都是系统管理的命令程序，一般只有 root 用户能使用

* `/dev` 设备文件目录

> Linux 中所有的东西都被看成文件，设备也不例外，无论是实体的硬件设备还是虚拟设备。实体硬件比如第一块被检测到的硬盘会被挂载到 `/dev/sda` ,第二块会被挂载到 `dev/sdb` ,以此类推。

* `/etc` 配置文件目录

> `etc` 的含义是 `ET cetera` ,表示一些相关的其他东西，`/etc` 从 `unix` 早期 开始就被用来存放配置文件，一直沿用至今。 需要注意的是，`/etc` 中存放的是系统配置文件，特定用户的配置文件放在每个用户的 `/home` 目录下

* `/home` 用户目录

> `/home` 目录中存放的是每个用户的用户目录，比如有一个用户叫 `tom` , `/home/tom` 就是他的用户目录，每一个用户的用户目录中存放的用户数据和用户配置文件，比如每个用户的 `.bashrc` 文件， `.ssh` 目录等。 普通用户只能访问自己的用户目录而不能访问别人的。 `root` 用户没有此限制

* `/var` 变动数据目录

> `/var` 一般用来存放经常变动的数据，比如日志文件和缓存文件。下面是 `/var` 目录下常见的几个子目录的含义：

1. /var/cache 存放应用程序运行产生的临时文件
2. /var/lib 存放程序在执行过程中需要使用到的数据文件，每个软件在此目录下都有自己的独自的目录
3. /var/lock 存放程序的锁状态
4. /var/log 存放各种日志文件
5. /var/mail 存放个人电子邮箱
6. /var/run 有些程序在运行后，会将他们的 pid ,socket文件放置到这个目录中

* `/usr` 用户二级制文件和只读文件目录

> /usr 目录下存放的是用户使用的程序，`Linux` 将普通用户和系统使用的程序分开存放，比如系统使用的一些重要程序存放在 /bin 中，那些不重要的程序就被放在 /usr/bin中

* `/opt` 可选包目录

> `opt` 是 `optional` 的意思，系统中安装的可选软件包被存放在 `/opt` 目录中

## 文件和目录基本命令

> ### `ls` 列出当前所在路径下的文件

- `-a` 列出全部文件,包括隐藏文件
- `-l` 列出所有的文件,包含文件的属性和权限,没有隐藏文件
- `-R` 列出所有的子目录和其中的文件

> `cd` 改变当前的工作目录

如果与遇到文件夹的名字中带有空格的需要用单引号包裹这个文件夹

```sh
cd desktop/'new folder'
# 或者使用 /转义
cd desktop/new\ folder
```

> `mkdir` 创建新文件夹

> `rmdir` 删除文件夹

- `-p` 递归的删除多个目录

`rmdir`仅能删除空目录,如果目录下存在文件,需要先删除文件,

> `cp` 复制文件

`cp` `oldPath ` `newPath`

> `rm` 移除文件或目录

- `-f` 忽略不存在的文件,不会出现警告,强制删除
- `-r` 递归性删除目录
- `-i` 互动,询问是否删除

> `mv` 移动文件或者目录 ,重命名文件

- `-f` 强制移动
- `-u` 只替换文件

```bash
root@Mr-j:~# dir
es  old.js
root@Mr-j:~# mv old.js new.js
root@Mr-j:~# dir
es  new.js
# 重命名文件

root@Mr-j:~# dir
es  jack  new.js
root@Mr-j:~# mv jack mike
root@Mr-j:~# dir
es  mike  new.js
# 重命名文件夹
```

> `touch` 新建文件

### 文件管理


### 文件资源路径

```sh
'./': 当前的路径
'../': 当前路径的上一级路径
'/' : 表示文件系统根路径
```

### 列出当前文件夹下所有的文件

`tree` 命令可以显示当前文件夹的目录结构，可以通过指定参数来排除不想要的文件夹

```sh
tree
tree -I 'node_modules'	# 忽略node_modules文件夹
tree -I 'node_modules|cache|test'	# 忽略多个文件夹
tree -L 2 	# 有时候文件嵌套层级很深，可以用-L参数只展示前两级的文件
```

## 系统和定制命令

### sudo

> sudo 是使用 root 用户权限执行命令 (super user do ),如果想以管理员的身份运行命令，就需要使用到 `sudo` 命令了，比如想要编辑一个文件像： `viz.alsa-base.conf` 这就需要 root 权限了，你可以使用命令： `sudo nano alsa-base.conf` 

### help

* help 从命令中获取更多的信息

例：`ls --help` 查看 ls 命令的所有参数和教程

* `man` 打开命令的用户使用手册

例：`man ls` （打开手册页面）

* `q` 退出手册页面

### 打印文件内容

* `cat` 输出文件中的内容信息

连接文件并打印到标准输出设备上

```bash
cat index.html
```

将文件 1 和 文件 2 里面的内容合并存储到文件 3 中

```sh
cat 1.txt 2.txt >> 3.txt
```

* `echo`  直接输入就是输出命令

  将内容写入到文件中

```sh
echo hello Wolrd > README.md
```

在 `power Shell` 中创建文件

```sh
new-item hello.js
```

运行 `.sh` 文件

```sh
# 切换到sh文件目录
sh
```

* `more`  后面接文档名

> 用来阅读大文件内容的命令

```sh
回车键: 用来一行一行的向下滚动内容
空格键: 移动到下一页
b键: 移动到上一页
/ 键: 搜索字符串
```

* `less`  后面接文档名

> 非常简单的命令，只需要在终端中使用上下键就可以全屏查看文档内容了，按 q 键退出

* `head` 后面接文件名

>显示文件的前十行

* `tail` 后面接文件名

> 显示文件的最后十行，这个命令很有用，一般都是用来查看日志文件的错误信息

```sh
# head 和 tail命令都可以自定义指定的行数作为参数
head -5 hello.txt
```

### 文件拷贝，移动，重命名

* `cp` 

> 赋值文件或者目录，第一个 参数是当前路径，第二个参数是目标路径

```sh
# 复制demo.js 到demo_copy.js
cp demo.js demo_copy.js

# 拷贝目录
cp testDir copyDir
```

将 `/root/docker/npm/data/clock` 目录夹递归的拷贝到当前文件夹

``` sh
cp -r /root/docker/npm/data/clock ./
```

* `mv` 

> 可以用来移动文件或者重命名文件

```sh
# 重命名文件
mv oldname.txt newname.txt
```

### 文件编辑器

#### nano

> 非常受欢迎的编辑器工具，界面比较优美图形界面丰富多彩，和其他编辑器相比相对来说很现代好用，没啥好写的所有的操作编辑器界面都有提示

#### vi

> 很老式的高级文本编辑器，有两种模式分别是：命令模式，编辑模式

* 按下 `i` 键进入输入模式，开始编辑文字
* 按下 `esc` 键回到一般模式
* 在一般模式下按 `:wq` 保存并退出 `vi` 编辑器
* 在一般模式下，用鼠标点击到指定的行数，双击 `d` 键删除一行，如果想要一次删除多行，输入 “行数并双击d键” 例： `3dd`
* 撤销刚才的操作，在一般模式下按下 `u`  按键（undo）

## Networking

## Process and Memory

## Advanced Features















































### 基础命令


### 查看端口占用情况

使用 `lsof` （list open file） 列出当前系统打开文件的工具

```sh
root@mr-j:~# lsof -i:9000
COMMAND      PID USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
node\x20/ 312995 root   20u  IPv6 4577638      0t0  TCP *:9000 (LISTEN)
```

杀掉端口占用的进程使用 `kill` 命令来结束进程的 `PID` (process Id)

```sh
kill -9 PID
```

## 安装软件

``` sh
apt install aria2 -y
```

下载好的软件一般在 `/usr/share`

可执行文件在 `/usr/bin`

配置文件在 `/etc` 下



## 卸载软件

以`debian` 系软件为例，要求软件安装时，是使用 `apt` 工具安装的

1. 列出所有已经安装的应用

```sh
dpkg --list
```

可以通过 `page` 上下键来找到需要卸载的软件

![image-20220425153642356](http://i0.hdslb.com/bfs/album/c7da49af48ead6470aa81d581193abf02caae2d8.png)

2. 新开一个终端，输入命令并加上软件包名。

```sh
apt remove node --purge
# 卸载软件(纯净模式)
```

## 基本属性

```bash
[root@mr-j usr]# ls -l
total 128
dr-xr-xr-x.  2 root root 36864 Aug  6 18:28 bin
drwxr-xr-x.  2 root root  4096 Apr 11  2018 etc
drwxr-xr-x.  2 root root  4096 Apr 11  2018 games
drwxr-xr-x. 13 root root  4096 Aug  1 03:21 local
dr-xr-xr-x.  2 root root 20480 Aug  1 03:17 sbin
drwxr-xr-x. 98 root root  4096 Aug  6 18:28 share
drwxr-xr-x.  7 root root  4096 Sep  2  2020 src
lrwxrwxrwx.  1 root root    10 Mar  7  2019 tmp -> ../var/tmp
-rwxr-xr-x  1 root root        7184 Aug  9  2019 ipset
lrwxrwxrwx  1 root root          13 Aug  5  2020 iptables -> xtables-multi
lrwxrwxrwx  1 root root          13 Aug  5  2020 iptables-restore -> xtables-multi
lrwxrwxrwx  1 root root          13 Aug  5  2020 iptables-save -> xtables-multi
-rwxr-xr-x  1 root root       23888 Aug  9  2019 iptunnel
-rwxr-xr-x  1 root root      817672 Apr  1  2020 iscsiadm
-rwxr-xr-x  1 root root      843616 Apr  1  2020 iscsid
-rwxr-xr-x  1 root root       11272 Apr  1  2020 iscsi-iname
```

最左边的第一个字母的意义:

- `d` ---> 目录
- `l` ---> 链接文件
- `-` ---> 文件
- `b` ---> 装置文件里面的可供存储的接口设备(可随机存取设备)
- `c` ---> 装置文件里面的串行端口设备,列如鼠标,键盘

![](http://i0.hdslb.com/bfs/album/18dc3eee32bc141c7c5577d949dd67d60b7ef6c1.png)

![](http://i0.hdslb.com/bfs/album/8a2b31fb945069aedccd6a47e20ecda692a15ba8.png)

## 查看 linux 系统版本号

1. 查看`/etc/issue` 文件

```sh
# cat /etc/issue
Debian GNU/Linux 9 \n \l
```

2. 查看 `/etc/os-release` 文件

```sh
[root@mr-j ~]# cat /etc/os-release
NAME="CentOS Linux"
VERSION="7 (Core)"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="7"
PRETTY_NAME="CentOS Linux 7 (Core)"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:centos:centos:7"
HOME_URL="https://www.centos.org/"
BUG_REPORT_URL="https://bugs.centos.org/"

CENTOS_MANTISBT_PROJECT="CentOS-7"
CENTOS_MANTISBT_PROJECT_VERSION="7"
REDHAT_SUPPORT_PRODUCT="centos"
REDHAT_SUPPORT_PRODUCT_VERSION="7"
```

![image-20220311202304174](http://i0.hdslb.com/bfs/album/511081ff75aaf20efe34278f6ebd1924b445eeae.png)

3. 使用 `hostnamectl `命令

`hostnamectl` 命令用于配置或修改系统的主机名，不过也使用此命令来获取`linux` 系统的版本，只需要直接输入 `hostnamectl` 即可：

```sh
[root@mr-j ~]# hostnamectl
   Static hostname: mr-j
   Pretty hostname: Mr-j
         Icon name: computer-vm
           Chassis: vm
        Machine ID: 123311d21a084588b34fd192e65b7b7e
           Boot ID: 6680d9e862d84c6882cc04aaf64f80ba
    Virtualization: kvm
  Operating System: CentOS Linux 7 (Core)
       CPE OS Name: cpe:/o:centos:centos:7
            Kernel: Linux 3.10.0-1127.19.1.el7.x86_64
      Architecture: x86-64
```

4. 使用 `uname` 命令

`uname` 命令可以显示电脑以及操作系统的相关信息，输入下面的命令：

```sh
[root@mr-j ~]# uname -a
Linux mr-j 3.10.0-1127.19.1.el7.x86_64 #1 SMP Tue Aug 25 17:23:54 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

## Centos 开放端口

由于服务器防火墙的存在,很多服务如果不开放相应端口,默认是屏蔽的,不然端口暴露出去是非常危险的.

```bash
查询当前主机打开的所有端口
netstat -tlunp
```

![image-20210802134138340](http://i0.hdslb.com/bfs/album/651e37dc59d89f014be9270d04700c3787d29d4c.png)

红框标注的都是开放的端口

```shell
查询指定端口是否放开,yes表示开启,no表示未开启
firewall-cmd --query-port=8080/tcp
```

![image-20210802134504454](http://i0.hdslb.com/bfs/album/1f26ed57d3ed585ad2a26f695732be7bb8d4f42a.png)

```shell
查看防火墙状态
systemctl status firewalld
开启防火墙
systemctl start firewalld
关闭防火墙
systemctl stop firewalld
开启防火墙
service firewalld start
若遇到无法开启
先用：systemctl unmask firewalld.service
然后：systemctl start firewalld.service
```

```shell
添加指定需要开放的端口：
firewall-cmd --add-port=123/tcp --permanent
重启下防火墙的服务：
firewall-cmd --reload
查询指定端口是否开启成功：
firewall-cmd --query-port=123/tcp
移除指定端口：
firewall-cmd --permanent --remove-port=123/tcp
```

## 常用解压缩操作

```bash
`*.tar` 用 tar –xvf 解压
`*.gz` 用 gzip -d或者gunzip 解压
`*.tar.gz`和*.tgz 用 tar –xzf 解压
`*.bz2` 用 bzip2 -d或者用bunzip2 解压
`*.tar.bz2`用tar –xjf 解压
`*.Z` 用 uncompress 解压
`*.tar.Z` 用tar –xZf 解压
`*.rar` 用 unrar e解压
`*.zip` 用 unzip 解压
```

```sh
node-v18.0.0-linux-x64.tar.xz  // 这种tar.xz文件是经过两次压缩，先tar压缩，然后xz压缩
// 安装xz命令
apt install -y xz-utils
// 可以分两步解压
xz -d node-v18.0.0-linux-x64.tar.xz
tar -xvf node-v18.0.0-linux-x64.tar.xz
```

**最常用的压缩与解压缩命令**

在当前文件夹下直接压缩所有文件

```sh
zip test.zip *
```

如果有子文件夹需要加上 `-r` 参数来递归

``` sh
zip test.zip -r ./*
```

## 重命名主机名

阿里云的主机名太长太丑了,想要修改主机名,发现阿里云居然不提供修改的地方,百度了下找到了简单的方法

```bash
# 使用命令查看当前主机名
hostname

# 修改主机名
hostnamectl set-hostname newHostName

# 重启主机
reboot
```

![image-20210807180604434](http://i0.hdslb.com/bfs/album/76f03a9835084b6fd5dfbece8af7af76bba35c87.png)

![image-20210807180627713](http://i0.hdslb.com/bfs/album/dfb933c9748bc51149efbf4238a6fa21010da026.png)

## 环境变量配置

linux系统上安装程序后为了方便在全局调用命令，需要设置环境变量来告诉操作系统去该路径找可执行命令。

* 查看环境变量

`export` 命令

``` sh
root@mr-j:~# export
declare -x HOME="/root"
declare -x LANG="en_US.UTF-8"
declare -x LOGNAME="root"
declare -x MOTD_SHOWN="pam"
declare -x OLDPWD
declare -x PATH="/usr/local/bin/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
declare -x PWD="/root"
declare -x SHELL="/bin/bash"
declare -x SHLVL="1"
declare -x SSH_CLIENT="115.200.217.227 50977 22"
declare -x SSH_CONNECTION="115.200.217.227 50977 198.23.254.177 22"
declare -x SSH_TTY="/dev/pts/2"
declare -x TERM="xterm-256color"
declare -x USER="root"
declare -x XDG_RUNTIME_DIR="/run/user/0"
declare -x XDG_SESSION_CLASS="user"
declare -x XDG_SESSION_ID="12"
declare -x XDG_SESSION_TYPE="tty"
```

* 配置环境变量（对所有用户有效，永久配置）

`nano ~/.bashrc` ,将命令所在的路径暴露出去

``` sh
# ~/.bashrc: executed by bash(1) for non-login shells.

# Note: PS1 and umask are already set in /etc/profile. You should not
# need this unless you want different defaults for root.
# PS1='${debian_chroot:+($debian_chroot)}\h:\w\$ '
# umask 022

# You may uncomment the following lines if you want `ls' to be colorized:
# export LS_OPTIONS='--color=auto'
# eval "$(dircolors)"
# alias ls='ls $LS_OPTIONS'
# alias ll='ls $LS_OPTIONS -l'
# alias l='ls $LS_OPTIONS -lA'
#
# Some more alias to avoid making mistakes:
# alias rm='rm -i'
# alias cp='cp -i'
# alias mv='mv -i'
export PATH="/usr/local/bin/node/bin:$PATH"
```

### Linux 中查找 nginx 配置所在目录

默认的腾讯云`node`镜像包中配置了`nginx` ,学习`express` 的时候,ip 地址总是默认转到 80 端口,很不方便,用`express` 来提供`http` 服务.

先找到 `nginx` 主程序目录

```bash
ps - ef | grep nginx
# 找到 master process后面的目录
```

![image-20211022172917322](http://i0.hdslb.com/bfs/album/d81382bc35d1c98de6ec9dfd0923a4d401ce874a.png)

```bash
# 停止nginx的http服务,此时就可以接触掉nginx占用的80端口了
cd /usr/local/lighthouse/softwares/nginx/sbin/nginx -s stop
```

## 服务器端和主机端`ssh` 配置

### 本地安装`ssh` 服务

本地如果已经安装好 `git` 工具,直接命令行 `cd` 到 `~` 目录下,运行命令生成 `ssh key`

```bash
cd ~
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"
```

邮箱只是为了找到联系方式可以不填,此时路径中就已经生成了以下文件

![image-20220227160001244](http://i0.hdslb.com/bfs/album/4323dd2ebb0b57c9dadc4da5b4290c59bd760d7f.png)

`id_rsa.pub` 中的内容,就是所需的公钥内容

### 服务器端

进入到购买的服务器端,同样进入本地的 `.ssh` 路径看看是不是也有这些公钥文件生成

如果没有的同样安装一遍 `git` 再重新配置一下公钥密钥

![image-20220227160237525](http://i0.hdslb.com/bfs/album/8c897ac605c6ad999829a36dd84384a5feb27326.png)

上图中的 `authorized_keys` 文件，就是设置本地免密登录的文件，只要把之前本地生成的 `id_rsa.pub` 内容放入 `authorized_keys` 中，在本地命令行工具执行 `ssh root@服务器IP`，便能直接免密登录。

![image-20220227160328206](http://i0.hdslb.com/bfs/album/8d38f66805cc31cfe740a3791f3e2337367fe0db.png)

### 报错解决

重置以后 ssh 连接远程服务器报错

```sh
❯ ssh root@121.4.185.31
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:kxq3yTNoiSygcU8hVFB+Pdmanx1HAn2p0QSyL1XfDQE.
Please contact your system administrator.
Add correct host key in C:\\Users\\30328/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in C:\\Users\\30328/.ssh/known_hosts:1
Host key verification failed.
```

原因： 服务器端的网络发生变化，远程主机发送的认证密钥产生了改变，在本地的 `known_hosts`文件中找不到这个服务器

**解决方法** : 清除旧的公钥信息

```sh
❯ ssh-keygen -R 121.4.185.31
# Host 121.4.185.31 found: line 1
C:\Users\30328/.ssh/known_hosts updated.
Original contents retained as C:\Users\30328/.ssh/known_hosts.old
```

## 使用ssh 传输文件

主要是用 `scp` 这个命令，`secure copy` 

**从服务器下载文件**

```sh
scp root@198.211.49.166:/path/filename ./ （本地目录）
```

**上传文件到服务器**

```sh
scp ./test.zip root@198.211.49.166:/root/download
```







[命令行常用工具替代品](https://www.ruanyifeng.com/blog/2022/01/cli-alternative-tools.html)

