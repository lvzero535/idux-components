import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
import vueJsx from '@vitejs/plugin-vue-jsx';

const externalDeps = [
  'vue', '@idux'
];

export function createRollupConfig (input: string, file: string) {
  const external = (id: string) => externalDeps.some((item) => new RegExp(`^${item}`).test(id));
  return {
    input,
    external,
    plugins: [
      vue(),
      ts(),
      vueJsx()
    ],
    output: {
      file,
      format: 'esm',
      globals: {
        vue: 'Vue'
      }
    }
  }
}