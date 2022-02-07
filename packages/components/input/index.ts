import IxsInput from './src/Input'
import type { App } from 'vue'

export { IxsInput }

export default (app: App) => {
  console.log(IxsInput)
  app.component(IxsInput.name, IxsInput)
}
