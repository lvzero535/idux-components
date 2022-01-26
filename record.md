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

## gulp

1. 配置文件使用ts时要安装ts-node
2. ts文件使用import语句，把tsconfig.json的module去掉

## less

1. 使用less.js手动编译
2. less文件内的相对路径可以Less.Options配置的paths解决

## npm

1. npm publish 发布
2. npm login登录, 登录的是npm官网

## typescript

1. 生成声明文件 `tsconfig.json` 配置 `"declaration": true`
