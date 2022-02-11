import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { componentsDocsDir, componentsRootDir } from '../Config'
import { getDocsTemplate, getIndexTemplate, getComponentTemplate } from './template'

const componentName = process.argv[2]

if (!componentName) {
  throw new Error('please enter `npm run gen componentName`')
}

function createDocsTemplate() {
  const docsTemplateContent = getDocsTemplate(componentName)
  const docsPath = resolve(componentsDocsDir, componentName + '.md')
  writeFileSync(docsPath, docsTemplateContent)
  console.log(docsPath)
}

function createCodeTemplate() {
  const indexDir = resolve(componentsRootDir, componentName)
  ensureDirSync(indexDir)
  const indexPath = resolve(componentsRootDir, componentName, 'index.ts')
  const indexTemplateContent = getIndexTemplate(componentName)
  writeFileSync(indexPath, indexTemplateContent)
  console.log(indexPath)

  const cmpDir = resolve(indexDir, 'src')
  ensureDirSync(cmpDir)
  const cmpPath = resolve(cmpDir, `${componentName}.tsx`)
  const cmpTemplateContent = getComponentTemplate(componentName)
  writeFileSync(cmpPath, cmpTemplateContent)
  console.log(cmpPath)

  const styleDir = resolve(indexDir, 'style')
  ensureDirSync(styleDir)
  const stylePath = resolve(styleDir, 'index.less')
  writeFileSync(stylePath, '')
  console.log(stylePath)
}

createDocsTemplate()
createCodeTemplate()
