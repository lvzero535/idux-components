import type { App } from 'vue'
import { IxsButton } from '@ixsu/components/button'
import { IxsInput } from '@ixsu/components/input'
import { IxsSelect } from '@ixsu/components/select'

const components = [IxsButton, IxsInput, IxsSelect]

export default (app: App) => {
  components.forEach(component => app.component(component.name, component))
}
