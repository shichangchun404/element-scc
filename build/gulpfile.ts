import { series, parallel} from 'gulp'
import { run } from './utils'

const withTashName = (name,fn) => Object.assign(fn, {displayName:name})

export default series(
  withTashName('clear dist', async ()=> run('rm -rf ./dist')),
  withTashName('buildpackages', async ()=> run('pnpm run  --filter "./packages/**" --parallel build '))
)