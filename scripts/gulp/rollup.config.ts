import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
import vueJsx from '@vitejs/plugin-vue-jsx';

const externalDeps = [
  'vue', '@idux', '@lvdavis'
];

export function createRollupConfig (input: string, file: string, packageName: string) {
  const external = (id: string) => externalDeps.some((item) => new RegExp(`^${item}`).test(id));
  console.log('packageName ===>', packageName)
  const plugins = [
    vue(),
    ts({
      verbosity: 2,
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declarationDir: 'lib/' + packageName,
        },
        include: ['packages/' + packageName + '/**/*', 'typings/*']
      }
    }),
    vueJsx()
  ];
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