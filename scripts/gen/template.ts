export function getDocsTemplate(compName: string): string {
  return `# ${compName}

## 描述

关于组件的描述

## 样例

### 样例 1

### 样例 2

## API

| 名称   | 说明   | 类型   | 默认值 | 备注 |
| ------ | ------ | ------ | ------ | ---- |
| 属性 1 | 属性 1 | string | string | -    |
`
}

function firstUpper(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

export function getIndexTemplate(componentName: string): string {
  const compName = firstUpper(componentName)
  return `import Ixs${compName} from './src/${compName}'
import type { App } from 'vue'

export { Ixs${compName} }

export default (app: App) => {
  app.component(Ixs${compName}.name, Ixs${compName})
}
`
}

export function getComponentTemplate(componentName: string): string {
  const compName = firstUpper(componentName)
  return `import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Ixs${compName}',
  setup() {
    return () => <p>idux service</p>
  },
})
`
}
