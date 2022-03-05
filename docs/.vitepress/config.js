module.exports = {
  base: '/',//基础路径
  head: [
    ['meta', { name: 'keywords', content: '前端,学习,成长,Mr-j,资源' }],
    ['link', { rel: 'icon', href: 'http://i0.hdslb.com/bfs/album/ec78ee304b559735b0998fc680cfa3a2cfb8c53c.png', }],   // 网页tab栏的logo图
    ['meta', { name: 'referrer', content: 'no-referrer' }]//  使用B站图床防盗链
  ],
  title: '阿J的前端笔记',
  description: '总结自己的学习历程',
  dest: './dist',//打包输出目录
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: 'http://i0.hdslb.com/bfs/album/f6337abef81027541d5dfe953c210a573dfb1f8f.png',
    repo: 'https://gitee.com/hijingfeng/my-blog',
    docsDir: 'docs',
    docsBranch: 'main', //分支

    algolia: {
      appId: 'AEBD6KM6KA',
      apiKey: '53f1a9e7bcee7bf871a4602329fbf639',
      indexName: 'data'
    },

    editLinks: true,
    editLinkText: '在gitee上面修改',
    lastUpdated: '上次更新于',

    nav: [
      { text: '首页', link: '/', activeMatch: '^/$|^/guide/' },
      { text: 'Github', link: 'https://github.com/jxiansen' },
      { text: '友情链接', link: 'http://www.shyuu.cn' },
    ],

    sidebarDepth: 4,
    sidebar: {
      '/': getSidebar()
    }
  }
}

function getSidebar() {
  return [
    {
      text: '基础知识',
      children: [
        { text: "30S-css", link: "/STUDY/30S-css" },
        { text: "30S-js", link: "/STUDY/30S-js" },
        { text: "html-study", link: "/STUDY/html-study" },
        { text: "Javascript简写技巧", link: "/STUDY/js-shorthand" },
        { text: "Js数据结构", link: "/STUDY/JS-DataStructure" },
        { text: "前端面试题", link: "/STUDY/font-end interview" }
      ]
    },
    {
      text: '框架',
      children: [
        { text: "Vue", link: "/STUDY/Vue" },
        { text: "express入门", link: "/STUDY/express" },
        { text: "React初学者手册", link: "/STUDY/React-handbook" }
      ]
    },
    {
      text: '前端拓展技能',
      children: [
        { text: "Markdown语法", link: "/STUDY/markdown" },
        { text: "git入门教程", link: "/STUDY/git" },
        { text: "sass入门", link: "/STUDY/sass" },
        { text: "正则表达式入门", link: "/STUDY/regex" },
        { text: "Linux学习", link: "/STUDY/linux" },
        { text: "vitepress", link: "/STUDY/vitepress-study" },
        { text: "docker入门", link: "/STUDY/docker" },
        { text: "MySQL", link: "/STUDY/mysql" }
      ]
    },
    {
      text: '算法刷题',
      children: [
        { text: "NowCode", link: "/STUDY/nowcoder" },
        { text: "FreeCodeCamp", link: "/STUDY/js-practice" },
        { text: "LeetCode", link: "/STUDY/LeetCode" }
      ]
    },
    {
      text: '杂七杂八',
      children: [
        { text: "在wsl中开启使用ssh连接", link: "/hub/wsl-ssh" },
        { text: "node安装与配置", link: "/hub/node-install" },
        { text: "效率", link: "/hub/efficiency" },
        { text: "中国程序员容易发音错误的单词", link: "/hub/wordvoice" },
        { text: "虚拟机Centos安装nodejs", link: "/hub/Centos-install-nodejs" },
        { text: "2021前端开发路线图", link: "/hub/fontend" },
        { text: "debian替换国内镜像源", link: "/hub/debian-img" },
        { text: "Centos开放防火墙端口", link: "/hub/Centos-open" },
        { text: "window解除端口占用", link: "/hub/windows-kill-process" },
        { text: "SPA单页面应用", link: "/hub/spa" },
        { text: "网址导航", link: "/hub/collect-address" }
      ]
    }
  ]
}