import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'Idux Service Components',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.svg',
    repo: 'https://github.com/lvzero535/idux-components',
    navbar: [
      // NavbarItem
      {
        text: '组件',
        link: '/components/',
      },
      // NavbarGroup
      {
        text: 'Utils',
        link: '/utils/',
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Button',
          link: '/components/button',
        },
        {
          text: 'Input',
          link: '/components/input',
        },
        {
          text: 'Select',
          link: '/components/select',
        },
      ],
      '/utils/': [
        {
          text: 'I18nNext',
          link: '/utils/i18n-next',
        },
        {
          text: 'Validate',
          link: '/utils/validate',
        },
      ],
    },
  },
  bundlerConfig: {
    evergreen: true,
    viteOptions: {
      resolve: {
        alias: {
          '@ixsu': resolve(__dirname, '../../packages'),
        },
      },
      plugins: [vueJsx()],
      ssr: {
        external: ['requestAnimationFrame'],
      },
    },
  },
})
