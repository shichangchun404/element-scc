import path from 'path'
import { copyFile } from 'fs/promises'
import { series, parallel} from 'gulp'

import { run } from './utils'
import { projectRoot, sccOutput, sccPackage } from './utils/path'
import { buildModules } from './utils/rollup'

const withTaskName = (name,fn) => Object.assign(fn, {displayName:name})
export const copyFiles = () => {
  return Promise.all([
    copyFile(sccPackage, path.join(sccOutput, 'package.json')),
    copyFile(
      path.resolve(projectRoot, 'README.md'),
      path.resolve(sccOutput, 'README.md')
    ),
    // copyFile(
    //   path.resolve(projRoot, 'global.d.ts'),
    //   path.resolve(epOutput, 'global.d.ts')
    // ),
  ])
}
  
export default series(
  withTaskName('clear: dist', async ()=> run('rm -rf ./dist')),
  withTaskName('build: theme-chalk', async ()=> run('pnpm run  --filter "./packages/theme-chalk" --parallel build ')),
  withTaskName('build: packages', buildModules),
  parallel(copyFiles)
)