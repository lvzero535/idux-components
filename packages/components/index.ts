import type { App } from "vue";
import { IsButton } from "./button";
import { IsInput } from "./input";
import { IsSelect } from "./select";

const components = [
  IsButton, IsInput, IsSelect
]

export default (app: App) => {
  components.forEach((component) => app.component(component.name, component))
}