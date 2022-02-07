import IsButton from './src/Button'
import type { App } from 'vue'

export { IsButton }

export default (app: App) => {
  console.log(IsButton)
  app.component(IsButton.name, IsButton)
}
