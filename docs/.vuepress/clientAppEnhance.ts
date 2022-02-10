import { defineClientAppEnhance } from '@vuepress/client'
import '@idux/components/default.min.css'
import '@idux/pro/default.min.css'
import '../../packages/components/default.less'
export default defineClientAppEnhance(async ({ app }) => {
  if (!__VUEPRESS_SSR__) {
    const IxsComponents = await import('../../packages/components')
    app.use(IxsComponents.default)
  }
})
