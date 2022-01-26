import { parallel, series, task } from 'gulp'
import { beforeStart } from './helper'
import { componentsBuild, indexBuild } from './jsBuild'
import { buildStyle } from './less'


task('style', series(beforeStart, buildStyle))
task('components', series(beforeStart, componentsBuild))
task('index', series(beforeStart, componentsBuild))
task('build', series(beforeStart, parallel(indexBuild, componentsBuild)));