import { defineConfig } from "rspress/config";
import * as path from "path";

export default defineConfig({
  root: path.join(__dirname, "src/docs"),
  icon: "/favicon.ico",
  outDir: "dist",

  // route: {
  //   exclude: ["components/"],
  // },

  themeConfig: {
    nav: [
      {
        text: "vercel",
        link: "https://vercel.com/jxiansen/my-blog",
      },
    ],
    sidebar: {
      "/": getSidebarConf(),
    },
    outlineTitle: "目录",
    enableContentAnimation: true,
    enableScrollToTop: true,
  },

  markdown: {
    globalComponents: [path.join(__dirname, "src/components/JnButton.tsx")],
    mdxRs: false,
  },

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
        {
          text: "test",
          link: "/hub/test",
        },
        { text: "中国程序员容易发音错误的单词", link: "/hub/wordvoice" },
        { text: "Linux安装nodejs", link: "/hub/Linux-install-nodejs" },
        { text: "2021前端开发路线图", link: "/hub/fontend" },
        { text: "debian替换国内镜像源", link: "/hub/debian-img" },
        { text: "Centos开放防火墙端口", link: "/hub/Centos-open" },
        { text: "window解除端口占用", link: "/hub/windows-kill-process" },
        { text: "SPA单页面应用", link: "/hub/spa" },
        { text: "网址导航", link: "/hub/collect-address" },
        {
          text: "工作代码片段",
          link: "/hub/code-snippet",
        },
      ],
    },
    {
      text: "设计模式",
      collapsible: true,
      items: [
        { text: "开篇：前端工程师的成长论", link: "/designPattern/1" },
        { text: "设计模式的“道”与“术”", link: "/designPattern/2" },
        {
          text: "创建型：工厂模式·简单工厂——区分“变与不变”",
          link: "/designPattern/3",
        },
        {
          text: "创建型：工厂模式·抽象工厂——理解“开放封闭”",
          link: "/designPattern/4",
        },
        {
          text: "创建型：单例模式——Vuex的数据管理哲学",
          link: "/designPattern/5",
        },
        {
          text: "创建型：单例模式——面试真题手把手教学",
          link: "/designPattern/6",
        },
        {
          text: "创建型：原型模式——谈Prototype无小事",
          link: "/designPattern/7",
        },
        {
          text: "结构型：装饰器模式——对象装上它，就像开了挂",
          link: "/designPattern/8",
        },
        {
          text: "结构型：装饰器模式——深入装饰器原理与优秀案例",
          link: "/designPattern/9",
        },
        {
          text: "结构型：适配器模式——兼容代码就是一把梭",
          link: "/designPattern/10",
        },
        {
          text: "结构型：代理模式——一家小型婚介所的发家致富之路",
          link: "/designPattern/11",
        },
        {
          text: "结构型：代理模式——应用实践范例解析",
          link: "/designPattern/12",
        },
        {
          text: "行为型：策略模式——重构小能手，拆分“胖逻辑”",
          link: "/designPattern/13",
        },
        {
          text: "行为型：状态模式——自助咖啡机背后的力量",
          link: "/designPattern/14",
        },
        {
          text: "行为型：观察者模式——鬼故事：产品经理拉了一个钉钉群",
          link: "/designPattern/15",
        },
        {
          text: "行为型：观察者模式——面试真题手把手教学",
          link: "/designPattern/16",
        },
        { text: "行为型：迭代器模式——真·遍历专家", link: "/designPattern/17" },
        { text: "前方的路", link: "/designPattern/18" },
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
