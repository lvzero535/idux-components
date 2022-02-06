import { join } from "path";

/**
 * 项目根据目录
 */
export const projectRoot = join(__dirname, '..')

/**
 * 组件根据目录
 */
export const componentsRootDir = join(projectRoot, './packages/components')

/**
 * 工具根据目录
 */
 export const utilsRootDir = join(projectRoot, './packages/utils')

/**
 * 输出文件的根目录
 */
export const outRootDir = join(projectRoot, './lib')