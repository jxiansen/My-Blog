## 开发环境搭建

### 前端开发

```sh
# install Volta
curl https://get.volta.sh | bash

# install Node
volta install node

# install bun
volta install bun

# install pnpm
volta install pnpm

# npm registray manager
pnpm i onrm -g

# start using Node
node
```

### 基础环境

```sh
# basic
apt install git curl wget zsh -y

# install on my zsh theme
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 服务器

```sh
# 安装caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy

# 安装 bottom 类似资源管理器
curl -LO https://github.com/ClementTsang/bottom/releases/download/0.9.6/bottom_0.9.6_amd64.deb
sudo dpkg -i bottom_0.9.6_amd64.deb

# fnm 管理nodejs版本
curl -fsSL https://fnm.vercel.app/install | bash

# fnm 配置环境变量
# 设定环境变量
export FNM_NODE_DIST_MIRROR=https://mirrors.aliyun.com/nodejs-release/

# 然后正常使用 fnm 即可
fnm install <version>
```

### wsl 代理

[为 WSL2 一键设置代理 - RioTian - 博客园 (cnblogs.com)](https://www.cnblogs.com/RioTian/p/17986762)
