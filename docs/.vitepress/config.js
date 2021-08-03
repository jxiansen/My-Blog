module.exports = {
  base: '/',//基础路径
  head: [
    ['meta', { name: 'keywords', content: '前端,学习,成长,Mr-j,资源' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }]//  使用B站图床防盗链
  ],
  title: 'VitePress',
  description: '这是我的网站',
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
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '配置定义',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: '我的github',
        link: 'https://www.baidu.com'
      }
    ],

    sidebarDepth: 1,
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  },

}

function getGuideSidebar() {
  return [
    {
      text: '初级',
      children: [
        { text: "30S-css", link: "/STUDY/30S-css" },
        { text: "30S-js", link: "/STUDY/30S-js" },
        { text: "vitepress", link: "/STUDY/vitepress-study" },
        { text: "JavaScript", link: "/STUDY/javaScript" },
        { text: "Javascript刷题", link: "/STUDY/js-practice" },
        { text: "Markdown语法", link: "/STUDY/markdown" },
        { text: "MySQL", link: "/STUDY/mysql" },
        { text: "Vue", link: "/STUDY/Vue" },
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
        { text: "SPA单页面应用", link: "/hub/spa"},
        { text: "网址导航", link: "/hub/collect-address"}
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: '应用配置',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: '主题配置',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' }
      ]
    }
  ]
}
