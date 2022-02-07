import IxsButton from './src/Button'
import type { App } from 'vue'

export { IxsButton }

export default (app: App) => {
  console.log(IxsButton)
  app.component(IxsButton.name, IxsButton)
}
