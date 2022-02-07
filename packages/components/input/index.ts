import IsInput from './src/Input'
import type { App } from 'vue'

export { IsInput }

export default (app: App) => {
  console.log(IsInput)
  app.component(IsInput.name, IsInput)
}
