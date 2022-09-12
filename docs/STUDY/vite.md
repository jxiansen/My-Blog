# vite学习

配置路径别名，通过自定义路径别名，在引入文件的时候就无需使用相对路径，vite 在背后替我们做了替换

```js
// vite.config.js/ts
import { join } from "path";
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})
```

如果项目是 `TypeScript` 编写，还需要修改一下 `TS.config.js` 的配置

``` js
{
   // ...
  "compilerOptions": {
    // ...其他配置
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  // ...
}
```

如果你是刚创建的TypeScript项目，有可能会遇到`找不到模块“path”或其相应的类型声明`的错误提示，安装`@types/node`即可。

``` js
npm install @types/node --save-dev
```

## 模板

``` js
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import WindiCSS from 'vite-plugin-windicss';
import checker from 'vite-plugin-checker';
import DefineOptions from 'unplugin-vue-define-options/vite';

const CWD = process.cwd();

const prefix = `monaco-editor/esm/vs`;

// https://cn.vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL, // 设置打包路径
    css: {
      modules: {
        localsConvention: 'camelCase', // 默认只支持驼峰，修改为同时支持横线和驼峰
      },
      preprocessorOptions: {
        scss: {
          charset: false,
        },
        less: {
          charset: false,
        },
      },
      // TODO 构建包含@charset问题 https://github.com/vitejs/vite/issues/5833
      // charset: false,
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      WindiCSS(),
      // https://github.com/sxzz/unplugin-vue-define-options
      DefineOptions(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      // https://github.com/antfu/unplugin-auto-import#readme
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dts: true,
        imports: ['vue', 'vue-router'],
      }),
      Components({
        dts: true,
        resolvers: [ElementPlusResolver(), VantResolver()],
      }),
      // https://github.com/fi3ework/vite-plugin-checker
      checker({
        typescript: true,
        // vueTsc: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{.vue,ts,tsx}"', // for example, lint .ts & .tsx
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
    },
    build: {
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
      target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
      chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
      assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
      terserOptions: {
        compress: {
          drop_console: true, // 生产环境去除console
          drop_debugger: true, // 生产环境去除debugger
        },
      },
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          preview: resolve(__dirname, 'preview/index.html'),
        },
        output: {
          manualChunks: {
            jsonWorker: [`${prefix}/language/json/json.worker`],
            cssWorker: [`${prefix}/language/css/css.worker`],
            htmlWorker: [`${prefix}/language/html/html.worker`],
            tsWorker: [`${prefix}/language/typescript/ts.worker`],
            editorWorker: [`${prefix}/editor/editor.worker`],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['@vueuse/core', 'element-plus', 'vant', 'lodash-es', 'vuedraggable'],
    },
    server: {
      host: '0.0.0.0',
      port: 10086, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域

      // 设置代理，根据项目实际情况配置
      proxy: {
        '/api': {
          target: 'https://nest-api.buqiyuan.site/api/admin/',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api/', '/'),
        },
      },
    },
  };
};
```

## Vite 是什么？

vite 使用 `Vue` 的作者 尤玉溪在开发 `Vue3` 的时候开发的一个基于原生 `ES-module` 的前端构建工具。

官网的描述是： **下一代前端开发和构建工具**

## 为什么要选择 Vite ?

### **遇到的问题**： 

构建大型应用的时候，随着 `javaScript` 代码量的指数级增长，开发过程开始遇到性能瓶颈，需要很长时间才能（甚至几分钟）启动开发服务器。每次代码修改后的热更新，也需要几秒钟后才能在浏览器中反映过来。

1. **缓慢的服务器启动问题**

`Webpack` 这种工具在启动开发服务器的时候，会选择对应用整体的依赖进行预构建，然后才能提供服务

2. **更新速度慢**

由于每次的更新代码都需要分析模块依赖和进行编译，所以热更新速度也很慢。

vite 的策略：

