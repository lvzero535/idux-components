import { parallel, series, task } from 'gulp'
import { beforeStart } from './helper'
import { componentsBuild, copyPackageJson, indexBuild, utilsBuild } from './jsBuild'
import { componentsBuildStyle, indexBuildStyle } from './less'


task('buildStyle', parallel(indexBuildStyle, componentsBuildStyle))
task('components', series(componentsBuild))
task('index', series(componentsBuild))
task('buildJs', series(parallel(indexBuild, componentsBuild, utilsBuild), copyPackageJson));

task('build', parallel(
  parallel(indexBuildStyle, componentsBuildStyle),
  series(parallel(indexBuild, componentsBuild, utilsBuild), copyPackageJson)
))

// task('build', utilsBuild)