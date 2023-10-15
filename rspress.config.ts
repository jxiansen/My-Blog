import { defineConfig } from "rspress/config";
import path from "path";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  outDir: "dist",

  themeConfig: {
    nav: getNavbarConf(),
    sidebar: {
      "/": getSidebarConf(),
    },
    // enableContentAnimation: true,
  },
  markdown: { experimentalMdxRs: false },

  builderConfig: {
    html: {
      tags: [
        { tag: "meta", attrs: { name: "referrer", content: "no-referrer" } },
      ],
    },
  },
});

function getSidebarConf() {
  return [
    {
      text: "基础知识",
      collapsible: true,
      items: [
        { text: "30S-css", link: "/study/30S-css" },
        { text: "30S-js", link: "/study/30S-js" },
        { text: "html-study", link: "/study/html-study" },
        { text: "Javascript简写技巧", link: "/study/js-shorthand" },
        { text: "Js数据结构", link: "/study/JS-DataStructure" },
        { text: "前端面试题", link: "/study/font-end interview" },
      ],
    },
    {
      text: "框架",
      collapsible: true,
      items: [
        { text: "Vue", link: "/study/Vue" },
        { text: "React", link: "/study/React" },
        { text: "Redux", link: "/study/Redux" },
        { text: "React-router", link: "/study/React-router" },
        { text: "express入门", link: "/study/express" },
        { text: "React初学者手册", link: "/study/React-handbook" },
      ],
    },
    {
      text: "前端拓展技能",
      collapsible: true,
      items: [
        { text: "手写JS源码", link: "/study/JS-Manual" },
        { text: "Markdown语法", link: "/study/markdown" },
        { text: "git入门教程", link: "/study/git" },
        { text: "sass入门", link: "/study/sass" },
        { text: "正则表达式入门", link: "/study/regex" },
        { text: "Linux学习", link: "/study/linux" },
        { text: "vitepress", link: "/study/vitepress-study" },
        { text: "vite", link: "/study/vite" },
        { text: "docker入门", link: "/study/docker" },
        { text: "MySQL", link: "/study/mysql" },
        { text: "Caddy", link: "/study/caddy" },
        { text: "MongoDB入门", link: "/study/Mongo" },
      ],
    },
    {
      text: "算法刷题",
      collapsible: true,
      items: [
        { text: "NowCode", link: "/study/nowcoder" },
        { text: "FreeCodeCamp", link: "/study/js-practice" },
        { text: "LeetCode", link: "/study/LeetCode" },
      ],
    },
    {
      text: "杂七杂八",
      collapsible: true,
      items: [
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
        { text: "Javascript中的this问题", link: "/study/this" },
        { text: "在wsl中开启使用ssh连接", link: "/hub/wsl-ssh" },
        { text: "node安装与配置", link: "/hub/node-install" },
        { text: "效率", link: "/hub/efficiency" },
      ],
    },
  ];
}

function getNavbarConf() {
  return [
    {
      text: "vercel",
      link: "https://vercel.com/jxiansen/my-blog",
    },
  ];
}
