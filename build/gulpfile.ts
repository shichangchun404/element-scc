import { series, parallel} from 'gulp'
import { run } from './utils'

const withTaskName = (name,fn) => Object.assign(fn, {displayName:name})

export default series(
  withTaskName('clear dist', async ()=> run('rm -rf ./dist')),
  withTaskName('buildpackages', async ()=> run('pnpm run  --filter "./packages/**" --parallel build '))
)