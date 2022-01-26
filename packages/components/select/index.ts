import IsSelect from './src/Select';
import type { App } from 'vue'


export { IsSelect }

export default (app: App) => {
  console.log(IsSelect)
  app.component(IsSelect.name, IsSelect);
}