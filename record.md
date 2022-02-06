# 记录

1. npm create vite@latest
2. 修改src到examples，相关依赖，index.html，tsconfig.json
3. npm install --save @idux/cdk @idux/components @idux/pro
4. 按需加载: npm install -D unplugin-vue-components
5. 使用tsx开发，直接使用@vitejs/plugin-vue-jsx就可以了

## 问题

1. vite的alias要使用path

## Vue3特性

1. setup函数可以返回属性，也可以返回render函数

## 打包

1. 全量打包
2. 组件打包

## rollup

1. 解析vue `npm i rollup-plugin-vue -D`
2. 解析ts `npm i rollup-plugin-typescript2 -D`
3. 解析tsx `npm i @vitejs/plugin-vue-jsx -D`
4. 全量打包的index.js文件不需要把组件内容打包进去，把组件当作外部依赖，因为组件单独打包了，全量的使用单个的就好。
5. `rollup-plugin-typescript2` 的tsconfigOverride属性，如果是数组，值会合并。

## gulp

1. 配置文件使用ts时要安装ts-node
2. ts文件使用import语句，把tsconfig.json的module去掉

## less

1. 使用less.js手动编译
2. less文件内的相对路径可以Less.Options配置的paths解决，当前paths的值是编译文件的路径
3. npm install -D less-plugin-clean-css 压缩

## npm

1. npm publish 发布
2. npm login登录, 登录的是npm官网
3. 发布带有@的包即是，scoped
   1. 在npm上创建一个org
   2. 发布时npm publish --access public.

## typescript

1. 生成声明文件 `tsconfig.json` 配置 `"declaration": true`
2. 声明文件按目录生成需要在`tsconfig.json`配置`"outDir": "lib", "declarationDir": "lib",`，且rollup的ts插件中加上`useTsconfigDeclarationDir: true,`
