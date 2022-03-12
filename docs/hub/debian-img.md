# debian 替换为国内镜像源

更换镜像前需要先查看当前系统的具体版本再去网上找到镜像源

``` sh
nano /etc/apt/sources.list
```

nano是和vim差不多的文本编辑器
退出命令: `Ctrl + X` 
保存: `Ctrl + O`


更新下源索引
``` sh
apt update
```

Debian和Ubuntu使用的都是 **apt** 包管理工具,debian的命令是简化过的apt命令后缀都可以去掉

Redhat,Centos,Suse使用的是 **yum** 包管理工具

### 各大国内镜像站点

163网易

``` sh
deb http://mirrors.163.com/debian/ stretch main non-free contrib
deb http://mirrors.163.com/debian/ stretch-updates main non-free contrib
deb http://mirrors.163.com/debian/ stretch-backports main non-free contrib
deb-src http://mirrors.163.com/debian/ stretch main non-free contrib
deb-src http://mirrors.163.com/debian/ stretch-updates main non-free contrib
deb-src http://mirrors.163.com/debian/ stretch-backports main non-free contrib
deb http://mirrors.163.com/debian-security/ stretch/updates main non-free contrib
deb-src http://mirrors.163.com/debian-security/ stretch/updates main non-free contrib
````

阿里云

``` sh
deb http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb http://mirrors.aliyun.com/debian-security stretch/updates main
deb-src http://mirrors.aliyun.com/debian-security stretch/updates main
deb http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
```

华为镜像站
``` sh
deb https://mirrors.huaweicloud.com/debian/ stretch main contrib non-free
deb-src https://mirrors.huaweicloud.com/debian/ stretch main contrib non-free
deb https://mirrors.huaweicloud.com/debian/ stretch-updates main contrib non-free
deb-src https://mirrors.huaweicloud.com/debian/ stretch-updates main contrib non-free
deb https://mirrors.huaweicloud.com/debian/ stretch-backports main contrib non-free
deb-src https://mirrors.huaweicloud.com/debian/ stretch-backports main contrib non-free 
```