# 记录

1. vue 工具
   `npm install --save-dev @vue/test-utils@next`
   `npm install --save-dev @vue/vue3-jest`
   [vue3-test-utils](https://test-utils.vuejs.org/installation/)

2. jest
   `npm install --save-dev jest`
   `npm install --save-dev babel-jest @babel/preset-env @babel/preset-typescript @vue/babel-plugin-jsx`

3. 由于`@idux|lodash-es`也需要转换，不然后报错`SyntaxError: Cannot use import statement outside a module`
   加上`transformIgnorePatterns: ['node_modules/(?!(@idux|lodash-es)/)'],`
