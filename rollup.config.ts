import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default {
  input: './packages/components/index.ts',
  external: ['vue', /@idux/],
  output: {
    file: './lib/index.js',
    format: 'es',
    globals: {
      vue: 'Vue'
    },
  },
  plugins: [
    vue(),
    ts(),
    vueJsx()
  ]
}