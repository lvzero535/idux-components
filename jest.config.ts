import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  roots: ['<rootDir>/packages/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(@idux|lodash-es)/)'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: ['@vue/babel-plugin-jsx'],
      },
    ],
  },
}
export default config
