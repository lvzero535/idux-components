import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { IduxResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@lvdavis': resolve(__dirname, './packages'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [IduxResolver()],
      // 可以通过指定 `importStyle` 来按需加载 css 代码
      // 别忘了移除掉 idux.ts 中的样式导入代码
      // resolvers: [IduxResolver({ importStyle: 'css' })],
    }),
  ],
})
