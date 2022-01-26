import { readdirSync } from "fs-extra";
import { TaskFunction } from "gulp";
import { join } from "path";
import { OutputOptions, rollup } from "rollup";
import { componentsRootDir, outRootDir } from "../Config";
import { isDirectory } from "./helper";
import { createRollupConfig } from "./rollup.config";

async function compileJs(inputFile: string, outputFile: string) {
  const { output, ...input } = createRollupConfig(inputFile, outputFile);
  const bundle = await rollup(input);
  bundle.write(output as OutputOptions);
}

/**
 * 全量JS构建
 */
export const indexBuild: TaskFunction = async (done) => {
  const input = `${componentsRootDir}/index.ts`;
  const output = `${outRootDir}/index.js`
  await compileJs(input, output);
  done();
}

/**
 * 逐个构建组件
 */
export const componentsBuild: TaskFunction =async (done) => {
  const unComponentDir = ['style']; // 不是组件目录的
  const paths = readdirSync(componentsRootDir);
  const componentDirs = paths.filter(path => isDirectory(join(componentsRootDir, path)) && !unComponentDir.includes(path));

  const compileJss = componentDirs.map((componentDir) => {
    const input = join(componentsRootDir, componentDir, 'index.ts');
    const output = join(outRootDir, componentDir, 'index.js');
    return compileJs(input, output);
  })
  await Promise.all(compileJss);
  done();
}