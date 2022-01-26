import less from 'less';
import { TaskFunction } from 'gulp';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs-extra'

import { componentsRootDir, outRootDir } from '../Config';

async function compileLess(lessContent: string) {
  return less.render(lessContent, {
    paths: [componentsRootDir]
  }).then((result) => {
    console.log(result);
    writeFileSync(join(outRootDir, 'default.css'), result.css)
  });
}
export const buildStyle: TaskFunction = async (done) => {
  console.log('buildStyle ==>')
  // const paths = readdirSync(resolve(projectRoot, './packages/components'));
  const lessContent = readFileSync(join(componentsRootDir, 'default.less'), {
    encoding: 'utf8'
  });
  // console.log(lessContent)
  await compileLess(lessContent);
  done();
}