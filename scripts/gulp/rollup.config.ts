import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
import vueJsx from '@vitejs/plugin-vue-jsx';
import replace from '@rollup/plugin-replace'

const externalDeps = [
  'vue', '@idux', '@sdv'
];

export function createRollupConfig (input: string, file: string, isReplace?: boolean) {
  const external = (id: string) => externalDeps.some((item) => new RegExp(`^${item}`).test(id));
  const plugins = [
    vue(),
    ts({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        include: ['packages/**/*', 'typings/*'],
      }
    }),
    vueJsx()
  ];
  if (isReplace) {
    plugins.push(
      replace({
        values: {
          '@sdv/components': JSON.stringify('.')
        },
      })
    )
  }
  return {
    input,
    external,
    plugins,
    output: {
      file,
      format: 'esm',
      globals: {
        vue: 'Vue'
      }
    }
  }
}