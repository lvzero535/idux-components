import { existsSync, removeSync, statSync } from 'fs-extra'
import { TaskFunction } from 'gulp'
import { outRootDir } from '../Config'

function cleanDir() {
  if (existsSync(outRootDir)) {
    console.log('clean dir ==>', outRootDir)
    removeSync(outRootDir)
  }
}

// 判断是否是目录
export function isDirectory(path: string) {
  return statSync(path).isDirectory()
}

export const beforeStart: TaskFunction = done => {
  cleanDir()
  done()
}