vite 在启动开发服务器的时候，不需要打包这也就意味着不用对应用的各个依赖模块进行分析，也不用编译。因此刚开始的启动速度非常快，当浏览器请求莫格模块 的时候，再根据需要对模块的内容进行编译。这种按需动态编译的方法，极大的缩减了编译的时间，项目越复杂，代码量越多，模块越多，vite 的优势越明显。vite 同时利用了 http头来加速整个页面的重新加载。

vite 直接用 ESM 的方式提供源码，其实就是让浏览器来接管打包程序的部分工作，vite 中的热更新是在原生 ESM 上执行的。

* 使用 **esbuild预构建** 依赖， 由于 esbuild 使用 GO 编写，相比于用 JavaScript 编写的打包预构建依赖快 10 -100倍。
* 使用 `http` 头来加速整个页面的重新加载，源码模块的请求会更新 `304 Not Modified` 进行协商缓存，而依赖模块请求则会通过 `Cache-Control: max-age=31536000,immutable` 进行强缓存，因此一旦被缓存就不需要再次进行请求了。

### 和 webpack 的区分

`vite` 解决的最大问题还是开发体验的问题，就是速度快， 而 `webpack` 主要的工作还是打包，而且是各种类型文件的打包。

为什么说 vite 是一种新型的前端构建工具，而不称为打包工具呢？

构建工具： 预编译，语法检查，词法检查，依赖处理，文件合并，文件压缩，单元测试，版本管理。

打包工具更注重打包这一过程，主要包括依赖管理和版本管理。

## 构建工具

前端构建工具，就是用来让我们不在机械的重复的做同样的时间，解放双手。

* `webpack` 一个打包模块化 `js` 的工具，在 `webpack` 中一切文件都是模块，通过 `loader` 转换文件，再通过 `plugin `注入钩子，最后通过由多个模块组合成的文件，`webpack` 专注于构建模块化的项目。
* `babel` 是一个工具链， 主要是讲 ES6+ 的版本语法转化为向后兼容的 `javaScript` 语法，以便能够运行再当前和旧版本的浏览器或其他环境中
* `Rollup` 是一个和 webpack 很类似但专注于 ES6 的模块打包工具，它的特性是能针对 ES6 源码进行 `TRee shaking` ,打包的时候静态分析 ES6 模块代码中的 `import` 语句，排除未实际使用的代码，来减少构建包的体积。
* `parcel` 极速零配置的 `web` 应用打包工具，使用了 `Worker` 进程去启用多核编译，同时有文件系统缓存，即使再重启构建后也能快速再编译。 

## ESM

一个模块（module) 就是一个文件，一个脚本就是一个模块。ESM 是ES6 后出现的模块系统

**特点**

* 使用使用 `use strict` 
* 模块级作用域
* 模块代码仅在第一次导入的时候被解析

ESM 执行的步骤

1. 构建： 确定从哪里下载该模块文件，下载并将所有的文件解析为模块记录
2. 实例化： 将模块记录转换为一个模块实例，为所有的模块分配内存空间，依照导出，导入语句把模块指向对应的内存地址。
3. 运行： 执行代码将内存空间填充

从上面的实例化过程可以考出， `ESM` 使用的是实时绑定的模式，导出和导入的模块都指向相同的内存地址，也就是值应用。而 `CJS` 采用的是值拷贝，即所有得导出值都是拷贝值。

## 依赖预构建

### 原因：

1. **兼容性** vite 的开发服务器，将所有的代码都视为原生的 ES 模块，因此必须将代码中所使用到的 `CommonJS`或 `UMD` 发布的依赖想转换为 `ESM` 
2. **性能** ，将内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面的加载性能。

### 依赖扫描

一个项目中存在非常多的模块，并不是所有的模块都会被构建，只有 `bare import` (裸依赖) 会执行依赖预购键。依赖扫描的目的就是找到所有这些第三方依赖。

``` js
import axios from 'axios' 	// 这种直接使用名称访问的模块就是裸模块
import sum from 'tools'		// 这种使用路径访问的模块就不是
```

`bare module` 通常是 npm 安装的模块，是第三方的模块，不是我们自己写的代码，对这部分模块提前执行构建，有利于提升性能。

### 流程

依赖预构建的大致流程
