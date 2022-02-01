import less from 'less';
// @ts-ignore
import LessPluginCleanCSS from 'less-plugin-clean-css';
import { TaskFunction } from 'gulp';
import { join } from 'path';
import { ensureDirSync, readdirSync, readFileSync, writeFileSync } from 'fs-extra'

import { componentsRootDir, outRootDir } from '../Config';
import { isDirectory } from './helper';

async function compileLess(lessContent: string, savePath: string, rootPath: string, min?: boolean) {
  const lessOptions: Less.Options = {
    paths: [rootPath] // 当前编译文件的路径
  }
  if (min) {
    lessOptions.plugins = [
      new LessPluginCleanCSS({ advanced: true }) 
    ]
  }
  return less.render(lessContent, lessOptions).then(({ css }) => {
    writeFileSync(savePath, css)
  });
}

/**
 * 全量构建CSS
 */
export const indexBuildStyle: TaskFunction = async (done) => {
  const lessContent = readFileSync(join(componentsRootDir, 'default.less'), {
    encoding: 'utf8'
  });
  const savePath = outRootDir;
  const rootPath = componentsRootDir;
  await Promise.all([
    compileLess(lessContent, join(savePath, 'index.css'), rootPath),
    compileLess(lessContent, join(savePath, 'index.min.css'), rootPath, true),
  ]);
  done();
}

/**
 * 逐个构建组件CSS
 */
 export const componentsBuildStyle: TaskFunction = async (done) => {
  const unComponentDir = ['style']; // 不是组件目录的
  const paths = readdirSync(componentsRootDir);
  const componentDirs = paths.filter(path => isDirectory(join(componentsRootDir, path)) && !unComponentDir.includes(path));

  const compileLesses = componentDirs.map((componentDir) => {
    const lessContent = readFileSync(join(componentsRootDir, componentDir, 'style/index.less'), {
      encoding: 'utf8'
    });
    const savePath = join(outRootDir, componentDir, 'style');
    const rootPath = join(componentsRootDir, componentDir, 'style');
    ensureDirSync(savePath);
    return compileLess(lessContent, join(savePath, 'index.css'), rootPath);
  })
  await Promise.all(compileLesses);
  done();
}