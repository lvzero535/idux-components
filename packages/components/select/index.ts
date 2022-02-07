import IxsSelect from './src/Select'
import type { App } from 'vue'

export { IxsSelect }

export default (app: App) => {
  console.log(IxsSelect)
  app.component(IxsSelect.name, IxsSelect)
}
