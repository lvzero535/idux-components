# 记录

1. npm create vite@latest
2. 修改 src 到 examples，相关依赖，index.html，tsconfig.json
3. npm install --save @idux/cdk @idux/components @idux/pro
4. 按需加载: npm install -D unplugin-vue-components
5. 使用 tsx 开发，直接使用@vitejs/plugin-vue-jsx 就可以了

## 问题

1. vite 的 alias 要使用 path

## Vue3 特性

1. setup 函数可以返回属性，也可以返回 render 函数

## 打包

1. 全量打包
2. 组件打包

## rollup

1. 解析 vue `npm i rollup-plugin-vue -D`
2. 解析 ts `npm i rollup-plugin-typescript2 -D`
3. 解析 tsx `npm i @vitejs/plugin-vue-jsx -D`
4. 全量打包的 index.js 文件不需要把组件内容打包进去，把组件当作外部依赖，因为组件单独打包了，全量的使用单个的就好。
5. `rollup-plugin-typescript2` 的 tsconfigOverride 属性，如果是数组，值会合并。

## gulp

1. 配置文件使用 ts 时要安装 ts-node
2. ts 文件使用 import 语句，把 tsconfig.json 的 module 去掉

## less

1. 使用 less.js 手动编译
2. less 文件内的相对路径可以 Less.Options 配置的 paths 解决，当前 paths 的值是编译文件的路径
3. npm install -D less-plugin-clean-css 压缩

## npm

1. npm publish 发布
2. npm login 登录, 登录的是 npm 官网
3. 发布带有@的包即是，scoped
   1. 在 npm 上创建一个 org
   2. 发布时 npm publish --access public.

## typescript

1. 生成声明文件 `tsconfig.json` 配置 `"declaration": true`
2. 声明文件按目录生成需要在`tsconfig.json`配置`"outDir": "lib", "declarationDir": "lib",`，且 rollup 的 ts 插件中加上`useTsconfigDeclarationDir: true,`
