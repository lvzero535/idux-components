import type { App } from "vue";
import { IsButton } from "@sdv/components/button";
import { IsInput } from "@sdv/components/input";
import { IsSelect } from "@sdv/components/select";

const components = [
  IsButton, IsInput, IsSelect
]

export default (app: App) => {
  components.forEach((component) => app.component(component.name, component))
}