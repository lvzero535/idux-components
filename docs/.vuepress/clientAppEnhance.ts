import { defineClientAppEnhance } from '@vuepress/client'
import '@idux/components/default.min.css'
import '@idux/pro/default.min.css'
import '../../packages/components/default.less'
import IxsComponents from '../../packages/components'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  console.log('===>', siteData)
  // import('../../packages/components').then(IxsComponents => {
  //   console.log('IxsComponents===>', IxsComponents)
  //   app.use(IxsComponents.default)
  // })
  app.use(IxsComponents)
})
