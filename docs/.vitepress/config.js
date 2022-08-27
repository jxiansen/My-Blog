module.exports = {
  lang: "en-US",
  title: "阿J的前端笔记",
  description: "总结自己的学习历程",
  head: [
    ["meta", { name: "keywords", content: "前端,学习,成长,Mr-j,资源" }],
    [
      "link",
      {
        rel: "icon",
        href: "http://i0.hdslb.com/bfs/album/ec78ee304b559735b0998fc680cfa3a2cfb8c53c.png",
      },
    ], // 网页tab栏的logo图
    ["meta", { name: "referrer", content: "no-referrer" }], //  使用B站图床防盗链
  ],
  lastUpdated: true,

  themeConfig: {
    nav: nav(),
    logo: "http://i0.hdslb.com/bfs/album/f6337abef81027541d5dfe953c210a573dfb1f8f.png",

    sidebar: {
      "/STUDY/": sidebarGuide(),
      // "/hub/": sidebarConfig2(),
    },

    markdown: {
      lineNumbers: true,
      theme: "poimandres",
    },

    editLink: {
      pattern: "https://vercel.com/jxiansen/my-blog/:path",
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      { icon: "github", link: "https://vercel.com/jxiansen/my-blog" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-present Mr-j",
    },

    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
  },
};

function nav() {
  return [
    { text: "Guide", link: "/STUDY/nowcoder", activeMatch: "/STUDY/" },
    { text: "Configs", link: "/hub/fontend", activeMatch: "/hub/" },
    {
      text: "vercel",
      link: "https://vercel.com/jxiansen/my-blog",
    },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "基础知识",
      collapsible: true,
      items: [
        { text: "30S-css", link: "/STUDY/30S-css" },
        { text: "30S-js", link: "/STUDY/30S-js" },
        { text: "html-study", link: "/STUDY/html-study" },
        { text: "Javascript简写技巧", link: "/STUDY/js-shorthand" },
        { text: "Js数据结构", link: "/STUDY/JS-DataStructure" },
        { text: "前端面试题", link: "/STUDY/font-end interview" },
      ],
    },
    {
      text: "框架",
      collapsible: true,
      items: [
        { text: "Vue", link: "/STUDY/Vue" },
        { text: "React", link: "/STUDY/React" },
        { text: "Redux", link: "/STUDY/Redux" },
        { text: "React-router", link: "/STUDY/React-router" },
        { text: "express入门", link: "/STUDY/express" },
        { text: "React初学者手册", link: "/STUDY/React-handbook" },
      ],
    },
    {
      text: "前端拓展技能",
      collapsible: true,
      items: [
        { text: "手写JS源码", link: "/STUDY/JS-Manual" },
        { text: "Markdown语法", link: "/STUDY/markdown" },
        { text: "git入门教程", link: "/STUDY/git" },
        { text: "sass入门", link: "/STUDY/sass" },
        { text: "正则表达式入门", link: "/STUDY/regex" },
        { text: "Linux学习", link: "/STUDY/linux" },
        { text: "vitepress", link: "/STUDY/vitepress-study" },
        { text: "docker入门", link: "/STUDY/docker" },
        { text: "MySQL", link: "/STUDY/mysql" },
        { text: "Caddy", link: "/STUDY/caddy" },
        { text: "MongoDB入门", link: "/STUDY/Mongo" },
      ],
    },
    {
      text: "算法刷题",
      collapsible: true,
      items: [
        { text: "NowCode", link: "/STUDY/nowcoder" },
        { text: "FreeCodeCamp", link: "/STUDY/js-practice" },
        { text: "LeetCode", link: "/STUDY/LeetCode" },
      ],
    },
    {
      text: "杂七杂八",
      collapsible: true,
      items: [
        { text: "Javascript中的this问题", link: "/STUDY/this" },
        { text: "在wsl中开启使用ssh连接", link: "/hub/wsl-ssh" },
        { text: "node安装与配置", link: "/hub/node-install" },
        { text: "效率", link: "/hub/efficiency" },
        { text: "中国程序员容易发音错误的单词", link: "/hub/wordvoice" },
        { text: "Linux安装nodejs", link: "/hub/Linux-install-nodejs" },
        { text: "2021前端开发路线图", link: "/hub/fontend" },
        { text: "debian替换国内镜像源", link: "/hub/debian-img" },
        { text: "Centos开放防火墙端口", link: "/hub/Centos-open" },
        { text: "window解除端口占用", link: "/hub/windows-kill-process" },
        { text: "SPA单页面应用", link: "/hub/spa" },
        { text: "网址导航", link: "/hub/collect-address" },
      ],
    },
    {
      text: "其他",
      collapsible: true,
      items: [
        { text: "Javascript中的this问题", link: "/STUDY/this" },
        { text: "在wsl中开启使用ssh连接", link: "/hub/wsl-ssh" },
        { text: "node安装与配置", link: "/hub/node-install" },
        { text: "效率", link: "/hub/efficiency" },
      ],
    },
  ];
}
