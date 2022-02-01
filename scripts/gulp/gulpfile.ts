import { parallel, series, task } from 'gulp'
import { beforeStart } from './helper'
import { componentsBuild, indexBuild } from './jsBuild'
import { componentsBuildStyle, indexBuildStyle } from './less'


task('style', parallel(indexBuildStyle, componentsBuildStyle))
task('components', series(componentsBuild))
task('index', series(componentsBuild))
task('build', parallel(indexBuild, componentsBuild));