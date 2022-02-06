import { copyFile, readdirSync } from "fs-extra";
import { TaskFunction } from "gulp";
import { dirname, join } from "path";
import { OutputOptions, rollup } from "rollup";
import { componentsRootDir, outRootDir, utilsRootDir } from "../Config";
import { isDirectory } from "./helper";
import { createRollupConfig } from "./rollup.config";

async function compileJs(inputFile: string, outputFile: string, packageName: string) {
  const { output, ...input } = createRollupConfig(inputFile, outputFile, packageName);
  const bundle = await rollup(input);
  bundle.write(output as OutputOptions);
}

/**
 * 全量JS构建
 */
export const indexBuild: TaskFunction = async (done) => {
  const input = `${componentsRootDir}/index.ts`;
  const output = `${outRootDir}/components/index.js`
  await compileJs(input, output, 'components');
  done();
}

/**
 * 逐个构建组件
 */
export const componentsBuild: TaskFunction =async (done) => {
  const unComponentDir = ['style']; // 不是组件目录的
  const paths = readdirSync(componentsRootDir);
  const componentDirs = paths.filter(path => isDirectory(join(componentsRootDir, path)) && !unComponentDir.includes(path));

  const compileJses = componentDirs.map((componentDir) => {
    const input = join(componentsRootDir, componentDir, 'index.ts');
    const output = join(outRootDir, 'components', componentDir, 'index.js');
    return compileJs(input, output, 'components');
  })
  await Promise.all(compileJses);
  done();
}

/**
 * 构建utils
 */
 export const utilsBuild: TaskFunction =async (done) => {
  const input = `${utilsRootDir}/index.ts`;
  const output = `${outRootDir}/utils/index.js`
  await compileJs(input, output, 'utils');
  done();
}

/**
 * 复制文件
 */
 export const copyPackageJson: TaskFunction =async (done) => {
  await copyFile(join(componentsRootDir, 'package.json'), join(outRootDir, 'components/package.json'));
  await copyFile(join(utilsRootDir, 'package.json'), join(outRootDir, 'utils/package.json'));
  done();
}

