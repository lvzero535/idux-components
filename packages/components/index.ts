import type { App } from "vue";
import { IsButton } from "@lvdavis/components/button";
import { IsInput } from "@lvdavis/components/input";
import { IsSelect } from "@lvdavis/components/select";

const components = [
  IsButton, IsInput, IsSelect
]

export default (app: App) => {
  components.forEach((component) => app.component(component.name, component))
}