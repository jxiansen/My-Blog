## 基础命令

### 目录管理

> `ls` 列出目录

* `-a` 列出全部文件,包括隐藏文件
* `-l` 列出所有的文件,包含文件的属性和权限,没有隐藏文件

> `rmdir` 删除空目录

* `-p` 递归的删除多个目录

`rmdir`仅能删除空目录,如果目录下存在文件,需要先删除文件,

> `cp` 复制文件

`cp`   `oldPath  ` `newPath`

> `rm` 移除文件或目录

* `-f` 忽略不存在的文件,不会出现警告,强制删除
* `-r` 递归性删除目录
* `-i` 互动,询问是否删除

> `mv` 移动文件或者目录 ,重命名文件

* `-f` 强制移动
* `-u` 只替换文件

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

* `d` ---> 目录
* `l` ---> 链接文件
* `-`  ---> 文件
* `b` ---> 装置文件里面的可供存储的接口设备(可随机存取设备)
* `c` ---> 装置文件里面的串行端口设备,列如鼠标,键盘

![](http://i0.hdslb.com/bfs/album/18dc3eee32bc141c7c5577d949dd67d60b7ef6c1.png)

![](http://i0.hdslb.com/bfs/album/8a2b31fb945069aedccd6a47e20ecda692a15ba8.png)





















































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

#### 重命名主机名

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

