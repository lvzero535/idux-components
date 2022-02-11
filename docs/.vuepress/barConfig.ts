import { resolve } from 'path'
import { readdirSync } from 'fs-extra'
import type { SidebarConfig } from '@vuepress/theme-default'

const docsDir = resolve(__dirname, '..')

const sidebars = ['components', 'utils']

function createSidebars(sidebars: string[]) {
  const sidebarsRet: SidebarConfig = {}
  return sidebars.reduce((acc, sidebar) => {
    const mdFiles = readdirSync(resolve(docsDir, sidebar))
    const filters = ['README'] // readme 不需要
    const sidebarMenus = mdFiles
      .filter(mdFile => !filters.some(item => mdFile.includes(item)))
      .map(mdFile => {
        const filename = mdFile.slice(0, mdFile.lastIndexOf('.'))
        return {
          text: filename,
          link: `/${sidebar}/${filename}`,
        }
      })
    acc[`/${sidebar}/`] = sidebarMenus
    return acc
  }, sidebarsRet)
}
export const sidebarMenus = createSidebars(sidebars)
