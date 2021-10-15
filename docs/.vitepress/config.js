module.exports = {
  base: '/',//基础路径
  head: [
    ['meta', { name: 'keywords', content: '前端,学习,成长,Mr-j,资源' }],
    ['link', { rel: 'icon', href: 'http://i0.hdslb.com/bfs/album/ec78ee304b559735b0998fc680cfa3a2cfb8c53c.png', }],   // 网页tab栏的logo图
    ['meta', { name: 'referrer', content: 'no-referrer' }]//  使用B站图床防盗链
  ],
  title: 'VitePress',
  description: '总结自己的学习历程',
  dest: './dist',//打包输出目录
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    logo: 'http://i0.hdslb.com/bfs/album/ec78ee304b559735b0998fc680cfa3a2cfb8c53c.png',
    repo: 'vuejs/vitepress',
    docsDir: 'docs',
    docsBranch: 'master', //分支

    editLinks: true,
    editLinkText: '在gitee上面修改',
    lastUpdated: '上次更新于',

    nav: [
      { text: '首页', link: '/', activeMatch: '^/$|^/guide/' },
      { text: '我的gitee', link: 'https://gitee.com/hijingfeng/my-blog' }
    ],

    sidebarDepth: 3,
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '初级',
      children: [
        { text: "30S-css", link: "/STUDY/30S-css" },
        { text: "30S-js", link: "/STUDY/30S-js" },
        { text: "Linux学习", link: "/STUDY/linux" },
        { text: "React初学者手册", link: "/STUDY/React-handbook" },
        { text: "docker入门", link: "/STUDY/docker" },
        { text: "vitepress", link: "/STUDY/vitepress-study" },
        { text: "JavaScript", link: "/STUDY/javaScript" },
        { text: "Javascript刷题", link: "/STUDY/js-practice" },
        { text: "Javascript数据结构", link: "/STUDY/JS-DataStructure" },
        { text: "LeetCode刷题", link: "/STUDY/LeetCode" },
        { text: "正则表达式入门", link: "/STUDY/regex" },
        { text: "Markdown语法", link: "/STUDY/markdown" },
        { text: "MySQL", link: "/STUDY/mysql" },
        { text: "Vue", link: "/STUDY/Vue" },
        { text: "前端面试题", link: "/STUDY/font-end interview" },
        { text: "git入门教程", link: "/STUDY/git" }
      ]
    },
    {
      text: '高级',
      children: [
        { text: "在wsl中开启使用ssh连接", link: "/hub/wsl-ssh" },
        { text: "node安装与配置", link: "/hub/node-install" },
        { text: "中国程序员容易发音错误的单词", link: "/hub/wordvoice" },
        { text: "虚拟机Centos安装nodejs", link: "/hub/Centos-install-nodejs" },
        { text: "2021前端开发路线图", link: "/hub/fontend" },
        { text: "debian替换国内镜像源", link: "/hub/debian-img" },
        { text: "Centos开放防火墙端口", link: "/hub/Centos-open" },
        { text: "SPA单页面应用", link: "/hub/spa" },
        { text: "网址导航", link: "/hub/collect-address" }
      ]
    }
  ]
}