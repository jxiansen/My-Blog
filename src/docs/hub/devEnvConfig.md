# 开发环境配置

这一部分主要是微软的 `wsl` 开发环境配置的教程 [安装 WSL | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install)

### wsl2 

默认以 root 用户启动

```sh
debian config --default-user root
```



### zsh

直接安装 `oh-my-zsh`,会自动安装 `zsh` 

```sh
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

### nvm

直接使用 `sh` 命令安装

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

配置Node.js 下载的镜像为淘宝镜像，加速下载

```sh
nano ~/.zshrc
```

打开的文件中进行环境变量的配置

```sh
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
source ~/.zshrc
```

退出后，重新执行命令重启配置

```sh
source ~/.bashrc
```

配置好后，直接使用,将会下载最新版的nodejs

```sh
nvm install node
```

### pnpm

